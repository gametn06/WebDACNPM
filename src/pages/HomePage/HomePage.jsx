import React from 'react'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'

const HomePage = () => {
  const arr = ['TV', 'Tu Lanh', 'Laptop']
  return (
    <>
      <div style={{padding: '0 120px'}}>
      <WrapperTypeProduct>
        {arr.map((item) => {
            return (
              <TypeProduct name={item} key={item}  />
            )
        })}
      </WrapperTypeProduct>
      </div>
      <div id="container" style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px', width: '100%'}}>
        <SliderComponent arrImages={[slider1,slider2,slider3]}/>
        <WrapperProducts style={{marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap'}}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
          color: 'rgb(11, 116, 229)',
          border: '1px soild rgb(11, 116, 229) ',
          width: '240px',
          height: '38px',
          borderrRadius: '4px'
        }} 
        styleTextButton={{ fontWeight: 500}} />
        </div>
        <div style={{paddingBottom: '50px'}}>
        <NavbarComponent />
        </div>
      </div>
    </>
  )
}

export default HomePage
