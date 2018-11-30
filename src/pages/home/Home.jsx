import React, { Component } from 'react';
import SellerList from '../../common/SellerList'
import Top from './Header/Header';
import './Home.css';


class Home extends Component {
    render(){
        return (
            <div id="Home"  className="page">

                <Top></Top>

                <div className="downBox">
                    <div className="down">
                        <a href="#" className="baitem">
                            <img src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" alt=""/>
                        </a>
                    </div>
                </div>

                <SellerList></SellerList>

            </div>
        )
    }
}

export default Home;