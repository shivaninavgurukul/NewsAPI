"use client"

import React from 'react'

export default function Search_bar() {
    return (
        <div className='serchbar'>
            <div class="input-group rounded" style={{ width: '267px',border:'2px solid black' }}>
                <img src='/serch.png' style={{width:'52px',height:'57px'}}></img>
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <div className='go'>
                    <div className='go_text'>Go</div>
                </div>
                {/* <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                </span> */}
            </div>

        </div>
    )
}
