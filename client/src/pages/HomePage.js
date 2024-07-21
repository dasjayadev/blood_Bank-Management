import React, { useEffect, useState } from 'react'
import { MdInventory } from "react-icons/md";
import Model from '../component/shared/Model/Model';
import API from '../services/API';
function HomePage() {
  let [data, setData] = useState([])
  async function getInventory() {
      try {
          let { data } = await API.get('/inventory/v1/get-inventory')
          setData(data.inventory)
      }
      catch (e) {
          console.log(e)
      }
  }
  useEffect(() => {
      getInventory()
  }, [])
    return (
      <div className="container">
      <div className="row">
          <div className="col m-4" style={{ cursor: "pointer" }} >
              <h3 data-bs-toggle="modal" data-bs-target="#staticBackdrop"><MdInventory /> Add Inventory</h3>
          </div>
          <Model />
      </div>
      <div className="row mt-3">
          <div className="col">
              <table className="table">
                  <thead>
                      <tr>
                          <th scope="col">Blood Group</th>
                          <th scope="col">Inventory Type</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Email</th>
                          <th scope="col">Time & Date</th>

                      </tr>
                  </thead>
                  <tbody>
                      {data.length > 0 && data.map((item, i) => {
                          return <tr key={i}>
                              <th scope="row">{item?.bloodGroup}</th>
                              <td>{item?.inventoryType}</td>
                              <td>{item?.quantity}</td>
                              <td>{item?.email}</td>
                              <td>{item?.createAt}</td>

                          </tr>
                      })}
                  </tbody>
              </table>

          </div>
      </div>
  </div>
    )
}

export default HomePage