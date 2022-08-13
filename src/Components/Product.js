import React from "react";
import { Component } from "react";
import axios from "axios";
import CustomCard from "./CustomCard";


export class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product_list: []
    }
  }

  componentDidMount() {
    this.getProductData()
  }


  getProductData = () => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        console.log(res.data)
        if (res.data) {
          this.setState({ product_list: res.data })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    console.log(this.state.product_list)
    const { product_list } = this.state;
    return (
      <div className="conatainer-fluid">
        <div className="row">
          {
            product_list.map((d, i) => {
              return (
                <div className="col-sm-4 my-3" key={i} >
                  <CustomCard data={d} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}