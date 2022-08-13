import { Component } from "react";

class CustomCard extends Component {

  render() {
    console.log(this.props.data)
    const { data } = this.props;
    return (
      <div className="card mb-3 w-100 h-100">
        <div className="card-body ">
          <div className="img-fluid w-100 h-75 mb-3">
            <img src={data.image} className="img w-100 h-100" alt="image" />
          </div>
          <div className="w-100 h-25 text-wrap">
            <div className="fs-6 fw-bold text-center ">{data.title}</div>
          </div>
        </div>
      </div >
    )
  }
}
export default CustomCard;