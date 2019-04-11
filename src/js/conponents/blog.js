import React from 'react'
import WorkText from './workText'
import BlogInfo from './blogInfo'
import BlogSlider from './blogSLider'

class Blog extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="blog__animation">
          <WorkText title="Service" about="What we do"/>
          <div className="blog__discription">
            <p className="log__discription__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque cumque fuga labore laboriosam perferendis placeat qui reprehenderit repudiandae sint.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque cumque fuga labore laboriosam perferendis placeat qui reprehenderit repudiandae sint.</p>
          </div>
          <BlogInfo/>
          <BlogSlider/>
        </div>
      </div>
    )
  }
}

export default Blog