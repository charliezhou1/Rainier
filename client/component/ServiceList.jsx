import React, { useState, useEffect } from "react";
import axios from "axios";

// import { useSelector, useDispatch } from "react-redux";
// import { fetchServiceSuccess } from "../actions/serviceActions";

const ServiceList = (props) => {
  const [services, setServices] = useState([]);
  //   const services = useSelector((state) => state.services);
  //   const dispatch = useDispatch();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/api");
        setServices(response.data);
        //dispatch(fetchServiceSuccess(response.data));
      } catch (err) {
        console.error(`Fetching services error ${err}`);
      }
    };
    fetchServices();
  }, []);

  const handleOrderNow = (service) => {
    console.log("will create this feature later", service);
  };

  return (
    <div className="serviceListContainer">
      <h1>Services we provide</h1>
      <ul className="serviceComponent">
        {services.map((service) => (
          <li key={service._id}>
            <img src={service.picture} alt="Service" className="picture"/>
            <p>{service.title}</p>
            <p>{service.duration} hour</p>
            <p>{service.helper} helper</p>
            <p>{service.category}</p>
            <p>${service.price}</p>
            <button onClick={() => handleOrderNow(service)}>Order Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
