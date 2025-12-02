
import Flex from "../header/common/Flex";
import type { CourseType } from "../types/CourseType";
import Button from "../ui/Button";
import Image from "../ui/Image"
import { FaUser } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";


type Props = {
  item: CourseType;
};

const CoursesCard = ({item}: Props) => {

    const { 
        imageUrl,
        category,
        students,
        title,
        rating,
        price,
        button,
      }= item;
      
  return (
    <div className="mt-[62px] max-w-[377px]">
        <Image imageurl= {imageUrl} alt={category}/>
        <div className="bg-secondary text-primary-white pt-1.5 pb-2.5 rounded-b-[15px] px-4 font-poppins">
            <Flex className="justify-between">
                <h5>{category}</h5>
                <h6 className="flex gap-[3px] font-anek"><FaUser />{students}</h6>
            </Flex>
            <h2 className="text-[24px] font-bold">{title}</h2>
            <p className="flex text-center gap-[7px] text-[13px] font-normal pt-[13px] pb-[3px]"><MdOutlineStar className="text-[#FFC700]"/>{rating}</p>
            <p className="text-[24px] font-extrabold font-anek flex justify-between">{price}<Button title={button} className="text-[20px] font-semibold font-anek bg-primary px-5 py-1 rounded-[15px]"/></p>
        </div>
    </div>
  )
}

export default CoursesCard