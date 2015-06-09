(function() {
	console.log(map);
	return map.map(function(column) {
		return fallColumn(column);
	});

	function fallColumn(column) {
		var columnChanged = true;
		while (columnChanged) {
			var next = doRuleForAllPos(column);
			columnChanged = (next != column);
			column = next;
		}
		return column;
	}

	function doRuleForAllPos(column) {
		column = "." + column;
		var ret = "";
		for (var pos = 1; pos < column.length; pos++) {
			ret += doRule(column, pos);
		}
		return ret;
	}

	function doRule(column, pos) {
		var RULES = {
			// delete o and print marker
			"#o.": "`",
			"oo.": "`",
			".o.": "`",
			// print o below
			"`.o": "o",
			"`.#": "o",
			"`..": "o",
			"`.": "o",
			// remove marker
			"#`o": ".",
			"o`o": ".",
			".`o": "."
		};
		var cond = column.substr(pos - 1, 3);
		if (RULES.hasOwnProperty(cond)) {
			return RULES[cond];
		} else {
			return column.charAt(pos);
		}
	}
})();