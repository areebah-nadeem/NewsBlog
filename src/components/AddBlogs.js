import React, { useState } from 'react'
import Navbar from './Navbar'
import {db} from '../Firebase';
import {addDoc, collection} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AddBlogs = () => {
  const auth = getAuth()
  const navigate = useNavigate()
 const [formData, setFormData] = useState({
  title: '',
  description: '',
  imageUrl : '',
  authorName: auth.currentUser.displayName,



 })

 const handleChange = (e) => {
  setFormData({...formData,[e.target.name]: e.target.value})
 }

 const formRef = collection(db, 'blog')
 
 const clearData = () => {
  setFormData({
    title: '',
    description: '',
    imageUrl: '',
  });
}

const submitHandler = async (e) => {
  e.preventDefault();
  await addDoc(formRef, formData);

  alert('Successfully added!')
  setFormData(
    {
      title: '',
      description: '',
      imageUrl: '',

    }
  )

  navigate('/blogs')

}

  return (
  <>
  <Navbar/>
  <form onSubmit={submitHandler}>
  <div className="container my-3" style={{width:"60%"}}>
  <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Title</label>
  <input value ={formData.title} name="title" onChange={handleChange} type="text" className="form-control" id="exampleFormControlInput1"/>
</div>

<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea value={formData.description} name="description" onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Image Url</label>
  <input value={formData.imageUrl} name="imageUrl" onChange={handleChange} type="text" className="form-control" id="exampleFormControlInput1"/>
</div>

<button type="submit" class="btn btn-primary" style={{ marginRight: '10px' }}>Add Blog </button>

<button type="button" class="btn btn-dark" onClick={clearData}>Clear</button>

  </div>
</form>

  </>
  )
}

export default AddBlogs




