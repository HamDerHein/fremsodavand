$(window).on("load", StartHistorie);



function StartHistorie() {
    console.log("StartHistorie");
    //alert("siden vises virker!");
    //Start lyd: HotdogSong
    $("#HotDogSong")[0].play();
    $("#HotDogSong")[0].volume = 0;
    $("#HotDogSong")[0].loop = true;
    //if ($("#HotDogSong")[0].muted == true) /*mute*/
    $("#HotDogSong").animate({
        volume: 0.5
    }, 5000);

    $("#MaveKnurrer01")[0].play();
    $("#MaveKnurrer01")[0].volume = 0;
    $("#MaveKnurrer01").animate({
        volume: 0.1
    }, 500);

    //Start anim: franke_body/arms_kigger
    $("#franke_body_sprite").addClass("franke_body_kigger");
    $("#franke_arms_sprite").addClass("franke_arms_kigger");
    $("#toke_falling").hide(); //.show
    $("#sluttekster").hide();
    $("#yes_no_container").hide();
    //Start anim: TokeWalkcycle
    $("#toke_sprite").addClass("toke_walkcycle");

    $("#toke_container").addClass("toke_move_right");

    //Når anim: "franke_arms_kigger" er færdig: TokeHungry
    $("#toke_container").on("animationend", TokeHungry);
}

function TokeHungry() {
    console.log("TokeHungry");
    $("#toke_container").removeClass("toke_move_right");
    $("#toke_sprite").removeClass("toke_walkcycle");

    $("#toke_sprite").addClass("TokeHungry");
    $("#toke_sprite").on("animationend", TokeHungryPoint);

}

function TokeHungryPoint() {
    console.log("TokeHungryPoint");

    $("#toke_sprite").removeClass("TokeHungry");
    $("#toke_sprite").addClass("TokeHungryPoint");
    $("#toke_sprite").on("animationend", TokeWantsSausage);
}

function TokeWantsSausage() {
    console.log("TokeWantsSausage");

    $("#toke_sprite").removeClass("TokeHungryPoint");
    $("#franke_body_sprite").removeClass("franke_body_kigger");
    $("#franke_arms_sprite").removeClass("franke_arms_kigger");
    $("#franke_body_sprite").addClass("franke_body_kigger");
    $("#franke_arms_sprite").addClass("franke_arms_kigger");
    $("#toke_sprite").addClass("TokeWantsSausage");
    $("#toke_sprite").on("animationend", VIS_JA_NEJ_VALG);

    // setTimeout(VIS_JA_NEJ_VALG, 10000);

}
//START VALG

function VIS_JA_NEJ_VALG() {
    console.log("Vis ja og nej knap");
    $("#franke_body_sprite").removeClass("franke_body_kigger");
    $("#franke_arms_sprite").removeClass("franke_arms_kigger");
    $("#toke_sprite").removeClass("TokeWantsSausage");
    $("#toke_sprite").addClass("TokeWantsSausage2");
    $("#franke_body_sprite").addClass("franke_body_angry");
    $("#franke_arms_sprite").addClass("franke_arms_angry");
    $("#yes_no_container").fadeIn();

    $(".yes_sign").fadeIn(1000);
    $(".no_sign").fadeIn(1000);

    $(".no_sign").on("click", TokeFalling);
    $(".yes_sign").on("click", makinghotdog);

}

/*function randomValg() {
    //    console.log("Random valg");
    var rando = 0.6;
    if (rando = 0.5) {
        tilspil();
    } else {
        makinghotdog();
    }
}*/

//Spil start

/*function tilspil()  {


}*/

function makinghotdog()  {
    $(".yes_sign").off("click", makinghotdog);
    $(".no_sign").off("click", TokeFalling);
    $(".yes_sign").fadeOut(1000);
    $(".no_sign").fadeOut(1000);

    $("#toke_sprite").addClass("Tokethinking");
    $("#franke_body_sprite").removeClass("franke_body_angry");
    $("#franke_arms_sprite").removeClass("franke_arms_angry");
    $("#franke_body_sprite").addClass("franke_body_lavermad");
    $("#franke_arms_sprite").addClass("franke_arms_lavermad");
    $("#franke_arms_sprite").on("animationend", eatinghotdog);
}

function eatinghotdog()  {
    $("#franke_body_sprite").removeClass("franke_body_lavermad");
    $("#franke_arms_sprite").removeClass("franke_arms_lavermad");
    $("#franke_body_sprite").addClass("franke_body_lavermadglad");
    $("#toke_sprite").removeClass("Tokethinking");
    $("#franke_arms_sprite").addClass("franke_arms_lavermadglad");

    $("#give_me_that")[0].play();
    $("#give_me_that")[0].volume = 0;
    $("#give_me_that").animate({
        volume: 0.9
    }, 500);
    $("#burp")[0].play();
    $("#burp")[0].volume = 0;
    $("#burp").animate({
        volume: 0.9
    }, 500);

    $("#toke_sprite").addClass("Tokeeating");
    $("#toke_sprite").on("animationend", Tokevictory);
}

function Tokevictory() {

    $("#toke_sprite").removeClass("Tokeeating");
    $("#toke_sprite").addClass("Tokevictory");
    $("#sluttekster").show();

    $("#yes_no_container").fadeOut();
    $(".yes_sign").fadeOut();
    $(".no_sign").fadeOut();
    $("#sluttekster .restart").on("click", ResetSpil);

}
//SPIL SLUTNING A

function TokeFalling() {
    console.log("TokeFalling");
    $(".yes_sign").off("click", makinghotdog);
    $(".no_sign").off("click", TokeFalling);
    $(".yes_sign").fadeOut(1000);
    $(".no_sign").fadeOut(1000);
    $("#toke_sprite").removeClass("TokeWantsSausage");

    $("#toke_falling").show();
    $("#toke_sprite").hide();
    $("#franke_body_sprite").removeClass("franke_body_angry");
    $("#franke_arms_sprite").removeClass("franke_arms_angry");
    $("#franke_body_sprite").addClass("franke_body_lukker");
    $("#franke_arms_sprite").addClass("franke_arms_lukker");

    $("#MaveKnurrer02")[0].play();
    $("#MaveKnurrer02")[0].volume = 0;
    $("#MaveKnurrer02").animate({
        volume: 0.7
    }, 500);

    $("#TheWilhelmScream")[0].play();
    $("#TheWilhelmScream")[0].volume = 0;
    $("#TheWilhelmScream").animate({
        volume: 0.7
    }, 500);
    $("#Door_Close")[0].play();
    $("#Door_Close")[0].volume = 0;
    $("#Door_Close").animate({
        volume: 0.7
    }, 500);

    $("#toke_falling").addClass("TokeDropdeath");

    $("#toke_falling").on("animationend", TokeFallingend);
}


function TokeFallingend() {
    console.log("reset");
    $("#hotdog_bod_sprite").removeClass("bod_halvt_aaben");
    $("#hotdog_bod_sprite").addClass("bod_lukket");
    $("#toke_falling").removeClass("TokeDropdeath");
    $("#toke_falling").addClass("TokeDropdeathend");

    $("#sluttekster").show();
    $("#sluttekster .restart").on("click", ResetSpil);


}

function ResetSpil() {
    console.log("reset");
    $(".yes_sign").off("click", makinghotdog);
    $(".no_sign").off("click", TokeFalling);
    $("#yes_no_container").hide();
    //location.reload();
    location.href = "http://frederikerichsen.dk/Kea/02_animation/02.03.04_endelig_aflevering_new/00_Intro/index.html";
}
