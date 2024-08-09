import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const BookingService = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, price, _id } = service;
  const handleBookingOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const date = form.date.value;
    const email = user.email;
    const bookingInfo = {
      userName,
      price,
      email,
      date,
      prouductId: _id,
      serviceName: title,
    };
    console.log(bookingInfo);
    fetch("http://localhost:3002/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Booking successfully");
        }
      });
  };
  return (
    /**
     * Price
     * title- service name
     * username
     * email
     * date
     * btn - order confirm
     * */
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-3/5 shrink-0 shadow-2xl">
          <form onSubmit={handleBookingOrder} className="card-body w-full">
            <div className="form-control">
              {/* username */}
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                name="name"
                required
              />
              <div className="flex justify-between gap-10">
                {/* date */}
                <div>
                  <label className="label">
                    <span className="label-text">Servicing Date</span>
                  </label>
                  <input
                    type="date"
                    className="input input-bordered"
                    name="date"
                    required
                  />
                </div>
                {/* service */}
                <div>
                  <label className="label">
                    <span className="label-text">Service</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={title}
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* price */}
                <div>
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Price"
                    defaultValue={`${price}`}
                    className="input input-bordered "
                    name="price"
                    required
                  />
                </div>
              </div>

              {/* email */}
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="confirm order"
                className="custom-btn-base custom-btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingService;
