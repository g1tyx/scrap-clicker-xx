function enterExitDecayverse() {
    if (player.decay.isInDecayverse == true) {
        player.decay.isInDecayverse = false

        player.regenerators = player.regenerators.add(getRegeneratorGain())
        player.scrap = new Decimal("0")
        player.multiplicatorBought = new Decimal("0")
        player.factory[0].bought = new Decimal("0")
        player.decay.amount = new Decimal("1")
    } else {
        player.decay.isInDecayverse = true
        
        player.scrap = new Decimal("0")
        player.multiplicatorBought = new Decimal("0")
        player.factory[0].bought = new Decimal("0")
        player.decay.amount = new Decimal("1")
    }
}

function getRegenPointGain() {
    return player.regenerators.pow(1.25)
    .pow( (player.goldenScrapUpgrades.isBought[25]) ? 1.25 : 1 )
    .times(
        Decimal.log(player.gainedWrenches.plus(1e3), 1e3)
        .pow( (player.goldenScrapUpgrades.isBought[24]) ? 5 : 0 )
    )
    .times(
        player.boosterPoints[0].div(1000).plus(1)
    )
    .div(getSuperDecayEffect())
    .pow( (player.boosterChallenges.isActive[5]) ? 0.025 : 1 )
}

function getRegenPointEffect(type) {
    switch (type) {
        case "Golden Scrap":
            return (
                player.regenPoints.min(1e200)
                .times(player.regenPoints.max(1e200).div(1e200).pow(0.1))
            )
            .plus(1).pow(10);
        case "Scrap":
            return player.regenPoints.plus(1).pow(50)
    }
}

function getRegeneratorBoosts() {
    return new Decimal(1)
    .times(
        Decimal.log(player.regenerators.plus(10), 10)
        .pow( (player.goldenScrapUpgrades.isBought[25]) ? 1 : 0 )
    )
    .times(
        getBoosterPointTypeEffects(0)
    )
    .div(getSuperDecayEffect())
    .pow( (player.boosterChallenges.isActive[5]) ? 0.025 : 1 )
}

function getRegeneratorGain() {
    return Decimal.log(player.scrap.div("1e1425").plus(1), 1e75).pow(2)
    .times(getRegeneratorBoosts())
    .floor()
    .minus(player.regenerators)
    .max(0)
}

function getNextRegenerator() {
    return Decimal.pow(
        1e75,

        player.regenerators.plus( (player.decay.isInDecayverse) ? getRegeneratorGain() : 0 )
        .plus(1)
        .div(getRegeneratorBoosts())
        .pow(1/2)
    ) 
    .times("1e1425")
    //complication :(
}

function getDecayResistance() {
    return new Decimal(1)
    .times(Decimal.log(player.regenerators.plus(100), 100))
}

function getDecayDivision() {
    return player.decay.amount
    .pow(getDecayResistance().pow(-1))
    .pow( (player.decay.isInDecayverse) ? 1 : 0 )
    .max(1)
}

function getDecayGrowthRate() {
    return Decimal.pow(1.001, ( (player.decay.isInDecayverse) ? Decimal.log(player.scrap.plus(1), 100) : 0))
}

function getSuperDecayGrowthRate() {
    return Decimal.pow(
        1.000006,
        (player.boosterChallenges.isActive[7]) ? Decimal.log(player.scrap.plus(1), 4).div(200) : 0
    )
}

function getSuperDecayEffect() {
    return player.superDecay.pow(10)
    .pow( (player.boosterChallenges.isActive[7]) ? 1 : 0 )
    .pow(  Decimal.log(player.superDecay.plus(10), 10)  )
}

function superDecayDoes(diff) {
    player.scrap = player.scrap.div(
        getSuperDecayEffect()
        .pow(diff)
    )

    player.goldenScrap = player.goldenScrap.div(
        getSuperDecayEffect()
        .pow(diff)
    )

    player.magnets = player.magnets.div(
        getSuperDecayEffect()
        .pow(diff)
    )

    player.gainedMagnets = player.gainedMagnets.div(
        getSuperDecayEffect()
        .pow(diff)
    )

    player.steelBeams = player.steelBeams.div(
        getSuperDecayEffect()
        .pow(diff)
    )

    player.gainedSteelBeams = player.gainedSteelBeams.div(
        getSuperDecayEffect()
        .pow(diff)
    )

    player.electrons = player.electrons.div(
        getSuperDecayEffect()
        .pow(diff)
    )

    player.protons = player.protons.div(
        getSuperDecayEffect()
        .pow(diff)
    )

    player.bricks = player.bricks.div(
        getSuperDecayEffect()
        .pow(diff)
    )

    player.gainedBricks = player.gainedBricks.div(
        getSuperDecayEffect()
        .pow(diff)
    )

    player.wrenches = player.wrenches.div(
        getSuperDecayEffect()
        .pow(diff)
    )

    player.gainedWrenches = player.gainedWrenches.div(
        getSuperDecayEffect()
        .pow(diff)
    )

    player.regenerators = player.regenerators.div(
        getSuperDecayEffect()
        .pow(diff)
    )

    player.regenPoints = player.regenPoints.div(
        getSuperDecayEffect()
        .pow(diff)
    )
}

function generateRP(diff) {
    player.regenPoints = player.regenPoints.add(
        getRegenPointGain()
        .times(diff)
    )
}

function superDecayGrowthTick(diff) {
    player.superDecay = player.superDecay.times(
        getSuperDecayGrowthRate()
        .pow(diff)
    )
}

function decayGrowthTick(diff) {
    player.decay.amount = player.decay.amount.times(
        getDecayGrowthRate()
        .pow(diff)
    )
}