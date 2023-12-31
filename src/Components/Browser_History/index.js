import {Component} from 'react'
import './index.css'
import HistoryItem from '../History_item/index'

class History extends Component {
  state = {searchInput: '', deleteId: ''}

  onSearch = event => {
    const inputText = event.target.value
    this.setState({searchInput: inputText})
  }

  deleteHistoryItem = id => {
    this.setState({deleteId: id})
  }

  render() {
    const {searchInput} = this.state
    const {deleteId} = this.state
    const {initialHistoryList} = this.props
    const modifiedList = initialHistoryList.filter(
      eachHistory => eachHistory.id !== deleteId,
    )

    const onSearchHistory = modifiedList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let onSearchHistoryItems
    if (onSearchHistory.length === 0) {
      onSearchHistoryItems = (
        <div className="no-history">
          <p>There is no history to show</p>
        </div>
      )
    } else {
      onSearchHistoryItems = (
        <ul className="history-container">
          {onSearchHistory.map(eachHistory => (
            <HistoryItem
              historyDetails={eachHistory}
              key={eachHistory.id}
              deleteHistoryOnId={this.deleteHistoryItem}
            />
          ))}
        </ul>
      )
    }

    return (
      <div className="browser-history-container">
        <div className="logo-search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="searchContainer">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon"
              />
            </div>
            <input
              type="search"
              placeholder="Search history"
              className="search"
              onChange={this.onSearch}
            />
          </div>
        </div>
        <div className="outer-container">{onSearchHistoryItems}</div>
      </div>
    )
  }
}

export default History
