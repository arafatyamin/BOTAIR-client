import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumber = [];
    
    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <nav>
            

<ul className="flex justify-center w-full break-words">
{pageNumber.map(number => (
                    <li className='pt-3 pb-5'>
                        <a onClick={() => paginate(number)} className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border-2 hover:border-0 border-blue-600 text-black active:bg-violet-700 hover:bg-gradient-to-tr from-blue-600 to-blue-400 p-0 text-sm hover:text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out" href="!#">{number}</a>
                    </li>
))}
                </ul>
        </nav>
    );
};

export default Pagination;