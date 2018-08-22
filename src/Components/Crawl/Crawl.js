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
          <section className="crawler-container">
            <div>
              <h2 className="crawler">{title}</h2>
              <p className="crawler">{crawl}</p>
              <p className="crawler">{date}</p>
            </div>
          </section>
      )


     }
}

export default Crawl;
