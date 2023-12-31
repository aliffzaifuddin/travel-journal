import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import data from "./data" 

export default function App() {
    
    const hero = data.map(item => {
        return (
            <Main
                key={item.id} 
                item={item}
            />
        )
    }) 
    
    return (
        <div>
            <Navbar />
            {hero}          
        </div>
    )
}

