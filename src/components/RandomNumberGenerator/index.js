// Write your code here
import {Component} from 'react'
import './index.css'

class CounterApp extends Component {
  state = {isDigit: 0}

  onChangeNumber = () => {
    const getRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({isDigit: getRandomNumber})
  }

  render() {
    const {isDigit} = this.state

    return (
      <div className="first-container">
        <div className="second-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the Range of 0 to 100
          </p>
          <button
            type="button"
            className="button-el"
            onClick={this.onChangeNumber}
          >
            Generate
          </button>
          <p className="number">{isDigit}</p>
        </div>
      </div>
    )
  }
}
export default CounterApp
