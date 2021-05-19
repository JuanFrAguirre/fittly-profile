import { Col, Row, Container, Tab, Tabs } from "react-bootstrap";

const Step5 = ({ trainerData }) => {
  return (
    <Container className="mx-auto myExperience">
      <Row>
        <Col md={12}>
          <h1>My experience</h1>
          <p>Here are a few of my most relevant roles and education</p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="boxHistory">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              {trainerData.experiences && (
                <Tab eventKey="home" title="Education & Certification">
                  <Row>
                    <Col md={12}>
                      <ul class="timeline">
                        {trainerData.experiences.map((experience) => (
                          <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                            <div class="timeline-arrow"></div>
                            <h2 class="h5 mb-0">{experience.course_name}</h2>
                            <span class="small text-gray">
                              <i class="fa fa-clock-o mr-1"></i>
                              {experience.institution}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                </Tab>
              )}
              {trainerData.experiences && (
                <Tab eventKey="profile" title="Work Experience">
                  <Row>
                    <Col md={12}>
                      <ul class="timeline">
                        {trainerData.experiences.map((experience) => (
                          <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                            <div class="timeline-arrow"></div>
                            <h2 class="h5 mb-0">{experience.course_name}</h2>
                            <span class="small text-gray">
                              <i class="fa fa-clock-o mr-1"></i>
                              {experience.institution}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                </Tab>
              )}
            </Tabs>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Step5;
