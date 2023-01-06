import { urlObjectKeys } from "next/dist/shared/lib/utils"

/**
 * Intro creates a basic introductory page,
 * taking in a title, subTitle, and byLine for 
 * metaData on the slideShow.
 */
export function Intro({
  title,
  subTitle,
  byLine,
  bgImage,
  bgColor,
  opacity,
}) {
  return (
    <>
      <div style={bgImage ? {
        width: "100%",
        height: "100%",
        backgroundImage: url(`${bgImage}`),
        backgroundRepeat: none,
        backgroundSize: cover,
        opacity: opacity
      } :
        {
          width: "100%",
          height: "100%",
          backgroundColor: bgColor,
          backgroundRepeat: none,
          backgroundSize: cover,
          opacity: opacity
        }} />
      <div style={{
        position: absolute,
        display: flex,
        top: "10%",
        width: "80%",
        height: "80%",
        left: "10%",
      }}>
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