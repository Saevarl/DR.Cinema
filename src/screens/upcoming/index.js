import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { USERNAME, PASSWORD } from "@env";
import { authenticate, selectToken } from "../../features/authenticationSlice";

export default function Upcoming() {
    let [isLoading, setLoading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState();

    useEffect(() => {
            const credentials = {
                username: `${USERNAME}`,
                password: `${PASSWORD}`
            }
            console.log("CREDENTIALS", credentials)
            dispatch(authenticate(credentials))

        fetch("https://api.kvikmyndir.is/upcoming")
            .then((response) => response.json())
            .then((json) => {
                setResponse(json)
                setLoading(false)},
                (error) => {
                    setLoading(false);
                    setError(error);
                })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    const getContent = () => {
        if (isLoading) {
            return <ActivityIndicator />;
        }
        console.log("RESPONSE", response)
        return ( <Text>API Called</Text>);
    };

    return (
        <View style={styles.container}>
            {getContent()}
        <Text>Upcoming</Text>
        </View>
    );
}