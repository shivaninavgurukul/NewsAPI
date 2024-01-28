
// "use client"
// import { useState, useEffect } from 'react';

// function MyComponent() {
//   const [newsData, setNewsData] = useState([]);

//   useEffect(() => {
//     const apiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=dec62bb5689649c389b7d3bd62a6646d';

//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setNewsData(data.articles.slice(6,15));
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, []); 

//   return (
//     <div>
//       <div className='box-container'>
//         {newsData.map((article) => (
//           <div key={article.url} className='box'>
//             {article.urlToImage && (
//               <img
//                 src={article.urlToImage}
//                 alt={article.title}
//               />
//             )}
//             <h4>{article.title
//               ? `${article.title.substring(0,60)}...`
//               : 'No title available'}
//             </h4>
//             <p>
//               {article.description
//                 ? `${article.description.substring(0, 70)}...`
//                 : 'No description available'}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MyComponent;
