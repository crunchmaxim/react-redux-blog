import React from 'react'
import Posts from './Posts'
import Profile from './Profile'

const HomePage = () => {
  return (
      <div class="row">
        <div class="col-sm-4 col-md-3">
          <Profile/>
        </div>
        <div class="col-sm-8 col-md-9">
          <Posts />
        </div>
      </div>
  )
};

export default HomePage;
