import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function useChat() {

    const header= {
        'content-Type': 'application/json'
    }

    async function sendData(data) {
        console.log(data)
        await axios
            .post("/argument", {"content": data}, header)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                alert(error);
            });
    }


    return {
        sendData
    };
}