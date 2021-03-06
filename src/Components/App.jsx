import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="content">
        <Layout>
          <Header style={{background: '#2cb0e0'}} title={<Link style={{ color: 'white' }} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
              <div className="social-links">


                <a href="https://www.linkedin.com/in/glen-sale/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>


                <a href="https://github.com/glenpogz36" rel="noopener noreferrer" ç>
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>



              </div>
            </Navigation>
          </Header>
          <Drawer  style={{ background: 'black' }} title={<Link to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/comment">FeedBack</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>

    );
  }
}

export default App;
