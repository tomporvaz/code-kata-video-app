import React from 'react';
import './App.css';

const theBasics = { html : "https://www.youtube.com/embed/UB1O30fR-EE",
css : "https://www.youtube.com/embed/yfoY53QXEnI",
javascript : "https://www.youtube.com/embed/hdI2bqOjy3c" };


class App extends React.Component {
  constructor(props) {
    super(props);
    //clicked is not currently used, but it has been added in order to facilitate a styling updated based on which key is pressed.
    this.state = {
      "urlList": theBasics,
      "currentIFrameURL": "https://www.youtube.com/embed/UB1O30fR-EE"
    };
    this.handleClick = this.handleClick.bind(this);
  }

 handleClick(linkName) {
   console.log(linkName);
   this.setState({
     "currentIFrameURL": this.state.urlList[linkName]
   })
    
  }

  render() {
    console.log(this.state.currentIFrameURL);
    return(<div className="App">
      
      <header className="App-header">

        

        <iframe src={this.state.currentIFrameURL} title="video-content"></iframe>
        <div className="buttonContainer">
          <button className="html" onClick={() => this.handleClick('html')}>html</button>
          <button className="css" onClick={() => this.handleClick('css')}>css</button>
          <button className="javascript" onClick={() => this.handleClick('javascript')}>javascript</button>

        </div>
        <a href="https://github.com/tomporvaz/code-kata-video-app">
          View on Github
          &nbsp;
          <i class="fab fa-github"></i>
        </a>

      </header>

    </div>)
  };
}

export default App;
