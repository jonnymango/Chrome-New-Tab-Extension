import React, { Component } from 'react';
import GetJamPosts from './components/jamPosts/getJamPosts';
import GetJamNews from './components/jamNews/getJamNews';
import GetTankPosts from './components/tankPosts/getTankPosts';
import GetJarPosts from './components/jarPosts/getJarPosts';
import Settings from './components/settings/settings';
import Greeting from './components/greeting/greeting';
import GetNews from './components/news/news';


// fetch("http://www.splashbase.co/api/v1/images/random")
// .then( response => response.json())
// .then(
//     // handle the result
//     (result) => {
// document.body.style.backgroundImage = result.large_url;
//     },
//     // Handle error
//     (error) => {
//
//     },
// )



import './App.css';
class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          error : null,
          isLoaded : false,
          bgImg : ''
      };
  }
  componentDidMount(){
      // I will use fake api from jsonplaceholder website
      // this return 100 posts
      fetch("http://www.splashbase.co/api/v1/images/random")
      .then( response => response.json())
      .then(
          // handle the result
          (result) => {
              this.setState({
                  isLoaded : true,
                  bgImg : result.url
              });
          },
          // Handle error
          (error) => {
              this.setState({
                  isLoaded: true,
                  error
              })
          },
      )
  }
  render() {
    return (
      <div className="App" >
          <Greeting/>
          <div className="wrapper">
          <h2 className="newsTitle">Latest News &amp; Updates</h2>
          <div className="postsHolder">
          
          <div className="largeHolder">
            <GetNews/>
          </div>
          <div className="smallHolder">
          <GetJamPosts/>
          <GetJamNews/>
          <GetTankPosts/>
          <GetJarPosts/>
          </div>
          
          </div>
          </div>
          <Settings/>
      </div>
    );
  }
}
export default App;
