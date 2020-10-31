import React, { Component } from "react";

export default class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <div className="header__left">
          <img className="img-fluid" src="images/web-logo.png" />
        </div>
        <div className="header__mid">
          <ul>
            <li>Lịch Chiếu</li>
            <li>Cụm rạp</li>
            <li>Tin Tức</li>
            <li>Ứng dụng</li>
          </ul>
        </div>
        <div className="header__right">
          <span>
            <img src="images/avatar.png" /> Đăng Nhập
          </span>
        </div>
        <div className="header__menu-repos">
          <i className="fa fa-stream" />
        </div>
        <div className="header__menu-repos_c">d</div>
      </header>
    );
  }
}
