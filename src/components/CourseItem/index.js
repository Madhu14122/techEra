import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import {Nav, Logo, FailureContainer, FailImg, FailureHeading, FailureParagraph, FailureButton, ListContainer} from './styledComponents'

import Item from '../Item'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  fail: 'FAILURE',
}

class CourseItem extends Component {
  state = {apiStatus: apiStatusConstants.initial, courseList: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const url = ' https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const formatData = data.courses.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))
      this.setState({courseList: formatData, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.fail})
    }
  }

  loadingView = () => (
    <div data-testid="loader" className="">
      <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
    </div>
  )

  successView = () => {
    const {courseList} = this.state
    return (
      <div className="success-container">
        <h1 className="header">Courses</h1>
        <ListContainer>
          {courseList.map(item => (
            <Item details={item} key={item.id} />
          ))}
        </ListContainer>
      </div>
    )
  }

  failView = () => (
    <div>
      <Link to="/" className="link-el">
        <Nav>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            alt="website logo"
          />
        </Nav>
      </Link>
      <FailureContainer>
        <FailImg
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
        />
        <FailureHeading>Oops! Something Went wRONG</FailureHeading>
        <FailureParagraph>We cannot seem to find the page you are looking for</FailureParagraph>
        <FailureButton type="button" onClick={this.getData}>
          Retry
        </FailureButton>
      </FailureContainer>
    </div>
  )

  finalRender = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.loadingView()
      case apiStatusConstants.success:
        return this.successView()
      case apiStatusConstants.fail:
        return this.failView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Link to="/" className="link-el">
          <Nav>
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
              alt="website logo"
            />
          </Nav>
        </Link>
        {this.finalRender()}
      </div>
    )
  }
}

export default CourseItem