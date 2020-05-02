
export const getPath = shape =>{

  const paths = { 
                  triangle : 'polygon(50% 0%, 0% 100%, 100% 100%)' , 
                  circle : 'circle(50% at 50% 50%)', 
                  square : 'none'};
                
 return(paths[`${shape}`]);
  
}