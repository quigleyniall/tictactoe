$(document).ready(function(){
    var aibuzzer=$("#aibuzzer")[0];
    var playerbuzzer=$("#playerbuzzer")[0];
    var score=0;
    var arr=[];
    var ai=[];
    var player=[];
    var avail=["#topleft", "#topmiddle", "#topright", "#right", "#middle", "#left", "#bottomleft", "#bottomright", "#bottommiddle"];
    var z=(function(){
        if(arr.length>=avail.length){
            alert("Stale mate");

            $("#topleft").html("");
            $("#topmiddle").html("");
            $("#topright").html("");
            $("#right").html(""); $("#middle").html(""); $("#left").html(""); $("#bottomleft").html(""); $("#bottomright").html(""); $("#bottommiddle").html("");
            arr=[];
            ai=[];
            player=[];
        }
    });
    var y=(function(){
        if((player.includes("#topleft")===true) && (player.includes("#topmiddle")===true) && (player.includes("#topright")===true)||(player.includes("#left")===true) && (player.includes("#middle")===true) && (player.includes("#right")===true)||
            (player.includes("#bottomleft")===true) && (player.includes("#bottommiddle")===true) && (player.includes("#bottomright")===true)||
            (player.includes("#topleft")===true) && (player.includes("#left")===true) && (player.includes("#bottomleft")===true)||
            (player.includes("#topright")===true) && (player.includes("#right")===true) && (player.includes("#bottomright")===true)||
            (player.includes("#topmiddle")===true) && (player.includes("#middle")===true) && (player.includes("#bottommiddle")===true)||
            (player.includes("#topleft")===true) && (player.includes("#middle")===true) && (player.includes("#bottomright")===true)||
            (player.includes("#topright")===true) && (player.includes("#middle")===true) && (player.includes("#bottomleft")===true)){
            alert("Player Wins");
            score+=10;
            playerbuzzer.play();
            $("#score").html("Score:" +score);
            $("#topleft").html("");
            $("#topmiddle").html("");
            $("#topright").html("");
            $("#right").html(""); $("#middle").html(""); $("#left").html(""); $("#bottomleft").html(""); $("#bottomright").html(""); $("#bottommiddle").html("");
            arr=[];
            ai=[];
            player=[];

        }
        else if((ai.includes("#topleft")===true) && (ai.includes("#topmiddle")===true) && (ai.includes("#topright")===true)||(ai.includes("#left")===true) && (ai.includes("#middle")===true) && (ai.includes("#right")===true)||
            (ai.includes("#bottomleft")===true) && (ai.includes("#bottommiddle")===true) && (ai.includes("#bottomright")===true)||
            (ai.includes("#topleft")===true) && (ai.includes("#left")===true) && (ai.includes("#bottomleft")===true)||
            (ai.includes("#topright")===true) && (ai.includes("#right")===true) && (ai.includes("#bottomright")===true)||
            (ai.includes("#topmiddle")===true) && (ai.includes("#middle")===true) && (ai.includes("#bottommiddle")===true)||
            (ai.includes("#topleft")===true) && (ai.includes("#middle")===true) && (ai.includes("#bottomright")===true)||
            (ai.includes("#topright")===true) && (ai.includes("#middle")===true) && (ai.includes("#bottomleft")===true)){
            alert("Computer Wins");
            aibuzzer.play();
            score-=10;
            $("#score").html("Score:" +score);
            $("#topleft").html("");
            $("#topmiddle").html("");
            $("#topright").html("");
            $("#right").html(""); $("#middle").html(""); $("#left").html(""); $("#bottomleft").html(""); $("#bottomright").html(""); $("#bottommiddle").html("");
            arr=[];
            ai=[];
            player=[];
        }
    });

    var x= (function x(){


        for(var j=0; j<avail.length; j++){
            if(arr.includes(avail[j])===false){

                arr.push(avail[j]);
                ai.push(avail[j]);
                console.log(ai);
                console.log(arr);
                return $(avail[j]).html("o");



            }
        }

    });


    $("#bottomleft").click(function(){
        $("#bottomleft").html("x");
        arr.push("#bottomleft");
        player.push("#bottomleft");
        x();
        y();
        z();
    });
    $("#bottommiddle").click(function(){
        $("#bottommiddle").html("x");
        arr.push("#bottommiddle");
        player.push("#bottommiddle");
        x();
        y();
        z();
    });
    $("#bottomright").click(function(){
        $("#bottomright").html("x");
        arr.push("#bottomright");
        player.push("#bottomright");
        x();
        y();
        z();
    });
    $("#right").click(function(){
        $("#right").html("x");
        arr.push("#right");
        player.push("#right");
        x();
        y();
        z();
    });
    $("#left").click(function(){
        $("#left").html("x");
        arr.push("#left");
        player.push("#left");
        x();
        y();
        z();
    });
    $("#middle").click(function(){
        $("#middle").html("x");
        arr.push("#middle");
        player.push("#middle");
        x();
        y();
        z();
    });
    $("#topright").click(function(){
        $("#topright").html("x");
        arr.push("#topright");
        player.push("#topright");
        x();
        y();
        z();
    });
    $("#topleft").click(function(){
        $("#topleft").html("x");
        arr.push("#topleft");
        player.push("#topleft");
        x();
        y();
        z();
    });
    $("#topmiddle").click(function(){
        $("#topmiddle").html("x");
        arr.push("#topmiddle");
        player.push("#topmiddle");
        x();
        y();
        z();
    });


});