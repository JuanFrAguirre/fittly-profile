import { Col, Row, Container, Tab, Tabs } from "react-bootstrap";

const Step5 = () => {
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
              <Tab eventKey="home" title="Work Experience">
                <Row>
                  <Col md={12}>
                    <ul class="timeline">
                      <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">Title of section 1</h2>
                        <span class="small text-gray">
                          <i class="fa fa-clock-o mr-1"></i>21 March, 2019
                        </span>
                        <p class="text-small mt-2 font-weight-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare. Maecenas placerat facilisis
                          mollis. Duis sagittis ligula in sodales vehicula....
                        </p>
                      </li>
                      <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">Title of section 2</h2>
                        <span class="small text-gray">
                          <i class="fa fa-clock-o mr-1"></i>5 April, 2019
                        </span>
                        <p class="text-small mt-2 font-weight-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper.
                        </p>
                        <p class="text-small mt-2 font-weight-light">
                          Libero expedita explicabo eius fugiat quia aspernatur
                          autem laudantium error architecto recusandae natus
                          sapiente sit nam eaque, consectetur porro molestiae
                          ipsam! Deleniti.
                        </p>
                      </li>
                      <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">Title of section 3</h2>
                        <span class="small text-gray">
                          <i class="fa fa-clock-o mr-1"></i>18 August, 2019
                        </span>
                        <p class="text-small mt-2 font-weight-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare. Maecenas placerat facilisis
                          mollis. Duis sagittis ligula in sodales vehicula....
                        </p>
                      </li>
                      <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">Title of section 4</h2>
                        <span class="small text-gray">
                          <i class="fa fa-clock-o mr-1"></i>10 October, 2019
                        </span>
                        <p class="text-small mt-2 font-weight-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare. Maecenas placerat facilisis
                          mollis. Duis sagittis ligula in sodales vehicula....
                        </p>
                        <p class="text-small mt-2 font-weight-light">
                          Voluptatibus temporibus esse illum eum aspernatur,
                          fugiat suscipit natus! Eum corporis illum nihil
                          officiis tempore. Excepturi illo natus libero sit
                          doloremque, laborum molestias rerum pariatur quam
                          ipsam necessitatibus incidunt, explicabo.
                        </p>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="profile" title="Education & Certification">
                <Row>
                  <Col md={12}>
                    <ul class="timeline">
                      <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">Title of section 1</h2>
                        <span class="small text-gray">
                          <i class="fa fa-clock-o mr-1"></i>21 March, 2019
                        </span>
                        <p class="text-small mt-2 font-weight-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare. Maecenas placerat facilisis
                          mollis. Duis sagittis ligula in sodales vehicula....
                        </p>
                      </li>
                      <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">Title of section 2</h2>
                        <span class="small text-gray">
                          <i class="fa fa-clock-o mr-1"></i>5 April, 2019
                        </span>
                        <p class="text-small mt-2 font-weight-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper.
                        </p>
                        <p class="text-small mt-2 font-weight-light">
                          Libero expedita explicabo eius fugiat quia aspernatur
                          autem laudantium error architecto recusandae natus
                          sapiente sit nam eaque, consectetur porro molestiae
                          ipsam! Deleniti.
                        </p>
                      </li>
                      <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">Title of section 3</h2>
                        <span class="small text-gray">
                          <i class="fa fa-clock-o mr-1"></i>18 August, 2019
                        </span>
                        <p class="text-small mt-2 font-weight-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare. Maecenas placerat facilisis
                          mollis. Duis sagittis ligula in sodales vehicula....
                        </p>
                      </li>
                      <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">Title of section 4</h2>
                        <span class="small text-gray">
                          <i class="fa fa-clock-o mr-1"></i>10 October, 2019
                        </span>
                        <p class="text-small mt-2 font-weight-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare. Maecenas placerat facilisis
                          mollis. Duis sagittis ligula in sodales vehicula....
                        </p>
                        <p class="text-small mt-2 font-weight-light">
                          Voluptatibus temporibus esse illum eum aspernatur,
                          fugiat suscipit natus! Eum corporis illum nihil
                          officiis tempore. Excepturi illo natus libero sit
                          doloremque, laborum molestias rerum pariatur quam
                          ipsam necessitatibus incidunt, explicabo.
                        </p>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Step5;
