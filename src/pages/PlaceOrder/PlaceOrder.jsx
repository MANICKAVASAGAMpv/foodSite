import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/storeContext'

const PlaceOrder = () => {

      const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
     <div className="place-order-left">
        <p className="title">Delivery Informaton</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First name'/>
          <input type="text"  placeholder='Second name' />
        </div>
        <div>
          <input type="email" placeholder='Email'/>
          <input type="text"  placeholder='Street' />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='City'/>
          <input type="text"  placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Pin code'/>
          <input type="text"  placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
     </div>
     <div className="place-order-right">
     <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 :getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>Proceed to payment</button>
        </div>
     </div>
    </form>
  )
}

export default PlaceOrder