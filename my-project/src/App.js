import React, { Component } from 'react'

export default class App extends Component {
  render() {
    
    return (
      <div>App</div>
    )
  }
}

/* import React, { Component } from 'react'
import ListProduct1 from './components/ListProduct1'
import Search from './components/Search'
import LifeCycle from './components/LifeCycle'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      listProducts:[
    {
      name:"iphone",
      price:100000,
    },
    {
      name:"quan ao",
      price:50000,
    },
    {
      name:"sach",
      price:50000,
    },
    {
      name:"sach tinh te",
      price:50000,
    },
      ],
      search:"",
    }
  }
  getData=(keySearch)=>{
    //console.log("keySearch",keySearch);
    this.setState({
      search:keySearch,
      })

  }
  render() {
    //console.log("222",this.state.search);
    let resultDataSearch=[];
    if(this.state.search!=""){
      resultDataSearch=this.state.listProducts.filter((item)=>{
        return item.name.toLowerCase().includes(this.state.search)
      })
    }else{
      resultDataSearch = [...this.state.listProducts]
    }
    //console.log("resultDataSearch",resultDataSearch);
    return (
      <>
     <Search dataSearchProduct={this.getData}></Search>
      <ListProduct1 dataListProducts={resultDataSearch}></ListProduct1>
      <LifeCycle></LifeCycle>
      </>
    )
  }
}
 */
// import React, { Component } from 'react'

// export default class App_2 extends Component {
//   constructor() {
//     super()
//     this.state = {
//       data: [{ name: 'A', type: 'VH' },
//       { name: 'B', type: 'KH' },
//       { name: 'C', type: 'TT' },
//       { name: 'D', type: 'KH' },
//       { name: 'E', type: 'TT' },
//       { name: 'F', type: 'VH' }
//       ]
//     }

//   }
//   handleClick = (event) => {
//     this.setState({
//       data: this.state.data.filter((item) => {
//         return item.type == event;
//       })
//     })
//   }
//   render() {
//     <div> </div>
//     return (
//       <>
//         <button onClick={() => this.handleClick('VH')}>Văn hóa</button>
//         <button onClick={() => this.handleClick('TT')}>Thể thao</button>
//         <button onClick={() => this.handleClick('KH')}>Khoa học</button>

//         {this.state.data.map((value, index) => <div key={index}>{value.name}</div>)}
//       </>
//     )
//   }
// }
// import React, { Component } from 'react'
// import CoinFlip from './components/CoinFlip'
// import ReactDOM from 'react-dom';


// export default class App extends Component {
//   render() {
//     return (
//      <>
//      <CoinFlip></CoinFlip>
//      <ReactDOM></ReactDOM>
//      </>
//     )
//   }
// }



// import React, { Component } from 'react';

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       thu: [
//         { name: "trang logic", catergory: "khoa học" },
//         { name: "hoa logical", catergory: "the thao" },
//         { name: "hương văn hoá", catergory: "van hoa" },
//         { name: "trâm chuyên hoá", catergory: "khoa học" },
//         { name: "thư chuyên văn", catergory: "khoa học" },
//       ],
//       filteredItems: [],
//     };
//   }

//   componentDidMount() {
//     // Set the initial state of filteredItems to contain all items
//     this.setState({ filteredItems: this.state.thu });
//   }

//   handleClick = () => {
//     const filteredItems = this.state.thu.filter(
//       (item) => item.catergory === "khoa học"
//     );

//     this.setState({ filteredItems });
//   };

//   handleClick1 = () => {
//     const filteredItems = this.state.thu.filter(
//       (item) => item.catergory === "van hoa"
//     );

//     this.setState({ filteredItems });
//   };

//   handleClick2 = () => {
//     const filteredItems = this.state.thu.filter(
//       (item) => item.catergory === "the thao"
//     );

//     this.setState({ filteredItems });
//   };

//   render() {
//     return (
//       <>
//         <button onClick={() => this.setState({ filteredItems: this.state.thu })}>
//           All Products
//         </button>
//         <button onClick={this.handleClick}>Sách khoa học</button>
//         <button onClick={this.handleClick1}>Sách văn hoá</button>
//         <button onClick={this.handleClick2}>Sách thể thao</button>
//         {/* 
//         Render the filtered items
//          */}
//         {this.state.filteredItems.map((value, index) => (
//           <div key={index}>{value.name}</div>
//         ))}
//       </>
//     );
//   }
// }



{/* // import React, { Component } from 'react'
// import ListProduct1 from './components/ListProduct1'
// import Search from './components/Search'

// export default class App extends Component { */}
{/* //   render() { */}
{/* //     return (
//       <>
//       <ListProduct1></ListProduct1>
//       <Search></Search>
//       </>
//     )
//   }
// }

// import React from 'react'

// export default function App() { */}
{/* //   return (
//     <>
//     {/* chua 2 components
//     1.ListProduct:
//     2.search */}
{/* //     <ListProduct />
//     </>
//   )
// } } }

// import React from 'react'
// import ListProduct from './components/ListProduct'

// export default function App() {
//   //khai bao 1 ham
//   let result=(getData)=>{
//         console.log("111",getData)
//   }
//   function docTenCon(tencuacon) {
//     alert("Thang " + tencuacon + " vua goi")
//   }

//   return (
//     <>
//     <ListProduct docTenCon={docTenCon}  tenCuaCon={"teo"}></ListProduct>
//     <br></br>
//     <ListProduct docTenCon={docTenCon} tenCuaCon={"ty"}></ListProduct>
//     </>
//   );
// }


// import React from 'react'

// export default function App() {
//   let a=9;
//   return (
//   h
//   )


// import React, { Component } from 'react'
// import ListProduct from './components/ListProduct'
// import CartDetail from './components/CartDetail'
// import Body from './components/Body'

// export default class App extends Component {
//   let a=9;
//   render() {
//     return (
//       {a}
//       <ListProduct></ListProduct>
      // props:properties
      // dung de truyen du lieu tu cha sang con
      //khi du lieu o thang con nhan ve thi khong thay doi duoc gia tri
      
      {/* <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card">
            <div className="card-body p-4">
              <div className="row">
                <ListProduct></ListProduct>
              <CartDetail></CartDetail>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-uppercase mb-0">MANAGER USER</h5>
          </div>
               <Body></Body>
        </div>
      </div>
    </div>
  </div>
</> */}
 
