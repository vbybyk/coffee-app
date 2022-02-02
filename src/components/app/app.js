import { Component } from "react/cjs/react.development";

import Header from "../app-header/app-header";
import Appinfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import Filter from "../app-filter/app-filter";
import CoffeeList from "../coffee-list/coffee-list";
import ModalContainer from "../app-modal/app-modal";

import Picture from "../../img/coffee-img.jpg"
import './app.css'

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      data: [
        {img: Picture, brand: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 9.99, id: 1, idmod: 81},
        {img: Picture, brand: 'ARABICA 100% Coffee 1 kg', country: 'Kenya', price: 11.99, id: 2, idmod: 82},
        {img: Picture, brand: 'COLUMBIA Coffee 1 kg', country: 'Columbia', price: 6.99, id: 3, idmod: 83},
        {img: Picture, brand: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 9.99, id: 4, idmod: 84},
        {img: Picture, brand: 'ARABICA 100% Coffee 1 kg', country: 'Kenya', price: 11.99, id: 5, idmod: 85},
        {img: Picture, brand: 'COLUMBIA Coffee 1 kg', country: 'Columbia', price: 6.99, id: 6, idmod: 86}
      ],
      modalData:[{img: Picture, brand: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 9.99, id: 1, idmod: 81},],
      search:'',
      filter:'',
      modalActive: false
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
      case '':
        console.log(`now filter is a string ${filter}`)
        return array
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

  getOnClickModal = (idmod) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id)
            return{
                modalData: data.filter(elem => elem.idmod === idmod)
            }
        })  
    }
  
  onToggleModalActive = (modalActive) => {
    if (modalActive) {
      this.setState({modalActive: false})
    } else {
       this.setState({modalActive: true})
    }
  }

  render(){
    const {data, modalData, country, search, filter, modalActive} = this.state;
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
          <CoffeeList 
            data={filterData}
            onClickGetModal={this.getOnClickModal}
            onToggleModalActive={this.onToggleModalActive}/>
          <ModalContainer 
            data={modalData}
            modalActive={modalActive}
            onToggleModalActive={this.onToggleModalActive}
            />
      
      </div>
    )
  }
}

export default App;