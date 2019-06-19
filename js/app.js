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


    menuDrop()

});
