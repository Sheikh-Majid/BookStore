import React from 'react'

const Cards = ({ data }) => {
    // console.log("data aa gya h " , data)
  return (
    <div>
      <div className="card bg-base-100 w-80 shadow-xl my-10 hover:scale-105 duration-300 transition-all cursor-pointer dark:bg-slate-600 dark:text-white dark:border">
        <figure>
          <img src={data.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.name}
            <div className="badge text-white bg-blue-600">{data.category}</div>
          </h2>
          <p>If a reader reads books, which books do they choose to explore?</p>
          <div className="card-actions justify-between">
            <div className="px-2 py-1 rounded-xl border border-black hover:bg-blue-600 hover:text-white transition-all duration-300">${data.price}</div>
            <div className=" rounded-full  bg-blue-600 text-white px-2 py-1 hover:bg-blue-500 duration-300 transition-all cursor-pointer dark:border-2">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards
