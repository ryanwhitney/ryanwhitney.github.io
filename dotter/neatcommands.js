function moreRainbow(){
  function moreRainbow(){
     for(i=0;i<16;i++){
      let color = "hsl("+ i*20 +",65%,70%)";
      vertical(i, color);
    };
    setTimeout(function(){
      for(i=0;i<16;i++){
       let color = "hsl("+ i*20 +",65%,70%)";
       horizontal(i, color);
      }
      setTimeout(function(){
          moreRainbow();
        },500);
    },500);
  }
  moreRainbow();
};

const moreRainbowCode = "
function moreRainbow(){
    for(i=0;i<16;i++){
    let color = "hsl("+ i*20 +",65%,70%)";
    vertical(i, color);
  };
  setTimeout(function(){
    for(i=0;i<16;i++){
      let color = "hsl("+ i*20 +",65%,70%)";
      horizontal(i, color);
    }
    setTimeout(function(){
      moreRainbow();
    },500);
  },500);
}
moreRainbow();";