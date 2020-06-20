import React from 'react'
import Posts from './Posts'

const HomePage = () => {
  return (
      <div class="row">
        <div class="col-sm-2">
          Profile
        </div>
        <div class="col-sm-10">
          <Posts />
        </div>
      </div>
  )
};

export default HomePage;
