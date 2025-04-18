/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum ChoiseDay  {
  sunday = 'Sunday',
  monday = 'Monday',
  tuesday = 'Tuesday',
  wednesday = 'Wednesday',
  thursday = 'Thursday',
  friday = 'Friday',
  saturday ='Saturday'
};

const dayOfWeek = ChoiseDay;

function isWeekend(dayOfWeek): boolean {

  if (dayOfWeek === ChoiseDay.sunday || dayOfWeek === ChoiseDay.saturday) {

    console.log('we are resting');

    return true;
  } else {

    console.log('we are working');
    return false;

  };
};

isWeekend(dayOfWeek.saturday);


