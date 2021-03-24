import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import Layouts from '../../components/Layouts'
import Input from '../../components/CommonUi2/InputGroup';

//Import the axios library
const axios = require('axios');

/**
* @author
* @function Signin
**/

//Functional Component



const Signin = (props) => {
  
 
  /* const [ varible, method ] = useState(); */
  
  const [ myEmail, setMyEmail ] = useState();
  const [ myPassword , setMyPassword ] = useState();

  function sendData(e){  /* e = event */
    e.preventDefault();
    console.log('Form data submitted');
    console.log(myEmail);
    console.log(myPassword);
    var data = {
      email:myEmail,
      password:myPassword
    };

    axios.post('http://localhost:4000/api/admin/signin',data).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  
  }

  return (
    <Layouts>
      <Row style={{ marginTop: '50px' }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={ sendData }>
            { myEmail }
            <Input
              controlId="formBasicEmail"
              label="Email"
              type="email"
              placeholder="Enter your email"
              errorMsg="Error messaage"
              value={ myEmail }
              onChange={(e)=>{ setMyEmail( e.target.value ) }}
            />
            { myPassword }
            <Input
              controlId="formBasicPassword"
              label="Password"
              type="password"
              placeholder="Enter your password"
              errorMsg="Error messaage"
              value={ myPassword }
              onChange={(e)=>{ setMyPassword( e.target.value ) }}
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

export default Signin