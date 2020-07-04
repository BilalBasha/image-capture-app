import React, { Component } from 'react';
import { Container, Wrapper, Header, Input, Button } from './appStyles';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      error: false
    };
  }
  
  setUserName = (userName) => {
    this.setState({
      error: false,
      userName,
      isLoggedIn: false
    });
  }

  submitUserForm = () => {
    if (this.state.userName === "") {
      this.setState({
        error: true
      });
      return;
    }
    this.setState({
      isLoggedIn: true
    });
    this.props.history.push('capture');
  }

  render() {
    const { isLoggedIn, error } = this.state;
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
      </Container>
    );
  }
}

export default App;
