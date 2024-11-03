import React from 'react'

const Area = () => {
  return (
    <div>
      <div className=" border border-gray-300 rounded-md ">

        <textarea
          id="description"
          rows="3"
          className="w-full px-3 py-2  focus:outline-none focus:border-blue-500"
          placeholder="Describe the job description...."
          maxlength="600"
        ></textarea>

        <div className="text-right text-gray-500 text-sm mt-1 mr-1">0/600</div>

        <div className="flex items-center mt-3 space-x-2 border-t border-gray-300">
          <button
            type="button"
            onclick="formatText('bold')"
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <strong>B</strong>
          </button>

          <button
            type="button"
            onclick="formatText('italic')"
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <em>I</em>
          </button>

          <button
            type="button"
            onclick="formatText('underline')"
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <u>U</u>
          </button>

          <button
            type="button"
            className="p-2 rounded-md hover:bg-gray-100"
            onclick="insertList()"
          >
            <span>&#8226; List</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Area
