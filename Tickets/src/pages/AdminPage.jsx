import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

const UserPage = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [routes, setRoutes] = useState([]);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    // Calculate tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowISO = tomorrow.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    setMinDate(tomorrowISO);
  }, []);

  const handleSearch = () => {
    // Check if both "from" and "to" fields are filled
    if (from.trim() !== "" && to.trim() !== "") {
      fetch(`http://localhost:5110/Routes`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // Filter routes based on the provided source and destination
          const filteredRoutes = data.filter(
            (route) => route.source === from && route.destination === to
          );
          setRoutes(filteredRoutes);
        })
        .catch((error) => {
          console.error("Error fetching routes:", error);
        });
    } else {
      // If either "from" or "to" field is empty, display an error message or handle it as needed
      console.log('Please enter both "From" and "To" fields.');
    }
  };

  return (
    <>
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-4 px-6">
          <div className="flex items-center space-x-4">
            <img src="/logo.jpg" alt="Logo" className="h-10" />
            <div className="text-lg font-bold">CFR Travellers</div>
          </div>
          <div className="flex space-x-4">
            <label htmlFor="">username</label>
            <NavLink
              to="/login"
              className="bg-orange-500 px-4 py-2 rounded text-white"
            >
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
