var app = angular.module("app", ['ngStorage']);

app.controller("ctrl",function($scope,$localStorage){
	$scope.kosong = function(){
		$localStorage.abc.nama = '';
		$localStorage.abc.jenis = '';
		$localStorage.abc.khas = '';
		$localStorage.abc.komentar = '';
	}
	
	$scope.$storage = $localStorage.$default({abc:{},a:[]});
	//delete $localStorage.a; delete $localStorage.abc;
	$scope.click = function(){
		if($scope.$storage.abc.nama != '' && $scope.$storage.abc.khas != '' && $scope.$storage.abc.jenis != '' && $scope.$storage.abc.komentar != '')
			{
				$scope.$storage.a.push
				({
					nama:$scope.$storage.abc.nama,
					jenis:$localStorage.abc.jenis,
					khas:$localStorage.abc.khas,
					komentar:$localStorage.abc.komentar
				});
				$scope.kosong();
			}
			alert('Terima Kasih atas informasi yang sudah diberitahukan kepada kami ..');
		}
	$scope.tampung = [];
	for(var i = 0; i < $localStorage.a.length; i++){
		$scope.tampung.push(i);	
	}
	alert($scope.$storage.a.length);
	alert($scope.tampung.length);
})