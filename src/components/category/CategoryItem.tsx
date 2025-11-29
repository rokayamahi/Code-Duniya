import Image from "../ui/Image";
import type { CategoryType } from "../types/CategoryType";


const CategoryItem = ({item} : {item: CategoryType}) => {
  return (
    <div className="max-w-[230px] bg-[#1B263B] rounded-[25px] text-[24px] font-semibold font-anek text-primary-white text-center pt-[15px] pb-8">
        <Image className="mx-auto px-[61px]" src={item.icon} alt={item.name} />
        <h3>{item.name}</h3>
    </div>
  )
}

export default CategoryItem;