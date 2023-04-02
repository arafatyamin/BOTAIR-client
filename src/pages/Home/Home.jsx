import fetchJsonp from 'fetch-jsonp';
import React, { useEffect, useState } from 'react';
import Card from '../../Componnents/Card';
import Hero from '../../Componnents/Hero';

const Home = () => {
    const [allAirlines, setAllAirlines] = useState([]);
    const [newData, setNewData] = useState([]);



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



  console.log('projectData', allAirlines);

  return (
    <div className='px-[100px] pt-[50px]'>
      <Hero key={allAirlines.index} allAirlines={allAirlines} newData={newData} setNewData={setNewData} />
      <p>{newData.length}</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {newData.length === 0 ? (
          <p>Loading...</p>
        ) : (
            newData.map((airline) => <Card key={airline.code} airline={airline} />)
        )}
      </div>
    </div>
  );
};

export default Home;



// import jsonp from 'jsonp';
// import React, { useEffect, useState } from 'react';
// import Card from '../../Componnents/Card';
// import Hero from '../../Componnents/Hero';

// const Home = () => {

//     const [data, setData] = useState([]);

//     useEffect(() => {
//       const url = 'https://www.kayak.com/h/mobileapis/directory/airlines/homework';
//       jsonp(url, null, (err, response) => {
//         if (err) {
//           console.error(err.message);
//         } else {
//           setData(response);
//         }
//       });
//     }, []);

//       console.log('projectData', data)
//     return (
//         <div className='px-[100px] pt-[50px]'>
//             <Hero></Hero>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
//             <Card></Card>
//             </div>
//         </div>
//     );
// };

// export default Home;