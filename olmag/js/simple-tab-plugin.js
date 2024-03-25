(function () {
	this.Tabs = function () {
		let defaults = {
			titleContainer: ".def",
			title: ".def",
			content: ".def",
		};
		this.options = defaults;

		if (arguments[0] && typeof arguments[0] === "object") {
			this.options = extend(defaults, arguments[0]);
		}

		this.start();
	};

	Tabs.prototype.start = function () {
		let $titleContainer = dom.dqsa(this.options.titleContainer);
		let $title = dom.dqsa(this.options.title);
		let $content = dom.dqsa(this.options.content);

		if (!$titleContainer.length || !$title.length || !$content.length) return;

		setData($title);
		setData($content);
		dom.hideAll($content);

		// Просто отметка
		$titleContainer.forEach((titleC) => {
			titleC.addEventListener("click", (e) => {
				const target = e.target;
				const count = target.dataset.count - 1;

				if (target.closest(this.options.title)) {
					dom.hideAll($content, count);
					dom.removeClassAll($title, "active");
					e.target.classList.add("active");
				}
			});
		});
	};

	function setData(arr) {
		let i = 1;
		arr.forEach((item) => {
			item.dataset.count = i++;
		});
	}

	function extend(defaults, options) {
		const extended = {};

		Object.keys(defaults).forEach((key) => {
			extended[key] = defaults[key];
		});
		Object.keys(options).forEach((key) => {
			extended[key] = options[key];
		});

		return extended;
	}

	const dom = {
		dqs(selector) {
			return document.querySelector(selector);
		},
		dqsa(selector) {
			return document.querySelectorAll(selector);
		},
		hideAll(arr, count = 0) {
			arr.forEach((item) => {
				item.style.display = "none";
			});
			arr[count].style.display = "block";
		},
		removeClassAll(arr, className) {
			arr.forEach((item) => {
				item.classList.remove(className);
			});
		},
	};
})();
