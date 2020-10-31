import React, { Component } from "react";

export default class FormSearch extends Component {
  render() {
    return (
      <section className="tix-form-search">
        <div>
          <select name="cars" id="cars" form="carform">
            <option value>Phim</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select name="cars" id="cars" form="carform">
            <option value>Rạp</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select name="cars" id="cars" form="carform">
            <option value>Ngày Xem</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select name="cars" id="cars" form="carform">
            <option value>Xuất Chiếu</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <button className="btn btn-success">Đặt vé</button>
        </div>
      </section>
    );
  }
}
