function startCountdown() {
  // Get the user-selected date and time
  const selectedDate = document.getElementById("date").value;
  const selectedTime = document.getElementById("time").value;

  // Concatenate date and time strings and create a new Date object
  const targetDateTimeString = selectedDate + " " + selectedTime;
  const targetDate = new Date(targetDateTimeString).getTime();

  // Update the countdown every second
  const countdownInterval = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time difference between the current date/time and the target date/time
    const timeDifference = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the calculated time in the HTML elements
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Check if the countdown has expired
    if (timeDifference < 0) {
      clearInterval(countdownInterval);
      document.getElementById("timer").innerHTML = "Countdown expired";
    }
  }, 1000);
}
