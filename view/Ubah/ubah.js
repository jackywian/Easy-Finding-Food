var app = angular.module("app", ['ngStorage']),
	temp = "\n *AKAN SEGERA DIPROSES*";

app.controller("ctrl",function($scope,$localStorage){
	$scope.kosong = function(){
		$localStorage.abc.nama = '';
		$localStorage.abc.jenis = '';
		$localStorage.abc.khas = '';
		$localStorage.abc.komentar = '';
	}
	
	$scope.$storage = $localStorage.$default({abc:{},kesalahan:[]});
	//delete $localStorage.abc;  delete $localStorage.kesalahan;
	$scope.click = function(){
		if($scope.$storage.abc.nama != '' && $scope.$storage.abc.khas != '' && $scope.$storage.abc.jenis != '' && $scope.$storage.abc.komentar != '')
			{
				$scope.$storage.kesalahan.push
				({
					nama:$scope.$storage.abc.nama,
					jenis:$localStorage.abc.jenis,
					khas:$localStorage.abc.khas,
					komentar:$localStorage.abc.komentar
				});
				$scope.kosong();
				alert('Terima Kasih atas informasi yang sudah diberitahukan kepada kami ..');
			}
		if($localStorage.kesalahan==null||$localStorage.kesalahan.length == 0){
			temp="";
			alert('Daftar Kesalahan Kosong Akan Ditampilkan\nTidak Ada Data yang diberikan');
		}

		alert("Sekarang terdapat "+ $localStorage.kesalahan.length + " kesalahan informasi makanan"+temp);
			
		}
	$scope.tampung = [];
	for(var i = 0; i < $localStorage.kesalahan.length; i++){
		$scope.tampung.push(i);	
	}
	
})