import React, { useState, useEffect } from "react"
import { Container, Row , Col, Table } from "react-bootstrap"
import axios from "axios"
import { useParams } from "react-router-dom"
const PostComment = () => {
    const [data , setData ] = useState([])
    const { id } = useParams();
    const getcomment = ( ) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getcomment()
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
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.length > 0 && 

                                    data.map((row)=>(
                                        <tr>
                                            <td>{row.id}</td>
                                            <td>{row.name}</td>
                                            <td>{row.email}</td>
                                            <td>{row.body}</td>
                                            
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

export default PostComment