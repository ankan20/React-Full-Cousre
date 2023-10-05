import React from 'react';

const CartItem = ()=>{
    // This is a object in JS and we can use it for our style
    const style ={
        image:{
          height:110,
          width:110,
          borderRadius:4,
          background:'#ccc',
        }
      }
      const details =[
        {
            name:"Phone",
            price:10000,
            qty:1,
            img:'',
        },
    ]
    //Function for increase item number
    const increase =()=>{

    }
    return(
        <>
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={style.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{details[0].name}</div>
                    <div style={{color:'gray'}}>Rs {details[0].price}</div>
                    <div style={{color:'gray'}}>Qty : {details[0].qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img alt="Increase" className='action-icons' src='https://static.vecteezy.com/system/resources/previews/001/500/298/original/add-icon-free-vector.jpg' onClick={increase}/>
                        <img alt="Decrease" className='action-icons' src='https://cdn-icons-png.flaticon.com/512/56/56889.png'/>
                        <img alt="Delete" className='action-icons' src='https://png.pngtree.com/element_our/20190528/ourmid/pngtree-delete-icon-image_1129289.jpg'/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CartItem;
//i am in 6(2)