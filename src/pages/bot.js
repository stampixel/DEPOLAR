import {useState, useEffect} from "react";
import useChat from "../hooks/useChat";
import axios from "axios";

export default function Bot() {
    const [data, setData] = useState("");
    const {sendData} = useChat()


    return (
        <div className='App' className='bg-dark h-screen font-syne'>
            <div className="h-96 flex items-center justify-center">
                <div className="mx-2 text-center">
                    <h1 className="title" className='text-white font-bold text-4xl xs:text-5xl md:text-6xl'>Log In</h1>
                    <h2 className="subtitle"
                        className='text-white font-regular text-1xl xs:text-2xl md:text-3xl leading-tight flex w-1/2 mx-1/2'>
                        Please enter your username for Just Sing below
                    </h2>
                </div>
            </div>
            <div className="relative mb-4 flex w-full flex-wrap items-stretch mr-40 ml-40 mb-56	">
                <input
                    className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto p-4 text-sm text-gray border border-gray rounded-lg bg-white focus:ring-blurple focus:border-blurple"
                    required
                    value={data} onChange={(e) => setData(e.target.value)}/>
                <button
                    className="relative z-[2] flex items-center rounded-r bg-blurple px-6 py-2.5 text-xs font-bold uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    onClick={()=>sendData(data)}>Submit
                </button>
            </div>
        </div>
    )
}

