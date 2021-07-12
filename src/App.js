import React from "react";
import './App.css';
import axios from "axios";

import UserForm from "./components/UserForm";


export default function App () { 
axios.get(`https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_std.cgi?ico=27074358`) 
.then(function (response) {
  console.log(response);
})
.catch(function (error)
{
  console.log(error);
 })

 .then(function () {

 });
 
  return (
  <div className="App">
    <header className="App-header"> 
    <h1 className="App-title">HTTP Calls in React</h1>
    </header> 
    <UserForm/>
    <footer className="App-footer">
      This project is created by {" "}
      <a href="https://www.katiekovacova.co.uk/"
      target="_blank"
      rel="noreferrer">
      Katka Kovac</a> and is {" "}  
    
      <a 
      href="https://github.com/KatieCode-6/my-app" 
      target="_blank"
      rel="noreferrer"
      >open sourced.</a> 
    </footer>
  </div>
  );

  }