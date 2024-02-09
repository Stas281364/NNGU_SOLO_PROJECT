document.addEventListener("DOMContentLoaded", function () {
    
    window.addEventListener("scroll", function () {
        let scroll_pos_now = window.pageYOffset;
        sleep(100);
        let scroll_pos_next = window.pageYOffset;

        let difference = scroll_pos_next - scroll_pos_now;

        const scroll = document.getElementById("kryesore");
    
        if (difference > 0 ) {
            scroll.style.backgroundColor = "rgb(255, 0, 0)"
        } else if(difference < 0) {
            
        } else{

        }
    });

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

});