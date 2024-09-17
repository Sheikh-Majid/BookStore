import React from 'react'
import data from "../../public/data.json"
import Cards from './Cards';

const AllBooks = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div className="mt-16 py-20 items-center justify-center text-center">
        <h1 className="text-2xl  md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-orange-600"> Here!</span>
        </h1>
        <p className='mt-10'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          assumenda? Repellendus, iste corrupti? Tempore laudantium repellendus
          accusamus accusantium sed architecto odio, nisi expedita quas quidem
          nesciunt debitis dolore non aspernatur praesentium assumenda sint
          quibusdam, perspiciatis, explicabo sequi fugiat amet animi eos aut.
          Nobis quisquam reiciendis sunt quis sed magnam!
        </p>
          </div>
          <div className=' grid grid-cols-1 md:grid-cols-3 mt-5'>
              {
                  data.map((item) => (
                      <Cards data={item} />
                ))    
              }
          </div>
    </div>
  );
}

export default AllBooks
