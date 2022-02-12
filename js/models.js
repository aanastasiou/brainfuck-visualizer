Backbone.Model.prototype.increase = function (key, addition) {
	this.set(key, this.get(key) + addition)
};

var Cell = Backbone.Model.extend({
	defaults: {
		value: 0,
		wordlength: 8
	},
	inc: function (c) {
		this.set("value", (this.get("value") + c) % (1 << this.get("wordlength")));
	},
	dec: function (c) {
		this.set("value", (this.get("value") - c) % (1 << this.get("wordlength")));
	},
	put: function (c) {
		this.set("value", c.charCodeAt(0));
	},
	char: function () {
		return String.fromCharCode(this.get("value"))
	}
});

var Tape = Backbone.Collection.extend({
	model: Cell
});

var Pointer = Backbone.Model.extend({
	defaults: {
		index: 0
	},
	left: function (c) {
		this.increase("index", -c);
	},
	right: function (c) {
		this.increase("index",  c);
	}
});
