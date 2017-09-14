import React, {Component} from 'react';
import { Collapse, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class PostList extends Component {

  render() {

    const posts = postsinfo.map( (postinfo) => {
      return <Post info={postinfo} />;
    });
    // const posts = [<Post info={postinfo} />];

    return (
      <div className="">
        <Navbar />
        <ul>
          {posts}

        </ul>
      </div>
    );
  }
}

// 'use strict';

// let stream = require( 'stream' );
// let Scraper = require( 'twitter-scraper' ).Scraper;

// let query = 'from:riccardovolo since:2015-05-01 until:2015-05-02';
// let scraper = new Scraper( query );
// let toConsole = new stream.Writable( {
//  objectMode: true,
//  write: function( tweet, enc, cb ) {
//    console.log( 'Got tweet: ', tweet );
//    return cb();
//  }
// } )
// scraper.pipe( toConsole );

// // Start the scraper 
// scraper.start();
var mess = "Hi Kathy :)"

class Post extends Component {
  
    render() {

      return (
        <div className="post">
          <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>{mess}</CardTitle>
          <CardText>from stir</CardText>
          <Button>This button does literally nothing lol</Button>
          </Card>
        </div>
      );
    }
  }

export {
  Post,
  PostList
};
