

const Title = ({maintitle, subtitle} : {maintitle: string , subtitle: string}) => {
  return (
    <div className="text-center">
         <h2 className="text-[36px] font-bold font-anek text-secondary-black">{maintitle}</h2>
         <p className="text-[20px] font-medium font-anek text-secondary-black mt-[15px]">{subtitle}</p>
    </div>
  )
}

export default Title