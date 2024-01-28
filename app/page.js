// import dynamic from 'next/dynamic';
import React from 'react';
// import MyComponent from './News_De';
import List from './dummy';
import Search_bar from './Search_bar';

export default function page() {
  return (
    <div>
      <Search_bar/>
      {/* <MyComponent/> */}
      <List/>
      {/* <List/>
      <List/> */}

    </div>
  )
}
