
"use client"
import { useState } from 'react';

export default function Search_bar({ onSearch }) {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const handleSearch = () => {
        onSearch(value);
      }
    
    return (
        <div className='serchbar'>
            <div class="input-group rounded" style={{ width: '267px', border: '2px solid black' }}>
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"
                    value={value}
                    onChange={onChange}
                />
                <button onClick={handleSearch} className='go'>Go
                </button>

            </div>
        </div>
    )
}
