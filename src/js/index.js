//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondscounter.jsx";
import Home from "./component/home.jsx";




//render your react application
let tiempoSegundos = 0;
let decenaSeconds = 0;
let centenaSeconds =0;


setInterval(() => {
    tiempoSegundos = tiempoSegundos + 1
    /*tiempoSegundos = tiempoSegundos + 1
    if(tiempoSegundos>9){
        tiempoSegundos=0
        decenaSeconds++
        if(decenaSeconds>5){
            decenaSeconds=0
            centenaSeconds++
        }
    } 
     if(tiempoSegundos%10==0 && tiempoSegundos!=0){
        tiempoSegundos=0
        decenaSeconds++
    }
    if(decenaSeconds%6==0 && decenaSeconds!=0){
        decenaSeconds=0
        centenaSeconds++
    }*/

//Careful when working with switch, don't forget to add default. 
switch(true){
    case tiempoSegundos>9:
        tiempoSegundos=0
        decenaSeconds++
        break;
    case decenaSeconds>5:
        decenaSeconds=0
        centenaSeconds++
        break;
    default:
        break
};


  ReactDOM.render(
    <><Home />
    <SecondsCounter centenaSeconds={centenaSeconds} decenaSeconds={decenaSeconds} seconds={tiempoSegundos} />
    </>,
    document.querySelector("#app")
  );
}, 1000);