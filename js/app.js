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
        $logo.on("click", () => {
            if ($menu.hasClass("canvasMenu")) {
                toggleOff()
            } else {
                toggleOn()
            }

        });


    };

    let gallery = () => {
        let index=1;
        let gallery=$("section.slider > div > div.gallery>figure");
        let nextButton = $("section.slider > div > button:nth-child(3)");
        let prevButton = $("section.slider > div > button:nth-child(1)");
        let singleEl= gallery[index-1];
        $(singleEl).css("display","")
        nextButton.on("click", () => {
            $(singleEl).css("display","");
            index++;
            if(index>11){
                index=1;
            }
            console.log(index)
            singleEl= gallery[index-1];
            $(singleEl).css("display","block")
        });
        prevButton.on("click", () => {
            $(singleEl).css("display","");
            index--;
            if(index<1) {
                index = 11
            }
            console.log(index)
            singleEl= gallery[index-1];
            $(singleEl).css("display","block")
        });
        $(singleEl).css("display","block")
    }

/*let this1 =this
    let AppPanel = () => {
       let  openApp =(pageName) =>{
           let $app = $(".App");
            for (let i = 0; i < $app.length; i++) {
                $($app[i]).css("display", "none");
            }
            $(pageName).style.display = "block";

            $("section.appPanel > div > button:nth-child(2)").click();
        }
        $("section.appPanel > div > button:nth-child(1)").on('click',openApp("#App1"));
      //  $("section.appPanel > div > button:nth-child(2)").on('click',openApp("#App2"));
        //$("section.appPanel > div > button:nth-child(2)").on('click',openApp("#App3"));
    }*/
   // AppPanel();
    gallery();
    menuDrop();

});
