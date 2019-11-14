import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1>Monkey With A Computer?</h1>
                            <hr/>
                            <p>
                                JUGGLING | UNDERWATER BASKET WEAVING | ETC | YEA
                            </p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* Github */}
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                {/* Youtube */}
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default Landing;