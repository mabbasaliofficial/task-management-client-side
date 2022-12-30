import { useQuery } from "@tanstack/react-query";
import { Button, Tooltip } from "flowbite-react";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../Contexts/AuthProvider";

const CompletedTask = () => {
  const { user } = useContext(AuthContext);
  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["completedtask"],
    queryFn: () =>
      fetch(`https://pre-albatros-server.vercel.app/completedtask/?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });
  if (isLoading) {
    return <progress className="progress w-full"></progress>;
  }
  const handleDelete = (id) => {
    fetch(`https://pre-albatros-server.vercel.app/quicktask/${id}`, {
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
  const handleComplete = (id) => {
    fetch(`https://pre-albatros-server.vercel.app/quicktask/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Complete Successfully");
        refetch();
      });
  };
  return (
    <div>
      {tasks.length > 0 ? (
        <div>
          <h3 className="text-3xl font-bold text-center py-5">Completed Task</h3>

          <div class="lg:w-1/2 mx-auto overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="lg:py-3 lg:px-6">
                    No.
                  </th>
                  <th scope="col" class="lg:py-3 lg:px-6">
                    Image
                  </th>
                  <th scope="col" class="lg:py-3 lg:px-6">
                    Task
                  </th>

                  <th scope="col" class="lg:py-3 lg:px-6">
                    Complete
                  </th>
                  <th scope="col" class="lg:py-3 lg:px-6">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {tasks?.length &&
                  tasks.map((task, index) => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        class="lg:py-4 lg:px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <th
                        scope="row"
                        class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img className="w-10 h-10 rounded border" src={task.image} alt="" />
                      </th>
                      <td class="lg:py-4 lg:px-6">
                        {task.task.length > 20 ? (
                          <p>{task.task.slice(0, 20) + "..."} </p>
                        ) : (
                          <p>{task.task}</p>
                        )}
                      </td>
                      <td>
                        {task?.complete !== "completed" ? (
                          <Tooltip content="Is Complete?">
                            <Button size="xs" onClick={() => handleComplete(task._id)}>
                              Is Complete?
                            </Button>
                          </Tooltip>
                        ) : (
                          <Tooltip content="Completed">
                            <Button size="xs" color="success">
                              Completed
                            </Button>
                          </Tooltip>
                        )}
                      </td>
                      <td class="lg:py-4 lg:px-6">
                        <button
                          onClick={() => handleDelete(task._id)}
                          className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                        >
                          <FaTrashAlt className="text-error text-2xl" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="mt-10">
          <h2 className="text-2xl font-bold ">No tasks have been completed yet</h2>
        </div>
      )}
    </div>
  );
};

export default CompletedTask;
