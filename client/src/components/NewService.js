import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewService.css';

function AddNewService() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [formVisible, setFormVisible] = useState(true); // State to manage form visibility
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
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add service');
        }
        return response.json();
      })
      .then(data => {
        console.log('Service added:', data);
        alert('Service added successfully');
        // Reset the form fields
        setName('');
        setDescription('');
        setPrice('');
        // Hide the form after successful submission
        setFormVisible(false);
        // Navigate to services offered page or any other desired page
        navigate('/services_offered');
      })
      .catch(error => {
        console.error('Error adding service:', error);
        alert('Failed to add service');
      });
  };

  if (!formVisible) {
    return (
      <div className="newservice">
        <h1>Service added successfully!</h1>
      </div>
    );
  }

  return (
    <div className="newservice">
      <h1>Add new service</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit">Add Service</button>
      </form>
    </div>
  );
}

export default AddNewService;
