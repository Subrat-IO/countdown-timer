window.onload = () => {
        document.querySelector('#calculate').onclick = calculate;
        document.querySelector('#reset').onclick = reset;
        document.querySelector('#stop').onclick = stopCountdown;
    };

    let interval;

    function calculate() {
        const date = document.querySelector("#date").value;
        const time = document.querySelector("#time").value;
        const endTime = new Date(date + " " + time);

        if (isNaN(endTime)) {
            alert("Please enter a valid date and time.");
            return;
        }

        clearInterval(interval); // Clear any previous interval
        interval = setInterval(() => calculateTime(endTime), 1000);
    }

    function calculateTime(endTime) {
        const currentTime = new Date();
        const timeLeft = (endTime - currentTime) / 1000;

        const days = document.querySelector('#countdown-days');
        const hours = document.querySelector('#countdown-hours');
        const minutes = document.querySelector('#countdown-minutes');
        const seconds = document.querySelector('#countdown-seconds');

        if (timeLeft > 0) {
            days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
            hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
            minutes.innerText = Math.floor((timeLeft / 60) % 60);
            seconds.innerText = Math.floor(timeLeft % 60);
        } else {
            clearInterval(interval);
            days.innerText = 0;
            hours.innerText = 0;
            minutes.innerText = 0;
            seconds.innerText = 0;
        }
    }

    function stopCountdown() {
        clearInterval(interval);
    }

    function reset() {
        clearInterval(interval);
        document.querySelector('#countdown-days').innerText = 0;
        document.querySelector('#countdown-hours').innerText = 0;
        document.querySelector('#countdown-minutes').innerText = 0;
        document.querySelector('#countdown-seconds').innerText = 0;
        document.querySelector("#date").value = "";
        document.querySelector("#time").value = "";
    }
