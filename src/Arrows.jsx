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
 */

function Arrows({
  disableLeftArrow,
  disableRightArrow,
  rightArrowClass,
  leftArrowClass,
  handleNextClick,
  handlePrevClick
}) {
  return (
    <>
      {disableRightArrow ? <button
        type='button'
        className={rightArrowClass ? rightArrowClass : "rightArrow"}
        disabled
        onClick={handleNextClick}>
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
        className={leftArrowClass ? leftArrowClass : "leftArrow"}
        onClick={handlePrevClick}>
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

export default Arrows;