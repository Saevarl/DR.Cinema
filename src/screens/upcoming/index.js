import React, { useEffect, useState, useLayoutEffect } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcoming, selectUpcoming} from "../../features/upcomingSlice";
import { selectToken } from "../../features/authenticationSlice";


const Upcoming = () => {
    const upcoming = useSelector(selectUpcoming);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const token = useSelector(selectToken);

    useEffect(() => {
        console.log('UPCOMING', upcoming)
        dispatch(fetchUpcoming(token));
    }, []);
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Upcoming</Text>
                {/* {upcoming.map((movie) => {
                    return (
                        <View key={movie.id}>
                            <Text>{movie.title}</Text>
                        </View>
                    );
                }
                )} */}
            </ScrollView>
        </SafeAreaView>
    );
}

export default Upcoming