import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import {Nel, Logo, View, Vi, Vd, FailCon, FailIm, Fh, Fp, Fb, Vh} from './styledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  fail: 'FAILURE',
}

class CourseItemDetails extends Component {
  state = {course: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getItem()
  }

  getItem = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'Get',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updateCourse = {
        id: data.course_details.id,
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
      }
      this.setState({course: updateCourse, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.fail})
    }
  }

  successView = () => {
    const {course} = this.state
    return (
      <div className="container">
        <View>
          <Vi src={course.imageUrl} alt={course.name} />
          <div>
            <Vh>{course.name}</Vh>
            <Vd>{course.description}</Vd>
          </div>
        </View>
      </div>
    )
  }

  loadingView = () => (
    <div data-testid="loader" className="loader-con">
      <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
    </div>
  )

  failView = () => (
    <div>
      <Link to="/" className="link-el">
        <Nel>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            alt="website logo"
          />
        </Nel>
      </Link>
      <FailCon>
        <FailIm
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
        />
        <Fh>Oops! Something Went wRONG</Fh>
        <Fp>We cannot seem to find the page you are looking for</Fp>
        <Fb type="button" onClick={this.getItem}>
          Retry
        </Fb>
      </FailCon>
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
          <Nel>
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
              alt="website logo"
            />
          </Nel>
        </Link>
        <div>{this.finalRender()}</div>
      </div>
    )
  }
}

export default CourseItemDetails
