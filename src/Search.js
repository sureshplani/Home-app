
function Search({search,setSearch }){
    return(
        <form onSubmit={(e) => e.preventDefault}>
          
            <input
             value={search}
            id="search"
            type="text"
            role="searchbox"
            placeholder="search items"
            onChange={(e)=>setSearch(e.target.value)}
             />
           
        </form>
    )
}
export default Search