import { Component } from 'react';
import SignUp from './SignUp';
import Login from './login'
import { Container, Row, Col } from "react-bootstrap";
import { Route } from 'react-router-dom';


class body extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Route path='/login' component={Login} />
                        <Route path='/Signup' component={SignUp} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default body;