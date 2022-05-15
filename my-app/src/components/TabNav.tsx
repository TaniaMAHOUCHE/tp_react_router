import React from 'react';
import {Link, useLocation} from 'react-router-dom'

const  TabNav=() =>{

  const location = useLocation()

  return <div className='tab-nav'>
          <Link to="/tabs/tab1" className={location.pathname==='/tabs/tab1'?'tab_active':''}>Page 1</Link>
         <Link to="/tabs/tab2" className={location.pathname==='/tabs/tab2'?'tab_active':''}>Page 2</Link>
  </div>;
}

export default TabNav;
