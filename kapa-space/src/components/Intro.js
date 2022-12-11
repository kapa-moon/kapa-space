import React from "react";
import "./Intro.css";

function Intro(props) {

    function fadeOut() {
        document.getElementById('intro').className = 'intro fade-out';
    }

    return (
        <div className="intro" id="intro">
            <button className="intro-button" onClick={fadeOut}>X</button>

            <p>Heau fjlksjekla;fjwkljkljfklajdklfjklw;alkejdflfjlksjekla;fjwkljkljfklajdklfjklw;alkejdflfjlksjekla;fjwkljkljfklajdklfjklw;alkejdflfjlksjekla;fjwkljkljfklajdklfjklw;alkejdflfjlksjekla;fjwkljkljfklajdklfjklw;alkejdfl</p>
        </div>
        
    );
    }

export default Intro;