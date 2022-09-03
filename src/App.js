import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

/* 로직
  1. 전체 상품페이지, 로그인, 상품상세페이지
  1-1. 네비게이션 바
  2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
  3. 로그인 버튼을 누르면 로그인 페이지가 나온다
  3. 상품디테일을 눌렀으나, 로그인이 안되어있을경우에는 로그인 페이지가 먼저 나옴
  4. 로그인이 되어잇을 경우에는 상품 디테일 페이지를 볼 수 있다
  5. 로그아웃 버튼을 클릭하면 로그아웃이 된다
  5. 로그아웃이 되면 상품 디테일페이지를 볼 수 없다, 다시 로그인 페이작 보인다
  6. 로그인을하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
  7. 상품을 검색할 수 있다.
*/

function App() {
  // 로그인 상태 관리 state (로그인X: false, 로그인O: true)
  const [ authenticate, setAuthenticate ] = useState(false);
  useEffect(() => {
    console.log(authenticate)
  }, [authenticate])
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />}/>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
