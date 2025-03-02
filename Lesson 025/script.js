function printNumbersByTimeout(from, to) { 
        setTimeout(function print() {
            console.log(from);
            from++;
            if(from <= to) {
                setTimeout(print, 1000);
            }
        },1000);
    
}


function printNumbersByInterval(from, to) { 
    let id = setInterval(() => { 
        console.log(from);
        if(from >= to) { 
            clearInterval(id)
        }
        from++;        
    }, 1000)
}


function newYearCount() {

    setTimeout(function count() {
        let now = new Date();
        let newYear = new Date(now.getFullYear() + 1, 0, 1);
        let diff = newYear - now;

        if (diff <= 0) {
            console.log("З Новим Роком!");
            return;
        }

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        console.log(`Залишилось: ${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд`);

        setTimeout(count, 1000);
    },1000)
}

