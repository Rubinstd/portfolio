import React, {Component} from 'react';
import { Tabs, Tab, Card, CardTitle, CardMenu, CardText, CardActions, Button, IconButton, Grid, Cell} from 'react-mdl';
import ProjectData from '../data/projectdata.json';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories(){
      console.log("toggleCat")
      return(
        <div className="projects-grid">
          {ProjectData.filter( projectGroup => projectGroup.id === this.state.activeTab)
                      .map( (data) => data.projectList.map( (project) => 
                        <Card key={project.id} shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                          <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >{project.name}</CardTitle>
                          <CardText>
                            {project.description}
                          </CardText>
                          <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                          </CardActions>
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
            <div>
              <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              {ProjectData.map((projectGroup) => {
                return (
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