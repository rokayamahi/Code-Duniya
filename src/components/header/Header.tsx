
import ListItem from "../ui/ListItem";
import Container from "./common/Container";
import Button from "../ui/Button";
import Flex from "./common/Flex";



const Header = () => {

  const navList= [
    {
      id: 1,
      title: "হোম",
    },
    {
      id: 2,
      title: "আমাদের কোর্সসমহ",
    },
    {
      id: 3,
      title: "যোগাযোগ",
    },
    {
      id: 4,
      title: "ক্যারিয়ার গাইডলাইন",
    },
  ]

  return (
    <header className="bg-primary text-primary-white py-[15px]">
        <nav>
            <Container>
                <Flex className="justify-between font-anek">
                  <img src="images/logo.png" alt="logo" />
                <ul className="flex gap-[25px] items-center">
                  {navList.map((item) => (
                    <ListItem className="text-[24px] font-semibold" key={item.id} item={item}/>
                  ))}
                </ul>
                <Button title="কোর্স দেখুন" className="text-[24px] font-semibold font-anek bg-secondary px-[58px] py-[5px] rounded-[10px]"/>
                </Flex>
            </Container>
        </nav>
    </header>
  )
}

export default Header