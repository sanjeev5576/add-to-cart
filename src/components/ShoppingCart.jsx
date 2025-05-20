import { useState } from 'react'
import './style.css'



 const products = [
    {id:1, name:"Laptop", price:"25000"},
    {id:2, name:"Mobile", price:"15000"},
    {id:3, name:"Tablet", price:"20000"},
 ]


function ShoppingCart(){
   const [ cart, SetCart] = useState([])

    const addtocart = (product) =>{
       // alert("Product added to cart")
       SetCart((prevCart) =>{
        const existProduct = prevCart.find(item => item.id === product.id)

        if(existProduct){
            return prevCart.map(item => 
                item.id === product.id ? {...existProduct, quantity: existProduct.quantity + 1} : item
            )
       }else{
            return [...prevCart, {...product, quantity: 1}]
        }
       }
    )
    }

    const removefromcart = (id) =>{
        SetCart((prevCart) => prevCart.filter(item => item.id !== id))
    }

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    }


    return(<>
        <h1>ShoP Now</h1>
    <div className='cart-container'>
    <div className="product-listing">
        { 
            products.map((product) =>(
                <div key={product.key} className="product-item" >
                    <h3 className="product-title">{product.name}</h3>
                    <p>{product.price} Rs</p>

                    <button className="add-to-cart-btn" onClick={()=>addtocart(product)}>Add to Cart</button>
                </div>
            ))

        }
        </div>

        <div className='cart'>
            <h2 className='cart-title'>Cart</h2>
            {
                cart.length === 0 ? (<p>Cart is Empty</p>):(
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className='cart-item'>
                                {item.name} -  Rs {item.price} X {item.quantity}
                           
                            <button className='remove-btn' onClick={() => removefromcart(item.id)}>Remove</button>
                            </li>
                        ))}
                        <h3>Total Rs {getTotalPrice()}</h3>
                    </ul>
                )
            }

        </div></div>
      
    </>)
}
export default ShoppingCart