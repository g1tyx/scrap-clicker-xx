//min plus max minus
//min times max div

function buyFactory(amount, i) {
    if (i == 0) {
        let costScaling = function() {
            return player.factory[0].costScaling
            .pow( player.boosterChallenges.isActive[4] ? 0 : 1 )
            .pow(getScalingWeaknesses(0).pow(-1))
        }
        if (!player.boosterChallenges.isActive[4]) {
            if (amount == "singles") {
                if (player.scrap.gte(Decimal.pow(costScaling(), player.factory[0].bought).times(player.factory[0].cost.div(getBoosterPointTypeEffects(1))))) {
                    player.scrap = player.scrap.minus(Decimal.pow(costScaling(), player.factory[0].bought).times(player.factory[0].cost.div(getBoosterPointTypeEffects(1))))
                    player.factory[0].bought = player.factory[0].bought.add(1)
                }
            } else if (amount == "max") {
                while (player.scrap.gte(Decimal.pow(costScaling(), player.factory[0].bought).times(player.factory[0].cost.div(getBoosterPointTypeEffects(1))))) {
                    let amount1 = Decimal.affordGeometricSeries(player.scrap, player.factory[0].cost.div(getBoosterPointTypeEffects(1)), costScaling(), player.factory[0].bought)
                    let price1 = Decimal.sumGeometricSeries(amount1, player.factory[0].cost.div(getBoosterPointTypeEffects(1)), costScaling(), player.factory[0].bought)
                    player.factory[0].bought = player.factory[0].bought.add(amount1)
                    player.scrap = player.scrap.sub(price1)
                }
            }
        } else if (player.boosterChallenges.isActive[4]) {
            if (amount == "singles") {
                if (player.scrap.gte(Decimal.pow(costScaling(), player.factory[0].bought).times(player.factory[0].cost.div(getBoosterPointTypeEffects(1))))) {
                    player.scrap = player.scrap.minus(Decimal.pow(costScaling(), player.factory[0].bought).times(player.factory[0].cost.div(getBoosterPointTypeEffects(1))))
                    player.factory[0].bought = player.factory[0].bought.add(1)
                }
            } else if (amount == "max") {
                if (player.scrap.gte(Decimal.pow(costScaling(), player.factory[0].bought).times(player.factory[0].cost.div(getBoosterPointTypeEffects(1))))) {
                    let limitAmount = function() {
                        return player.multiplicatorBought.plus(1).pow(0.5).floor()
                    }
                    let affordableAmount = function() {
                        return player.scrap
                        .div(
                            Decimal.pow(costScaling(), player.factory[0].bought)
                            .times(
                                player.factory[0].cost
                                .div(getBoosterPointTypeEffects(1))
                            )
                        )
                        .min(limitAmount())
                        .floor()
                    }
                    player.factory[0].bought = player.factory[0].bought.add(affordableAmount())
                    player.scrap = player.scrap.minus(
                        affordableAmount().times(
                            player.factory[0].cost
                            .div(getBoosterPointTypeEffects(1))
                        )
                    )
                }
            }
        }
    }

    if (i == 1) {
        let costScaling = function() {
            return player.factory[1].costScaling
            .pow(getScalingWeaknesses(1).pow(-1))
        }
        if (amount == "singles") {
            if (player.goldenScrap.gte(Decimal.pow(costScaling(), player.factory[1].bought).times(player.factory[1].cost.div(getBoosterPointTypeEffects(1))))) {
                player.goldenScrap = player.goldenScrap.minus(Decimal.pow(costScaling(), player.factory[1].bought).times(player.factory[1].cost.div(getBoosterPointTypeEffects(1))))
                player.factory[1].bought = player.factory[1].bought.add(1)
            }
        } else if (amount == "max") {
            while (player.goldenScrap.gte(Decimal.pow(costScaling(), player.factory[1].bought).times(player.factory[1].cost.div(getBoosterPointTypeEffects(1))))) {
                let amount1 = Decimal.affordGeometricSeries(player.goldenScrap, player.factory[1].cost.div(getBoosterPointTypeEffects(1)), costScaling(), player.factory[1].bought)
                let price1 = Decimal.sumGeometricSeries(amount1, player.factory[1].cost.div(getBoosterPointTypeEffects(1)), costScaling(), player.factory[1].bought)
                player.factory[1].bought = player.factory[1].bought.add(amount1)
                player.goldenScrap = player.goldenScrap.sub(price1)
            }
        }
    }

    if (i == 2) {
        let costScaling = function() {
            return player.factory[2].costScaling
            .pow(getScalingWeaknesses(2).pow(-1))
        }
        if (amount == "singles") {
            if (player.fuel.gte(Decimal.pow(costScaling(), player.factory[2].bought).times(player.factory[2].cost))) {
                player.fuel = player.fuel.minus(Decimal.pow(costScaling(), player.factory[2].bought).times(player.factory[2].cost))
                player.factory[2].bought = player.factory[2].bought.add(1)
            }
        } else if (amount == "max") {
            while (player.fuel.gte(Decimal.pow(costScaling(), player.factory[2].bought).times(player.factory[2].cost))) {
                let amount1 = Decimal.affordGeometricSeries(player.fuel, player.factory[2].cost, costScaling(), player.factory[2].bought)
                let price1 = Decimal.sumGeometricSeries(amount1, player.factory[2].cost, costScaling(), player.factory[2].bought)
                player.factory[2].bought = player.factory[2].bought.add(amount1)
                player.fuel = player.fuel.sub(price1)
            }
        }
    }
};

function getFactoryCostDisplay(x) {
    switch (x+1) {
        case 1:
            return "Cost: " + format(player.factory[0].cost.times(    Decimal.pow(player.factory[0].costScaling.pow(getScalingWeaknesses(0).pow(-1)).pow( player.boosterChallenges.isActive[4] ? 0 : 1 ), player.factory[0].bought)   ).div(getBoosterPointTypeEffects(1)))
        case 2:
            return "Cost: " + format(player.factory[1].cost.times(    Decimal.pow(player.factory[1].costScaling.pow(getScalingWeaknesses(1).pow(-1)), player.factory[1].bought)   ).div(getBoosterPointTypeEffects(1)))
        case 3:
            return "Cost: " + format(player.factory[2].cost.times(    Decimal.pow(player.factory[2].costScaling.pow(getScalingWeaknesses(2).pow(-1)), player.factory[2].bought)   ), 3, 1)
    }
}

function getFactoryGainBoost(i) {
    switch (i+1) {
        case 1:
            return new Decimal(0.02)
            .times(
                Decimal.add(getTotalFactories(1).times(0.1), 1)
                .pow( (player.magnetUpgrades.nonRepeatable.isBought[4]) ? 1 : 0)
            )
            .times(
                Decimal.add(getTotalFactories(1).times(0.03), 1)
                .pow( (player.goldenScrapUpgrades.isBought[12]) ? 1 : 0)
                .pow( (player.fuelUpgrades.isBought[5]) ? 1.6 : 1 )
                .pow( (player.fuelUpgrades.isBought[13]) ? 2 : 1)
            )
            .times(
                Decimal.add(getTotalFactories(1).times(0.01), 1)
                .pow( (player.goldenScrapUpgrades.isBought[13]) ? 3 : 0)
                .pow( (player.fuelUpgrades.isBought[5]) ? 1.6 : 1 )
            )
            .times(
                Decimal.add(getTotalFactories(1).times(0.005), 1)
                .pow( (player.brickUpgrades.nonRepeatable.isBought[6]) ? 5 : 0  )
            )
            .times(
                Decimal.add(getTotalFactories(1).times(0.01), 1)
                .pow(player.fuelUpgrades.isBought[3] ? 2 : 0)
            )
            .times( player.boosterChallenges.isActive[4] ? 0 : 1 )
        case 2:
            return new Decimal(2)
            .times(
                getTotalFactories(2).plus(1)
                .pow(
                    (
                        getTrueBCCompletions(0).min(25)
                        .plus(getTrueBCCompletions(0).max(25).minus(25).pow(1/3))
                    )
                    .pow(1/3).times(2)
                )
            )
        default:
            return 1
    }
}

function getTotalFactories(i) {
    return player.factory[i].bought.plus(player.factory[i].extra)
}

function produceLowerFactoryTier(diff) {
    for (let i = 2; i > 0; i--) {
        let gain = getTotalFactories(i).times(getFactoryGainBoost(i-1)).times(diff)
        player.factory[i - 1].extra = player.factory[i - 1].extra.add(gain)
    }
}

function getScalingWeaknesses(a) {
    switch (a+1) {
        case 1:
            return new Decimal(1)
        case 2:
            return new Decimal(1)
        case 3:
            return new Decimal(1)
            .times(
                Decimal.log(player.thermalEnergy.plus(1), 10).times(0.002).plus(1)
                .pow( (player.fuelUpgrades.isBought[9]) ? 1 : 0)
            )
    }
}