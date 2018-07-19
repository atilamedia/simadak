import React, { Component } from 'react';
// import { Link, Redirect} from "react-router-dom";
import axios from 'axios'
import './user.css'
import FormUser from './frmUser'
import ListPokja from './frmlistpokja'

export default class Users extends Component {
  constructor() {
    super()
    this.state = {
      dataUser: [],
      redirect_login: false
    }
  }

  componentWillMount() {
    axios.get('http://localhost:3030/api/user')
      .then(ambilData => {
        console.log(ambilData)
        this.setState({ dataUser: ambilData.data })
      })
  }

  renderUsers() {
    return this.state.dataUser.map((item, index) =>
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td><button>Hapus</button><button>Edit</button></td>
      </tr>
    )
  }


  render() {

    return (
      <div className="main-content">
        <div className="col col-md-12">
          <div className="alert alert-success">
            <strong> Kelola Data User dan Nama Pokja </strong>
          </div>
        </div>
        <table className="table1">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Pokja</th>
              <th>Username</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.renderUsers()}  */}
          </tbody>
        </table>
        <div className="row">
          <div className="col-sm-2 left">
            <button data-toggle="collapse" data-target="#demo" className="btn fourth">Daftar User</button>
          </div>
          <div className="col-sm-4 left">
            <button data-toggle="collapse" data-target="#pokja" className="btn fourth">Daftar Pokja</button>
          </div>
        </div>
        <div id="demo" className="collapse formfile"> <FormUser /> </div>
        <div id="pokja" className="collapse formfile"> <ListPokja /> </div>
      </div>
    );
  }
}
