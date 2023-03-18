function Quote(props) {
   const styles = {
      fontSize: 25,
      fontWeight: 100,
      marginBottom: 20,
      textAlign: "center",
      color: props.backgroundColour,
   };
   return (
      <div id="text" style={styles}>
         {props.quoteLeft}
         {props.quote}
         {props.quoteRight}
      </div>
   );
}

export default Quote;
