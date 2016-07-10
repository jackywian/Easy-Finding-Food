var app = angular.module('app', ['ngStorage'])
app.controller('ctrl', function($scope,$localStorage){
        //search

        $scope.$storage = $localStorage.$default({x:'', b:[], search:{}, data:[]});
        $scope.delete = function(){
                delete $scope.$storage.x;
        }
        $scope.nama = function(){
                delete $scope.$storage.search.nama;
        }
        $scope.jalan = function(){
                delete $scope.$storage.search.jalan;
        }
        $scope.jenis = function(){
                delete $scope.$storage.search.jenis;
        }
        
        $scope.click = function(){
                $scope.hide = false;
                $scope.$storage.data = [];
                for(var i = 0; i < $scope.chinese.length; i++){
                        $scope.$storage.data.push($scope.chinese[i]);
                }
                
                if($scope.$storage.x != null){
                        if($scope.$storage.b[0] != null)
                        {
                                $scope.$storage.b[0] = $scope.$storage.x;
                                $scope.nama(); $scope.jenis(); $scope.delete(); $scope.jalan();
                        }
                        else{
                                $scope.$storage.b.push($scope.$storage.x);
                                $scope.delete();
                        }
                }
                
                if($scope.list == $scope.item[0]){
                       if($scope.$storage.b != '' || $scope.$storage.b != null){
                               if($scope.$storage.search != null)
                               {
                                       $scope.nama(); $scope.jenis(); 
                                       $scope.$storage.search.jalan = $scope.$storage.b[0];
                               }
                       }
                }
                
                else if($scope.list == $scope.item[1]){
                      if($scope.$storage.b != '' || $scope.$storage.b != null){
                               if($scope.$storage.search != null)
                               {
                                       $scope.jalan(); $scope.jenis(); 
                                       $scope.$storage.search.nama = $scope.$storage.b[0];
                               }
                       }
                }
                else if($scope.list == $scope.item[2]){
                        if($scope.$storage.b != '' || $scope.$storage.b != null){
                               if($scope.$storage.search != null)
                               {
                                       $scope.nama(); $scope.jalan(); 
                                       $scope.$storage.search.jenis = $scope.$storage.b[0];
                               }
                       }
                }
                                             
                
                if($scope.harga == $scope.item1[0])
                {
                        for(var i = 0; i < $scope.$storage.data.length ; i++){
                                if(Number($scope.$storage.data[i].harga) > 10.000){
                                  delete $scope.$storage.data[i];
                                }
                        }
                        
                }
                else if($scope.harga == $scope.item1[1])
                {
                        for(var i = 0; i < $scope.$storage.data.length ; i++){
                                if(Number($scope.$storage.data[i].harga) >= 10.000 && Number($scope.$storage.data[i].harga) <= 20.000){
                                        if(Number($scope.$storage.data[i].harga) > 20.000){
                                                delete $scope.$storage.data[i];
                                        }
                                }
                                else if(Number($scope.$storage.data[i].harga) < 10.000){
                                                delete $scope.$storage.data[i];
                                }
                                else if(Number($scope.$storage.data[i].harga) > 20.000){
                                                delete $scope.$storage.data[i];
                                }
                        }
                        
                }
                else if($scope.harga == $scope.item1[2])
                {
                        for(var i = 0; i < $scope.$storage.data.length ; i++){
                                if(Number($scope.$storage.data[i].harga) >= 20.000 && Number($scope.$storage.data[i].harga) <= 50.000){
                                        if(Number($scope.$storage.data[i].harga) > 50.000){
                                                delete $scope.$storage.data[i];
                                        }
                                }
                                else if(Number($scope.$storage.data[i].harga) < 20.000){
                                                delete $scope.$storage.data[i];
                                }
                                else if(Number($scope.$storage.data[i].harga) > 50.000){
                                                delete $scope.$storage.data[i];
                                }
                        }
                        
                }
                else if($scope.harga == $scope.item1[3])
                {
                        for(var i = 0; i < $scope.$storage.data.length ; i++){
                                if(Number($scope.$storage.data[i].harga) <= 50.000){
                                  delete $scope.$storage.data[i];
                                }
                        }
                        
                }
        }
        //
        
        //pilihan
        $scope.item = ["Lokasi","Nama Makanan","Jenis Makanan"];
        $scope.item1 = ["< Rp. 10.000","Rp. 10.000 - Rp. 20.000","Rp. 20.000 - Rp. 50.000","> Rp. 50.000"];
        $scope.harga = "Harga";
        $scope.list = "Kategori"; 
        
        $scope.show = false;
        $scope.showdtl = function(){
                $scope.show = ! $scope.show;
        }
        
        $scope.show1 = false;
        $scope.showdtl1 = function(){
                $scope.show1 = ! $scope.show1;
        }
        
        $scope.setaction = function(action){
                $scope.list = action;
                $scope.show = false;
        }
        $scope.setaction1 = function(action){
                $scope.harga = action;
                $scope.show1 = false;
        }
        //
        //tampilan & data
        $scope.hide = false;
        $scope.chinese = [ //scope.chinese seharusnya merupakan jenis khas makanan.
                //Chinese - Cambridge : 5
                {
                        tempat:'Old Town White Coffee',
                        nama:'Curry Hor Fun',
                        harga:'45.000',
                        khas:'Chinese',
                        jenis:'Mie',
                        jalan:'Cambridge City Square GF G09 & G22, Jln. S.Parman No. 217',
                        url:'/curhf',
                },
                {
                        tempat:'Old Town White Coffee',
                        nama:'Ipoh Chicken Hor Fun',
                        harga:'45.000',
                        khas : 'Chinese',
                        jenis:'Mie',
                        jalan:'Cambridge City Square GF G09 & G22, Jln. S.Parman No. 217',
                        url:'/ipoc',
                },
                {
                        tempat:'Old Town White Coffee',
                        nama:'Asam Laksa',
                        harga:'45.000',
                        khas:'Chinese',
                        jenis:'Mie',
                        jalan:'Cambridge City Square GF G09 & G22, Jln. S.Parman No. 217',
                        url:'/asal',
                },
                {
                        tempat:'Old Town White Coffee',
                        nama:'Prawn Meehoon Mee',
                        harga:'45.000',
                        khas:'Chinese',
                        jenis:'Mie',
                        jalan:'Cambridge City Square GF G09 & G22, Jln. S.Parman No. 217',
                        url:'/pramh',
                },
                {
                        tempat:'Old Town White Coffee',
                        nama:'Rendang Chicken Rice',
                        harga:'47.000',
                        khas:'Chinese',
                        jenis:'Nasi',
                        jalan:'Cambridge City Square GF G09 & G22, Jln. S.Parman No. 217',
                        url:'renc',
                },
                {
                        tempat:'Old Town White Coffee',
                        nama:'Nasi Lemak Sambal Sotong',
                        harga:'46.000',
                        khas:'Chinese',
                        jenis:'Nasi',
                        jalan:'Cambridge City Square GF G09 & G22, Jln. S.Parman No. 217',
                        url:'/onasl',
                },
                
                //Chinese - Raden : 2, Indonesian - Raden : 1
                {
                        tempat:"Raden's Steak",
                        nama:'Mapo Tahu',
                        harga:'14.500',
                        khas:'Chinese',
                        jenis:'Tahu',
                        jalan:'Jl. Taruma, Medan Petisah',
                        url:'/mapt',
                },
                {
                        tempat:"Raden's Steak",
                        nama:'Mie Siram Sezhuan',
                        harga:'21.000',
                        khas:'Chinese',
                        jenis:'Mie',
                        jalan:'Jl. Taruma, Medan Petisah',
                        url:'/mies',
                },
                {
                        tempat:"Raden's Steak",
                        nama:'Steak Ayam Crispy',
                        harga:'18.000',
                        khas:'Indonesian',
                        jenis:'Steak',
                        jalan:'Jl. Taruma, Medan Petisah',
                        url:'/stea',
                },
                
                //The Spring Cafe & Resto
                // Chinese -  : 2
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'Binjai Char Ifumie',
                        harga:'26.363',
                        khas:'Chinese',
                        jenis:'Mie',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'/binc',
                },
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'Kangkung Belacan Char Kwetiau',
                        harga:'26.363',
                        khas:'Chinese',
                        jenis:'Mie',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'/chak',
                },  
                //indonesian : 7
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'Indomie Goreng',
                        harga:'18.181',
                        khas:'Indonesia',
                        jenis:'Mie',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'/indg',
                },
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'Pattaya Fried Rice',
                        harga:'29.545',
                        khas:'Indonesia',
                        jenis:'Nasi',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'/patf',
                },
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'Beef Fried Rice',
                        harga:'31.818',
                        khas:'Indonesia',
                        jenis:'Nasi',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'/beef',
                },
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'Nasi Lemak',
                        harga:'24.545',
                        khas:'Indonesia',
                        jenis:'Nasi',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'/snasl',
                },
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'Nasi Bistik Ayam',
                        harga:'31.818',
                        khas:'Indonesia',
                        jenis:'Nasi',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'/nasba',
                },
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'Nasi Ayam Saus',
                        harga:'31.818',
                        khas:'Indonesia',
                        jenis:'Nasi',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'/nasas',
                },
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'The Spring Fried Rice',
                        harga:'31.818',
                        khas:'Indonesia',
                        jenis:'Nasi',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'/thes',
                },
                //western : 8
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'Barbarian Pizza',
                        harga:'30.909',
                        khas:'Western',
                        jenis:'Pizza',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'/barp',
                },
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'Caesar Salad',
                        harga:'25.454',
                        khas:'Western',
                        jenis:'Salad',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'/caes',
                },
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'Chicken Gordon Bleu',
                        harga:'39.090',
                        khas:'Western',
                        jenis:'Steak',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'/chig',
                },
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'Grill Chicken',
                        harga:'37.202',
                        khas:'Western',
                        jenis:'Steak',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'/spgric',
                },
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'Grill Salmon of BBQ',
                        harga:'59.545',
                        khas:'Western',
                        jenis:'Steak',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'/grisb',
                },
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'Grill Salmon of Jalambalaya',
                        harga:'64.545',
                        khas:'Western',
                        jenis:'Steak',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'grisj',
                },
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'Marcaroni',
                        harga:'27.272',
                        khas:'Western',
                        jenis:'Pasta',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'/mac',
                },
                {
                        tempat:"The Spring Cafe & Resto",
                        nama:'Spaghetti',
                        harga:'27.272',
                        khas:'Western',
                        jenis:'Pasta',
                        jalan:'Jln. MH Thamrin no.75 R, Thamrin Plaza 7th Floor',
                        url:'/spa',
                },
                
                //Dr's Sushi
                //Japanese : 7
                {
                        tempat:"Dr's Sushi",
                        nama:'Chicken Katsu Curry Rice',
                        harga:'45.000',
                        khas:'Japanese',
                        jenis:'Nasi',
                        jalan:'Jl. Letjen S Parman No. 308, Medan',
                        url:'/chikcr',
                },
                {
                        tempat:"Dr's Sushi",
                        nama:'Sukiyaki Nabe',
                        harga:'150.000',
                        khas:'Japanese',
                        jenis:'Sukiyaki',
                        jalan:'Jl. Letjen S Parman No. 308, Medan',
                        url:'/sukn',
                },
                {
                        tempat:"Dr's Sushi",
                        nama:'Spicy Tori Karaage',
                        harga:'45.000',
                        khas:'Japanese',
                        jenis:'Karaage',
                        jalan:'Jl. Letjen S Parman No. 308, Medan',
                        url:'/spitk',
                },
                {
                        tempat:"Dr's Sushi",
                        nama:'Miso Ramen',
                        harga:'50.000',
                        khas:'Japanese',
                        jenis:'Ramen',
                        jalan:'Jl. Letjen S Parman No. 308, Medan',
                        url:'/misr',
                },
                {
                        tempat:"Dr's Sushi",
                        nama:'Dr Sushi Sashimi Set',
                        harga:'110.000',
                        khas:'Japanese',
                        jenis:'Sushi',
                        jalan:'Jl. Letjen S Parman No. 308, Medan',
                        url:'/susss',
                },
                {
                        tempat:"Dr's Sushi",
                        nama:'Dr Sushi Volcano Roll',
                        harga:'48.000',
                        khas:'Japanese',
                        jenis:'Sushi',
                        jalan:'Jl. Letjen S Parman No. 308, Medan',
                        url:'/volr',
                },
                {
                        tempat:"Dr's Sushi",
                        nama:'Saba Shio Yaki',
                        harga:'52.000',
                        khas:'Japanese',
                        jenis:'Ikan',
                        jalan:'Jl. Letjen S Parman No. 308, Medan',
                        url:'/sabsy',
                },
                
                //SushiTei
                //Japanese : 7
                
                {
                        tempat:"Sushi Tei",
                        nama:'Maca Ice Cream',
                        harga:'28.000',
                        khas:'Japanese',
                        jenis:'Ice Cream',
                        jalan:'Jl. Kh. Zainul Arifin No. 7, Sun Plaza LG A-01',
                        url:'/maci',
                },
                {
                        tempat:"Sushi Tei",
                        nama:'Aburi Salmon Roll',
                        harga:'70.000',
                        khas:'Japanese',
                        jenis:'Sushi',
                        jalan:'Jl. Kh. Zainul Arifin No. 7, Sun Plaza LG A-01',
                        url:'/abusr',
                },
                {
                        tempat:"Sushi Tei",
                        nama:'Crunchy Lobster Roll',
                        harga:'29.000',
                        khas:'Japanese',
                        jenis:'Sushi',
                        jalan:'Jl. Kh. Zainul Arifin No. 7, Sun Plaza LG A-01',
                        url:'/crul',
                },
                {
                        tempat:"Sushi Tei",
                        nama:'Grilled Chicken Ramen',
                        harga:'58.000',
                        khas:'Japanese',
                        jenis:'Ramen',
                        jalan:'Jl. Kh. Zainul Arifin No. 7, Sun Plaza LG A-01',
                        url:'/sgric',
                },
                {
                        tempat:"Sushi Tei",
                        nama:'Salmon Aburi Crispy',
                        harga:'29.000',
                        khas:'Japanese',
                        jenis:'Sushi',
                        jalan:'Jl. Kh. Zainul Arifin No. 7, Sun Plaza LG A-01',
                        url:'/sala',
                },
                {
                        tempat:"Sushi Tei",
                        nama:'Tuna Salad Crispy Mentai',
                        harga:'59.000',
                        khas:'Japanese',
                        jenis:'Sushi',
                        jalan:'Jl. Kh. Zainul Arifin No. 7, Sun Plaza LG A-01',
                        url:'/tuns',
                },
                
                //Marugame Udon
                //Japanese : 4
                {
                        tempat:"Marugame Udon",
                        nama:'Niku Udon',
                        harga:'47.000',
                        khas:'Japanese',
                        jenis:'Udon',
                        jalan:'Jl. Kh. Zainul Arifin No.7, Sun Plaza LG A-06,07,08',
                        url:'/niku',
                },
                {
                        tempat:"Marugame Udon",
                        nama:'Zaru Udon',
                        harga:'33.000',
                        khas:'Japanese',
                        jenis:'Udon',
                        jalan:'Jl. Kh. Zainul Arifin No.7, Sun Plaza LG A-06,07,08',
                        url:'/zaru',
                },
                {
                        tempat:"Marugame Udon",
                        nama:'Tori Baitang Udon',
                        harga:'45.000',
                        khas:'Japanese',
                        jenis:'Udon',
                        jalan:'Jl. Kh. Zainul Arifin No.7, Sun Plaza LG A-06,07,08',
                        url:'/torb',
                },
                {
                        tempat:"Marugame Udon",
                        nama:'Ontama Udon',
                        harga:'40.000',
                        khas:'Japanese',
                        jenis:'Udon',
                        jalan:'Jl. Kh. Zainul Arifin No.7, Sun Plaza LG A-06,07,08',
                        url:'/ontu',
                },
                
                //Renjiro kuu
                //Japanese : 4
                {
                        tempat:"Renjiro Kuu",
                        nama:'Beef Teriyaki Don',
                        harga:'32.000',
                        khas:'Japanese',
                        jenis:'Nasi',
                        jalan:'Jl. Jend. Gatot Subroto No. 30, Medan Fair Plaza 2nd Floor',
                        url:'/beet',
                },
                {
                        tempat:"Renjiro Kuu",
                        nama:'Renjirokuu Chicken Ramen',
                        harga:'34.000',
                        khas:'Japanese',
                        jenis:'Ramen',
                        jalan:'Jl. Jend. Gatot Subroto No. 30, Medan Fair Plaza 2nd Floor',
                        url:'/chir',
                },
                {
                        tempat:"Renjiro Kuu",
                        nama:'Kani Roll & Shrimp Roll',
                        harga:'25.000',
                        khas:'Japanese',
                        jenis:'Nasi',
                        jalan:'Jl. Jend. Gatot Subroto No. 30, Medan Fair Plaza 2nd Floor',
                        url:'/kanr',
                },
                {
                        tempat:"Renjiro Kuu",
                        nama:'Spicy Yaki Ramen',
                        harga:'34.000',
                        khas:'Japanese',
                        jenis:'Mie',
                        jalan:'Jl. Jend. Gatot Subroto No. 30, Medan Fair Plaza 2nd Floor',
                        url:'/spiyr',
                },
                
                //Jittlada Thai
                // Lain-lain , Thailand : 6
                {
                        tempat:"Jittlada Thai Cuisine",
                        nama:'Crab Cake',
                        harga:'39.500',
                        khas:'Thailand',
                        jenis:'Dessert',
                        jalan:'Cambridge City Square G Fl Unit G 11, Jln. S. Parman No. 217',
                        url:'/crac',
                },
                {
                        tempat:"Jittlada Thai Cuisine",
                        nama:'Fish Cake',
                        harga:'59.500',
                        khas:'Thailand',
                        jenis:'Dessert',
                        jalan:'Cambridge City Square G Fl Unit G 11, Jln. S. Parman No. 217',
                        url:'/fisc',
                },
                {
                        tempat:"Jittlada Thai Cuisine",
                        nama:'Papaya Salad',
                        harga:'39.500',
                        khas:'Thailand',
                        jenis:'Salad',
                        jalan:'Cambridge City Square G Fl Unit G 11, Jln. S. Parman No. 217',
                        url:'/paps',
                },
                {
                        tempat:"Jittlada Thai Cuisine",
                        nama:'Soft Shell Crab With Mango Salad',
                        harga:'59.500',
                        khas:'Thailand',
                        jenis:'Salad',
                        jalan:'Cambridge City Square G Fl Unit G 11, Jln. S. Parman No. 217',
                        url:'/sofs',
                },
                {
                        tempat:"Jittlada Thai Cuisine",
                        nama:'Vermicelli Salad',
                        harga:'59.500',
                        khas:'Thailand',
                        jenis:'Salad',
                        jalan:'Cambridge City Square G Fl Unit G 11, Jln. S. Parman No. 217',
                        url:'/vers',
                },
                {
                        tempat:"Jittlada Thai Cuisine",
                        nama:'Wing Bean Salad',
                        harga:'59.500',
                        khas:'Thailand',
                        jenis:'Salad',
                        jalan:'Cambridge City Square G Fl Unit G 11, Jln. S. Parman No. 217',
                        url:'/winb',
                },
        ];
        
        
        
        
});