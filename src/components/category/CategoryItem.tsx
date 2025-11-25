import Image from "../ui/Image";

const CategoryItem = ({item}: {item:{ id:number, name: string, icon: string}}) => {
  return (
    <div className="max-w-[230px] bg-[#1B263B] rounded-[25px] text-[24px] font-semibold font-anek text-primary-white text-center">
        <Image className="mx-auto" src={item.icon} alt={item.name} />
        <h3>{item.name}</h3>
    </div>
  )
}

export default CategoryItem;