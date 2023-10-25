import { Col} from 'antd'
//import Search from 'antd/es/input/Search'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccout, WrapperTextHeaderSmall } from './style'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}> col - 6</Col>
        <Col span={12}>
        <ButtonInputSearch
            size="large"
            textButton="Tìm Kiếm"
            bordered={false}
            placeholder="Nhập từ khóa cần tìm kiếm"

        />
        </Col>
        <Col span={6} style={{display: 'flex', gap: '20px', alignItems: 'center' }} >
        <WrapperHeaderAccout>
            <UserOutlined style={{fontSize: '35px'}} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
              <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
              <CaretDownOutlined />
              </div>
            </div>
        </WrapperHeaderAccout>
        <div>
            <ShoppingCartOutlined style={{fontSize: '35px', color: '#fff', }} />
            <WrapperTextHeaderSmall style={{display: 'flex', alignItems: 'center'}}>Giỏ hàng</WrapperTextHeaderSmall>
        </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
