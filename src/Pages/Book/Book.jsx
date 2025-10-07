import React, { use } from "react";
import { GiRoundStar } from "react-icons/gi";



const Book = ({ singleBook }) => {

const {yearOfPublishing,totalPages,review,rating,
    publisher,image,category,bookName,author} = singleBook;



  console.log(singleBook);

  return (
    <div className="card bg-base-100 w-96 shadow-sm border border-gray-200  p-6">
      <figure className="p-3 bg-gray-100 w-2/3 mx-auto">
        <img className="h-[166px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="font-bold">By:  {author}</p>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline"><GiRoundStar />{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
