import {Component} from 'react'
import './index.css'

class HistoryItem extends Component {
  render() {
    const {historyDetails, deleteHistoryOnId} = this.props
    const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

    const onDelete = () => {
      deleteHistoryOnId(id)
    }
    return (
      <li className="history-item-container">
        <div className="time-container">
          <p className="time">{timeAccessed}</p>
        </div>
        <div className="app-details-container">
          <img src={logoUrl} className="app-logo" alt="domain logo" />
          <p className="app-title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button type="button" data-testid="delete" className="button-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
            onClick={onDelete}
          />
        </button>
      </li>
    )
  }
}

export default HistoryItem
