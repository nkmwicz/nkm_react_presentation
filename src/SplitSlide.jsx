import "./styling.css";
import { v4 as uuidv4 } from 'uuid';
/**
 * The SplitSlide component provides a split slide 
 * with a quarter of the slide on the left providing space 
 * for text, and the other three-quarters of the slide on the 
 * right is available for an image that is automatically sized
 * and centered to the center of the image container. 
 * It can take a title, subTitle, textArray, image
 */
function SplitSlide({
  title,
  subTitle
}) {
  return (
    <div className="cover">
      <div className="header">
        <h1 className="align-self-middle mr-3">
          {title} {subTitle && <br />} {subTitle ? subTitle : null}
        </h1>
      </div>
      <div className="left-box">
        {slide.text.map(a => {
          return (
            <p
              key={uuidv4()}
              style={{ color: a.color }}>
              {a.text}
            </p>
          )
        })}
      </div>
      <div className="right-box">
        {slide.images.map(a => (
          <figure className="img-box" key={uuidv4()}>
            <img src={a.image} />
            <figcaption
              className="text-center">
              {a.description}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
};

export default SplitSlide;