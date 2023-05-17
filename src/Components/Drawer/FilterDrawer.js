import React from 'react'
import { Box, Divider, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const FilterDrawer = () => {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };
  return (
    <>
      <style>
        {
          `
        
  .checkbox-wrapper-47 input[type="checkbox"] {
    display: none;
    visibility: hidden;
  }

  .checkbox-wrapper-47 label {
    position: relative;
    padding-left: 2em;
    padding-right: 1em;
    line-height: 2;
    cursor: pointer;
    display: inline-flex;
  }

  .checkbox-wrapper-47 label:before {
    box-sizing: border-box;
    content: " ";
    position: absolute;
    top: 0.3em;
    left: 0;
    display: block;
    width: 1.4em;
    height: 1.4em;
    border: 2px solid #9098A9;
    border-radius: 6px;
    z-index: -1;
  }

  .checkbox-wrapper-47 input[type=checkbox]:checked + label {
    padding-left: 1em;
    color: #0f5229;
  }
  .checkbox-wrapper-47 input[type=checkbox]:checked + label:before {
    top: 0;
    width: 100%;
    height: 2em;
    background: #b7e6c9;
    border-color: #2cbc63;
  }

  .checkbox-wrapper-47 label,
  .checkbox-wrapper-47 label::before {
    transition: 0.25s all ease;
  }

        `
        }

      </style>
      <div>
        <p style={{ margin: '5px', fontWeight: 'bolder' }}>Filter</p>
        <Divider />
        <Grid container>
          {/* <p style={{margin: '5px'}}>Customer Ratings</p> */}
          <Grid item xs={12}>

            <p style={{ margin: '5px', fontWeight: 'bold' }}>Customer Ratings</p>
            <Divider />
            <div class="checkbox-wrapper-47">
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">4 <StarIcon /> and above </label>
            </div>

          </Grid>
       
          <Grid item xs={12}>
            <div class="checkbox-wrapper-47">
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">5 <StarIcon /> and above</label>
            </div>
          </Grid>
        </Grid>

        <Box>
          <p style={{ margin: '5px', fontWeight: 'bold' }}> PRICE</p>
          <Divider />
          <div style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
            <div>
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
            </div>

          </div>
        </Box>

        <Box>
          <p style={{ margin: '5px', fontWeight: 'bold' }}> Ideal for</p>
          <Divider />
          <div style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">Men</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">Women</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">Boy</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">Girl</label>
            </div>

          </div>
        </Box>

        <Box>
          <p style={{ margin: '5px', fontWeight: 'bold' }}> Colour</p>
          <div style={{ display: 'flex' }}>
            <div style={{ margin: '0px 10px', borderRadius: '50px', backgroundColor: 'red', height: '25px', width: '25px' }}></div>
            <div style={{ margin: '0px 10px', borderRadius: '50px', backgroundColor: 'blue', height: '25px', width: '25px' }}></div>
            <div style={{ margin: '0px 10px', borderRadius: '50px', backgroundColor: 'yellow', height: '25px', width: '25px' }}></div>
            <div style={{ margin: '0px 10px', borderRadius: '50px', backgroundColor: 'black', height: '25px', width: '25px' }}></div>

          </div>
        </Box>
        <Box>
          <p style={{ margin: '5px', fontWeight: 'bold' }}> Categories</p>
          <Divider />
          <div style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">Boat Shoes</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">Boots</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">Canvas shoes</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">Dancing Shoes</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">Outdoors</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">Party Wear</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">Sneakers</label>
            </div>

          </div>
        </Box>
        <Box>
          <p style={{ margin: '5px', fontWeight: 'bold' }}> Brand</p>
          <Divider />
          <div style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">PUMA</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">FILA</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">DUCATI</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">WRONG</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">PROVOGUE</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">BRUTON</label>
            </div>

          </div>
        </Box>
        <Box>
          <p style={{ margin: '5px', fontWeight: 'bold' }}> Size</p>
          <Divider />
          <div style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">8</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">7</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">6</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">5</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">4</label>
            </div>

          </div>
        </Box>
        <Box>
          <p style={{ margin: '5px', fontWeight: 'bold' }}> Discount</p>
          <Divider />
          <div style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">30% or more</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">40% or more</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">50% or more</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">60% or more</label>
            </div>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">70% or more</label>
            </div>

          </div>
        </Box>
        <Box>
          <p style={{ margin: '5px', fontWeight: 'bold' }}> Availability</p>
          <Divider />
          <div style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
            <div>
              <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat} />
              <label for="cb-47">Include Out of Stock</label>
            </div>
          </div>
        </Box>
      </div>

    </>
  )
}

export default FilterDrawer

// Requirements
// 1> Price Range
// 2> Rating
// 3> colour
// 4> Avaliable on address
// 5> size
// 5> Ideal for (men,women,boy,girl)
// 6> In stock
// 7> brand
// 8> offers
// 9> type
// 10>theme
// 11>catagory