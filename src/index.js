/**
 * Intro creates a basic introductory page,
 * taking in a title, subTitle, and byLine for 
 * metaData on the slideShow.
 */
export function Intro({
  title,
  subTitle,
  byLine
}) {
  return (
    <>
      <div className="bg-intro" />
      <div className="title">
        <div className="title-box">
          <h1 className="text-center">
            {title}
            <br />
            {subTitle}
          </h1>
          <br />
          <h2 className="text-center">
            {byLine}
          </h2>
        </div>
      </div>
    </>
  )
};

export function SplitSlide() {
  return (
    null
  )
};

export function CenteredSlide() {
  return (
    null
  )
};

export function SplitSlideMap() {
  return (
    null
  )
};