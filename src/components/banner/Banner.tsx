import Container from "../header/common/Container";
import Flex from "../header/common/Flex";
import bannerImage from "../../assets/images/banner-img.png";
import Button from "../ui/Button";


const Banner = () => {
  return (
    <section className="text-primary-white bg-primary pt-[82px] pb-[173px]">
        <Container>
            <Flex>
                <div className="w-1/2">
                    <h1 className="text-[50px] font-bold font-anek max-w-[435px]">দেশের সর্ব বৃহৎ আইটি ট্রেনিং প্লাটফর্ম </h1>
                    <p className="text-[20px] font-normal font-anek max-w-[457px] pt-[15px] py-[41px]">আইটি ট্রেনিং এর মাধ্যমে নিজেকে স্বাবলম্বী করুন। নিজেকে আইটি এক্সপার্ট হিসেবে গড়ে তুলুন</p>
                    <Button title="কোর্স দেখুন" className="text-[24px] font-semibold font-anek bg-secondary px-[58px] py-[5px] rounded-[10px]"/>
                </div>
                <div className="w-1/2">
                   <img src={bannerImage} alt="banner-img" />
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Banner