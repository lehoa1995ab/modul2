import React from 'react'

export default function Body() {
  let listProduct = [
    {
      id: 1,
      name: "a",
    },
    {
      id: 2,
      name: "b",
    },
    {
      id: 3,
      name: "c",
      
    },
  ]
  let result=listProduct.map((item)=>
  <tr key={item.id}>
        <td className="pl-4">{id}</td>
        <td>
          <h6 className="font-medium mb-0">{item.name}</h6>
        </td>
        <td>
          <span className="text-muted">Visual Designer</span>
          <br />
          <span className="text-muted">Past : teacher</span>
        </td>
        <td>
          <span className="text-muted">daniel@website.com</span>
          <br />
        </td>
        <td>
          <span className="text-muted">15 Mar 1988</span>
          <br />
        </td>
        <td>
          <select
            className="form-control category-select"
            id="exampleFormControlSelect1"
          >
            <option>Modulator</option>
            <option>Admin</option>
            <option>User</option>
            <option>Subscriber</option>
          </select>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-trash" />{" "}
          </button>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-edit" />{" "}
          </button>
        </td>
      </tr>)

  return (
    <>
     <div className="table-responsive">
            <table className="table no-wrap user-table mb-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="border-0 text-uppercase font-medium pl-4"
                  />
                  <th
                    scope="col"
                    className="border-0 text-uppercase font-medium"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="border-0 text-uppercase font-medium"
                  >
                    Age
                  </th>
                  <th
                    scope="col"
                    className="border-0 text-uppercase font-medium"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="border-0 text-uppercase font-medium"
                  >
                    Dateofbirth
                  </th>
                  <th
                    scope="col"
                    className="border-0 text-uppercase font-medium"
                  >
                    Manage
                  </th>
                  <th
                    scope="col"
                    className="border-0 text-uppercase font-medium"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              
              <tr>
        <td className="pl-4">1</td>
        <td>
          <h6 className="font-medium mb-0">Daniel Kristeen</h6>
        </td>
        <td>
          <span className="text-muted">Visual Designer</span>
          <br />
          <span className="text-muted">Past : teacher</span>
        </td>
        <td>
          <span className="text-muted">daniel@website.com</span>
          <br />
        </td>
        <td>
          <span className="text-muted">15 Mar 1988</span>
          <br />
        </td>
        <td>
          <select
            className="form-control category-select"
            id="exampleFormControlSelect1"
          >
            <option>Modulator</option>
            <option>Admin</option>
            <option>User</option>
            <option>Subscriber</option>
          </select>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-trash" />{" "}
          </button>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-edit" />{" "}
          </button>
        </td>
      </tr>
      {result}
             
            </table>
          </div>
     
      {/* <tr>
        <td className="pl-4">2</td>
        <td>
          <h6 className="font-medium mb-0">Emma Smith</h6>
        </td>
        <td>
          <span className="text-muted">Visual Designer</span>
          <br />
          <span className="text-muted">Past : teacher</span>
        </td>
        <td>
          <span className="text-muted">daniel@website.com</span>
          <br />
        </td>
        <td>
          <span className="text-muted">15 Mar 1855</span>
          <br />
        </td>
        <td>
          <select
            className="form-control category-select"
            id="exampleFormControlSelect1"
          >
            <option>Modulator</option>
            <option>Admin</option>
            <option>User</option>
            <option>Subscriber</option>
          </select>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-trash" />{" "}
          </button>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-edit" />{" "}
          </button>
        </td>
      </tr>
      <tr>
        <td className="pl-4">3</td>
        <td>
          <h6 className="font-medium mb-0">Olivia Johnson</h6>
        </td>
        <td>
          <span className="text-muted">Visual Designer</span>
          <br />
          <span className="text-muted">Past : teacher</span>
        </td>
        <td>
          <span className="text-muted">daniel@website.com</span>
          <br />
        </td>
        <td>
          <span className="text-muted">17 Aug 1988</span>
          <br />
        </td>
        <td>
          <select
            className="form-control category-select"
            id="exampleFormControlSelect1"
          >
            <option>Modulator</option>
            <option>Admin</option>
            <option>User</option>
            <option>Subscriber</option>
          </select>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-trash" />{" "}
          </button>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-edit" />{" "}
          </button>
        </td>
      </tr>
      <tr>
        <td className="pl-4">4</td>
        <td>
          <h6 className="font-medium mb-0">Isabella Williams</h6>
        </td>
        <td>
          <span className="text-muted">Visual Designer</span>
          <br />
          <span className="text-muted">Past : teacher</span>
        </td>
        <td>
          <span className="text-muted">daniel@website.com</span>
          <br />
        </td>
        <td>
          <span className="text-muted">26 Mar 1999</span>
          <br />
        </td>
        <td>
          <select
            className="form-control category-select"
            id="exampleFormControlSelect1"
          >
            <option>Modulator</option>
            <option>Admin</option>
            <option>User</option>
            <option>Subscriber</option>
          </select>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-trash" />{" "}
          </button>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-edit" />{" "}
          </button>
        </td>
      </tr>
      <tr>
        <td className="pl-4">5</td>
        <td>
          <h6 className="font-medium mb-0">Sophia Jones</h6>
        </td>
        <td>
          <span className="text-muted">Visual Designer</span>
          <br />
          <span className="text-muted">Past : teacher</span>
        </td>
        <td>
          <span className="text-muted">daniel@website.com</span>
          <br />
        </td>
        <td>
          <span className="text-muted">16 Aug 2001</span>
          <br />
        </td>
        <td>
          <select
            className="form-control category-select"
            id="exampleFormControlSelect1"
          >
            <option>Modulator</option>
            <option>Admin</option>
            <option>User</option>
            <option>Subscriber</option>
          </select>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-trash" />{" "}
          </button>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-edit" />{" "}
          </button>
        </td>
      </tr>
      <tr>
        <td className="pl-4">6</td>
        <td>
          <h6 className="font-medium mb-0">Charlotte Brown</h6>
        </td>
        <td>
          <span className="text-muted">Visual Designer</span>
          <br />
          <span className="text-muted">Past : teacher</span>
        </td>
        <td>
          <span className="text-muted">daniel@website.com</span>
          <br />
        </td>
        <td>
          <span className="text-muted">15 Mar 1988</span>
          <br />
        </td>
        <td>
          <select
            className="form-control category-select"
            id="exampleFormControlSelect1"
          >
            <option>Modulator</option>
            <option>Admin</option>
            <option>User</option>
            <option>Subscriber</option>
          </select>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-trash" />{" "}
          </button>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-edit" />{" "}
          </button>
        </td>
      </tr> */}
    </>
  )
}


  