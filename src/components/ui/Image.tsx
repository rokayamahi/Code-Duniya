import type { ImgType } from "../types/ImgType"


const Image = ({imageurl, alt, className} : ImgType ) => {
  return (
    <img className={className} src={imageurl} alt={alt} />
  )
}

export default Image