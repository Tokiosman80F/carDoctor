import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3002/bookings?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div>
      <h1>{bookings.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>PRoduct Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow key={booking._id} booking={booking}></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
