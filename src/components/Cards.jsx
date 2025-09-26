import React, { useState } from "react";
import Card from "./Card";

function Cards({ courses,category }) {
  const [likedCourse, setLikedCourse] = useState([]);
  
  function getCourses() {
   if(category=="All"){
    let allCourse = [];
    Object.values(courses).forEach((arr) => {
      arr.forEach((val) => {
        allCourse.push(val);
      });
    });
    return allCourse;
  }
  else{
    return courses[category];
  }
   } 

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourse={likedCourse}
          setLikedCourse={setLikedCourse}
        />
      ))}
    </div>
  );
}

export default Cards;
