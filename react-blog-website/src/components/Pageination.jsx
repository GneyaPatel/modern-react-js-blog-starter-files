import React from 'react'

const Pageination = ({onPageChange, currentPage, blogs, pageSize}) => {
  const totalPages = Math.ceil(blogs.length / pageSize);
  //console.log(totalPages)
  const renderPaginationLink = () => {
    return Array.from({length: totalPages}, (_, i) => i + 1).map((pageNumber) => (
        <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
            <a href="#" onClick={() =>onPageChange(pageNumber)}>{pageNumber}</a>
        </li>
    ))
  }
    return (
        <ul>
            <li>
                <button onClick={()=>onPageChange(currentPage - 1)} disabled={currentPage ===1}>Pervious</button>
            </li>
            <div>{renderPaginationLink()}</div>
            <li>
                <button>Next</button>
            </li>
        </ul>
  )
}

export default Pageination