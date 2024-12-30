import React from 'react'
import './css/Home.css'


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
        <section className='home-latest'>
          <div className="home-latest-box d-f">
            <div className='home-latest-item'>
              <div className="latest-item-info d-f align-center">
                <div className="latest-item-new">New</div>
                <div className="latest-item-details d-f align-center">
                  <div>Business</div>
                  <div> | </div>
                  <div>Jan 18, 2021</div>
                </div>
              </div>
              <h3 className="latest-item-title">23 - How to rapidly test any experience!</h3>
              <p className="latest-item-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consect adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...
              </p>
              <div className="latest-item-listen d-f align-center">
                <button className='btn-clear d-b'><img src="/images/play.png" alt="play" /></button>
                <div className="listen-title">Listen now</div>
              </div>
            </div>
            <div className='home-latest-item'>
              <div className="latest-item-info d-f align-center">
                <div className="latest-item-details d-f align-center">
                  <div>Business</div>
                  <div> | </div>
                  <div>Jan 18, 2021</div>
                </div>
              </div>
              <h3 className="latest-item-title">22 - Everything you need to know about mind mapping creation</h3>
              <p className="latest-item-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...
              </p>
              <div className="latest-item-listen d-f align-center">
                <button className='btn-clear d-b'><img src="/images/play.png" alt="play" /></button>
                <div className="listen-title">Listen now</div>
              </div>
            </div>
            <div className='home-latest-item'>
              <div className="latest-item-info d-f align-center">
                <div className="latest-item-details d-f align-center">
                  <div>Business</div>
                  <div> | </div>
                  <div>Jan 18, 2021</div>
                </div>
              </div>
              <h3 className="latest-item-title">21 - Makemeup Podcast Theme; launch it now !</h3>
              <p className="latest-item-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...
              </p>
              <div className="latest-item-listen d-f align-center">
                <button className='btn-clear d-b'><img src="/images/play.png" alt="play" /></button>
                <div className="listen-title">Listen now</div>
              </div>
            </div>
          </div>
          <div className="home-latest-pagination d-f">
            <button className='pagination-btn'>1</button>
            <button className='pagination-btn'>2</button>
            <button className='pagination-btn'>3</button>
            <button className='pagination-btn'>...</button>
            <button className="pagination-btn pagination-action">
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.0696945 0.960613C0.0250896 0.913679 0 0.84979 0 0.78314C0 0.716491 0.0250896 0.652602 0.0696945 0.605667L0.569198 0.0757478C0.611955 0.0274165 0.67165 0 0.734129 0C0.796607 0 0.856303 0.0274165 0.899059 0.0757478L5.22966 4.67005C5.29596 4.7403 5.33325 4.8356 5.33333 4.93501V5.06499C5.33325 5.1644 5.29596 5.2597 5.22966 5.32995L0.899059 9.92425C0.856303 9.97258 0.796607 10 0.734129 10C0.67165 10 0.611955 9.97258 0.569198 9.92425L0.0696945 9.39433C0.0250896 9.3474 0 9.28351 0 9.21686C0 9.15021 0.0250896 9.08632 0.0696945 9.03939L3.87723 5L0.0696945 0.960613Z" fill="#555555" />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home