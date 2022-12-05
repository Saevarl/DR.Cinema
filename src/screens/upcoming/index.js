import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { authenticate, selectToken } from "../../features/authenticationSlice";
import $ from "jquery";



export default function Upcoming() {
    const accessToken = useSelector(selectToken)
    let [isLoading, setLoading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState();

    const dispatch = useDispatch();

    console.log("TOKEN", accessToken);
    $.ajax({
        url : 'http://api.kvikmyndir.is/movies?token=' + accessToken,
        type : 'GET',
        dataType : 'json',
        success : function (response) {
            console.log("Response", response);
        }
    });

    useEffect(() => {
        // fetch("https://api.kvikmyndir.is/upcoming")
        //     .then((response) => response.json())
        //     .then((json) => {
        //         setResponse(json)
        //         setLoading(false)},
        //         (error) => {
        //             setLoading(false);
        //             setError(error);
        //         })
        //     .catch((error) => setError(error))
        //     .finally(() => setLoading(false));
    }, []);


    const getContent = () => {
        if (isLoading) {
            return <ActivityIndicator />;
        }
        if(error) {
            return <Text>{error}</Text>;
        }
        console.log("RESPONSE", response);
        return  <Text>Upcoming Movie{response["message"]}</Text>;
    };

    return (
        <View>
            {getContent()}
        </View>
    );
}