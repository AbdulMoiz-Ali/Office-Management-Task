import React from "react";
import avate from "../../assets/f1b50f306e174e3b8a735c9ce0b7c345.png";

function Applicaient() {
  return (
    <div
      className="flex items-center border-2 border-blue-100 rounded-[8px] p-2 w-full"
      // style={{
      //   // width: "354px",
      //   height: "62px",
      //   padding: "12px 0 0 0",
      //   gap: "8px",
      //   borderRadius: "12px ",
      //   border: "1px solid grey",
      // }}
    >
      <div className="flex">
        <img className="w-8 h-8 rounded-full" src={avate} alt="image" />
      </div>
      <div className="flex-1 min-w-0 ms-4">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          Dianne Russell
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          Head of Design
        </p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        3 hours ago
      </div>
    </div>
  );
}

export default Applicaient;
