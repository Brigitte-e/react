import React, { Component } from 'react';

class News extends Component {
  render() {
    let newsTemplate = this.props.news.map(function(item, index) {
      return (
        <div className="news-item" key={index}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      );
    })

    return (
      <div className="news">
        {newsTemplate}
      </div>
    )
  }
}

export default News;
