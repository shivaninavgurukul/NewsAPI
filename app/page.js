
"use client"
import React, { useState } from 'react';
import Search_bar from './Search_bar';
import List from './List';
import { data} from './Data.js';

export default function page() {

  const [searchedArticles, setSearchedArticles] = useState(data);

  const onSearch = (searchItem) => {
    let url = `https://newsapi.org/v2/everything?q=${searchItem}&apiKey=dec62bb5689649c389b7d3bd62a6646d`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setSearchedArticles(json.articles);
      });
  };

  return (
    <div>
      <Search_bar onSearch={onSearch}/>

      <List articles={searchedArticles} />

    </div>
  )
}


