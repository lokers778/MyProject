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


    let appPanel = () => {
       let  openApp =(pageName) =>{
           let $app = $(".App");
            for (let i = 0; i < $app.length; i++) {
                $($app[i]).css("display", "none");
            }
           $(pageName).css("display","block");

           $("section.appPanel > div > button:nth-child(1)").css({'background-color': "black","border":"none"});
           $("section.appPanel > div > button:nth-child(2)").css({'background-color': "black","border":"none"});
           $("section.appPanel > div > button:nth-child(3)").css({'background-color': "black","border":"none"});
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

    let japanNews =()=>{
        let url = "https://newsapi.org/v2/top-headlines?q=japan&apiKey=b32e14d9ea934a4eb3d9075c6552f99a"
        $.ajax({
            url: url,
            dataType: 'json',
            "language": "en",
            "country": "jp",
        }).done(function (response) {
            console.log(response);
            printNews(response.articles);
        }).fail(function (error) {
            console.error(error);
        });
    };
   let $newsDiv =$("#news > div");
    japanNews();
    let printNews =(news)=>{
        console.log(news);
        $.each(news, function (index, value) {
            let $singleNewsTitle= $("<h2>", {text: (index + 1)+" " + value.title });
            let $singleNewsDescription=$("<h4>",{text: value.description});
            let $singleNewsContent=$("<p>",{text: value.content});
            let $singleNewsUrl=$("<span>",{text: value.url});
            $newsDiv.append($singleNewsTitle).append($singleNewsDescription).append($singleNewsContent).append($singleNewsUrl)

        });

    };

    appPanel();
    gallery();
    menuDrop();

});
