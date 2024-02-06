import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contect from './Contect';
import Nav from './Nav';
import Download from './download';
import List from './List';
import { useState } from "react"
import Footer from './Footer';
import AddItems from './AddItems';
import Search from './Search';


function App() {
  const [list,setList]=useState(JSON.parse(localStorage.getItem("list"))

  
  )
  const handleClick = (id)=>{
    const listItems= list.map(list => list.id === id ? {...list,checked:!list.checked}:list)
     setList(listItems)
     localStorage.setItem("list" , JSON.stringify(listItems))
}

const handleDelete = (id) => {
    const listItems = list.filter(list => list.id!==id )
    setList(listItems)
    localStorage.setItem("list" , JSON.stringify(listItems))
}

const [newItem,setNewItem]=useState("")
const [search, setSearch] = useState('')
const handleSubmite = (e)=>{
  e.preventDefault()
  if(!newItem) return
  console.log(newItem)
 AddNewItem(newItem)
 setNewItem('')
 
}

const AddNewItem = (name) => {
  const id=list.length ? list[list.length -1].id +1 :1
  const addNewItem={id , checked:false, name}
  const listItems=[...list, addNewItem]
  setList(listItems)
  localStorage.setItem("list" , JSON.stringify(listItems))
}

  return(
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Nav/>} />
      <Route path='/home' element={<Home/>} />
        <Route path='/contect' element={<Contect/>} />
        <Route path='/download' element={<Download/>}/>
        <Route path='/list' element={<List 
              list={list.filter(list => list.name.toLowerCase().includes(search.toLowerCase()))}
              handleClick={handleClick}
              handleDelete={handleDelete}/>}/>
      </Routes>
      </BrowserRouter>
      <div>
        <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmite={handleSubmite}
       
        /> 
        <Search
        search={search}
        setSearch={setSearch}
        /> 
        </div>

      <div>
      <Footer length={list.length}/>
      </div>
    </div>
  )

 
}

export default App;
