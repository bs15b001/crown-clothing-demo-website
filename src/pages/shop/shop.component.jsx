import React from "react";
import CollectionPreview from "../../components/preview-collections/preview-collections.component";


import SHOP_DATA from './shop.data.js'

class ShopPage extends React.Component {
    constructor(props){
        super(props);


        this.state={

            collections: SHOP_DATA


        }

    }

    render(){

        const {collections}=this.state;

        return (<div className='shop'>
            {
                collections.map(({id,...othercollectionsprops})=>(<CollectionPreview key={id} {...othercollectionsprops}></CollectionPreview>))

            }





        </div>)


        }




}

export default ShopPage;