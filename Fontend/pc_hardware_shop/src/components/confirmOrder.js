import React, { useState,useEffect,useReducer, useRef,useMemo } from 'react';
import classes from './productsList.css';
import {Link} from 'react-router-dom';
//useContext in the header
import axios from 'axios';
//import GoogleMapReact from 'google-map-react';


const ConfirmOrder = props =>{
    const [cart, setCart] = useState([JSON.parse(localStorage.getItem("CartData"))]);
    const [continueOrder,setContinueOrder]=useState(false);
    let totalSum=0;
    const [Name,setName]=useState('');
    const [Phone,setPhone]=useState('');
    const [City,setCity]=useState('');
    const [State,setState]=useState('');
    const [Country,setCountry]=useState('');
    const [PostCode,setPostCode]=useState('');
    const [OrderInProgress,setOrderInProgress]=useState(false);
    const [OrderDone,setOrderDone]=useState(false);
    const [errorMsg,setErrorMsg]=useState('');

    const confirmOrderHandler=()=>{

        if (window.confirm('Do you Want to Confirm the ORDER?')) {
            if(Name==''||Phone==''||City==''||State==''||Country==''||PostCode==''){
                setErrorMsg('Fill UP All Text Box');
            }else{
                setErrorMsg('');
            setOrderInProgress(true);
            axios.post('http://localhost:3819/api/orderconfirm',{
                Name:Name,
                Phone:Phone,
                City:City,
                State:State,
                Country:Country,
                PostCode:PostCode
            }).then(result =>{
                console.log(result);
                if(result.data!= null){
                    for (var i = 0; i < cart[0].length; i++) {
                        let temp = cart[0][i];
                        let id=temp[0].ID;
                        let quantity=Number(temp[1].quantity);
                        let orderUserId=result.data;

                        axios.post('http://localhost:3819/api/orderconfirm/productlist',{
                            OrderdUserID:orderUserId,
                            Quantity:quantity,
                            ProductCatagoryLinkedID:id
                        })
                    }

                }

                setOrderInProgress(false);
                setOrderDone(true);
                
            }).catch((err)=>{
                console.log(err);
            });
        }}
    }


        let pageData="";
        if(!OrderDone){
            pageData=(
                <div>
                    <h2>Your InforMation</h2>

                    <table className={classes.customers}>
                        <tr>
                            <td>Name</td>
                            <td><input onChange={(event)=>setName(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td><input  onChange={(event)=>setPhone(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td><input  onChange={(event)=>setCity(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td><input  onChange={(event)=>setState(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td><input  onChange={(event)=>setCountry(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>PostCode</td>
                            <td><input  onChange={(event)=>setPostCode(event.target.value)}/></td>
                        </tr>
                    </table>

                    <br/>
                    {OrderInProgress?<p>Loding...</p>:<button onClick={confirmOrderHandler}>Confirm Order</button>}
                    <br/>
                    <p style={{color:'red'}}>{errorMsg}</p>
                    <br/>
                    <h2>Your Orders</h2>
                    <table  className={classes.customers}>
                    {cart.map(data=>{
                        return(
                            data.map((data,i)=>{
                                totalSum= (parseInt(data[0].Product.Price.replace(/,/g, '')) * data[1].quantity)+totalSum;
                                if(data!=null){
                                    return(
                                        <tr key={data[0].ID}>
                                            <td>{data[0].Product.pName}</td>
                                            <td>{data[0].Product.Price}</td>
                                            <td>{data[1].quantity}</td>
                                            <td>
                                                {
                                                parseInt(data[0].Product.Price.replace(/,/g, '')) * data[1].quantity
                                                
                                                }
                                            </td>
                                        </tr>

                            )}}))})}
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total: </td>
                            <td>{totalSum}</td>
                        </tr>
                    </table>
                    <br/>
                    <Link to={{pathname:'/user/cart'}}>Edit Orders</Link>
                </div>
            )
        }else{
            window.localStorage.removeItem("CartData");
            pageData=(
                <div>
                    <h1>Your Order Submitted..</h1>
                    <h3>For any Qus call: 018XXXXXXXX</h3>
                    {}
                </div>
            )
        }

        return (
        <div className="">
           
            {cart!=''? pageData:<h3>You Donn't have any Item in your Cart!</h3>}
           
        </div>
        );
    } 
export default ConfirmOrder;