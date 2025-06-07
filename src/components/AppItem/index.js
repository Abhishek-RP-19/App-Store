import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp
  return (
    <li className="app-item">
      <img alt={appName} src={imageUrl} className="app-image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem