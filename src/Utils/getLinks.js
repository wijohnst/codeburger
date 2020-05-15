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
          },
          {
          link: 'https://youtu.be/MM2QkFNDhC4',
          description: 'Lesson 1 - Intro to HTML',
          type: 'YouTube'
          }
        ] 
      },
      {
        lessonNumber : 2,
        lessonDate : '05/13/2020',
        codeLinks : [
          {
            link: 'https://codepen.io/Chef_Will/pen/MWaBPrp',
            description: 'HTML Recipe Template',
            type: 'Codepen'
          },
          {
            link: 'https://youtu.be/M_K83dl6e2E',
            description: `Lesson 2 - Let's Code a Recipe`,
            type: 'YouTube'
          }
        ] 
      }
    ]
  }

  return(lessonLinks[target])
}
}