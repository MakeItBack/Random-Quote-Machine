function Author(props) {
   const styles = { textAlign: "right", color: props.backgroundColour };
   const sampleAuthor = "Beverley Sills";
   return (
      <div id="author" style={styles}>
         - {props.author || sampleAuthor}
      </div>
   );
}

export default Author;
