function Author(props) {
   const styles = { textAlign: "right", color: props.backgroundColour };
   return (
      <div id="author" style={styles}>
         - {props.author}
      </div>
   );
}

export default Author;
