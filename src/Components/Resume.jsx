import React from 'react'

function Resume() {
  return (
    <div className='resume'>
      <div className='res-heading'>Resume</div>
      <div className='experience'>
        <div className='exp-heading'>Experience</div>
        <div className='container'>
          <div className='container-left'>
            <h3 className='timing'>03/2022 - Present</h3>
            <h1 className='job-role'>Deputy Officer</h1>
            <h3 className='comp-name'>Lovely Professional University</h3>
            <h4 className='comp-loc'>Jalandhar, India</h4>
          </div>
          <div className='container-right'>
            <h2 className='a-t'>Achievements/Tasks</h2>
            <p className='points'>
              Applying SQL queries <br /><br />
              Data visusalisation using Microsoft Power BI and Tableau <br /><br />
              Applying business Intelligence for data driven insights for the
              students engagement activities <br />
            </p>
          </div>
        </div>
        <div className='container'>
        <div className='container-left'>
            <h3 className='timing'>10/2019 - 01/2022</h3>
            <h1 className='job-role'>Data Analyst</h1>
            <h3 className='comp-name'>Pentaomnia Private Limited</h3>
            <h4 className='comp-loc'>Baisakhwa, Bihar India</h4>
          </div>
          <div className='container-right'>
            <h2 className='a-t'>Achievements/Tasks</h2>
            <p className='points'>
              Operations with Microsift Excel <br /><br />
              Pivot Tables and Charts <br /><br />
              Data Visualisation <br /><br />
              VBA and Macros <br />
            </p>
          </div>
        </div>
      </div>


      <div className='education'>
        <div className='edu-heading'>Education</div>
        <div className='container'>
          <div className='container-left'>
            <h3 className='timing'>09/2020 - 06/2022</h3>
            <h1 className='job-role'>Master of Business Administration</h1>
            <h3 className='comp-name'>Lovely Professional University</h3>
            <h4 className='comp-loc'>Jalandhar, India</h4>
          </div>
          <div className='container-right'>
            <h2 className='a-t'>Achievements/Tasks</h2>
            <p className='points'>
            6.05 CGPA
            </p>
          </div>
        </div>
        <div className='container'>
        <div className='container-left'>
            <h3 className='timing'>07/2016 - 05/2020</h3>
            <h1 className='job-role'>B.Tech. - CSE (Hons.)</h1>
            <h3 className='comp-name'>Lovely Professional University</h3>
            <h4 className='comp-loc'>Baisakhwa, Bihar India</h4>
          </div>
          <div className='container-right'>
            <h2 className='a-t'>Achievements/Tasks</h2>
            <p className='points'>
            7.6 CGPA
            </p>
          </div>
        </div>
      </div>


      <div className='skills'>
        <div className='skill-heading'>My Skills</div>
        <div className='container'>
          <div className='skill-names'>
            <div className='skill-name'>- Microsoft Excel</div>
            <div className='skill-name'>- Power BI</div>
            <div className='skill-name'>- MySQL</div>
            <div className='skill-name'>- Tableau</div>
            <div className='skill-name'>- Basic Python</div>
            <div className='skill-name'>- MS Office</div>
            <div className='skill-name'>- Power Query</div>
            <div className='skill-name'>- Power Pivot</div>
            <div className='skill-name'>- Analytics</div>
            <div className='skill-name'>- Data Analysis</div>
            <div className='skill-name'>- Business Intelligence</div>
            <div className='skill-name'>- Data Analytics</div>
            <div className='skill-name'>- Business Analytics</div>
            <div className='skill-name'>- Data Visualization</div>
            <div className='skill-name'>- Data Analyst</div>
            <div className='skill-name'>- Statistics and Probability</div>
          </div>
        </div>
      </div>


      <div className='skills'>
        <div className='skill-heading'>Languages</div>
        <div className='container'>
          <div className='lang-names'>
            <div className='skill-name'>- English (Native or Bilingual Proficiency)</div>
            <div className='skill-name'>- Hindi (Native or Bilingual Proficiency)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume