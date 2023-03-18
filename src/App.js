import React from "react";
import "./App.css";
import Quote from "./components/Quote";
import Author from "./components/Author";
import Social from "./components/Social";
import Refresh from "./components/Refresh";
import uniqolor from "uniqolor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faReddit } from "@fortawesome/free-brands-svg-icons";
const generateQuotes = require("quotes-gen");

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         quote: "",
         author: "",
         backgroundColour: "black",
      };
      this.getQuote = this.getQuote.bind(this);
   }
   getQuote() {
      const newQuote = generateQuotes();
      const newBackgroundColour = uniqolor.random({ lightness: [30], saturation: [60] });
      this.setState({
         quote: newQuote[0].quote,
         author: newQuote[0].author,
         backgroundColour: newBackgroundColour.color,
      });
   }
   render() {
      if (this.state.quote === "") {
         this.getQuote();
      }
      const encodedQuote = encodeURI(`"${this.state.quote}" - ${this.state.author}`);
      console.log(this.state.quote, this.state.author);
      return (
         <div className="App">
            <main className="App-main" id="quote-box">
               <Quote
                  backgroundColour={this.state.backgroundColour}
                  quote={this.state.quote}
                  quoteLeft={<FontAwesomeIcon icon={faQuoteLeft} />}
                  quoteRight={<FontAwesomeIcon icon={faQuoteRight} />}
               />
               <Author author={this.state.author} backgroundColour={this.state.backgroundColour} />
               <footer className="App-footer">
                  <div className="App-social">
                     <Social
                        backgroundColour={this.state.backgroundColour}
                        socialLink={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodedQuote}`}
                        socialIcon={<FontAwesomeIcon icon={faTwitter} className="App-social" />}
                        linkId="tweet-quote"
                     />
                     <Social
                        backgroundColour={this.state.backgroundColour}
                        socialLink={`https://reddit.com/submit?title=Quote%20of%20the%20Day%21&text=${encodedQuote}`}
                        socialIcon={<FontAwesomeIcon icon={faReddit} className="App-social" />}
                     />
                  </div>
                  <Refresh
                     backgroundColour={this.state.backgroundColour}
                     newQuote={this.getQuote}
                  />
               </footer>
            </main>
         </div>
      );
   }
}

export default App;
