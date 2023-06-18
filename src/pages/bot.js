import React, {useState, useEffect} from "react";
import useChat from "../hooks/useChat";
import useImage from "../hooks/useImage";
import axios from "axios";
import {render} from "@testing-library/react";

export default function Bot() {
    const [data, setData] = useState("");
    const {sendData, response} = useChat()

    const {handleImageChange, ocr, imageData} = useImage()


    return (
        <div className='App' className={"bg-blend-darken h-full w-full font-['Poppins'] text-white overflow-y-hidden"}>
            <div className="flex flex-row w-full h-screen bg-bot-color">
                <div id={"left"} className={"w-1/4 h-full rounded-lg border-2 border-gray-800 py-8 px-8 space-y-4"}>
                    <div>

                        {/*<input type="file" id="files" className="hidden"/>*/}
                        {/*<label htmlFor="files">Select file</label>*/}

                        <img className={""}
                             src={"/question.png"}
                             alt={"ai example image"}/>
                        <label htmlFor="files" className={""}>
                            <div className={"justify-center bg-chat-color cursor-pointer h-12 w-full my-6 rounded-lg"}>
                                <p className={"pt-3"}>File upload</p></div>
                        </label>
                        <input
                            type="file"
                            name=""
                            id="files"
                            className={"hidden"}
                            onChange={handleImageChange}
                            accept="image/*"
                        />

                    </div>
                    <div className="h-12 overflow-scroll  overflow-x-hidden">
                        <p>{ocr}</p>
                    </div>

                    <div className={"rounded-lg bg-gradient-to-b from-gr7 to-gr8 p-8 space-y-6"}>
                        <img className={"h-64 mx-auto"}
                             src={"/folder.png"}
                             alt={"ai example image"}/>
                        <p>Need advice?</p>
                        <button className={"h-12 w-5/6 bg-black rounded-lg"}>Resources</button>
                    </div>
                    <div className={"space-y-4 w-full"}>
                        <button className={"h-12 w-full bg-fuchsia-400 rounded-lg"}>Upgrade</button>
                        <button className={"h-12 w-full rounded-lg bg-chat-color"}>FAQ</button>
                    </div>
                </div>
                <div id={"right"} className={"w-full h-screen"}>
                    <div className={"flex flex-col h-screen w-full space-y-8 pt-20"}>
                        <div className={"bg-chat-color h-5/6 w-5/6 mx-auto rounded-lg"}>
                            <div className={"text-left p-16 h-full"}>
                                <div
                                    className={"h-full overflow-scroll  overflow-x-hidden space-y-4"}>{response ? response.map((item, index) =>
                                    <p key={index}>{item}</p>
                                ) : ''}</div>
                            </div>
                        </div>
                        <div className={"flex flex-row px-32 space-x-8"}>
                            <input
                                placeholder={"Type in any statement or question you have for some new perspectives."}
                                className={"w-5/6 bg-chat-color rounded-lg h-8 p-5"}
                                required
                                value={data} onChange={(e) => setData(e.target.value)}/>
                            <button
                                className={"bg-fuchsia-400 rounded-lg font-extrabold w-2/12"}
                                onClick={() => sendData(data)}>Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

