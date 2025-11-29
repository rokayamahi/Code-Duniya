import Container from "../header/common/Container"
import CategoryItem from "./CategoryItem"
import GDicon from "../../assets/images/gd-icon.png";
import  network  from "../../assets/images/network.png";
import software from "../../assets/images/software.png";
import film from "../../assets/images/filmstrip.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Category = () => {

  const categoryItems = [
    {
      id : 1,
      name: "গ্রাফিকস",
      icon: GDicon,
    },
    {
      id : 2,
      name: "নেটওয়ার্কিং",
      icon: network,
    },
    {
      id : 3,
      name: "সফটওয়্যার",
      icon: software,
    },
    {
      id : 4,
      name: "ফিল্ম মিডিয়া",
      icon: film,
    },
    {
      id : 5,
      name: "ফিল্ম মিডিয়া",
      icon: film,
    },
  ]

  function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="top-1/2 translate-y-[-50%]"
      style={{ ...style, display: "inline-block", position: "absolute", left: "-100px", fontSize: "30px"}}
      onClick={onClick}
    ><BsFillArrowLeftCircleFill /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=" top-1/2 translate-y-[-50%]"
      style={{ ...style, display: "inline-block", position: "absolute", right: "-100px", fontSize: "30px"}}
      onClick={onClick}
    ><BsFillArrowRightCircleFill /></div>
  );
}

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  return (
    <section className="absolute w-full bottom-[-100px] left-0">
        <Container>
          <Slider {...settings}>
              {categoryItems.map((item)=>(
              <CategoryItem key={item.id} item={item} />
            ))}
          </Slider>
        </Container>
    </section>
  )
}

export default Category