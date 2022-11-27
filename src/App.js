import React from "react";
import "./style.css";
import Body from './body.js';
const name = 'harmony';
 
const heading = (
  <div class="nav">
     <div class="app-title"> SportsFans </div>
     <div class="r-bar">
     <p class="user-snip">Hi {name} </p>  
     <img class="user-thumb" src="https://lh3.googleusercontent.com/a/ALm5wu1bfIw1CEig_VFMfHKHZ0-9J3LQQN8wvy6Cev9I=s96-c-rg-br100" />
       </div>
  </div>
);

export default function App() {
  return (
    <div>
      {heading}
      <div class="app-body">
     
      <Body />
      </div>
    </div>
  );
}
