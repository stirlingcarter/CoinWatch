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

class Post extends Component {
  
    render() {

      return (
        <div className="post">
          <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
          </Card>
        </div>
      );
    }
  }

export {
  Post,
  PostList
};
