import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
  state = {
    query: "dolphins",
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs()
  }

  fetchGifs = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(data => this.sortData(data))
  }

  sortData = (data) => {
    this.setState({
      gifs: data.data.slice(0, 3).map(data => data.images.original.url)
    })
  }

  handleSubmit = (event, query) => {
    event.preventDefault()
    this.changeQuery(query)
    this.fetchGifs()
  }

  changeQuery = (newQuery) => {
    this.setState({query: newQuery})
  }

  render() {
    return(
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
