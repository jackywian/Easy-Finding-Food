var express = require('express'),
	r = express.Router(),
	ch = '/view/item/chinese-item/makanan/',
	idn = '/view/item/indonesia-item/makanan/',
	jpn = '/view/item/japanese-item/makanan/',
	lain = '/view/item/lain-item/makanan/',
	west = '/view/item/western-item/makanan/',
	router;
router = function(app){
	r.get('/', function(req, res){
		res.sendFile(__root + '/view/Homepage.html');
	});
	r.get('/search', function(req, res){
		res.sendFile(__root + '/view/search.html');
	});
	r.get('/panduan', function(req, res){
		res.sendFile(__root + '/view/panduan/panduan.html');
	});
	r.get('/western', function(req, res){
		res.sendFile(__root + '/view/khas/western.html');
	});
	r.get('/chinese', function(req, res){
		res.sendFile(__root + '/view/khas/chinese.html');
	});
	r.get('/indonesian', function(req, res){
		res.sendFile(__root + '/view/khas/indonesian.html');
	});
	r.get('/japanese', function(req, res){
		res.sendFile(__root + '/view/khas/japanese.html');
	});
	r.get('/lain', function(req, res){
		res.sendFile(__root + '/view/khas/lain.html');
	});
	r.get('/ubah', function(req, res){
		res.sendFile(__root + '/view/Ubah/ubah.html');
	});
	r.get('/salah', function(req, res){
		res.sendFile(__root + '/view/Ubah/kesalahan.html');
	});

	// Khas Chinese

	r.get('/curhf', function(req, res){
		res.sendFile(__root + ch + 'OldTown_CurryHor.html');
	});
	r.get('/asal', function(req, res){
		res.sendFile(__root + ch + 'OldTown_AsamLaksa.html');
	});
	r.get('/ipoc', function(req, res){
		res.sendFile(__root + ch + 'OldTown_IpohChicken.html');
	});
	r.get('/onasl', function(req, res){
		res.sendFile(__root + ch + 'OldTown_NasiLemak.html');
	});
	r.get('/pramh', function(req, res){
		res.sendFile(__root + ch + 'OldTown_PrawnMeehoon.html');
	});
	r.get('/renc', function(req, res){
		res.sendFile(__root + ch + 'OldTown_RendangChicken.html');
	});
	r.get('/mapt', function(req, res){
		res.sendFile(__root + ch + 'Raden_MapoTahu.html');
	});
	r.get('/mies', function(req, res){
		res.sendFile(__root + ch + 'Raden_MieSiram.html');
	});
	r.get('/binc', function(req, res){
		res.sendFile(__root + ch + 'springcafe_BinjaiChar.html');
	});
	r.get('/chak', function(req, res){
		res.sendFile(__root + ch + 'springcafe_CharKwetiau.html');
	});

	// Khas indonesia
	
	r.get('/stea', function(req, res){
		res.sendFile(__root + idn + 'Raden_SteakAyam.html');
	});
	r.get('/beef', function(req, res){
		res.sendFile(__root + idn + 'springcafe_BeefFried.html');
	});
	r.get('/indg', function(req, res){
		res.sendFile(__root + idn + 'springcafe_IndomieGoreng.html');
	});
	r.get('/nasas', function(req, res){
		res.sendFile(__root + idn + 'springcafe_NasiAyamSaus.html');
	});
	r.get('/nasba', function(req, res){
		res.sendFile(__root + idn + 'springcafe_NasiBistikAyam.html');
	});
	r.get('/snasl', function(req, res){
		res.sendFile(__root + idn + 'springcafe_NasiLemak.html');
	});
	r.get('/patf', function(req, res){
		res.sendFile(__root + idn + 'springcafe_PattayaFried.html');
	});
	r.get('/thes', function(req, res){
		res.sendFile(__root + idn + 'springcafe_TheSpring.html');
	});
	

	// Khas Japanese

	r.get('/chikcr', function(req, res){
		res.sendFile(__root + jpn + 'DrsSushi_ChickenKatsuCurryRice.html');
	});
	r.get('/susss', function(req, res){
		res.sendFile(__root + jpn + 'DrsSushi_DrSushiSashimiSet.html');
	});
	r.get('/volr', function(req, res){
		res.sendFile(__root + jpn + 'DrsSushi_DrSushiVolcanoRoll.html');
	});
	r.get('/misr', function(req, res){
		res.sendFile(__root + jpn + 'DrsSushi_MisoRamen.html');
	});
	r.get('/sabsy', function(req, res){
		res.sendFile(__root + jpn + 'DrsSushi_SabaShioYaki.html');
	});
	r.get('/spitk', function(req, res){
		res.sendFile(__root + jpn + 'DrsSushi_SpicyToriKaraage.html');
	});
	r.get('/sukn', function(req, res){
		res.sendFile(__root + jpn + 'DrsSushi_SukiyakiNabe.html');
	});
	r.get('/niku', function(req, res){
		res.sendFile(__root + jpn + 'MarugameUdon_NikuUdon.html');
	});
	r.get('/ontu', function(req, res){
		res.sendFile(__root + jpn + 'MarugameUdon_OntamaUdon.html');
	});
	r.get('/torb', function(req, res){
		res.sendFile(__root + jpn + 'MarugameUdon_ToriBaitang.html');
	});
	r.get('/zaru', function(req, res){
		res.sendFile(__root + jpn + 'MarugameUdon_ZaruUdon.html');
	});
	r.get('/beet', function(req, res){
		res.sendFile(__root + jpn + 'renjirokuu_BeefTeriyaki.html');
	});
	r.get('/chir', function(req, res){
		res.sendFile(__root + jpn + 'renjirokuu_ChickenRamen.html');
	});
	r.get('/kanr', function(req, res){
		res.sendFile(__root + jpn + 'renjirokuu_kaniroll.html');
	});
	r.get('/spiyr', function(req, res){
		res.sendFile(__root + jpn + 'renjirokuu_SpicyYakiRamen.html');
	});
	r.get('/abusr', function(req, res){
		res.sendFile(__root + jpn + 'SushiTei_AburiSalmonRoll.html');
	});
	r.get('/crul', function(req, res){
		res.sendFile(__root + jpn + 'SushiTei_CrunchyLobster.html');
	});
	r.get('/sgric', function(req, res){
		res.sendFile(__root + jpn + 'SushiTei_GrilledChicken.html');
	});
	r.get('/maci', function(req, res){
		res.sendFile(__root + jpn + 'SushiTei_MacaIce.html');
	});
	r.get('/sala', function(req, res){
		res.sendFile(__root + jpn + 'SushiTei_SalmonAburi.html');
	});
	r.get('/tuns', function(req, res){
		res.sendFile(__root + jpn + 'SushiTei_TunaSalad.html');
	});

	// Khas Lain-Lain

	r.get('/crac', function(req, res){
		res.sendFile(__root + lain + 'jittlada_CrabCake.html');
	});
	r.get('/fisc', function(req, res){
		res.sendFile(__root + lain + 'jittlada_FishCake.html');
	});
	r.get('/paps', function(req, res){
		res.sendFile(__root + lain + 'jittlada_PapayaSalad.html');
	});
	r.get('/sofs', function(req, res){
		res.sendFile(__root + lain + 'jittlada_SoftShell.html');
	});
	r.get('/vers', function(req, res){
		res.sendFile(__root + lain + 'jittlada_VermicelliSalad.html');
	});
	r.get('/winb', function(req, res){
		res.sendFile(__root + lain + 'jittlada_WingBean.html');
	});

	//khas Western

	r.get('/barp', function(req, res){
		res.sendFile(__root + west + 'springcafe_BarbarianPizza.html');
	});
	r.get('/caes', function(req, res){
		res.sendFile(__root + west + 'springcafe_CaesarSalad.html');
	});
	r.get('/chig', function(req, res){
		res.sendFile(__root + west + 'springcafe_ChickenGordon.html');
	});
	r.get('/spgric', function(req, res){
		res.sendFile(__root + west + 'springcafe_GrillChicken.html');
	});
	r.get('/grisb', function(req, res){
		res.sendFile(__root + west + 'springcafe_GrillSalmonofBBQ.html');
	});
	r.get('/grisj', function(req, res){
		res.sendFile(__root + west + 'springcafe_GrillSalmonofJalambalaya.html');
	});
	r.get('/mac', function(req, res){
		res.sendFile(__root + west + 'springcafe_Macaroni.html');
	});
	r.get('/spa', function(req, res){
		res.sendFile(__root + west + 'springcafe_Spaghetti.html');
	});


	app.use(r);
};
module.exports = router;