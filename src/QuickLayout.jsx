import Intro from './Intro';
import SplitSlide from './SplitSlide';
import Arrows from './Arrows';
import CenteredSlide from './CenteredSlide';
import SplitSlideEmbed from './SplitSlideEmbed';
import PropTypes from 'prop-types';

/**
 * Layout is a default layout that uses takes a state array that follows the data model
 * discussed for each. It also takes various props
 * that help control the  
 * --ImagesToCache takes an array of images that should be
 * cached so they will be available before
 */
function QuickLayout({
  slide,
  bgColor,
  color
}) {


  return (
    <div className='main'>
      <Arrows />
      {slide.intro && <Intro
        title={slide.title}
        subTitle={slide.subTitle}
        byLine={slide.byLine} />}
      {slide.split && <SplitSlide
        title={slide.title}
        subTitle={slide.subTitle}
        textArray={slide.text}
        imageObject={slide.image} />}
      {slide.centered && slide.text && <CenteredSlide
        title={slide.title}
        subTitle={slide.subTitle}
        textArray={slide.text} />}
      {slide.centered && slide.images && <CenteredSlide
        title={slide.title}
        subTitle={slide.subTitle}
        imagesArray={slide.images} />}
      {slide.splitEmbed && <SplitSlideEmbed
        title={slide.title}
        subTitle={slide.subTitle}
        textArray={slide.text}
        embed={slide.embed} />}
    </div>
  )
};

QuickLayout.propTypes = {
  slide: PropTypes.object.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string
}

export default QuickLayout;