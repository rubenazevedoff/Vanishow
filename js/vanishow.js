function VANISHOW(selector, settings) {
	var _defaults = {
		arrows: false,
		arrowsText: false
	};

	this.settings = Object.assign({}, _defaults, settings);

	this.selector = selector;

	this.mainEl = document.querySelector(selector);
	this.childs = document.querySelectorAll(this.selector + ' img');

	this.current = 0;
	this.eachWidth = this.childs[0].offsetWidth;
	this.slideLength = this.childs.length;
	
	this.start();
}

VANISHOW.prototype = {
	start: function() {
		if(this.settings.arrows) {
			this.arrows();
		}
	},

	arrows: function() {
		var leftArrow = document.createElement('div'),
			rightArrow = document.createElement('div'),
			_this = this;

		if(this.settings.arrowsText) {
			leftArrow.innerHTML = this.settings.arrowsText[0];
			rightArrow.innerHTML = this.settings.arrowsText[1];
		}else{
			leftArrow.innerHTML = '<';
			rightArrow.innerHTML = '>';
		}
	
		leftArrow.id = 'vanishow-prev';
		rightArrow.id = 'vanishow-next';

		this.mainEl.parentNode.appendChild(leftArrow);
		this.mainEl.parentNode.appendChild(rightArrow);

		leftArrow.addEventListener('click', function (e) {
			_this.slideTo(_this.current-1);
		});
		rightArrow.addEventListener('click', function (e) {
			_this.slideTo(_this.current+1);
		});
	},

	slideTo: function(index) {
		if(index < 0) index = this.slideLength-1;
		if(index >= this.slideLength) index = 0;

		var newPosition = (-this.eachWidth * index);
		this.mainEl.style.transform = 'translateX('+newPosition+'px)';
		this.current = index;
	}
}

window.onload = function () {
	var slide = new VANISHOW('#vanishow', {
		arrows: true,
		arrowsText: ['Prev', 'Next']
	});
};