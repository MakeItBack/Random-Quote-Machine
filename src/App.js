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
const generateQuotes = require("quotes-gen");

function App() {
   const defaultBackground = "saddlebrown";
   const newBackgroundColour = uniqolor.random({ lightness: [30], saturation: [60] }).color;
   const newQuote = generateQuotes();
   const encodedQuote = encodeURI(`"${newQuote[0].quote}" - ${newQuote[0].author}`);
   console.log(encodedQuote);
   console.log(newQuote);
   return (
      <div className="App">
         <main className="App-main" id="quote-box">
            <Quote
               backgroundColour={newBackgroundColour || defaultBackground}
               quote={newQuote[0].quote}
               quoteLeft={<FontAwesomeIcon icon={faQuoteLeft} />}
               quoteRight={<FontAwesomeIcon icon={faQuoteRight} />}
            />
            <Author
               author={newQuote[0].author}
               backgroundColour={newBackgroundColour || defaultBackground}
            />
            <footer className="App-footer">
               <div className="App-social">
                  <Social
                     backgroundColour={newBackgroundColour || defaultBackground}
                     socialLink={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodedQuote}`}
                     //https://twitter.com/intent/tweet?url={url}&text={title}&via={user_id}&hashtags={hash_tags}
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
