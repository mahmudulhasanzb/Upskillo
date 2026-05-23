export const fetchFeaturedCourses = async () => {
  const res = await fetch('http://localhost:8000/featured-course');
  const data = await res.json()
  return data
};
