import React from "react"
import { Grommet } from 'grommet'
import GetMessages from "../getMessages/GetMessages"
import RegistrationForm from "../registrationForm/RegistrationForm"

import {
    Box,
    Button,
    Collapsible,
    Heading,
    Layer,
    ResponsiveContext,
  } from "grommet";
  
  
  
  
  const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };
  
  const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background=''
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
  );
  
  const JerryBox = (props) => (
    <Box
  
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      // pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
  
      style={{ zIndex: '1' }}
      {...props}
    />
  );
  
  const Columns = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify="center"
      // background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
  );

function UserProfile (props) {
    return(
        <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar className="AppBar1">
              <div className="Heading">
                <Heading >The Jerrys</Heading>
                
              </div>

            </AppBar>


            <JerryBox>
              <div className="profile-photo">Yea I'm Jerry
          {/* <div className="buttons">
                  <button id="like">Like</button>
                  <button id="follow">Follow</button>
                  <button id="message">Message</button>
                </div> */}

                
                
              </div>
            </JerryBox>

            <Columns>
              <div className="Column1">
                <div>
                  <Box>
                      <GetMessages/>
                  </Box>
                </div>
              </div>
              
            </Columns>

            
          </Box>
        )}

      </ResponsiveContext.Consumer>
      </Grommet>

    )

}
export default UserProfile