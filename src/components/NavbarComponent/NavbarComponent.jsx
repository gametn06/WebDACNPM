import { Rate } from 'antd'
import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style'

const NavbarComponent = () => {
    const renderContent = (type , options) => {
        switch(type) {
            case 'text':
                return options.map((options) => {
                    return <WrapperTextValue>{options}</WrapperTextValue>
                })
            case 'star':
                return options.map((options) => {
                    console.log('check', options)
                    return (
                        <div style={{display: 'flex' , gap: '4px'}}>
                            <span>{`Từ ${options} sao `}</span>
                            <Rate style={{ fontsize : '12px'}} disabled defaultValue={options} />
                            
                        </div>    
                        )
                })
            case 'price':
                return options.map((options) => {
                    return (
                        <WrapperTextPrice>{options}</WrapperTextPrice>
                        )
                })
            default:
                return {}
        }
    }

  return (
    <div>
      <WrapperLableText>Label</WrapperLableText>
      <WrapperContent>
        {renderContent('text', ['Tu lanh', 'Tivi', 'May Giat', 'Dien thoai'])}
        {renderContent('star', [ 3 , 4 , 5 ])}
        {renderContent('price', ['Dưới 400.000' , '400.000 - 2.000.000' , '2.000.000 trở lên' ])}
      </WrapperContent>
    </div>
  )
}

export default NavbarComponent
