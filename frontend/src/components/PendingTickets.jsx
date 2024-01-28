import React from "react";

const PendingTickets = () => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-900 ">
      <img className="w-full h-32 object-cover" src="" alt="Card" />
      <div className="px-6 py-4">
        {/* Card content, you can customize as needed */}
        <div className="font-bold text-xl mb-2">Pending Tickets</div>
        <p className="text-gray-700 text-base">Tickets Review .</p>
      </div>
      <div className="px-6 py-4">
        <button
          // onClick={handleButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default PendingTickets;
