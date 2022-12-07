import React from "react";
import { authenticate, selectToken } from "./authenticationSlice";
import { useSelector } from "react-redux";

export default function authHeader() {
    const accessToken = useSelector(selectToken)


    if (accessToken) {
        return { 'x-access-token': accessToken };
    } else {
        return {};
    }
}