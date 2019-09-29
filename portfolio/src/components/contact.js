import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import ContactData from '../data/contactinfo.json'

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>{ContactData.name}</h2>
            <img
              src={ContactData.profilePhoto}
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>{ContactData.description}</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                {ContactData.contacts.map( info =>
                  <ListItem key={info.info}>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className={info.label} aria-hidden="true"/>
                    {info.info}
                  </ListItemContent>
                </ListItem>
                )}
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;