import { useState } from "react";
import Nav from "./Nav";
function Contect(){
   const [name,setName]=useState("go")
  // const nameChange=() =>{
  //   const name=["contect","call","gmail"]
  //    const int =Math.floor(Math.random()*3)

  //    return name[int]
  // }
  const handleClick = ()=>{
    const names=["contect","call","gmail"]
    const int =Math.floor(Math.random()*3)

    setName(names[int])
  }
   return(
        <div>
      <Nav/>
      <>{name}  &copy;</>
      <div><button onClick={handleClick}>Change</button></div>
    </div>)
}
export default Contect