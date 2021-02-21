import { IconButton, Toolbar, Collapse } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SortIcon from '@material-ui/icons/Sort';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Team from './Components/Team.js';
import './Home.css';

function Home() {

    const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  
return (
    <div className="home">
        <div className="navBar" elevation={0}>
            <Toolbar className="navBar__wrapper">
                <h1 className="navBar__tittle">Vitreous</h1>
                <IconButton>
                    <SortIcon className="icon" />
                </IconButton>
            </Toolbar>
        </div>
            
        <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
        >
          <div className="title">
              <h1>Vitreous<br/></h1>
                <IconButton>
                <ArrowDownwardIcon style={{color: 'white', fontSize: '3rem'}}/>
                </IconButton>
          </div>
        </Collapse>
    </div>
    )
}

export default Home
