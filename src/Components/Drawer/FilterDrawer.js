import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Grid } from '@mui/material';

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
            <Grid container>
                <Grid item xs={6}>
                    <div class="checkbox-wrapper-47">
                        <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat}/>
                        <label for="cb-47">0-500</label>
                    </div>

                </Grid>
                <Grid item xs={6}>
                <div class="checkbox-wrapper-47">
                        <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat}/>
                        <label for="cb-47">500-1000</label>
                    </div>
                </Grid>
                <Grid item xs={6}>
                <div class="checkbox-wrapper-47">
                        <input type="checkbox" name="cb" id="cb-47" value={formats} onChange={handleFormat}/>
                        <label for="cb-47">1000-5000</label>
                    </div>
                </Grid>
            </Grid>
            </div>
           
        </>
    )
}

export default FilterDrawer