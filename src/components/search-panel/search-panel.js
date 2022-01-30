import { Component } from "react/cjs/react.development";

import './search-panel.css'

class SearchPanel extends Component {
  constructor (props){
    super(props);
    this.state = {
      search: ''
    }
  }

  onUpdateSearch = (e) => {
    const newSearch = e.target.value;
    this.setState({search: newSearch});
    this.props.onUpdateSearch(newSearch);
  }

  render(){
    const {search} = this.state
    return(
      <div>
        <span>Looking for</span>
        <input 
          className="search-input" 
          type="text" 
          value={search}
          placeholder="start typing here..."
          onChange={this.onUpdateSearch}/>
      </div>
    )
  }
}

export default SearchPanel;