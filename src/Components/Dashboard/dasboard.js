import React, { Component } from 'react';
import './dashboard.css';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="main-content">
                <h1 className="text-center text-warning">Apa Itu Simadak??</h1>
                <p className="text-center">SIMADAK adalah sebuah Sistem Informasi yang berguna untuk membantu User atau Anggota Pokja untuk
                Mengelola Dokumen Secara Rapih dan terstruktur</p>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <div className="card card-1">
                            <h3>Dokumen Pokja</h3>
                            <hr />
                            <h3>4</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-1">
                            <h3>Jumlah Pokja</h3>
                            <hr />
                            <h3>5</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-1">
                            <h3>Jumlah User</h3>
                            <hr />
                            <h3>4</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
