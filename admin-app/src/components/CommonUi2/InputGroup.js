import React from 'react';
import { Form } from 'react-bootstrap';

/**
* @author
* @function InputGroup
**/

const InputGroup = (props) => {
    return (
        <Form.Group controlId={ props.controlId }>
            <Form.Label>{ props.label }</Form.Label>
            <Form.Control 
                type={props.type} 
                placeholder={ props.placeholder }
                value={ props.value }
                onChange={ props.onChange }
            />
            <Form.Text className="text-muted">
               { props.errorMsg }
            </Form.Text>
        </Form.Group>
    )

}

export default InputGroup