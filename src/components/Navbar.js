import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar({ authenticate, setAuthenticate }) {
  const menuList = ['여성', 'Devided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
  let [ width, setWidth ] = useState(0);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    if(e.key === "Enter") {
      // 입력한 검색어 읽어와서 url 변경
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  }

  return (
    <div>
      <div className="side-menu hide" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        <Link to='/login'>
          {authenticate ? (
            <div className='login-btn' onClick={() => setAuthenticate(false)}>
              <FontAwesomeIcon icon={faUser} />
              <span className='login-text'>로그아웃</span>
            </div>
          ) : (
            <div className='login-btn' onClick={() => navigate("/login")}>
              <FontAwesomeIcon icon={faUser} />
              <span className='login-text'>로그인</span>
            </div>
          )}
        </Link>
      </div>
      
      <div className='nav-logo'>
        <Link to='/'>
          <img 
            width={100}
            src='http://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg' 
            alt='logo' 
          />
        </Link>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu, index) => <li key={index}>{menu}</li>)}
        </ul>
        <div className='menu-input'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text' placeholder='검색어' onKeyPress={handleSearch}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
