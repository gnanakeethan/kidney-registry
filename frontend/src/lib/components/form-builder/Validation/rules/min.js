export function min(val, args) {
	const minValue = parseFloat(args[0]);
	val = val ? val : '';
	const value = isNaN(val) ? val.length : parseFloat(val);
	return value >= minValue;
}

export function minlen(val, args) {
	const minValue = parseFloat(args[0]);
	val = val ? val : '';
	console.log(val.length);
	return val.length >= minValue;
}
