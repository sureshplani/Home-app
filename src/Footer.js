function Footer({length}){
    return(
    <footer style={{backgroundColor:"black",padding:"2px",color:"white"}}>
<p>{length===1? "list item":"list items"} of length {length}</p>
   <p>CopyRight &copy;</p>

    </footer>
    )
}
export default Footer