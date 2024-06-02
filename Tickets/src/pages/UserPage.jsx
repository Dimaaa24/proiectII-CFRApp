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
          <div className="flex items-center space-x-4">
            <label className="text-center w-full uppercase">
              {localStorage.getItem("username")}
            </label>
            <NavLink
              to="/login"
              className="bg-orange-500 px-4 py-2 rounded text-white"
            >
              Logout
            </NavLink>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center h-64"
        style={{ backgroundImage: "url('/train.jpg')" }}
      >
        <div className="container mx-auto flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl font-bold text-white">
            Buy the tickets online now!
          </h1>
        </div>
      </div>

      {/* Here lies the search */}
      <div className="container mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Trains coverage</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="from" className="block text-zinc-700">
              From
            </label>
            <input
              type="text"
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full border border-zinc-300 rounded p-2"
              placeholder="From"
            />
          </div>
          <div>
            <label htmlFor="to" className="block text-zinc-700">
              To
            </label>
            <input
              type="text"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full border border-zinc-300 rounded p-2"
              placeholder="To"
            />
          </div>
          <div>
            <label htmlFor="departure-date" className="block text-zinc-700">
              Departure Date
            </label>
            <input
              type="date"
              id="departure-date"
              min={minDate} // Set the minimum date to tomorrow
              className="w-full border border-zinc-300 rounded p-2"
            />
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Display routes here */}
      <div className="container mx-auto mt-8">
        {routes.map((route) => (
          <div
            key={route.id}
            className="bg-white rounded-lg shadow-md p-4 mb-4"
          >
            <p className="font-bold">Route Details:</p>
            <p>
              From: {route.source} ------ To: {route.destination}
            </p>
            <p>Departure: {route.departureTime}</p>
            <p>Arrival: {route.arrivalTime}</p>
            {/* Add more details about the route as needed */}
          </div>
        ))}
      </div>
    </>
  );
};

export default UserPage;
