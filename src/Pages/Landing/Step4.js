import { Col, Row, Container } from "react-bootstrap";

import spotify from "../../assets/img/spotify.jpg";

const Step4 = () => {
  return (
    <Container className="mx-auto workoutPlaylist">
      <Row>
        <Col md={12}>
          <h1>Workout Playlist</h1>
          <p>Take a look at my favourite workout playlists</p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="pt-5 pb-5">
            <img src={spotify} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Step4;
