import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { getDoc, doc, collection } from 'firebase/firestore';
import { Link, useParams } from 'react-router-dom';
import { db } from '../Firebase';

const SingleBlog = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const colRef = collection(db, 'blog');
  const singledata = doc(db, 'blog', id);

  useEffect(() => {
    const singlefetch = async (id) => {
      getDoc(singledata).then((doc) => setData(doc.data()));
    };
    singlefetch(id);
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h3>{data.authorName}</h3>
            <div className="left-img">
              <img src={data.imageUrl} alt="img" className="img-fluid" />
            </div>
          </div>

          <div className="col-md-6" style={{marginTop: '150px'}}>
            <div className='text-center'>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
            </div>
            <Link to={'/blogs'} className="btn btn-primary" style={{marginLeft: '20px'}}>
              Back to Blogs</Link>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default SingleBlog;

