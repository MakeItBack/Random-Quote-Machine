import React from "react";
import "./App.css";
import Quote from "./components/Quote";
import Author from "./components/Author";
import Social from "./components/Social";
import Refresh from "./components/Refresh";
import uniqolor from "uniqolor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function App() {
   const defaultBackground = "saddlebrown";
   const newBackgroundColour = uniqolor.random({ lightness: [30], saturation: [60] }).color;
   return (
      <div className="App">
         <main className="App-main" id="quote-box">
            <Quote
               backgroundColour={newBackgroundColour || defaultBackground}
               quoteLeft={<FontAwesomeIcon icon={faQuoteLeft} />}
               quoteRight={<FontAwesomeIcon icon={faQuoteRight} />}
            />
            <Author backgroundColour={newBackgroundColour || defaultBackground} />
            <footer className="App-footer">
               <div className="App-social">
                  <Social
                     backgroundColour={newBackgroundColour || defaultBackground}
                     socialLink="twitter.com/intent/tweet"
                     socialIcon={<FontAwesomeIcon icon={faTwitter} className="App-social" />}
                     linkId="tweet-quote"
                  />
                  <Social
                     backgroundColour={newBackgroundColour || defaultBackground}
                     socialLink="https://random-quote-machine.freecodecamp.rocks/"
                     socialIcon={<FontAwesomeIcon icon={faLinkedinIn} className="App-social" />}
                  />
               </div>
               <Refresh backgroundColour={newBackgroundColour || defaultBackground} />
            </footer>
         </main>
      </div>
   );
}

export default App;
