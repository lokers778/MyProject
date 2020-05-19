$(function () {


    let menuDrop = () => {
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
        let index = 1;
        let gallery = $("section.slider > div > div.gallery>figure");
        let nextButton = $("section.slider > div > button:nth-child(3)");
        let prevButton = $("section.slider > div > button:nth-child(1)");
        let singleEl = gallery[index - 1];
        $(singleEl).css("display", "")
        nextButton.on("click", () => {
            $(singleEl).css("display", "");
            index++;
            if (index > 11) {
                index = 1;
            }
            singleEl = gallery[index - 1];
            $(singleEl).css("display", "block")
        });
        prevButton.on("click", () => {
            $(singleEl).css("display", "");
            index--;
            if (index < 1) {
                index = 11
            }
            singleEl = gallery[index - 1];
            $(singleEl).css("display", "block")
        });
        $(singleEl).css("display", "block")
    }


    let appPanel = () => {
        let openApp = (pageName) => {
            let $app = $(".App");
            for (let i = 0; i < $app.length; i++) {
                $($app[i]).css("display", "none");
            }
            $(pageName).css("display", "block");

            $("section.appPanel > div > button:nth-child(1)").css({'background-color': "black", "border": "none"});
            $("section.appPanel > div > button:nth-child(2)").css({'background-color': "black", "border": "none"});
            $("section.appPanel > div > button:nth-child(3)").css({'background-color': "black", "border": "none"});
        };

        openApp();


        $("section.appPanel > div > button:nth-child(3)").on('click', (e) => {
            openApp("#App3")

            $(e.target).css({"background-color": "#560618", 'border': "white solid 1px"});
        });
        $("section.appPanel > div > button:nth-child(2)").on('click', (e) => {
            openApp("#App2")
            $(e.target).css({"background-color": "#560618", 'border': "white solid 1px"});
        });
        $("section.appPanel > div > button:nth-child(1)").on('click', (e) => {
            openApp("#App1")
            $(e.target).css({"background-color": "#560618", 'border': "white solid 1px"});

        });


        $("section.appPanel > div > button:nth-child(2)").click()
    };

    let japanNews = () => {
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
    let $newsDiv = $("#news > div");
    japanNews();
    let printNews = (news) => {
        $.each(news, function (index, value) {
            let $singleNewsTitle = $("<h2>", {text: (index + 1) + " " + value.title});
            let $singleNewsDescription = $("<h4>", {text: value.description});
            let $singleNewsContent = $("<p>", {text: value.content});
            let $singleNewsUrl = $("<span>", {text: value.url});
            $newsDiv.append($singleNewsTitle).append($singleNewsDescription).append($singleNewsContent).append($singleNewsUrl)

        });

    };
    let canvasFunctions = () => {
        let palette = $("#canvas");
        let context = palette[0].getContext("2d");
        context.canvas.width = window.innerWidth -220 ;
        context.canvas.height = window.innerHeight -200;

        let drawCanvas = () => {

            let x = Math.random() * $("Canvas").width();
            let y = Math.random() * $("Canvas").height();
            let table = ["工", "已", "巾", "干", "幺", "广", "廴", "廾", "弋", "弓", "ヨ", "彑", "彡", "彳", "忄", "扌", "氵", "犭", "門", "隶", "隹", "雨", "青", "非", "奄", "岡", "免", "斉", "面", "革", "韭", "音", "頁", "風", "飛", "食", "首", "香", "品", "馬", "骨", "高", "髟", "鬥", "鬯", "鬲"];
            let randomArrayElement = Math.floor(Math.random() * (46));
            context.font = "17px Arial";
            context.fillText(table[randomArrayElement], x, y);

        };
        drawTimer = window.setInterval(drawCanvas, 500);


        let drawCanvasKanji = () => {
            let palette = $("#canvas");
            let context = palette[0].getContext("2d");
            let paint = false;


            palette.mousedown((e) => {
                paint = true;
                draw(e.pageX, e.pageY);
            });

            palette.mouseup((e) => {
                paint = false;
                draw(e.pageX, e.pageY);
            });
            palette.mousemove(function (e) {
                if (paint === true) {
                    draw(e.pageX, e.pageY);
                }
            });
            let draw = (x, y) => {
                let xposition=x - $('#canvas').offset().left;
                let yposition=y - $('#canvas').offset().top;
                context.beginPath();
                context.fillStyle = "black";
                context.arc(xposition, yposition, 20, 0, 2 * Math.PI);
                context.fill();
                context.closePath();

            }
        };


        drawCanvasKanji();
    }
    canvasFunctions()
    appPanel();
    gallery();
    menuDrop();

});
