import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'

export const CartItems = () => {

    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)

  return (
    <>
    <Navbar/>
    <div className='cartitems'>
        <h1 className='cartitems-cart-title'>CART</h1>
        <div className="cartitems-format-main">
            <p className='cartitems-format-categories'>Products</p>
            <p className='cartitems-format-categories'>Title</p>
            <p className='cartitems-format-categories'>Price</p>
            <p className='cartitems-format-categories'>Quantity</p>
            <p className='cartitems-format-categories'>Total</p>
            <p className='cartitems-format-categories'>Remove</p>
        </div>
        <hr />
       {all_product.map((e)=> {
        if (cartItems[e.id]>0) {   
            return <div>
                <div className="cartitems-format cartitems-format-main">
                    <img className='carticon-product-image' src={e.image} alt="" />
                    <p className='cartitem-name'>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='remove-icon' onClick={()=> {removeFromCart(e.id)}} src={remove_icon} alt="" />
                </div>
                <hr />
            </div>
        }
        return null
       })}
       <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>$0</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <Link to='/inprogress'><button>PROCEED TO CHECKOUT</button></Link>
        </div>
       </div>
    </div>
    </>
  )
}
