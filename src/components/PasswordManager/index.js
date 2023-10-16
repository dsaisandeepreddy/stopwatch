import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import ConatinerPassword from '../ConatinerPassword'

import './index.css'

const initiaUserDetails = []

class PasswordManager extends Component {
  state = {
    containerList: [],
    website: '',
    userName: '',
    password: '',
    count: 0,
    searchInput: '',
    isChecked: false,
  }

  deleteUser = id => {
    const {containerList} = this.state
    const filteredUsersData = containerList.filter(each => each.id !== id)
    this.setState({
      containerList: filteredUsersData,
    })
  }

  addButtonData = event => {
    event.preventDefault()
    const {website, userName, password} = this.state
    const newContact = {
      id: uuidv4(),
      website,
      userName,
      password,
      isFavorite: false,
      isChecked: false,
    }

    this.setState(prevState => ({
      containerList: [...prevState.containerList, newContact],
      website: '',
      userName: '',
      password: '',
    }))
  }

  onChangeWebiste = event => {
    this.setState({website: event.target.value})
  }

  onChangeuserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangepassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {
      containerList,
      website,
      userName,
      password,
      count,
      searchInput,
      isChecked,
    } = this.state
    const searchResults = containerList.filter(eachUser =>
      eachUser.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <form className="main-Container" onSubmit={this.addButtonData}>
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="flex-container-one">
          <div className="input-fields">
            <h1 className="addNewPassword-heaidng">Add New Password</h1>
            <div className="website-container">
              <img
                className="image-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                className="website-Data"
                type="text"
                value={website}
                placeholder="Enter Website"
                onChange={this.onChangeWebiste}
              />
            </div>

            <div className="website-container">
              <img
                className="image-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt=" username"
              />
              <input
                className="website-Data"
                type="text"
                value={userName}
                placeholder="Enter Username"
                onChange={this.onChangeuserName}
              />
            </div>

            <div className="website-container">
              <img
                className="image-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                className="website-Data"
                type="password"
                value={password}
                placeholder="Enter Password"
                onChange={this.onChangepassword}
              />
            </div>
            <div className="button-container">
              <button
                data-testid="delete"
                type="submit"
                className="add-button-part"
              >
                Add
              </button>
            </div>
          </div>

          <div>
            <img
              className="passwordManger"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
        </div>

        <div>
          <div className="password-search">
            <div>
              <h1 className="your-password-bottom">your passwords {count}</h1>
            </div>
            <div className="website-container">
              <img
                className="image-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                className="website-Data"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          <hr />
          <div className="checkBoxshow">
            <input id="check" type="checkbox" onChange={this.isCheCkedData} />
            <label htmlFor="check">Show passwords</label>
          </div>
          {searchResults.map(eachData => (
            <ConatinerPassword
              key={eachData.id}
              userDetails={eachData}
              deleteUser={this.deleteUser}
            />
          ))}
        </div>
      </form>
    )
  }
}

export default PasswordManager
