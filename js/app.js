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


    let AppPanel = () => {
       let  openApp =(pageName) =>{
           let $app = $(".App");
            for (let i = 0; i < $app.length; i++) {
                $($app[i]).css("display", "none");
            }
           $(pageName).css("display","block");

           $("section.appPanel > div > button:nth-child(1)").css({'background-color': "black","border":"none"})
           $("section.appPanel > div > button:nth-child(2)").css({'background-color': "black","border":"none"})
           $("section.appPanel > div > button:nth-child(3)").css({'background-color': "black","border":"none"})
        };

        openApp();


        $("section.appPanel > div > button:nth-child(3)").on('click', (e)=>{openApp("#App3")

            $(e.target).css({"background-color": "#560618",'border':"white solid 1px"});
        });
        $("section.appPanel > div > button:nth-child(2)").on('click',(e)=>{openApp("#App2")
            $(e.target).css({"background-color": "#560618",'border':"white solid 1px"});
        });
        $("section.appPanel > div > button:nth-child(1)").on('click',(e)=>{openApp("#App1")
            $(e.target).css({"background-color": "#560618",'border':"white solid 1px"});

        });
        $("section.appPanel > div > button:nth-child(2)").click()
    };
    AppPanel();
    gallery();
    menuDrop();

});
