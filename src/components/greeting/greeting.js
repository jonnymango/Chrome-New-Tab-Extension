import React, { Component } from 'react';
import './greeting.css'

class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            active: false,
            user: localStorage.getItem('user') || '',
            userGreeting: '',
            isLoggedIn: false
        };
    }

    componentDidMount(){
        //
      //
      let userGreeting = '';
      let checkLogin = false;

      if(this.state.user !== ''){
        userGreeting = 'Hello, ';
        checkLogin = true;
      }
      this.setState({
          isLoaded : true,
          userGreeting: userGreeting,
          isLoggedIn: checkLogin
      });
    }
    render() {
        const {error, isLoaded, isLoggedIn} = this.state;
        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
          if(!isLoggedIn){
            return(
              <div className="greeting-container">
              <div className="tjSmiley"><img src="TJ_Smiley.png" alt="" /></div>
                 <h2 className="greeting" id="greeting">Hello!</h2>
              </div>
            );
          }else{
            return(
              <div className="greeting-container">
                <div className="tjSmiley"><img src="TJ_Smiley.png" alt="" /></div>
                 <h2 className="greeting" id="greeting">Hello, {this.state.user}</h2>
              </div>
            );
          }


        }

    }
  }

  export default Greeting;
