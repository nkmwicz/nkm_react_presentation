/**
 * --disableLeftArrow takes a function that sets the conditions
 * under which the left arrow should be disabled.
 * --disableRightArrow takes a function that sets the conditions
 * under which the right arrow should be disabled.
 * --
 */

function Arrows({
  disableLeftArrow,
  disableRightArrow,
}) {
  return (
    <>
      {disableRightArrow ? <button
        type='button'
        className="rightArrow"
        disabled
        onClick={handleNextClick}>
        &rarr;
      </button> :
        <button
          type='button'
          className="rightArrow"
          onClick={handleNextClick}>
          &rarr;
        </button>}
      {disableLeftArrow ? <button
        type='button'
        disabled
        className="leftArrow"
        onClick={handlePrevClick}>
        &larr;
      </button> :
        <button
          type='button'
          className="leftArrow"
          onClick={handlePrevClick}>
          &larr;
        </button>}
    </>
  )
};

export default Arrows;