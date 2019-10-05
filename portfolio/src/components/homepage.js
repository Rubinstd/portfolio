import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import Burger from '@animated-burgers/burger-arrow' 


import '@animated-burgers/burger-arrow/dist/styles.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { hover: false };
    }

    getComponent(key) {
        this.props.onClick(key);
     }

    render() {
        return (
            <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <div className="title-text">
                            <h1>Hello, I'm Daniel Rubinstein</h1>
                            <p>I'm a Software Developer</p>

                            <Button raised onClick={this.getComponent.bind(this)}>
                                <h5 className="button-style">See more</h5>
                                <Burger
                                    isOpen={true}
                                    direction="down"
                                    className="burger-style">
                                </Burger>
                            </Button>
                        </div>
                        
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/daniel-rubinstein/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/Rubinstd" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* Gmail */}
                            <a href="mailto: rubins.daniel@gmail.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-envelope-square" aria-hidden="true" />
                            </a>

                            {/* Phone */}
                            <a href="Tel: 647-995-9319" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-phone-square" aria-hidden="true" />
                            </a>
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }

}

export default Home;