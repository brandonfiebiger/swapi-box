import React, { Component } from 'react';
import './Crawl.scss';

class Crawl extends Component {
   constructor() {
     super();

   }

     render() {
       let title;
       let crawl;
       let date;
       if(!this.props.loading) {
         title = this.props.filmCrawls[0].title;
         crawl = this.props.filmCrawls[0].crawl;
         date = this.props.filmCrawls[0].date;
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
