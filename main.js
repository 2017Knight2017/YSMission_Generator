const STUDENTS = {
	"02": "Sakyu Basu",
	"03": "Inkyu Basu",
	"04": "Kuu Dere",
	"05": "Horuda PuIDu",
	"06": "Kyuji Konagawa",
	"07": "Otohiko Meichi",
	"08": "Hazu Kashibuchi",
	"09": "Toga Tabara",
	"10": "Raibaru Fumetsu",
	"11": "Osana Najimi",
	"21": "Shoku Tsuburaya",
	"22": "Kenko Sukoyaka",
	"23": "Seiyo Akanishi",
	"24": "Ajia Ashitomi",
	"25": "Saki Miyu",
	"26": "Tsuruzo Yamazaki",
	"27": "Shozo Kurosawa",
	"28": "Riku Soma",
	"29": "Tokuko Kitagawa",
	"30": "Kokona Haruka",
	"31": "Shin Higaku",
	"32": "Chojo Tekina",
	"33": "Daku Atsu",
	"34": "Supana Churu",
	"35": "Kokuma Jutsu",
	"36": "Gema Taku",
	"37": "Ryuto Ippongo",
	"38": "Pippi Osu",
	"39": "Midori Gurin",
	"40": "Mai Waifu",
	"41": "Geiju Tsuka",
	"42": "Borupen Saishiki",
	"43": "Enpitsu Byoga",
	"44": "Maka Tansei",
	"45": "Efude Nurimono",
	"46": "Budo Masuta",
	"47": "Sho Kunin",
	"48": "Juku Ren",
	"49": "Mina Rai",
	"50": "Shima Shiya",
	"51": "Miyuji Shan",
	"52": "Gita Yamahato",
	"53": "Beshi Takamine",
	"54": "Dora Tamamoto",
	"55": "Kiba Kawaito",
	"56": "Fureddo Jonzu",
	"57": "Rojasu Norubiru",
	"58": "Sukubi Dubidu",
	"59": "Dafuni Bureiku",
	"60": "Beruma Dinkuri",
	"61": "Kaga Kusha",
	"62": "Horo Guramu",
	"63": "Yaku Zaishi",
	"64": "Meka Nikaru",
	"65": "Homu Kurusu",
	"66": "Itachi Zametora",
	"67": "Hojiro Zameshiro",
	"68": "Unagi Denkashiza",
	"69": "Iruka Dorufino",
	"70": "Mantaro Sashimasu",
	"71": "Uekiya Engeika",
	"72": "Himari Fujita",
	"73": "Sakura Hagiwara",
	"74": "Sumire Suzuki",
	"75": "Tsubaki Uesugi",
	"76": "Umeji Kizuguchi",
	"77": "Hokuto Furukizu",
	"78": "Gaku Hikitsuri",
	"79": "Hayanari Tsumeato",
	"80": "Dairoku Surikizu",
	"81": "Musume Ronshaku",
	"82": "Kashiko Murasaki",
	"83": "Hana Daidaiyama",
	"84": "Kokoro Momoiro",
	"85": "Hoshiko Mizudori",
	"86": "Kuroko Kamenaga",
	"87": "Shiromi Torayoshi",
	"88": "Akane Toriyasu",
	"89": "Aoi Ryugoku"
};
const WEAPONS = {
	"01": " knife",
	"02": " katana",
	"03": " syringe",
	"04": " pair of scissors",
	"05": " box cutter",
	"06": " screwdriver",
	"07": " circular saw",
	"08": " ritual knife",
	"09": " baseball bat",
	"10": " shovel",
	"12": " dumbbel",
	"13": " axe",
	"14": " magical girl wand",
	"15": " old axe",
	"16": " fantasy sword",
	"18": " boken",
	"19": " crow bar",
	"20": " pipe",
	"21": " shinai",
	"22": " medieval sword",
	"23": " fire extinguisher",
	"24": " pipe wrench",
	"25": " sharp guitar",
	"28": " scrap metal",
	"29": " manhole tool",
	"30": " makeshift knife",
	"31": " scythe"
};
const CLOTHES = {
	"1": " school uniform",
	"2": " swimsuit",
	"3": " gym uniform",
	"4": " painter's smock",
	"5": " martial artist's gi",
	"6": " lab coat"
};
const DISPOSEMENT = {
	"1": "incinerating it with the incinerator",
	"2": "shredding it in the woodchipper",
	"3": "burying it in the gardening club",
	"4": "bissolving it in a vat of acid",
	"5": "dumping it into the sewer"
};
const NEMESIS = {
	"0": "",
	"1": "You are being hunted by Nemesis.",
	"2": "You are being hunted by Nemesis.\nYou may not kill her.",
	"3": "You are being hunted by Nemesis.\nShe has disguised herself as one of the female students.",
	"4": "You are being hunted by Nemesis.\nYou may not kill her.\nShe has disguised herself as one of the female students."
};

function getRandomObjectPropertyName(obj) {
	var a = [];
	var k;

	for (k in obj) {
	   if (obj.hasOwnProperty(k)) a.push(k);
	}
 
	return a[Math.floor(Math.random() * a.length)];
}

function generateMission(difficulty){
	var settings = {
		"Student": "02",
		"Weapon": false,
		"Clothes": false,
		"Disposement": false,
		"Kill ONLY the target.": false,
		"No witnesses": false,
		"No corpses discovered.": false,
		"Dispose the murder weapon.": false,
		"Clean all blood.": false,
		"Complete the mission within 10 minutes.": false,
		"Don't let students observe your suspicious behavior.": false,
		"Don't let security cameras record anything suspicious.": false,
		"Don't pass through metal detectors while carrying a weapon.": false,
		"You are not allowed to speak to any students, except for club leaders.": false,
		"You must find a key, unlock a safe, and steal documents from it.": false,
		"Nemesis": false
	};
	settings["Student"] = getRandomObjectPropertyName(STUDENTS);
	settings["Nemesis"] = getRandomObjectPropertyName(NEMESIS);
	difficulty -= 1
	while (difficulty > 0){
		s = getRandomObjectPropertyName(settings);
		if (!(s in ["Student", "Nemesis"]) && !(settings[s])) {
			switch (s){
				case "Weapon": settings["Weapon"] = getRandomObjectPropertyName(WEAPONS);
				case "Clothes": settings["Clothes"] = getRandomObjectPropertyName(CLOTHES);
				case "Disposement": settings["Disposement"] = getRandomObjectPropertyName(DISPOSEMENT);
				default: settings[s] = true
			}
			difficulty--;
		} 
	}
	return settings;
}

function generateID(settings){
	var ID = "";

	for (i in settings){
		if (typeof settings[i] == "boolean") {
			if (i == "Weapon") ID = ID + "00";
			else ID = ID + Number(settings[i]);
		}
		else ID = ID + settings[i];
	}

	return ID + "0";
}

a = generateMission(10);
b = generateID(a);
console.log(b);
