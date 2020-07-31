import React from 'react';
import './App.css';

function Manual () {
  return (
    <div>
        <h1>Generate Your Own Caption</h1>
        <section>
          <p id="text">
          You are expected to attend _______ on _______ at _______ at the _______. <br></br> Please wear _______ and be respectful to the organizers in charge. <br></br> Remeber, your behavior is a representation of our club and our school. <br></br>
          See you there!
          </p>
          <div>
            <p>Enter an <span id="type">event</span></p>
            <input id="phrases" placeholder="insert a word" type="text"></input>
            <button id="button">confirm</button>
            <button id="tryAgain">try again</button>
          </div>
        </section>
    </div>
  );
}

export default Manual;