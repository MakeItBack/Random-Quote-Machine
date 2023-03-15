function Author(props) {
   const styles = { textAlign: "right", color: props.backgroundColour };
   const sampleAuthor = "Beverley Sills";
   return <div style={styles}>- {sampleAuthor}</div>;
}

export default Author;
