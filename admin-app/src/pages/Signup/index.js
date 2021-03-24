import React from 'react'
import Layouts from '../../components/Layouts'
import { Button, Col, Form, Row } from 'react-bootstrap'
import FormGroup from '../../components/CommonUi/FormGroup';

import Input from '../../components/CommonUi2/InputGroup';
/**
* @author
* @class Signup
**/


//Class Component
class Signup extends React.Component {
  //1. Property
  state = {}

  //2. Constructor

  //3.Method
  //Every Class Component must have a render method
  sendData(e){ // e = formal Arg
    e.preventDefault();
    console.log('Data Submitted');
  }
  
  render() {

    //Every Method must return Something JSX code
    return (
      <Layouts>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={ this.sendData } >
              <Row>
                <Col md={{ span: 6 }}>
                  <Input
                    controlId="formBasicFName"
                    label="First Name"
                    type="text"
                    placeholder="Enter your First Name"
                    errorMsg="Error messaage"
                    value=""
                  />
                </Col>
                <Col md={{ span: 6 }}>
                  <Input
                    controlId="formBasicLName"
                    label="First Last"
                    type="text"
                    placeholder="Enter your Last Name"
                    errorMsg="Error messaage"
                    value=""
                  />
                </Col>
              </Row>
              <Input
                controlId="formBasicEmail"
                label="Email"
                type="email"
                placeholder="Enter your email"
                errorMsg="Error messaage"
                value="a@gmail.com"
              />

              <Input
                controlId="formBasicPassword"
                label="Password"
                type="password"
                placeholder="Enter your password"
                errorMsg="Error messaage"
                value=""
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Layouts>
    )
  }
}

export default Signup