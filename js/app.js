$(function () {


    let menuDrop = () => {
        console.log("hello");
        let $menu = $('.menu');
        let $logo = $('.logo');
        let toggleOn = () => {
            $menu.addClass("canvasMenu");
        };
        let toggleOff = () => {
            $menu.removeClass("canvasMenu");
        };
        $logo.on("click",()=> {
            if ($menu.hasClass("canvasMenu")) {
                toggleOff()
            } else {
                toggleOn()
            }

        });


    };

    let gallery =()=>{
        var nextButton = $("<button></button>");
        var prevButton = $("<button></button>");
        let index=1;
        let $figure= $(".gallery").find("figure");
        let $ImageAll =$figure.find("img");
        for (let i = 0; i < $figure.length; i++) {
            let ID=$figure[i].attr("id");
            $figure.after(nextButton);
            $figure.before(prevButton);

        }
        console.log($figure)
    }


gallery()
    menuDrop()

});
