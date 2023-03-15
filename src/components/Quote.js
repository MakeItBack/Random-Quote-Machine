function Quote(props) {
   const styles = {
      fontSize: 25,
      fontWeight: 100,
      marginBottom: 20,
      textAlign: "center",
      color: props.backgroundColour,
   };
   const sampleQuote = "You may be disappointed if you fail, but you are doomed if you don’t try.";
   return <div style={styles}>{sampleQuote}</div>;
}

export default Quote;
