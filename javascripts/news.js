let news = {};

function randomVideoLink() {
	let randomLinkCode;
	randomLinkCode = ""
	let linkCodeGenerator = [
		"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
		"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
		"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "_"
	]
	for (i = 0; i < 11; i++) {
		randomLinkCode += linkCodeGenerator[Math.floor(Math.random() * linkCodeGenerator.length)]
	}
	return "I bet you can't watch this video &rightarrow; <a href=\"https://www.youtube.com/watch?v=" + randomLinkCode + "\" target=\"_blank\">" + "https://www.youtube.com/watch?v=" + randomLinkCode + "</a> &leftarrow; This link is randomly generated. If you able to watch that random video, I will give you 💸💸 $100,000 💸💸. If same link appears, You will get GOD role and this realm will be yours"
}

function goodBadGame() {
	var games_I_Love = [
		"Minecraft",
		"Antimatter Dimensions (including all mods)",
		"Distance Incremental",
		"Incremental Unlimited",
		"True Infinity &gamma;",
		"Scrap Clicker++",
		"&Omega; - L &lambda; &gamma; e r s",
		"Yet Another Merge Game",
		"Universe Shrinker",
		"Unlimited Alphabets",
		"World Restoration",
		"The Unscaled Incremental",
		"Synergism"
	]

	var games_I_Hate = [
		"PickCrafter",
		"Cookies Inc.",
		"PUBG",
		"Among Us",
		"Ordinal Markup",
		"Pixel Gun 3D",
		"Dragon City"
	]

	return games_I_Love[Math.floor(Math.random() * games_I_Love.length)] + " good, " + games_I_Hate[Math.floor(Math.random() * games_I_Hate.length)] + " bad"
}

news.begin = function () {
	news.message();
};

news.message = function () {
	let rand = Math.floor(Math.random() * news.news.length);
	let msg = news.news[rand]();
	let e = document.getElementById("news");
	e.innerHTML = msg;
    let textWidth = e.clientWidth;
	let parentWidth = e.parentElement.clientWidth;
	e.style.transition = "";
	e.style.transform = "translateX(" + (parentWidth + 10) + "px)";
	let dist = parentWidth + e.clientWidth;
	let rate = 150;
	let transformDuration = dist / rate;

	e.style.transition = "transform " + transformDuration + "s linear";
	e.style.transform = "translateX(-" + (textWidth) + "px)";

	setTimeout(news.message, Math.ceil(transformDuration + 0) * 1000);
};

news.news = [
	() => "First Scrap Clicker++ was made in 7 days!",
	() => "How does antivirus work?",
	() => "Subscribe to <a href=\"https://www.youtube.com/channel/UC4D_JX8Z2HboHvlcKjSqOYA?view_as=subscriber\" target=\"_blank\">Bullz 04</a> so that you can get even more news. More subscribers &rightarrow; More news &rightarrow; More fun.",
	() => "Hey Russians, can you make eeee80 scraps? I'm sure you can't >:) >:) >:)",
	() => "Exponential boost is for the weak",
	() => "Upcoming: Deboosters",
	() => "Planned prestige layers: Prestige, Boosters, Empowerment, Time, Dimensions, (Inter)galactic, Realms, Scrappyverse, to be continued.",
	() => "Money is for the weak",
	() => "#covid19healsus",
	() => "Speedrunning YouTube",
	() => "Speedrunning Facebook",
	() => "Speedrunning Twitch",
	() => "Speedrunning Instagram",
	() => "YOU GOT A RICKROLL, HAHAHAAAA!!!!",
	() => "Tip: Grind for 2000 scrap clicks and 300 prestiges while waiting for " + format(1e4) + " Magnets and Steel Beams.",
	() => "Tip: Unlocking super factories and bricks also unlocks more NMUs unnoticeably.",
	() => "Tip: Don't forget to check upgrades if you feel stuck.",
	() => "Tip: Achievement 18 is very important to get. Because any scrap gain boosts also boost GS gain unless you have over " + format(getGSGainSlowdown()) + " scraps",
	() => "Time is absolute - Einsbert Altein",
	() => "Hey game developers, why would you want to rickroll everyone on news ticker if you can advertise yourself? Take the chance.",
	() => "The only way to defeat yourself is do sui...[CENSORED]",
	() => "There are " + news.news.length + " possible news",
	() => "Idle Incremental Distance Dimensions Markup Unlimited Clicker++ 2 NG+++",
	() => "Scrap 2 was made with kotlin stuffs.",
	() => "\"Still "+ format(player.scrap, 3, 0) +" scraps, huh?\" - Scrapman with " + format(player.scrap.plus(69).pow(69), 3, 0) + " scraps",
	() => "\"Still "+ format(player.bricks, 3, 0) +" bricks, huh?\" - Brickman with " + format(player.bricks.plus(69).pow(69), 3, 0) + " bricks",
	() => "<a href=\"https://youtu.be/133eDAMkLlA\" target=\"_blank\">World's best OST</a>",
	() => " 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎 💎           🏃‍          🔪🐇",
	() => "This game is SO incrementalistic!! I liked it ⭐⭐⭐⭐⭐",
	() => "What is lorem in HTML? " + ("&nbsp;".repeat(50)) + "Derived from Latin dolorem ipsum (\"pain itself\"), Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements. ... Lorem Ipsum is placeholder text that stands in for meaningful content.",
	() => "What you currently see here is Minecraft clone name variations: Minebuild, Buildcraft, Survivalbuild, Pixelcraft, Blockcraft, Worldbuild, etc.",
	() => "I have " + ("999,".repeat(120)) + "999 scraps and I dont know how to use scientific notation",
	() => "Next prestige layer will cost $5.99",
	() => "Wait, if you get 3x scrap gain, you actually get 12x scrap gain. Not only that! 12x scrap gain is translated to 1.4x GS gain!!!!! Golden scraps boost scraps, scraps boost golden scraps, scraps boost golden scraps etc. etc.. FEEL THE BOOST!!!!!!!",
	() => "Once upon a time, you died, game over, the end, bye bye.",
	() => "\"No matter what u do, u cant catch me so have fun getting bored down there ; )\" - Brickman",
	() => "Did you ever throw your food into trash accidentally? That is called ASCENSION (Maybe your thrown food is currently in heaven).",
	() => "Random Person : \"AD is advertisement\". Random Person after playing Antimatter Dimensions for 2 months : \"AD is Antimatter Dimensions\". <a href=\"https://ivark.github.io/\" target=\"_blank\">Play Antimatter Dimensions Now!</a>",
	() => goodBadGame(),
	() => randomVideoLink(),
	() => randomVideoLink(),  
	() => randomVideoLink(),
	() => randomVideoLink(),
	() => "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ <span style=\"color: rgb(0, 255, 0); font-family: MinecraftFont;\">108</span> 🍖🍖🍖🍖🍖🍖🍖🍖🍖🍖",
	() => "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ <span style=\"color: rgb(0, 255, 0); font-family: MinecraftFont;\">69</span> 🍖🍖🍖🍖🍖🍖🍖🍖🍖🍖",
	() => "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ <span style=\"color: rgb(0, 255, 0); font-family: MinecraftFont;\">20</span> 🍖🍖🍖🍖🍖🍖🍖🍖🍖🍖",
	() => "<marquee scrollamount=\"10\">Deprecated tag</marquee>",
	() => "Feel this game slow? Take a look of all upgrades (You will realize that multipliers go up and affordable upgrades).",
	() => "Believe or not your subscribers starts to softcap at 1,000,000, 10,000,000 and 100,000,000 subscribers. If you able to reach 1,000,000,000 Subscribers, you must be cheating.",
	() => "If COVID-19 grow exponentially, why can't they make COVID-19 Galaxy?",
	() => "<strong>MORE SCRAPS</strong>" + ("&nbsp;".repeat(60)) + "Watch an ad to raise your GS effect to the 10 for 10 minutes! <a href=\"https://youtu.be/RosWjxvr8-Y\" target=\"_blank\">Click here to watch ad</a>",
	() => "<strong>MORE MAGNETS AND STEEL BEAMS</strong>" + ("&nbsp;".repeat(60)) + "Watch an ad to raise your Electron and Proton effect to the 10 for 10 minutes! <a href=\"https://youtu.be/RosWjxvr8-Y\" target=\"_blank\">Click here to watch ad</a>",
	() => "<strong>MORE BRICKS</strong>" + ("&nbsp;".repeat(60)) + "Watch an ad to triple brick self-boost strength for 10 minutes! <a href=\"https://youtu.be/RosWjxvr8-Y\" target=\"_blank\">Click here to watch ad</a>",
	() => "This game is NSFW, Not Safe For Work. Workers out there shouldn't play this game, cause not safe for work (in other words, you will get fired if the boss knows you play this).",
	() => "How to get FREE BRICKS. 1. Find river or lake. &nbsp;2. If you found clay, mine it &nbsp;3. Put clay in furnace (Make sure the furnace has fuel otherwise it will not work) &nbsp;4. You get Bricks. Repeat the step in case you need more <del>(There is brick self-boost, so you can get even more)</del>. Disclaimer: It's in minecraft.",
	() => "You have " + format(player.scrap.plus(1).pow(777), 3, 3) + " COVID-" + format(  Decimal.log(player.scrap.plus(1), 10)   , 3, 0) + "s",
	() => "\"Suggestion: &times;1.01 magnet every 100k scrap clicks, please (Like merge boost)\" - The guy who wants to make this game similar to scrap 2",
	() => "You just need " + Decimal.max(new Decimal(10000).minus(player.stars.bought), 0).floor().toNumber().toLocaleString("en-US") + " more stars to beat Brickman",
	() => "<a href=\"https://youtu.be/PKtnafFtfEo?t=300\" target=\"_blank\">https://youtu.be/PKtnafFtfEo?t=300</a> &leftarrow; Dream face reveal UNMASKED!! 😍💓",

];

news.begin();