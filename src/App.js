import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
         <div className="wrapper">
          <SayFullName name="Alistar" surname="Rybalov" link="http://jsraccoon.ru/es6-classes" />
          <SayFullName name="Olya" surname="Rybalov" link="https://www.youtube.com/watch?v=LFGsZ6ythQQ" />
          <SayFullName name="Misha" surname="Rybaloff" link="https://developer.mozilla.org" />
      </div>
    );
  }
}

function SayFullName(props) {
  return (
      <div>
      <h1> Мое имя {props.name}, фамилия - {props.surname}</h1>
      <a href={props.link}> Ссылка на мой профиль</a>
      </div>
  )
}


export default App;
