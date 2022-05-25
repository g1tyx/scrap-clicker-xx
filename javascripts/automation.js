function forceToMax() {
    for (i = 0; i < 1; i++) {
        if (player.automator[i].level.gte(player.automator[i].maxLevel)) {
            player.automator[i].level = player.automator[i].maxLevel
        }
    }
}

function increaseAutoDids(diff) {
    if (player.automator[0].isActive) {
        player.automator[0].dids = player.automator[0].dids.add(
            player.automator[0].baseSpeed
            .times( Decimal.pow(player.automator[0].speedPerLevel, player.automator[0].level) )
            .times(Decimal.log(player.goldenScrap.plus(2), 2).pow( player.achievementsGotten[30] ? 2 : 0 ))
            .times(diff)
        )
    }

    if (player.automator[1].isActive) {
        player.automator[1].dids = player.automator[1].dids.add(
            player.automator[1].baseSpeed
            .times( Decimal.pow(player.automator[1].speedPerLevel, player.automator[1].level) )
            .times(Decimal.log(player.goldenScrap.plus(2), 2).pow( player.achievementsGotten[30] ? 2 : 0 ))
            .times(diff)
        )
    }
}

function autoBuyMultiplicator() {
    if (Decimal.floor(player.automator[1].dids).gte(1)) {
        buyMultiplicator("max")
        player.automator[1].dids =player.automator[1].dids.times(0)
    }
}

function autoBuyGSUpgrades() {
    if (player.automator2.autoGSUpgrades && !player.boosterChallenges.isActive[6]) {
        for (i = 0; i < 28; i++) {
            buyGoldenScrapUpgrade(i)
        }
    }
}

function autoBuyNMUs() {
    if (player.automator2.autoNMU) {
        for (i = 0; i < 16; i++) {
            buyMagnetUpgrade(i)
        }
    }
}

function autoClickScrap() {
    if (Decimal.floor(player.automator[0].dids).gte(1)) {
        player.scrap = player.scrap.add(
            Decimal.round(player.scrapsPerClick).times(getScrapGain())
            .times(Decimal.floor(player.automator[0].dids))
        )
        player.unmanualScrapClicks = player.unmanualScrapClicks.add(
            Decimal.times(1, player.automator[0].dids)
        )
        player.automator[0].dids = player.automator[0].dids.times(0)
    }
}

function autobuyRBUs() {
    if (player.automator2.autoRBU) {
        for (i = 0; i < 4; i++) {
            buyRepeatableBrickUpgrades("max", i)
        }
    }
}

function autobuyNBUs() {
    if (player.automator2.autoNBU) {
        for (i = 0; i < 8; i++) {
            buyBrickUpgrade(i)
        }
    }
}

//player.automator2.autoNBU
function upgradeAutomator(amount, i) {
    if (amount == "singles") {
        if (player.automator[i].level.lt(player.automator[i].maxLevel)) {
            if (player.goldenScrap.gte(player.automator[i].cost.div(getBoosterPointTypeEffects(1)).times(Decimal.pow(player.automator[i].costScaling, player.automator[i].level)))) {
                player.goldenScrap = player.goldenScrap.minus(player.automator[i].cost.div(getBoosterPointTypeEffects(1)).times(Decimal.pow(player.automator[i].costScaling, player.automator[i].level)))
                player.automator[i].level = player.automator[i].level.add(1)
            }
        }
    } else if (amount == "max") {
        if (player.automator[i].level.lt(player.automator[i].maxLevel)) {
            if (player.goldenScrap.gte(player.automator[i].cost.div(getBoosterPointTypeEffects(1)).times(Decimal.pow(player.automator[i].costScaling, player.automator[i].level)))) {
                let amounty = Decimal.min(
                    Decimal.affordGeometricSeries(player.goldenScrap, player.automator[i].cost.div(getBoosterPointTypeEffects(1)), player.automator[i].costScaling, player.automator[i].level),
                    player.automator[i].maxLevel.minus(player.automator[i].level)
                )
                let pricey = Decimal.sumGeometricSeries(amounty, player.automator[i].cost.div(getBoosterPointTypeEffects(1)), player.automator[i].costScaling, player.automator[i].level)
                player.automator[i].level = player.automator[i].level.add(amounty)
                player.goldenScrap = player.goldenScrap.sub(pricey)

            }
        }
    }
}
setInterval(() => {
    autoBuyMultiplicator()
    autoClickScrap()
    autoBuyGSUpgrades()
    autoBuyNMUs()
    autobuyRBUs()
    autobuyNBUs()
}, 30)