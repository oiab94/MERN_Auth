import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import Login from './user/Login';
import Signup from './user/Signup';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Signup />
          </Col>
          
          <Col>
            <Login />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
