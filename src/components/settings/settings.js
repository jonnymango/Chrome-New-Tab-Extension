import React, { Component } from 'react';
import './settings.css'

class Settings extends Component {

    constructor(props){
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        
        this.state = {
            error : null,
            isLoaded : false,
            active: false,
            user: ''
        };
    }
    handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;

    this.setState({ [input.name]: value });
    };

  handleFormSubmit = () => {
    const { user } = this.state;
  //localStorage.setItem('rememberMe', rememberMe);
  localStorage.setItem('user', user);
  };
    toggleClass() {
        const currentState = this.state.active;
        console.log(currentState)
        this.setState({ active: !currentState });
    };
    componentDidMount(){
        //
      //

      this.setState({
          isLoaded : true,
          user: ''
      });
    }
    render() {
        const {error, isLoaded} = this.state;
        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
              <div className="settingsHolder">
              <button id="settings-button"  onClick={this.toggleClass}>Settings</button>
              <div className={this.state.active ? 'settings-active': 'settings'}
                  id="settings">
                 <form className="name-form" id="name-form" onSubmit={this.handleFormSubmit}>
                 <div><label>
                 User Name: <input name="user" value={this.state.user} onChange={this.handleChange} /></label></div>

                    <button type="submit" className="name-button" >Add</button>
                 </form>
              </div>
              </div>
            );
        }

    }
  }

  export default Settings;
