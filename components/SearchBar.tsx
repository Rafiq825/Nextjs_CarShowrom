"use client"
import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"




const SearchBar = () => {
    const [manuFacuture, setmanuFacucture] = useState('')
    const handleSearch=()=>{}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
       <SearchManufacturer
       manufacturer={manuFacuture}
       setManufacture={(manufacturer:string)=>setmanuFacucture(manufacturer)}
       />
      </div>
    </form>
  )
}

export default SearchBar
