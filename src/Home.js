import { useState } from "react";
import Nav from "./Nav";

const users = [
    { firstName: "John", id: 1 },
    { firstName: "Emily", id: 2 },
    { firstName: "Michael", id: 3 },
    { firstName: "Sarah", id: 4 },
    { firstName: "David", id: 5 },
    { firstName: "Jessica", id: 6 },
    { firstName: "Daniel", id: 7 },
    { firstName: "Olivia", id: 8 },
    { firstName: "Matthew", id: 9 },
    { firstName: "Sophia", id: 10 }
  ]
function Home(){
    const [searchItem, setSearchItem] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(users)
  
    const handleInputChange = (e) => { 
      const search = e.target.value;
      setSearchItem(search)
  
      const filteredItems = users.filter((user) =>
      user.firstName.toLowerCase().includes(search.toLowerCase())
      );
  
      setFilteredUsers(filteredItems);
    }
    return (
        <>
        <div>
            <Nav/>
        </div>
          <input
            type="text"
            value={searchItem}
            onChange={handleInputChange}
            placeholder='Type to search'
          />
          <ul>
            {filteredUsers.slice(0, 5).map(user => <li key={user.id}>{user.firstName}</li>)}
          </ul>
         
          <div>
     
          </div>
    
        </>
      )
}
export default Home