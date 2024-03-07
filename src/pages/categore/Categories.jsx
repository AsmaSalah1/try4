import React, { useEffect, useState } from "react";
import style from "./categories.module.css";
import Loader from "../../component/loader/Loader";
import Details from '../Details';
import { Link, NavLink } from "react-router-dom";
function Categories() {
  let [loader, setLoader] = useState(true);
  const [Categoriess, setCategories] = useState([]);

  const getData = async () => {
    const response = await fetch(
      ` ${import.meta.env.VITE_API_URL}/categories/active?page=1&limit=9`
    );

    const data = await response.json();
    console.log(data.categories);
    setCategories(data.categories);
    setLoader(false);
  };
  useEffect(() => {
    getData();
  }, []);
  if (loader) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      <div className={style.me} ></div>
      {Categoriess.map((category) => (
        <div key={category._id}>
          <div className="row row-cols-1 row-cols-md-2 g-4 ">
            <div className="col">
              <div className="card ">
                <img
                  src={category.image.secure_url}
                  className="card-img-top"
                  alt="category image"       />
                <div className="card-body">
                  <h5 className="card-title">{category.name}</h5>
                  {/* <Link to='/products '  params={{ id: category._id }}>Details</Link> */}
                  <Link to={`/products?id=${category._id}`} className="btn btn-secondary">Show more</Link>

                  
                  {/* <Link to={`/products/category/${category._id}`}>Link Text</Link> */}

                  {/* <Link to='/Details?id=${category._id}'>Details</Link> */}
                  
                  {/* <a href='details.jsx?id=${category._id}'>get details</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Categories;
