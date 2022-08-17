import React from "react";

import  ReactDOM  from "react-dom";

import Card from "./Cards";

 import "./index.css";








ReactDOM.render(

    <>

    <h1 className="h_s">List of top 5 Netflix Series in 2020</h1>
        < Card imgsrc = "abcd.jpg"
        title = "A Netflix Original Series" 
         sname = "Dark"   
         link = "https://www.justwatch.com/us/tv-show/dark/season-1"
        />
        < Card imgsrc = "e-c.jpg"
        title = "A Netflix Original Series" 
         sname = "Extra Curricular"   
         link = "https://www.justwatch.com/us/search?q=Extra%20Curricular"

         />
        < Card
         imgsrc = "s-t.jpg"
        title = "A Netflix Original Series" 
         sname = "Stranger Things"   
         link = "https://www.justwatch.com/us/search?q=Stranger%20Things"
        />
        < Card
         imgsrc = "vd.jpg"
        title = "A Netflix Original Series" 
         sname = "The Vampire Diaries"   
         link = "https://www.netflix.com/in/title/70143860"
        />
        < Card
         imgsrc = "myy.jpg"
        title = "A Netflix Original Series" 
         sname = "My First First Love"   
         link = "https://www.netflix.com/in/title/81026700"
        />
    </>,

 document.getElementById('root')

);






























