var app = angular.module('app', [])
app.controller('ctrl', function($scope){
	$scope.data = [
		//chinese
				{
                        nama:'Curry Hor Fun',
                        jenis:'Mie',
                        jalan:'Cambridge City Square GF',
                       	img:'../picture/Chinese/OldTownWhiteCoffee/CurryHorFun.jpg',
					    url:'../item/chinese-item/makanan/OldTown_CurryHor.html',
                },
                {
                        nama:'Asam Laksa',
                        jenis:'Mie',
                        jalan:'Cambridge City Square GF',
						img:'../picture/chinese/OldTownWhiteCoffee/AsamLaksa.jpg',
                        url:'../item/chinese-item/makanan/OldTown_AsamLaksa.html',
                },
                {
                        nama:'Prawn Meehoon Mee',
                        jenis:'Mie',
                        jalan:'Cambridge City Square GF',
						img:'../picture/Chinese/OldTownWhiteCoffee/OLDTOWNPrawnMeehoonMee.jpg',
                        url:'../item/chinese-item/makanan/OldTown_PrawnMeehoon.html',
                },
                {
                        nama:'Rendang Chicken Rice',
                        jenis:'Nasi',
                        jalan:'Cambridge City Square GF',
						img:'../picture/Chinese/OldTownWhiteCoffee/OLDTOWNIpohChickenHorFun.jpg',
                        url:'../item/chinese-item/makanan/OldTown_RendangChicken.html',
                },
                {
                        nama:'Nasi Lemak Sambal Sotong',
                        jenis:'Nasi',
                        jalan:'Cambridge City Square GF',
						img:'../picture/chinese/OldTownWhiteCoffee/OLDTOWNNasiLemakwithSambalSotong.jpg',
                        url:'../item/chinese-item/makanan/OldTown_NasiLemak.html',
                },
				{
                        nama:'Mapo Tahu',
                        jenis:'Tahu',
                        jalan:'Jl. Taruma, Medan Petisah',
						img:'../picture/chinese/lain/MapoTahu.jpg',
                        url:'../item/chinese-item/makanan/Raden_MapoTahu.html',
                },
                {
                        nama:'Mie Siram Sezhuan',
                        jenis:'Mie',
                        jalan:'Jl. Taruma, Medan Petisah',
						img:'../picture/chinese/OldTownWhiteCoffee/AsamLaksa.jpg',
                        url:'../item/chinese-item/makanan/Raden_MieSiram.html',
                },
				{
                        nama:'Binjai Char Ifumie',
                        jenis:'Mie',
                        jalan:'Thamrin Plaza 7th Floor',
						img:'../picture/chinese/lain/BinjaiCharIfumie.jpg',
                        url:'../item/chinese-item/makanan/springcafe_BinjaiChar.html',
                },
                {
                        nama:'Kangkung Belacan Char Kwetiau',
                        jenis:'Mie',
                        jalan:'Thamrin Plaza 7th Floor',
						img:'../picture/chinese/lain/Kangkung Belacan.jpg',
                        url:'../item/chinese-item/makanan/springcafe_CharKwetiau.html',
                },
	];
})