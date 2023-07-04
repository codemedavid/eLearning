import React from 'react'
import Helmet from '../../components/helmet/Helmet'
import Banner from '../../assets/images/banner.png'
import TopicSection from '../../components/TopicSection/TopicSection'
function Topics() {
  return (
    <div>
    <Helmet backgroundImage={Banner}></Helmet>
    <TopicSection></TopicSection>
    </div>
  )
}

export default Topics
