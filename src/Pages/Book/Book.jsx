import React, { use } from "react";
import { GiRoundStar } from "react-icons/gi";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {
    yearOfPublishing,
    totalPages,
    review,
    rating,
    publisher,
    image,
    category,
    bookName,
    author,
    tags,
    bookId

  } = singleBook;

  console.log(singleBook);

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm border border-gray-200  p-6">
        <figure className="p-3 bg-gray-100 w-2/3 mx-auto">
          <img className="h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-sm  bg-[#23BE0A]/10 text-[#23BE0A]"
              >
                {tag}
              </button>
            ))}
          </div>

          <h2 className="card-title">
            {bookName}

            <div className="badge  bg-[#23BE0A]/10 text-[#23BE0A]">
              {yearOfPublishing}
            </div>
          </h2>
          <p className="font-bold">By: {author}</p>
          <p className="font-sans font-semibold">Publishers: {publisher}</p>
          <p className="italic">Total Pages : {totalPages}</p>
          <div className="border-t-2 border-dashed border-gray-300"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline bg-[#59C6D2] text-white italic">
              {category}
            </div>
            <div className="badge badge-outline bg-[#59C6D2] text-white italic">
              <GiRoundStar />
              {rating}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
