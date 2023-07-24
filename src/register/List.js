import { 
    Table,
    Row,
    Col
} from 'react-bootstrap'
const List = ( ) => {
    let userData = localStorage.getItem('userData') || '[]'
    userData = JSON.parse(userData)
    return (
        <>
            <Row>
                <Col>
                    <h4>User Listing</h4>
                </Col>
                <Col md={12}>
                    <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           userData.length > 0 && 
                           userData.map((item)=>(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                            </tr>
                           ))
                        }
                        
                    </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    )
}

export default List ;