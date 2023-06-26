// import React, { Component } from 'react'
// // LifeCycle cua reactjs gom 4 giai doan 
// // 1.khoi tao :chay vao constructor dau tien 
// //=>noi minh khoi tao  state
// //2.mounting :gan ket(chi thuc hien 1 lan )
// //.componentWillUnmount()
// //.render()
// //.componentDidMount()
// //3.update:(co the thuc hien nhieu lan)
// //.khi ma state thay doi thi component re-render
// //4.unmounting(chi thuc hien 1 lan)
// export default class LifeCycle extends Component {
//     constructor(){
//        super()
//        this.state={
//         h:"k",
//         a:"",
//        }
//     }
//     componentWillUnmount=()=>{
//         console.log("chay khi constructor xong");
//     }
//     componentDidMount=()=>{
//       console.log("chay sau khi render xong");//noi goi API lay du lieu
//     }
//     handleUpdate=()=>{
//         this.setState({
//             h:"kl",
           
//             })
//     }
//     a=setInterval(()=>{
//         console.log("1111");
      
//     },1000)
    
//     componentWillUpdate=()=>{
//         console.log("component willUpdate duoc thuc thi truoc khi re-render!");
//     }
//     componentDidUpdate=()=>{
//         console.log("component DidUpdate");
//     }
//     componentWillUnmount=()=>{
//         console.log("chay khi component unmount da chay");
//     }
//     handledUnmounting=()=>{
//         clearInterval(this.a);
//     }

//   render() {
//     console.log("chay sau khi component Willmount chay");

//     return (
//       <>
//       <div>LifeCycle</div>
//       <button onClick={this.handleUpdate}>click</button>
//       <button onClick={this.handledUnmounting}>unmounting</button>
//       </>
//     )
//   }
// }
import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    componentWillMount() {
        console.log('1.component will mount đã đc thực thi');
    }
    componentDidMount() {
        console.log('3.sau khi render,  component did mount đã đc thực thi');
    }
    componentWillUpdate() {
        console.log('4.component will update đã đc thực thi, sau khi component đc setstate');
    }
    componentDidUpdate() {
        console.log('6.sau khi re-render ,component did update đã đc thực thi');
    }
    handleCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        console.log("2.chạy sau khi component Willmount chạy");
        return (
            <>
                <div>Hiển thị biến đếm : {this.state.count}</div>
                <button onClick={this.handleCount}>Click</button>
            </>
        )
    }
}
