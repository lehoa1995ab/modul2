

// import React from 'react'

// export default function ListProduct(props) {
//   let respones=[
//     {name:"h",age:20},
//     {name:"k",age:21} 
//   ]
// //  const handelClick=(pram)=>{
// //   console.log(props.data)
// //   //props.data=result(pram)
// //   props.data(pram)
// //     console.log("11",data);
// //   }

// function conTraLoi(name) {
//   alert('Ten con la. '+ name);
//   props.docTenCon(name)
// }
//   return (
//     <>
//     <div>ListProducts</div>
//     <button onClick={()=> conTraLoi(props.tenCuaCon)}>click {props.tenCuaCon}</button>
//     </>
//   ) 
// }

// import React, { Component } from 'react'

// export default class ListProduct extends Component {
//   constructor(){
//     super()
//     this.state={title:"thu",count:1,name:""}
//   }
//   changeTitle=()=>{
    
//     this.state.title=="thu"? this.setState({title:"tai"})
//     :this.setState({title:"thu"})
//   }
//   handleChange(event){
//     this.setState({name:event.target.value})
//   }
//   render() {
//     return (
//       <>
//       <div onClick={this.changeTitle}>{this.state.title}</div>
//       <div onClick={()=>{
//         this.setState({count:this.state.count+1})
//       }}>Click tang</div>
//         <div>{this.state.count}</div>
//       <div onClick={()=>{
//         this.setState({count:this.state.count-1})
//       }}>Click giam</div>
//       <input onChange={this.handleChange }type="text" placeholder='moi nhap ten'/>
//       <div>xin chao:{this.state.name}</div>

//       </>
//     )
//   }
// }

// import React from 'react'
// import ProductItem from './ProductItem'

// export default function ListProduct() {
//   let listProduct=[
//     {
//       name: "iphone1",
//       price: 1000000,
//     },
//     {
//       name: "iphone2",
//       price: 1000000,
//     },
//     {
//       name: "iphone3",
//       price: 1000000,
//     }
//   ]
//   return (
//     <>
//     {listProduct.map((item,index)=> <ProductItem key={index} name={item.name} price={item.price}></ProductItem>)}
//     </>
//   )
// }

// import React, { Component } from 'react'

// export default class ListProduct extends Component {
//   render() {
//     let listProduct=[
//         {
//             name:"iphone 11",
//             id:1
//         },
//         {
//             name:"iphone 12",
//             id:2
//         },
//         {
//             name:"iphone 13",
//             id:3
//         },
//         {
//             name:"iphone 14",
//             id:4
//             },

//     ]
//     let result=listProduct.map((item)=>
//     <div key={item.id} className="card mb-3">
//           <div className="card-body">
//             <div className="d-flex justify-content-between">
//               <div className="d-flex flex-row align-items-center">
//                 <div>
//                   <img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
//                     className="img-fluid rounded-3"
//                     alt="Shopping item"
//                     style={{ width: 65 }}
//                   />
//                 </div>
//                 <div className="ms-3">
//                   <h5>{item.name}</h5>
//                   <p className="small mb-0">256GB, Navy Blue</p>
//                 </div>
//               </div>
//               <div className="d-flex flex-row align-items-center">
//                 <div style={{ width: 50 }}>
//                   <h5 className="fw-normal mb-0">2</h5>
//                 </div>
//                 <div style={{ width: 80 }}>
//                   <h5 className="mb-0">$900</h5>
//                 </div>
//                 <a href="#!" style={{ color: "#cecece" }}>
//                   <i className="fas fa-trash-alt" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//     )
//     return (
//         <div className="col-lg-7">
//         <h5 className="mb-3">
//           <a href="#!" className="text-body">
//             <i className="fas fa-long-arrow-alt-left me-2" />
//             Continue shopping
//           </a>
//         </h5>
//         <hr />
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <div>
//             <p className="mb-1">Shopping cart</p>
//             <p className="mb-0">You have 4 items in your cart</p>
//           </div>
//           <div>
//             <p className="mb-0">
//               <span className="text-muted">Sort by:</span>{" "}
//               <a href="#!" className="text-body">
//                 price <i className="fas fa-angle-down mt-1" />
//               </a>
//             </p>
//           </div>
//         </div>
//         <div className="card mb-3">
//           <div className="card-body">
//             <div className="d-flex justify-content-between">
//               <div className="d-flex flex-row align-items-center">
//                 <div>
//                   <img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
//                     className="img-fluid rounded-3"
//                     alt="Shopping item"
//                     style={{ width: 65 }}
//                   />
//                 </div>
//                 <div className="ms-3">
//                   <h5>Iphone 11 pro</h5>
//                   <p className="small mb-0">256GB, Navy Blue</p>
//                 </div>
//               </div>
//               <div className="d-flex flex-row align-items-center">
//                 <div style={{ width: 50 }}>
//                   <h5 className="fw-normal mb-0">2</h5>
//                 </div>
//                 <div style={{ width: 80 }}>
//                   <h5 className="mb-0">$900</h5>
//                 </div>
//                 <a href="#!" style={{ color: "#cecece" }}>
//                   <i className="fas fa-trash-alt" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="card mb-3">
//           <div className="card-body">
//             <div className="d-flex justify-content-between">
//               <div className="d-flex flex-row align-items-center">
//                 <div>
//                   <img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
//                     className="img-fluid rounded-3"
//                     alt="Shopping item"
//                     style={{ width: 65 }}
//                   />
//                 </div>
//                 <div className="ms-3">
//                   <h5>Samsung galaxy Note 10 </h5>
//                   <p className="small mb-0">256GB, Navy Blue</p>
//                 </div>
//               </div>
//               <div className="d-flex flex-row align-items-center">
//                 <div style={{ width: 50 }}>
//                   <h5 className="fw-normal mb-0">2</h5>
//                 </div>
//                 <div style={{ width: 80 }}>
//                   <h5 className="mb-0">$900</h5>
//                 </div>
//                 <a href="#!" style={{ color: "#cecece" }}>
//                   <i className="fas fa-trash-alt" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card mb-3">
//           <div className="card-body">
//             <div className="d-flex justify-content-between">
//               <div className="d-flex flex-row align-items-center">
//                 <div>
//                   <img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
//                     className="img-fluid rounded-3"
//                     alt="Shopping item"
//                     style={{ width: 65 }}
//                   />
//                 </div>
//                 <div className="ms-3">
//                   <h5>Canon EOS M50</h5>
//                   <p className="small mb-0">Onyx Black</p>
//                 </div>
//               </div>
//               <div className="d-flex flex-row align-items-center">
//                 <div style={{ width: 50 }}>
//                   <h5 className="fw-normal mb-0">1</h5>
//                 </div>
//                 <div style={{ width: 80 }}>
//                   <h5 className="mb-0">$1199</h5>
//                 </div>
//                 <a href="#!" style={{ color: "#cecece" }}>
//                   <i className="fas fa-trash-alt" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card mb-3 mb-lg-0">
//           <div className="card-body">
//             <div className="d-flex justify-content-between">
//               <div className="d-flex flex-row align-items-center">
//                 <div>
//                   <img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
//                     className="img-fluid rounded-3"
//                     alt="Shopping item"
//                     style={{ width: 65 }}
//                   />
//                 </div>
//                 <div className="ms-3">
//                   <h5>MacBook Pro</h5>
//                   <p className="small mb-0">1TB, Graphite</p>
//                 </div>
//               </div>
//               <div className="d-flex flex-row align-items-center">
//                 <div style={{ width: 50 }}>
//                   <h5 className="fw-normal mb-0">1</h5>
//                 </div>
//                 <div style={{ width: 80 }}>
//                   <h5 className="mb-0">$1799</h5>
//                 </div>
//                 <a href="#!" style={{ color: "#cecece" }}>
//                   <i className="fas fa-trash-alt" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div> */}
//         {result}
//       </div>
  
//     )
//   }
// }
