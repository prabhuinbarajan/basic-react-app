import React from "react"
import "./Sample.css"

export default class Sample extends React.Component {
  state = {
    imgClass: "image-replacement-1"
  };

  // toggles the dropdown each time it is called
  toggleDropdown = () => this.setState(state => ({
    dropdownVisible: !state.dropdownVisible,
  }));

  handleChange = (e) => {
    this.setState({imgClass:e.target.value});
  }
  render() {
    return (
      <div className="left col-xs-12 col-md-6">
        <select  value={this.state.imgClass} onChange={this.handleChange}>
            <option value="image-replacement-1">Logo1</option>
            <option value="image-replacement-2">Logo2</option>
        </select>
        {this.props.children}
        <img className={this.state.imgClass} />
      </div>
    );
  }
}