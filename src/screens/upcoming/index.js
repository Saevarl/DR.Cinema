import React, { useEffect, useState, useLayoutEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcoming, selectUpcoming} from "../../features/upcomingSlice";
import { selectToken, authenticate } from "../../features/authenticationSlice";
import UpcomingCard from "../../components/upcomingCard";
import { USERNAME, PASSWORD } from '@env';
import styles from "./styles";


const Upcoming = () => {
    const dispatch = useDispatch();
    const accessToken = useSelector(selectToken);
    const navigation = useNavigation();
    const upcoming = useSelector(selectUpcoming);

    const releaseDate = upcoming.map((upcoming) => {
        return upcoming['release-dateIS'];
    });

    useEffect(() => {
        if (upcoming === []){
        const credetials = {
            username: `${USERNAME}`,
            password: `${PASSWORD}`,
        };
        dispatch(authenticate(credetials));
        }
    }, []);

    useEffect(() => {
        if (accessToken) {
            dispatch(fetchUpcoming(accessToken));
        }
    }, [accessToken]);

    const sortedByDate = [];

    for (var i in upcoming){
        sortedByDate.push(upcoming[i]);
    }

    sortedByDate.sort(function(x, y) {
        var xData = new Date(x['release-dateIS']);
        var yData = new Date(y['release-dateIS']);

        if (xData < yData) {return -1;}
        else if (xData > yData) {return 1;}
        else {return 0;}
    });
    const u = upcoming.map((upcoming) => {
        return upcoming['release-dateIS'];
    })
    const s = sortedByDate.map((sort) => {
        return sort['release-dateIS'];
    })
    console.log('Unsorted dates',u);
    console.log('Sorted dates', s);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {sortedByDate.map((sortedByDate) => {
                    return (
                        <UpcomingCard key={sortedByDate.id} upcoming={sortedByDate} />
                    );
                }
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

export default Upcoming