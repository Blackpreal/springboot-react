
import { Route, Router, Routes } from "react-router";
import Home from "../Components/Home";
import LoginPage from "./Login";
import { BrowserRouter } from "react-router-dom";
import Register from "./Register";
   
function Body() {
    return ( 
        <>
        {/* <Home/> */}
        <BrowserRouter>
        <Routes>
        <Route>
            <Route path="/" element={<Home/>} />
            <Route path="login" element={<LoginPage/>} />
            <Route path="register" element={<Register/>} />
        </Route>
        </Routes>
        </BrowserRouter>
        </>
     );
}

export default Body;