import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Image() {
  return (
    <div className="Image">
      <img src='img/dschool_logo.png'></img>
    </div>
  );
}

function Search(){
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    console.log('검색어:', searchTerm);
  };

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={handleSearchClick}>검색</button>
      {}
    </div>
  );
}
function App0() {
  return (
    <div className="App0">
      <Image />
      <Search />
    </div>
  );
}

function App1() {
  return (
    <div className="App1">
      <h4><br/><br/>입시 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
      <h4><br/><br/>학원 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
      <h4><br/><br/>학교 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
      <h4><br/><br/>수다 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
      <h4><br/><br/>리뷰 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
      <h4><br/><br/>소식 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
      <h4><br/><br/>토론 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
      <h4><br/><br/>| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
      <h4><br/><br/>#고등 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
      <h4><br/><br/>#중등 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
      <h4><br/><br/>#초등 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
      <h4><br/><br/>홍길동님 안녕하세요. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
      <h4><br/><br/>로그아웃 &nbsp;&nbsp;&nbsp;&nbsp;</h4>
      <h4><br/><br/>| &nbsp;&nbsp;&nbsp;&nbsp;</h4>
      <h4><br/><br/>마이페이지 &nbsp;&nbsp;&nbsp;&nbsp;</h4>
      </div>
  );
}

function App() {
  return (
  <div className="App">
      <App0 />
      <App1 />
    </div>);
}

export default App;