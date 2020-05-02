
export const getPath = shape =>{

  const paths = { 
                  triangle : 'polygon(50% 0%, 0% 100%, 100% 100%)' , 
                  circle : 'circle(50% at 50% 50%)', 
                  square : 'none',
                  rightArrow : 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)',
                  leftArrow : 'polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)',
                  rightPoint : 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)',
                  leftPoint : 'polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%)'
                };
                
 return(paths[`${shape}`]);
  
}

export const getColor = color => {

  const colors = {
                    red : '#BC2423',
                    green: '#23BC6A',
                    yellow : '#FCEE21',
                    grey : '#534741',
                    blue : '#2B44FF'
                };

  return(colors[`${color}`]);
}