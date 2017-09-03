import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Post extends Component {

  render() {
    const posts = [];

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

class PostList extends Component {
  render() {
    return (
      <li></li>
    );
  }
}

export {
  Post,
  PostList
};
