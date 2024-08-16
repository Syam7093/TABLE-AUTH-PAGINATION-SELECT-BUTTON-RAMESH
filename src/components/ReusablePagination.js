// src/components/ReusablePagination.js
import React from 'react';

const ReusablePagination = ({ currentPage, setCurrentPage, numbers }) => {

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < numbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                style={{ margin: '0 5px', padding: '5px 10px', cursor: 'pointer' }}
            >
                Prev
            </button>
            {numbers.map(number => (
                <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    disabled={currentPage === number}
                    style={{
                        margin: '0 2px',
                        padding: '5px 10px',
                        cursor: 'pointer',
                        backgroundColor: currentPage === number ? '#007bff' : '#fff',
                        color: currentPage === number ? '#fff' : '#000',
                        border: '1px solid #007bff',
                        borderRadius: '4px'
                    }}
                >
                    {number}
                </button>
            ))}
            <button
                onClick={handleNext}
                disabled={currentPage === numbers.length}
                style={{ margin: '0 5px', padding: '5px 10px', cursor: 'pointer' }}
            >
                Next
            </button>
        </div>
    );
};

export default ReusablePagination;
