import React, { Component } from 'react';

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
class CNewsList extends Component{
  getInitialState(){
    return {
      displayedNews: NEWS
    };
  }
    render(){
      return (
      <li className="news__item">
        <img className="news__image" src={this.props.imageurl} width="100px" height="100px" />
        <div className="news__pre">
          <span>Category: {this.props.category}</span>
          <span>Country: {this.props.country}</span>
        </div>
        {/* {console.log(this)} */}
        <h3 className="news__title">{this.props.title}</h3>
        <div className="news__desc">{this.props.desc}</div>
        <div className="news__info">
          <span className="news__author">Author:{this.props.author}</span>
          <span className="news__pubdate">{this.props.pubdate}</span>
        </div>
        <div className="news__details">
          <a className="news__details-link" href={this.props.url}>more info...</a>
        </div>
      </li>
        );
    }
  }

export default CNewsList;