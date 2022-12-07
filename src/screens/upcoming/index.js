import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { authenticate, selectToken } from "../../features/authenticationSlice";
import { fetchUpcoming, selectUpcoming } from "../../features/upcomingSlice";
import { USERNAME, PASSWORD } from '@env';
import axios from "axios";

export default function Upcoming() {
    const upcoming = useSelector(selectUpcoming);
    let [isLoading, setLoading] = useState(true);
    let [error, setError] = useState();
    //let [upcoming, setUpcoming] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUpcoming());
    }, []);

    console.log('UPCOMING',upcoming)
    return (
        <View>
            <Text>Upcoming</Text>
            {/* {upcoming.map((movie) => {
                return (
                    <View>
                        <Text>{movie.title}</Text>
                        <Text>{movie.overview}</Text>
                    </View>
                );
            }
            )} */}
        </View>
    );
}