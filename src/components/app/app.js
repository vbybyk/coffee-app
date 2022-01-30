import { Component } from "react/cjs/react.development";

import Header from "../app-header/app-header";
import Appinfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import Filter from "../app-filter/app-filter";
import CoffeeList from "../coffee-list/coffee-list";

import Picture from "../../img/coffee-img.jpg"
import './app.css'

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      data: [
        {img: Picture, brand: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 9.99, id: 1},
        {img: Picture, brand: 'ARABICA 100% Coffee 1 kg', country: 'Kenya', price: 11.99, id: 2},
        {img: Picture, brand: 'COLUMBIA Coffee 1 kg', country: 'Columbia', price: 6.99, id: 3},
        {img: Picture, brand: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 9.99, id: 4},
        {img: Picture, brand: 'ARABICA 100% Coffee 1 kg', country: 'Kenya', price: 11.99, id: 5},
        {img: Picture, brand: 'COLUMBIA Coffee 1 kg', country: 'Columbia', price: 6.99, id: 6}
      ],
      search:'',
      filter:''
    }
  }

  searchCoffeeBrand = (array, search) => {
      if (search === ''){
        return array
      }
      return array.filter(item => {
        return item.brand.indexOf(search) > -1;
      })
  }

  onUpdateSearch = (search) => {
      this.setState({search: search})
        
  }

  filterCofeeCountry = (array, filter) => {
    switch(filter) {
      case 'Brazil':
        console.log(`case ${filter}`)
        return array.filter(elem => elem.country === 'Brazil')
      case 'Kenya':
        console.log(`case ${filter}`)
        return array.filter(elem => {
          return elem.country === 'Kenya'
        })
      case 'Columbia':
        console.log(`case ${filter}`)
        return array.filter(elem => elem.country === 'Columbia')
      default:
        return array
    }
    
    
    if (filter === 'Kenya'){
        console.log(`filter is ${filter}`)
        return  array.filter(elem => elem.country === 'Kenya')
        
      } else return array
  }

  onUpdateFilter = (filter) => {
    this.setState({filter})
  }

  render(){
    const {data, country, search, filter} = this.state;
    const searchData = this.searchCoffeeBrand(data, search);
    const filterData = this.filterCofeeCountry(searchData, filter)
    return(
      <div className="app">
          <Header/>
          <Appinfo/>
          <div className="search-filter-wrapper">
            <SearchPanel 
              onUpdateSearch={this.onUpdateSearch}/>
            <Filter
              filter={filter}
              country={country}
              onUpdateFilter={this.onUpdateFilter}/>
          </div>
          <CoffeeList data={filterData}/>
      
      </div>
    )
  }
}

export default App;