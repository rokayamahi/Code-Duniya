import type { ImgType } from "../types/ImgType"


const Image = ({src, alt, className} : ImgType ) => {
  return (
    <img className={className} src={src} alt={alt} />
  )
}

export default Image