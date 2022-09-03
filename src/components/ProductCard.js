import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard({ item }) {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
    <div onClick={showDetail}>
      <img className='product-card' src={item?.img} />
      <div>{item?.choice == true ? 'Conscious choice' : ''}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new == true ? 'NEW' : ''}</div>
    </div>
  )
}

export default ProductCard
