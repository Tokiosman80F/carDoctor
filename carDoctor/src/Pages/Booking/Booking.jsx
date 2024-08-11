import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import { data } from "autoprefixer";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3002/bookings?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, []);

  const handleUpdateBooking = (id) => {
    console.log("update booking:", id);
  };
  const handleConfirmBooking = (id) => {
    console.log("Confirm booking :", id);
    fetch(`http://localhost:3002/booking/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) alert("update successful");
        const remainingProduct = bookings.filter(
          (booking) => booking._id !== id
        );
        const updateProduct = bookings.find((booking) => booking._id === id);
        updateProduct.status='confirm'
        const newBooking = [updateProduct, ...remainingProduct];
        setBookings(newBooking);
      });
  };
  const handleDeleteBooking = (id) => {
    console.log("this is product id :", id);
    const proceed = confirm(` u want to delete the item`);
    if (proceed) {
      fetch(`http://localhost:3002/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Response Data :", data);
          if (data && data.deletedCount > 0) {
            alert("successfully deleted");
            const remaining = bookings.filter((booking) => booking._id !== id);
            console.log(remaining);
            setBookings(remaining);
          }
        })
        .catch((error) => console.log("Error:", error));
    }
  };
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
              <th>Delete</th>
              <th>update</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDeleteBooking={handleDeleteBooking}
                handleUpdateBooking={handleUpdateBooking}
                handleConfirmBooking={handleConfirmBooking}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
