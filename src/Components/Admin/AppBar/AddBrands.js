import React, { useState } from 'react';

const AddBrands = () => {
  const [brands, setBrands] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the category data to the Firebase API using the fetch API
    fetch('https://shoppingapp-ce43b-default-rtdb.firebaseio.com/brands.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: brands })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
      
    // Clear the form input after submitting
    setBrands('');
   
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="categoryInput">Category Name</label>
          <input type="text" className="form-control" id="categoryInput" value={brands} onChange={(event) => setBrands(event.target.value)} required />
        </div>
        
        <button type="submit" className="btn btn-primary">Add Category</button>
      </form>
    </>
  );
};

export default AddBrands;
