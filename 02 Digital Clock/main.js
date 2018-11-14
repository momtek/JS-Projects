setInterval(() => {
  let currenTime = new Date();
  let hours = currenTime.getHours();
  let minutes = currenTime.getMinutes();
  let seconds = currenTime.getSeconds();
  let period = 'AM';

  if (hours >= 12) {
    period = 'PM';
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (seconds < 10) {
    seconds = '0' + secconds;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  let clockTime = hours + ':' + minutes + ':' + seconds + ' ' + period;

  let clock = document.getElementById('digiClock');
  clock.innerText = clockTime;
}, 1000);
