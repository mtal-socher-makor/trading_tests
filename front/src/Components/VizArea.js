import React, { useState, useEffect, useRef } from 'react'
import {useStyles }from "../Styles/mainStyles";
import data from "../model_data.json";
import { Grid } from '@material-ui/core'
import BarChart from './d3/BarChart';
import FilterBar from './FilterBar';




function VizArea() {

    const classes = useStyles();
    console.log(data.data)
    
    const [filteredData, setFilteredData] = useState()


  return (
    <Grid container className={classes.vizContainer}>
        <FilterBar data={data.data} />
        <BarChart data={data.data}/>
    </Grid>
  )
}

export default VizArea