import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {
    const [image,setImage] = useState(false)
    const [productDetails, setProductDetails] = useState({
        name: '',
        image: '',
        category: 'women',
        new_price: '',
        old_price: '',
    })

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleChange = (e) => {
        setProductDetails({...productDetails, [e.target.name]:e.target.value})
    }

    const addProduct = async ()=> {
        console.log(productDetails)
        let responseData;
        let product = productDetails

        let formData = new FormData()
        formData.append('product', image);

        await fetch('http://localhost:4000/upload',{
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: formData,
        }).then((res) => res.json()).then((data) => {responseData = data})

        if(responseData.succes) {
            product.image = responseData.image_url;
            console.log(product)
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }).then((res) => res.json()).then((data) => {
                data.succes ? alert("Product added"): alert("Failed to add product")
            })
        }
    }

  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product title</p>
            <input value={productDetails.name} onChange={handleChange} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-item-field">
                <p>Price</p>
                <input value={productDetails.old_price} onChange={handleChange} type="text" name='old_price' placeholder='Type here'/>
            </div>
        </div>
        <div className="addproduct-price">
            <div className="addproduct-item-field">
                <p>Offer price</p>
                <input value={productDetails.new_price} onChange={handleChange} type="text" name='new_price' placeholder='Type here'/>
            </div>
        </div>
        <div className="addproduct-item-field">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={handleChange} name="category" className='add-product-selector'>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} alt="" className='addproduct-thumnail-img'/>
            </label>
            <input onChange={handleImage} type="file" name='image' id='file-input' hidden/>
        </div>
        <button onClick={() => {addProduct()}} className="addproduct-btn">ADD</button>
    </div>
  )
}

export default AddProduct