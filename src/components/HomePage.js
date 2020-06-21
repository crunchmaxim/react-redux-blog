import React from 'react'
import Posts from './Posts'
import Profile from './Profile'

const HomePage = () => {
  return (
      <div class="row">
        <div class="col-sm-3">
          <Profile/>
        </div>
        <div class="col-sm-9">
          <Posts />
        </div>
      </div>
  )
};

export default HomePage;
