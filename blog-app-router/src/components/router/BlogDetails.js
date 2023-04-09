import React,{useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogs } from './data'

const BlogDetails = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [details, setDetails] = useState('');

  const{id} = useParams();


  


  useEffect(()=>{
    const thisBlog =  blogs.find((blog)=>blog.id === parseInt(id));
    console.log(thisBlog)
    if(thisBlog){
      setTitle(thisBlog.title);
      setAuthor(thisBlog.author);
      setDetails(thisBlog.details);

    }
  },[id])



  return (
    <div className="container --p">
    <h1 className="--text-center">{title}</h1>
    <hr />
    <p>
      <b>Author:</b> {author}
    </p>
    <br />
    <p>{details}</p>
    <Link to="/blogs" className=" --btn --btn-primary">Back to Blogs</Link>
  </div>
  )
}

export default BlogDetails