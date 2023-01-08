import "./styling.css";
import { useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * --disableLeftArrow takes a function that sets the conditions
 * under which the left arrow should be disabled.
 * --disableRightArrow takes a function that sets the conditions
 * under which the right arrow should be disabled.
 * --rightArrowClass takes a class name for custom styling.
 * --leftArrowClass takes a class name for custom styling.
 * --handleNextClick takes a function for determining what happens when 
 * the right arrow is clicked.
 * --handlePrevClick takes a function for determining what happens when 
 * the left arrow is clicked.
 * --index accepts a state feature that will determine the index
 * stateArray that will determine the current slide state.
 */

function Arrows({
  disableLeftArrow,
  disableRightArrow,
  rightArrowClass,
  leftArrowClass,
  handleNextClick,
  handlePrevClick,
}) {
  useEffect(() => {
    const click = (e) => {
      if (e.keyCode === 37) {
        e.preventDefault()
        // left arrow
        handlePrevClick
        console.log(e.keyCode)
      }
      if (e.keyCode === 39) {
        e.preventDefault()
        //right arrow
        handleNextClick
        console.log(handleNextClick)
      }
    }
    window.addEventListener('keyup', click, false);
    return function cleanup() {
      window.removeEventListener('keyup', click, false);
    }
  });

  return (
    <>
      {disableRightArrow ? <button
        type='button'
        className={rightArrowClass ? rightArrowClass : "rightArrow"}
        disabled>
        &rarr;
      </button> :
        <button
          type='button'
          className={rightArrowClass ? rightArrowClass : "rightArrow"}
          onClick={handleNextClick}>
          &rarr;
        </button>}
      {disableLeftArrow ? <button
        type='button'
        disabled
        className={leftArrowClass ? leftArrowClass : "leftArrow"}>
        &larr;
      </button> :
        <button
          type='button'
          className={leftArrowClass ? leftArrowClass : "leftArrow"}
          onClick={handlePrevClick}>
          &larr;
        </button>}
    </>
  )
};

Arrows.propTypes = {
  disableLeftArrow: PropTypes.func,
  disableRightArrow: PropTypes.func,
  rightArrowClass: PropTypes.string,
  leftArrowClass: PropTypes.string,
  handleNextClick: PropTypes.func.isRequired,
  handlePrevClick: PropTypes.func.isRequired,
}

export default Arrows;