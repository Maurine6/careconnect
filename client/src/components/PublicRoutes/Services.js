import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services_data")
      .then((r) => r.json())
      .then(setServices);
  }, []);

  function handleDelete(id) {
    fetch(`/service_data/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setServices((services) =>
          services.filter((service) => service.id !== id)
        );
      }
    });
  }

  return (
    <div className="services">
    <section className="container">
      {services.map((service) => (
        <div key={service.id} className="card">
          <h2>
            <Link to={`/services_offered/${service.id}`}>{service.name}</Link>
          </h2>
          <p>Name: {service.name}</p>
          <p>Description: {service.description}</p>
          <p>Price: {service.price}</p>
          <button onClick={() => handleDelete(service.id)}>Delete</button>
        </div>
      ))}
    </section>
  </div>
  
  );
}

export default Services;