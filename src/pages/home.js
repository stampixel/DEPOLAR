import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


export default function Home() {
    return (
        <div className="App" class={"bg-blend-darken h-full w-full font-['Poppins']"}>
            <Navbar/>
            <div id={"main"} className={"flex flex-row w-full h-screen bg-gradient-to-b from-gr1 via-gr2 to-gr3"}>
                <div id={"left"} className={"px-36 w-1/2 text-left"}>
                    <div className={"flex flex-col my-40 space-y-8 text-white"}>
                        <div><h6 className={"font-bold"}>Opinion polarization is poisoning the world.</h6></div>
                        <div>
                            <h1 className={"font-extrabold text-5xl"}>A ChatGPT-3.5 Argument Solver. But <span
                                className={"text-purple-600"}>Better</span>.</h1></div>
                        <div>
                            <p>
                                The rise in social media user ship is directly correlated to the sharp increases in
                                mental
                                health issues seen amongst the general population.
                            </p>
                            <p>
                                Many platforms algorithmically recommend posts that grow more extreme based on a
                                person's
                                activity, leading to heightened social divisions.
                            </p>
                        </div>
                        <button
                            className={"left-0 text-center w-3/12 h-12 bg-fuchsia-400 rounded-lg font-extrabold"}>Chat
                            now!
                        </button>
                    </div>
                </div>
                <div id={"right"} className={"w-1/2"}>
                    <div className={"relative h-full w-full"}>
                        <img className={"absolute inset-y-0 right-0 h-screen "}
                             src={"/bot_page_example.png"}
                             alt={"ai example image"}/>
                    </div>
                </div>
            </div>
            <div
                className={"flex flex-col w-full h-full bg-gradient-to-b from-gr4 via-gr5 to-gr6 p-64 space-y-64 text-white"}>
                <div className={"place-content-center"}>
                    <img className={"mx-auto place-content-center"} src={"/gain_insight.png"} alt={"insight"}/>
                </div>
                <div className={"flex flex-col w-3/5 mx-auto"}>
                    <h1 className={"font-extrabold text-5xl"}>DEPOLAR changes the opinionated.</h1>
                    <p>DEPOLAR pushes away from the limitations of ChatGPT-4, and offers a straightforward, niche
                        approach to <span className={"text-purple-600"}>debates and opinion polarization</span>.</p>
                </div>
                <div className={"flex flex-col w-full h-full text-white p-40 mx-auto space-y-32"}>
                    <div>
                        <img className={""} src={"/credibility.png"}
                             alt={"credibility"}/>
                    </div>
                    <div>
                        <img className={""} src={"/image_processing.png"}
                             alt={"image processing"}/>
                    </div>
                    <div>
                        <img className={""} src={"/the_issue.png"} alt={"the issue"}/>
                    </div>
                </div>
                <div>
                    <h1 className={"font-extrabold text-5xl"}>And it’s all in our data.</h1>
                </div>
            </div>
            <Footer/>

        </div>
    )
}