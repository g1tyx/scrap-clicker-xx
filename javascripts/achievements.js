var achTitle = "Hover over the achievements to see details";
var achDesc = "<br>";
var achReward = "<br>";

var totalAchievements = 35

function normalizeAchThings() {
    achTitle = "Hover over the achievements to see details";
    achDesc = "<br>";
    achReward = "<br>";
}

function getTotalCompletedAchievements() {
    var achievementsCompleted = 0
    for (i = 0; i < totalAchievements; i++) {
        var completed = true
        if (!player.achievementsGotten[i]) completed = false
        if (completed) {
            achievementsCompleted++
        }
    }
    return achievementsCompleted
}

function getAchievementMultiplier() {
    return Decimal.pow(2, getTotalCompletedAchievements())
    .pow(
        Decimal.log(Decimal.log(player.scrap.plus(10), 10).plus(9), 10)
        .pow( player.achievementsGotten[32] ? 1.5 : 0)
    )
    .pow(
        Decimal.log(Decimal.log(player.scrap.plus(8), 8).plus(7), 8)
        .pow( player.achievementsGotten[33] ? 1.6 : 0)
    )
    .pow(
        Decimal.log(Decimal.log(player.scrap.plus(6), 6).plus(5), 6)
        .pow( player.achievementsGotten[34] ? 1.7 : 0)
    )
}

function giveAchievement(poop) {
    player.achievementsGotten[poop] = true
}

function removeAchievement(poop) {
    player.achievementsGotten[poop] = false
}


function checkAchievements() {
    if (player.scrap.gte(1e6)) {
        giveAchievement(0)
    }

    if (player.scrap.gte(1e9)) {
        giveAchievement(1)
    }

    if (player.scrap.gte(1e12)) {
        giveAchievement(2)
    }

    if (player.prestigeStat[0].gte(1)) {
        giveAchievement(3)
    }

    if (player.goldenScrap.gte(1e20)) {
        giveAchievement(4)
    }

    if (player.stars.bought.gte(1)) {
        giveAchievement(5)
    }

    if (player.goldenScrapUpgrades.isBought[0]) {
        giveAchievement(6)
    }

    if (player.scrap.gte(Number.MAX_VALUE)) {
        giveAchievement(7)
    }

    if (player.goldenScrap.gte(1e100)) {
        giveAchievement(8)
    }

    if (player.goldenScrapUpgrades.isBought[5]) {
        giveAchievement(9)
    }

    if (player.goldenScrapUpgrades.isBought[2]) {
        giveAchievement(10)
    }

    if (getAllLevelsOfRepeatableMagnetUpgrade().gte(1e3)) {
        giveAchievement(11)
    }

    if (player.steelBeams.gte(1e10)) {
        giveAchievement(12)
    }

    if (player.magnets.gte(1e20)) {
        giveAchievement(13)
    }

    if (player.magnetUpgrades.nonRepeatable.isBought[3]) {
        giveAchievement(14)
    }

    if (player.scrapClicks.gte(500)) {
        giveAchievement(15)//Achievement 16-1
    }

    if (player.prestigeStat[0].gte(3000)) {
        giveAchievement(16)
    }

    if (player.goldenScrap.gte(Number.MAX_VALUE)) {
        giveAchievement(17)
    }

    if (player.electrons.gte(1e15) && player.protons.gte(1e15)) {
        giveAchievement(18)
    }

    if (player.goldenScrapUpgrades.isBought[17]) {
        giveAchievement(19)
    }

    if (getBrickSelfBoostStrength().gte(3)) {
        giveAchievement(20)
    }

    if (getBrickSelfBoostStrength().gte(10)) {
        giveAchievement(21)
    }

    if (player.goldenScrapUpgrades.isBought[11]) {
        giveAchievement(22)
    }

    if (player.factory[0].extra.gte(1e12)) {
        giveAchievement(23)
    }

    if (player.goldenScrapUpgrades.isBought[23]) {
        giveAchievement(24)
    }

    if (getDecayResistance().gte(2)) {
        giveAchievement(25)
    }

    if (player.prestigeStat[1].gte(1)) {
        giveAchievement(26)
    }

    if (player.savingMilestones.isGotten[3]) {
        giveAchievement(27)
    }

    if (player.savingMilestones.isGotten[7]) {
        giveAchievement(28)
    }

    if (getTotalFactories(2).gte(64)) {
        giveAchievement(29)
    }

    if (player.boosters.gte(1e9) || player.bestBoosters.gte(1e9)) {
        giveAchievement(30)
    }

    if (player.thermalEnergy.gte(1e100)) {
        giveAchievement(31)
    }

    if (player.boosters.gte(Number.MAX_VALUE) || player.bestBoosters.gte(Number.MAX_VALUE)) {
        giveAchievement(32)
    }//

    if (player.stars.bought.gte(10000)) {
        giveAchievement(33)
    }

    if (player.stars.bought.gte(30000)) {
        giveAchievement(34)
    }
}




function updateAchStyles() {
    for(i = 0; i < totalAchievements; i++) {
        if (player.achievementsGotten[i]) {
            document.getElementById("Achievement" + (i + 1)).className = "achievementUnlocked"
        } else {
            document.getElementById("Achievement" + (i + 1)).className = "achievementLocked"
        }
    }
}

function changeAchThings(x) {
    switch (x+1) {
        case 1:
            achTitle = "Millionaire";
            achDesc = "Have over " + format(1e6) +" Scraps";
            break;
        case 2:
            achTitle = "Billionaire";
            achDesc = "Have over " + format(1e9) +" Scraps";
            break;
        case 3:
            achTitle = "Trillionaire";
            achDesc = "Have over " + format(1e12) +" Scraps";
            break;
        case 4:
            achTitle = "R.I.P Scraps :(";
            achDesc = "Prestige for the first time";
            break;
        case 5:
            achTitle = "Used to fix Zimbabwean Dollar inflations!";
            achDesc = "Have over " + format(1e20) +" Golden Scraps";
            break;
        case 6:
            achTitle = "Sexdecuplers";
            achDesc = "Buy a star";
            break;
        case 7:
            achTitle = "Renewable boost";
            achDesc = "Buy a golden scrap upgrade";
            break;
        case 8:
            achTitle = "WE ARE <del>DEMI</del>GODS!";
            achDesc = "Have over " + format(Number.MAX_VALUE) + " Scraps";
            break;
        case 9:
            achTitle = "Boost of googology!";
            achDesc = "Have over " + format(1e100) + " Golden Scraps";
            break;
        case 10:
            achTitle = "Synergism";
            achDesc = "Unlock Magnets";
            break;
        case 11:
            achTitle = "Constant gaining is boring";
            achDesc = "Buy 3rd Golden Scrap Upgrade";
            break;
        case 12:
            achTitle = "The only game that has huge numbers of levels";
            achDesc = "Have " + format(1e3) + " total levels of all RMU";
            break;
        case 13:
            achTitle = "You must be cheating";
            achDesc = "Have over " + format(1e10) + " Steel Beams";
            break;
        case 14:
            achTitle = "YOU CAN BEAT BRICKMAN!?";
            achDesc = "Have over " + format(1e20) + " Magnets";
            break;
        case 15:
            achTitle = "Only freebies want this upgrade";
            achDesc = "Buy 3rd Normal Magnet Upgrade";
            break;
        case 16:
            achTitle = "You love to grind, don't you?";
            achDesc = "Have over " + format(500) + " Scrap Clicks. Reward: Scrap gain is boosted by your manual scrap clicks";
            break;
        case 17:
            achTitle = "Prestigious";
            achDesc = "Have over " + format(3000) + " Prestiges. Reward: Golden scrap gain is multiplied by " + format(2500, 3, 2);
            break;
        case 18:
            achTitle = "I have too many!";
            achDesc = "Have over " + format(Number.MAX_VALUE) + " Golden Scraps";
            break;
        case 19:
            achTitle = "No idea what to name it";
            achDesc = "Have over " + format(1e15) + " Protons and Electrons. Reward: Electrons and protons boost each other in gain";
            break;
        case 20:
            achTitle = "Clay ≠ Scrap";
            achDesc = "Unlock Bricks";
            break;
        case 21:
            achTitle = "Self-boost that boosts itself that boosts itself that boosts itself...";
            achDesc = "Have over " + format(300, 3, 2) + "% of brick self-boost strength";
            break;
        case 22:
            achTitle = "Thicc potion → Thicc boost";
            achDesc = "Have over " + format(1000, 3, 2) + "% of brick self-boost strength";
            break;
        case 23:
            achTitle = "Scrap dimensions, I guess?";
            achDesc = "Unlock Super Factories";
            break;
        case 24:
            achTitle = "Definitely Scrap Dimensions";
            achDesc = "Have over " + format(1e12, 3, 3) + " extra scrap factories";
            break;
        case 25:
            achTitle = "\"You cannot run and hide from us!!\" - Decay";
            achDesc = "Unlock Decayverse";
            break;
        case 26:
            achTitle = "Nerf this!";
            achDesc = "Have over " + format(200, 3, 2) + "% of decay resistance";
            break;
        case 27:
            achTitle = "BOOST BOOST BOOST!!!";
            achDesc = "Perform a compression";
            break;
        case 28:
            achTitle = "Inflation?";
            achDesc = "Unlock Boosted Factories";
            break;
        case 29:
            achTitle = "No Pain No Gain";
            achDesc = "Unlock Booster Challenges. Reward: Thermal Energy boost its gain";
            break;
        case 30:
            achTitle = "A stack of Boosted Factories";
            achDesc = "Have over " + format(64, 3, 0) + " Boosted Factories.";
            break;
        case 31:
            achTitle = "Booster Billionaire";
            achDesc = "Have over " + format(1e9, 3, 0) + " Boosters. Reward: All Automation speed is boosted by Golden Scraps";
            break;
        case 32:
            achTitle = "Feel the heat";
            achDesc = "Have over " + format(1e100, 3, 0) + " Thermal Energy. Reward: Thermal Energy boost its gain";
            break;
        case 33:
            achTitle = "Balancing.exe has stopped working";
            achDesc = "Have over " + format(Number.MAX_VALUE, 3, 0) + " Boosters. Reward: Scraps power up Achievement Effect";
            break;
        case 34:
            achTitle = "The universe is bright";
            achDesc = "Have over " + format(10000, 3, 0) + " Stars. Reward: Scraps power up Achievement Effect";
            break;
        case 35:
            achTitle = "Burn your eyes";
            achDesc = "Have over " + format(30000, 3, 0) + " Stars. Reward: Scraps power up Achievement Effect";
            break;
        default:
            achTitle = "Coming Soon"
            achDesc = "To be added on next update"
    }
}

function updateAchievements() {
    document.getElementById("achievementTitle").innerHTML = achTitle
    document.getElementById("achievementDescription").innerHTML = achDesc
    document.getElementById("AchievementMultiplier").innerHTML = format(getAchievementMultiplier(), 3, 2)
}

setInterval(() => {
    updateAchievements()
    updateAchStyles()
    checkAchievements()
}, 30)