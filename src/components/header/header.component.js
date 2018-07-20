import React, { Component } from 'react';
import config from '../../config/config';
import HeaderItem from './headerItem.component';
import Logo from '../../static/images/logo.png';
import './header.css';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    }
  }

  generateMenu() {
    const { header } = config;
    let menus;
    if (header) {
      menus =  header.map((item, index) => {
        return (
          <HeaderItem key={index} menu={item}/>
        );
      });
    }
    return menus;
  }

  openMenu() {
    this.setState({
      menu: !this.state.menu
    });
  }

  render() {
    return ( 
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="header__wrapper hidden-xs">
              <div className="menu-wrapper">
                <div className="logo">
                  <a href="/"><h1><img src={Logo} width="60px"/><span>Intek Unsindo</span></h1></a>
                </div>
                <div className="links">
                  {this.generateMenu()}
                  <div className="social-links">
                    <a href="https://facebook.com" target="_blank"><i className="fa fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank"><i className="fa fa-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fa fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-mobile__wrapper">
              <div className="menu-wrapper">
                <div className="logo">
                  <a href="/"><h1><img src={Logo} width="60px"/></h1></a>
                  <div className="header">
                    <h3>INTEK UNSINDO</h3>
                  </div>
                  <span className="mobile-menu__trigger" onClick={this.openMenu.bind(this)}>
                    <i className="fa fa-bars"></i>
                  </span>
                </div>
                <div className={"links " + ((this.state.menu) ? 'showing' : '')}>
                  {this.generateMenu()}
                  <div className="social-links">
                    <a href="https://facebook.com" target="_blank"><i className="fa fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank"><i className="fa fa-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fa fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
