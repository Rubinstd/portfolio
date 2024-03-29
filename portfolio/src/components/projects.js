import React, {Component} from 'react';
import { Tabs, Tab, Card, CardTitle, CardMenu, CardText, CardActions, Button, IconButton, Grid, Cell} from 'react-mdl';
import ProjectData from '../data/projectdata.json';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories(){
      return(
        <div className="projects-grid">
          {ProjectData.filter( projectGroup => projectGroup.id === this.state.activeTab)
                      .map( (data) => data.projectList.map( (project) => 
                        <Card key={project.id} shadow={5} style={{ minWidth: '300px', margin: '10px' }}>
                          <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >{project.name}</CardTitle>
                          <CardText>
                            {project.description}
                          </CardText>
                          <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                          </CardMenu>
                        </Card>
                      ))
          }
        </div>
      )
    }
    
    render(){
        return(
            <div className="resume-card">
              <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              {ProjectData.map((projectGroup) => {
                return (
                  <Tab key={projectGroup.id}>{projectGroup.name}</Tab>
                )
              })}
              </Tabs>
                <Grid>
                  <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                  </Cell>
                </Grid>
            </div>
          )
    }

}

export default Projects;