import React from 'react'
import './Topics.css'

const Topics = ({handleTopic, errors}) => {
 
  return (
    <div className='topics-container'>
      <label htmlFor="SoftwareDevelopment" className='topic-box'>
        <input type="checkbox" value='Software Development' id='SoftwareDevelopment' onChange={handleTopic}/>
        <span className='topic'>Software Development</span>
      </label>

      <label htmlFor="UserExperience" className='topic-box'>
        <input type="checkbox" value='User Experience' id='UserExperience' onChange={handleTopic}/>
        <span className='topic'>User Experience</span>
      </label>

      <label htmlFor="GraphicDesign" className='topic-box'>
        <input type="checkbox" value='Graphic Design' id='GraphicDesign' onChange={handleTopic}/>
        <span className='topic'>Graphic Design</span>
      </label>
      <p className='error'>{errors.topics}</p>
      
    </div>
  )
}

export default Topics
