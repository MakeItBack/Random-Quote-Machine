function Refresh(props) {
   const styles = {
      height: 40,
      width: 100,
      backgroundColor: props.backgroundColour,
      borderRadius: 4,
      color: "whitesmoke",
      fontSize: 13,
      margin: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   };
   return (
      <div id="new-quote" style={styles}>
         <p>New one!</p>
      </div>
   );
}

export default Refresh;
