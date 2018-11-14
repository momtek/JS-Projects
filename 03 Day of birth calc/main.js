let userDay = document.getElementById('user-day');
let userMonth = document.getElementById('user-month');
let userYear = document.getElementById('user-year');

let submitButton = document.getElementById('submit-date');

submitButton.addEventListener('click', e => {
  let message = document.getElementById('message');
  let parsedDay = parseInt(userDay.value);
  let parsedMonth = parseInt(userMonth.value) - 1;
  let parsedYear = parseInt(userYear.value);

  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  let weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  let dateIs = new Date(parsedYear, parsedMonth, parsedDay);
  let weekdayIs = weekday[dateIs.getDay()];
  let monthIs = months[parsedMonth];

  if (weekdayIs === undefined || monthIs === undefined) {
    message.innerText = '';
    setTimeout(() => {
      message.innerText = 'Please enter a valid date';
    }, 500);
  } else {
    message.innerText =
      weekdayIs + ', ' + parsedDay + ' ' + monthIs + ', ' + parsedYear;
  }
});
