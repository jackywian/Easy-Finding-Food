var app = angular.module('app', [])
app.controller('ctrl', function($scope){
	$scope.data = [
		//chinese
				{
                        nama:'Curry Hor Fun',
                        jenis:'Mie',
                        jalan:'Cambridge City Square GF',
                       	img:'../picture/Chinese/OldTownWhiteCoffee/CurryHorFun.jpg',
					    url:'curhf',
                },
                {
                        nama:'Asam Laksa',
                        jenis:'Mie',
                        jalan:'Cambridge City Square GF',
						img:'../picture/chinese/OldTownWhiteCoffee/AsamLaksa.jpg',
                        url:'asal',
                },
                {
                        nama:'Prawn Meehoon Mee',
                        jenis:'Mie',
                        jalan:'Cambridge City Square GF',
						img:'../picture/Chinese/OldTownWhiteCoffee/OLDTOWNPrawnMeehoonMee.jpg',
                        url:'pramh',
                },
                {
                        nama:'Rendang Chicken Rice',
                        jenis:'Nasi',
                        jalan:'Cambridge City Square GF',
                        img:'../picture/Chinese/OldTownWhiteCoffee/OLDTOWNRendangChickenRice.jpg',
                        url:'renc',
                },
                {
                        nama:'Ipoh Chicken Hor Fun',
                        jenis:'Mie',
                        jalan:'Cambridge City Square GF',
                        img:'../picture/Chinese/OldTownWhiteCoffee/OLDTOWNIpohChickenHorFun.jpg',
                        url:'/ipoc',
                },
                {
                        nama:'Nasi Lemak Sambal Sotong',
                        jenis:'Nasi',
                        jalan:'Cambridge City Square GF',
						img:'../picture/chinese/OldTownWhiteCoffee/OLDTOWNNasiLemakwithSambalSotong.jpg',
                        url:'/onasl',
                },
				{
                        nama:'Mapo Tahu',
                        jenis:'Tahu',
                        jalan:'Jl. Taruma, Medan Petisah',
						img:'../picture/chinese/lain/MapoTahu.jpg',
                        url:'/mapt',
                },
                {
                        nama:'Mie Siram Sezhuan',
                        jenis:'Mie',
                        jalan:'Jl. Taruma, Medan Petisah',
						img:'../picture/chinese/OldTownWhiteCoffee/AsamLaksa.jpg',
                        url:'/mies',
                },
				{
                        nama:'Binjai Char Ifumie',
                        jenis:'Mie',
                        jalan:'Thamrin Plaza 7th Floor',
						img:'../picture/chinese/lain/BinjaiCharIfumie.jpg',
                        url:'/binc',
                },
                {
                        nama:'Kangkung Belacan Char Kwetiau',
                        jenis:'Mie',
                        jalan:'Thamrin Plaza 7th Floor',
						img:'../picture/chinese/lain/Kangkung Belacan.jpg',
                        url:'/chak',
                },
	];
})