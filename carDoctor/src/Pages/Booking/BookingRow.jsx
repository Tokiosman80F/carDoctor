import React from "react";

const BookingRow = ({
  booking,
  handleDeleteBooking,
  handleUpdateBooking,
  handleConfirmBooking,
}) => {
  const { _id, price, date, serviceName, image, status } = booking;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} />
            </div>
          </div>
        </div>
      </td>
      <td>{serviceName}</td>
      <td>{price}</td>
      <td>
        <button className="btn btn-ghost btn-xs">{date}</button>
      </td>
      <td>
        <button
          onClick={() => handleDeleteBooking(_id)}
          className="btn bg-red-500"
        >
          Delete
        </button>
      </td>
      <td>
        <button
          onClick={() => handleUpdateBooking(_id)}
          className="btn bg-blue-400"
        >
          Update
        </button>
      </td>
      <td>
        <button
          onClick={() => handleConfirmBooking(_id)}
          className="btn bg-blue-400"
        >
          {status ? "confirm" : "pending"}
        </button>
      </td>
    </tr>
  );
};

export default BookingRow;
