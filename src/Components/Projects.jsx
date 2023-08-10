import React from 'react'
import Electronic from '../Electronic.jpeg'
import Insta from '../insta.png'
import Sport from '../sport.jpeg'

function Projects() {
  return (
    <div className='projects'>
      <div className='project-heading'>Projects</div>
      <div className='experience'>
        <div className='project-container'>
          <div className='contain-left'>
            <h1 className='timing'>Population forecast in India using Excel</h1>
            <h3 className='p-job-role'>(03/2023 - 05/2023)</h3>
            <p className='comp-loc'>Analysis of the sales of electronic devices in India in next 15 years as per the selected dataset</p>
          </div>
          <div className='conatin-right'>
            <img className='project-img' src={Electronic} alt="" />
          </div> 
        </div>
        <div className='project-container'>
          <div className='contain-left'>
            <h1 className='timing'>Instagram Users Analytics</h1>
            <h3 className='p-job-role'>(06/2023 - 06/2023)</h3>
            <p className='comp-loc'>
              Instagram userbase using various clauses. <br /><br />
              Insights using joins to connect various tables
            </p>
          </div>
          <div className='conatin-right'>
            <img className='project-img' src={Insta} alt="" />
          </div> 
        </div>
        <div className='project-container'>
          <div className='contain-left'>
            <h1 className='timing'>Students participation Dashboard in co-curricular activities
using Power BI</h1>
            <h3 className='p-job-role'>(01/2023 - Present)</h3>
          </div>
          <div className='conatin-right'>
            <img className='project-img' src={Sport} alt="" />
          </div> 
        </div>
        
      </div>
    </div>
  )
}

export default Projects