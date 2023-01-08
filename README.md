# nkm_react_presentation
This repository provides simple react components for creating a basic slide show. The slide show does not operate like a normal website. Instead, it is designed to operate with state that is an array that can be iterated through to create the slideshow. There are four primary components: an Introductory slide, a split slide (a left box for text and a right box for an image), a centered slice (takes an array of images), and a split slide with a child (in which a map or some other website oriented object can be rendered). 
#SlideState Example
[
  {
  split: true,
  text: [{text: 'split refers to the type of slide.',
          color: 'black'},
         {text: 'something else here',
         color: 'lightgrey'}],
  image: {image: 'image_goes_here',
          description: 'description here'}
  },
  {
  centered: true,
  images: [{
            image: 'image_goes_here',
            description: 'description for the image'
            },
           {
           image: 'another_image',
           description: 'another description'
           }]
  },
  {
   centered: true,
   text: [{
        text: ['First level', [{text: 'Second Level list item', color: 'black'}],
        color: 'black'
   }],
   [{
        text: ['First level', [{text: 'Second Level list item', color: 'grey'}],
        color: 'grey'
   }]
  }
]

Use the arrows component to set a function that iterates through the state array to cycle the content.

Iterating through the SlideState is easiest with a state variable and a selector. This can be done with a selector function in recoil or with a state function in react. Use the index to filter the SlideState: currentSlide = slideState.filter(a => a[index]). In this way, the state of the slide show can be updated by updating index, which is automatically done in the arrows function.  

This is a simple solution for integrating web content that does not work well in PowerPoint with the slide show. The components also handle all the positioning of content for the user.
