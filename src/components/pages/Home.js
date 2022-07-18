import React, { useEffect, useState } from 'react'
import {  Parent,SearchBar, SearchedForm } from '../Styled/Home.styled'
import Recipes from '../Recipes/Recipes';


const Home = () => {
  // const api= process.env.API3;
const [recipe,setRecipes]=useState([]);
const [search,setSearch] = useState('');
// const [query,setQuery] = useState('meet')

  useEffect(()=>{
    fetchData()
  },[])
 async function fetchData(){
    const response= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const data =await response.json();
    setRecipes(data.categories);
    // console.log(data.categories);
  }
const updateSearch = e =>{
  setSearch(e.target.value.substr(0, 20));
  // console.log(search);
}
let filterdData = recipe.filter(
  (item) => {
      return item.strCategory.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  }
);
// const getSearch = e =>{
//   e.preventDefault();
//   setQuery(search);
// }
  return (
    <div>
        <SearchedForm >
          <SearchBar type="text" value={search} onChange={updateSearch} placeholder='Search'/>
          {/* <button type='submit' >search</button> */}
        </SearchedForm>
        <Parent>
        <Recipes recipe={filterdData}/>
        </Parent>
      
    </div>
  )
}

export default Home