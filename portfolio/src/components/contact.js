import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Card } from 'react-mdl';
import ContactData from '../data/contactinfo.json'

class Contact extends Component {
  render() {
    return (
      <Card shadow={0} className="contact-card">
        <div className="">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>Contact Me</h2>
              <p>I am currently looking for a long term Co-op position (preferably 12+ months) for the May 2020 term.</p>
              <hr />
              <div className="contact-list">
                <List>
                  {ContactData.contacts.map(info =>
                    <ListItem key={info.info}>
                      <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                        <i className={info.label} aria-hidden="true" />
                        {info.info}
                      </ListItemContent>
                    </ListItem>
                  )}
                </List>
              </div>
            </Cell>
          </Grid>
        </div>
      </Card>
    )
  }
}
export default Contact;