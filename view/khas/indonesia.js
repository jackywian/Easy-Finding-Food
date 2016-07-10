var app = angular.module('app', [])
app.controller('ctrl', function($scope){
	$scope.data = [
		//indonesia
				{
						img:'../picture/indonesia/Raden/SteakAyamCrispy.jpg',
                        nama:'Steak Ayam Crispy',
                        jenis:'Steak',
                        jalan:'Jl. Taruma, Medan Petisah',
                        url:'/stea',
                },
				{
						img:'../picture/indonesia/SpringCafe/IndomieGoreng.jpg',
                        nama:'Indomie Goreng',
                        jenis:'Mie',
                        jalan:'Thamrin Plaza 7th Floor',
                        url:'/indg',
                },
                {
						img:'../picture/indonesia/SpringCafe/PattayaFriedRice.jpg',
                        nama:'Pattaya Fried Rice',
                        jenis:'Nasi',
                        jalan:'Thamrin Plaza 7th Floor',
                        url:'/patf',
                },
                {
						img:'../picture/indonesia/SpringCafe/BeefFriedRice.jpg',
                        nama:'Beef Fried Rice',
                        jenis:'Nasi',
                        jalan:'Thamrin Plaza 7th Floor',
                        url:'/beef',
                },
                {
						img:'../picture/indonesia/SpringCafe/NasiLemak.jpg',
                        nama:'Nasi Lemak',
                        jenis:'Nasi',
                        jalan:'Thamrin Plaza 7th Floor',
                        url:'/snasl',
                },
                {
						img:'../picture/indonesia/SpringCafe/NasiBistikAyam.jpg',
                        nama:'Nasi Bistik Ayam',
                        jenis:'Nasi',
                        jalan:'Thamrin Plaza 7th Floor',
                        url:'/nasba',
                },
                {
						img:'../picture/indonesia/SpringCafe/NasiAyamSaus.jpg',
                        nama:'Nasi Ayam Saus',
                        jenis:'Nasi',
                        jalan:'Thamrin Plaza 7th Floor',
                        url:'/nasas',
                },
                {
						img:'../picture/indonesia/SpringCafe/TheSpringFriedRice.jpg',
                        nama:'The Spring Fried Rice',
                        jenis:'Nasi',
                        jalan:'Thamrin Plaza 7th Floor',
                        url:'/thes',
                },
                
	];
})