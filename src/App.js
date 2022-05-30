import React from "react"
import Header from "./Components/Header"
import Card from "./Components/Card"
import data from "./data";

export default function App() {
    const dataSet = data.map(item => {
      return (
          <Card {...item} />
      )
  }) 
    return (
      <div>
        <Header />
        <div className="card--display">{dataSet}</div>
      </div>
    )
}