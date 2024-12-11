import React from 'react'

const SingleBlog = () => {
    const data = useLoaderdata();
    const {title, image, category, author, published_data, reading_time, content} = data[0];
  return (
    <div>
      SingleBlog
    </div>
  )
}

export default SingleBlog
