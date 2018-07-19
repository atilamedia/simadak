import React, { Component } from 'react';
// import axios from 'axios';
import Icon from '../img/angebot.png';
import './Pokja.css';



export default class DownloadFile extends Component {


    render() {

        return (
            <div className="main-content">
                <div className="panel-group">
                    <div className="panel panel-success">
                        <div className="panel-heading"><h4> Detail Pokja dan Info Dokumen Standar Akreditasi </h4></div>
                        <div className="panel-body">
                            <div className="col-md-9 col-lg-9 ">
                                <table className="table table-responsive style4">
                                    <tbody>
                                        <tr>
                                            <td>Nama Pokja</td>
                                            <td>MKI</td>
                                        </tr>
                                        <tr>
                                            <td>Standar Akreditasi</td>
                                            <td>MKI 1.1</td>
                                        </tr>
                                        <tr>
                                            <td>Tanggal Upload</td>
                                            <td>01/07/2018</td>
                                        </tr>
                                        <tr>
                                            <td>Jumlah File Yang Harus Di Upload</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>Terisi</td>
                                            <td>3</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <ul className="list-group product-category-all style5">
                                    <li className="list-group-item">
                                        <img src={Icon} alt="icon"></img>
                                        Kesling
                                    </li>
                                    <li className="list-group-item">
                                        <img src={Icon} alt="icon" />
                                        Ilmu Kesling
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
