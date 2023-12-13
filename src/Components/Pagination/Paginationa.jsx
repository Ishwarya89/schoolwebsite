import React, { useState } from 'react';
import './Paginationa.css';

const Pagination = ({ currentPage1, onPageChange, totalPages }) => {
  const [nextPage, setNextPage] = useState(currentPage1 === totalPages ? 1 : currentPage1 + 1);

  const handlePageChanges = () => {
    onPageChange(nextPage);
    setNextPage(nextPage === totalPages ? 1 : nextPage + 1);
  };

  return (
    <div className="pagination-container">
      <div className={`slide1 ${currentPage1 === 1 ? 'bar' : 'dot'}`} onClick={handlePageChanges}></div>
      <div className={`slide1 ${currentPage1 === 2 ? 'bar' : 'dot'}`} onClick={handlePageChanges}></div>
    </div>
  );
};

export default Pagination;
