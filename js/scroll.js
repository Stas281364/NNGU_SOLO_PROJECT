document.addEventListener("DOMContentLoaded", function () {
    let scroll_pos_now = window.scrollY;
    window.addEventListener("scroll", function () {
        // let scroll_pos_now = window.scrollY;
        console.log(scroll_pos_now);
        // sleep(1100);
        let scroll_pos_next = window.scrollY;
        console.log(scroll_pos_next);

        let difference = scroll_pos_next - scroll_pos_now;

        let scroll_top = document.getElementById("shadow-top");
        let scroll_bot = document.getElementById("shadow-bot");
    
        if (difference > 0 ) {
            scroll_pos_now = scroll_pos_next;
            scroll_bot.style.boxShadow = "0px 12px 100px 75px  #3cf";

            // setTimeout(
            //     () => {
            //       console.log('Hello after 4 seconds');
            //     },
            //     4 * 1000
            // );

            // setTimeout(low_scroll_bot(scroll_bot), 5*1000);
            setTimeout( function(){
                    low_scroll_bot(scroll_bot);
                    // const date = Date.now();
                    // let tick = 0;
                    // let currentDate = null;
                    // do {
            
                        
                    //     do {
                    //         currentDate = Date.now();

                    //     } while (currentDate - (date + tick * 100) < 100);
            
                        
                    //     scroll_bot.style.boxShadow = arr_bot[tick];
                    //     console.log(`tick ${arr_bot[tick]}`);
                    //     tick += 1;
                        
                        
                    // } while (currentDate - date < 1000);
                },

                200
            );

        } else if(difference < 0) {
            let buf = scroll_pos_now;
            scroll_pos_now = scroll_pos_next;
            scroll_pos_next = buf;
            scroll_top.style.boxShadow = "0px 12px 100px 75px  #f39";
            setTimeout( function(){
                low_scroll_top(scroll_top);
            },

            200
        );
            
        } else{

        }
    });

    function low_scroll_bot(scroll_bot) {

        const date = Date.now();
        let tick = 0;
        let currentDate = null;
        // let howtimes = 1;
        do {

            currentDate = Date.now();

            if (currentDate - date  > 0 && currentDate - date < 3000) {
                scroll_bot.style.boxShadow = arr_bot[tick];
                console.log(`tick ${arr_bot[tick]}`);
                tick += 2; 
                // howtimes++;
            }
            else if(currentDate - date  > 3000 && currentDate - date  < 6000){
                scroll_bot.style.boxShadow = arr_bot[tick];
                console.log(`tick ${arr_bot[tick]}`);
                tick += 2;
                // howtimes++;
            }
            else if(currentDate - date  > 6000 && currentDate - date  < 9000){
                scroll_bot.style.boxShadow = arr_bot[tick];
                console.log(`tick ${arr_bot[tick]}`);
                tick += 2;
                // howtimes++;
            }
            else if(currentDate - date  > 9000 && currentDate - date  < 12000){
                scroll_bot.style.boxShadow = arr_bot[tick];
                console.log(`tick ${arr_bot[tick]}`);
                tick += 2;
                // howtimes++;
            }
            
            if (tick > 9) {
                break;
            }
            
        } while (currentDate - date < 80000);
        
        scroll_bot.style.boxShadow = arr_bot[9];
        console.log(`tick 9 end`);
    }

    function low_scroll_top(scroll_top) {

        const date = Date.now();
        let tick = 0;
        let currentDate = null;
        // let howtimes = 1;
        do {

            currentDate = Date.now();

            if (currentDate - date  > 0 && currentDate - date < 3000) {
                scroll_top.style.boxShadow = arr_top[tick];
                console.log(`tick ${arr_top[tick]}`);
                tick += 2; 
                // howtimes++;
            }
            else if(currentDate - date  > 3000 && currentDate - date  < 6000){
                scroll_top.style.boxShadow = arr_top[tick];
                console.log(`tick ${arr_top[tick]}`);
                tick += 2;
                // howtimes++;
            }
            else if(currentDate - date  > 6000 && currentDate - date  < 9000){
                scroll_top.style.boxShadow = arr_top[tick];
                console.log(`tick ${arr_top[tick]}`);
                tick += 2;
                // howtimes++;
            }
            else if(currentDate - date  > 9000 && currentDate - date  < 12000){
                scroll_top.style.boxShadow = arr_top[tick];
                console.log(`tick ${arr_top[tick]}`);
                tick += 2;
                // howtimes++;
            }
            
            if (tick > 9) {
                break;
            }
            
        } while (currentDate - date < 80000);
        
        scroll_top.style.boxShadow = arr_top[9];
        console.log(`tick 9 end`);
    }

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    let arr_bot = [
        "0px 12px 90px 67px  #3cf",
        "0px 12px 80px 59px  #3cf",
        "0px 12px 70px 52px  #3cf",
        "0px 12px 60px 44px  #3cf",
        "0px 12px 50px 37px  #3cf",
        "0px 12px 40px 29px  #3cf",
        "0px 12px 30px 22px  #3cf",
        "0px 12px 20px 14px  #3cf",
        "0px 12px 10px 7px  #3cf",
        "0px 12px 0px 0px  #3cf",
    ]

    let arr_top = [
        "0px 12px 90px 67px  #f39",
        "0px 12px 80px 59px  #f39",
        "0px 12px 70px 52px  #f39",
        "0px 12px 60px 44px  #f39",
        "0px 12px 50px 37px  #f39",
        "0px 12px 40px 29px  #f39",
        "0px 12px 30px 22px  #f39",
        "0px 12px 20px 14px  #f39",
        "0px 12px 10px 7px  #f39",
        "0px 12px 0px 0px  #f39",
    ]

});