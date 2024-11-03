import React, { useState } from 'react';
import Cancel from '../../components/Cancel';
import logo from '../../assets/tesla-Logo.png';
import { RiSendPlaneLine } from 'react-icons/ri';
import { MdAttachFile, MdCheckCircle } from 'react-icons/md';
import { LiaFileUploadSolid } from "react-icons/lia";
import { BiSolidFilePdf } from "react-icons/bi";
import { BsFiletypeDoc } from "react-icons/bs";
import { ImFilePicture } from "react-icons/im";

const OtherInformation = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showApprovalModal, setShowApprovalModal] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const getFileIcon = () => {
    if (!uploadedFile) return <MdAttachFile className="text-gray-500" />;
    const fileType = uploadedFile.name.split('.').pop();
    switch (fileType) {
      case 'pdf':
        return <span className="text-red-500 text-[30px]"><BiSolidFilePdf /></span>;
      case 'doc':
      case 'docx':
        return <span className="text-blue-500"><BsFiletypeDoc /></span>;
      case 'jpg':
      case 'png':
        return <span className="text-green-500"><ImFilePicture /></span>;
      default:
        return <MdAttachFile className="text-gray-500" />;
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
  };

  return (

    <div>
      <div >
        <Cancel />
      
    </div>
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen w-full md:w-[90%] lg:w-[60%] mx-auto">
    
      

      <div className="text-center ">
        <h2 className="font-semibold text-xl">Other informations</h2>
        <p className="text-gray-500">Let’s fill out the basics information of the job</p>
      </div>

      <div className="flex justify-center mt-4 w-full md:w-[50%] mx-auto">
        <div className="w-1/3 h-1 bg-[#6047F9] rounded-full"></div>
        <div className="w-1/3 h-1 bg-[#6047F9] rounded-full ml-2"></div>
        <div className="w-1/3 h-1 bg-[#6047F9] rounded-full ml-2"></div>
      </div>

      {/* Budgetary Impact Section */}
      <div className="mt-6 bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full md:w-3/4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start border-b pb-4">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Company Logo" />
          </div>
          <div className="text-left md:text-right">
            <p className=" font-semibold">Salary slip of Employee</p>
            <p className="text-gray-500">2024-2025</p>
            <p className="mt-2 text-gray-500">Designation: <span className='text-black font-semibold'>Head of Product & Design</span></p>
            <p className="font-semibold text-gray-700"></p>
          </div>
        </div>

        {/* Salary Breakdown Table */}
        <div className="mt-4">
          <table className="w-full text-left border rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 font-medium text-gray-700">No</th>
                <th className="px-4 py-2 font-medium text-gray-700">Salary Head</th>
                <th className="px-4 py-2 font-medium text-gray-700">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">Basic Pay</td>
                <td className="px-4 py-2">2000 USD</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">Benefits</td>
                <td className="px-4 py-2">600 USD</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">Allowances</td>
                <td className="px-4 py-2">1400 USD</td>
              </tr>
              <tr className="border-t font-semibold">
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">Total</td>
                <td className="px-4 py-2">4000 USD</td>
              </tr>
            </tbody>
          </table>
        </div>

       
        <div className="mt-4 ">
          <label className="font-semibold text-gray-700">Recommended recruitment approach</label>
          <select className="block w-full mt-2 border border-gray-300 rounded-lg p-2 bg-gray-50">

            <option>Headhunting</option>
            <option>Others</option>
          </select>
        </div>

        {/* Supporting Documents */}
        <div className="mt-4">
          <label className="font-semibold text-gray-700">Supporting Documents (Optional)</label>
          <div className="flex items-center space-x-2 mt-2 border border-gray-300 rounded-lg p-2 bg-gray-50">
            {!uploadedFile ? (
              <div className="flex justify-center items-center m-auto">
                <LiaFileUploadSolid className="text-gray-500 text-[25px]" />
                <label className="cursor-pointer text-gray-500">
                  Click here to upload files
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
            ) : (
              <div className="flex justify-between space-x-2 w-full  cursor-pointer"  onClick={handleRemoveFile}>
                <div className="flex items-center gap-2 " >
                  {getFileIcon()}
                  <div className='flex flex-col '> 
                  <p className="font-semibold text-[20px]">{uploadedFile.name}</p>
                  <p className="text-gray-500 text-sm">{(uploadedFile.size / 1024).toFixed(2)} KB</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MdCheckCircle className="text-green-500" />
                 
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Approval History */}
        <div className="mt-6 border-t pt-4">
          <h3 className="font-semibold text-gray-700">Approval History</h3>
          <div className="flex flex-col md:flex-row justify-between mt-2 text-gray-700">
            <div>
              <p className="text-sm">Requested by:</p>
              <p className="font-semibold">Jon Doe</p>
              <p className="text-gray-500 text-">Principal Product Designer</p>
              <p className="text-gray-500 text-xs">12 Sep, 2024</p>
            </div>
            <div>
              <p className="text-sm">Reviewed by:</p>
              <p className="text-gray-500">--</p>
              <p className="text-gray-500">-----</p>
              <p className="text-gray-500">------</p>
            </div>
            <div>
              <p className="text-sm">Approved by:</p>
              <p className="text-gray-500">--</p>
              <p className="text-gray-500">----</p>
              <p className="text-gray-500">----</p>
            </div>
          </div>
        </div>
      </div>

      {/* Send Approval Request Button */}
      <div className="text-center mt-8">
        <button
          className="bg-[#6047F9] text-white px-6 py-3 rounded-full font-semibold w-full md:w-[80%] mx-auto"
          onClick={() => setShowApprovalModal(true)}
        >
          <p>
            <RiSendPlaneLine className="inline-block text-[20px] mx-1" /> Send Approval Request
          </p>
        </button>
      </div>

      {/* Approval Modal */}
      {showApprovalModal && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-full sm:w-[70%] md:w-[30%] text-center">
            <MdCheckCircle className="text-green-500 text-4xl mx-auto" />
            <h2 className="font-semibold text-xl mt-4">Approval request sent</h2>
            <p className="text-gray-500 mt-2">You will be notified of any action taken regarding this request</p>
            <div className="flex justify-center mt-6 space-x-4">
              <button
                className="bg-[#6047F9] text-white px-4 py-2 rounded-lg"
                onClick={() => setShowApprovalModal(false)}
              >
                Back to home
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded-lg">View Request</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default OtherInformation;
