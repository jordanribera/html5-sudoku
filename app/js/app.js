(function(){

	var app = angular.module('sudokuApp', []);

	app.controller('BoardController', ['$scope', function($scope){

		$scope.getRandomBoard = function()
		{

			var board =  []

			var row = 0;
			var col = 0;
			while (row < 9)
			{

				board.push([]);

				while (col < 9)
				{

					board[row].push(col);
					col++;

					console.log(board[row][col]);

				}

				row++;

			}

			return board;

		};

		$scope.board = $scope.getRandomBoard();

	}]);

	var mainboard = getRandomBoard();

})();