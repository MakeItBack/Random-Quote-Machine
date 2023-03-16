import React from "react";
import "./App.css";
import Quote from "./components/Quote";
import Author from "./components/Author";
import Social from "./components/Social";
import Refresh from "./components/Refresh";
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
   const defaultBackground = "saddlebrown";
   return (
      <div className="App">
         <main className="App-main">
            <Quote backgroundColour={defaultBackground} />
            <Author backgroundColour={defaultBackground} />
            <footer className="App-footer">
               <div className="App-social">
                  <Social
                     backgroundColour={defaultBackground}
                     socialLink={"https://random-quote-machine.freecodecamp.rocks/"}
                     socialIcon={<FontAwesomeIcon icon={faTwitter} className="App-social" />}
                  />
                  <Social
                     backgroundColour={defaultBackground}
                     socialLink={"https://random-quote-machine.freecodecamp.rocks/"}
                     socialIcon={<FontAwesomeIcon icon={faLinkedinIn} className="App-social" />}
                  />
               </div>
               <Refresh backgroundColour={defaultBackground} />
            </footer>
         </main>
      </div>
   );
}

export default App;
