import { useState } from 'react';
import "../styles/Booking.css";

export default function Booking() {
  const [form, setForm] = useState({
    checkin: '',
    checkout: '',
    guests: '2 Adults',
    roomType: 'Standard Room',
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="booking-strip" id="booking">
      <div className="booking-form">
        <div className="form-group">
          <label>Check-in Date</label>
          <input type="date" name="checkin" value={form.checkin} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Check-out Date</label>
          <input type="date" name="checkout" value={form.checkout} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Guests</label>
          <select name="guests" value={form.guests} onChange={handleChange}>
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>2 Adults, 1 Child</option>
            <option>2 Adults, 2 Children</option>
            <option>3 Adults</option>
          </select>
        </div>
        <div className="form-group">
          <label>Room Type</label>
          <select name="roomType" value={form.roomType} onChange={handleChange}>
            <option>Standard Room</option>
            <option>Deluxe Room</option>
            <option>Family Suite</option>
            <option>Presidential Suite</option>
          </select>
        </div>
        <div className="form-group">
          <label>&nbsp;</label>
          <button className="btn-primary" style={{ width: '100%', padding: '0.8rem 2rem' }}>
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
}
