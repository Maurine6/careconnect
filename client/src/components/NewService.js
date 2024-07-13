//newservice
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddNewService() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Convert price to a float
    const priceFloat = parseFloat(price);
  
    const serviceData = {
      name: name,
      description: description, 
      price: priceFloat, // Use the converted float value
    };
  
    fetch('/services_data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(serviceData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Service added:', data);
      navigate('/services_offered')
    })
    .catch(error => {
      console.error('Error adding service:', error);
    });
  };

  return (
    <div className='newservice'>
        <h1>Add new service</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: '200px', height: '30px' }}
                />

            <label htmlFor="description">Description:</label>
                <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                style={{ width: '200px', height: '30px' }}
                />
            <label htmlFor="price">Price:</label>
                <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                style={{ width: '200px', height: '30px' }}
                />

            <button type="submit">Add Service</button>
        </form>
    </div>


  );
}

export default AddNewService;