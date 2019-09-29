import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import ResumeData from '../data/resume.json'

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={ResumeData.profilePhoto}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>{ResumeData.name}</h2>
            <h4 style={{color: 'grey'}}>Coding Monkey</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            {ResumeData.highlights.map(highlight =>
              <div key={highlight.info}>
                <p>{highlight.info}</p>
              </div>
              
            )}
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            {ResumeData.contactInfo.map(contact =>
              <div key={contact.type}>
                <h5>{contact.type}</h5>
                <p>{contact.info}</p>
              </div>
            )}
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            {ResumeData.experience.map( (job, index) => 
              <Experience
              key={index}
              startYear={job.startYear}
              endYear={job.endYear}
              jobName={job.jobName}
              company={job.company}
              location={job.location}
              jobDescription={job.jobDescription}
               />
            )}

            <h2>Education</h2>
            {ResumeData.education.map( (school, index) => 
              <Education
              key={index}
              startYear={school.startYear}
              endYear={school.endYear}
              schoolName={school.name}
              schoolDescription={school.schoolDescription}
               />
            )}

            <h2>Skills</h2>
            {ResumeData.skills.map( (skillGroup, index) => 
              <Skills
              key={index}
              groupName={skillGroup.groupName}
              skills={skillGroup.skills}
               />
            )}
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;