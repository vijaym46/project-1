import React from 'react'
import { productLists } from './ProductList'

const ProductSlide = () => {
  return (
    <div className='w-3/4 m-auto'>
      <div className='mt-20'>
        {productLists.map((product) => {
            <div>
                <div>
                    <img src={product.image} alt="product" />
                </div>
                <div>
                    <h1>{product.name}</h1>
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default ProductSlide
