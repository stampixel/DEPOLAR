import "./App.css";
import Home from "./pages/home"
import Pricing from "./pages/pricing";
import Resources from "./pages/resources";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/landing" element={<Pricing/>}></Route>
                    <Route path="/resources" element={<Resources/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
