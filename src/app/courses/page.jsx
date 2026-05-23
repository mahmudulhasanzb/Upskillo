import React from 'react'

const fetchCourses = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`);
    const data = await res.json();
    return data
}


const CoursesPage = async () => {
const courses = await fetchCourses()
console.log(courses);

  return (
    <div>
      <h1>All Courses Page</h1>
    </div>
  )
}

export default CoursesPage
