import React, { useState,useEffect,useReducer } from 'react';
import {Route,Switch,withRouter,useParams} from 'react-router-dom';
import axios from 'axios';
import classes from './productsList.css';
import LeptopSpacification from './Specification/laptop';
import SSDSpacification from './Specification/SSD';
import RAMSpacification from './Specification/RAM';
const ProductsInfo = props =>{

        const [api, setApi] = useState("http://localhost:3819/api/products");
        const [data, setData] = useState([]);
        // const [cart, setCart] = useState([...JSON.parse(localStorage.getItem("CartData"))]);
        const [cart, setCart] = useState([]);
        const [quantity, setQuantity] = useState(1);
        const [imageName, setImageName] = useState('a.jpg');
        const { category,id } = useParams();
       // const {category} = useParams();
//props.match.params.id

        try{
         // setCart(...JSON.parse(localStorage.getItem("CartData")));
        }catch(error){

        }

        useEffect(() => { 
        console.log(id);
        
        //const ID = localStorage.getItem('productID');
          axios.get(api+'/'+category+'/'+id).then(result =>{
            //console.log(result);
            setData(result.data);
            setImageName(result.data[0].Product.MainPic);
            //console.log(data[0].Product,'dcddddddd');
          });
      },[]);



      const addToCartHandler=()=>{

        try{


          let val=[...JSON.parse(localStorage.getItem("CartData"))];


          
          //var index = val.indexOf(null);

        let temp = 0;
        let oldQuantity = 0;

        var index = val.findIndex(e=>e[0].ID==data[0].ID);
          console.log(index);
          if (index > -1) {
            let findOld = [...val.splice(index, 1)];
            findOld.map(e=>{
                oldQuantity=e[1].quantity;
            })    

           // setQuantity(parseInt(oldQuantity)+parseInt(quantity));
            //console.log(quantity,'wuandddddddd');

            val.splice(index, 1);
          }


        //   console.log(data[0].ID);

         // localStorage.setItem("CartData", JSON.stringify(val));

         
          

          let newData=[...data, {quantity:quantity}]
          let val2=[...val,newData];
          localStorage.setItem("CartData", JSON.stringify(val2));

          console.log(JSON.parse(localStorage.getItem("CartData"))," Carttt");

        }catch(error){
          console.log(error);

        // let val=[JSON.parse(localStorage.getItem("CartData"))];
        // let newData=[...data, {quantity:quantity}]
        // let val2=[...val,newData];
        // localStorage.setItem("CartData", JSON.stringify(val2));

        console.log(JSON.parse(localStorage.getItem("CartData"))," Carttt");
        }

      }

      let specification = null;

      if(category=='Laptop'){
        specification=<LeptopSpacification/>
      }else if(category=='SSD'){
        specification=<SSDSpacification/>
      }else if(category=='RAM'){
        specification=<RAMSpacification/>
      }



        return (
          <div className={classes.productInfo}>
              <h1>Product Information</h1>
              <br/>
              
              <img className={classes.mainImage} src={require('../Content/LeptopImg/'+imageName).default} />
            <table className={classes.customers}>
              {/* <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Brand</th>
              </tr> */}
                {
                  data.map(data =>{
                    return(
                      <>
                   
            
                      {/* <tr>
                          <td> </td>
                          <td>
                            <img className={classes.mainImage} src={require('../Content/LeptopImg/'+data.Product.MainPic).default} />
                          </td>
                        </tr> */}
                        <tr>
                          <td>Name </td>
                          <td>{data.Product.pName}</td>
                        </tr>
                        <tr>
                          <td>Price </td>
                          <td>{data.Product.Price}</td>
                        </tr>
                        <tr>
                          <td>Status </td>
                          <td>{data.Product.Status}</td>
                        </tr>
                        <tr>
                          <td>Brand </td>
                          <td>{data.Product.Brand.bName}</td>
                        </tr>
                      </>
                    )
                  })
                }
            </table>
            <br/>
            <input min='1' type='number' placeholder="Quantity(Defult 1)" onChange={(event)=>setQuantity(event.target.value)}/>
            <button onClick={addToCartHandler}>ADD TO Cart</button>
            <br/>
            <h2>Specification</h2>
            <br/>

              {specification}
              <br/>
          </div>
        );
    } 

export default withRouter(ProductsInfo);




