var myGoodSingleton = (function () {
	var instance;

	var init = function() {

		var privateRandomNumber = Math.random();

		return {
			randomNumber: function () {
				return privateRandomNumber;
			}
		}
	};

	return {
		getInstance: function () {
			if (!instance) {

				instance = init();
			};
			

			return instance;
		}
	};
})();

module.exports = myGoodSingleton;