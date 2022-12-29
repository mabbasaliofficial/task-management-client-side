import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Contexts/AuthProvider";
import { FaTrashAlt } from 'react-icons/fa';

const Form = () => {
  const { user } = useContext(AuthContext);
  const { data: tasks, refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/quicktask/?email=${user?.email}`);
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      const inputTask = e.target.value;
      const allTask = {
        email: user?.email,
        task: inputTask,
      };
      fetch("http://localhost:5000/quicktask", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(allTask),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Task Added Successfully");
          refetch();
        });
    }
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/quicktask/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Delete Successfully");
          refetch();
        }
      });
  };
  return (
    <div>
      <h1 className="text-xl text-center font-bold mb-5">Add Quick Task</h1>
      <div className="w-3/4 mx-auto">
        <input
          type="text"
          onKeyUp={handleEnter}
          id="small-input"
          placeholder="Add Quick Task"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
      <h3 className="text-3xl font-bold text-center py-5">My Task</h3>
     
<div class="w-1/3 mx-auto overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr >
                <th scope="col" class="py-3 px-6">
                    No.
                </th>
                <th scope="col" class="py-3 px-6">
                    Task
                </th>
                <th scope="col" class="py-3 px-6">
                    Complete
                </th>
            </tr>
        </thead>
        <tbody>
          {
            tasks?.length && 
            tasks.map((task, index) =>    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index+1}
            </th>
            <td class="py-4 px-6">
            {task.task.length > 20 ? (
                          <p>{task.task.slice(0, 20) + "..."} </p>
                        ) : (
                          <p>{task.task}</p>
                        )}
            </td>
            <td class="py-4 px-6">
            <button
                      onClick={() => handleDelete(task._id)}
                      className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                    >
                      <FaTrashAlt className="text-error text-2xl" />
                    </button>
            </td>
        </tr>)
          }
        </tbody>
    </table>
</div>

      </div>
    </div>
  );
};

export default Form;
