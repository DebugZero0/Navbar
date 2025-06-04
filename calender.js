const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let date = new Date();

function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const today = new Date();
  calendarDays.innerHTML = "";
  monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

  for (let i = 0; i < firstDay; i++) {
    calendarDays.innerHTML += `<div></div>`;
  }

  for (let day = 1; day <= lastDate; day++) {
    const isToday = day === today.getDate() && 
                    month === today.getMonth() && 
                    year === today.getFullYear();

    calendarDays.innerHTML += `<div class="${isToday ? 'today' : ''}">${day}</div>`;
  }
}

prev.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

next.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

const isToday =
  day === today.getDate() &&
  month === today.getMonth() &&
  year === today.getFullYear();

calendarDays.innerHTML += `<div class="${isToday ? 'today' : ''}">${day}</div>`;
