// "use client"

// import { useState } from 'react';


// export default function Search_bar() {
//     const [value, setValue] = useState("");

//     const onChange = (event) => {
//         setValue(event.target.value);
//     }

//     const onSearch = (searchItem) => {
//         console.log('search', searchItem);
//     }
//     return (
//         <div className='serchbar'>
//             <div class="input-group rounded" style={{ width: '267px', border: '2px solid black' }}>

//                 <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"
//                     value={value}
//                     onChange={onChange}
//                 />
//                 <button onClick={()=>onSearch(value)} className='go'>Go
//                 </button>

//             </div>
//         </div>
//     )
// }


"use client"
import { useState } from 'react';

export default function Search_bar() {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSearch = (searchItem) => {
        let url=`https://newsapi.org/v2/everything?q=${searchItem}&apiKey=dec62bb5689649c389b7d3bd62a6646d`;
        console.log(url);

        fetch(url)

            .then((response) => response.json())
            .then((json) => {
                console.log(json);
            });
    }
    return (
        <div className='serchbar'>
            <div class="input-group rounded" style={{ width: '267px', border: '2px solid black' }}>
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"
                    value={value}
                    onChange={onChange}
                />
                <button onClick={() => onSearch(value)} className='go'>Go
                </button>

            </div>
        </div>
    )
}
