import Container from "../header/common/Container"
import Title from "../ui/Title"
import CoursesCard from "./CoursesCard"
import Mern from "../../assets/images/mernCourse.png"
import UI from "../../assets/images/uiCourse.png"
import film from "../../assets/images/videoCourse.png"
import Button from "../ui/Button"
import type { CourseType } from "../types/CourseType"



const Course = () => {

  const courseList = [
    {
      id: 1,
      imageUrl: Mern,
      category: "Web and Software",
      students: "৩০০০ স্টুডেন্ট",
      title: "MERN Stack Development",
      rating: "Rating | 450 Reviews",
      price: "৳  1,20000 BDT",
      button: "ডিসকাউন্ট"
    },
    {
      id: 2,
      imageUrl: UI,
      category: "UI/UX Design",
      students: "৩০০০ স্টুডেন্ট",
      title: "UI/UX Design",
      rating: "Rating | 450 Reviews",
      price: "৳  1,20000 BDT",
      button: "ডিসকাউন্ট"
    },
    {
      id: 3,
      imageUrl: film,
      category: "Films & Media",
      students: "৩০০০ স্টুডেন্ট",
      title: "Professional Video Editing",
      rating: "Rating | 450 Reviews",
      price: "৳  1,20000 BDT",
      button: "ডিসকাউন্ট"
    },
    {
      id: 4,
      imageUrl: Mern,
      category: "Web and Software",
      students: "৩০০০ স্টুডেন্ট",
      title: "MERN Stack Development",
      rating: "Rating | 450 Reviews",
      price: "৳  1,20000 BDT",
      button: "ডিসকাউন্ট"
    },
    {
      id: 5,
      imageUrl: UI,
      category: "UI/UX Design",
      students: "৩০০০ স্টুডেন্ট",
      title: "UI/UX Design",
      rating: "Rating | 450 Reviews",
      price: "৳  1,20000 BDT",
      button: "ডিসকাউন্ট"
    },
    {
      id: 6,
      imageUrl: film,
      category: "Films & Media",
      students: "৩০০০ স্টুডেন্ট",
      title: "Professional Video Editing",
      rating: "Rating | 450 Reviews",
      price: "৳  1,20000 BDT",
      button: "ডিসকাউন্ট"
    },
  ]



  return (
    <section className="mt-[180px] mb-[93px]">
        <Container>
            <Title maintitle ="আমাদের কোর্স সমুহ" subtitle = "আমাদের সমস্ত কোর্স সুদক্ষ মেন্টর দ্বারা পরিচালিত  এবং সমৃদ্ধ রিসোর্স দ্বারা পরিপূর্ণ" />
            <div className="grid grid-cols-3">
              {courseList.map((item) => (
                <CoursesCard key={item.id} item={item}/>
              ))}
            </div>
             <div className="flex justify-center">
               <Button title="আরও কোর্স দেখুন" className="text-[24px] text-primary-white font-semibold font-anek bg-secondary px-[58px] py-[5px] rounded-[10px] mt-11"/>
             </div>
        </Container>
    </section>
  )
}

export default Course