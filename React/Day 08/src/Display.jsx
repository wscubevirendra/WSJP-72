import React from 'react';

export default function Display(props) {
    return (
        <div className='container mt-4'>
            <div className='row g-4'>
                {
                    props.movies.map((data, index) => {
                        return (
                            <div className='col-lg-3 col-md-4 col-sm-6' key={index}>
                                <div className='card shadow-sm h-100'>
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`} 
                                        className='card-img-top' 
                                        alt={data.title} 
                                        style={{ maxHeight: '300px', objectFit: 'cover' }} 
                                    />
                                    <div className='card-body d-flex flex-column'>
                                        <h5 className='card-title text-truncate'>{data.title}</h5>
                                       
                                    
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
