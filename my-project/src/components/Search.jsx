/* import React, { Component } from 'react'

export default class Search extends Component {
    constructor() {
        super()
        this.state={
            searchData :"",
            }
        }

    handleChange=(event)=>{
        //console.log(event.target.value);
        this.setState({searchData:event.target.value,})
    }
    handleClick=()=>{
        //console.log("de vao",this.state.searchData);
        this.props.dataSearchProduct(this.state.searchData);
    }

  render() {
    return (
      <>
      <input onChange={this.handleChange} type="text"placeholder='tim kiem san pham' />
      <button onClick={this.handleClick}>tim kiem</button>
      </>
    )
  }
}
 */