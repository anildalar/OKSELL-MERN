import React from 'react'
import Layouts from '../../components/Layouts'
import { Button, Col, Form, Row } from 'react-bootstrap'
/**
* @author
* @function Signup
**/

const Signup = (props) => {
  return (
    <Layouts>
      <Row style={{ marginTop: '50px' }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Row>
              <Col md={{ span:6 }}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter firstName" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={{ span:6 }}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
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

export default Signup