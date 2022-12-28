import React from "react";

const AddTask = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className="w-1/2 mx-auto border p-10 rounded">
      <form onSubmit={handleSubmit}>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 mb-6 w-full group">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Task
            </label>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write Your Task"
            />
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Upload file
            </label>
            <input
              class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
            />
          </div>
        </div>

        <div className="w-full">
          <input
            className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
