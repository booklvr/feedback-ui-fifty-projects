import React, { Fragment, useState } from 'react'

const Rating = ({ rating, imageSrc, setFeedback, feedback }) => {
  return (
    <div
      className={feedback === rating ? 'rating active' : 'rating'}
      onClick={() => setFeedback(rating)}
    >
      <img src={imageSrc} alt={rating} />
      <small>{rating.charAt(0).toUpperCase() + rating.slice(1)}</small>
    </div>
  )
}

const FeedbackUI = () => {
  const [feedback, setFeedback] = useState('')
  const [thanksCard, setThanksCard] = useState(false)

  return (
    <div id='panel' className='panel-container'>
      {thanksCard ? (
        <Fragment>
          <i className='fas fa-heart'></i>
          <strong>Thank You!</strong>
          <br />
          <strong>Feedback: {feedback}</strong>
          <p>We'll use your feedback to improve our customer support</p>
        </Fragment>
      ) : (
        <Fragment>
          <strong>
            How satisfied are you with our <br /> customer support performance?
          </strong>

          <div className='ratings-container'>
            <Rating
              feedback={feedback}
              setFeedback={setFeedback}
              imageSrc={'https://image.flaticon.com/icons/svg/187/187150.svg'}
              rating={'unhappy'}
            />
            <Rating
              feedback={feedback}
              setFeedback={setFeedback}
              imageSrc={'https://image.flaticon.com/icons/svg/187/187136.svg'}
              rating={'neutral'}
            />
            <Rating
              feedback={feedback}
              setFeedback={setFeedback}
              imageSrc={'https://image.flaticon.com/icons/svg/187/187133.svg'}
              rating={'happy'}
            />
          </div>
          <button
            className='btn'
            id='send'
            onClick={() => {
              if (feedback) {
                setThanksCard(true)
              }
            }}
          >
            Send Review
          </button>
        </Fragment>
      )}
    </div>
  )
}

export default FeedbackUI
