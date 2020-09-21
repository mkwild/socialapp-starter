import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";




import { FormClose, Notification } from 'grommet-icons';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
} from "grommet";
import "./App.css";



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
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
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






function App() {
  
  return (


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
          <div className="buttons">
                  <button id="like">Like</button>
                  <button id="follow">Follow</button>
                  <button id="message">Message</button>

                </div>
              </div>
            </JerryBox>

            <Columns>
              <div className="Column1">
                <div>
                  <Box
                    height="200px"

                  >
                  </Box>
                </div>
              </div>
              <div className="Column2">this is column 2</div>
            </Columns>

            
          </Box>
        )}

      </ResponsiveContext.Consumer>



    </Grommet >

  );
}

export default App;














