$(document).ready(function () {
    const wielkosc = 5;
    let tab = [];
    let liczba_ruchow = 1;
    for (let i = 0; i < wielkosc; i++) {
        for (let j = 0; j < wielkosc; j++) {
            var div = $("<div>")
                .addClass("pola")
                .css("left", (50 * j))
                .css("top", i * 50)
            $("#main").append(div)
        }
    }
    $(".pola").on("click", function () {
        if($(this).css("background-color")!="yellow"){
            $(this).css("background", "yellow")
            tab.push({ x: $(this).css("left"), y: $(this).css("top") } )
            //console.log(tab)
        }
    })
    $("#startBt").on("click", function () {
        if(tab.length >= 3){
            //console.log(tab)
            $("#player1")
                .css("left", tab[0].x)
                .css("top", tab[0].y)
            $("#player2")
                .css("left", tab[tab.length - 1].x)
                .css("top", tab[tab.length - 1].y)
        }
        else {
            alert("Za mało pól")
        }
    })
    $("#moveBt").on("click", function () {
        if(liczba_ruchow<tab.length){
            //console.log(tab, liczba_ruchow, tab[0].x)
            $("#player1")
                .css("left", tab[liczba_ruchow].x)
                .css("top",tab[liczba_ruchow].y)
            $("#player2")
                .css("left", tab[tab.length-1-liczba_ruchow].x)
                .css("top",tab[tab.length-1-liczba_ruchow].y)
            liczba_ruchow++
        }
        else{
            alert("Koniec");
        }
    })
    $("#resetBt").on("click", function () {
        tab=[]
        liczba_ruchow=1;
        $(".class")
            .css("background", "white")
        $("#player1")
            .css("left", 100)
            .css("top",350)
        $("#player2")
            .css("left", 150)
            .css("top",350)
    })
})