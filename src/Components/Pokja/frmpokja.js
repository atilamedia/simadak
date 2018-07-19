import React, { Component } from 'react';


export default class FormPokja extends Component {
    render() {
        return (
            <div className="panel-group">
                <div className="panel panel-success">
                    <div className="panel-heading"><h4>Form Tambah Standart Dokument Akreditasi</h4></div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="form-group col-sm-5">
                                <label className="h4">Modul Pokja</label>
                                <input type="text" ref="modul" className="form-control" placeholder="Contoh MKI 1" required />
                                <div className="text-danger style1">Contoh Inputan : MKI 1, MKI 2, PPI 1 </div>
                            </div>
                            <div className="form-group col-sm-5">
                                <label className="h4">Jumlah Dokument Diinputkan</label>
                                <input type="number" ref="jumlah" className="form-control" placeholder="Jumlah Dokument" required />
                            </div>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <textarea className="form-control" ref="deskripsi" rows="5" placeholder="Keterangan Pokja" ></textarea>
                                </div>
                            </div>
                            <div className="form-group col-sm-5">
                                <label htmlFor="exampleInputFile"></label>
                                <input type="file" id="exampleInputFile" />
                                <p className="help-block">Pilih Dokumen Yang Akan di Upload</p>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <button type="submit" id="form-submit" className="btn fourth btn-lg pull-right ">Simpan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
