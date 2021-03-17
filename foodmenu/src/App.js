import React , {useState} from 'react'
import './App.css';
import Categories from './Components/Categories';
import Data from './Components/Data'
import Menu from './Components/Menu';

const allCategories = [ "all" , ...new Set(Data.map((item)=>item.category))]

function App(){

  const [menuItems , setMenuItems] = useState(Data);
  const [categories , setCategories] = useState(allCategories);

  const filterCategory = (category)=>{
    if(category === 'all'){
      setMenuItems(Data);
      return;
    }

    const newItem = Data.filter((cate)=>cate.category===category)
    setMenuItems(newItem)

  }

  return(
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterCategories = {filterCategory} itemCateogry = {categories}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;
