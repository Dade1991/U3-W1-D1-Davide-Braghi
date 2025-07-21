import { Component } from "react"

class ImageComponent extends Component {
  render() {
    return (
      <>
        <img src={this.props.ImageToLoad} alt={this.props.DesriptionToLoad} />
      </>
    )
  }
}

export default ImageComponent
