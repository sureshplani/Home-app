import { FaPlus,} from "react-icons/fa";
function AddItems({newItem, handleSubmite, setNewItem, }){
    return(
        <form onSubmit={handleSubmite}>
            <input
            type="text"
            placeholder="items"
            autoFocus
            id="addItem"
            value={newItem}
            required
         onChange={(e)=>setNewItem(e.target.value)}
            />
            <button ><FaPlus/></button>
           
        </form>
    )
}
export default AddItems