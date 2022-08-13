import { Component } from "react";


class Lists extends Component {

  render() {
    console.log(this.props.data)
    const { data } = this.props
    return (
      <div className="bg-info my-2 d-flex justify-content-between p-3">
        <div className="user_id">{data.id}</div>
        <div className="name fw-bold">{data.name.firstname + " " + data.name.lastname}</div>
        <div className="phone">{data.phone}</div>
        <div className="email">{data.email}</div>
      </div>
    )
  }
}
export default Lists;