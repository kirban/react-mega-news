import React from 'react';
import CGetNews from '../components/GetNews';
import getArticles from '../components/GetNews';

let NEWS = getArticles;
// let NEWS = [
//     {
//       id: 1,
//       title: 'First title',
//       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore natus iste, fugit odio culpa repellat qui debitis voluptate dicta dolor quae aspernatur animi non assumenda laborum praesentium provident voluptates fugiat!',
//       author: 'Vasiliy Petrov',
//       publishedAt: '20.01.2017',
//       url: '#',
//       urlToImage: '#',
//       category: 'politics',
//       country: 'UK',
//       source: 'BBC'
//     },
//     {
//       id: 2,
//       title: 'Second title',
//       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore natus iste, fugit odio culpa repellat qui debitis voluptate dicta dolor quae aspernatur animi non assumenda laborum praesentium provident voluptates fugiat!',
//       author: 'Nikolay Ivanov',
//       publishedAt: '6.03.2018',
//       url: '#',
//       urlToImage: '#',
//       category: 'music',
//       country: 'France',
//       source: 'CNN'
//     },
//     {
//       id: 3,
//       title: 'Third title',
//       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore natus iste, fugit odio culpa repellat qui debitis voluptate dicta dolor quae aspernatur animi non assumenda laborum praesentium provident voluptates fugiat!',
//       author: 'Anatoliy Molchanov',
//       publishedAt: '16.04.2018',
//       url: '#',
//       urlToImage: '#',
//       category: 'sports',
//       country: 'USA',
//       source: 'HBS'
//     }
//   ]
  
const reducer = (state = [], action) => {
    console.log(action);
    if (action.type === 'REFRESH_NEWS'){
      //...render NEWS on the page
      
      // return <CGetNews />; //here we will update news list according to info on the server
    }
    if (action.type === 'SEARCH_NEWS'){
      // return action.dNews;
    }
    return state;
  }
  
export default reducer;