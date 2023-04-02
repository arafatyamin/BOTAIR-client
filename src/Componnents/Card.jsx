import React from 'react';

const Card = ({airline}) => {
    const {
        site,
        phone,
        name,
        logoURL,
        alliance,
      } = airline;
      const photoURL = "https://www.kayak.com/" + logoURL;
    return (
        <div className='flex w-full xl:w-[252px] h-[185px] px-2 rounded-[2px] shadow-lg justify-center items-center 
         border-2 group'>
            <div className='w-2/5 m-2'>
                <img className='w-full' src={photoURL} alt="" />
            </div>
            <div className='w-3/5 flex flex-col gap-1 
             mr-2'>
            <h1>{name}</h1>
            <div className='group-hover:block hidden'>
            <p style={{ margin:'2px',fontSize:'14px' }}>{alliance==='none'?'':alliance}</p>
            <h4 className='text-sm'>{phone}</h4>
            <p className='break-words'>{site}</p>
            </div>
            </div>
        </div>
    );
};

export default Card;