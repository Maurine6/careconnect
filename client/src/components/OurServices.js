import { useEffect, useState } from "react";


function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services_data")
      .then((r) => r.json())
      .then(setServices);
  }, []);
  return (
    <div className="services">
    <section className="container">
      {services.map((service) => (
        <div key={service.id} className="card">
          <p>Name: {service.name}</p>
        </div>
      ))}
    </section>
  </div>
  );
}

export default Services;