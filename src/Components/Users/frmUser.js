import React, { Component } from 'react';
import axios from 'axios';
import { withAlert } from 'react-alert';


class FormUser extends Component {

    constructor() {
        super();
        this.state = {
            listPokja: [],
        }
    }

    //Prosedur Nambah User
    tambahUser({ username, password, nama, email, id_pokja }) {
        console.log({ username, password, nama, email, id_pokja })
        axios.post(`http://localhost:3030/api/daftar`, { username, password, nama, email, id_pokja })
            .then(response => {
                this.props.alert.show("Data Berhasil Disimpan");
            })
            .catch(error => {
                this.props.alert.error("Inputan Tidak Lengkap/Gagal Menyimpan");
            })
    }

    //List 
    componentWillMount() {
        axios.get('http://localhost:3030/api/pokja')
            .then(response => {
                this.setState({ listPokja: response.data.data })
                // console.log(respone)
            })
    }

    // renderListPokja
    renderlistPokja(id) {
        return this.state.listPokja.map((item, index) =>
            <option selected value={item.id} key={index} > {item.pokja}
            </option>
        )
    }

    render() {
        return (
            <div className="panel-group">
                <div className="panel panel-success">
                    <div className="panel-heading"><h4>Form Tambah User</h4></div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="form-group col-sm-3">
                                <label className="h4">Nama Karyawan</label>
                                <input type="text" ref="nama" className="form-control" placeholder="Masukkan Nama Karyawan" required />
                            </div>
                            <div className="form-group col-sm-2">
                                <label className="h4">User Name</label>
                                <input type="text" ref="username" className="form-control" placeholder="Masukkan UserName" required />
                            </div>
                            <div className="form-group col-sm-3">
                                <label className="h4">Password</label>
                                <input type="password" ref="password" className="form-control" placeholder="Password" required />
                            </div>
                            <div className="form-group">
                                <div className="col-md-3">
                                    <label className="h4">Email</label>
                                    <input type="text" ref="email" className="form-control" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-10"> Pilih Pokja </label>
                                <div className="col-sm-3">

                                    <select ref="id_pokja">
                                        {this.renderlistPokja()}
                                    </select>

                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12 right">
                                    <button type="submit" id="form-submit" className="btn fourth btn-lg pull-left " onClick={(event) => {
                                        event.preventDefault()
                                        this.tambahUser({
                                            nama: this.refs.nama.value,
                                            username: this.refs.username.value,
                                            password: this.refs.password.value,
                                            email: this.refs.email.value,
                                            id_pokja: this.refs.id_pokja.value,
                                        })
                                        this.refs.nama.value = ""
                                        this.refs.username.value = ""
                                        this.refs.password.value = ""
                                        this.refs.email.value = ""
                                        this.refs.id_pokja.value = ""
                                    }}>Simpan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withAlert(FormUser)