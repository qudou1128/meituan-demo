import React, { Component } from 'react'
import './SellerList.scss'
import API from '../api'
import 'whatwg-fetch'

export default class SellerList extends Component{
    constructor(){
        super();
        this.state = {
           sellList:[]
        }
    }
    render(){
       
        return (
            <div>
                <div className="top-placeholder">
                    <div className="top-placeholder-inner">附近商家</div>
                </div>

            </div>
        )
    }

    componentDidMount(){
        //请求左边侧边栏的频道数据
        fetch(API.SELLER_LIST_API,{
            method:'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: JSON.stringify({
                uuid: 'KG7UUCHyahH99VUgdX3ZMbh42uzJDUg0Jt-IAvaBcv5q-Vpm4upswk-zCr3vjV3_',
                platform: '3',
                partner: '4',
                page_index: '0',
                apage: '1',
                mtsi_font_css_version: '20ad699b'
              })
        })
        .then(response => {
            return response;
        })
        .then(result => {
            // console.log(result)
            this.setState({sellList: result.data});
        })
        .catch(error => {
            console.log(error);
        })

    }
}