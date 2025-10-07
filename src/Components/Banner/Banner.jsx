import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-12 bg-[#131313]/5 rounded-2xl mb-8'>
            <div>
                <h1 className='font-semibold text-5xl mb-5'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn btn-success'>View The List</button>
            </div>
            <div>
                <img  src="https://i.ibb.co.com/FLdkQ7CV/pngwing-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;