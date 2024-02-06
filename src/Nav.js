import { Link, useNavigate } from "react-router-dom"


function Nav() {
    const navicate=useNavigate()
    const go = ()=> {
    navicate('/home')
}
return(
    <div>
    <nav style={{padding:"10px",backgroundColor:"red",width:"100%",minWidth:"100%",height:"10%" }}>

   <button style={{padding:"5px",backgroundColor:"red",borderRadius:"10px"
,border:"solid red",font:"10px"} } onClick={go} >Home</button>

   <button  style={{padding:"5px",backgroundColor:"red",borderRadius:"10px"
,border:"solid red",font:"10px"} } ><Link to={"/contect"}>Contect</Link></button>

  <button  style={{padding:"5px",backgroundColor:"red",borderRadius:"10px"
,border:"solid red",font:"10px"} } ><Link to={"/download"}>Download</Link></button>

  <button  style={{padding:"5px",backgroundColor:"red",borderRadius:"10px"
,border:"solid red",font:"10px"} } ><Link to={"/list"}>LInk</Link></button>
    </nav>
  </div>
)
}
export default Nav