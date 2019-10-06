import React,{useEffect, useState} from 'react';
import './App.css';
import Anime from './anime'

function App() {
  const[animes ,setanime]= useState([]);
  const[search ,setsearch]= useState("");
  const[query ,setquery]= useState("naruto");
  useEffect(()=>{
    getsearchanime();
    console.log("api call")
  },[query]);
  
  const getsearchanime = async () => {
    const search_api = `http://api.jikan.moe/v3/search/anime?q=${query}&page=1`;
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(proxyUrl+search_api)
    const data =await response.json();
    console.log(data.results)
    setanime(data.results)
    /*
    fetch()
    .then()*/
  }
  const updatesearch = e =>{
    setsearch(e.target.value)
    console.log(search)
  }
  const getsearch = e =>{
    e.preventDefault();
    setquery(search);
    setsearch("")
    console.log(search)
  }
  
  return (
    <div className="App">
      <form onSubmit={getsearch} className="form-class">
        <input className="form-search"  type="text" value={search} onChange={updatesearch}></input>
        <button className="form-button" type="submit">search</button>
      </form>
      <div className="animes">
      {animes.map(anime => (
        <Anime
        title={anime.title}
        info={anime.synopsis} 
        image={anime.image_url}
        key={anime.title}
        />
      ))}
      </div>
    </div>
  );
}

export default App;