import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    getCountry: countryAndCapitalsList[0].country,
    getCapital: countryAndCapitalsList[0].id,
  }

  updateCountry = event => {
    const newCountryDetails = countryAndCapitalsList.filter(
      each => event.target.value === each.id,
    )
    this.setState({getCountry: newCountryDetails[0].country})
    this.setState({getCapital: newCountryDetails[0].id})
  }

  render() {
    const {getCountry, getCapital} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading-style">Countries and Capitals</h1>
          <div className="select-paragraph-style">
            <select
              className="select-style"
              value={getCapital}
              onChange={this.updateCountry}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option value={eachCountry.id} key={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="paragraph-style1">is capital of which country?</p>
          </div>
          <p className="paragraph-style2">{getCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
