import { Col, Row, Container } from "react-bootstrap";

import profile from "../../assets/img/profile.jpg";

const Step3 = () => {
  return (
    <Container className="mx-auto recomendations">
      <Row>
        <Col md={12}>
          <h1>Recomendations</h1>
          <h2>Here’s what other people have to say about me</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="boxRecomendations">
            <Row>
              <Col md={2} className="text-center">
                <img src={profile} className="profileImg" />
                <h5 className="profileName">John Smith</h5>
                <p className="profileActivity">Studio Onwer</p>
              </Col>
              <Col md={2} className="text-center">
                <img src={profile} className="profileImg" />
                <h5 className="profileName">John Smith</h5>
                <p className="profileActivity">Studio Onwer</p>
              </Col>
              <Col md={2} className="text-center">
                <img src={profile} className="profileImg" />
                <h5 className="profileName">John Smith</h5>
                <p className="profileActivity">Studio Onwer</p>
              </Col>
              <Col md={2} className="text-center">
                <img src={profile} className="profileImg" />
                <h5 className="profileName">John Smith</h5>
                <p className="profileActivity">Studio Onwer</p>
              </Col>
              <Col md={2} className="text-center">
                <img src={profile} className="profileImg" />
                <h5 className="profileName">John Smith</h5>
                <p className="profileActivity">Studio Onwer</p>
              </Col>
              <Col md={2} className="text-center">
                <img src={profile} className="profileImg" />
                <h5 className="profileName">John Smith</h5>
                <p className="profileActivity">Studio Onwer</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Step3;
