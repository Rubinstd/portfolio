import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />
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