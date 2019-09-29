import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <h5 style={{marginTop:'0px'}}>{this.props.company} | {this.props.location}</h5>
          {Array.from(this.props.jobDescription).map( (data, index) => 
            <div key={index}>
              <p >{data.info}</p>
            </div>
          )}
        </Cell>
      </Grid>
    )
  }
}

export default Experience;