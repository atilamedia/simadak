import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-alert';
import AlertTemplate from "react-alert-template-basic";
// import axios from 'axios'
import Users from './Components/Users/user';
import Headers from './Components/HeaderLeft/Header';
import Pokja from './Components/Pokja/Pokja';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/dasboard';
import Download from './Components/Pokja/downloadfile'
import PageNotFound from './Components/404/Page404'
import axios from 'axios';

//Untuk Alert 
const options = {
  timeout: 5000,
  position: "bottom center"
};
//

class App extends Component {

  constructor() {
    super();
    this.state = {
      status_login: [],
      status: [],
      id_pokja: [],
      pokja: "",
      username: "",
      loginwarning: [],
      redirect_login: false
    }
  }


  //Login
  postLogin = (data_login) => {
    axios.post('http://localhost:3030/api/login', {
      username: data_login.username.value,
      password: data_login.password.value
    })
      .then((ambiDataLogin) => {
        console.log(ambiDataLogin)
        if (ambiDataLogin.data.data.status_login === "true") {
          this.setState({ username: ambiDataLogin.data.data.nama, pokja: ambiDataLogin.data.data.pokja.pokja, id_pokja: ambiDataLogin.data.data.pokja.id },
          )
        }
        else {
          this.setState({
            redirect_login: true,
            loginwarning: "Username dan Password Salah"
          })
        }
      })
      .catch((response) => {
        console.log('catch response', response)
      })
  }



  render() {

    return (
      <Provider template={AlertTemplate} {...options}>
        <div>
          <Headers username={this.state.username} userid={this.state.userid} pokja={this.state.pokja} />
          <div>
            <Switch>
              <Route path="/Users" component={Users} />
              <Route path="/Pokja" render={() => <Pokja id_pokja={this.state.id_pokja} />} />
              <Route exact path="/" render={() => <Login postLogin={this.postLogin} loginwarning={this.state.loginwarning} />} />
              <Route path="/detailinfo" component={Download} />
              <Route path="/dashboard" component={Dashboard} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Provider>

    );
  }
}

export default App;
