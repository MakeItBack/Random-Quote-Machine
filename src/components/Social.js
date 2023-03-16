function Social(props) {
   const styles = {
      height: 40,
      width: 40,
      backgroundColor: props.backgroundColour,
      borderRadius: 4,
      color: "whitesmoke",
      fontSize: 20,
      margin: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 6,
   };
   return (
      <div style={styles}>
         <a id={props.linkId || ""} target="_blank" rel="noreferrer" href={props.socialLink || "#"}>
            {props.socialIcon || "#"}
         </a>
      </div>
   );
}

export default Social;
