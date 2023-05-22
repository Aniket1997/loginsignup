import { Box, Divider } from '@mui/material'
import React from 'react'
// import StarIcon from '@mui/icons-material/Star';

import './Filter.css'

const FilterBox = ({name,filter}) => {
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);
    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
      };
  return (
    <Box >
          <p className='heading'> {name}</p>
          <Divider/>
          <div className='filt_cont'>
            {
                filter.map((value)=>(
                    <div className='check_cont'>
                    <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
                    <label for="cb-47">{value}</label>
                  </div>
                ))
              
            }
            {/* <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">500-1000</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">100-2000</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">2000-3000</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">3000-4000</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">4000-5000</label>
            </div> */}

          </div>
        </Box>
  )
}

export default FilterBox
