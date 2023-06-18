import {useState, useEffect} from "react";
import useChat from "../hooks/useChat";
import axios from "axios";
import {render} from "@testing-library/react";

export default function Bot() {
    const [data, setData] = useState("");
    const {sendData, response} = useChat()
    // useEffect(()=>{console.log(response)},[response])




    return (
        <div className='App' className={"bg-blend-darken h-full w-full font-['Poppins']"}>
            <div className="flex flex-row w-full h-screen bg-bot-color">
                <div id={"left"} className={"w-1/4 h-full"}>

                </div>
                <div id={"right"} className={"w-full h-full"}>
                    <div className={"flex flex-col h-full w-full"}>
                        <div className={"flex flex-row chat-color h-full w-full"}>
                            <div className={"bg-chat-color h-5/6 w-5/6 mx-auto my-auto rounded-lg"}>
                                <div className={""}>
                                    <div>{response? response.map((item, index) =>
                               <div key={index}>{item}</div>
                             ):''}</div>


                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-row justify-center"}>
                            <input
                                className={"w-5/6"}
                                required
                                value={data} onChange={(e) => setData(e.target.value)}/>
                            <button
                                className=""
                                onClick={() => sendData(data)}>Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

