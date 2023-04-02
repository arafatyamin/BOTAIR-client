import fetchJsonp from 'fetch-jsonp';
import React, { useEffect, useState } from 'react';
import Card from '../../Componnents/Card';
import Hero from '../../Componnents/Hero';
import Pagination from '../../Componnents/Pagination';

const Home = () => {
    const [allAirlines, setAllAirlines] = useState([]);
    const [newData, setNewData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);

// change page
const paginate = pageNumber =>setCurrentPage(pageNumber)

  useEffect(() => {
    fetchJsonp(
        "https://www.kayak.com/h/mobileapis/directory/airlines/homework",
        {
          jsonpCallback: "jsonp",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setAllAirlines(data);
          setNewData(data);
        });
  }, []);

  // get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newData.slice(indexOfFirstPost, indexOfLastPost)


  console.log('projectData', currentPosts);

  return (
    <div className='px-[100px] pt-[50px]'>
      <Hero key={allAirlines.index} allAirlines={allAirlines} newData={newData} setNewData={setNewData} />
      <p className=' text-center text-green-500 pb-2'>Show <span className='font-bold'>{newData.length}</span> Data</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {currentPosts.length === 0 ? (
          <p>Loading...</p>
        ) : (
          currentPosts.map((airline) => <Card key={airline.code} airline={airline} />)
        )}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={newData.length} paginate={paginate}></Pagination>
    </div>
  );
};

export default Home;
