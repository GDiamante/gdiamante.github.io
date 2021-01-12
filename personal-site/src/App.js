import './Styles/App.css';
import React from 'react';

import Menu from './Components/Menu';
import About from './Components/About';
import Projects from './Components/Projects';
import Resume from './Components/Resume';

const HOME_PAGE = 'home'
const ABOUT_PAGE = 'about'
const PROJECTS_PAGE = 'projects'
const RESUME_PAGE = 'resume'

class App extends React.Component {

  state = {
    currentPage: HOME_PAGE
  };

  changePage = newPage => {
    this.setState({
      currentPage: newPage
    });
  }

  render() {
    document.body.style = 'background: #303030; position: absolute;';
    return (
        <div className="App">
          <Menu currentPage={this.state.currentPage} changePage={this.changePage}/>
          {this.state.currentPage === ABOUT_PAGE ? <About /> : <></>}
          {this.state.currentPage === PROJECTS_PAGE ? <Projects /> : <></>}
          {this.state.currentPage === RESUME_PAGE ? <Resume /> : <></>}
        </div>
    );
  }
}

export default App;
