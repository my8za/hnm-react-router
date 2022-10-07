import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

function ProductDetail() {
  let { id } = useParams();
  const [ product, setProduct ] = useState(null);
  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/my8za/hnm-react-router/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail();
  }, [])
  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} alt='img'/>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div className='product-choice'>{product?.choice == true ? 'Conscious choice' : ''}</div>
          {/* <div>{product?.new == true ? 'NEW' : ''}</div> */}
          
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product?.size.map(item => <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
          
          <button className='product-btn'>추가</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
