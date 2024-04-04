import React, { useState, useEffect } from "react";
import axios from "axios";

// import { useSelector, useDispatch } from "react-redux";
// import { fetchServiceSuccess } from "../actions/serviceActions";

const ServiceList = ({ user }) => {
  const [services, setServices] = useState([]);
  const [order, setOrder] = useState(false);
  const [error, setErrorMessage] = useState("");
  //if not log in, could not see order button
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  useEffect(() => {
    SetIsLoggedIn(!!user);
  }, [user]);

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

  const handleOrderNow = async (service) => {
    console.log("order", service);
    try {
      const response = await axios.post("/api/createorder", {
        customerName: user,
        title: service.title,
        duration: service.duration,
        helper: service.helper,
        category: service.category,
        price: service.price,
      });
      console.log(response.data);
      console.log(`username is ${user}`);
      setOrder(true);
    } catch (err) {
      setErrorMessage(`Error in your order. Please try again.`);
      console.error(`handle order ${err}`);
    }
  };

  return (
    <div className="serviceListContainer">
      <h1>Services we provide</h1>
      <ul className="serviceComponent">
        {services.map((service) => (
          <li key={service._id}>
            <img src={service.picture} alt="Service" className="picture" />
            <p>{service.title}</p>
            <p>{service.duration} hour</p>
            <p>{service.helper} helper</p>
            <p>{service.category}</p>
            <p>${service.price}</p>
            {isLoggedIn && (
              <button onClick={() => handleOrderNow(service)}>Order Now</button>
            )}
          </li>
        ))}
      </ul>
      {order ? (
        <p>Hi {user}, you successfully placed order</p>
      ) : (
        <p> {error}</p>
      )}
    </div>
  );
};

export default ServiceList;
