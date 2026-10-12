import { useState } from 'react';

function ProductPannel() {
    // 1. Create all necessary state variables
    const [productId, setProductId] = useState('');
    const [productName, setProductName] = useState('');
    const [productDatePurchased, setProductDatePurchased] = useState('');

    // 2. Define handlers INSIDE the component so they can access the state
    function clearClickHandler() {
        setProductId('');
        setProductName('');
        setProductDatePurchased('');    
    }

    function showClickHandler() {
        alert(`ID: ${productId},\n Name: ${productName} ,\n Date: ${productDatePurchased}`);
    }

    return (
        <div>
            <h3>Product Details</h3>
            
            {/* 3. Add inputs for all your state variables */}
            <input
                placeholder="Product ID"
                value={productId}
                onChange={(e) => setProductId(e.target.value)} 
            /> <br />
            <input
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)} 
            /> <br/>
            <input
                type="date"
                placeholder="Date Purchased"
                value={productDatePurchased}
                onChange={(e) => setProductDatePurchased(e.target.value)} 
            />
            
            <br /><br />
            {/* 4. Fix button names and attach the handlers */}
            <button onClick={showClickHandler}>Show</button>
            <button onClick={clearClickHandler}>Clear</button>
        </div>
    );
}
export default ProductPannel;