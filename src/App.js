import React, { Component } from 'react'
import { Alert, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Card, CardHeader, CardBody } from 'reactstrap';
import './App.css'

class App extends Component {
  
  state = {
    text: ''
  }

  updateInputValue = async (event) => {
    const response = await fetch(`http://localhost:3002/?text=${event.target.value}`)
    let data = await response.json();
    this.setState({ text: data.text})
  } 

  render() {
    return (
      <div className="App">
      <Card>
        <CardHeader>
          <FormGroup>
            <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Type!</InputGroupText>
            </InputGroupAddon>
              <Input value={this.state.inputValue} onChange={this.updateInputValue}/>
            </InputGroup>
          </FormGroup>
        </CardHeader>
        {(this.state.text !== '') && 
        <CardBody>
          <Alert color="primary">
            {this.state.text}
          </Alert>
        </CardBody>
        }
      </Card>
      </div>
    )
  }
}

export default App
