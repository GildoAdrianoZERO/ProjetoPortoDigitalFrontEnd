import {Routes, Route} from "react-router-dom";
import Main from "./pages/main/index"
import About from "./pages/About/index"
import Singin from "./pages/Singin/index"
import Singup from "./pages/Singup/index"

import Hearder from "./components/header/Header/index"

export default function Router(){
    return (
        <>
        <Hearder/>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/singin" element={<Singin/>}/>
            <Route path="/singup" element={<Singup/>}/>
        </Routes>
        </>
    );
}
