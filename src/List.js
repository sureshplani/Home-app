
import Nav from "./Nav"

import './list.css'
import ListItems from "./ListItems";


function List({list,handleClick,handleDelete}){
   
    return(
        <div>
            <div><Nav/></div>

            <h3>My List</h3>

      {    (list.length) ?
                 <ListItems 
                   list={list}
                   handleClick={handleClick}
                   handleDelete={handleDelete}/> :
                    <p>The List Is Emty</p>}    

        </div>
    )
}
export default List
// const num=[1,2,3,4,5] 
// const check=num.filter(n => n<=4 ).map(n => ({number:n}))
// console.log(check)