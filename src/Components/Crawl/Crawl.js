import React, { Component } from 'react';
import './Crawl.css';

class Crawl extends Component {
   constructor() {
     super();

   }

     render() {
       const { loading, films } = this.props;
       let title;
       let crawl;
       let date;
       let randomFilmCrawl;
       if(!loading) {
         randomFilmCrawl = films[Math.floor(Math.random() * 6) + 1 ]
         title = randomFilmCrawl.title;
         crawl = randomFilmCrawl.crawl;
         date = randomFilmCrawl.date;
      }
         return(
          <marquee direction="up">
            <h2>{title}</h2>
            <p>{crawl}</p>
            <p>{date}</p>
          </marquee>
      )


     }
}

export default Crawl;
