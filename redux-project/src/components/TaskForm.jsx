import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../slice/slice";

const TaskForm = () => {
  const Selector = useSelector((state) => state.todoItem.todo);
  const dispatch = useDispatch();

  const [formData, setformData] = useState({
    name: "",
    description: "",
    status: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  };

  // console.log(formData)
  const HandleClick = () => {
    // console.log('Here is it',formData.length);

    
    if (!formData.name.trim() || !formData.description.trim() || !formData.status.trim()) {
      // dispatch(addTask(formData));
      return;
    }
      dispatch(addTask(formData));


  };
  console.log(formData);
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 transition-shadow hover:shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Task</h2>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="taskName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Task Name
          </label>
          <input
            type="text"
            id="taskName"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="What needs to be done?"
            name="name"
            value={formData.name}
            onChange={HandleChange}
          />
        </div>

        <div>
          <label
            htmlFor="taskDescription"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Task Description
          </label>
          <textarea
            id="taskDescription"
            rows="3"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
            placeholder="Add some details..."
            name="description"
            value={formData.description}
            onChange={HandleChange}
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Priority
          </label>
          <select
            id="priority"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
            name="status"
            value={formData.status}
            onChange={HandleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="pt-2">
          <button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors shadow-sm"
            onClick={HandleClick}
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
