var counter= document.querySelectorAll(".drum").length;
for(var i=0;i<counter;i++)
{
    //for button press
    document.querySelectorAll(".drum")[i].addEventListener("click", function ()
    {
        var content=this.innerHTML;
        sounds(content);
    });
    //for key press
    document.addEventListener("keypress",function(event)
    {
        sounds(event.key);
    }
    );
    function sounds(key)
    {
    switch(key)
        {
            case "W":{
                var aud= new Audio("./tom-1.mp3");
        aud.play();
                break;
            }
            case "A":{
                var aud= new Audio("./tom-2.mp3");
        aud.play();
                break;
            }
            case "S":{
                var aud= new Audio("./tom-3.mp3");
        aud.play();
                break;
            }
            case "D":{
                var aud= new Audio("./tom-4.mp3");
        aud.play();
                break;
            }
            case "J":{
                var aud= new Audio("./snare.mp3");
        aud.play();
                break;
            }
            case "K":{
                var aud= new Audio("./crash.mp3");
        aud.play();
                break;
            }
            case "L":{
                var aud= new Audio("./kick-bass.mp3");
        aud.play();
                break;
            }
            case "w":{
                var aud= new Audio("./tom-1.mp3");
        aud.play();
                break;
            }
            case "a":{
                var aud= new Audio("./tom-2.mp3");
        aud.play();
                break;
            }
            case "s":{
                var aud= new Audio("./tom-3.mp3");
        aud.play();
                break;
            }
            case "d":{
                var aud= new Audio("./tom-4.mp3");
        aud.play();
                break;
            }
            case "j":{
                var aud= new Audio("./snare.mp3");
        aud.play();
                break;
            }
            case "k":{
                var aud= new Audio("./crash.mp3");
        aud.play();
                break;
            }
            case "l":{
                var aud= new Audio("./kick-bass.mp3");
        aud.play();
                break;
            }
        }
    }

}
