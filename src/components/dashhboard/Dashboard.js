import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../UI/CourseCard/BoxCourseCard/CourseCard';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Dashboard() {
  return (
    <div className="mt-5">
      <Container>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="My Courses">
            <Container>
              <Row>
                <Col>
                  <CourseCard courseId={1} title="1% Freelancing" />
                </Col>
                <Col>
                  <CourseCard courseId={2} title="The New Freelancer" />
                </Col>
                <Col>
                  <CourseCard courseId={3} title="The Business Owner" />
                </Col>
                <Col>
                  <CourseCard courseId={4} title="Skyrocket your Biz" />
                </Col>
              </Row>
              <br />
            </Container>
          </Tab>
          <Tab eventKey="profile" title="All Courses">
            <Container>
              <Row>
                <Col>
                  <CourseCard courseId={5} title="Introduction to Freelancing" />
                </Col>
                <Col>
                  <CourseCard courseId={6} title="Freelancer to Business Owner" />
                </Col>
                <Col>
                  <CourseCard courseId={7} title="The New Agency Owner" />
                </Col>
                <Col>
                  <CourseCard courseId={8} title="Get Out of The Market" />
                </Col>
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Dashboard;
