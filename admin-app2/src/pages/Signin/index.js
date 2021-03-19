import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Layouts from '../../components/Layouts'

/**
* @author
* @function Signin
**/

const Signin = (props) => {
  return (
    <Layouts>
      <Row style={{ marginTop:'50px' }}>
        <Col md={{ span:6,offset:3 }}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
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