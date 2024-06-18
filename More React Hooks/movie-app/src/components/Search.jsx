import { useEffect, useState } from "react";
import Style from "../styles/Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import { useQuery } from "../hooks/UseQuery";

export function Search() {

  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  const history = useNavigate()

  useEffect( () =>{
    setSearchText(search || "")
  }, [search])

  const handleSubmit = (e) => {
    e.preventDefault();
    history("/?search=" + searchText)
  }

  return (
    <div className={Style.searchContainer} onSubmit={handleSubmit}>
      <form className={Style.searchBox}>
        <input 
          type="text" 
          className={Style.searchInput} 
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className={Style.searchButton}>
          <FaSearch size={20} />
        </button>
      </form>
    </div>
  )
}