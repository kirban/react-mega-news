import React from 'react';
import CGetNews from '../components/GetNews';

let NEWS = [
    {
      id: 1,
      title: 'First title',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore natus iste, fugit odio culpa repellat qui debitis voluptate dicta dolor quae aspernatur animi non assumenda laborum praesentium provident voluptates fugiat!',
      author: 'Vasiliy Petrov',
      pubdate: '20.01.2017',
      url: '#',
      imageurl: '#',
      category: 'politics',
      country: 'UK',
      source: 'BBC'
    },
    {
      id: 2,
      title: 'Second title',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore natus iste, fugit odio culpa repellat qui debitis voluptate dicta dolor quae aspernatur animi non assumenda laborum praesentium provident voluptates fugiat!',
      author: 'Nikolay Ivanov',
      pubdate: '6.03.2018',
      url: '#',
      imageurl: '#',
      category: 'music',
      country: 'France',
      source: 'CNN'
    },
    {
      id: 3,
      title: 'Third title',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore natus iste, fugit odio culpa repellat qui debitis voluptate dicta dolor quae aspernatur animi non assumenda laborum praesentium provident voluptates fugiat!',
      author: 'Anatoliy Molchanov',
      pubdate: '16.04.2018',
      url: '#',
      imageurl: '#',
      category: 'sports',
      country: 'USA',
      source: 'HBS'
    }
  ]
  
const reducer = (state = NEWS, action) => {// v otdelnyi file
    console.log(action);
    if (action.type === 'REFRESH_NEWS'){
      //...do smth
      return <CGetNews />; //here we will update news list according to info on the server
    }
    if (action.type === 'SEARCH_NEWS'){
      return action.dNews;
    }
    return state;
  }
  
export default reducer;