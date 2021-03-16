import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {signOut} from '../../Controllers/Redux/authSlice';

function SideBar() {
  const dispatch = useDispatch();
  const {auth} = useSelector(state => state);

  const SignOut = () => {
    dispatch(signOut());
  }

  return (
    <div className="sidebar">
      <Link className="nav-link" to="/home">
        <h1 className="brand">Bug Tracker</h1>
      </Link>
      <ul>
        <li><Link to='/' className='nav-link'/>Dashboard</li>
        <li><Link to='/view-bugs' className='nav-link'/>View Bugs</li>
        {auth.admin && <li><Link to='/create-bug' className='nav-link'/>Create Bug</li>}
      </ul>
      <button className='nav-link logout' onClick={SignOut}>Logout</button>
    </div>
  )
}

export default SideBar;