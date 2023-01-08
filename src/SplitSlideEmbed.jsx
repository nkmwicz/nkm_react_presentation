import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

/**
 * SplitSlideChild operates similarly to splitSlide, but instead
 * of taking an image for the right box, it takes a child for
 * creating a customized slide. For instance, it could take in a 
 * leaflet.js map. For this reason, the rightChildBox takes in a 
 * ref as well to help sizing any children in the 
 * Props:
 * -- headerClass: accepts a class for customized css for the header. 
 * -- h1Class: accepts a class for customized css for the h1 text.
 * -- title: accepts a string, the title for the slide.
 * -- subTitle: accepts a string, the subtitle for the slide.
 * -- leftBoxClass: accepts a class for customized styling 
 * of the leftBox.
 * -- textArray: accepts an array of objects in the following datamodel
 * ([{text: 'String', color: 'String'}, {...}]) 
 * -- ref,
  rightChildBoxClass
 */

function SplitSlideEmbed({
  headerClass,
  h1Class,
  title,
  subTitle,
  leftBoxClass,
  textArray,
  rightChildBoxClass,
  embedURL,
  embedTitle,
}) {
  return (
    <div>
      <div className={`${headerClass} header`}>
        <h1 className={h1Class ? h1Class : null}>
          {title} {subTitle ? <><br /> {subTitle}</> : null}
        </h1>
      </div>
      <div className={leftBoxClass ? leftBoxClass : "left-box"}>
        {typeof textArray !== 'object' ?
          console.error("textArray prop must be included, and it should have the following data format: [{text: 'string', color: 'string'}]") :
          textArray.map(a => {
            return (
              <p
                key={uuidv4()}
                style={{ color: a.color }}>
                {a.text}
              </p>
            )
          })}
      </div>
      <div
        className={rightChildBoxClass ? `${rightChildBoxClass} right-child-box` : "right-child-box"}>
        <div class="ratio ratio-16x9">
          <iframe src={embedURL} title={embedTitle} allowFullScreen />
        </div>
      </div>
    </div>
  )
};

SplitSlideEmbed.propTypes = {
  headerClass: PropTypes.string,
  h1Class: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  leftBoxClass: PropTypes.string,
  textArray: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    color: PropTypes.string
  })),
  embedTitle: PropTypes.string,
  embedURL: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]),
  rightChildBoxClass: PropTypes.string,
};

export default SplitSlideEmbed;