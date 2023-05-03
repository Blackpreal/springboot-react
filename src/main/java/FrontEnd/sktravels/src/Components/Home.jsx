import Header from "./Header";
import React from "react";
import "../css/Body.css"
import  Nav  from "../Components/Nav";
import Login_Signup from "./Login_Signup";
import B_left from "./B_left";
import B_right from "./B_right";
import { BrowserRouter } from "react-router-dom";



function Home() {
    return ( 
      <div className="container-fluid">
        <div className="row">
            <div className="col-sm-4">
                <Header/>
            </div>
            <div className="col-sm-4">
                <Nav/>
            </div>
            <div className="col-sm-4">
                <Login_Signup/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6">
               <B_left/>
            </div>
            <div className="col-sm-6">
               <B_right/>
            </div>
        </div>
      </div>
       
     );
}

export default Home;
