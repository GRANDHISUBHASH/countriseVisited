import './index.css'

const VisitedCountriesList = props => {
  const {eachItem, activeIdChanged} = props

  const RemoveButton = () => {
    activeIdChanged(eachItem.id)
  }
  return (
    <li>
      <img src={eachItem.imageUrl} alt="thumbnail" />
      <div>
        <p>{eachItem.name}</p>
        <button type="button" onClick={RemoveButton}>
          <p>Remove</p>
        </button>
      </div>
    </li>
  )
}
export default VisitedCountriesList
