// Write your code here
import {Link, withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import './index.css'

const Header = () => (
  <>
    <div className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
            alt="website logo"
            className="logo-img"
          />
        </Link>

        <Popup
          modal
          trigger={
            <button
              type="button"
              className="hamburger-button"
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu />
            </button>
          }
        >
          {close => (
            <>
              <div className="modal-container">
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                  data-testid="closeButton"
                >
                  <IoMdClose size="30" color="#616e7c" />
                </button>

                <ul className="nav-container">
                  <Link to="/home">
                    <li className="nav-item">
                      <AiFillHome size="36" />
                      Home
                    </li>
                  </Link>
                  <Link to="/about">
                    <li className="nav-item">
                      <BsInfoCircleFill size="36" />
                      About
                    </li>
                  </Link>
                </ul>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  </>
)

export default withRouter(Header)
