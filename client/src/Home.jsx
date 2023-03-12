import { Col, Container, Row } from "react-bootstrap";
import Login from './user/Login';
import Signup from './user/Signup';

const Home = () => {
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
export default Home;