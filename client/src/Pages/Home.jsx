import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username");

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    } else {
      fetchEvents();
    }
  }, [userId, navigate]);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`/api/events/user/${userId}`);
      setEvents(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/events/add", {
        title,
        description,
        date,
        userId,
      });
      setTitle("");
      setDescription("");
      setDate("");
      fetchEvents(); // refresh event list
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-danger"
          onClick={async () => {
            try {
              await axios.post("/api/auth/logout");
            } catch (error) {
              console.error("Logout API error:", error);
            }
            localStorage.removeItem("userId");
            localStorage.removeItem("username");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>

      <h1 className="text-center mb-4">Welcome, {username}!</h1>

      <div className="row">
        {/* Event List */}
        <div className="col-md-7 mb-4">
          <div className="card shadow p-4 event-list">
            <h2 className="mb-4">Your Events</h2>
            {events.length === 0 ? (
              <p className="text-muted text-center">
                No events found. Start by adding one!
              </p>
            ) : (
              <ul className="list-group">
                {events.map((event) => (
                  <li key={event._id} className="list-group-item mb-3">
                    <h5>{event.title}</h5>
                    <small className="text-muted">
                      {new Date(event.date).toDateString()}
                    </small>
                    <p>{event.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Add Event Form */}
        <div className="col-md-5">
          <div className="card shadow p-4 add-event-form">
            <h2 className="mb-4">Add New Event</h2>
            <form onSubmit={handleAddEvent}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Event Title"
                  value={title}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Event Description"
                  value={description}
                  rows="3"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3">
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  required
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Add Event
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
