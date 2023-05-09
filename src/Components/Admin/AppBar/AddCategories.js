import React, { useState } from 'react';

const AddCategories = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the category data to the Firebase API using the fetch API
    fetch('https://shoppingapp-ce43b-default-rtdb.firebaseio.com/categories.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: category, description: description })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
      
    // Clear the form input after submitting
    setCategory('');
    setDescription('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="categoryInput">Category Name</label>
          <input type="text" className="form-control" id="categoryInput" value={category} onChange={(event) => setCategory(event.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="descriptionInput">Category Description</label>
          <textarea className="form-control" id="descriptionInput" rows="3" value={description} onChange={(event) => setDescription(event.target.value)} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Add Category</button>
      </form>
    </>
  );
};

export default AddCategories;
