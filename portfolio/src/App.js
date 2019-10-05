import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Grid, Cell, Button } from 'react-mdl';
import { Link } from 'react-router-dom';
import Home from './components/homepage';
import Resume from './components/resume';
import Projects from './components/projects';
import Contact from './components/contact';

class App extends Component {
  constructor() {
    super();
    this.homeRef = React.createRef();
    this.resumeRef = React.createRef();
    this.projectsRef = React.createRef();
    this.contactRef = React.createRef();
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  scrollDown(event){
    this.scroll(this.resumeRef);
  }
  render() {
    return (
      <div className="demo-big-content">
        <Layout className="header-color" >
          <Header className="" 
          transparent 
          title="Daniel Rubinstein" 
          to="/" 
          style={{ color: 'white' }}>
            <Navigation>
              <Link to="/" onClick={() => {this.scroll(this.homeRef)}}>Home</Link>
              <Link to="/" onClick={() => {this.scroll(this.resumeRef)}}>Resume</Link>
              <Link to="/" onClick={() => {this.scroll(this.projectsRef)}}>Projects</Link>
              <Link to="/" onClick={() => {this.scroll(this.contactRef)}}>Contacts</Link>
            </Navigation>
          </Header>
          {/*<Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/"
          onClick={() => {this.scroll(this.homeRef)}}>
            Daniel Rubinstein</Link>}>
            <Navigation>
              <Button onClick={() => { this.scroll(this.resumeRef) }}>Resume</Button>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
    </Drawer> */}
          <Content>

            <Grid>
              <Cell style={{ width: '100%', height: '70%' }}>
                <div ref={this.homeRef}>
                  <Home onClick={this.scrollDown.bind(this)}/>
                </div>
                
              </Cell>
              <Cell style={{ width: '100%', height: '70%' }}>
                <div ref={this.resumeRef}>
                  <Resume />
                </div>
              </Cell>

              <Cell style={{ width: '100%', height: '70%' }}>
                <div ref={this.projectsRef}>
                <Projects/>
                </div>
              </Cell>

              <Cell style={{ width: '100%', height: '70%' }}>
                <div ref={this.contactRef}>
                <Contact />
                </div>
              </Cell>
            </Grid>
          </Content>
        </Layout>
      </div>

    );
  }
}

export default App;