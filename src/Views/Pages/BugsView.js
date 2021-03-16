import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBugs} from '../../Controllers/Redux/bugSlice';
import BugCard from '../BugCard/BugCard';

function BugsView() {
  const dispatch = useDispatch();
  const {bugs} = useSelector(state => state);

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length < 1])

  return (
    <div className="page-container">
      {bugs.map((bug, key) => {
        return <BugCard
          key={key}
          bug={bug}
        />
      })}
    </div>
  )
}

export default BugsView;