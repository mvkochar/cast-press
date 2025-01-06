import React from 'react'
import './css/Home.css'
import { Latest, TeamMember } from '../components'


const Home = () => {
  return (
    <>
      <div className="container home-container">
        <main className='home-main'>
          <div className='home-main-img'><img src="/images/home-main.png" alt="home-main" /></div>
          <h1 className="home-main-title">How to rapidly test any experience!</h1>
          <a href="" className="home-main-link">Episode page</a>
          <div className="home-main-subscribe">
            <h3 className="subscribe-title">Listen on</h3>
            <div className="sibscribe-links d-f">
              <a href=""><img src="/images/subscribe1.png" alt="subscribe1" /></a>
              <a href=""><img src="/images/subscribe2.png" alt="subscribe2" /></a>
              <a href=""><img src="/images/subscribe3.png" alt="subscribe3" /></a>
            </div>
          </div>
        </main>
        <Latest/>
        <section className="home-team">
          <h2 className="home-bl-title">Team</h2>
          <div className="home-team-box d-f">
            <TeamMember
              image='/images/team1.png'
              position='Position'
              name='Aida Cave'
            />
            <TeamMember
              image='/images/team2.png'
              position='Position'
              name='Nick Carleton'
            />
          </div>
        </section>
        <section className='home-posts'>
          <h2 className="home-bl-title">Latest Posts</h2>
          <div className="home-posts-box d-f">
            <div className="home-posts-item d-f">
              <div><img src="/images/home-post1.png" alt="home-post1" /></div>
              <div>
                <h3 className="posts-item-title">How to create your own podcast cover art?</h3>
                <p className="posts-item-date">Dec 4, 2019</p>
                <a href="" className="posts-item-more">Read More</a>
              </div>
            </div>
            <div className="home-posts-item d-f">
              <div><img src="/images/home-post2.png" alt="home-post2" /></div>
              <div>
                <h3 className="posts-item-title">How to create your own podcast cover art?</h3>
                <p className="posts-item-date">Dec 4, 2019</p>
                <a href="" className="posts-item-more">Read More</a>
              </div>
            </div>
          </div>
          <a href="" className="home-posts-view">View Blog</a>
        </section>
      </div>
    </>
  )
}

export default Home