// import dynamic from 'next/dynamic';
import React from 'react';
import MyComponent from './News_De';
// const News_De = dynamic(() => import('./App/News_De'), { ssr: false });
import Search_bar from './Search_bar';

export default function page() {
  return (
    <div>
      <Search_bar/>
      <MyComponent/>
    </div>
  )
}
