import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, onPageChange, totalPages }) => {
  const [nextPage, setNextPage] = useState(currentPage === totalPages ? 1 : currentPage + 1);

  const handlePageChange = () => {
    onPageChange(nextPage);
    setNextPage(nextPage === totalPages ? 1 : nextPage + 1);
  };

  return (
    <div className="pagination-container">
      <div className={`slide ${currentPage === 1 ? 'bar' : 'dot'}`} onClick={handlePageChange}></div>
      <div className={`slide ${currentPage === 2 ? 'bar' : 'dot'}`} onClick={handlePageChange}></div>
    </div>
  );
};

export default Pagination;
