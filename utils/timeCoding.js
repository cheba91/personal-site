export function timeCoding() {
   let startDate = new Date(new Date('2018-6-26').toISOString().slice(0, 10));
   let dateNow = new Date(new Date().toISOString().slice(0, 10)); // need date in YYYY-MM-DD format
   if (startDate > dateNow) {
      const swap = startDate;
      startDate = dateNow;
      dateNow = swap;
   }
   const startYear = startDate.getFullYear();
   const february =
      (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0
         ? 29
         : 28;
   const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   let yearDiff = dateNow.getFullYear() - startYear;
   let monthDiff = dateNow.getMonth() - startDate.getMonth();
   if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
   }
   let dayDiff = dateNow.getDate() - startDate.getDate();
   if (dayDiff < 0) {
      if (monthDiff > 0) {
         monthDiff--;
      } else {
         yearDiff--;
         monthDiff = 11;
      }
      dayDiff += daysInMonth[startDate.getMonth()];
   }
   const monthWord = monthDiff === 1 ? 'month' : 'months';
   const dayWord = dayDiff === 1 ? 'day' : 'days';
   return `${yearDiff} years, ${monthDiff} ${monthWord} and ${dayDiff} ${dayWord}`;
}
