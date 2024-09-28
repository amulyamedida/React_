// Write your code here
import {Component} from 'react'
import './index.css'

class speedometer extends Component {
  state = {speed: 0}

  onClickAccelerateBtn = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onClickBrakeBtn = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h2>Speed is {speed}mph</h2>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button
            type="button"
            className="btn1"
            onClick={this.onClickAccelerateBtn}>
            Accelerate
          </button>
          <button type="button" className="btn2" onClick={this.onClickBrakeBtn}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default speedometer
