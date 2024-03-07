import axios from "axios";
import React, { useEffect, useState } from "react";

function Details() {
  const [detailss, setDetailss] = useState([]);
  const getDetails = async () => {
    const urlParams = new URLSearchParams(window.location.search); //بترجعلي الراميترز الموجودة بالرابط
    const id = urlParams.get("id"); //بتجيب الاي دي
   // console.log("id=", id);
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/products/${id}`
    );
    console.log("data", data.product);
    setDetailss(data.product);


    console.log("detailsssss", detailss);
  };

  useEffect(() => {
    getDetails();
  }, [detailss]);

  return (
    <>
        {/* {detailss.map((det) => (
          <div key={det._id}>
            <h3>{det.name}</h3>
            <p>{det.description}</p>
            <img src={det.mainImage.secure_url} />
            <img src={det.subImages.secure_url} />
            <img src={det.mainImage.secure_url[0]} />
          </div>
        ))} */}
    
    </>
  );
}

export default Details;

{
  /* <ul>
{det.reviews.map( (rev)=>{
<div>
        <li>{rev.comment}</li>
   
</div>
} )}
</ul> */
}
