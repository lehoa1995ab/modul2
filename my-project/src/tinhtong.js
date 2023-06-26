import React , {useState} from "react";

function TinhTong(){
    const[number1,setNumber1]=useState('');
    const[number2,setNumber2]=useState('');
    const[Sum,setSum]=useState();
    const handleChangeNumber1=(e)=>{
        console.log(e.target.value);
        setNumber1(e.target.value)
    };

    const calulateSum=()   =>{
        const result=parseInt(number1)+parseInt(number2);
        console.log(result);
        setSum(result);
        
       
    }
    const handleChangeNumber2=(e)=>{
        console.log(e.target.value);
        setNumber2(e.target.value)
    };
    const handleSum=()=>{

    };
    return(
		<div>
            <h1>Bai tap tinh tong</h1>
            <input type="text" value={number1}onChange={handleChangeNumber1}/>
           <input type="text" value={number2}onChange={handleChangeNumber2}/>
           <button onClick={calulateSum}>Tinh Tong </button>
           <p>Sum:{Sum}</p>
            
        </div>
    )
}
export default TinhTong;
