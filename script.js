class Calendar {
  constructor(year, month) {
    this.month = month;
    this.year = year;
    this.weekDays = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  }

  getDaysInMonth() {
    return new Date(this.year, this.month, 0).getDate();
  }

  getStartWeekDay() {
    return this.weekDays[new Date(this.year, this.month - 1, 1).getDay()];
  }

  createHtmlCalendar() {
    let weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'];
    let calendarValues = Array(weekDays.indexOf(this.getStartWeekDay())).fill('');
    calendarValues = [...calendarValues, ...Array(this.getDaysInMonth()).keys(), ...Array(10).fill('')];
    document.body.innerHTML = `
      <table class='table'>
        <tr> ${weekDays.map(day => `<th class='th'>${day}</th>`).join('')} </tr>
        <tr> ${calendarValues.splice(0, 7).map(dayNumber => `<td class='td'>${dayNumber === '' ? '' : dayNumber + 1}</td>`).join('')} </tr>
        <tr> ${calendarValues.splice(0, 7).map(dayNumber => `<td class='td'>${dayNumber === '' ? '' : dayNumber + 1}</td>`).join('')} </tr>
        <tr> ${calendarValues.splice(0, 7).map(dayNumber => `<td class='td'>${dayNumber === '' ? '' : dayNumber + 1}</td>`).join('')} </tr>
        <tr> ${calendarValues.splice(0, 7).map(dayNumber => `<td class='td'>${dayNumber === '' ? '' : dayNumber + 1}</td>`).join('')} </tr>
        <tr> ${calendarValues.splice(0, 7).map(dayNumber => `<td class='td'>${dayNumber === '' ? '' : dayNumber + 1}</td>`).join('')} </tr>
      </table>
    `;
    if ((this.getStartWeekDay() == 'cб' || this.getStartWeekDay() == 'нд') && this.getDaysInMonth() >= 30) {
      let table = document.querySelector('.table');
      let tr = document.createElement('tr');
      tr.innerHTML = ` ${calendarValues.splice(0, 7).map(dayNumber => `<td class='td'>${dayNumber === '' ? '' : dayNumber + 1}</td>`).join('')} `;
      table.appendChild(tr);
    }
  }
}

let cal = new Calendar(2019, 12);
cal.createHtmlCalendar();