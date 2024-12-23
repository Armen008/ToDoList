import React from "react";
import "./projects.css"


function Inputs(){
    return(
        <div>
        <p className="p1">Start your journey</p>
        <p className="p2">Sign up to InsideBox</p>
        <div className="e-cont">
            <p className="p3">Email</p>
        </div>
        <input className="textinp" type="text" placeholder="example@mail.ru"></input>
        <input className="passinp" type="password" placeholder="....."></input>
       
        <button className="but1">Sign Up</button>
        <div className="divLine">
        <div className="line"></div><p className="p4">or sign up with</p><div className="line"></div>
        </div>  
         </div>
    )
}
export default Inputs;