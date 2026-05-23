import CourseCard from '@/components/CourseCard';
import CoursesHeader from '@/components/CoursesHeader';
import { fetchCourses } from '@/lib/data';
import { Button } from '@heroui/react';
import { BookOpen } from 'lucide-react';
import React from 'react';

const CoursePage = async () => {
  const allCourses = await fetchCourses();
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <CoursesHeader />

      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            All Courses
          </h2>
          <Button
            variant="flat"
            // startContent={<Filter className="w-4 h-4" />}
            className="rounded-full font-bold"
          >
            Filters
          </Button>
        </div>
        {/* All courses cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allCourses?.map(course => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CoursePage;
