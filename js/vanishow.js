function VANISHOW(selector, settings) {
	var _defaults = {};
	this.settings = Object.assign({}, _defaults, settings);

	this.selector = selector;
	this.mainEl = document.querySelector(selector);

	this.start();
}

VANISHOW.prototype = {
	start: function() {
		console.log(document.querySelector(this.selector + ' img').offsetWidth);
		this.arrows();
	},

	arrows: function() {
		var leftArrow = document.createElement('div'),
			rightArrow = document.createElement('div'),
			_this = this;

		leftArrow.innerHTML = '<';
		rightArrow.innerHTML = '>';

		leftArrow.id = 'vanishow-prev';
		rightArrow.id = 'vanishow-next';

		this.mainEl.parentNode.appendChild(leftArrow);
		this.mainEl.parentNode.appendChild(rightArrow);
	},

	slideTo: function(position) {
		this.mainEl.style.transform = 'translateX('+position+'px)';
	}
}

window.onload = function () {
	var slide = new VANISHOW('#vanishow', {
		slides: 1
	});
};