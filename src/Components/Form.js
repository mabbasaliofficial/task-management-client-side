import React, { useState } from "react";

const Form = () => {
    const [task, setTask] = useState([]);
    const tasks = [task];
    console.log(tasks)
    const handleEnter = (e) => {
        if(e.key === 'Enter') {
            const inputTask = e.target.value;
            setTask(inputTask)
        }
    };
  return (
    <div>
        <h1 className="text-xl text-center font-bold mb-5">Add Task</h1>
        <div className="w-3/4 mx-auto">
          <input
            type="text"
            onKeyUp={handleEnter}
            id="small-input"
            placeholder="Add Task"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        
        </div>
       
        {
           
         
            tasks.map((task, i) =>   <input
            key={i}
                type="text"
                value={task}
                disabled
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-3/4 mx-auto m-4"
              />) 
        }
    </div>
  );
};

export default Form;
