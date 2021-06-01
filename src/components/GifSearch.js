import React, { Component } from 'react'

export default class GifSearch extends Component {
  state = {
    seachBar: ""
  }

  handleChange = (e) => {
    this.setState({
      seachBar: e.target.value
    })
  }

  render() {
    return(
      <form onSubmit={(event) => this.props.handleSubmit(event, this.state.seachBar)}>
        <input type="text" value={this.state.seachBar} onChange={this.handleChange}/>
        <input type="submit" value="Search" />
      </form>
    )
  }
}
