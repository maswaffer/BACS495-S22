import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  myname = 'Matt';
  render() {
    return <div className="footer"><hr/><br/>This page created by {this.myname}</div>;
  }
}

export default Footer;
