import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <h3>{this.props.groupName}</h3>
          {Array.from(this.props.skills).map( (data, index) => 
            <div key={index}>
              <p >{data.info}</p>
            </div>
          )}
          <div style={{display: 'flex'}}>{this.props.skill} <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress} /> </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;