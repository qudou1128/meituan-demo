import React, { Component } from 'react';
import SellerList from '../../common/SellerList'

class Home extends Component {
    render(){
        return (
            <div id="Home"  className="page">
               <SellerList></SellerList>
            </div>
        )

    }
}

export default Home;