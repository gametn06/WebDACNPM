
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperPriceDiscountText, WrapperPriceText, WrapperReportText } from './style'
import { StarFilled } from '@ant-design/icons'

const CardComponent = () => {
  return (
    <WrapperCardStyle
    hoverable
    headStyle={ {width: '200px', height: '200px'}}
    style={{ width: 200 }}
    bodyStyle={{ padding: '10px' }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <StyleNameProduct>Iphone</StyleNameProduct>

    <WrapperReportText>
        <span style={{marginRight: '4px'}}>
            <span> 4.7 </span>  <StarFilled style={{ fontSize: '12px', color:'yellow'}} />
        </span>
        <span> | Đã bán 999+ </span>
    </WrapperReportText>
    <WrapperPriceText>
        1.000.000 vnđ
        <WrapperPriceDiscountText>
            -10%
        </WrapperPriceDiscountText>
    </WrapperPriceText>
  </WrapperCardStyle>
  )
}

export default CardComponent
