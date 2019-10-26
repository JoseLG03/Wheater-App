import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendContainer from './containers/ForecastExtendContainer';
import './App.css';

const cities=[
  'Buenos Aires, ar',
  'Ciudad de México, mx',
  'Washington, us',
  'Bogota, co',
  'Lima, pe',
  'Madrid, es'
];

class App extends Component{

  render(){

    return(
        <Grid>
            <Row>
              <AppBar position='sticky'>
                <Toolbar>
                  <Typography color='inherit'>
                    Weather App  
                  </Typography>
                </Toolbar>
              </AppBar>
            </Row>
            <Row>
              <Col  xs={12} md={6}>
                <LocationListContainer cities={cities}/>
              </Col>
              <Col xs={12} md={6}>
                <Paper elevation={4}>
                  <div className="details">
                        <ForecastExtendContainer/>
                  </div>
                </Paper>
              </Col>
            </Row>        
        </Grid>
    );
  }
}

export default App;
