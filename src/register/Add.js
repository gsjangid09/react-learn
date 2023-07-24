import React, { useState } from 'react'
import { 
    Form,
    Col,
    Button,
    Row
} from 'react-bootstrap'

const Add = ( ) => {
    const [name , setName ] = useState()
    const [email , setEmail ] = useState()
    const [password , setPassword ] = useState()
    let userData = localStorage.getItem('userData') || '[]'
    userData = JSON.parse(userData)
    const handleName = ( e ) => {
        setName(e.target.value)
    }

    const handleEmail = ( e ) => {
        setEmail(e.target.value)
    }

    const handlePassword = ( e ) => {
        setPassword(e.target.value)
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()
        const obj = {
            name , 
            email , 
            password,
        }

        userData.push(obj)
        localStorage.setItem('userData', JSON.stringify(userData))
        window.location.reload(true);
    }
    return (
        <>
            <Row>
                <Col>
                    <h4>Add user</h4>
                </Col>
                <Col md={12}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control 
                            type="text"
                            placeholder="Enter name"
                            required={true}
                            value={name}
                            onChange={handleName}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            required={true}
                            value={email}
                            onChange={handleEmail}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            required={true}
                            value={password}
                            onChange={handlePassword}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='float-left'>
                        Submit
                    </Button>
                </Form>
            </Col>  
        </Row>           
        </>
    )
}
export default Add