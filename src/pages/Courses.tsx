import englishImage from "../assets/images/english-cs.jpg";
import reactImage from "../assets/images/react-cs.jpg";
import nodeImage from "../assets/images/node-cs.jpg";
import pythonImage from "../assets/images/python-cs.jpg";
import javascriptImage from "../assets/images/javascript-cs.jpg";
import laravelImage from "../assets/images/laravel-cs.jpg";
import phpImage from "../assets/images/php-cs.jpg";
import vueImage from "../assets/images/vue-cs.jpg";
import nuxtImage from "../assets/images/nuxt-cs.jpg";
import { Link } from "react-router-dom";

const all_courses = [
  {
    id: 1,
    name: "English",
    image: englishImage,
    decription: "Learning English for Begining to Advance",
  },
  {
    id: 2,
    name: "React JS",
    image: reactImage,
    decription: "Learning React JS act for Begining to Advance",
  },
  {
    id: 3,
    name: "Node JS",
    image: nodeImage,
    decription: "Learning Node JS act for Begining to Advance",
  },
  {
    id: 4,
    name: "Vue JS",
    image: vueImage,
    decription: "Learning Vue JS act for Begining to Advance",
  },
  {
    id: 5,
    name: "Nuxt JS",
    image: nuxtImage,
    decription: "Learning Nuxt JS act for Begining to Advance",
  },
  {
    id: 6,
    name: "Laravel",
    image: laravelImage,
    decription: "Learning Laravel act for Begining to Advance",
  },
  {
    id: 7,
    name: "PHP",
    image: phpImage,
    decription: "Learning PHP act for Begining to Advance",
  },
  {
    id: 8,
    name: "JavaScript",
    image: javascriptImage,
    decription: "Learning JavaScript act for Begining to Advance",
  },
  {
    id: 9,
    name: "Python",
    image: pythonImage,
    decription: "Learning Python act for Begining to Advance",
  },
];

function Courses() {
  return (
    <>
      <div className="space-y-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            All Courses ( {all_courses.length} )
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {all_courses.map((course) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="group block w-full lg:w-60 overflow-hidden rounded-lg lg:rounded-2xl focus-visible:outline-2 focus-visible:outline-brand-500"
            >
              <img
                src={course.image}
                alt={course.name}
                className="aspect-square w-full object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
