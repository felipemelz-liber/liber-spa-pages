import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { TextField } from '.';

const Center = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  box-sizing: border-box;
`;

const Item = styled.div`
  background-color: blue;
`;

class Dev extends React.Component {
  constructor() {
    super();

    this.state = {};
    this.methodInput = React.createRef();
  }

  handleOnClick = () => {
    this.input.focus();
  };

  fieldRef = el => {
    this.input = el;
  };

  render() {
    return (
      <Center>
        <button type="button" onClick={this.handleOnClick}>
          add focus
        </button>
        <TextField label="test" ref={this.fieldRef} />
      </Center>
    );
  }
}

ReactDOM.render(<Dev />, document.getElementById('app'));
