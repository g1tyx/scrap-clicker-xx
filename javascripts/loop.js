function getTimeSpeed() {
    return new Decimal(1)
}




function gameLoop() {
    let now = Date.now();
    let diff = new Decimal((now - player.lastUpdate) / 1000).times(getTimeSpeed());
    if (diff.lt(0)) diff = new Decimal(0)
    
    superDecayDoes(diff)
    generateFuel(diff)
    generateBoosters(diff)
    gainBCCompletions()
    produceThermalEnergy(diff)
    produceBoosterPoints(diff)
    generateRP(diff)
    decayGrowthTick(diff)
    superDecayGrowthTick(diff)
    generateWrenches(diff)
    generateBricks(diff)
    produceLowerFactoryTier(diff)
    increaseAutoDids(diff)
    produceEachOther(diff)
    produce_RMU_Levels(diff)
    prestigeTick(diff)

    player.electrons = player.electrons.add(
        getElectronGain()
        .times(player.brickUpgrades.repeatable.level[3].times(0.020))
        .times(diff)
    )

    player.protons = player.protons.add(
        getProtonGain()
        .times(player.brickUpgrades.repeatable.level[3].times(0.020))
        .times(diff)
    )
    
    player.goldenScrap = player.goldenScrap.add(getGoldenScrapProduction().times(diff))

    if (player.bestScraps.lte(player.scrap)) {
        player.bestScraps = player.scrap
    }

    if (player.bestBoosters.lte(player.boosters)) {
        player.bestBoosters = player.boosters
    }

    
    
    player.timeSpentInThisPrestige = player.timeSpentInThisPrestige.add(
        Decimal.times(1, diff)
        .times(
            Decimal.pow(
                ( player.boosterChallenges.isActive[3] ? 1.0005 : 1 ),
                player.multiplicatorBought
            )
        )
    )

    player.scrap = player.scrap.add(
        getTotalScrapsPerSecond()
        .times(getScrapGain())
        .times(diff)
    )
    
    
    
    player.lastUpdate = now
};