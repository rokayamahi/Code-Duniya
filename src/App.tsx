import Banner from "./components/banner/Banner";
import Category from "./components/category/Category";
import Course from "./components/courses/course";

import Header from "./components/header/Header";

const App = () => {
  
  return (
    <main>
      <Header />
      <section className="relative">
        <Banner />
        <Category />
      </section>
      <Course />
    </main>
  )
}

export default App 