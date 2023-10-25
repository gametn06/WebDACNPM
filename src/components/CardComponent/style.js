import { Card } from "antd";
import styled from "styled-components";


export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img{
        height: 200px;
        width: 200px;
    }
`

export const StyleNameProduct = styled.div`
    font-weight:400;
    font-size: 14px;
    line-height: 16px;
    color: black;
`

export const WrapperReportText = styled.div`

    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin : 6px 0;
`
export const WrapperPriceText = styled.div`
    color: rgb(255, 66, 78);
    font-size: 20px;
    font-weight: 500px;

`
export const WrapperPriceDiscountText = styled.span`
    color: rgb(255, 66, 78);
    font-size: 14px;
    font-weight: 500px;
`