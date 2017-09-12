import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Post } from './posts.jsx';

export default class Main extends Component {
  
  render() {
    return (
      <div>
        <Post />
      </div>
    );
  }
}