import {Component} from 'react'
import './index.css'

class CountriesList extends Component {
  render() {
    const {eachItem, activeIdChanged} = this.props

    const ActiveButtonIsClicked = () => {
      activeIdChanged(eachItem.id)
    }
    const text = eachItem.isVisited ? 'Visited' : 'Visit'

    return (
      <li>
        <p>{eachItem.name}</p>
        {eachItem.isVisited ? (
          <p className="visited-text">{text}</p>
        ) : (
          <button
            type="button"
            className="visit-button"
            onClick={ActiveButtonIsClicked}
          >
            {text}
          </button>
        )}
      </li>
    )
  }
}
export default CountriesList
