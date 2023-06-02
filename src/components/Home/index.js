// Write your code here

import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png "
        alt="about"
        className="small-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="about"
        className="large-img"
      />
    </div>
  </>
)

export default Home
