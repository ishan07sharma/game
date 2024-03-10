var btncolor=["green","red","yellow","blue"];
var gamePattern=[];
var userpattern=[];
var level=1;
var isstarted=false;
$(document).on("keydown",function(){
    if(!isstarted){
    //alert("clciked");
        newSequence();
        isstarted=true;
    }

})
function playsound(sound){
    var audio=new Audio("sounds/"+sound+".mp3");
    audio.play();

}
function newSequence(){
    
    $("#level-title").text("Level"+" "+level);
    var random=Math.random();
    random=random*4;
    random=Math.floor(random);
    randomcolor=btncolor[random];
    gamePattern.push(randomcolor);
    // var audio=new Audio("sounds/"+randomcolor+".mp3");
    $("#"+randomcolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    // var audio=new Audio("sounds/"+randomcolor+".mp3");
    // audio.play();
    playsound(randomcolor);
    level++;
    userpattern=[];
}


$(".btn").on("click",function(){
     var userclick = $(this).attr("id");
    //  var audio=new Audio("sounds/"+userclick+".mp3");
    //  audio.play();
    playsound(userclick);
    userpattern.push(userclick);
    $("#"+userclick).addClass("pressed");
    setTimeout(function() {
        $("#"+userclick).removeClass("pressed");
    }, 100);
    checkanswer(userpattern.length-1);
    
});




function checkanswer(n){

    if(gamePattern[n]===userpattern[n]){
        if(userpattern.length===gamePattern.length){
            setTimeout(function () {
                newSequence();
            }, 500);
            //gamePattern=[];

        }
    }
    else{
        playsound("wrong");
        $("#level-title").text("Game over refresh again to start");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        startagain();
        
        
    }
}
function startagain(){
    gamePattern=[];
    level=1;
    isstarted=false;

}









