import React from 'react';

const Filter = ({allianceFilters, handleFilterChange}) => {


  return (
    <>
      <div className='filter'>
        <div className='filter-header'>
          Filter by Alliances
        </div>
        <div className='filter-checkboxes'>
          <div className='checkbox-container'>
            <input
              onChange={handleFilterChange}
              type="checkbox"
              value="OW"
              defaultChecked={false}
            />
            <label htmlFor="One World">Oneworld</label>
          </div>
          <div className='checkbox-container'>
            <input
              onChange={handleFilterChange}
              type="checkbox"
              value='ST'
              defaultChecked={false}
            />
            <label htmlFor="Sky Team">Sky Team</label>
          </div>
          <div className='checkbox-container'>
            <input
              onChange={handleFilterChange}
              type="checkbox"
              value="SA"
              defaultChecked={false}
            />
            <label htmlFor="Star Alliance">Star Alliance</label>
          </div>
        </div>

      </div>
    </>
  );
}

export default Filter;
