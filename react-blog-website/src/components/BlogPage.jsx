import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pageination from './Pageination';
import CategorySelection from './CategorySelection';
import Sidebar from './Sidebar';

const BlogPage = () => {
    const [blogs,setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12 //blogs per page
    const [selectedCategory, setSelectedCetegory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

            //filter by category
            if(selectedCategory){
                url +=`&category=${selectedCategory}`;
            } 

            const response = await fetch(url);
            const data =await response.json()
            console.log(data)
            setBlogs(data);
        }
        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory])

    // page changing btn
    const handlePageChange = (pageNumber) =>{
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelectedCetegory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }



  return (
    <div>
        {/*caterogy section*/}
        <div><CategorySelection onSelectCategory ={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/></div>

        <div className='flex flex-col lg:flex-row gap-12'>
            {/*blogcards section */}
            <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>

            {/*sidebar component*/}
            <Sidebar/>
        </div>

        {/*pagination section */}
        <div><Pageination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/></div>
    </div>
  )
}

export default BlogPage