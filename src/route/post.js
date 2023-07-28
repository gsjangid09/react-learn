import React, { useState, useEffect } from "react"
import { Container, Row , Col, Table, Button } from "react-bootstrap"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Post = ( ) => {
    const [data , setData ] = useState([])
    const navigate = useNavigate();
    const getdata = ( ) => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getdata()
    },[])

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Table className="table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.length > 0 && 

                                    data.map((row)=>(
                                        <tr>
                                            <td>{row.id}</td>
                                            <td>{row.title}</td>
                                            <td>{row.body}</td>
                                            <td>
                                                 <Button variant="info"
                                                 onClick={()=>{
                                                    navigate(`/post/${row.id}`)
                                                 }}
                                                 >View</Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Post