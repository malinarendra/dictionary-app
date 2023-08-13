import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./Search.css";
import Card from "./Card.jsx";

const Search = () => {
  const [search, setSearch] = useState("hello");
  const [input, setInput] = useState("hello");
  const [data, setData] = useState();
  const audioRef = useRef(null);
  const [noData, setNoData] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeInput = (e) => {
    setInput(e.target.value);
  }

  const getSearch = () => {
    setSearch(input);
  }

  const fetchApi = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
      setData(response.data[0]);
      setLoading(false);
      setNoData(false);
    } catch (error) {
      if (error) {
        setLoading(false);
        setNoData(true);
      }
    }
  }

  useEffect(() => {
    fetchApi();
  }, [search]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }

  return (
    <>
      <div className="search-container">
        <div className="search-group">
          <input type="search" placeholder='Enter a word' onChange={changeInput} value={input} />
          <button onClick={getSearch}>Search</button>
        </div>
        {loading ? <div className="loader"></div> :
          data && noData === false ? (
            <>
              <div className="result">
                <div className="result-left">
                  <h1>{data.word}</h1>
                  {data.phonetics && data.phonetics[0] && (
                    <p>{data.phonetics[0].text ? data.phonetics[0].text : data.phonetics[1].text}</p>
                  )}
                </div>
                <div className="result-right">
                  {(data.phonetics[0]?.audio || data.phonetics[1]?.audio) && (
                    <span onClick={playAudio}>
                      <i className="fa-solid fa-play"></i>
                      <audio ref={audioRef} controls src={data.phonetics[0]?.audio || data.phonetics[1]?.audio}></audio>
                    </span>
                  )}
                </div>
              </div>
              <div className="super-result">
                {data.meanings.map((val, i) => (
                  <Card key={i} pos={val.partOfSpeech} synonyms={val.synonyms[0]} define={val.definitions} />
                ))}
                <div className="source">
                  <hr />
                  <p>Source</p>
                  <a href={data.sourceUrls[0]} target="_blank">{data.sourceUrls[0]}</a>
                </div>
              </div>
            </>
          ) : <h1 className="error">No data found!</h1>}
      </div>
    </>
  )
}

export default Search;
