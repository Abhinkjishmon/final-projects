export function getDaysInMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const daysInMonth = [];
  const startingDay = firstDay.getDay();

  // Add days from previous month
  for (let i = startingDay - 1; i >= 0; i--) {
    daysInMonth.push(new Date(year, month, -i));
  }

  // Add days of current month
  for (let day = 1; day <= lastDay.getDate(); day++) {
    daysInMonth.push(new Date(year, month, day));
  }

  // Add days from next month
  const remainingDays = 42 - daysInMonth.length; // 6 rows × 7 days
  for (let day = 1; day <= remainingDays; day++) {
    daysInMonth.push(new Date(year, month + 1, day));
  }

  return daysInMonth;
}

export function isSameDay(date1, date2) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}
