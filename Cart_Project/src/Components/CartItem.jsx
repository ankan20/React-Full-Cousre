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
    return(
        <>
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={style.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:'gray'}}>Rs 10000</div>
                    <div style={{color:'gray'}}>Qty : 1</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        </>
    );
};
export default CartItem;