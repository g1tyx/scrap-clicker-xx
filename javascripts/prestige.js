function prestigeButtonDoes() {
    if (getGoldenScrapFormula().gte(200)) {
        if (player.options.confirmations.prestige) {
            document.getElementById("prestigeConfirmation").className = "popup shown"
        } else {
            prestige()
        }
    }
}

function prestige() {
    let pendingGoldenScrap = getGoldenScrapFormula()
    if (pendingGoldenScrap.gte(Decimal.round(200))) {
        player.goldenScrap = player.goldenScrap.add(pendingGoldenScrap);
        player.scrap = new Decimal("0")
        player.scrapsPerClick = new Decimal("1")
        player.scrapsPerSecond = new Decimal("0")
        player.multiplicatorCost = new Decimal("100")
        player.multiplicatorBought = new Decimal("0")
        player.multiplicatorMultiplierBase = new Decimal("3")
        player.factory[0].bought = new Decimal("0")
        if (!player.magnetUpgrades.nonRepeatable.isBought[7]) {
            player.factory[0].extra = new Decimal(0)
        }
        player.prestigeStat[0] = player.prestigeStat[0].add(1)
        if (player.goldenScrapUpgrades.isBought[11] || player.savingMilestones.isGotten[0]) {
            player.timeSpentInThisPrestige = player.timeSpentInThisPrestige.minus(Decimal.min(player.timeSpentInThisPrestige, 60) )
        } else {
            player.timeSpentInThisPrestige = new Decimal(0)
        }


    }
}

function compressionButtonDoes() {
    if (getBoosterGain().gte(1)) {
        if (player.options.confirmations.compression) {
            document.getElementById("compressionConfirmation1").className = "popup shown"
        } else {
            compression()
        }
    }
}

function compressionReset() {
    for (i = 0; i < player.goldenScrapUpgrades.isBought.length; i++) {
        player.goldenScrapUpgrades.isBought[i] = false
        if (i == 27) {
            player.goldenScrapUpgrades.isBought[27] = true
        }
    }
    for (i = 0; i < player.magnetUpgrades.nonRepeatable.isBought.length; i++) {
        player.magnetUpgrades.nonRepeatable.isBought[i] = false
    }

    for (i = 0; i < player.magnetUpgrades.repeatable.length; i++) {
        player.magnetUpgrades.repeatable[i].levelsBought = new Decimal("0")
        player.magnetUpgrades.repeatable[i].extraLevels = new Decimal("0")
        if (i == 2) {
            if (player.savingMilestones.isGotten[1]) {
                player.magnetUpgrades.repeatable[2].extraLevels = new Decimal("5")
            }
        }
    }

    for (i = 0; i < player.brickUpgrades.repeatable.level.length; i++) {
        player.brickUpgrades.repeatable.level[i] = new Decimal("0")
    }

    for (i = 0; i < player.brickUpgrades.nonRepeatable.isBought.length; i++) {
        player.brickUpgrades.nonRepeatable.isBought[i] = false
    }


    player.superDecay = new Decimal("1")
    player.automator[0].level = new Decimal("0")
    player.automator[1].level = new Decimal("0")
    player.automator[0].isActive = false
    player.automator[1].isActive = false
    player.scrap = new Decimal("0")
    player.goldenScrap = new Decimal("0")
    player.multiplicatorBought = new Decimal("0")
    player.factory[0].bought = new Decimal("0")
    player.factory[0].extra = new Decimal("0")
    player.factory[1].bought = new Decimal("0")
    

    if (!player.savingMilestones.isGotten[11]) {
        player.prestigeStat[0] = new Decimal("0")
        player.factory[1].extra = new Decimal("0")
    }
    
    
    player.timeSpentInThisPrestige = new Decimal("0")
    player.magnets = new Decimal("0")
    player.gainedMagnets = new Decimal("0")
    player.steelBeams = new Decimal("0")
    player.gainedSteelBeams = new Decimal("0")
    player.protons = new Decimal("0")
    player.electrons = new Decimal("0")
    player.stars.bought = new Decimal("0")
    player.bricks = new Decimal("0")
    player.gainedBricks = new Decimal("0")
    player.wrenches = new Decimal("0")
    player.gainedWrenches = new Decimal("0")
    player.regenerators = new Decimal("0")
    player.regenPoints = new Decimal("0")
    player.decay.amount = new Decimal("1")
    player.decay.isInDecayverse = false
    player.scrap = new Decimal("0")


    document.getElementById('AutomatorActivation1').checked = player.automator[0].isActive
    document.getElementById('AutomatorActivation2').checked = player.automator[1].isActive
}

function compression() {
    if (getBoosterGain().gte(1)) {
        player.boosters = player.boosters.add(
            getBoosterGain()
        )
        player.prestigeStat[1] = player.prestigeStat[1].add(1)
        player.fuel = player.fuel.add(getFuelGain())

        compressionReset()
    }
}

function prestigeTick(diff) {
    player.prestigeStat[0] = player.prestigeStat[0].add(
        Decimal.log(player.goldenScrap.plus(1), 10).pow(1.25).div(300)
        .times( (player.goldenScrapUpgrades.isBought[10]) ? 1 : 0 )
        .times(
            Decimal.log(player.bricks.plus(1e9), 1e9)
            .pow( (player.goldenScrapUpgrades.isBought[19]) ? 1.4 : 0 )
            .pow( (player.goldenScrapUpgrades.isBought[22]) ? 1.5 : 1 )
        )
        .times(
            Decimal.log(player.prestigeStat[0].plus(2), 2)
            .pow(
                (
                    getTrueBCCompletions(2).min(3)
                    .plus(getTrueBCCompletions(2).max(3).minus(3).pow(0.2))
                )
                .times(2.5)
            )
        )
        .times(
            getTotalFactories(1).div(100).plus(1)
            .pow( (player.fuelUpgrades.isBought[12]) ? 0.25 : 0)
        )
        .times(
            player.brickUpgrades.repeatable.level[1].plus(1).pow(getTrueBCCompletions(7).times(3))
        )
        .times(diff)
    )
}