import React, { Component } from 'react';
import axios from 'axios';


export default class ListPokja extends Component {

    addlistPokja({ pokja }) {
        axios.post(`http://localhost:3030/api/pokja`, { pokja })
            .then(response => { alert('User Telah Ditambahkan') })
    }

    render() {
        return (
            <div className="panel-group">
                <div className="panel panel-success">
                    <div className="panel-heading"><h4>Form Tambah Pokja</h4></div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="form-group col-sm-3">
                                <label className="h4">Nama Pokja</label>
                                <input type="text" ref="pokja" className="form-control" placeholder="Masukkan Nama Pokja" required />
                                <button type="submit" id="form-submit" className="btn fourth btn-lg pull-left " onClick={(event) => {
                                    event.preventDefault()
                                    this.addlistPokja({
                                        pokja: this.refs.pokja.value,
                                    })
                                    this.refs.pokja.value = ""
                                }}>Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
