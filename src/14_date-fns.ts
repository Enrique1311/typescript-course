import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 15);

const res = subDays(date, 25);

const str = format(res, 'dd/MM/yyyy');

console.log(str);
