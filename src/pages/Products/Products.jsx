import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './products.module.css'
import Loader from '../../component/loader/Loader';
function Products() {
  const [loader,setLoader]=useState(true);
  const [details, setDetails] =useState([]);
  
  const getDetails =async()=>{
      const urlParams=new URLSearchParams(window.location.search);//بترجعلي الراميترز الموجودة بالرابط
      console.log(urlParams);
      const id=urlParams.get("id"); //بتجيب الاي دي 
      console.log("id=",id);
      const {data}=await axios(`${import.meta.env.VITE_API_URL}/products/category/${id}`);
        console.log("details",data.products);
        setDetails(data.products);
        setLoader(false);
  }
  useEffect(() => {
      getDetails();
    }, []);
    if(loader){
      return (
        <>
          <Loader />
        </>
      );
        }
     return(
  <>
  <div className={style.dad}>
     {
      details.map((det)=>(

      <div className="card" key={det._id} style={{width: '21rem'}}>
<img src={det.mainImage.secure_url} className={`${style.cardk} `} alt="..." />
<h3>{det.price } $ </h3>
<div className="card-body" style={{height: '133px'}}>
  <h5 className="card-title">{det.name}</h5>
  {/* <p className="card-text">{det.description}</p> */}
  <Link to={`/details?id=${det._id} `}className="btn btn-secondary">Show details</Link>

</div>
</div>

// {/* <div key={det._id}>
// <h3>{det.name}</h3>
// <img src={det.mainImage.secure_url} alt="..." />
// <p>{det.price}</p>
// </div> */}
      ))
      }
</div>
      
  
  </>
)
 

  
}

export default Products