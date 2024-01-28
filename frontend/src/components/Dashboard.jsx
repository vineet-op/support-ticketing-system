import React from "react";
import Person from "../../../images/Person.jpg";
import PendingTickets from "../components/PendingTickets";

const Dashboard = () => {
  //static data
  const users = [
    { name: "John Doe", date: "2022-01-28", status: "Active" },
    { name: "Jane Smith", date: "2022-01-27", status: "Inactive" },
    { name: "Bob Johnson", date: "2022-01-26", status: "Active" },
    { name: "Bob Johnson", date: "2022-01-26", status: "Active" },
  ];

  return (
    <div className="bg-amber-300 h-screen ">
      {/* <!-- Sidebar --> */}
      <div className="flex h-screen bg-gray-800 text-white ">
        {/* <!-- Sidebar Content --> */}
        <div className="w-64 bg-gray-900 p-10 border border-white">
          {/* <!-- Sidebar Heading --> */}

          {/* <!-- Sidebar Links --> */}
          <ul className="flex flex-col gap-6">
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center px-2 py-1 hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
                Dashboard
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center px-2 py-1 hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-1 14h2v-2h-2v2zm0-6h2V7h-2v3z"
                  ></path>
                </svg>
                Tickets
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center px-2 py-1 hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-1 14h2v-2h-2v2zm0-6h2V7h-2v3z"
                  ></path>
                </svg>
                Notification
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center px-2 py-1 hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19.36l-1.45 1.45a1 1 0 0 1-1.41 0L7 16.77l-4.24 4.24a1 1 0 0 1-1.41 0L2.29 19a1 1 0 0 1 0-1.41L6.7 12 2.29 7.59a1 1 0 0 1 0-1.41l1.45-1.45a1 1 0 0 1 1.41 0L12 11.23l4.24-4.24a1 1 0 0 1 1.41 0l1.45 1.45a1 1 0 0 1 0 1.41L17.3 12l4.24 4.24a1 1 0 0 1 0 1.41l-1.45 1.45a1 1 0 0 1-1.41 0L12 16.77l-4.24 4.24a1 1 0 0 1-1.41 0L2.29 19a1 1 0 0 1 0-1.41L6.7 12 2.29 7.59a1 1 0 0 1 0-1.41l1.45-1.45a1 1 0 0 1 1.41 0L12 11.23l4.24-4.24a1 1 0 0 1 1.41 0l1.45 1.45a1 1 0 0 1 0 1.41L17.3 12l4.24 4.24a1 1 0 0 1 0 1.41l-1.45 1.45a1 1 0 0 1-1.41 0L12 16.77z"
                  ></path>
                </svg>
                Progress
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center px-2 py-1 hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-9h2v4h-2zm0-6h2v2h-2z"
                  ></path>
                </svg>
                Settings
              </a>
            </li>
          </ul>

          <div className="mt-16">
            <img
              src={Person}
              alt="image"
              style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
            />
          </div>
        </div>

        {/* Tickets List */}
        <div className="flex flex-col justify-center items-center pl-80 gap-3 mb-16">
          <h1 className="font-bold text-3xl">All tickets</h1>

          {/* Headings */}
          <div className="flex font-bold mb-2 gap-10 ">
            <div className="w-1/3 px-4">Name</div>
            <div className="w-1/3 px-4">Date</div>
            <div className="w-1/3 px-4">Status</div>
          </div>

          {/* List of Items */}
          {users.map((user, index) => (
            <ul key={index} className="flex mb-4 p-2 gap-10">
              <li className="w-1/3 px-4">{user.name}</li>
              <li className="w-1/3 px-4">{user.date}</li>
              <li className="w-1/3 px-4">{user.status}</li>
            </ul>
          ))}
        </div>

        {/* Tickets Crads */}

        <div className="flex flex-col pl-40 gap-5">
          <PendingTickets />
          <PendingTickets />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
