import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Sidebar = () => {
    const [popularBlogs, setPopularBlogs] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/blogs").then(res => res.json()).then(data => setPopularBlogs(data.slice(0,15)))
    },[])
  return (
    <div>
        <div>
            <h3 className='text-2xl font-semibold px-4'>Latest Blogs</h3>
            <div>
                {
                    popularBlogs.map(blog => <div key={blog.id}>
                        <h4>{blog.title}</h4>
                        <Link to="/" className='font-medim hover:text-orange-500 inline-flex item-center py-1'>Read More <FaArrowRight className='mt-1 ml-2'/></Link>
                    </div>)

                }
            </div>
        </div>
    </div>
  )
}

export default Sidebar