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

    return (
        <SafeAreaView>
            <ScrollView>
                {upcoming.map((upcoming) => {
                    return (
                        <UpcomingCard key={upcoming.id} upcoming={upcoming} />
                    );
                }
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

export default Upcoming