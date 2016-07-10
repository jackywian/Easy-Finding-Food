var app = angular.module('app', [])
app.controller('ctrl', function($scope){
	$scope.data = [
		//western
				{
						img:'../picture/western/SpringCafe/BarbarianPizza.jpg',
                        nama:'Barbarian Pizza',
                        jenis:'Pizza',
                        jalan:'Thamrin Plaza 7th Floor',
                        url:'/barp',
                },
                {
						img:'../picture/western/SpringCafe/CaesarSalad.jpg',
                        nama:'Caesar Salad',
                        jenis:'Salad',
                        jalan:'Thamrin Plaza 7th Floor',
                        url:'/caes',
                },
                {
						img:'../picture/western/SpringCafe/ChickenGordonBleu.jpg',
                        nama:'Chicken Gordon Bleu',
                        jenis:'Steak',
                        jalan:'Thamrin Plaza 7th Floor',
                        url:'/chig',
                },
                {
						img:'../picture/western/SpringCafe/GrillChicken.jpg',
                        nama:'Grill Chicken',
                        jenis:'Steak',
                        jalan:'Thamrin Plaza 7th Floor',
                        url:'/spgric',
                },
                {
						img:'../picture/western/SpringCafe/GrillSalmonofBBQ.jpg',
                        nama:'Grill Salmon of BBQ',
                        jenis:'Steak',
                        jalan:'Thamrin Plaza 7th Floor',
                        url:'/grisb',
                },
                {
						img:'../picture/western/SpringCafe/GrillSalmonofJalambalaya.jpg',
                        nama:'Grill Salmon of Jalambalaya',
                        jenis:'Steak',
                        jalan:'Thamrin Plaza 7th Floor',
                        url:'/grisj',
                },
                {
						img:'../picture/western/SpringCafe/Macaroni.jpg',
                        nama:'Marcaroni',
                        jenis:'Pasta',
                        jalan:'Thamrin Plaza 7th Floor',
                        url:'/mac',
                },
                {
						img:'../picture/western/SpringCafe/Spaghetti.jpg',
                        nama:'Spaghetti',
                        jenis:'Pasta',
                        jalan:'Thamrin Plaza 7th Floor',
                        url:'/spa',
                },
	];
})