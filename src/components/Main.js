import PropTypes from 'prop-types'
import React from 'react'
import bwprofile from '../images/bwprofile.jpg'
import pic02 from '../images/pic02.jpg'
import pic30 from '../images/pic30.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={bwprofile} alt="" />
          </span>
          <p>
            My name is Patrick Murray. I am a constantly curious human being that loves to create ways to make life better.
            I have a super gorgeous wife and 3, soon to be 4, tiny humans who call me dad. I am a culture enthusiast who loves connecting with people 
            and creating safe places for people to process this journey called life.  
            By the way, check out my <a href="#work"> work</a>.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Within the past 2 years I have developed a love for all things programming. 
            In that time, I have helped integrate features into an industrial level software for a local business, helped create a student database for a non-profit in a nearby city, and taught 2D game development, through a non-profit, to local teenagers. 
          </p>
          <p>
            As a full stack developer, a philanthropist, a husband, a father, a culture enthusiast, and a strategist, I can help with a variety of tasks.
            My background is the people business, which allows for me to be effective anywhere there are people involved.  
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic30} alt="" />
          </span>
          <p>
          The past 8+ years I have been traveling the world speaking and helping communities through encouragement and humanitarian efforts.
          I love encouraging people and helping them be most productive by strategizing their life from the inside out.  
          One of my strengths is helping businesses make an impact in their local communities and become more profitable, by noticing things in their work culture that will better connect employees to the work that they do. 
          I also have a passion and gift to aid non-profits and organizations to become more efficient and effective when resources are scarce for hiring help. 
          </p>
          {close}
        </article>
        

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            {/* <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li> */}
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
