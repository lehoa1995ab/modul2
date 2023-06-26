import React, { Component } from 'react'
import Product from './Product';

export default class ListProduct1 extends Component {
    render() {
        let dataProducts=this.props.dataListProducts;
        //let{dataListProducts}=this.props;
        let result=dataProducts.map((item,index)=>{
            return <Product key={index} stt={index} item={item}></Product>
            })
        return (
            <>
             {result}  
            </>
        )
    }
}
