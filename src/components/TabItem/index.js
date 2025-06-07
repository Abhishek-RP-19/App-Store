import './index.css'

const TabItem = props => {
  const {eachTab, clickTabItem, isActive} = props
  const {tabId, displayText} = eachTab

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  const activeTabButtonClassLine = isActive ? 'active-tab-button' : ''
  return (
    <li className="tab-item">
      <button
        className={`tab-button ${activeTabButtonClassLine}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
