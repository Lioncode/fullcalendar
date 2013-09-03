
console.log(
	formatDate(moment([ 2013, 1, 1, 7, 00 ]), 'YYYY MM t DD hh(:mm)')
);



moment.lang('fr');



var date1 = moment([ 2013, 7, 20 ]);
var date2 = moment([ 2013, 7, 22 ]);

console.log(
	formatRange(date1, date2, 'LL', ' - ', false)
);




var date1 = moment([ 2013, 7, 28 ]);
var date2 = moment([ 2013, 8, 6 ]);

console.log(
	formatRange(date1, date2, 'LL', ' - ', false)
);




var date1 = moment([ 2013, 1, 1, 2, 30 ]);
var date2 = moment([ 2013, 1, 1, 5 ]);

console.log(
	formatRange(date1, date2, 'h(:mm)t', ' - ', false)
);

console.log(
	formatRange(date1, date2, 'LLL', ' - ', false)
);




function getTinyLocalTimeFormat(date) {

	var timeFormat = date.lang().longDateFormat('LT');

	timeFormat = timeFormat.replace(/(?:([:\.]mm)|[aA])(?![^\[]*\])/g, function(m0, m1, m2) {
		if (m1) {
			return '(' + m1 + ')';
		}
		return 't';
	});

	timeFormat = timeFormat.replace(/\s+/, '');

	return timeFormat;
}

var date1 = moment([ 2013, 1, 1, 5, 45 ]);
var date2 = moment([ 2013, 1, 1, 15, 00 ]);

var format = getTinyLocalTimeFormat(date1);

console.log(
	formatRange(date1, date2, format)
);