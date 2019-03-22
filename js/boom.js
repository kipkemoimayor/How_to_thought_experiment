//danger
function wah(){
  var i=0;
  while(i<12){
  function timer(){
  setTimeout(function(){
  console.log(i++)
  },500)
  }
  timer();
  }
}
function openPages() {
  var win=window.open("https://kipkemoimayor.github.io/How_to_thought_experiment/");
  if(win){
    win.focus();
  }else {
    alert("please allow popups")
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
        if(startCount==1){

          $(".love").hide();
          $(".gif").show();
        }
        if(startCount==0){
          wah()
           openPages();
        }
        beginLoop();
      }

    }, 800)

  }
  beginLoop();


  })


})
