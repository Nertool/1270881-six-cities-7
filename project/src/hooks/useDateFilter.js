export default function useDateFilter(value, format = 'month-yyyy') {
  const options = {};

  if (format === 'yyyy-mm-dd') {
    options.year = 'numeric';
    options.month = '2-digit';
    options.day = '2-digit';

    return new Intl.DateTimeFormat('fr-CA', options).format(new Date(value));
  }

  if (format === 'month-yyyy') {
    options.year = 'numeric';
    options.month = 'long';

    return new Intl.DateTimeFormat('en-US', options).format(new Date(value));
  }
}
