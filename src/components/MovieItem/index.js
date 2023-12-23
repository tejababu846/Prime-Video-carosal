import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  console.log(thumbnailUrl)

  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />
        }
        className="popup_content"
      >
        {close => (
          <div className="popupDiv">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              aria-label="Close"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="moviePlayer">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
