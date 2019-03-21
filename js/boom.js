//danger
function wah(){
  var i=0;
  while(i<12){
  function timer(){
  setTimeout(function(){
  console.log(i++)
  timer()
  },500)
  }
  timer();
  }
}

//dabger
$(document).ready(function(){
  $("#bionic").click(function(){

    var startCount=4;
  function beginLoop() {
    setTimeout(function(){
      startCount--;
      if(startCount>=0){
        $(".counter").text(startCount);
      }

      if(startCount<5){
        if(startCount==0){
          $(".love").hide();
          $(".gif").show();

          wah()
        }
        beginLoop();
      }

    }, 800)

  }
  beginLoop();


  })


})
