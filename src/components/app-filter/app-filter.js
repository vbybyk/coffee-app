import { Component } from "react/cjs/react.development";

import './app-filter.css'

class Filter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      filterNames : [
        {name: "Brazil"},
        {name:"Kenya"},
        {name:"Columbia"}
      ],
    }
    this.newKey = 10
  }

onUpdateFilter = (e) => {
  const newFilter = e.currentTarget.name
  console.log(newFilter)
  this.props.onUpdateFilter(newFilter)
}

  render() {
    const {filter} = this.props
    const {filterNames} = this.state
    const buttons = filterNames.map(({name}) => {
      const active = name === filter;
      const clazz = active? "filter-button active" : "filter-button"
      const key = this.newKey++
      console.log(key)
        return(
          <button 
            className={clazz}
            name={name}
            key={key}
            onClick={this.onUpdateFilter}>{name}
          </button>
          
        )
    })
    return(
      <div className="filter-wrapper">
        <span className="filter-title">Or filter</span>
          {buttons}
      </div>
    )
  }
}

export default Filter;