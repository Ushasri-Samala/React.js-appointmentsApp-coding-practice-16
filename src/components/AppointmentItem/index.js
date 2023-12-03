// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, isStarred, title, date} = appointmentDetails

  const starredImg = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickingStar = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="item-container">
      <div className="name-and-date-container">
        <p className="name">{title}</p>
        <button
          type="button"
          className="star-button"
          onClick={onClickingStar}
          data-testid="star"
        >
          <img src={starredImg} alt="star" />
        </button>
      </div>
      <p className="date"> Date: {date}</p>
    </li>
  )
}
export default AppointmentItem
