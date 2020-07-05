import React, { Component } from 'react';
import { Container, Wrapper, Header, Input, Button } from './appStyles';
import styled from 'styled-components';
import {Grid, AlbumList} from './renderImages';
const axios = require('axios');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      error: false,
      isLoaded: false,
      users: []
    };
  }
  
  setUserName = (userName) => {
    this.setState({
      error: false,
      userName,
      isLoggedIn: false
    });
  }

  componentDidMount() {
    const baseUrl = process.env.REACT_APP_API_URL;
    fetch(`${baseUrl}/users`, {
      mode: 'no-cors'
    })
    .then(res => res.json())
    .then(function(response) {
      console.log(response);
    }).catch(function(e){
      console.log(e);
    });
    // .then(result => {
    //     debugger;
    //     console.log(result);
    //     this.setState({
    //       isLoaded: true,
    //       users: result
    //     });
    //   },
    //   (error) => {
    //     this.setState({
    //       isLoaded: true,
    //     });
    //   }
    // ).finally( result => console.log(result))
  }

  submitUserForm = () => {
    const baseUrl = process.env.REACT_APP_API_URL;
    fetch(`${baseUrl}/users`, {
      mode: 'no-cors'
    })
    .then(res => res.json())
    .then(function(response) {
      console.log(response);
    }).catch(function(e){
      console.log(e);
    });
    if (this.state.userName === "") {
      this.setState({
        error: true
      });
      return;
    }
    const config = {
      method: 'post',
      url: `${baseUrl}/create-user`,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        mode: 'no-cors',
        crossdomain: true,

      },
      data: {
        userName: this.state.userName
      }
    }
    axios(config).then(res => {
      console.log(res);
      this.props.history.push('capture');
    });

  }

  render() {
    const { isLoggedIn, error, users } = this.state;
    return (
      <Container>
        <Wrapper>
          <Header>KnackForge Technical Contest</Header>
          { !isLoggedIn && <form 
            onSubmit={(e) => {
              e.preventDefault();
              this.submitUserForm();
            }}
          >
          <Input 
            type="text" placeholder="Enter your name"
            error = {error}
            onChange={(e) => this.setUserName(e.target.value) }
              >
          </Input>
          <Button>Enter</Button>
          </form> }
        </Wrapper>
        <Grid> 
          <AlbumList users={users}/> 
        </Grid>
      </Container>
    );
  }
}

export default App;
