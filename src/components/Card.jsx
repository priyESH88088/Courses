import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course, likedCourse, setLikedCourse }) {

  function handleLike() {
    if (likedCourse.includes(course.id)) {
      setLikedCourse((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      setLikedCourse((prev) => [...prev, course.id]);
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="w-[300px] bg-gray-100 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt={course.title} />
        <div className="absolute w-[40px] h-[40px] rounded-full bg-white bottom-3 right-2 grid place-items-center">
          <button onClick={handleLike}>
            {likedCourse.includes(course.id) ? (
              <FcLike fontSize="1.7rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.7rem" />
            )}
          </button>
        </div>
      </div>

      <div>
        <h2 className="p-2 text-lg font-semibold">{course.title}</h2>
        <p className="p-2">{course.description}</p>
      </div>
    </div>
  );
}

export default Card;

