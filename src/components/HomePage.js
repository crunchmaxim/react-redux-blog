import React from 'react'
import Posts from './Posts'
import Profile from './Profile'

const HomePage = () => {
  return (
      <div className="row">
        <div className="col-sm-4 col-md-3">
          <Profile/>
        </div>
        <div className="col-sm-8 col-md-9">
          <Posts />
        </div>
      </div>
  )
};

export default HomePage;
