import {Component} from 'react'

class ConatinerPassword extends Component {
  render() {
    const {userDetails, deleteUser} = this.props
    const {id, website, userName, password} = userDetails

    const onDeleteUser = () => {
      deleteUser(id)
    }
    return (
      <li>
        <div>
          <p>{website}</p>
          <p>{userName}</p>
          <p>{password}</p>
        </div>
        <button onClick={onDeleteUser} type="button" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default ConatinerPassword
