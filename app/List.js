
import React from 'react';

export default function List({ articles }) {

    const slicedArticles = articles.slice(0, 9);

    const listItem = slicedArticles.map((item) => (

    <div className='box'>
      <img src={item.urlToImage} alt={item.title}></img>
      <h5>{item.title}</h5>
      <p>{item.description}</p>
      <div className='linkA'>
        <p style={{ width: '118px' }}>Read Full article</p>
        <a href={item.url}>---</a>
      </div>
    </div>
  ));

  return (
    <div>
      <div className='box-container'>{listItem}</div>
    </div>
  );
}
