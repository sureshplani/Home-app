import { AiFillCloseSquare } from "react-icons/ai";
function ListItems({list,handleClick,handleDelete}){
    return(
<ul> 
    { list.map(list =>
  <li className="list" key={list.id} > 
   <input type="checkbox" checked={list.checked} onChange={()=> handleClick(list.id)} />
   <label style={(list.checked) ? {textDecoration:"line-through"}:null }
    onDoubleClick={()=> handleClick(list.id)}> {list.name} </label>
<AiFillCloseSquare role="button" tabIndex="0" onClick={() =>handleDelete(list.id)}/>
 </li>)}
 </ul>
    )
}
export default ListItems