"use client";

import { Field } from "@/types/form";
import { useState } from "react";

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
  "Sociology",
];

type CourseFormProps = {
    formTitle: string;
    course?: Course
    onSave: (courseData: Partial<Course>, onSuccess?: VoidFunction, onError?: VoidFunction) => void
}

export default function CourseForm({ formTitle, course, onSave }: CourseFormProps) {
  const [title, setTitle] = useState(course?.title || "");
  const [instructor, setInstructor] = useState(course?.instructor || "");
  const [credits, setCredits] = useState(course?.credits || 0);
  const [startDate, setStartDate] = useState(course?.start_date || "");
  const [endDate, setEndDate] = useState(course?.end_date || "");
  const [department, setDepartment] = useState(course?.department || "");
  const [description, setDescription] = useState(course?.title || "");

  const fields: Field[] = [
    {
      value: title,
      setter: setTitle,
      type: "text",
      required: true,
      label: "Course title",
    },
    {
      value: instructor,
      setter: setInstructor,
      type: "text",
      required: true,
      label: "Course instructor",
    },
    {
      value: credits.toString(),
      setter: (credits) => setCredits(Number(credits)),
      type: "number",
      required: true,
      label: "Credits",
    },
    {
      value: startDate,
      setter: setStartDate,
      type: "date",
      label: "Start date",
    },
    { value: endDate, setter: setEndDate, type: "date", label: "End date" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const courseData: Partial<Course> = {
        title,
      instructor,
      department,
      credits,
      start_date: startDate,
      end_date: endDate,
      description,
    }
    onSave(courseData)
    // You could later call an API or update parent state here
  };

  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
  const inputClasses =
    "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-sm space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">{formTitle}</h2>
      {fields.map((field, index) => (
        <div key={index}>
          <label className={labelClasses}>{field.label}</label>
          <input
            type={field.type}
            value={field.value}
            required={field.required}
            onChange={(e) => field.setter(e.target.value)}
            className={inputClasses}
          />
        </div>
      ))}
      <div>
        <label className={labelClasses}>Department</label>
        <select
          value={department}
          className={inputClasses}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option disabled value="">
            Choose department
          </option>
          {departments.map((department) => (
            <option key={department} value={department}>{department}</option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClasses}>Course description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
