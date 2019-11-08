import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
// import { fetchUser } from '../../redux/user/action';


export class Home extends React.Component {
  showUser = ()=>this.props.dispatch({type:"USER_FETCH_REQUESTED"})
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React With Azad Zarshad !!
          </a>
          <button onClick={this.showUser}>
          show user
          </button>
        </header>
  
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
})

// const mapDispatchToProps = {
  
// }


export default connect(mapStateToProps)(Home);

