function Refresh(props) {
   const styles = {
      height: 40,
      width: 100,
      backgroundColor: props.backgroundColour,
      borderRadius: 4,
      color: "white",
      fontSize: 13,
      margin: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   };
   return (
      <div style={styles}>
         <p>Hit me!</p>
      </div>
   );
}

export default Refresh;
