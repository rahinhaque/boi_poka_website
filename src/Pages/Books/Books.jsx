import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {


    // const [allBooks , setAllBooks] = useState([]);

    // useEffect(()=>{
    //     fetch("/public/book.json")
    //     .then(res=> res.json())
    //     .then(data => {
    //         setAllBooks(data)
    //     })
    // },[])

    // const bookPromise = fetch("/public/book.json").then(res => res.json())










    return (
        <div>
            <h1 className='text-3xl text-center p-5 italic font-black underline'>Books</h1>
            <Suspense>
                <div className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-5 mb-10">
  {data.map((singleBook) => (
    <Book key={singleBook.bookid} singleBook={singleBook} />
  ))}
</div>

            </Suspense>
        </div>
    );
};


export default Books;