import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionItemsList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  const comedyItemsList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )

  return (
    <div className="mainBg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="mainImg"
      />
      <div className="itemsDiv">
        <h1>Action Movies</h1>
        <MoviesSlider itemsList={actionItemsList} />
        <h1>Comedy Movies</h1>
        <MoviesSlider itemsList={comedyItemsList} />
      </div>
    </div>
  )
}

export default PrimeVideo
