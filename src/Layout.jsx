import Intro from './Intro';
import SplitSlide from './SplitSlide';
import Arrows from './Arrows';
import CenteredSlide from './CenteredSlide';
import SplitSlideChild from './SplitSlideChild';

/**
 * Layout is a default layout that uses takes a state array that follows the data model
 * discussed for each. It also takes various props
 * that help control the  
 * --ImagesToCache takes an array of images that should be
 * cached so they will be available before
 */
function Layout({
  slideArray,
  currentSlide,
  index,
  setIndex,
  ImagesToCache,
  setIsLoading,
  isLoading,
}) {


  return (
    <>
      <Arrows />
      { }
    </>
  )
};

export default Layout;