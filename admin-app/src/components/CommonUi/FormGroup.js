import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
/**
* @author
* @function FormGroup
**/

const FormGroup = (props) => {
    return (
        <Form.Group controlId={ props.controlId }>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} />
            <Form.Text className="text-muted">
                {props.errorMsg}    
            </Form.Text>
        </Form.Group>
    )

}

export default FormGroup