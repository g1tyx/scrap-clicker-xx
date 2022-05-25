//min plus max minus
//min times max div
function getBoosterGainSlowdown() {
    return new Decimal("e3.5e7")
}


function getBoosterGain() {
    return Decimal.floor(
        player.scrap.min(getBoosterGainSlowdown()).div("1e55000").pow(Decimal.div(1, 50000))
        .times(Decimal.log(player.scrap.max(getBoosterGainSlowdown()).minus(getBoosterGainSlowdown()).div(getBoosterGainSlowdown()).plus(10), 10).pow(1.25))
        .times(
            getTotalFactories(2).div(5).plus(1)
            .pow(
                getTrueBCCompletions(4).min(4)
                .plus(getTrueBCCompletions(4).max(4).minus(4).pow(0.25))
                .pow(0.75)
            )
        )
        .times(
            Decimal.log(player.scrap.plus(10), 10)
            .pow( (player.fuelUpgrades.isBought[8]) ? 1 : 0)
        )
        .times(
            Decimal.log(player.boosterPoints[0].plus(10), 10)
            .times(Decimal.log(player.boosterPoints[1].plus(10), 10))
            .times(Decimal.log(player.boosterPoints[2].plus(10), 10))
            .times(Decimal.log(player.boosterPoints[3].plus(10), 10))
            .times(Decimal.log(player.boosterPoints[4].plus(10), 10))
            .times(Decimal.log(player.boosterPoints[5].plus(10), 10))
            .pow( (player.fuelUpgrades.isBought[11]) ? 1.5 : 0)
        )
    )
}

function getAllBoosterTypes() {
    let allBoosterTypes = new Decimal("0")
    for (i = 0; i < 6; i++) {
        allBoosterTypes = allBoosterTypes.add(player.transformedBoosters[i])
    }
    return allBoosterTypes
}

function getThermalEnergyGain() {
    return getAllBoosterTypes()
    .times(
        Decimal.log(player.thermalEnergy.plus(2), 2)
        .pow( player.achievementsGotten[28] ? 2 : 0)
    )
    .times(
        Decimal.log(player.thermalEnergy.div(1e100).plus(50), 50)
        .pow( player.achievementsGotten[31] ? 15 : 0)
    )
}

function getFuelGain() {
    return player.multiplicatorBought.div(1000)
    .times(
        Decimal.pow(
            1.01,
            player.multiplicatorBought.div(1000)
            .times( (player.fuelUpgrades.isBought[4]) ? 1 : 0 )
        )
    )
    .times(
        getTotalFactories(2).div(5).plus(1)
        .pow( (player.fuelUpgrades.isBought[7]) ? 2 : 0)
    )
    .times(
        (
            player.bestBoosters.min(1e20)
            .times(player.bestBoosters.max(1e20).div(1e20).pow(1/3))
        )
        .div(1e9).plus(1).pow(3)
        .pow( player.savingMilestones.isGotten[8] ? 1 : 0 )
    )
}

function buyFuelUpgrades(x) {
    if (!player.fuelUpgrades.isBought[x] && player.fuel.gte(player.fuelUpgrades.cost[x])) {
        player.fuel = player.fuel.minus(player.fuelUpgrades.cost[x])
        player.fuelLost = player.fuelLost.plus(player.fuelUpgrades.cost[x])
        player.fuelUpgrades.isBought[x] = true
    }
}







function refundFuel() {
    for (i = 0; i < player.fuelUpgrades.isBought.length; i++) {
        player.fuelUpgrades.isBought[i] = false
    }
    player.fuel = player.fuel.add(player.fuelLost)
    player.fuelLost = new Decimal("0")

    compressionReset()
}



function checkSavingMilestones() {
    for (i = 0; i < 13; i++) {
        if (player.bestBoosters.gte(player.savingMilestones.requirement[i])) {
            player.savingMilestones.isGotten[i] = true
        }
    }
}

function checkActiveBoosterChallenges() {
    if (player.boosterChallenges.isActive[0]) {
        return 1
    } else if (player.boosterChallenges.isActive[1]) {
        return 2
    } else if (player.boosterChallenges.isActive[2]) {
        return 3
    } else if (player.boosterChallenges.isActive[3]) {
        return 4
    } else if (player.boosterChallenges.isActive[4]) {
        return 5
    } else if (player.boosterChallenges.isActive[5]) {
        return 6
    } else if (player.boosterChallenges.isActive[6]) {
        return 7
    } else if (player.boosterChallenges.isActive[7]) {
        return 8
    } else {
        return 0
    }
}

function BCActiveText(i) {
    switch (i) {
        case 0:
            return "in No Booster Challenge"
        case 1:
            return "in Booster Challenge 1"
        case 2:
            return "in Booster Challenge 2"
        case 3:
            return "in Booster Challenge 3"
        case 4:
            return "in Booster Challenge 4"
        case 5:
            return "in Booster Challenge 5"
        case 6:
            return "in Booster Challenge 6"
        case 7:
            return "in Booster Challenge 7"
        case 8:
            return "in Booster Challenge 8"
        default:
            return "in ????"
    }
}

function BCActiveText2(i) {
    if (player.boosterChallenges.isActive[i]) {
        return "Exit"
    } else {
        return "Enter"
    }
}

function enterExitBC(i) {
    if (!player.boosterChallenges.isActive[i]) {
        for (e = 0; e < 8; e++) {
            player.boosterChallenges.isActive[e] = false
        }
        player.boosterChallenges.isActive[i] = true
    } else if (player.boosterChallenges.isActive[i]) {
        for (e = 0; e < 8; e++) {
            player.boosterChallenges.isActive[e] = false
        }
    }

    compressionReset()
}


function gainBCCompletions() {
    for (i = 0; i < 8; i++) {
        if (player.boosterChallenges.isActive[i]) {
            if (player.boosterChallenges.bestScraps[i].lte(player.scrap)) {
                player.boosterChallenges.bestScraps[i] = player.scrap
            }
        }
    }
}
function getTrueBCCompletions(i) {
    return player.boosterChallenges.completionFormula[i]().floor().min(1)
    .plus(player.boosterChallenges.completionFormula[i]().max(1).minus(1))
}

function getBoosterPointTypeEffects(x) {
    switch (x+1) {
        case 1:
            return (
                player.boosterPoints[0].min(1e30)
                .times(player.boosterPoints[0].max(1e30).div(1e30).pow(1/3))
            )
            .div(1000).plus(1).pow(3)
            .pow( (player.fuelUpgrades.isBought[14]) ? 1.4 : 1)
        case 2:
            return player.boosterPoints[1].div(50).plus(1)
            .pow(2)
            .pow(getBoosterPointTypeEffects(4).pow(2))
        case 3:
            return player.boosterPoints[2].times(5).plus(1).pow(10)
        case 4:
            return (
                Decimal.log(player.boosterPoints[3].plus(1), 10).min(200)
                .plus(Decimal.log(player.boosterPoints[3].plus(1), 10).max(200).minus(200).pow(0.5))
            ).pow(2.2)
        case 5:
            let effect = Decimal.log(player.boosterPoints[4].plus(1), 1e10)
            return (
                effect.min(10)
                .times(
                    Decimal.log(effect.max(10).minus(10).div(10).plus(10), 10).pow(1.5)
                )
            )
            .pow(2).times(40).div(1000)
            .plus(1)
        case 6:
            return (
                Decimal.log(player.boosterPoints[5].plus(1), 1e50).min(3)
                .plus(Decimal.log(player.boosterPoints[5].plus(1), 1e50).max(3).minus(3).min(3).pow(0.5))
                .plus(Decimal.log(player.boosterPoints[5].plus(1), 1e50).max(6).minus(6).pow(0.15))
            )
            .pow(2.5).div(2)
    }
}
//.div(getBoosterPointTypeEffects(1))
//.times(getBoosterPointTypeEffects(1))
function savingMilestonesDo() {
    if (player.savingMilestones.isGotten[0]) {
        player.goldenScrapUpgrades.isBought[11] = true
    }

    if (player.savingMilestones.isGotten[1]) {
        player.magnetUpgrades.repeatable[2].extraLevels = player.magnetUpgrades.repeatable[2].extraLevels.max(5)
    }
}

function getBoosterPointGain(x) {
    switch (x+1) {
        case 1:
            return player.transformedBoosters[0]
        case 2:
            return player.transformedBoosters[1]
        case 3:
            return player.transformedBoosters[2]
        case 4:
            return player.transformedBoosters[3]
        case 5:
            return player.transformedBoosters[4]
        case 6:
            return player.transformedBoosters[5]
    }
}

function transformBoosters(x, amount) {
    if (amount == "singles") {
        if (player.boosters.gte(1)) {
            player.transformedBoosters[x] = player.transformedBoosters[x].add(1)
            player.boosters = player.boosters.minus(1)
        }
    }

    if (amount == "half") {
        let halfBoosters = player.boosters.div(2).floor()
        player.transformedBoosters[x] = player.transformedBoosters[x].add(halfBoosters)
        player.boosters = player.boosters.minus(halfBoosters)
    }
}

function produceBoosterPoints(diff) {
    player.boosterPoints[0] = player.boosterPoints[0].add(
        new Decimal(getBoosterPointGain(0))
        .times(diff)
    )

    player.boosterPoints[1] = player.boosterPoints[1].add(
        new Decimal(getBoosterPointGain(1))
        .times(diff)
    )

    player.boosterPoints[2] = player.boosterPoints[2].add(
        new Decimal(getBoosterPointGain(2))
        .times(diff)
    )

    player.boosterPoints[3] = player.boosterPoints[3].add(
        new Decimal(getBoosterPointGain(3))
        .times(diff)
    )

    player.boosterPoints[4] = player.boosterPoints[4].add(
        new Decimal(getBoosterPointGain(4))
        .times(diff)
    )

    player.boosterPoints[5] = player.boosterPoints[5].add(
        new Decimal(getBoosterPointGain(5))
        .times(diff)
    )
}

function produceThermalEnergy(diff) {
    player.thermalEnergy = player.thermalEnergy.add(
        getThermalEnergyGain()
        .times(diff)
    )
}

function generateBoosters(diff) {
    player.boosters = player.boosters.add(
        getBoosterGain().times(0.01)
        .times( (player.savingMilestones.isGotten[11]) ? 1 : 0 )
        .times(diff)
    )
}

function generateFuel(diff) {
    player.fuel = player.fuel.add(
        getFuelGain().times(0.01)
        .times( (player.savingMilestones.isGotten[11]) ? 1 : 0 )
        .times(diff)
    )
}