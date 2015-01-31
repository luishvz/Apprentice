var MyBadSingleton = (function () {
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
			instance = init();

			return instance;
		}
	};

})();

console.log(MyBadSingleton.getInstance);

module.exports = MyBadSingleton;