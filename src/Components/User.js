import axios from "axios";
import React, { Component } from "react";
import Lists from "./Lists";

export class User extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user_list: []
    }
  }


  componentDidMount = () => {
    axios.get("https://fakestoreapi.com/users")
      .then(res => {
        console.log(res.data)
        if (res.data) {
          this.setState({ user_list: res.data })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log(this.state.user_list)
    const { user_list } = this.state
    return (
      <div className="container-fluid">
        {
          user_list.map((data, index) => {
            return (
              <Lists data={data} key={index} />
            )
          })
        }
      </div>
    )
  }
}
