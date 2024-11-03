import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const Cancel = () => {
  const [showCancelModal, setShowCancelModal] = useState(false);

  return (
    <div>
      {/* Cancel Button */}
      <div className="flex justify-between p-4">
        <div className="text-lg font-semibold">New Requisition</div>
        <div
          className="flex items-center gap-2 border-2 border-gray-100 rounded-full py-1 px-1 w-[7rem] h-10 cursor-pointer"
          onClick={() => setShowCancelModal(true)}
        >
          <MdOutlineCancel />
          <span>Cancel</span>
        </div>
      </div>

      {/* Cancel Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-[30%] text-center">
            <div className="text-red-500 text-4xl mx-auto mb-4">!</div>
            <h2 className="font-semibold text-xl">Are you sure you want to cancel this?</h2>
            <p className="text-gray-500 mt-2">
              Please keep in mind that once you cancel this you will never be able to restore it, and it will be lost forever.
            </p>
            <div className="flex justify-center mt-6 space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() => {
                  // Add your cancel action here, e.g., navigating away
                  setShowCancelModal(false);
                }}
              >
                Yes, Delete
              </button>
              <button
                className="border border-gray-300 px-4 py-2 rounded-lg m-2"
                onClick={() => setShowCancelModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cancel;
