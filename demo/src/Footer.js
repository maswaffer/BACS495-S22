import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  myname = 'Matt';
  render() {
    return <div><h2>My Footer {this.myname}</h2></div>;
  }
}

export default Footer;
