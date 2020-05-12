export const getLinks = (category, target) => {

  if(category === 'generalLinks'){
    
    const generalLinks = {
      HTML : [
        {
          link : 'https://www.w3schools.com/html/html_basic.asp', 
          description : 'W3 School - HTML Basics', 
          type: "webpage"
        },
          {
            link : 'https://developer.mozilla.org/en-US/docs/Web/HTML', 
            description : 'MDN Reference : HTML',
            type : 'webpage'
        },
        {
          link : 'https://www.youtube.com/watch?v=UB1O30fR-EE',
          description : 'Traversy Media - HTML Crash Course for Beginners',
          type : 'video'
        }
      ]
    }
    return(generalLinks[target])
  }

else if(category === 'lessonLinks'){

  const lessonLinks = {
    HTML : [
      {
        lessonNumber : 1,
        lessonDate : '05/11/2020',
        codeLinks : [
          {
            link: 'https://codepen.io/Chef_Will/pen/zYvPjGJ',
            description: 'HelloWorld.html',
            type: 'Codepen'
          },
          {
            link: 'https://codepen.io/Chef_Will/pen/WNQXJoE',
            description: 'HTML Menu',
            type: 'Codepen'
          }
        ] 
      }
    ]
  }

  return(lessonLinks[target])
}
}