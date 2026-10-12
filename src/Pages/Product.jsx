import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Breadcrum'
import ProductDisplay from '../ProductDisplay'
import DescriptionBox from '../DescriptionBox'
import RelatedProducts from '../RelatedProducts'

const Product = () => {
  const {all_product} = useContext(ShopContext) 
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div className='bg-white dark:bg-black'>     
      <Breadcrum 
      product={product}>
      </Breadcrum>
      <ProductDisplay
      product={product}>
      </ProductDisplay>
      <DescriptionBox
      product={product}>
      </DescriptionBox>
      <RelatedProducts
      category={product.category} currentId={product.id}>
      </RelatedProducts>
     
      
    </div>
  )
}

export default Product
