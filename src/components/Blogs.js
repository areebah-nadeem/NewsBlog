import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import Navbar from "./Navbar";
import { db } from "../Firebase";
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Blogs = () => {
  const auth = getAuth();
  const collref = collection(db, "blog");

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {
      onSnapshot(collref, (snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };
    getData();
  }, []);


  const deleteData = async (id) => {
    const data = doc(db, 'blog', id)
    alert("Successfully Deleted!")
    await deleteDoc(data)

  }

  return (
    <>
      <Navbar />
      {data.map((blogData) => (
        <div className="card mb-3 mt-5 flex-column" style={{maxHeight:'350px'}} key={blogData.id}>
          <h3>{blogData.authorName}</h3>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={blogData.imageUrl}
                className="img-fluid rounded-start"
                alt="iPhone 14"
                style={{ height: "70%"}}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">{blogData.title}</h2>
                <p className="card-text">{blogData.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
                <Link to={`/blogs/${blogData.id}`}className="btn btn-primary mx-2">
                  View More
                </Link>
                <button className="btn btn-danger" onClick={() => deleteData(blogData.id)}>
                 Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blogs;
