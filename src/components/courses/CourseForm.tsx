"use client";

import { useState } from "react";

//TODO Set up form to be able to handle course creation except for actual API request
//TODO use list of departments for a select 


const departments = [
  "Statistics",
  "Data Science",
  "Mathematics",
  "Environmental Science",
  "Psychology",
  "Computer Science",
  "Biology",
  "Business",
  "Philosophy",
  "History",
  "Economics",
  "Chemistry",
  "Linguistics",
  "Physics",
  "Literature",
  "Sociology"
]

export default function CourseForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New course:", { title });
    // You could later call an API or update parent state here
  };

  const inputClasses =
    "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-sm space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">Add New Course</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Course Title
        </label>
        <input
          type="text"
          placeholder="Enter course title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Save Course
      </button>
    </form>
  );
}
