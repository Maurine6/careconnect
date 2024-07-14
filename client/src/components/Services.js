import { useEffect, useState } from "react";

function Services() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    fetch("/services_data")
      .then((r) => r.json())
      .then(setServices);
  }, []);

  function handleDelete(id) {
    fetch(`/service_data/${id}`, {
      method: "DELETE",
    })
    .then((r) => {
      if (r.ok) {
        setServices(services.filter((service) => service.id !== id));
      }
    })
    .catch((error) => console.error("Error deleting service:", error));
  }

  function toggleServiceDetails(service) {
    setSelectedService(service.id === selectedService ? null : service);
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'darkblue' }}>Our services</h1>
      <div className="feature">
          <img src="/hospital.jpg" alt="Efficient Management" className="feature-image" />
          <h3>Efficient Management</h3>
          <p>Streamline operations and improve efficiency with our tools.</p>
        </div>
        <div className="bg">
          <img src="/pexels-fr3nks-305568.jpg" alt="Efficient Management" className="bg-image" />
          <h3>Efficient Management</h3>
          <p>Streamline operations and improve efficiency with our tools.</p>
        </div>
      <section className="container">
        {services.map((service) => (
          <div key={service.id} className="card" onClick={() => toggleServiceDetails(service)}>
            <h2>{service.name}</h2>
          </div>
        ))}
      </section>
      {selectedService && (
        <div className="details-container">
          <h3>{selectedService.name}</h3>
          <p>Description: {selectedService.description}</p>
          <p>Price: {selectedService.price}</p>
          <button onClick={() => handleDelete(selectedService)}>Delete</button>
        </div>
)}

    </div>
  );
}

export default Services;
