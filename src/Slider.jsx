import './styling.css';
import SliderUnstyled from '@mui/base/SliderUnstyled';
import PropTypes from 'prop-types';

function Slider({
  sliderClass,
}) {
  <div className={sliderClass}>
    <SliderUnstyled
      className="slider" />
  </div>
};

Slider.propTypes = {
  sliderClass: PropTypes.string
}

export default Slider;