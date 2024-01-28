import React from 'react';
// import { people } from './data';
// import { getImageUrl } from './image';
const data = [{
    title: "Blackpool Tower fire: Five other times people were fooled by false alarms",
    description: "After orange netting was mistaken for flames, we revisit ",
    url: "https://www.bbc.co.uk/news/uk-67802959",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/84C2/production/_132168933_01hjrkww9b6na25se5xhhmv2ev.jpg"

}, {
    title: "Sachin Tendulkar: Indian cricket legend warns of 'disturbing",
    "description": "The fake video appears to show Sachin Tendulkar",
    "url": "https://www.bbc.co.uk/news/world-asia-india-67989930",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/184F5/production/_132337599_gettyimages-1161147027.jpg",
}, {
    "title": "Blackpool Tower fire: Five other times  false alarms",
    "description": "After orange netting was mistaken for flames\"whoops\" moments.",
    "url": "https://www.bbc.co.uk/news/uk-67802959",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/84C2/production/_132168933_01hjrkww9b6na25se5xhhmv2ev.jpg",
}, {
    "title": "The Differences Between a Cricket , Explained",
    "description": "Grasshoppers and crickets belong  But they aren't the same species.",
    "url": "https://www.mentalfloss.com/posts/crickets-vs-grasshoppers-whats-the-difference",
    "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_2014,h_1132,x_0,y_235/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01hmvk087vrdn3xbmb2w.jpg",
}, {
    "title": "Pakistan Can Keep Imran Khan Out of  Keep His Popularity Down",
    "description": "The country Imran Khan out of power, but they can’t keep his popularity down.",
    "url": "https://time.com/6556335/pakistan-election-imran-khan-nawaz-sharif-military-pti/",
    "urlToImage": "https://api.time.com/wp-content/uploads/2024/01/pakistan-election-imran-khan-nawaz-sharif-military-pti.jpg?quality=85",
}, {
    "title": "SA have 'utmost respect' for Tests after criticism",
    "description": "for Test cricket after they recei squad for a tour of New Zealand.",
    "url": "https://www.bbc.co.uk/sport/cricket/67866091",
    "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1E1D/production/_132190770_gettyimages-1195391664.jpg",
}, {
    "title": "Preview: India vs Afghanistan – T20 cricket series",
    "description": "India's star batters  against Afghanistan, starting on January 11.",
    "url": "https://www.aljazeera.com/sports/2024/1/10/india-vs-afghanistan-t20-cricket-series-preview-live-coverage-analysis-team-news-rohit-sharma-virat-kohli-rashid-khan",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/01/2023-11-19T172619Z_759896847_UP1EJBJ1CFTY1_RTRMADP_3_CRICKET-WORLDCUP-IND-AUS-1704885162.jpg?resize=1920%2C1440",
}, {
    "title": "People’s ‘speed of sight’ varies and this may prowess",
    "description": "T fast-moving objects, which might explain  abilities in some sports",
    "url": "https://www.newscientist.com/article/2409000-peoples-speed-of-sight-varies-and-this-may-explain-sporting-prowess/",
    "urlToImage": "https://images.newscientist.com/wp-content/uploads/2023/12/20115033/SEI_184652782.jpg",
}, {
    "title": "Your women's cricket team of the year revealed",
    "description": "See who made the cut in BBC Sport's 2023 women's cricket team of the year.",
    "url": "https://www.bbc.co.uk/sport/cricket/67868231",
    "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/798F/production/_132191113_womensteam.png",
}];

export default function List() {

    const listItem = data.map(item =>
        <div className='box'>
            <img src={item.urlToImage}></img>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
            <div className='linkA'>
                <p style={{ width: '118px' }}>Read Full article</p>
                <a href={item.url}>---</a>
            </div>
        </div >
    );

    return (
        <div>
            <div className='box-container'>
                {listItem}
            </div>
        </div>
    )
}
