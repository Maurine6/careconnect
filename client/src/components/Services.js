import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/Services")
      .then((r) => r.json())
      .then(setServices);
  }, []);

  function handleDelete(id) {
    fetch(`/services/${id}`, {
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
    <section className="container">
      {services.map((service) => (
        <div key={service.id} className="card">
          <h2>
            <Link to={`/services/${service.id}`}>{service.name}</Link>
          </h2>
          <p>Category: {service.category}</p>
          <p>Name: {service.name}</p>
          <p>Price: {service.price}</p>
          <button onClick={() => handleDelete(service.id)}>Delete</button>
        </div>
      ))}
    </section>
  );
}

export default Services;
