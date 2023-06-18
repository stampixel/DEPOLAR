import React, {useState, useEffect} from "react";
import axios from "axios";

export default function useChat() {

    const [response,setResponse] = useState("")

    const header= {
        'content-Type': 'application/json'
    }

    async function sendData(data) {
        console.log(data)
        await axios
            .post("/argument", {"content": data}, header)
            .then(function (response) {
                // console.log(response.data.data);
                // const result = string.replace(/(\r\n|\r|\n)/g, '<br>');
                setResponse(response.data.data.split("\n"));
            })
            .catch(function (error) {
                alert(error);
            });
    }


    return {
        sendData,
        response
    };
}