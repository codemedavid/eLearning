import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Onepercent from '../../../../assets/images/onepercent.png';
import User from '../../../../assets/images/instructor.jpg';
import './courseCard.css'

const CourseCard = (props) => {
  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div>
      <motion.div
        style={{ width: '14rem' }}
        variants={cardVariants}
        whileHover="hover"
      >
        <Card>
          <Card.Img variant="top" src={Onepercent} />
          <Card.Body className="bg-white">
            <Card.Title className="text-black card__title title__height">{props.title}</Card.Title>
            <Card.Text className="card__text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="bg-white">
            <Row>
              <Col lg="3">
                <img src={User} alt="" className="user__icon" />
              </Col>
              <Col lg="7">
              <div className="d-flex align-items-center justify-content-center">
              <p className="author__name">John Angelo David</p>
              </div>
              </Col>
              <Col></Col>
            </Row>
          </Card.Footer>
        </Card>
      </motion.div>
    </div>
  );
};

export default CourseCard;
