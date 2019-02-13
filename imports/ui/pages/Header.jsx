import React, { Component } from 'react';
// import styled from 'styled-components';
// import styles from './stylesheets/Header.scss';

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

export default class Header extends React.Component {
  render() {
    // if (styles)
    // {
    //   console.log ("styles ready", styles);
    // }

    return (
      <div className="header">
        <ul className="breadcrumb">
          <li><a href="#">Comic Pack</a></li>
          <li><a href="./">Hourou Musuko</a></li>
          <li><a href="./about">Chapter 1</a></li>
        </ul>
        <div className="search-container">
          <form action="">
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
      </div>
    );
  }
}