import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddNewService from "./NewService";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services_offered")
      .then((r) => r.json())
      .then(setServices);
  }, []);

  function handleDelete(id) {
    fetch(`/services_offered/${id}`, {
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
    <div>
    <AddNewService/>
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
