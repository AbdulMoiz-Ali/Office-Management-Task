/** @format */

import React, { useState } from "react";
import logo from "./../../assets/Untitled design 1.png";
import avate from "./../../assets/f1b50f306e174e3b8a735c9ce0b7c345.png";
import { Link } from "react-router-dom";

function Sidenav() {
  // State for managing the dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [active, setActive] = useState("");

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="hidden md:hidden overflow-y-auto overflow-x-hidden lg:block w-[270px] sm:translate-x-0">
      <div className="h-full bg-[#2A3773] text-white justify-between flex flex-col">
        {/* Logo Section */}
        <div className="h-[868px]">
          <div className="flex items-center justify-between w-[270px] h-[64px] p-4 gap-3 border-b border-opacity-0">
            <img className="w-[116px] h-[46px]" src={logo} alt="Logo" />
            <div className="w-[16px] h-[16px] flex items-center justify-center">
              <svg
                className="w-[10.56px] h-[4.73px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinejoin="round"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </div>
          </div>
          <div className="w-[270px] px-3 border-b transition">
            {/* Navigation Menu */}
            <ul className="space-y-1 mt-3">
              <li>
                <button
                  type="button"
                  className="flex items-center w-[246px] h-[36px] px-3 py-2 rounded-tl-full " //hover:bg-blue-700 transition
                  onClick={toggleDropdown}
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.33289 14.6667H10.6662C13.3462 14.6667 13.8262 13.5933 13.9662 12.2867L14.4662 6.95333C14.6462 5.32667 14.1796 4 11.3329 4H4.66623C1.81956 4 1.35289 5.32667 1.53289 6.95333L2.03289 12.2867C2.17289 13.5933 2.65289 14.6667 5.33289 14.6667Z"
                      stroke="white"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.33301 4.00016V3.46683C5.33301 2.28683 5.33301 1.3335 7.46634 1.3335H8.53301C10.6663 1.3335 10.6663 2.28683 10.6663 3.46683V4.00016"
                      stroke="white"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.33366 8.66667V9.33333C9.33366 9.34 9.33366 9.34 9.33366 9.34667C9.33366 10.0733 9.32699 10.6667 8.00033 10.6667C6.68033 10.6667 6.66699 10.08 6.66699 9.35333V8.66667C6.66699 8 6.66699 8 7.33366 8H8.66699C9.33366 8 9.33366 8 9.33366 8.66667Z"
                      stroke="white"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.433 7.3335C12.893 8.4535 11.133 9.12016 9.33301 9.34683"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.74707 7.51318C3.24707 8.53985 4.9404 9.15985 6.66707 9.35318"
                      stroke="white"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="flex-1 ml-3 text-left">Recruitment</span>
                  <svg
                    className={`w-3 h-3 ml-2 transform ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    } transition-transform`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              {/* Dropdown menu */}
              {isDropdownOpen && (
                <ul
                  className="w-[246px] h-[164px] px-6 pb-1 pt-0 gap-0 transition"
                  style={{ paddingLeft: "24px" }}
                >
                  <Link
                    onClick={() => {
                      setActive("overview");
                    }}
                    to={"/"}
                  >
                    <li
                      className={`flex ${
                        active === "overview"
                          ? "bg-white text-black rounded-full"
                          : ""
                      } items-center w-[222px]  h-[32px] px-4 py-2 gap-2 rounded-tl-full`}
                    >
                      <div
                        className={`flex items-center w-full h-full rounded-tl-full transition`}
                      >
                        <span className="ml-1">Overview</span>
                      </div>
                    </li>
                  </Link>
                  <Link
                    onClick={() => {
                      setActive("requisitions");
                    }}
                    to={"/requisitions"}
                  >
                    <li
                      className={`flex  ${
                        active === "requisitions"
                          ? "bg-white text-black rounded-full"
                          : ""
                      } items-center w-[222px] h-[32px] px-4 py-2 gap-2 rounded-tl-full`}
                    >
                      <div
                        className={`flex items-center w-full h-full
												rounded-tl-full transition`}
                      >
                        <span className="ml-1">Requisitions</span>
                      </div>
                    </li>
                  </Link>
                  <Link
                    onClick={() => {
                      setActive("projects");
                    }}
                    to={"/projects"}
                  >
                    <li
                      className={`flex ${
                        active === "projects"
                          ? "bg-white text-black rounded-full"
                          : ""
                      } items-center w-[222px] h-[32px] px-4 py-2 gap-2 rounded-tl-full`}
                    >
                      <div
                        className="flex items-center w-full h-full
												rounded-tl-full transition"
                      >
                        <span className="ml-1">Projects</span>
                      </div>
                    </li>
                  </Link>
                  <Link
                    onClick={() => {
                      setActive("approverequest");
                    }}
                    to={"/approverequest"}
                  >
                    <li
                      className={`flex ${
                        active === "approverequest"
                          ? "bg-white text-black rounded-full"
                          : ""
                      } items-center w-[222px] h-[32px] px-4 py-2 gap-2 rounded-tl-full`}
                    >
                      <div
                        className="flex items-center w-full h-full
												rounded-tl-full transition"
                      >
                        <span className="ml-1">Approve Request</span>
                      </div>
                    </li>
                  </Link>
                  <Link
                    onClick={() => {
                      setActive("hiringprocess");
                    }}
                    to={"/addhiring"}
                  >
                    <li
                      className={`flex ${
                        active === "hiringprocess"
                          ? "bg-white text-black rounded-full"
                          : ""
                      } items-center w-[222px] h-[32px] px-4 py-2 gap-2 rounded-tl-full`}
                    >
                      <div
                        className="flex items-center w-full h-full
												rounded-tl-full transition"
                      >
                        <span className="ml-1">Hiring Process</span>
                      </div>
                    </li>
                  </Link>
                </ul>
              )}

              <li
                className={`flex items-center w-[246px] h-[36px] px-3 py-2 gap-2 rounded-tl-full ${
                  active === "Positions" ? "bg-white rounded-full" : ""
                }`}
              >
                <Link
                  onClick={() => {
                    setActive("Positions");
                  }}
                  to="/"
                  className="flex items-center w-full h-full text-white"
                >
                  <div className="flex items-center w-full h-full">
                    <svg
                      className="w-5 h-5 group-hover:text-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M9.62695 12.6999L10.6403 13.7132L12.667 11.6865"
                        stroke={active === "Positions" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.10673 7.24683C8.04006 7.24016 7.96006 7.24016 7.88673 7.24683C6.30006 7.1935 5.04006 5.8935 5.04006 4.2935C5.0334 2.66016 6.36006 1.3335 7.9934 1.3335C9.62673 1.3335 10.9534 2.66016 10.9534 4.2935C10.9534 5.8935 9.68673 7.1935 8.10673 7.24683Z"
                        stroke={active === "Positions" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.99336 14.54C6.78003 14.54 5.57336 14.2333 4.65336 13.62C3.04003 12.54 3.04003 10.78 4.65336 9.70662C6.48669 8.47995 9.49336 8.47995 11.3267 9.70662"
                        stroke={active === "Positions" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`ml-3 ${
                        active === "Positions" ? "text-black" : ""
                      }`}
                    >
                      Positions
                    </span>
                  </div>
                </Link>
              </li>
              <li
                className={`flex items-center w-[246px] h-[36px] px-3 py-2 gap-2 rounded-tl-full ${
                  active === "Performance" ? "bg-white rounded-full" : ""
                }`}
              >
                <Link
                  onClick={() => {
                    setActive("Performance");
                  }}
                  to="/"
                  className="flex items-center w-full h-full text-white"
                >
                  <div className="flex items-center w-full h-full">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                        stroke={active === "Performance" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`ml-3 ${
                        active === "Performance" ? "text-black" : ""
                      }`}
                    >
                      Performance
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className={`flex items-center w-[246px] h-[36px] px-3 py-2 gap-2 rounded-tl-full ${
                  active === "Onboarding" ? "bg-white rounded-full" : ""
                }`}
              >
                <Link
                  onClick={() => {
                    setActive("Onboarding");
                  }}
                  to="/"
                  className="flex items-center w-full h-full text-white"
                >
                  <div className="flex items-center w-full h-full">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12.3337 13H9.66699"
                        stroke={active === "Onboarding" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11 14.3332V11.6665"
                        stroke={active === "Onboarding" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.10673 7.24683C8.04006 7.24016 7.96006 7.24016 7.88673 7.24683C6.30006 7.1935 5.04006 5.8935 5.04006 4.2935C5.0334 2.66016 6.36006 1.3335 7.9934 1.3335C9.62673 1.3335 10.9534 2.66016 10.9534 4.2935C10.9534 5.8935 9.68673 7.1935 8.10673 7.24683Z"
                        stroke={active === "Onboarding" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.99336 14.54C6.78003 14.54 5.57336 14.2333 4.65336 13.62C3.04003 12.54 3.04003 10.78 4.65336 9.70662C6.48669 8.47995 9.49336 8.47995 11.3267 9.70662"
                        stroke={active === "Onboarding" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`ml-3 ${
                        active === "Onboarding" ? "text-black" : ""
                      }`}
                    >
                      Onboarding
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className={`flex items-center w-[246px] h-[36px] px-3 py-2 gap-2 rounded-tl-full ${
                  active === "Employees" ? "bg-white rounded-full" : ""
                }`}
              >
                <Link
                  onClick={() => {
                    setActive("Employees");
                  }}
                  to="/"
                  className="flex items-center w-full h-full text-white"
                >
                  <div className="flex items-center w-full h-full">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6.10671 7.24683C6.04004 7.24016 5.96004 7.24016 5.88671 7.24683C4.30004 7.1935 3.04004 5.8935 3.04004 4.2935C3.04004 2.66016 4.36004 1.3335 6.00004 1.3335C7.63337 1.3335 8.96004 2.66016 8.96004 4.2935C8.95337 5.8935 7.69337 7.1935 6.10671 7.24683Z"
                        stroke={active === "Employees" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.9402 2.6665C12.2335 2.6665 13.2735 3.71317 13.2735 4.99984C13.2735 6.25984 12.2735 7.2865 11.0268 7.33317C10.9735 7.3265 10.9135 7.3265 10.8535 7.33317"
                        stroke={active === "Employees" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.77348 9.7065C1.16014 10.7865 1.16014 12.5465 2.77348 13.6198C4.60681 14.8465 7.61348 14.8465 9.44681 13.6198C11.0601 12.5398 11.0601 10.7798 9.44681 9.7065C7.62014 8.4865 4.61348 8.4865 2.77348 9.7065Z"
                        stroke={active === "Employees" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.2266 13.3335C12.7066 13.2335 13.1599 13.0402 13.5332 12.7535C14.5732 11.9735 14.5732 10.6868 13.5332 9.90683C13.1666 9.62683 12.7199 9.44016 12.2466 9.3335"
                        stroke={active === "Employees" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`ml-3 ${
                        active === "Employees" ? "text-black" : ""
                      }`}
                    >
                      Employees
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className={`flex items-center mb-2 w-[246px] h-[36px] px-3 py-2 gap-2 rounded-tl-full ${
                  active === "Leave&Absence" ? "bg-white rounded-full" : ""
                }`}
              >
                <Link
                  onClick={() => {
                    setActive("Leave&Absence");
                  }}
                  to="/"
                  className="flex items-center w-full h-full text-white"
                >
                  <div className="flex items-center w-full h-full">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8 5.3335V8.66683"
                        stroke={active === "Leave&Absence" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.00033 14.6667C4.78033 14.6667 2.16699 12.0533 2.16699 8.83333C2.16699 5.61333 4.78033 3 8.00033 3C11.2203 3 13.8337 5.61333 13.8337 8.83333"
                        stroke={active === "Leave&Absence" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 1.3335H10"
                        stroke={active === "Leave&Absence" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.93359 12.3332V11.5598C9.93359 10.6065 10.6136 10.2132 11.4403 10.6932L12.1069 11.0798L12.7736 11.4665C13.6003 11.9465 13.6003 12.7265 12.7736 13.2065L12.1069 13.5932L11.4403 13.9798C10.6136 14.4598 9.93359 14.0665 9.93359 13.1132V12.3332Z"
                        stroke={active === "Leave&Absence" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`ml-3 ${
                        active === "Leave&Absence" ? "text-black" : ""
                      }`}
                    >
                      Leave & Absence
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className=" w-[270px] px-3 py-2 gap-2">
          <ul className=" space-y-1 mt-4"> */}
          <div className="flex flex-col w-[270px] px-3 py-2 border-b transition">
            <ul className="flex flex-col">
              <li
                className={`flex items-center w-[246px] h-[36px] px-3 py-2 gap-2 rounded-tl-full ${
                  active === "Planning" ? "bg-white rounded-full" : ""
                }`}
              >
                <Link
                  onClick={() => {
                    setActive("Planning");
                  }}
                  to="/"
                  className="flex items-center w-full h-full text-white"
                >
                  <div className="flex items-center w-full h-full">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8.24707 5.91992H11.7471"
                        stroke={active === "Planning" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.25293 5.91992L4.75293 6.41992L6.25293 4.91992"
                        stroke={active === "Planning" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.24707 10.5864H11.7471"
                        stroke={active === "Planning" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.25293 10.5864L4.75293 11.0864L6.25293 9.58643"
                        stroke={active === "Planning" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.99967 14.6668H9.99967C13.333 14.6668 14.6663 13.3335 14.6663 10.0002V6.00016C14.6663 2.66683 13.333 1.3335 9.99967 1.3335H5.99967C2.66634 1.3335 1.33301 2.66683 1.33301 6.00016V10.0002C1.33301 13.3335 2.66634 14.6668 5.99967 14.6668Z"
                        stroke={active === "Planning" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`ml-3 ${
                        active === "Planning" ? "text-black" : ""
                      }`}
                    >
                      Planning
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className={`flex items-center w-[246px] h-[36px] px-3 py-2 gap-2 rounded-tl-full ${
                  active === "ContractManagement" ? "bg-white rounded-full" : ""
                }`}
              >
                <Link
                  onClick={() => {
                    setActive("ContractManagement");
                  }}
                  to="/"
                  className="flex items-center w-full h-full text-white"
                >
                  <div className="flex items-center w-full h-full">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M14.6663 6.66683V10.0002C14.6663 13.3335 13.333 14.6668 9.99967 14.6668H5.99967C2.66634 14.6668 1.33301 13.3335 1.33301 10.0002V6.00016C1.33301 2.66683 2.66634 1.3335 5.99967 1.3335H9.33301"
                        stroke={
                          active === "ContractManagement" ? "black" : "white"
                        }
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.6663 6.66683H11.9997C9.99967 6.66683 9.33301 6.00016 9.33301 4.00016V1.3335L14.6663 6.66683Z"
                        stroke={
                          active === "ContractManagement" ? "black" : "white"
                        }
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.66699 8.6665H8.66699"
                        stroke={
                          active === "ContractManagement" ? "black" : "white"
                        }
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.66699 11.3335H7.33366"
                        stroke={
                          active === "ContractManagement" ? "black" : "white"
                        }
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`ml-3 ${
                        active === "ContractManagement" ? "text-black" : ""
                      }`}
                    >
                      Contract Management
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className={`flex items-center w-[246px] h-[36px] px-3 py-2 gap-2 rounded-tl-full ${
                  active === "Development" ? "bg-white rounded-full" : ""
                }`}
              >
                <Link
                  onClick={() => {
                    setActive("Development");
                  }}
                  to="/"
                  className="flex items-center w-full h-full text-white"
                >
                  <div className="flex items-center w-full h-full">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.77967 9.3335H2.66634C1.93301 9.3335 1.33301 9.9335 1.33301 10.6668V14.6668H5.77967V9.3335Z"
                        stroke={active === "Development" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.88677 6.6665H7.10677C6.37344 6.6665 5.77344 7.2665 5.77344 7.99984V14.6665H10.2201V7.99984C10.2201 7.2665 9.62677 6.6665 8.88677 6.6665Z"
                        stroke={active === "Development" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.3331 11.3335H10.2197V14.6668H14.6664V12.6668C14.6664 11.9335 14.0664 11.3335 13.3331 11.3335Z"
                        stroke={active === "Development" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.34682 1.37988L8.70015 2.08655C8.74682 2.18655 8.87349 2.27988 8.98015 2.29321L9.62015 2.39988C10.0268 2.46655 10.1268 2.76653 9.83349 3.0532L9.33349 3.5532C9.24682 3.63987 9.20015 3.79987 9.22682 3.91321L9.36682 4.52655C9.48015 5.01322 9.22015 5.19989 8.79349 4.94655L8.19349 4.59322C8.08682 4.52655 7.90682 4.52655 7.80015 4.59322L7.20015 4.94655C6.77349 5.19989 6.51349 5.01322 6.62682 4.52655L6.76682 3.91321C6.79349 3.79987 6.74682 3.6332 6.66015 3.5532L6.16682 3.05987C5.87349 2.76654 5.96682 2.4732 6.38015 2.40653L7.02015 2.29989C7.12682 2.27989 7.25349 2.18655 7.30015 2.09322L7.65349 1.38653C7.84682 0.999868 8.15349 0.999882 8.34682 1.37988Z"
                        stroke={active === "Development" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`ml-3 ${
                        active === "Development" ? "text-black" : ""
                      }`}
                    >
                      Growth & Development
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className={`flex items-center w-[246px] h-[36px] px-3 py-2 gap-2 rounded-tl-full ${
                  active === "Memos" ? "bg-white rounded-full" : ""
                }`}
              >
                <Link
                  onClick={() => {
                    setActive("Memos");
                  }}
                  to="/"
                  className="flex items-center w-full h-full text-white"
                >
                  <div className="flex items-center w-full h-full">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4.48634 13.1335C5.03301 12.5468 5.86634 12.5935 6.34634 13.2335L7.01967 14.1335C7.55967 14.8468 8.43301 14.8468 8.97301 14.1335L9.64634 13.2335C10.1263 12.5935 10.9597 12.5468 11.5063 13.1335C12.693 14.4002 13.6597 13.9802 13.6597 12.2068V4.6935C13.6663 2.00683 13.0397 1.3335 10.5197 1.3335H5.47967C2.95967 1.3335 2.33301 2.00683 2.33301 4.6935V12.2002C2.33301 13.9802 3.30634 14.3935 4.48634 13.1335Z"
                        stroke={active === "Memos" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.33301 4.6665H10.6663"
                        stroke={active === "Memos" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 7.3335H10"
                        stroke={active === "Memos" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`ml-3 ${
                        active === "Memos" ? "text-black" : ""
                      }`}
                    >
                      Memos & Policies
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className={`flex items-center w-[246px] h-[36px] px-3 py-2 gap-2 rounded-tl-full ${
                  active === "Disiplinary" ? "bg-white rounded-full" : ""
                }`}
              >
                <Link
                  onClick={() => {
                    setActive("Disiplinary");
                  }}
                  to="/"
                  className="flex items-center w-full h-full text-white"
                >
                  <div className="flex items-center w-full h-full">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10.6663 1.3335H5.33301C2.66634 1.3335 1.33301 2.66683 1.33301 5.3335V14.0002C1.33301 14.3668 1.63301 14.6668 1.99967 14.6668H10.6663C13.333 14.6668 14.6663 13.3335 14.6663 10.6668V5.3335C14.6663 2.66683 13.333 1.3335 10.6663 1.3335Z"
                        stroke={active === "Disiplinary" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.60685 5.22677L5.14685 8.68677C5.01352 8.8201 4.88686 9.0801 4.86019 9.26677L4.67353 10.5868C4.60686 11.0668 4.94019 11.4001 5.42019 11.3334L6.74018 11.1468C6.92684 11.1201 7.18686 10.9934 7.32019 10.8601L10.7802 7.4001C11.3735 6.80677 11.6602 6.11343 10.7802 5.23343C9.90019 4.34677 9.20685 4.62677 8.60685 5.22677Z"
                        stroke={active === "Disiplinary" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.11328 5.72021C8.40661 6.76688 9.22661 7.59355 10.2799 7.88688"
                        stroke={active === "Disiplinary" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`ml-3 ${
                        active === "Disiplinary" ? "text-black" : ""
                      }`}
                    >
                      Disiplinary
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-[270px] px-3 py-2 border-b transition">
            <ul className="flex flex-col">
              <li
                className={`flex items-center w-[246px] h-[36px] px-3 py-2 gap-2 rounded-tl-full ${
                  active === "Payroll" ? "bg-white rounded-full" : ""
                }`}
              >
                <Link
                  onClick={() => {
                    setActive("Payroll");
                  }}
                  to="/"
                  className="flex items-center w-full h-full text-white"
                >
                  <div className="flex items-center w-full h-full">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.78125 9.55307C5.78125 10.4131 6.44125 11.1064 7.26125 11.1064H8.93458C9.64792 11.1064 10.2279 10.4997 10.2279 9.75307C10.2279 8.93973 9.87458 8.65307 9.34792 8.4664L6.66125 7.53307C6.13458 7.3464 5.78125 7.05973 5.78125 6.2464C5.78125 5.49973 6.36125 4.89307 7.07458 4.89307H8.74792C9.56792 4.89307 10.2279 5.5864 10.2279 6.4464"
                        stroke={active === "Payroll" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path d="M8 4V12" stroke="white" strokeLinejoin="round" />
                      <path
                        d="M7.99967 14.6668C11.6816 14.6668 14.6663 11.6821 14.6663 8.00016C14.6663 4.31826 11.6816 1.3335 7.99967 1.3335C4.31778 1.3335 1.33301 4.31826 1.33301 8.00016C1.33301 11.6821 4.31778 14.6668 7.99967 14.6668Z"
                        stroke={active === "Payroll" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`ml-3 ${
                        active === "Payroll" ? "text-black" : ""
                      }`}
                    >
                      Payroll
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className={`flex items-center w-[246px] h-[36px] px-3 py-2 gap-2 rounded-tl-full ${
                  active === "ExpenseManagement" ? "bg-white rounded-full" : ""
                }`}
              >
                <Link
                  onClick={() => {
                    setActive("ExpenseManagement");
                  }}
                  to="/"
                  className="flex items-center w-full h-full text-white"
                >
                  <div className="flex items-center w-full h-full">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M1.33301 5.66992H14.6663"
                        stroke={
                          active === "ExpenseManagement" ? "black" : "white"
                        }
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 11.0034H5.33333"
                        stroke={
                          active === "ExpenseManagement" ? "black" : "white"
                        }
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 11.0034H9.66667"
                        stroke={
                          active === "ExpenseManagement" ? "black" : "white"
                        }
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.29301 2.33643H11.6997C14.073 2.33643 14.6663 2.92309 14.6663 5.26309V10.7364C14.6663 13.0764 14.073 13.6631 11.7063 13.6631H4.29301C1.92634 13.6698 1.33301 13.0831 1.33301 10.7431V5.26309C1.33301 2.92309 1.92634 2.33643 4.29301 2.33643Z"
                        stroke={
                          active === "ExpenseManagement" ? "black" : "white"
                        }
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`ml-3 ${
                        active === "ExpenseManagement" ? "text-black" : ""
                      }`}
                    >
                      Expense Management
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-[270px] px-3 py-2 border-b transition">
            <ul className="flex flex-col">
              <li
                className={`flex items-center w-[246px] h-[36px] px-3 py-2 gap-2 rounded-tl-full ${
                  active === "Calendar" ? "bg-white rounded-full" : ""
                }`}
              >
                <Link
                  onClick={() => {
                    setActive("Calendar");
                  }}
                  to="/"
                  className="flex items-center w-full h-full text-white"
                >
                  <div className="flex items-center w-full h-full">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.33301 1.3335V3.3335"
                        stroke={active === "Calendar" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.667 1.3335V3.3335"
                        stroke={active === "Calendar" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.33301 6.06006H13.6663"
                        stroke={active === "Calendar" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 5.66683V11.3335C14 13.3335 13 14.6668 10.6667 14.6668H5.33333C3 14.6668 2 13.3335 2 11.3335V5.66683C2 3.66683 3 2.3335 5.33333 2.3335H10.6667C13 2.3335 14 3.66683 14 5.66683Z"
                        stroke={active === "Calendar" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.4635 9.13314H10.4694"
                        stroke={active === "Calendar" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.4635 11.1331H10.4694"
                        stroke={active === "Calendar" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.99666 9.13314H8.00265"
                        stroke={active === "Calendar" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.99666 11.1331H8.00265"
                        stroke={active === "Calendar" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.52987 9.13314H5.53585"
                        stroke={active === "Calendar" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.52987 11.1331H5.53585"
                        stroke={active === "Calendar" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`ml-3 ${
                        active === "Calendar" ? "text-black" : ""
                      }`}
                    >
                      Calendar
                    </span>
                  </div>
                </Link>
              </li>
              <li
                className={`flex items-center w-[246px] h-[36px] px-3 py-2 gap-2 rounded-tl-full ${
                  active === "Notifications" ? "bg-white rounded-full" : ""
                }`}
              >
                <Link
                  onClick={() => {
                    setActive("Notifications");
                  }}
                  to="/"
                  className="flex items-center w-full h-full text-white"
                >
                  <div className="flex items-center w-full h-full">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path d="M8 4.29346V6.51346" stroke="white" />
                      <path
                        d="M8.01327 1.3335C5.55993 1.3335 3.57327 3.32016 3.57327 5.7735V7.1735C3.57327 7.62683 3.3866 8.30683 3.15327 8.6935L2.3066 10.1068C1.7866 10.9802 2.1466 11.9535 3.1066 12.2735C6.29327 13.3335 9.73993 13.3335 12.9266 12.2735C13.8266 11.9735 14.2133 10.9202 13.7266 10.1068L12.8799 8.6935C12.6466 8.30683 12.4599 7.62016 12.4599 7.1735V5.7735C12.4533 3.3335 10.4533 1.3335 8.01327 1.3335Z"
                        stroke={active === "Notifications" ? "black" : "white"}
                      />
                      <path
                        d="M10.2203 12.5469C10.2203 13.7669 9.22027 14.7669 8.00027 14.7669C7.39361 14.7669 6.83361 14.5135 6.43361 14.1135C6.03361 13.7135 5.78027 13.1535 5.78027 12.5469"
                        stroke={active === "Notifications" ? "black" : "white"}
                      />
                    </svg>
                    <span
                      className={`ml-3 ${
                        active === "Notifications" ? "text-black" : ""
                      }`}
                    >
                      Notifications
                    </span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-20 ms-3 text-sm font-medium text-white bg-red-500 rounded-full">
                      3
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className={`flex items-center w-[246px] h-[36px] px-3 py-2 gap-2 rounded-tl-full ${
                  active === "Settings" ? "bg-white rounded-full" : ""
                }`}
              >
                <Link
                  onClick={() => {
                    setActive("Settings");
                  }}
                  to="/"
                  className="flex items-center w-full h-full text-white"
                >
                  <div className="flex items-center w-full h-full">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        stroke={active === "Settings" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.33301 8.58679V7.41345C1.33301 6.72012 1.89967 6.14679 2.59967 6.14679C3.80634 6.14679 4.29967 5.29345 3.69301 4.24679C3.34634 3.64679 3.55301 2.86679 4.15967 2.52012L5.31301 1.86012C5.83967 1.54679 6.51967 1.73345 6.83301 2.26012L6.90634 2.38679C7.50634 3.43345 8.49301 3.43345 9.09967 2.38679L9.17301 2.26012C9.48634 1.73345 10.1663 1.54679 10.693 1.86012L11.8463 2.52012C12.453 2.86679 12.6597 3.64679 12.313 4.24679C11.7063 5.29345 12.1997 6.14679 13.4063 6.14679C14.0997 6.14679 14.673 6.71345 14.673 7.41345V8.58679C14.673 9.28012 14.1063 9.85345 13.4063 9.85345C12.1997 9.85345 11.7063 10.7068 12.313 11.7535C12.6597 12.3601 12.453 13.1335 11.8463 13.4801L10.693 14.1401C10.1663 14.4535 9.48634 14.2668 9.17301 13.7401L9.09967 13.6135C8.49967 12.5668 7.51301 12.5668 6.90634 13.6135L6.83301 13.7401C6.51967 14.2668 5.83967 14.4535 5.31301 14.1401L4.15967 13.4801C3.55301 13.1335 3.34634 12.3535 3.69301 11.7535C4.29967 10.7068 3.80634 9.85345 2.59967 9.85345C1.89967 9.85345 1.33301 9.28012 1.33301 8.58679Z"
                        stroke={active === "Settings" ? "black" : "white"}
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`ml-3 ${
                        active === "Settings" ? "text-black" : ""
                      }`}
                    >
                      Settings
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex mt-10 items-center w-full h-[60px] px-3 py-2 border-t">
          <img
            src={avate}
            alt="profile"
            className="h-[38px] w-[38px] rounded-full border-white border-[1.5px]"
          />
          <div className="flex flex-col ml-3" role="none">
            <p className="text-sm font-medium text-white truncate ">Janna</p>
            <p className="text-sm text-[#A1A3B3] truncate">jana@popup.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;


