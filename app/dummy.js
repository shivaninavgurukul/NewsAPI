import React from 'react';
// import { people } from './data';
// import { getImageUrl } from './image';
const people = [{
    id: 0, // Used in JSX as a key
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
}, {
    id: 1, // Used in JSX as a key
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
}, {
    id: 2, // Used in JSX as a key
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
}, {
    id: 3, // Used in JSX as a key
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
}, {
    id: 4, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
},{
    id: 5, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
},{
    id: 6, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
},{
    id: 7, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
},{
    id: 8, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
}];

export default function List() {

    return (
        <div>
            <div className='box-container'>
                <div key={people[0].id} className='box'>
                    {/* <img src={getImageUrl(person)} alt={person.name}></img> */}
                    <img src={'https://i.imgur.com/' + people[0].imageId + 's.jpg'} alt={people[0].name}></img>
                    <h3>Investment Mishap Triggers Leadership Shake-Up in Energy Trust</h3>
                    <p>The Asian Energy Impact trust is seeking to restore its London listing after publishing delayed  annual and interim results..</p>
                </div>
                <div key={people[1].id} className='box'>
                    {/* <img src={getImageUrl(person)} alt={person.name}></img> */}
                    <img src={'https://i.imgur.com/' + people[1].imageId + 's.jpg'} alt={people[1].name}></img>
                    <h3>Investment Mishap Triggers Leadership Shake-Up in Energy Trust</h3>
                    <p>The Asian Energy Impact trust is seeking to restore its London listing after publishing delayed  annual and interim results..</p>
                </div>
                <div key={people[2].id} className='box'>
                    {/* <img src={getImageUrl(person)} alt={person.name}></img> */}
                    <img src={'https://i.imgur.com/' + people[2].imageId + 's.jpg'} alt={people[2].name}></img>
                    <h3>Investment Mishap Triggers Leadership Shake-Up in Energy Trust</h3>
                    <p>The Asian Energy Impact trust is seeking to restore its London listing after publishing delayed  annual and interim results..</p>
                </div>
                <div key={people[3].id} className='box'>
                    {/* <img src={getImageUrl(person)} alt={person.name}></img> */}
                    <img src={'https://i.imgur.com/' + people[3].imageId + 's.jpg'} alt={people[3].name}></img>
                    <h3>Investment Mishap Triggers Leadership Shake-Up in Energy Trust</h3>
                    <p>The Asian Energy Impact trust is seeking to restore its London listing after publishing delayed  annual and interim results..</p>
                </div>
                <div key={people[4].id} className='box'>
                    {/* <img src={getImageUrl(person)} alt={person.name}></img> */}
                    <img src={'https://i.imgur.com/' + people[4].imageId + 's.jpg'} alt={people[4].name}></img>
                    <h3>Investment Mishap Triggers Leadership Shake-Up in Energy Trust</h3>
                    <p>The Asian Energy Impact trust is seeking to restore its London listing after publishing delayed  annual and interim results..</p>
                </div>
                <div key={people[5].id} className='box'>
                    {/* <img src={getImageUrl(person)} alt={person.name}></img> */}
                    <img src={'https://i.imgur.com/' + people[5].imageId + 's.jpg'} alt={people[5].name}></img>
                    <h3>Investment Mishap Triggers Leadership Shake-Up in Energy Trust</h3>
                    <p>The Asian Energy Impact trust is seeking to restore its London listing after publishing delayed  annual and interim results..</p>
                </div>
                <div key={people[6].id} className='box'>
                    {/* <img src={getImageUrl(person)} alt={person.name}></img> */}
                    <img src={'https://i.imgur.com/' + people[6].imageId + 's.jpg'} alt={people[6].name}></img>
                    <h3>Investment Mishap Triggers Leadership Shake-Up in Energy Trust</h3>
                    <p>The Asian Energy Impact trust is seeking to restore its London listing after publishing delayed  annual and interim results..</p>
                </div>
                <div key={people[7].id} className='box'>
                    {/* <img src={getImageUrl(person)} alt={person.name}></img> */}
                    <img src={'https://i.imgur.com/' + people[7].imageId + 's.jpg'} alt={people[7].name}></img>
                    <h3>Investment Mishap Triggers Leadership Shake-Up in Energy Trust</h3>
                    <p>The Asian Energy Impact trust is seeking to restore its London listing after publishing delayed  annual and interim results..</p>
                </div>
                <div key={people[8].id} className='box'>
                    {/* <img src={getImageUrl(person)} alt={person.name}></img> */}
                    <img src={'https://i.imgur.com/' + people[8].imageId + 's.jpg'} alt={people[8].name}></img>
                    <h3>Investment Mishap Triggers Leadership Shake-Up in Energy Trust</h3>
                    <p>The Asian Energy Impact trust is seeking to restore its London listing after publishing delayed  annual and interim results..</p>
                </div>
            </div>
        </div>
    )
}
