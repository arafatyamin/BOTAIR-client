import React, { useEffect, useState } from 'react';

const Hero = ({allAirlines, setNewData, newData}) => {
    const [newTag, setNewTag] = useState('');
    useEffect(() => {
        if (newTag.length === 0) {
            const mappedData = allAirlines.map((data) => {
              console.log('mapping data', data);
              return data;
            });
            setNewData(mappedData);
            return;
          }
        else{
            const filteredData = allAirlines.filter(item => item.alliance === newTag);
        setNewData(filteredData);
        }
      }, [allAirlines, newTag, setNewData]);

      console.log(newTag)
      console.log('filtered data', newData );
    
    return (
        <div className=' flex flex-col gap-[30px]'>
            <h1 className="text-3xl font-bold">
                Airlines
            </h1>
            <p>Filter by Alliance</p>
            <fieldset className='flex gap-4'>
                
                <div className="flex items-center mb-4 form-radio ">
                    <input  onClick={()=>setNewTag("")} id="reset" type="radio" name="countries"  className="h-4 w-4 border-gray-300" />
                    <label htmlFor="reset" className="text-sm font-medium text-gray-900 ml-2 block">
                        All
                    </label>
                </div>
                <div className="flex items-center mb-4 form-radio ">
                    <input  onClick={()=>setNewTag("OW")} id="country-option-1" type="radio" name="countries"  className="h-4 w-4 border-gray-300" />
                    <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                        One World
                    </label>
                </div>
                <div className="flex items-center mb-4">
                    <input   onClick={()=>setNewTag("ST")} id="country-option-2" type="radio" name="countries"  className="h-4 w-4 border-gray-300" />
                    <label htmlFor="country-option-2" className="text-sm font-medium text-gray-900 ml-2 block">
                        Sky Team
                    </label>
                </div>
                <div className="flex items-center mb-4">
                    <input  onClick={()=>setNewTag("SA")} id="country-option-3" type="radio" name="countries" className="h-4 w-4 border-gray-300"  />
                    <label htmlFor="country-option-3" className="text-sm font-medium text-gray-900 ml-2 block">
                        Star Allience
                    </label>
                </div>
            </fieldset>
        </div>
    );
};

export default Hero;