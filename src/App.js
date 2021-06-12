import React from "react";
import Dislay from "./components/Display";
import Search from "./components/Search";
import  "./css/App.css";

export default function App() {
    
    return (
        <div className='app'>
            <Search />
            <Dislay />
        </div>
    )

}