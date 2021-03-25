type Argument = Array<any> | object |any
export const isEqual = function (value: Argument, other: Argument): boolean {
	// Get the value type
	var type = Object.prototype.toString.call(value);

	if (type !== Object.prototype.toString.call(other)) return false;

  if(type === '[object String]' && Object.prototype.toString.call(other) === '[object String]'){
		return value === other
	}

	if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

	var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
	var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
	if (valueLen !== otherLen) return false;

	var compare = function (item1: any, item2: any) {

		var itemType = Object.prototype.toString.call(item1);

		if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
			if (!isEqual(item1, item2)) return false;
		} else {

			if (itemType !== Object.prototype.toString.call(item2)) return false;

			if (itemType === '[object Function]') {
				if (item1.toString() !== item2.toString()) return false;
			} else {
				if (item1 !== item2) return false;
			}

		}
	};
	// Compare properties
	if (type === '[object Array]') {
		for (var i = 0; i < valueLen; i++) {
			if (compare(value[i], other[i]) === false) return false;
		}
	} else {
		for (var key in value) {
			if (value.hasOwnProperty(key)) {
				if (compare(value[key], other[key]) === false) return false;
			}
		}
	}
	return true;
};
