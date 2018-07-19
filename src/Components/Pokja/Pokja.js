import React, { Component } from 'react';
import axios from 'axios';
// import { Line } from 'rc-progress'
import './Pokja.css';
import FormPokja from './frmpokja';



export default class Pokja extends Component {
  constructor() {
    super()
    this.state = {
      dataPokja: [],
    }
  }

  componentWillMount() {
    axios.get(`http://localhost:3030/api/pokja/${this.props.id_pokja}`)
      .then(ambilData => {
        console.log("id pokja", this.props.id_pokja)
      })
      .catch(response => {
        console.log("error", response)
      })
  }

  // renderUsers(){
  //     return this.state.dataUser.map(( item , index) =>
  //       <tr key={index}>  
  //         <td>{item.name}</td>
  //         <td>{item.email}</td>
  //         <td>{item.phone}</td>
  //         <td> <Line percent="50" strokeWidth="2" strokeColor="#2db7f5"/> 50% </td>
  //         <td><button>Hapus</button><button>Edit</button></td>            
  //       </tr>       
  //     )
  // }

  render() {
    return (
      <div className="main-content">
        <button data-toggle="collapse" data-target="#demo" className="btn fourth">Input Standart Dokument Akreditasi </button>
        <div id="demo" className="collapse formfile">
          <FormPokja />
        </div>
        <form>
          <input className="input1" type="text" name="search" refs="cariPokja" placeholder="Cari Modul Pokja.." />
        </form>
        <div className="col col-md-12">
          <div className="alert alert-danger alert-dismissible">
            <a className="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong> Catatan :  </strong>  Setelah Menginputkan Standart Dokument Akreditasi , Lengkapi Setiap Data dengan cara meng-upload <strong> File Dokumen !!! </strong>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Modul</th>
              <th>Jumlah Dokument</th>
              <th>Dokument Terisi</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.renderUsers()}  */}
          </tbody>
        </table>
      </div>
    );
  }
}
