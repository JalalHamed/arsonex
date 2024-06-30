const formatNumber = (
  input: string | number,
  { decimals = 2 }: { decimals?: number } = {}
): string => {
  if (input === null || input === undefined || input === '') return '';
  const inputNumber = typeof input === 'string' ? parseFloat(input) : input;
  return inputNumber
    .toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimals,
    })
    .replace(/(\.[0-9]*[1-9])0+$/, '$1');
};

export default formatNumber;
