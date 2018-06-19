import React, { Component } from 'react';

// import logo from './logo.svg';

import './App.css';

let NEWS = [
  {
    id: 1,
    title: 'First title',
    desc: 'First description',
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
    desc: 'Second description',
    author: 'Nikolay Ivanov',
    pubdate: '6.03.2018',
    url: '#',
    imageurl: '#',
    category: 'jazz',
    country: 'France',
    source: 'CNN'
  },
  {
    id: 3,
    title: 'Third title',
    desc: 'Third description',
    author: 'Anatoliy Molchanov',
    pubdate: '16.04.2018',
    url: '#',
    imageurl: '#',
    category: 'sports',
    country: 'USA',
    source: 'HBS'
  }
]

class News extends Component{
  render(){
    return (
    <li>
      <img src={this.props.imageurl}/>
      <div>{this.props.title}</div>
      <div>{this.props.desc}</div>
    </li>
      );
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
        <p></p> */}        
        <ul>
          {NEWS.map(function(el){
            return (
            <News 
              key={el.id} 
              title={el.title}
              desc={el.desc}
              image={el.imageurl}
            />
            );
          })}
        </ul>
        
      </div>
    );
  }
}

export default App;