// CourseForm.js

import React, { useState } from 'react';
import axios from 'axios'; // Import Axios library for making HTTP requests

const CourseForm = () => {
  const [course_name, setCourseName] = useState('');

  const handleChange = (e) => {
    setCourseName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('YOUR_API_ENDPOINT', { name: course_name }); // Make POST request to your API
      console.log(response.data); // Log the response from the API
      // Optionally, you can reset the course name after successful submission
      setCourseName('');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-2xl shadow-blue-500 rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coursename">
            Course Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="coursename"
            type="text"
            placeholder="Course Name"
            value={course_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;