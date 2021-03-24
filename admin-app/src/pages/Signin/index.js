import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import Layouts from '../../components/Layouts'
import Input from '../../components/CommonUi2/InputGroup';
/**
* @author
* @function Signin
**/

//Functional Component
const Signin = (props) => {
  return (
    <Layouts>
      <Row style={{ marginTop: '50px' }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
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

export default Signin