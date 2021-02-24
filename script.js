$(function () {

    let interval;
    let ms = 0;
    let sec = 0;
    let min = 0;
    let running = 0;
    let numLap = 1;


    function wholeStopwatch() {
        $(".startStop").click(function () {
            if (running == 0) {
                running = 1;
                stopWatch();
                second();
                minute();
                $("#millsecond").text(`${00}`);
                $("#second").text(`${00}`);
                $("#minute").text(`${00}`);
                ms = 0;
                sec = 0;
                min = 0;
            } else if (running == 1) {
                running = 0;

                clearInterval(milliseconds)
                clearInterval(secWatch)
                clearInterval(minWatch)
            }
        });


        function stopWatch() {
            if (running == 1) {

                milliseconds = setInterval(function () {
                    for (i = 0; i < 1; i++) {
                        ms = ms + 1
                        if (ms == 100) {
                            ms = 0;
                        }
                        console.log(ms)
                        $("#millsecond").text(`${ms}`);
                    }
                    // $('.startStop').last('click', startStop());
                    // $('.lap').last('click', lap());
                }, 10)
            }
        }
            $(".lap").click(function () {

                $(".lap1").text(`${min}:${sec}:${ms}`);
            });


        function second() {
            secWatch = setInterval(function () {
                for (i = 0; i < 1; i++) {
                    sec = sec + 1;
                    console.log(sec);
                    $("#second").text(`${sec}`);
                    if (sec == 60) {
                        sec = 0;
                    }
                }
            }, 1000)
    
        }


        function minute() {
            minWatch = setInterval(function () {
                for (i = 0; i < 1; i++) {
                    min = min + 1;
                    console.log(min);
                    $("#minute").text(`${min}`);
                }
            }, 60000)
        }
        $(".stopClock").text(`${min}${sec}${ms}`)
    }

    wholeStopwatch();
})