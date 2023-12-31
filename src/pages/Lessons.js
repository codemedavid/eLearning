import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Recording from '../components/Recording/Recording'
import RecordingList from '../components/Recording/RecordingList'
import InstructorCard from '../components/UI/InstructorCard.js/InstructorCard'
function Lessons() {
  return (
    <div className='bg-black'>
    <Container>
    <Row className='gap-2'>
        <Col lg="7" className='my-4'>
          <Recording />
        </Col>
        <Col lg="4" className='my-4 d-flex justify-content-center align-items-center flex-column'>
        <div className="recordings">
        <RecordingList/>
        </div>
        <div className="instructor__card-lesson">
        <InstructorCard />
        </div>
         
        </Col>
      </Row>
      
    </Container>
      
    </div>
  )
}

export default Lessons
