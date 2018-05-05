import React, { Component } from 'react';
import Team1 from '../../static/images/team/team1.jpg';
import Team2 from '../../static/images/team/team2.jpg';
import './team.css';

export default class TeamComponent extends Component {

  render() {
    return ( 
      <div className="team__wrapper container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <h1>Our Team</h1>
              </div>
              <div className="col-md-9">
                <div className="team-container">
                  <img src={Team1} width="100%"/>
                  <div className="team-profile-wrapper">
                    <div className="profile">
                      <h5>Arlin Dwi Pawestri, S.E</h5>
                      <div className="caption">
                        <label>Kepala Inkubator</label>
                        <h6>Direktur Bengkel</h6>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                    <div className="profile">
                      <h5>Citra Kusuma, S.T</h5>
                      <div className="caption">
                        <label>Manager Inkubator</label>
                        <h6>Wakil Direktur</h6>
                      </div>
                      <p>
                        Lulusan Teknik Industri, UNS, Surakarta. Memiliki berbagai pengalaman di bidang teknologi, industri, dan bisnis. Pernah tergabung dalam Tim Peneliti Bus Listrik UNS (2016) dan Tim Pembantu Peneliti Pengembangan Mobil Listrik Molina UNS (2015).
                      </p>
                    </div>
                    <div className="profile">
                      <h5>Niluh Made Lugasa, S.T</h5>
                      <div className="caption">
                        <label>Kesekretariatan</label>
                        <h6>Administrasi</h6>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="team-container">
                  <img src={Team2} width="100%"/>
                  <div className="team-profile-wrapper">
                    <div className="profile">
                      <h5>Yohanes Firdaus, S.T</h5>
                      <div className="caption">
                        <label>Fasilitas Pembiayaan</label>
                        <h6>Marketing</h6>
                      </div>
                      <p>
                        Saat ini terdaftar sebagai mahasiswa S2 Teknik Mesin Universitas Sebelas Maret. Memiliki pengalaman kerja di PT. PINDAD Persero (Bandung). Ketrampilannya di dalam bidang teknologi pernah membawanya menjadi pemenang CPPBT 2017: F-DROUNS (UNS Drone for Farming) pada tahun 2017.
                      </p>
                    </div>
                    <div className="profile">
                      <h5>Sahid Bayu S., S.T</h5>
                      <div className="caption">
                        <label>Jejaring Bisnis</label>
                      </div>
                      <p>
                        Lulusan Teknik Mesin Universitas Sebelas Maret Surakarta. Memiliki pengelaman kerjsa sebagai Maintenance Cyulunder Asst di PT. Balai Yasa Yogyakarta. Pernah tergabung di dalam tim riset Optimization Study of Composite Materials for the Front Bumper of Indonesian Electric Vehicle (MOLINA) pada 2012
                      </p>
                    </div>
                    <div className="profile">
                      <h5>Anditya Endar P., S.T</h5>
                      <div className="caption">
                        <label>Pengembangan Produk dan SDM</label>
                        <h6>Operasional</h6>
                      </div>
                      <p>
                        Memiliki banyak pengalaman di bidang pengembangan produk dan SDM. Pernah tergabung di dalam Tim Penelitian Alat Antik Kecelakaan Motor Menggunakan Sensor Jarak dan Microcontroller AVR ATMEGA 16 dan Tim Trial Production, Uji Lapangan, Sertifikasi dan Standarisasi Sepeda Listrik BIKUNS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
