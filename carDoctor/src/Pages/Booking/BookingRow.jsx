import React from "react";

const BookingRow = ({ booking }) => {
  const { price, date, serviceName } = booking;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        
      </td>
      <td>{price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">{date}</button>
      </th>
    </tr>
  );
};

export default BookingRow;
