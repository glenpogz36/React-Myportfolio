import React, { Component } from 'react';
import './App.css';
// import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
// import { Link } from 'react-router-dom';
import Landing from './Landingpage';
import Resume from './Resume';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Layout>
          <Header>
       
          </Header>
        </Layout> */}
        <Landing />
        <Resume />
      </div>

    );
  }
}

export default App;
