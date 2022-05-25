//neq = notEquals


//This is a place where random functions and codes live


let player = {
    lastUpdate : Date.now(),
    scrap : new Decimal("0"),
    bestScraps : new Decimal("0"),
    scrapsPerClick : new Decimal("1"),
    scrapsPerSecond : new Decimal("0"),
    scrapClicks : new Decimal("0"),
    unmanualScrapClicks : new Decimal("0"),
    factory : [
        {
            cost : new Decimal("10"),
            costScaling : new Decimal("1.01"),
            bought : new Decimal("0"),
            extra : new Decimal("0"),
        },

        {
            cost : new Decimal("1e510"),
            costScaling : new Decimal("100"),
            bought : new Decimal("0"),
            extra : new Decimal("0"),
        },

        {
            cost : new Decimal("10"),
            costScaling : new Decimal("1.5"),
            bought : new Decimal("0"),
            extra : new Decimal("0"),
        }
    ],
    multiplicatorCost : new Decimal("100"),
    multiplicatorBought : new Decimal("0"),
    multiplicatorMultiplierBase : new Decimal("3"),
    multiplicatorCostScaling : new Decimal("4"),
    goldenScrap : new Decimal("0"),
    prestigeStat : [
        new Decimal("0"),
        new Decimal("0")
    ],
    timeSpentInThisPrestige : new Decimal("0"),
    magnets : new Decimal("0"),
    magnetsPerClick : new Decimal("1"),
    gainedMagnets: new Decimal("0"),
    steelBeams : new Decimal("0"),
    steelBeamsPerClick : new Decimal("1"),
    gainedSteelBeams : new Decimal("0"),
    electrons : new Decimal("0"),
    protons : new Decimal("0"),
    stars : {
        bought : new Decimal("0"),
        cost : new Decimal("1e4"),
        costScaling : new Decimal("1e15"),
        multiplierBase : new Decimal("16"),
    },
    goldenScrapUpgrades : {
        isBought : [
            false, false, false, false,
            false, false, false, false,
            false, false, false, false,
            false, false, false, false,
            false, false, false, false,
            false, false, false, false,
            false, false, false, false
            
        ],
        cost : [
            new Decimal("400"), new Decimal("1e13"), new Decimal("4e50"), new Decimal("2e63"),
            new Decimal("1e117"), new Decimal("2e186"), new Decimal("1e210"), new Decimal("1e220"),
            new Decimal("2^1024"), new Decimal("1e350"), new Decimal("1e495"), new Decimal("1e525"),
            new Decimal("1e552"), new Decimal("2e558"), new Decimal("5e645"), new Decimal("2^2330"),
            new Decimal("1e1000"), new Decimal("1e1150"), new Decimal("1e1250"), new Decimal("1e1450"),
            new Decimal("1e1850"), new Decimal("2^6646"), new Decimal("1e2650"), new Decimal("3.2e3200"),
            new Decimal("1e3320"), new Decimal("1e3380"), new Decimal("1e3450"), new Decimal("1e3500")
            
        ],
    },
    automator : [
        {
            cost: new Decimal("1e15"),
            costScaling: new Decimal("1000"),
            level: new Decimal("0"),
            maxLevel: new Decimal(Infinity),
            dids: new Decimal("0"),
            baseSpeed: new Decimal("1"),
            speedPerLevel: new Decimal("1.03"),
            isActive: false,
        },

        {
            cost: new Decimal("1e20"),
            costScaling: new Decimal("1e20"),
            level: new Decimal("0"),
            maxLevel: new Decimal("10"),
            dids: new Decimal("0"),
            baseSpeed: new Decimal("1"),
            speedPerLevel: new Decimal("1.5"),
            isActive: false
        }
    ],//.div(getBoosterPointTypeEffects(1))
    automator2 : {
        autoGSUpgrades : false,
        autoNMU : false,
        autoNBU : false,
        autoRBU : false
    },
    magnetUpgrades : {
        repeatable : [
            {
                levelsBought : new Decimal("0"),
                extraLevels : new Decimal("0"),
                cost : new Decimal("1e4"),
                costScaling : new Decimal("1.5"),
                requirement : () => {
                    return player.magnets.gte(
                        Decimal.pow(player.magnetUpgrades.repeatable[0].costScaling, player.magnetUpgrades.repeatable[0].levelsBought)
                        .times(player.magnetUpgrades.repeatable[0].cost)
                        .div(getBoosterPointTypeEffects(1))

                    ) && player.steelBeams.gte(
                        Decimal.pow(player.magnetUpgrades.repeatable[0].costScaling, player.magnetUpgrades.repeatable[0].levelsBought)
                        .times(player.magnetUpgrades.repeatable[0].cost)
                        .div(getBoosterPointTypeEffects(1))
                    )
                },
                buySingles : () => {
                    player.magnets = player.magnets.minus(
                        Decimal.pow(player.magnetUpgrades.repeatable[0].costScaling, player.magnetUpgrades.repeatable[0].levelsBought)
                        .times(player.magnetUpgrades.repeatable[0].cost)
                        .div(getBoosterPointTypeEffects(1))
                    )
                    player.steelBeams = player.steelBeams.minus(
                        Decimal.pow(player.magnetUpgrades.repeatable[0].costScaling, player.magnetUpgrades.repeatable[0].levelsBought)
                        .times(player.magnetUpgrades.repeatable[0].cost)
                        .div(getBoosterPointTypeEffects(1))
                    )

                    player.magnetUpgrades.repeatable[0].levelsBought = player.magnetUpgrades.repeatable[0].levelsBought.add(1)
                },
                buyMax : () => {
                    let determineLowest = function() {
                        if (player.magnets.lte(player.steelBeams)) {
                            return player.magnets
                        } else {
                            return player.steelBeams
                        }
                    }
                    let amounty = Decimal.affordGeometricSeries(determineLowest(), player.magnetUpgrades.repeatable[0].cost.div(getBoosterPointTypeEffects(1)), player.magnetUpgrades.repeatable[0].costScaling, player.magnetUpgrades.repeatable[0].levelsBought)
                    let pricey = Decimal.sumGeometricSeries(amounty, player.magnetUpgrades.repeatable[0].cost.div(getBoosterPointTypeEffects(1)), player.magnetUpgrades.repeatable[0].costScaling, player.magnetUpgrades.repeatable[0].levelsBought)
                    player.magnetUpgrades.repeatable[0].levelsBought = player.magnetUpgrades.repeatable[0].levelsBought.add(amounty)

                    player.magnets = player.magnets.minus(pricey)
                    player.steelBeams = player.steelBeams.minus(pricey)

                    
                },
                
            },


            {
                levelsBought : new Decimal("0"),
                extraLevels : new Decimal("0"),
                cost : new Decimal("2e3"),
                costScaling : new Decimal("1.15"),
                requirement : () => {
                    return player.protons.gte(
                        Decimal.pow(player.magnetUpgrades.repeatable[1].costScaling, player.magnetUpgrades.repeatable[1].levelsBought)
                        .times(player.magnetUpgrades.repeatable[1].cost)
                        .div(getBoosterPointTypeEffects(1))

                    ) && player.electrons.gte(
                        Decimal.pow(player.magnetUpgrades.repeatable[1].costScaling, player.magnetUpgrades.repeatable[1].levelsBought)
                        .times(player.magnetUpgrades.repeatable[1].cost)
                        .div(getBoosterPointTypeEffects(1))
                    )
                },
                buySingles : () => {
                    player.protons = player.protons.minus(
                        Decimal.pow(player.magnetUpgrades.repeatable[1].costScaling, player.magnetUpgrades.repeatable[1].levelsBought)
                        .times(player.magnetUpgrades.repeatable[1].cost)
                        .div(getBoosterPointTypeEffects(1))
                    )
                    player.electrons = player.electrons.minus(
                        Decimal.pow(player.magnetUpgrades.repeatable[1].costScaling, player.magnetUpgrades.repeatable[1].levelsBought)
                        .times(player.magnetUpgrades.repeatable[1].cost)
                        .div(getBoosterPointTypeEffects(1))
                    )

                    player.magnetUpgrades.repeatable[1].levelsBought = player.magnetUpgrades.repeatable[1].levelsBought.add(1)
                },
                buyMax : () => {
                    let determineLowest = function() {
                        if (player.protons.lte(player.electrons)) {
                            return player.protons
                        } else {
                            return player.electrons
                        }
                    }
                    let amounty = Decimal.affordGeometricSeries(determineLowest(), player.magnetUpgrades.repeatable[1].cost.div(getBoosterPointTypeEffects(1)), player.magnetUpgrades.repeatable[1].costScaling, player.magnetUpgrades.repeatable[1].levelsBought)
                    let pricey = Decimal.sumGeometricSeries(amounty, player.magnetUpgrades.repeatable[1].cost.div(getBoosterPointTypeEffects(1)), player.magnetUpgrades.repeatable[1].costScaling, player.magnetUpgrades.repeatable[1].levelsBought)
                    player.magnetUpgrades.repeatable[1].levelsBought = player.magnetUpgrades.repeatable[1].levelsBought.add(amounty)
                    
                    player.protons = player.protons.minus(pricey)
                    player.electrons = player.electrons.minus(pricey)

                    
                },
                
            },

            {
                levelsBought : new Decimal("0"),
                extraLevels : new Decimal("0"),
                cost : new Decimal("2.923892e11"),
                costScaling : new Decimal("1.15"),
                requirement : () => {
                    return player.magnets.gte(
                        Decimal.pow(player.magnetUpgrades.repeatable[2].costScaling, player.magnetUpgrades.repeatable[2].levelsBought)
                        .times(player.magnetUpgrades.repeatable[2].cost)
                        .div(getBoosterPointTypeEffects(1))

                    ) && player.protons.gte(
                        Decimal.pow(player.magnetUpgrades.repeatable[2].costScaling, player.magnetUpgrades.repeatable[2].levelsBought)
                        .times(player.magnetUpgrades.repeatable[2].cost)
                        .div(getBoosterPointTypeEffects(1))
                        
                    )
                },
                buySingles : () => {
                    player.magnets = player.magnets.minus(
                        Decimal.pow(player.magnetUpgrades.repeatable[2].costScaling, player.magnetUpgrades.repeatable[2].levelsBought)
                        .times(player.magnetUpgrades.repeatable[2].cost)
                        .div(getBoosterPointTypeEffects(1))
                    )
                    player.protons = player.protons.minus(
                        Decimal.pow(player.magnetUpgrades.repeatable[2].costScaling, player.magnetUpgrades.repeatable[2].levelsBought)
                        .times(player.magnetUpgrades.repeatable[2].cost)
                        .div(getBoosterPointTypeEffects(1))
                        
                    )

                    player.magnetUpgrades.repeatable[2].levelsBought = player.magnetUpgrades.repeatable[2].levelsBought.add(1)
                },
                buyMax : () => {
                    let determineLowest = function() {
                        if (player.protons.lte(player.magnets)) {
                            return player.protons
                        } else {
                            return player.magnets
                        }
                    }
                    let amounty = Decimal.affordGeometricSeries(determineLowest(), player.magnetUpgrades.repeatable[2].cost.div(getBoosterPointTypeEffects(1)), player.magnetUpgrades.repeatable[2].costScaling, player.magnetUpgrades.repeatable[2].levelsBought)
                    let pricey = Decimal.sumGeometricSeries(amounty, player.magnetUpgrades.repeatable[2].cost.div(getBoosterPointTypeEffects(1)), player.magnetUpgrades.repeatable[2].costScaling, player.magnetUpgrades.repeatable[2].levelsBought)
                    player.magnetUpgrades.repeatable[2].levelsBought = player.magnetUpgrades.repeatable[2].levelsBought.add(amounty)

                    player.magnets = player.magnets.minus(pricey)
                    player.protons = player.protons.minus(pricey)

                    
                },
                
            },

            {
                levelsBought : new Decimal("0"),
                extraLevels : new Decimal("0"),
                cost : new Decimal("1e10"),
                costScaling : new Decimal("1.15"),
                requirement : () => {
                    return player.steelBeams.gte(
                        Decimal.pow(player.magnetUpgrades.repeatable[3].costScaling, player.magnetUpgrades.repeatable[3].levelsBought)
                        .times(player.magnetUpgrades.repeatable[3].cost)
                        .div(getBoosterPointTypeEffects(1))

                    ) && player.electrons.gte(
                        Decimal.pow(player.magnetUpgrades.repeatable[3].costScaling, player.magnetUpgrades.repeatable[3].levelsBought)
                        .times(player.magnetUpgrades.repeatable[3].cost)
                        .div(getBoosterPointTypeEffects(1))
                        
                    )
                },
                buySingles : () => {
                    player.steelBeams = player.steelBeams.minus(
                        Decimal.pow(player.magnetUpgrades.repeatable[3].costScaling, player.magnetUpgrades.repeatable[3].levelsBought)
                        .times(player.magnetUpgrades.repeatable[3].cost)
                        .div(getBoosterPointTypeEffects(1))
                        
                    )
                    player.electrons = player.electrons.minus(
                        Decimal.pow(player.magnetUpgrades.repeatable[3].costScaling, player.magnetUpgrades.repeatable[3].levelsBought)
                        .times(player.magnetUpgrades.repeatable[3].cost)
                        .div(getBoosterPointTypeEffects(1))
                        
                    )

                    player.magnetUpgrades.repeatable[3].levelsBought = player.magnetUpgrades.repeatable[3].levelsBought.add(1)
                },
                buyMax : () => {
                    let determineLowest = function() {
                        if (player.electrons.lte(player.steelBeams)) {
                            return player.electrons
                        } else {
                            return player.steelBeams
                        }
                    }
                    let amounty = Decimal.affordGeometricSeries(determineLowest(), player.magnetUpgrades.repeatable[3].cost.div(getBoosterPointTypeEffects(1)), player.magnetUpgrades.repeatable[3].costScaling, player.magnetUpgrades.repeatable[3].levelsBought)
                    let pricey = Decimal.sumGeometricSeries(amounty, player.magnetUpgrades.repeatable[3].cost.div(getBoosterPointTypeEffects(1)), player.magnetUpgrades.repeatable[3].costScaling, player.magnetUpgrades.repeatable[3].levelsBought)
                    player.magnetUpgrades.repeatable[3].levelsBought = player.magnetUpgrades.repeatable[3].levelsBought.add(amounty)

                    player.steelBeams = player.steelBeams.minus(pricey)
                    player.electrons = player.electrons.minus(pricey)

                    
                },
                
            },

            

            
        ],
        nonRepeatable : {
            requirement : (type) => {
                switch (type+1) {
                    case 1:
                        return player.magnets.gte(new Decimal(1e4).div(getBoosterPointTypeEffects(1)));
                    case 2:
                        return player.steelBeams.gte(new Decimal(1e22).div(getBoosterPointTypeEffects(1)));
                    case 3:
                        return player.electrons.gte(new Decimal(3e15).div(getBoosterPointTypeEffects(1)))
                    case 4:
                        return player.protons.gte(new Decimal(1e16).div(getBoosterPointTypeEffects(1)))
                    case 5:
                        return player.magnets.gte(new Decimal(5e39).div(getBoosterPointTypeEffects(1)))
                    case 6:
                        return player.steelBeams.gte(new Decimal(1e42).div(getBoosterPointTypeEffects(1)))
                    case 7:
                        return player.electrons.gte(new Decimal(1.2e18).div(getBoosterPointTypeEffects(1)))
                    case 8:
                        return player.protons.gte(new Decimal(1.7976931348623157e23).div(getBoosterPointTypeEffects(1)))
                    case 9:
                        return player.magnets.gte(new Decimal(9.124e50).div(getBoosterPointTypeEffects(1)))
                    case 10:
                        return player.steelBeams.gte(new Decimal(1e63).div(getBoosterPointTypeEffects(1)))
                    case 11:
                        return player.electrons.gte(new Decimal(2e25).div(getBoosterPointTypeEffects(1)))
                    case 12:
                        return player.protons.gte(new Decimal(1e28).div(getBoosterPointTypeEffects(1)))
                    case 13:
                        return player.magnets.gte(new Decimal(8.585e85).div(getBoosterPointTypeEffects(1)))
                    case 14:
                        return player.steelBeams.gte(new Decimal("2^350").div(getBoosterPointTypeEffects(1)))
                    case 15:
                        return player.electrons.gte(new Decimal(1e35).div(getBoosterPointTypeEffects(1)))
                    case 16:
                        return player.protons.gte(new Decimal(1e42).div(getBoosterPointTypeEffects(1)))
                }
            },

            buy : (type) => {
                switch (type+1) {
                    case 1:
                        return player.magnets = player.magnets.minus(new Decimal(1e4).div(getBoosterPointTypeEffects(1)));
                    case 2:
                        return player.steelBeams = player.steelBeams.minus(new Decimal(1e22).div(getBoosterPointTypeEffects(1)));
                    case 3:
                        return player.electrons = player.electrons.minus(new Decimal(3e15).div(getBoosterPointTypeEffects(1)))
                    case 4:
                        return player.protons = player.protons.minus(new Decimal(1e16).div(getBoosterPointTypeEffects(1)))
                    case 5:
                        return player.magnets = player.magnets.minus(new Decimal(5e39).div(getBoosterPointTypeEffects(1)));
                    case 6:
                        return player.steelBeams = player.steelBeams.minus(new Decimal(1e42).div(getBoosterPointTypeEffects(1)));
                    case 7:
                        return player.electrons = player.electrons.minus(new Decimal(1.2e18).div(getBoosterPointTypeEffects(1)))
                    case 8:
                        return player.protons = player.protons.minus(new Decimal(1.7976931348623157e23).div(getBoosterPointTypeEffects(1)))
                    case 9:
                        return player.magnets = player.magnets.minus(new Decimal(9.124e50).div(getBoosterPointTypeEffects(1)));
                    case 10:
                        return player.steelBeams = player.steelBeams.minus(new Decimal(1e63).div(getBoosterPointTypeEffects(1)));
                    case 11:
                        return player.electrons = player.electrons.minus(new Decimal(2e25).div(getBoosterPointTypeEffects(1)))
                    case 12:
                        return player.protons = player.protons.minus(new Decimal(1e28).div(getBoosterPointTypeEffects(1)))
                    case 13:
                        return player.magnets = player.magnets.minus(new Decimal(8.585e85).div(getBoosterPointTypeEffects(1)));
                    case 14:
                        return player.steelBeams = player.steelBeams.minus(new Decimal("2^350").div(getBoosterPointTypeEffects(1)));
                    case 15:
                        return player.electrons = player.electrons.minus(new Decimal(2e25).div(getBoosterPointTypeEffects(1)))
                    case 16:
                        return player.protons = player.protons.minus(new Decimal(1e28).div(getBoosterPointTypeEffects(1)))
                }
            },

            isBought : [
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false, false, false, false
            ],
        }

    },
    bricks : new Decimal("0"),
    gainedBricks : new Decimal("0"),
    wrenches : new Decimal("0"),
    gainedWrenches : new Decimal("0"),
    brickUpgrades : {
        repeatable : {
            level : [
                new Decimal("0"),
                new Decimal("0"),
                new Decimal("0"),
                new Decimal("0")
            ],

            costFormula : [
                () => Decimal.pow(10, Decimal.pow(1.04, player.brickUpgrades.repeatable.level[0])).times(1e6).div(getRBUDiscount(0)),
                () => Decimal.pow(10, Decimal.pow(1.0075, player.brickUpgrades.repeatable.level[1].plus(5).pow(          (player.fuelUpgrades.isBought[1] ? 1.75 : 2)          ) )).times(1e14).div(getRBUDiscount(1)),
                () => Decimal.pow(10, Decimal.pow(1.01, player.brickUpgrades.repeatable.level[2].plus(240).pow(1.05))).times(1e17).div(getRBUDiscount(2)),
                () => Decimal.pow(10, player.brickUpgrades.repeatable.level[3].plus(3).pow(1.5)).times(1e7).div(getRBUDiscount(3))
            ],

            levelGain : [
                () => Decimal.log(Decimal.log(player.bricks.div(1e6).times(getRBUDiscount(0)), 10), 1.04).floor(),
                () => ((Decimal.log(Decimal.log(player.bricks.div(1e14).times(getRBUDiscount(1)), 10), 1.0075)).pow(          (player.fuelUpgrades.isBought[1] ? 1/1.75 : 1/2)          )).minus(5).floor(),
                () => Decimal.log(Decimal.log(player.bricks.div(1e17).times(getRBUDiscount(2)), 10), 1.01).pow(1/1.05).minus(240).floor(),
                () => (Decimal.log(player.bricks.div(1e7).times(getRBUDiscount(3)), 10).pow(1/1.5)).minus(3).floor()
            ]
        },

        nonRepeatable : {
            isBought : [
                false, false, false, false,
                false, false, false, false
            ],

            cost : [
                new Decimal("1e12"), new Decimal("1e35"), new Decimal("1e45"), new Decimal("2e90"),
                new Decimal("1e100"), new Decimal("2e110"), new Decimal("4e120"), new Decimal("8e130")
            ]
        }
    },
    regenerators : new Decimal("0"),
    regenPoints : new Decimal("0"),
    decay : {
        amount : new Decimal("1"),
        isInDecayverse : false
    },
    superDecay : new Decimal("1"),


    boosters : new Decimal("0"),
    bestBoosters : new Decimal("0"),
    thermalEnergy : new Decimal("0"),
    fuel : new Decimal("0"),
    fuelLost : new Decimal("0"),
    fuelUpgrades : {
        cost : [
            new Decimal("80"), new Decimal("95"), new Decimal("110"), new Decimal("125"),
            new Decimal("1000"), new Decimal("1000"), new Decimal("1000"), new Decimal("1000"),
            new Decimal("1e100"), new Decimal("1e115"), new Decimal("1e135"), new Decimal("1e250"),
            new Decimal("1e275"), new Decimal("4.040e404"), new Decimal("6.666e666"), new Decimal("1.111e1111")
        ],

        isBought : [
            false, false, false, false,
            false, false, false, false,
            false, false, false, false,
            false, false, false, false
        ]
    },
    savingMilestones : {
        requirement : [
            new Decimal("1"), new Decimal("4"), new Decimal("9"), new Decimal("16"),
            new Decimal("32"), new Decimal("64"), new Decimal("256"), new Decimal("5000"),
            new Decimal("5e9"), new Decimal("5e11"), new Decimal("1e50"), new Decimal("1e130"),
            new Decimal("1e750")
        ],
        isGotten : [
            false, false, false, false,
            false, false, false, false,
            false, false, false, false,
            false
        ]
    },
    transformedBoosters : [
        new Decimal("0"),
        new Decimal("0"),
        new Decimal("0"),
        new Decimal("0"),
        new Decimal("0"),
        new Decimal("0")
    ],

    boosterPoints : [
        new Decimal("0"),
        new Decimal("0"),
        new Decimal("0"),
        new Decimal("0"),
        new Decimal("0"),
        new Decimal("0")
    ],

    boosterChallenges : {
        isActive : [
            false, false,
            false, false,
            false, false,
            false, false
        ],
        bestScraps : [
            new Decimal("0"), new Decimal("0"),
            new Decimal("0"), new Decimal("0"),
            new Decimal("0"), new Decimal("0"),
            new Decimal("0"), new Decimal("0")
        ],
        scrapsRequired : [
            new Decimal("1e1150"), new Decimal("1e250"),
            new Decimal("1e1500"), new Decimal("1e185000"),
            new Decimal("1e4750"), new Decimal("1e80"),
            new Decimal("1e500000"), new Decimal("e7e6")
        ],
        completionFormula : [
            function() {return Decimal.log(player.boosterChallenges.bestScraps[0].max(1), player.boosterChallenges.scrapsRequired[0]).pow(0.5)},
            function() {return Decimal.log(player.boosterChallenges.bestScraps[1].max(1), player.boosterChallenges.scrapsRequired[1]).pow(0.25)},
            function() {return Decimal.log(player.boosterChallenges.bestScraps[2].max(1), player.boosterChallenges.scrapsRequired[2]).pow(0.3)},
            function() {return Decimal.log(player.boosterChallenges.bestScraps[3].max(1), player.boosterChallenges.scrapsRequired[3]).pow(0.3)},
            function() {return Decimal.log(player.boosterChallenges.bestScraps[4].max(1), player.boosterChallenges.scrapsRequired[4]).pow(0.35)},
            function() {return Decimal.log(player.boosterChallenges.bestScraps[5].max(1), player.boosterChallenges.scrapsRequired[5]).pow(0.3)},
            function() {return Decimal.log(player.boosterChallenges.bestScraps[6].max(1), player.boosterChallenges.scrapsRequired[6]).pow(0.3)},
            function() {return Decimal.log(player.boosterChallenges.bestScraps[7].max(1), player.boosterChallenges.scrapsRequired[7]).pow(0.3)},
        ],
        scrapDivider : [
            new Decimal("9.371e127"), new Decimal("1e200"),
            new Decimal("2^900"), new Decimal("1e91"),
            new Decimal("3^194"), new Decimal("1e500"),
            new Decimal("1e123"), new Decimal("e94000"),
        ]
    },

    options : {
        notation : "scientific",
        confirmations : {
            prestige : true,
            compression : true,
        }
    },

    achievementsGotten : [
        false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,
        false,false,false,false,false,false,false
    ]

}








var number_15 = new Decimal(15)

//The End of Decimal territory XD
var interval = 30
var saveInterval = 10000









/*

(Decimal.log(
    player.gainedMagnets.times(player.gainedSteelBeams).div("1e380").pow(0.01).plus(10),
    10
).min(20)).plus(
    Decimal.log(
        player.gainedMagnets.times(player.gainedSteelBeams).div("1e380").pow(0.01).plus(10),
        10
    ).max(20).minus(20).pow(0.5)
)

*/











function switchLever(something) {
    if (something == "GSU Autobuyer") {
        if (player.automator2.autoGSUpgrades == true) {
            player.automator2.autoGSUpgrades = false
        } else {
            player.automator2.autoGSUpgrades = true
        }
    }
    if (something == "NMU Autobuyer") {
        if (player.automator2.autoNMU == true) {
            player.automator2.autoNMU = false
        } else {
            player.automator2.autoNMU = true
        }
    }
    if (something == "NBU Autobuyer") {
        if (player.automator2.autoNBU == true) {
            player.automator2.autoNBU = false
        } else {
            player.automator2.autoNBU = true
        }
    }
    if (something == "RBU Autobuyer") {
        if (player.automator2.autoRBU == true) {
            player.automator2.autoRBU = false
        } else {
            player.automator2.autoRBU = true
        }
    }
}











function hideElement(id) {
    showElement(id, "none");
}

function showElement(id, type = "") {
    let elm = document.getElementById(id);
    if (elm) elm.style.display = type;
}

function buyMagnetUpgrade(i) {
    if (!player.magnetUpgrades.nonRepeatable.isBought[i] && player.magnetUpgrades.nonRepeatable.requirement(i)) {
        player.magnetUpgrades.nonRepeatable.buy(i)
        player.magnetUpgrades.nonRepeatable.isBought[i] = true
    }
}

function buyRepeatableMagnetUpgrade(amount, i) {
    if (amount == "singles") {
        if (player.magnetUpgrades.repeatable[i].requirement()) {
            player.magnetUpgrades.repeatable[i].buySingles()
        }
    } else if (amount == "max") {
        while (player.magnetUpgrades.repeatable[i].requirement()) {
            player.magnetUpgrades.repeatable[i].buyMax()
        }
    }
}

function getPossibleBoughtGSULeft() {
    let PossibleGSULeft = 6
    for (i = 0; i < 28; i++) {
        var bought = true
        if (i == 5 || i == 11 || i == 17 || i == 23 || i == 27) {
            bought = false
        } else {
            if (!player.goldenScrapUpgrades.isBought[i]) bought = false
        }
        
        if (bought) {
            PossibleGSULeft--
        }
        
    }
    return PossibleGSULeft
}

function buyGoldenScrapUpgrade(i) {
    let buy = function(i) {
        if (!player.goldenScrapUpgrades.isBought[i] && player.goldenScrap.gte(player.goldenScrapUpgrades.cost[i].div(getBoosterPointTypeEffects(1)))) {
            player.goldenScrap = player.goldenScrap.minus(player.goldenScrapUpgrades.cost[i].div(getBoosterPointTypeEffects(1)))
            player.goldenScrapUpgrades.isBought[i] = true
        }
    }

    if (player.boosterChallenges.isActive[6]) {
        if (getPossibleBoughtGSULeft() > 0 || i == 5 || i == 11 || i == 17 || i == 23 || i == 27) buy(i)
    } else {
        buy(i)
    }
    
}



function getGSGainSlowdown() {
    return new Decimal("1e20000")
    .times(getBoosterPointTypeEffects(2))
    .div( 
        new Decimal("1e20000")
        .pow( (player.boosterChallenges.isActive[2]) ? 1 : 0 )
    )
}

function getGSEffect() {
    return (player.goldenScrap.div(100)).plus(1)
    .pow( (player.magnetUpgrades.nonRepeatable.isBought[1]) ? 1.05 : 1 )
    .pow( (player.brickUpgrades.nonRepeatable.isBought[5]) ? 1.03 : 1 )
    .pow( (player.magnetUpgrades.nonRepeatable.isBought[14]) ? 
        (Decimal.log(
            player.gainedMagnets.times(player.gainedSteelBeams).div("1e380").pow(0.01).plus(10),
            10
        ).min(20)).plus(
            Decimal.log(
                player.gainedMagnets.times(player.gainedSteelBeams).div("1e380").pow(0.01).plus(10),
                10
            ).max(20).minus(20).pow(0.5)
        )
        .min(50)


    : 1)
    .pow( (player.decay.isInDecayverse) ? 0 : 1 )
    .pow( (player.boosterChallenges.isActive[1]) ? 2 : 1 )
    .pow( 
        Decimal.pow(
            ( player.boosterChallenges.isActive[3] ? 0.999 : 1 ),
            player.timeSpentInThisPrestige
            .times(
                player.boosterChallenges.isActive[3] ? 1 : 0
            )
        )
    )
    .pow(
        (player.fuelUpgrades.isBought[10]) ? 
        Decimal.log(player.thermalEnergy.plus(1), 100).times(0.03).plus(1).pow(0.25).min(2)

    : 1)
}

function getMultiplicatorSoftcap() {
    return new Decimal(500000)
    .plus(getBoosterPointTypeEffects(3))
    .times( (player.boosterChallenges.isActive[1]) ? 0 : 1 )
    .max(1)
}

function getMultiplicatorBase() {
    return player.multiplicatorMultiplierBase
    .plus(getBoosterPointTypeEffects(5).times(player.multiplicatorBought).div(1e6))

}
 
function getMultiplicatorEffect() {
    return Decimal.pow(
        getMultiplicatorBase(),
        player.multiplicatorBought.min(getMultiplicatorSoftcap().minus(1))
        .plus(
            player.multiplicatorBought.max(getMultiplicatorSoftcap().minus(1)).minus(getMultiplicatorSoftcap().minus(1))
            .pow(0.5)
        )
    )
}

//Welcome to return dimension
function getGoldenScrapFormula() {
    return Decimal.pow(player.scrap.min(getGSGainSlowdown()).div(1e16), 0.15).times(200)
    .times(Decimal.log(player.scrap.max(getGSGainSlowdown()).minus(getGSGainSlowdown()).div(getGSGainSlowdown()).plus(10), 10).pow(3))
    .times(
        getTotalFactories(0).times(1).plus(1)
        .pow( (player.goldenScrapUpgrades.isBought[1]) ? 1 : 0 )
    )
    .times(
        getTotalFactories(0).times(1).plus(1)
        .pow( (player.goldenScrapUpgrades.isBought[4]) ? 3 : 0 )
        .pow( (player.fuelUpgrades.isBought[13]) ? 2 : 1)
    )
    .times((getTotalLevelsOfRepeatableMagnetUpgrade(3).times(2).plus(1).pow(0.5)).max(1))
    .times( (player.achievementsGotten[16]) ? 2500 : 1)
    .times(
        getTotalFactories(1).plus(1)
        .pow( (player.goldenScrapUpgrades.isBought[14]) ? 3 : 0 )
    )
    .times(
        getTotalFactories(0).plus(1)
        .pow( (player.magnetUpgrades.nonRepeatable.isBought[9]) ? 1.25 : 0 )
    )
    .times(
        getTotalFactories(0).plus(1)
        .pow( (player.magnetUpgrades.nonRepeatable.isBought[11]) ? 1.25 : 0 )
    )
    .times(
        player.gainedBricks.plus(1)
        .pow( (player.brickUpgrades.nonRepeatable.isBought[4]) ? 0.25 : 0 )
    )
    .times(
        getTotalFactories(0).div(1e5).plus(1)
        .pow( (player.brickUpgrades.nonRepeatable.isBought[7]) ? 8 : 0 )
    )
    .times(
        getRegenPointEffect("Golden Scrap")
    )
    .times(
        (player.decay.isInDecayverse) ? 0 : 1
    )
    .times(getBoosterPointTypeEffects(0))
    .times(
        player.thermalEnergy.times(5).plus(1).pow(4)
        .pow( (player.fuelUpgrades.isBought[15]) ? 5 : 1)
    )
    .div(getSuperDecayEffect())
    .pow( (player.boosterChallenges.isActive[5]) ? 0.025 : 1 )
}

function getGoldenScrapProduction() {
    return getGoldenScrapFormula().div(100).times((getTotalLevelsOfRepeatableMagnetUpgrade(2).pow(0.5)).max(0))
}

function getScrapGain() {
    return Decimal.times(
        1,
        getMultiplicatorEffect()
    )
    .times(
        getGSEffect()
    )
    .times(
        Decimal.pow(Decimal.log(player.scrap.plus(2), 2).max(1), (player.goldenScrapUpgrades.isBought[3]) ? 3 : 0)
        .pow( player.goldenScrapUpgrades.isBought[16] ? 3 : 1 )
    )
    .times(
        getTotalFactories(0).times(0.01).times(1).plus(1)
        .pow((player.goldenScrapUpgrades.isBought[0]) ? 1 : 0)
    )
    .times(
        getTotalFactories(0).times(0.01).times(1).plus(1)
        .pow((player.goldenScrapUpgrades.isBought[1]) ? 1.4 : 0)
    )
    
    .times(
        (
            Decimal.pow(
                player.timeSpentInThisPrestige.plus(1),
                (player.goldenScrapUpgrades.isBought[2]) ? 4 : 0
            )
            .plus((player.goldenScrapUpgrades.isBought[11]) ? 1e12 : 0)
        )
        .max(1)
    )
    .times(
        Decimal.pow(
            player.stars.multiplierBase
            .plus( (player.goldenScrapUpgrades.isBought[18] ? 6 : 0) )
            .plus(getTrueBCCompletions(5).pow(1.3).times(5).times(player.stars.bought)),
            player.stars.bought
        )
        .pow(getTrueBCCompletions(1).pow(0.75).max(0.5).times(2).min(10))
        .pow(getBoosterPointTypeEffects(4))
    )
    .times(
        player.gainedMagnets.div(1e25)
        .times(player.gainedSteelBeams.div(1e25))
        .plus(1).pow(    (player.goldenScrapUpgrades.isBought[7]) ? 0.75 : 0)
        .pow( player.goldenScrapUpgrades.isBought[16] ? 1.5 : 1 )
    )
    .times(getAchievementMultiplier())
    .times(
        player.scrapClicks.min(5000).div(100).plus(1).pow(4)
        .times(player.scrapClicks.max(5000).minus(5000).div(6666).plus(1).pow(20))
        .pow( (player.achievementsGotten[15]) ? 2 : 0 )
    )
    .times(getTotalFactories(0).plus(1).pow( (player.goldenScrapUpgrades.isBought[9]) ? 5 : 0))
    .times(
        getTotalFactories(0).plus(1)
        .pow( (player.magnetUpgrades.nonRepeatable.isBought[8]) ? 1 : 0)
    )
    .times(
        getTotalFactories(0).plus(1)
        .pow( (player.magnetUpgrades.nonRepeatable.isBought[10]) ? 1 : 0)
    )
    .times(
        player.gainedBricks.div(1e12).plus(1)
        .pow( player.brickUpgrades.nonRepeatable.isBought[0] ? 1.2 : 0 )
    )
    .times(
        getRegenPointEffect("Scrap")
    )
    .div(getDecayDivision())
    .div( (player.decay.isInDecayverse) ? "1e800" : 1 )
    .times(getBoosterPointTypeEffects(0))
    .times(
        player.thermalEnergy.times(100).plus(1).pow(8)
        .pow( (player.fuelUpgrades.isBought[15]) ? 10 : 1)
    )
    .div(
        player.scrap.plus(1)
        .pow( (player.boosterChallenges.isActive[0]) ? 0.25 : 0)
    )
    //.div( (player.boosterChallenges.isActive[0]) ? player.boosterChallenges.scrapDivider[0] : 1 )
    .div( 
        player.boosterChallenges.scrapDivider[0]
        .pow( (player.boosterChallenges.isActive[0]) ? 1 : 0 )
    )
    .div( 
        player.boosterChallenges.scrapDivider[1]
        .pow( (player.boosterChallenges.isActive[1]) ? 1 : 0 )
    )
    .div( 
        player.boosterChallenges.scrapDivider[2]
        .pow( (player.boosterChallenges.isActive[2]) ? 1 : 0 )
    )
    .div( 
        player.boosterChallenges.scrapDivider[3]
        .pow( (player.boosterChallenges.isActive[3]) ? 1 : 0 )
    )
    .div( 
        player.boosterChallenges.scrapDivider[4]
        .pow( (player.boosterChallenges.isActive[4]) ? 1 : 0 )
    )
    .div( 
        player.boosterChallenges.scrapDivider[5]
        .pow( (player.boosterChallenges.isActive[5]) ? 1 : 0 )
    )
    .div( 
        player.boosterChallenges.scrapDivider[6]
        .pow( (player.boosterChallenges.isActive[6]) ? 1 : 0 )
    )
    .div( 
        player.boosterChallenges.scrapDivider[7]
        .pow( (player.boosterChallenges.isActive[7]) ? 1 : 0 )
    )
    .div(getSuperDecayEffect())
    .pow( (player.boosterChallenges.isActive[5]) ? 0.025 : 1 )
}

function getTotalScrapsPerSecond() {
    return player.scrapsPerSecond.plus(getTotalFactories(0))
}








//lolololololololololololol

function clickScrap() {
    player.scrap = player.scrap.add(
        Decimal.round(player.scrapsPerClick).times(getScrapGain())
    )
    player.scrapClicks = player.scrapClicks.add(1)
    player.unmanualScrapClicks = player.unmanualScrapClicks.add(1)
};

function buyMultiplicator(amount) {
    if (amount == "singles") {
        if (player.scrap.gte(Decimal.pow(player.multiplicatorCostScaling, player.multiplicatorBought).times(player.multiplicatorCost.div(getBoosterPointTypeEffects(1))))) {
            player.scrap = player.scrap.minus(Decimal.pow(player.multiplicatorCostScaling, player.multiplicatorBought).times(player.multiplicatorCost.div(getBoosterPointTypeEffects(1))))
            player.multiplicatorBought = player.multiplicatorBought.add(1)
        }
    } else if (amount == "max") {
        while (player.scrap.gte(Decimal.pow(player.multiplicatorCostScaling, player.multiplicatorBought).times(player.multiplicatorCost.div(getBoosterPointTypeEffects(1))))) {
            let amount2 = Decimal.affordGeometricSeries(player.scrap, player.multiplicatorCost.div(getBoosterPointTypeEffects(1)), player.multiplicatorCostScaling, player.multiplicatorBought)
            let price2 =  Decimal.sumGeometricSeries(amount2, player.multiplicatorCost.div(getBoosterPointTypeEffects(1)), player.multiplicatorCostScaling, player.multiplicatorBought)
            player.multiplicatorBought = player.multiplicatorBought.add(amount2)
            player.scrap = player.scrap.sub(price2)
        }
    }
};

function buyStars(amount) {
    if (amount == "singles") {
        if (player.goldenScrap.gte(Decimal.pow(player.stars.costScaling, player.stars.bought).times(player.stars.cost.div(getBoosterPointTypeEffects(1))))) {
            player.goldenScrap = player.goldenScrap.minus(Decimal.pow(player.stars.costScaling, player.stars.bought).times(player.stars.cost.div(getBoosterPointTypeEffects(1))))
            player.stars.bought = player.stars.bought.add(1)
        }
    } else if (amount == "max") {
        while (player.goldenScrap.gte(Decimal.pow(player.stars.costScaling, player.stars.bought).times(player.stars.cost.div(getBoosterPointTypeEffects(1))))) {
            let amount3 = Decimal.affordGeometricSeries(player.goldenScrap, player.stars.cost.div(getBoosterPointTypeEffects(1)), player.stars.costScaling, player.stars.bought)
            let price3 = Decimal.sumGeometricSeries(amount3, player.stars.cost.div(getBoosterPointTypeEffects(1)), player.stars.costScaling, player.stars.bought)
            player.stars.bought = player.stars.bought.add(amount3)
            player.goldenScrap = player.goldenScrap.sub(price3)
        }
    }
}

function hardReset() {
    player = {
        lastUpdate : Date.now(),
        scrap : new Decimal("0"),
        bestScraps : new Decimal("0"),
        scrapsPerClick : new Decimal("1"),
        scrapsPerSecond : new Decimal("0"),
        scrapClicks : new Decimal("0"),
        unmanualScrapClicks : new Decimal("0"),
        factory : [
            {
                cost : new Decimal("10"),
                costScaling : new Decimal("1.01"),
                bought : new Decimal("0"),
                extra : new Decimal("0"),
            },
    
            {
                cost : new Decimal("1e510"),
                costScaling : new Decimal("100"),
                bought : new Decimal("0"),
                extra : new Decimal("0"),
            },
    
            {
                cost : new Decimal("10"),
                costScaling : new Decimal("1.5"),
                bought : new Decimal("0"),
                extra : new Decimal("0"),
            }
        ],
        multiplicatorCost : new Decimal("100"),
        multiplicatorBought : new Decimal("0"),
        multiplicatorMultiplierBase : new Decimal("3"),
        multiplicatorCostScaling : new Decimal("4"),
        goldenScrap : new Decimal("0"),
        prestigeStat : [
            new Decimal("0"),
            new Decimal("0")
        ],
        timeSpentInThisPrestige : new Decimal("0"),
        magnets : new Decimal("0"),
        magnetsPerClick : new Decimal("1"),
        gainedMagnets: new Decimal("0"),
        steelBeams : new Decimal("0"),
        steelBeamsPerClick : new Decimal("1"),
        gainedSteelBeams : new Decimal("0"),
        electrons : new Decimal("0"),
        protons : new Decimal("0"),
        stars : {
            bought : new Decimal("0"),
            cost : new Decimal("1e4"),
            costScaling : new Decimal("1e15"),
            multiplierBase : new Decimal("16"),
        },
        goldenScrapUpgrades : {
            isBought : [
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false, false, false, false
                
            ],
            cost : [
                new Decimal("400"), new Decimal("1e13"), new Decimal("4e50"), new Decimal("2e63"),
                new Decimal("1e117"), new Decimal("2e186"), new Decimal("1e210"), new Decimal("1e220"),
                new Decimal("2^1024"), new Decimal("1e350"), new Decimal("1e495"), new Decimal("1e525"),
                new Decimal("1e552"), new Decimal("2e558"), new Decimal("5e645"), new Decimal("2^2330"),
                new Decimal("1e1000"), new Decimal("1e1150"), new Decimal("1e1250"), new Decimal("1e1450"),
                new Decimal("1e1850"), new Decimal("2^6646"), new Decimal("1e2650"), new Decimal("3.2e3200"),
                new Decimal("1e3320"), new Decimal("1e3380"), new Decimal("1e3450"), new Decimal("1e3500")
                
            ],
        },
        automator : [
            {
                cost: new Decimal("1e15"),
                costScaling: new Decimal("1000"),
                level: new Decimal("0"),
                maxLevel: new Decimal(Infinity),
                dids: new Decimal("0"),
                baseSpeed: new Decimal("1"),
                speedPerLevel: new Decimal("1.03"),
                isActive: false,
            },
    
            {
                cost: new Decimal("1e20"),
                costScaling: new Decimal("1e20"),
                level: new Decimal("0"),
                maxLevel: new Decimal("10"),
                dids: new Decimal("0"),
                baseSpeed: new Decimal("1"),
                speedPerLevel: new Decimal("1.5"),
                isActive: false
            }
        ],//.div(getBoosterPointTypeEffects(1))
        automator2 : {
            autoGSUpgrades : false,
            autoNMU : false,
            autoNBU : false,
            autoRBU : false
        },
        magnetUpgrades : {
            repeatable : [
                {
                    levelsBought : new Decimal("0"),
                    extraLevels : new Decimal("0"),
                    cost : new Decimal("1e4"),
                    costScaling : new Decimal("1.5"),
                    requirement : () => {
                        return player.magnets.gte(
                            Decimal.pow(player.magnetUpgrades.repeatable[0].costScaling, player.magnetUpgrades.repeatable[0].levelsBought)
                            .times(player.magnetUpgrades.repeatable[0].cost)
                            .div(getBoosterPointTypeEffects(1))
    
                        ) && player.steelBeams.gte(
                            Decimal.pow(player.magnetUpgrades.repeatable[0].costScaling, player.magnetUpgrades.repeatable[0].levelsBought)
                            .times(player.magnetUpgrades.repeatable[0].cost)
                            .div(getBoosterPointTypeEffects(1))
                        )
                    },
                    buySingles : () => {
                        player.magnets = player.magnets.minus(
                            Decimal.pow(player.magnetUpgrades.repeatable[0].costScaling, player.magnetUpgrades.repeatable[0].levelsBought)
                            .times(player.magnetUpgrades.repeatable[0].cost)
                            .div(getBoosterPointTypeEffects(1))
                        )
                        player.steelBeams = player.steelBeams.minus(
                            Decimal.pow(player.magnetUpgrades.repeatable[0].costScaling, player.magnetUpgrades.repeatable[0].levelsBought)
                            .times(player.magnetUpgrades.repeatable[0].cost)
                            .div(getBoosterPointTypeEffects(1))
                        )
    
                        player.magnetUpgrades.repeatable[0].levelsBought = player.magnetUpgrades.repeatable[0].levelsBought.add(1)
                    },
                    buyMax : () => {
                        let determineLowest = function() {
                            if (player.magnets.lte(player.steelBeams)) {
                                return player.magnets
                            } else {
                                return player.steelBeams
                            }
                        }
                        let amounty = Decimal.affordGeometricSeries(determineLowest(), player.magnetUpgrades.repeatable[0].cost.div(getBoosterPointTypeEffects(1)), player.magnetUpgrades.repeatable[0].costScaling, player.magnetUpgrades.repeatable[0].levelsBought)
                        let pricey = Decimal.sumGeometricSeries(amounty, player.magnetUpgrades.repeatable[0].cost.div(getBoosterPointTypeEffects(1)), player.magnetUpgrades.repeatable[0].costScaling, player.magnetUpgrades.repeatable[0].levelsBought)
                        player.magnetUpgrades.repeatable[0].levelsBought = player.magnetUpgrades.repeatable[0].levelsBought.add(amounty)
    
                        player.magnets = player.magnets.minus(pricey)
                        player.steelBeams = player.steelBeams.minus(pricey)
    
                        
                    },
                    
                },
    
    
                {
                    levelsBought : new Decimal("0"),
                    extraLevels : new Decimal("0"),
                    cost : new Decimal("2e3"),
                    costScaling : new Decimal("1.15"),
                    requirement : () => {
                        return player.protons.gte(
                            Decimal.pow(player.magnetUpgrades.repeatable[1].costScaling, player.magnetUpgrades.repeatable[1].levelsBought)
                            .times(player.magnetUpgrades.repeatable[1].cost)
                            .div(getBoosterPointTypeEffects(1))
    
                        ) && player.electrons.gte(
                            Decimal.pow(player.magnetUpgrades.repeatable[1].costScaling, player.magnetUpgrades.repeatable[1].levelsBought)
                            .times(player.magnetUpgrades.repeatable[1].cost)
                            .div(getBoosterPointTypeEffects(1))
                        )
                    },
                    buySingles : () => {
                        player.protons = player.protons.minus(
                            Decimal.pow(player.magnetUpgrades.repeatable[1].costScaling, player.magnetUpgrades.repeatable[1].levelsBought)
                            .times(player.magnetUpgrades.repeatable[1].cost)
                            .div(getBoosterPointTypeEffects(1))
                        )
                        player.electrons = player.electrons.minus(
                            Decimal.pow(player.magnetUpgrades.repeatable[1].costScaling, player.magnetUpgrades.repeatable[1].levelsBought)
                            .times(player.magnetUpgrades.repeatable[1].cost)
                            .div(getBoosterPointTypeEffects(1))
                        )
    
                        player.magnetUpgrades.repeatable[1].levelsBought = player.magnetUpgrades.repeatable[1].levelsBought.add(1)
                    },
                    buyMax : () => {
                        let determineLowest = function() {
                            if (player.protons.lte(player.electrons)) {
                                return player.protons
                            } else {
                                return player.electrons
                            }
                        }
                        let amounty = Decimal.affordGeometricSeries(determineLowest(), player.magnetUpgrades.repeatable[1].cost.div(getBoosterPointTypeEffects(1)), player.magnetUpgrades.repeatable[1].costScaling, player.magnetUpgrades.repeatable[1].levelsBought)
                        let pricey = Decimal.sumGeometricSeries(amounty, player.magnetUpgrades.repeatable[1].cost.div(getBoosterPointTypeEffects(1)), player.magnetUpgrades.repeatable[1].costScaling, player.magnetUpgrades.repeatable[1].levelsBought)
                        player.magnetUpgrades.repeatable[1].levelsBought = player.magnetUpgrades.repeatable[1].levelsBought.add(amounty)
                        
                        player.protons = player.protons.minus(pricey)
                        player.electrons = player.electrons.minus(pricey)
    
                        
                    },
                    
                },
    
                {
                    levelsBought : new Decimal("0"),
                    extraLevels : new Decimal("0"),
                    cost : new Decimal("2.923892e11"),
                    costScaling : new Decimal("1.15"),
                    requirement : () => {
                        return player.magnets.gte(
                            Decimal.pow(player.magnetUpgrades.repeatable[2].costScaling, player.magnetUpgrades.repeatable[2].levelsBought)
                            .times(player.magnetUpgrades.repeatable[2].cost)
                            .div(getBoosterPointTypeEffects(1))
    
                        ) && player.protons.gte(
                            Decimal.pow(player.magnetUpgrades.repeatable[2].costScaling, player.magnetUpgrades.repeatable[2].levelsBought)
                            .times(player.magnetUpgrades.repeatable[2].cost)
                            .div(getBoosterPointTypeEffects(1))
                            
                        )
                    },
                    buySingles : () => {
                        player.magnets = player.magnets.minus(
                            Decimal.pow(player.magnetUpgrades.repeatable[2].costScaling, player.magnetUpgrades.repeatable[2].levelsBought)
                            .times(player.magnetUpgrades.repeatable[2].cost)
                            .div(getBoosterPointTypeEffects(1))
                        )
                        player.protons = player.protons.minus(
                            Decimal.pow(player.magnetUpgrades.repeatable[2].costScaling, player.magnetUpgrades.repeatable[2].levelsBought)
                            .times(player.magnetUpgrades.repeatable[2].cost)
                            .div(getBoosterPointTypeEffects(1))
                            
                        )
    
                        player.magnetUpgrades.repeatable[2].levelsBought = player.magnetUpgrades.repeatable[2].levelsBought.add(1)
                    },
                    buyMax : () => {
                        let determineLowest = function() {
                            if (player.protons.lte(player.magnets)) {
                                return player.protons
                            } else {
                                return player.magnets
                            }
                        }
                        let amounty = Decimal.affordGeometricSeries(determineLowest(), player.magnetUpgrades.repeatable[2].cost.div(getBoosterPointTypeEffects(1)), player.magnetUpgrades.repeatable[2].costScaling, player.magnetUpgrades.repeatable[2].levelsBought)
                        let pricey = Decimal.sumGeometricSeries(amounty, player.magnetUpgrades.repeatable[2].cost.div(getBoosterPointTypeEffects(1)), player.magnetUpgrades.repeatable[2].costScaling, player.magnetUpgrades.repeatable[2].levelsBought)
                        player.magnetUpgrades.repeatable[2].levelsBought = player.magnetUpgrades.repeatable[2].levelsBought.add(amounty)
    
                        player.magnets = player.magnets.minus(pricey)
                        player.protons = player.protons.minus(pricey)
    
                        
                    },
                    
                },
    
                {
                    levelsBought : new Decimal("0"),
                    extraLevels : new Decimal("0"),
                    cost : new Decimal("1e10"),
                    costScaling : new Decimal("1.15"),
                    requirement : () => {
                        return player.steelBeams.gte(
                            Decimal.pow(player.magnetUpgrades.repeatable[3].costScaling, player.magnetUpgrades.repeatable[3].levelsBought)
                            .times(player.magnetUpgrades.repeatable[3].cost)
                            .div(getBoosterPointTypeEffects(1))
    
                        ) && player.electrons.gte(
                            Decimal.pow(player.magnetUpgrades.repeatable[3].costScaling, player.magnetUpgrades.repeatable[3].levelsBought)
                            .times(player.magnetUpgrades.repeatable[3].cost)
                            .div(getBoosterPointTypeEffects(1))
                            
                        )
                    },
                    buySingles : () => {
                        player.steelBeams = player.steelBeams.minus(
                            Decimal.pow(player.magnetUpgrades.repeatable[3].costScaling, player.magnetUpgrades.repeatable[3].levelsBought)
                            .times(player.magnetUpgrades.repeatable[3].cost)
                            .div(getBoosterPointTypeEffects(1))
                            
                        )
                        player.electrons = player.electrons.minus(
                            Decimal.pow(player.magnetUpgrades.repeatable[3].costScaling, player.magnetUpgrades.repeatable[3].levelsBought)
                            .times(player.magnetUpgrades.repeatable[3].cost)
                            .div(getBoosterPointTypeEffects(1))
                            
                        )
    
                        player.magnetUpgrades.repeatable[3].levelsBought = player.magnetUpgrades.repeatable[3].levelsBought.add(1)
                    },
                    buyMax : () => {
                        let determineLowest = function() {
                            if (player.electrons.lte(player.steelBeams)) {
                                return player.electrons
                            } else {
                                return player.steelBeams
                            }
                        }
                        let amounty = Decimal.affordGeometricSeries(determineLowest(), player.magnetUpgrades.repeatable[3].cost.div(getBoosterPointTypeEffects(1)), player.magnetUpgrades.repeatable[3].costScaling, player.magnetUpgrades.repeatable[3].levelsBought)
                        let pricey = Decimal.sumGeometricSeries(amounty, player.magnetUpgrades.repeatable[3].cost.div(getBoosterPointTypeEffects(1)), player.magnetUpgrades.repeatable[3].costScaling, player.magnetUpgrades.repeatable[3].levelsBought)
                        player.magnetUpgrades.repeatable[3].levelsBought = player.magnetUpgrades.repeatable[3].levelsBought.add(amounty)
    
                        player.steelBeams = player.steelBeams.minus(pricey)
                        player.electrons = player.electrons.minus(pricey)
    
                        
                    },
                    
                },
    
                
    
                
            ],
            nonRepeatable : {
                requirement : (type) => {
                    switch (type+1) {
                        case 1:
                            return player.magnets.gte(new Decimal(1e4).div(getBoosterPointTypeEffects(1)));
                        case 2:
                            return player.steelBeams.gte(new Decimal(1e22).div(getBoosterPointTypeEffects(1)));
                        case 3:
                            return player.electrons.gte(new Decimal(3e15).div(getBoosterPointTypeEffects(1)))
                        case 4:
                            return player.protons.gte(new Decimal(1e16).div(getBoosterPointTypeEffects(1)))
                        case 5:
                            return player.magnets.gte(new Decimal(5e39).div(getBoosterPointTypeEffects(1)))
                        case 6:
                            return player.steelBeams.gte(new Decimal(1e42).div(getBoosterPointTypeEffects(1)))
                        case 7:
                            return player.electrons.gte(new Decimal(1.2e18).div(getBoosterPointTypeEffects(1)))
                        case 8:
                            return player.protons.gte(new Decimal(1.7976931348623157e23).div(getBoosterPointTypeEffects(1)))
                        case 9:
                            return player.magnets.gte(new Decimal(9.124e50).div(getBoosterPointTypeEffects(1)))
                        case 10:
                            return player.steelBeams.gte(new Decimal(1e63).div(getBoosterPointTypeEffects(1)))
                        case 11:
                            return player.electrons.gte(new Decimal(2e25).div(getBoosterPointTypeEffects(1)))
                        case 12:
                            return player.protons.gte(new Decimal(1e28).div(getBoosterPointTypeEffects(1)))
                        case 13:
                            return player.magnets.gte(new Decimal(8.585e85).div(getBoosterPointTypeEffects(1)))
                        case 14:
                            return player.steelBeams.gte(new Decimal("2^350").div(getBoosterPointTypeEffects(1)))
                        case 15:
                            return player.electrons.gte(new Decimal(1e35).div(getBoosterPointTypeEffects(1)))
                        case 16:
                            return player.protons.gte(new Decimal(1e42).div(getBoosterPointTypeEffects(1)))
                    }
                },
    
                buy : (type) => {
                    switch (type+1) {
                        case 1:
                            return player.magnets = player.magnets.minus(new Decimal(1e4).div(getBoosterPointTypeEffects(1)));
                        case 2:
                            return player.steelBeams = player.steelBeams.minus(new Decimal(1e22).div(getBoosterPointTypeEffects(1)));
                        case 3:
                            return player.electrons = player.electrons.minus(new Decimal(3e15).div(getBoosterPointTypeEffects(1)))
                        case 4:
                            return player.protons = player.protons.minus(new Decimal(1e16).div(getBoosterPointTypeEffects(1)))
                        case 5:
                            return player.magnets = player.magnets.minus(new Decimal(5e39).div(getBoosterPointTypeEffects(1)));
                        case 6:
                            return player.steelBeams = player.steelBeams.minus(new Decimal(1e42).div(getBoosterPointTypeEffects(1)));
                        case 7:
                            return player.electrons = player.electrons.minus(new Decimal(1.2e18).div(getBoosterPointTypeEffects(1)))
                        case 8:
                            return player.protons = player.protons.minus(new Decimal(1.7976931348623157e23).div(getBoosterPointTypeEffects(1)))
                        case 9:
                            return player.magnets = player.magnets.minus(new Decimal(9.124e50).div(getBoosterPointTypeEffects(1)));
                        case 10:
                            return player.steelBeams = player.steelBeams.minus(new Decimal(1e63).div(getBoosterPointTypeEffects(1)));
                        case 11:
                            return player.electrons = player.electrons.minus(new Decimal(2e25).div(getBoosterPointTypeEffects(1)))
                        case 12:
                            return player.protons = player.protons.minus(new Decimal(1e28).div(getBoosterPointTypeEffects(1)))
                        case 13:
                            return player.magnets = player.magnets.minus(new Decimal(8.585e85).div(getBoosterPointTypeEffects(1)));
                        case 14:
                            return player.steelBeams = player.steelBeams.minus(new Decimal("2^350").div(getBoosterPointTypeEffects(1)));
                        case 15:
                            return player.electrons = player.electrons.minus(new Decimal(2e25).div(getBoosterPointTypeEffects(1)))
                        case 16:
                            return player.protons = player.protons.minus(new Decimal(1e28).div(getBoosterPointTypeEffects(1)))
                    }
                },
    
                isBought : [
                    false, false, false, false,
                    false, false, false, false,
                    false, false, false, false,
                    false, false, false, false
                ],
            }
    
        },
        bricks : new Decimal("0"),
        gainedBricks : new Decimal("0"),
        wrenches : new Decimal("0"),
        gainedWrenches : new Decimal("0"),
        brickUpgrades : {
            repeatable : {
                level : [
                    new Decimal("0"),
                    new Decimal("0"),
                    new Decimal("0"),
                    new Decimal("0")
                ],
    
                costFormula : [
                    () => Decimal.pow(10, Decimal.pow(1.04, player.brickUpgrades.repeatable.level[0])).times(1e6).div(getRBUDiscount(0)),
                    () => Decimal.pow(10, Decimal.pow(1.0075, player.brickUpgrades.repeatable.level[1].plus(5).pow(          (player.fuelUpgrades.isBought[1] ? 1.75 : 2)          ) )).times(1e14).div(getRBUDiscount(1)),
                    () => Decimal.pow(10, Decimal.pow(1.01, player.brickUpgrades.repeatable.level[2].plus(240).pow(1.05))).times(1e17).div(getRBUDiscount(2)),
                    () => Decimal.pow(10, player.brickUpgrades.repeatable.level[3].plus(3).pow(1.5)).times(1e7).div(getRBUDiscount(3))
                ],
    
                levelGain : [
                    () => Decimal.log(Decimal.log(player.bricks.div(1e6).times(getRBUDiscount(0)), 10), 1.04).floor(),
                    () => ((Decimal.log(Decimal.log(player.bricks.div(1e14).times(getRBUDiscount(1)), 10), 1.0075)).pow(          (player.fuelUpgrades.isBought[1] ? 1/1.75 : 1/2)          )).minus(5).floor(),
                    () => Decimal.log(Decimal.log(player.bricks.div(1e17).times(getRBUDiscount(2)), 10), 1.01).pow(1/1.05).minus(240).floor(),
                    () => (Decimal.log(player.bricks.div(1e7).times(getRBUDiscount(3)), 10).pow(1/1.5)).minus(3).floor()
                ]
            },
    
            nonRepeatable : {
                isBought : [
                    false, false, false, false,
                    false, false, false, false
                ],
    
                cost : [
                    new Decimal("1e12"), new Decimal("1e35"), new Decimal("1e45"), new Decimal("2e90"),
                    new Decimal("1e100"), new Decimal("2e110"), new Decimal("4e120"), new Decimal("8e130")
                ]
            }
        },
        regenerators : new Decimal("0"),
        regenPoints : new Decimal("0"),
        decay : {
            amount : new Decimal("1"),
            isInDecayverse : false
        },
        superDecay : new Decimal("1"),
    
    
        boosters : new Decimal("0"),
        bestBoosters : new Decimal("0"),
        thermalEnergy : new Decimal("0"),
        fuel : new Decimal("0"),
        fuelLost : new Decimal("0"),
        fuelUpgrades : {
            cost : [
                new Decimal("80"), new Decimal("95"), new Decimal("110"), new Decimal("125"),
                new Decimal("1000"), new Decimal("1000"), new Decimal("1000"), new Decimal("1000"),
                new Decimal("1e100"), new Decimal("1e115"), new Decimal("1e135"), new Decimal("1e250"),
                new Decimal("1e275"), new Decimal("4.040e404"), new Decimal("6.666e666"), new Decimal("1.111e1111")
            ],
    
            isBought : [
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false, false, false, false
            ]
        },
        savingMilestones : {
            requirement : [
                new Decimal("1"), new Decimal("4"), new Decimal("9"), new Decimal("16"),
                new Decimal("32"), new Decimal("64"), new Decimal("256"), new Decimal("5000"),
                new Decimal("5e9"), new Decimal("5e11"), new Decimal("1e50"), new Decimal("1e130"),
                new Decimal("1e750")
            ],
            isGotten : [
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false
            ]
        },
        transformedBoosters : [
            new Decimal("0"),
            new Decimal("0"),
            new Decimal("0"),
            new Decimal("0"),
            new Decimal("0"),
            new Decimal("0")
        ],
    
        boosterPoints : [
            new Decimal("0"),
            new Decimal("0"),
            new Decimal("0"),
            new Decimal("0"),
            new Decimal("0"),
            new Decimal("0")
        ],
    
        boosterChallenges : {
            isActive : [
                false, false,
                false, false,
                false, false,
                false, false
            ],
            bestScraps : [
                new Decimal("0"), new Decimal("0"),
                new Decimal("0"), new Decimal("0"),
                new Decimal("0"), new Decimal("0"),
                new Decimal("0"), new Decimal("0")
            ],
            scrapsRequired : [
                new Decimal("1e1150"), new Decimal("1e250"),
                new Decimal("1e1500"), new Decimal("1e185000"),
                new Decimal("1e4750"), new Decimal("1e80"),
                new Decimal("1e500000"), new Decimal("e7e6")
            ],
            completionFormula : [
                function() {return Decimal.log(player.boosterChallenges.bestScraps[0].max(1), player.boosterChallenges.scrapsRequired[0]).pow(0.5)},
                function() {return Decimal.log(player.boosterChallenges.bestScraps[1].max(1), player.boosterChallenges.scrapsRequired[1]).pow(0.25)},
                function() {return Decimal.log(player.boosterChallenges.bestScraps[2].max(1), player.boosterChallenges.scrapsRequired[2]).pow(0.3)},
                function() {return Decimal.log(player.boosterChallenges.bestScraps[3].max(1), player.boosterChallenges.scrapsRequired[3]).pow(0.3)},
                function() {return Decimal.log(player.boosterChallenges.bestScraps[4].max(1), player.boosterChallenges.scrapsRequired[4]).pow(0.35)},
                function() {return Decimal.log(player.boosterChallenges.bestScraps[5].max(1), player.boosterChallenges.scrapsRequired[5]).pow(0.3)},
                function() {return Decimal.log(player.boosterChallenges.bestScraps[6].max(1), player.boosterChallenges.scrapsRequired[6]).pow(0.3)},
                function() {return Decimal.log(player.boosterChallenges.bestScraps[7].max(1), player.boosterChallenges.scrapsRequired[7]).pow(0.3)},
            ],
            scrapDivider : [
                new Decimal("9.371e127"), new Decimal("1e200"),
                new Decimal("2^900"), new Decimal("1e91"),
                new Decimal("3^194"), new Decimal("1e500"),
                new Decimal("1e123"), new Decimal("e94000"),
            ]
        },
    
        options : {
            notation : "scientific",
            confirmations : {
                prestige : true,
                compression : true,
            }
        },
    
        achievementsGotten : [
            false,false,false,false,false,false,false,
            false,false,false,false,false,false,false,
            false,false,false,false,false,false,false,
            false,false,false,false,false,false,false,
            false,false,false,false,false,false,false
        ]
    
    }
    save();
    load();
    tab("production");
    subTab1("subPrestige2");
    subTab2("subSettings1");
    subTab3("subProduction1");
    subTab5("subBoosters2")
    transformationTab("Transformation1");
    location.reload()


}

function confirmHardReset() {
    if (confirm("Are you sure you want to hard reset? Hard reset returns back to where you start (Not prestige).")) {
        superConfirmHardReset();
    } else {
        alert("You saved your progress :D");
    }
}

function superConfirmHardReset() {
    if (confirm("ARE YOU REALLY SURE YOU WANT TO DO THAT??? YOU\'LL KILL YOUR PROGRESS!! THIS IS YOUR LAST CHANCE")) {
        hardReset();
    } else {
        alert("Pheww. I thought You want to kill your game :O");
    }
}

function updateText() {
    //document.getElementById("PossibleBoughtGSULeftText")  GSSlowdown
    document.getElementById("PossibleBoughtGSULeft").innerHTML = getPossibleBoughtGSULeft()

    document.getElementById("GoldenScrapUpgradeCost1").innerHTML = format(player.goldenScrapUpgrades.cost[0].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost2").innerHTML = format(player.goldenScrapUpgrades.cost[1].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost3").innerHTML = format(player.goldenScrapUpgrades.cost[2].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost4").innerHTML = format(player.goldenScrapUpgrades.cost[3].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost5").innerHTML = format(player.goldenScrapUpgrades.cost[4].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost6").innerHTML = format(player.goldenScrapUpgrades.cost[5].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost7").innerHTML = format(player.goldenScrapUpgrades.cost[6].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost8").innerHTML = format(player.goldenScrapUpgrades.cost[7].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost9").innerHTML = format(player.goldenScrapUpgrades.cost[8].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost10").innerHTML = format(player.goldenScrapUpgrades.cost[9].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost11").innerHTML = format(player.goldenScrapUpgrades.cost[10].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost12").innerHTML = format(player.goldenScrapUpgrades.cost[11].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost13").innerHTML = format(player.goldenScrapUpgrades.cost[12].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost14").innerHTML = format(player.goldenScrapUpgrades.cost[13].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost15").innerHTML = format(player.goldenScrapUpgrades.cost[14].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost16").innerHTML = format(player.goldenScrapUpgrades.cost[15].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost17").innerHTML = format(player.goldenScrapUpgrades.cost[16].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost18").innerHTML = format(player.goldenScrapUpgrades.cost[17].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost19").innerHTML = format(player.goldenScrapUpgrades.cost[18].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost20").innerHTML = format(player.goldenScrapUpgrades.cost[19].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost21").innerHTML = format(player.goldenScrapUpgrades.cost[20].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost22").innerHTML = format(player.goldenScrapUpgrades.cost[21].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost23").innerHTML = format(player.goldenScrapUpgrades.cost[22].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost24").innerHTML = format(player.goldenScrapUpgrades.cost[23].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost25").innerHTML = format(player.goldenScrapUpgrades.cost[24].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost26").innerHTML = format(player.goldenScrapUpgrades.cost[25].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost27").innerHTML = format(player.goldenScrapUpgrades.cost[26].div(getBoosterPointTypeEffects(1)))
    document.getElementById("GoldenScrapUpgradeCost28").innerHTML = format(player.goldenScrapUpgrades.cost[27].div(getBoosterPointTypeEffects(1)))

    document.getElementById("RepeatableMagnetUpgradeCost1").innerHTML = format(Decimal.pow(player.magnetUpgrades.repeatable[0].costScaling, player.magnetUpgrades.repeatable[0].levelsBought).times(player.magnetUpgrades.repeatable[0].cost).div(getBoosterPointTypeEffects(1)))
    document.getElementById("RepeatableMagnetUpgradeCost2").innerHTML = format(Decimal.pow(player.magnetUpgrades.repeatable[1].costScaling, player.magnetUpgrades.repeatable[1].levelsBought).times(player.magnetUpgrades.repeatable[1].cost).div(getBoosterPointTypeEffects(1)))
    document.getElementById("RepeatableMagnetUpgradeCost3").innerHTML = format(Decimal.pow(player.magnetUpgrades.repeatable[2].costScaling, player.magnetUpgrades.repeatable[2].levelsBought).times(player.magnetUpgrades.repeatable[2].cost).div(getBoosterPointTypeEffects(1)))
    document.getElementById("RepeatableMagnetUpgradeCost4").innerHTML = format(Decimal.pow(player.magnetUpgrades.repeatable[2].costScaling, player.magnetUpgrades.repeatable[3].levelsBought).times(player.magnetUpgrades.repeatable[3].cost).div(getBoosterPointTypeEffects(1)))

    document.getElementById("RepeatableMagnetUpgradeLevel1").innerHTML = format(player.magnetUpgrades.repeatable[0].levelsBought, 3, 0) + " (+" + ((player.magnetUpgrades.repeatable[0].extraLevels.lt(1e9)) ? player.magnetUpgrades.repeatable[0].extraLevels.floor().toNumber().toLocaleString("en-US") : format(player.magnetUpgrades.repeatable[0].extraLevels, 3, 0)) + ")"
    document.getElementById("RepeatableMagnetUpgradeLevel2").innerHTML = format(player.magnetUpgrades.repeatable[1].levelsBought, 3, 0) + " (+" + ((player.magnetUpgrades.repeatable[1].extraLevels.lt(1e9)) ? player.magnetUpgrades.repeatable[1].extraLevels.floor().toNumber().toLocaleString("en-US") : format(player.magnetUpgrades.repeatable[1].extraLevels, 3, 0)) + ")"
    document.getElementById("RepeatableMagnetUpgradeLevel3").innerHTML = format(player.magnetUpgrades.repeatable[2].levelsBought, 3, 0) + " (+" + ((player.magnetUpgrades.repeatable[2].extraLevels.lt(1e9)) ? player.magnetUpgrades.repeatable[2].extraLevels.floor().toNumber().toLocaleString("en-US") : format(player.magnetUpgrades.repeatable[2].extraLevels, 3, 0)) + ")"
    document.getElementById("RepeatableMagnetUpgradeLevel4").innerHTML = format(player.magnetUpgrades.repeatable[3].levelsBought, 3, 0) + " (+" + ((player.magnetUpgrades.repeatable[3].extraLevels.lt(1e9)) ? player.magnetUpgrades.repeatable[3].extraLevels.floor().toNumber().toLocaleString("en-US") : format(player.magnetUpgrades.repeatable[3].extraLevels, 3, 0)) + ")"

    document.getElementById("RepeatableMagnetUpgradeEffect1").innerHTML = format(
        (getTotalLevelsOfRepeatableMagnetUpgrade(0).div(5).plus(1).pow(3)).times(getTotalLevelsOfRepeatableMagnetUpgrade(0).plus(1))
        .pow( (player.fuelUpgrades.isBought[0]) ? 1.5 : 1 )
        .pow( (player.fuelUpgrades.isBought[2]) ? Decimal.log(player.bestBoosters.plus(30), 30).pow(1/3).min(4) : 1 )
        .pow(getTrueBCCompletions(3).times(2.56).max(1))
    )

    document.getElementById("RepeatableMagnetUpgradeEffect2").innerHTML = format(
        (getTotalLevelsOfRepeatableMagnetUpgrade(1).div(5).plus(1).pow(4)).times(getTotalLevelsOfRepeatableMagnetUpgrade(1).plus(1))
        .pow( (player.fuelUpgrades.isBought[2]) ? Decimal.log(player.bestBoosters.plus(30), 30).pow(1/3).min(4) : 1 )
        .pow(getTrueBCCompletions(3).times(1.6).max(1))
    )
    
    document.getElementById("RepeatableMagnetUpgradeEffect3").innerHTML = format((getTotalLevelsOfRepeatableMagnetUpgrade(2).pow(0.5)).max(0), 3, 3)
    document.getElementById("RepeatableMagnetUpgradeEffect4").innerHTML = format((getTotalLevelsOfRepeatableMagnetUpgrade(3).times(2).plus(1).pow(0.5)).max(1))

    document.getElementById("NormalMagnetUpgradeEffect1").innerHTML = format(player.prestigeStat[0].plus(1).pow(2.5))
    document.getElementById("NormalMagnetUpgradeEffect2").innerHTML = "^" + format(1, null, 2) + " → ^" + format(1.05, null, 2)
    document.getElementById("NormalMagnetUpgradeEffect3").innerHTML = "+" + format(Decimal.log(player.scrap.max(1), "1e1000").pow(3).div(1e4).max(0), 5, 5) + "/s"
    document.getElementById("NormalMagnetUpgradeEffect4").innerHTML = format(Decimal.log(player.goldenScrap.plus(1e50), 1e50).pow(1.22), 3, 3)
    document.getElementById("NormalMagnetUpgradeEffect5").innerHTML = format(Decimal.add(getTotalFactories(1).times(0.1), 1), 3, 2)
    document.getElementById("NormalMagnetUpgradeEffect6").innerHTML = format(Decimal.add(getTotalFactories(1), 1), 3, 2)
    //document.getElementById("NormalMagnetUpgradeEffect7").innerHTML doesn't exist
    //document.getElementById("NormalMagnetUpgradeEffect8").innerHTML doesn't exist
    document.getElementById("NormalMagnetUpgradeEffect9").innerHTML = format(getTotalFactories(0).plus(1).pow(1))
    document.getElementById("NormalMagnetUpgradeEffect10").innerHTML = format(getTotalFactories(0).plus(1).pow(1.25))
    document.getElementById("NormalMagnetUpgradeEffect11").innerHTML = format(getTotalFactories(0).plus(1).pow(1))
    document.getElementById("NormalMagnetUpgradeEffect12").innerHTML = format(getTotalFactories(0).plus(1).pow(1.25))
    document.getElementById("NormalMagnetUpgradeEffect13").innerHTML = format(Decimal.log(Decimal.log(player.gainedMagnets.times(player.gainedSteelBeams).div(1e165).plus(10), 10).pow(0.25).plus(9), 10), 3, 3)
    document.getElementById("NormalMagnetUpgradeEffect14").innerHTML = format(Decimal.add(getTotalFactories(1), 1).times(Decimal.log(getTotalFactories(1).plus(2), 2)), 3, 2)
    document.getElementById("NormalMagnetUpgradeEffect15").innerHTML = format(
        (Decimal.log(player.gainedMagnets.times(player.gainedSteelBeams).div("1e380").pow(0.01).plus(10), 10).min(20))
        .plus(
            Decimal.log(
                player.gainedMagnets.times(player.gainedSteelBeams).div("1e380").pow(0.01).plus(10),
                10
            ).max(20).minus(20).pow(0.5)
        )
        .min(50)
    , 4, 5)
    document.getElementById("NormalMagnetUpgradeEffect16").innerHTML = "To Electron effect: ^" + format(Decimal.log(player.protons.pow(0.01).plus(10), 10).min(10), 3, 5) + "<br>To Proton effect: ^" + format(Decimal.log(player.electrons.pow(0.01).plus(10), 10).min(10), 3, 5)
    

    document.getElementById("NormalMagnetUpgradeCost1").innerHTML = format(new Decimal(1e4).div(getBoosterPointTypeEffects(1)))//.div(getBoosterPointTypeEffects(1))
    document.getElementById("NormalMagnetUpgradeCost2").innerHTML = format(new Decimal(1e22).div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalMagnetUpgradeCost3").innerHTML = format(new Decimal(3e15).div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalMagnetUpgradeCost4").innerHTML = format(new Decimal(1e16).div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalMagnetUpgradeCost5").innerHTML = format(new Decimal(5e39).div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalMagnetUpgradeCost6").innerHTML = format(new Decimal(1e42).div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalMagnetUpgradeCost7").innerHTML = format(new Decimal(1.2e18).div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalMagnetUpgradeCost8").innerHTML = format(new Decimal(1.7976931348623157e23).div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalMagnetUpgradeCost9").innerHTML = format(new Decimal(9.124e50).div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalMagnetUpgradeCost10").innerHTML = format(new Decimal(1e63).div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalMagnetUpgradeCost11").innerHTML = format(new Decimal(2e25).div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalMagnetUpgradeCost12").innerHTML = format(new Decimal(1e28).div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalMagnetUpgradeCost13").innerHTML = format(new Decimal(8.585e85).div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalMagnetUpgradeCost14").innerHTML = format(new Decimal("2^350").div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalMagnetUpgradeCost15").innerHTML = format(new Decimal(1e35).div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalMagnetUpgradeCost16").innerHTML = format(new Decimal(1e42).div(getBoosterPointTypeEffects(1)))

    document.getElementById("GoldenScrapUpgradeEffect1").innerHTML = format(((getTotalFactories(0)).times(0.01)).plus(1), 3, 2) + "x"
    document.getElementById("GoldenScrapUpgradeEffect2.1").innerHTML = format(getTotalFactories(0).plus(1)) + "x"
    document.getElementById("GoldenScrapUpgradeEffect2.2").innerHTML = format(((getTotalFactories(0)).times(0.01).plus(1)).pow(1.4)) + "x"
    document.getElementById("GoldenScrapUpgradeEffect3").innerHTML = format((Decimal.pow(player.timeSpentInThisPrestige.plus(1), 4).plus((player.goldenScrapUpgrades.isBought[11]) ? 1e12 : 0)).max(1)) + "x"
    document.getElementById("GoldenScrapUpgradeEffect4").innerHTML = format(      Decimal.pow(Decimal.log(player.scrap.plus(2), 2), 3).pow( player.goldenScrapUpgrades.isBought[16] ? 3 : 1 )       ,3 ,2) + "x"
    document.getElementById("GoldenScrapUpgradeEffect5").innerHTML = format(Decimal.pow(getTotalFactories(0).plus(1), 3).pow( (player.fuelUpgrades.isBought[13]) ? 2 : 1)) + "x"
    //document.getElementById("GoldenScrapUpgradeEffect6").innerHTML doesn't exist
    //document.getElementById("GoldenScrapUpgradeEffect7").innerHTML doesn't exist
    document.getElementById("GoldenScrapUpgradeEffect8").innerHTML = format(player.gainedMagnets.div(1e25).times(player.gainedSteelBeams.div(1e25)).plus(1).pow(0.75).pow( player.goldenScrapUpgrades.isBought[16] ? 1.5 : 1 )) + "x"
    //document.getElementById("GoldenScrapUpgradeEffect9").innerHTML doesn't exist
    document.getElementById("GoldenScrapUpgradeEffect10").innerHTML = format(getTotalFactories(0).plus(1).pow(5)) + "x"
    document.getElementById("GoldenScrapUpgradeEffect11").innerHTML = "+" + format(Decimal.log(player.goldenScrap.plus(1), 10).pow(1.25).div(300), 3, 2) + "/s"
    document.getElementById("GoldenScrapUpgradeEffect12").innerHTML = format(60, 3, 0)
    document.getElementById("GoldenScrapUpgradeEffect13").innerHTML = format(Decimal.add(getTotalFactories(1).times(0.03), 1).pow( (player.fuelUpgrades.isBought[5]) ? 1.6 : 1 ).pow( (player.fuelUpgrades.isBought[13]) ? 2 : 1), 3, 2) + "x"
    document.getElementById("GoldenScrapUpgradeEffect14").innerHTML = format(Decimal.add(getTotalFactories(1).times(0.01), 1).pow(3).pow( (player.fuelUpgrades.isBought[5]) ? 1.6 : 1 ), 3, 2) + "x"
    document.getElementById("GoldenScrapUpgradeEffect15").innerHTML = format(getTotalFactories(1).plus(1).pow(3), 3, 2) + "x"
    document.getElementById("GoldenScrapUpgradeEffect16").innerHTML = "+" + format(getTotalFactories(1).pow(1/2).div(10), 3, 3) + "/s"
    document.getElementById("GoldenScrapUpgradeEffect17").innerHTML = "To 4th: ^" + format(1, 3, 2) + " → ^" + format(3, 3, 2) + "<br>To 8th: ^" + format(1, 3, 2) +" → ^" + format(1.5, 3, 2)
    //document.getElementById("GoldenScrapUpgradeEffect18").innerHTML doesn't exist
    document.getElementById("GoldenScrapUpgradeEffect19").innerHTML = format(6, 3, 1)
    document.getElementById("GoldenScrapUpgradeEffect20").innerHTML = format(Decimal.log(player.bricks.plus(1e9), 1e9).pow(1.4).pow( (player.goldenScrapUpgrades.isBought[22]) ? 1.5 : 1 ), 3, 1) + "x"
    document.getElementById("GoldenScrapUpgradeEffect21").innerHTML = format(1.03, 3, 2)
    document.getElementById("GoldenScrapUpgradeEffect22").innerHTML = format(player.brickUpgrades.repeatable.level[0].max(100).minus(100).times(0.01).times(getGSU22EffectBoosts()), 3, 2) + " extra wrench multiplier base"
    document.getElementById("GoldenScrapUpgradeEffect23").innerHTML = "^" + format(1, 3, 2) + " → ^" + format(1.5, 3, 2)
    //document.getElementById("GoldenScrapUpgradeEffect24").innerHTML doesn't exist
    //document.getElementById("GoldenScrapUpgradeEffect25").innerHTML doesn't exist
    document.getElementById("GoldenScrapUpgradeEffect26").innerHTML = "RP base gain: ^" + format(1, 3, 2) + " → ^" + format(1.25, 3, 2)
    document.getElementById("GoldenScrapUpgradeEffect27").innerHTML = "^" + format(
        Decimal.log(player.goldenScrap.div("1e3000").pow(0.00033).plus(10), 10).min(1.2)
    , 3, 5)

    document.getElementById("MagnetAmount").innerHTML = format(player.magnets, 3, 0)
    document.getElementById("SteelBeamAmount").innerHTML = format(player.steelBeams, 3, 0)
    document.getElementById("ElectronAmount").innerHTML = format(player.electrons)
    document.getElementById("ProtonAmount").innerHTML = format(player.protons)
    document.getElementById("MagnetsPerClick").innerHTML = format(getMagnetGain())
    document.getElementById("SteelBeamsPerClick").innerHTML = format(getSteelBeamGain())
    document.getElementById("PendingElectrons").innerHTML = format(getElectronGain())
    document.getElementById("PendingProtons").innerHTML = format(getProtonGain())
    document.getElementById("ElectronEffect").innerHTML = format(
        player.electrons.div(100).plus(1)
        .pow(player.brickUpgrades.repeatable.level[2].times(0.01).plus(1))
        .pow( (player.magnetUpgrades.nonRepeatable.isBought[15]) ? (
            Decimal.log(player.protons.pow(0.01).plus(10), 10).min(10)
        ) : 1 )
        
    , 3, 2)
    document.getElementById("ProtonEffect").innerHTML = format(
        player.protons.div(100).plus(1)
        .pow(player.brickUpgrades.repeatable.level[2].times(0.01).plus(1))
        .pow( (player.magnetUpgrades.nonRepeatable.isBought[15]) ? (
            Decimal.log(player.electrons.pow(0.01).plus(10), 10).min(10)
        ) : 1 )
        
    , 3, 2)



    document.getElementById("StarsDisplay").innerHTML = format(player.stars.bought, 3, 0)
    document.getElementById("StarEffect").innerHTML = format(
        Decimal.pow(
            player.stars.multiplierBase
            .plus(  player.goldenScrapUpgrades.isBought[18] ? 6 : 0  )
            .plus(getTrueBCCompletions(5).pow(1.3).times(5).times(player.stars.bought)),
            player.stars.bought
        )
        .pow(getTrueBCCompletions(1).pow(0.75).max(0.5).times(2).min(10))
        .pow(getBoosterPointTypeEffects(4))
    ) + "x"
    document.getElementById("BuyStarsDisplay").innerHTML = format(Decimal.pow(player.stars.costScaling, player.stars.bought).times(player.stars.cost.div(getBoosterPointTypeEffects(1))))



    document.getElementById("BrickAmount").innerHTML = format(player.bricks, 3, 0)
    document.getElementById("BricksPerSecond").innerHTML = format(getTotalBricksPerSecond(), 3, 2)
    document.getElementById("BrickSelfBoost").innerHTML = format(getBrickSelfBoostFormula(), 3, 2)
    document.getElementById("BrickSelfBoostStrength").innerHTML = format(getBrickSelfBoostStrength().times(100), 3, 2)
    document.getElementById("WrenchAmount").innerHTML = format(player.wrenches, 3, 0)
    document.getElementById("PendingWrenches").innerHTML = format(getWrenchBoosts().floor(), 3, 0)
    document.getElementById("WrenchEffect").innerHTML = "Multiplying your brick gain by " + format(player.wrenches.times(0.02).plus(1), 3, 3) + "x<br>and multiplying your brick self-boost strength by " + format(Decimal.log(player.wrenches.pow(2).plus(12).max(12), 12).times(1).pow(0.75)
    .pow(player.brickUpgrades.repeatable.level[1].times(0.002).plus(1))
    .pow( 
        Decimal.log(player.goldenScrap.div("1e3000").pow(0.00033).plus(10), 10).min(1.2)
        .pow( (player.goldenScrapUpgrades.isBought[26]) ? 1 : 0)
    ), 3, 4) + "x"

    document.getElementById("RepeatableBrickUpgradeCost1").innerHTML = format(player.brickUpgrades.repeatable.costFormula[0](), 3, 0)
    document.getElementById("RepeatableBrickUpgradeCost2").innerHTML = format(player.brickUpgrades.repeatable.costFormula[1](), 3, 0)
    document.getElementById("RepeatableBrickUpgradeCost3").innerHTML = format(player.brickUpgrades.repeatable.costFormula[2](), 3, 0)
    document.getElementById("RepeatableBrickUpgradeCost4").innerHTML = format(player.brickUpgrades.repeatable.costFormula[3](), 3, 0)

    document.getElementById("RepeatableBrickUpgradeLevel1").innerHTML = format(player.brickUpgrades.repeatable.level[0], 3, 0)
    document.getElementById("RepeatableBrickUpgradeLevel2").innerHTML = format(player.brickUpgrades.repeatable.level[1], 3, 0)
    document.getElementById("RepeatableBrickUpgradeLevel3").innerHTML = format(player.brickUpgrades.repeatable.level[2], 3, 0)
    document.getElementById("RepeatableBrickUpgradeLevel4").innerHTML = format(player.brickUpgrades.repeatable.level[3], 3, 0)

    document.getElementById("RepeatableBrickUpgradeEffect1.1").innerHTML = format(Decimal.pow(new Decimal(1.05).plus((player.goldenScrapUpgrades.isBought[21]) ? player.brickUpgrades.repeatable.level[0].max(100).minus(100).times(0.01).times(getGSU22EffectBoosts()) : 0), player.brickUpgrades.repeatable.level[0]), 3, 3)
    document.getElementById("RepeatableBrickUpgradeEffect1.2").innerHTML = format(new Decimal(1.05).plus((player.goldenScrapUpgrades.isBought[21]) ? player.brickUpgrades.repeatable.level[0].max(100).minus(100).times(0.01).times(getGSU22EffectBoosts()) : 0), 3, 2)
    document.getElementById("RepeatableBrickUpgradeEffect2").innerHTML = format(player.brickUpgrades.repeatable.level[1].times(0.002).plus(1), 3, 3)
    document.getElementById("RepeatableBrickUpgradeEffect3").innerHTML = format(player.brickUpgrades.repeatable.level[2].times(0.01).plus(1), 3, 3)
    document.getElementById("RepeatableBrickUpgradeEffect4").innerHTML = format(player.brickUpgrades.repeatable.level[3].times(0.020).times(100), 3, 3)


    document.getElementById("NormalBrickUpgradeCost1").innerHTML = format(player.brickUpgrades.nonRepeatable.cost[0].div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalBrickUpgradeCost2").innerHTML = format(player.brickUpgrades.nonRepeatable.cost[1].div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalBrickUpgradeCost3").innerHTML = format(player.brickUpgrades.nonRepeatable.cost[2].div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalBrickUpgradeCost4").innerHTML = format(player.brickUpgrades.nonRepeatable.cost[3].div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalBrickUpgradeCost5").innerHTML = format(player.brickUpgrades.nonRepeatable.cost[4].div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalBrickUpgradeCost6").innerHTML = format(player.brickUpgrades.nonRepeatable.cost[5].div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalBrickUpgradeCost7").innerHTML = format(player.brickUpgrades.nonRepeatable.cost[6].div(getBoosterPointTypeEffects(1)))
    document.getElementById("NormalBrickUpgradeCost8").innerHTML = format(player.brickUpgrades.nonRepeatable.cost[7].div(getBoosterPointTypeEffects(1)))

    //document.getElementById("NormalBrickUpgradeEffect1").innerHTML doesn't exist
    document.getElementById("NormalBrickUpgradeEffect2").innerHTML = format(player.wrenches.div(200).plus(1).pow(1.5), 3, 3)
    document.getElementById("NormalBrickUpgradeEffect3").innerHTML = format(Decimal.pow(10, player.prestigeStat[0].pow(0.85).times(1/5e4)), 3, 3)
    document.getElementById("NormalBrickUpgradeEffect4").innerHTML = format(getTotalFactories(1).times(0.005).plus(1).pow(3), 3, 1)
    document.getElementById("NormalBrickUpgradeEffect5").innerHTML = format(player.gainedBricks.plus(1).pow(0.25), 3, 1)
    document.getElementById("NormalBrickUpgradeEffect6").innerHTML = "^" + format(1, 3, 2) + " → ^" + format(1.03, 3, 2)
    document.getElementById("NormalBrickUpgradeEffect7").innerHTML = format(Decimal.add(getTotalFactories(1).times(0.005), 1).pow(5), 3, 2)
    document.getElementById("NormalBrickUpgradeEffect8").innerHTML = format(getTotalFactories(0).div(1e5).plus(1).pow(8), 3, 2)



    document.getElementById("RegeneratorAmount").innerHTML = ( (player.regenerators.gte(1e6)) ? format(player.regenerators, 3, 0) : player.regenerators.floor().toNumber().toLocaleString("en-US"))
    document.getElementById("RegeneratorEffect").innerHTML = format(player.regenerators.pow(1.25).pow( (player.goldenScrapUpgrades.isBought[25]) ? 1.25 : 1 ), 3, 1)
    document.getElementById("RegeneratorEffect2").innerHTML = format(Decimal.log(player.regenerators.plus(100), 100), 4, 4)
    document.getElementById("InDecayverse").innerHTML = ( (player.decay.isInDecayverse) ? "You are in decayverse" : "<br>" )
    document.getElementById("Decay").style.display = ( (player.decay.isInDecayverse) ? "" : "none" )
    document.getElementById("DecayAmount").innerHTML = format(player.decay.amount, 3, 1)
    document.getElementById("DecayEffect").innerHTML = format(getDecayDivision(), 3, 3)
    document.getElementById("DecayResistance").innerHTML = format(getDecayResistance().times(100), 3, 2)
    document.getElementById("NextRegenerator").innerHTML = format(getNextRegenerator(), 3, 0)
    document.getElementById("EnterDecayverseButton").innerHTML = ( (player.decay.isInDecayverse) ? "Exit Decayverse<br>for " + format(getRegeneratorGain(), 3, 0) + " Regenerators" : "Enter<br>Decayverse")
    document.getElementById("RegenPoints").innerHTML = format(player.regenPoints, 3, 1)
    document.getElementById("RPPerSecond").innerHTML = format(getRegenPointGain(), 3, 1)
    document.getElementById("RPEffect1").innerHTML = format(getRegenPointEffect("Golden Scrap"), 3, 2)
    document.getElementById("RPEffect2").innerHTML = format(getRegenPointEffect("Scrap"), 3, 2)

    document.getElementById("SuperDecayEffect").innerHTML = format(getSuperDecayEffect(), 3, 3)
    document.getElementById("SuperDecayAmount").innerHTML = format(player.superDecay, 3, 3)
    document.getElementById("SuperDecay").style.display = ( (player.boosterChallenges.isActive[7]) ? "" : "none" )








    document.getElementById("BoosterAmount").innerHTML = format(player.boosters, 3, 0)
    document.getElementById("PendingBoosters").innerHTML = format(getBoosterGain(), 3, 0)
    document.getElementById("BestBoosters").innerHTML = format(player.bestBoosters, 3, 0)
    document.getElementById("BoosterSlowdown").innerHTML = (  (Decimal.times(player.scrap, "e5e6").gte(getBoosterGainSlowdown())) ? "Booster gain starts to slowdown at "+ format(getBoosterGainSlowdown()) +" scraps!!" : "<br>"  )
    document.getElementById("PerformedCompressions").innerHTML = ( (player.prestigeStat[1].lte(1e15)) ? player.prestigeStat[1].floor().toNumber().toLocaleString("en-US") : format(player.prestigeStat[1], 3, 0))
    document.getElementById("FuelAmount").innerHTML = format(player.fuel, 3, 1)
    document.getElementById("PendingFuel").innerHTML = format(getFuelGain(), 3, 1)
    document.getElementById("FuelSpent").innerHTML = format(player.fuelLost, 3, 0)
    document.getElementById("ThermalEnergyAmount").innerHTML = format(player.thermalEnergy, 3, 2)
    document.getElementById("ThermalEnergyPerSecond").innerHTML = format(getThermalEnergyGain(), 3, 2)
    document.getElementById("ThermalEnergyEffect1").innerHTML = format(player.thermalEnergy.times(100).plus(1).pow(8).pow( (player.fuelUpgrades.isBought[15]) ? 10 : 1), 3, 2)
    document.getElementById("ThermalEnergyEffect2").innerHTML = format(player.thermalEnergy.times(5).plus(1).pow(4).pow( (player.fuelUpgrades.isBought[15]) ? 5 : 1), 3, 2)

    document.getElementById("TransformedBoosters1").innerHTML = format(player.transformedBoosters[0], 3, 0)
    document.getElementById("TransformedBoosters2").innerHTML = format(player.transformedBoosters[1], 3, 0)
    document.getElementById("TransformedBoosters3").innerHTML = format(player.transformedBoosters[2], 3, 0)
    document.getElementById("TransformedBoosters4").innerHTML = format(player.transformedBoosters[3], 3, 0)
    document.getElementById("TransformedBoosters5").innerHTML = format(player.transformedBoosters[4], 3, 0)
    document.getElementById("TransformedBoosters6").innerHTML = format(player.transformedBoosters[5], 3, 0)

    document.getElementById("BoosterPointType1").innerHTML = format(player.boosterPoints[0], 3, 3)
    document.getElementById("BoosterPointType2").innerHTML = format(player.boosterPoints[1], 3, 3)
    document.getElementById("BoosterPointType3").innerHTML = format(player.boosterPoints[2], 3, 3)
    document.getElementById("BoosterPointType4").innerHTML = format(player.boosterPoints[3], 3, 3)
    document.getElementById("BoosterPointType5").innerHTML = format(player.boosterPoints[4], 3, 3)
    document.getElementById("BoosterPointType6").innerHTML = format(player.boosterPoints[5], 3, 3)

    document.getElementById("BoosterPointTypePerSecond1").innerHTML = format(getBoosterPointGain(0), 3, 3)
    document.getElementById("BoosterPointTypePerSecond2").innerHTML = format(getBoosterPointGain(1), 3, 3)
    document.getElementById("BoosterPointTypePerSecond3").innerHTML = format(getBoosterPointGain(2), 3, 3)
    document.getElementById("BoosterPointTypePerSecond4").innerHTML = format(getBoosterPointGain(3), 3, 3)
    document.getElementById("BoosterPointTypePerSecond5").innerHTML = format(getBoosterPointGain(4), 3, 3)
    document.getElementById("BoosterPointTypePerSecond6").innerHTML = format(getBoosterPointGain(5), 3, 3)

    document.getElementById("BoosterPointTypeEffect1").innerHTML = format(getBoosterPointTypeEffects(0), 3, 3)
    document.getElementById("BoosterPointTypeEffect2").innerHTML = format(getBoosterPointTypeEffects(1), 3, 3)
    document.getElementById("BoosterPointTypeEffect3").innerHTML = format(getBoosterPointTypeEffects(2), 3, 3)
    document.getElementById("BoosterPointTypeEffect4").innerHTML = format(getBoosterPointTypeEffects(3), 3, 3)
    document.getElementById("BoosterPointTypeEffect5").innerHTML = format(getBoosterPointTypeEffects(4), 3, 3)
    document.getElementById("BoosterPointTypeEffect6").innerHTML = format(getBoosterPointTypeEffects(5), 3, 3)

    document.getElementById("BoostersRequired1").innerHTML = format(player.savingMilestones.requirement[0], 3, 0)
    document.getElementById("BoostersRequired2").innerHTML = format(player.savingMilestones.requirement[1], 3, 0)
    document.getElementById("BoostersRequired3").innerHTML = format(player.savingMilestones.requirement[2], 3, 0)
    document.getElementById("BoostersRequired4").innerHTML = format(player.savingMilestones.requirement[3], 3, 0)
    document.getElementById("BoostersRequired5").innerHTML = format(player.savingMilestones.requirement[4], 3, 0)
    document.getElementById("BoostersRequired6").innerHTML = format(player.savingMilestones.requirement[5], 3, 0)
    document.getElementById("BoostersRequired7").innerHTML = format(player.savingMilestones.requirement[6], 3, 0)
    document.getElementById("BoostersRequired8").innerHTML = format(player.savingMilestones.requirement[7], 3, 0)
    document.getElementById("BoostersRequired9").innerHTML = format(player.savingMilestones.requirement[8], 3, 0)
    document.getElementById("BoostersRequired10").innerHTML = format(player.savingMilestones.requirement[9], 3, 0)
    document.getElementById("BoostersRequired11").innerHTML = format(player.savingMilestones.requirement[10], 3, 0)
    document.getElementById("BoostersRequired12").innerHTML = format(player.savingMilestones.requirement[11], 3, 0)
    document.getElementById("BoostersRequired13").innerHTML = format(player.savingMilestones.requirement[12], 3, 0)

    document.getElementById("SavingMilestoneEffect3").innerHTML = format(Decimal.log(player.thermalEnergy.plus(1), 10).pow(1.5).times(0.01).times(100), 4, 4)
    document.getElementById("SavingMilestoneEffect9").innerHTML = format((player.bestBoosters.min(1e20).times(player.bestBoosters.max(1e20).div(1e20).pow(1/3))).div(1e9).plus(1).pow(3), 3, 3)

    document.getElementById("FuelCost1").innerHTML = format(player.fuelUpgrades.cost[0], 3, 0)
    document.getElementById("FuelCost2").innerHTML = format(player.fuelUpgrades.cost[1], 3, 0)
    document.getElementById("FuelCost3").innerHTML = format(player.fuelUpgrades.cost[2], 3, 0)
    document.getElementById("FuelCost4").innerHTML = format(player.fuelUpgrades.cost[3], 3, 0)
    document.getElementById("FuelCost5").innerHTML = format(player.fuelUpgrades.cost[4], 3, 0)
    document.getElementById("FuelCost6").innerHTML = format(player.fuelUpgrades.cost[5], 3, 0)
    document.getElementById("FuelCost7").innerHTML = format(player.fuelUpgrades.cost[6], 3, 0)
    document.getElementById("FuelCost8").innerHTML = format(player.fuelUpgrades.cost[7], 3, 0)
    document.getElementById("FuelCost9").innerHTML = format(player.fuelUpgrades.cost[8], 3, 0)
    document.getElementById("FuelCost10").innerHTML = format(player.fuelUpgrades.cost[9], 3, 0)
    document.getElementById("FuelCost11").innerHTML = format(player.fuelUpgrades.cost[10], 3, 0)
    document.getElementById("FuelCost12").innerHTML = format(player.fuelUpgrades.cost[11], 3, 0)
    document.getElementById("FuelCost13").innerHTML = format(player.fuelUpgrades.cost[12], 3, 0)
    document.getElementById("FuelCost14").innerHTML = format(player.fuelUpgrades.cost[13], 3, 0)
    document.getElementById("FuelCost15").innerHTML = format(player.fuelUpgrades.cost[14], 3, 0)
    document.getElementById("FuelCost16").innerHTML = format(player.fuelUpgrades.cost[15], 3, 0)

    /*
    
    Decimal.log(player.boosterPoints[0].plus(10), 10)
    .times(Decimal.log(player.boosterPoints[1].plus(10), 10))
    .times(Decimal.log(player.boosterPoints[2].plus(10), 10))
    .times(Decimal.log(player.boosterPoints[3].plus(10), 10))
    .times(Decimal.log(player.boosterPoints[4].plus(10), 10))
    .times(Decimal.log(player.boosterPoints[5].plus(10), 10))
    
    */
    //document.getElementById("FuelUpgradeEffect1").innerHTML doesn't exist
    //document.getElementById("FuelUpgradeEffect2").innerHTML doesn't exist
    document.getElementById("FuelUpgradeEffect3").innerHTML = format(  Decimal.log(player.bestBoosters.plus(30), 30).pow(1/3).min(4).plus(Decimal.log(player.bestBoosters.plus(30), 30).pow(1/3).max(4).minus(4).pow(0.5))  , 3, 4  )
    document.getElementById("FuelUpgradeEffect4").innerHTML = format(Decimal.add(getTotalFactories(1).times(0.01), 1).pow(2), 3, 2)
    document.getElementById("FuelUpgradeEffect5").innerHTML = format(Decimal.pow(1.01, player.multiplicatorBought.div(1000)), 3, 2)
    document.getElementById("FuelUpgradeEffect6").innerHTML = "^" + format(1, 3, 2) + " → ^" + format(1.6, 3, 2)
    document.getElementById("FuelUpgradeEffect7").innerHTML = format(getTotalFactories(0).plus(1).pow(0.75), 3, 2)
    document.getElementById("FuelUpgradeEffect8").innerHTML = format(getTotalFactories(2).div(5).plus(1).pow(2), 3, 2)
    document.getElementById("FuelUpgradeEffect9").innerHTML = format(Decimal.log(player.scrap.plus(10), 10), 3, 2)
    document.getElementById("FuelUpgradeEffect10").innerHTML = format(Decimal.log(player.thermalEnergy.plus(1), 10).times(0.002).plus(1), 3, 3)
    document.getElementById("FuelUpgradeEffect11").innerHTML = format(Decimal.log(player.thermalEnergy.plus(1), 100).times(0.03).plus(1).pow(0.25).min(2), 3, 3)
    document.getElementById("FuelUpgradeEffect12").innerHTML = format(
        Decimal.log(player.boosterPoints[0].plus(10), 10)
        .times(Decimal.log(player.boosterPoints[1].plus(10), 10))
        .times(Decimal.log(player.boosterPoints[2].plus(10), 10))
        .times(Decimal.log(player.boosterPoints[3].plus(10), 10))
        .times(Decimal.log(player.boosterPoints[4].plus(10), 10))
        .times(Decimal.log(player.boosterPoints[5].plus(10), 10))
        .pow(1.5)
    , 3, 3)
    document.getElementById("FuelUpgradeEffect13").innerHTML = format(getTotalFactories(1).div(100).plus(1).pow(0.25))
    document.getElementById("FuelUpgradeEffect14").innerHTML = "^" + format(1, 3, 2) + " → ^" + format(2, 3, 2)
    document.getElementById("FuelUpgradeEffect15").innerHTML = "^" + format(1, 3, 2) + " → ^" + format(1.4, 3, 2)
    document.getElementById("FuelUpgradeEffect16").innerHTML = "To Scrap: ^" + format(1, 3, 2) + " → ^" + format(10, 3, 2) + "<br>To GS: ^" + format(1, 3, 2) + " → ^" + format(5, 3, 2)
    //.pow( (player.fuelUpgrades.isBought[13]) ? 2 : 1)


    document.getElementById("BoosterChallengesActive").innerHTML = BCActiveText(checkActiveBoosterChallenges())
    for (i = 0; i < 8; i++) {
        document.getElementById("BCEnterExitText" + (i + 1)).innerHTML = BCActiveText2(i)
        document.getElementById("BCGoalAndBestScraps" + (i + 1)).innerHTML = "Goal:<br>" + format(player.boosterChallenges.scrapsRequired[i]) + " Scraps<br><br>Best:<br>" + format(player.boosterChallenges.bestScraps[i]) + " Scraps"
    }

    document.getElementById("BCEffect1").innerHTML = "Currently: /" + format(player.scrap.plus(1).pow(0.25), 3, 3)
    document.getElementById("BCEffect2").innerHTML = ""
    document.getElementById("BCEffect3").innerHTML = ""
    document.getElementById("BCEffect3.1").innerHTML = format("1e20000")
    document.getElementById("BCEffect4").innerHTML = ""
    document.getElementById("BCEffect4.1").innerHTML = format(0.999, 3, 3)
    document.getElementById("BCEffect5").innerHTML = "Current limit: " + format(player.multiplicatorBought.plus(1).pow(0.5).floor(), 3, 0) + " bought scrap factories per buy max"
    document.getElementById("BCEffect6").innerHTML = ""
    document.getElementById("BCEffect6.1").innerHTML = format(0.025, 3, 3)
    document.getElementById("BCEffect6").innerHTML = ""
    document.getElementById("BCEffect7").innerHTML = ""
    document.getElementById("BCEffect8").innerHTML = ""

    document.getElementById("BCScrapDivider1").innerHTML = format(player.boosterChallenges.scrapDivider[0], 3, 2)
    document.getElementById("BCScrapDivider2").innerHTML = format(player.boosterChallenges.scrapDivider[1], 3, 2)
    document.getElementById("BCScrapDivider3").innerHTML = format(player.boosterChallenges.scrapDivider[2], 3, 2)
    document.getElementById("BCScrapDivider4").innerHTML = format(player.boosterChallenges.scrapDivider[3], 3, 2)
    document.getElementById("BCScrapDivider5").innerHTML = format(player.boosterChallenges.scrapDivider[4], 3, 2)
    document.getElementById("BCScrapDivider6").innerHTML = format(player.boosterChallenges.scrapDivider[5], 3, 2)
    document.getElementById("BCScrapDivider7").innerHTML = format(player.boosterChallenges.scrapDivider[6], 3, 2)
    document.getElementById("BCScrapDivider8").innerHTML = format(player.boosterChallenges.scrapDivider[7], 3, 2)

    document.getElementById("BCCompletions1").innerHTML = format(player.boosterChallenges.completionFormula[0](), 3, 8)
    document.getElementById("BCCompletions2").innerHTML = format(player.boosterChallenges.completionFormula[1](), 3, 8)
    document.getElementById("BCCompletions3").innerHTML = format(player.boosterChallenges.completionFormula[2](), 3, 8)
    document.getElementById("BCCompletions4").innerHTML = format(player.boosterChallenges.completionFormula[3](), 3, 8)
    document.getElementById("BCCompletions5").innerHTML = format(player.boosterChallenges.completionFormula[4](), 3, 8)
    document.getElementById("BCCompletions6").innerHTML = format(player.boosterChallenges.completionFormula[5](), 3, 8)
    document.getElementById("BCCompletions7").innerHTML = format(player.boosterChallenges.completionFormula[6](), 3, 8)
    document.getElementById("BCCompletions8").innerHTML = format(player.boosterChallenges.completionFormula[7](), 3, 8)

    document.getElementById("TrueBCCompletions1").innerHTML = ( (getTrueBCCompletions(0).gte(1)) ? format(getTotalFactories(2).plus(1).pow((
        getTrueBCCompletions(0).max(1).min(25)
        .plus(getTrueBCCompletions(0).max(25).minus(25).pow(1/3))
    )
    .pow(1/3).times(2)), 3, 2) : "???" )
    document.getElementById("TrueBCCompletions2").innerHTML = ( (getTrueBCCompletions(1).gte(1)) ? format(getTrueBCCompletions(1).pow(0.75).max(1).times(2).min(10), 3, 4) : "???" )
    document.getElementById("TrueBCCompletions3").innerHTML = ( (getTrueBCCompletions(2).gte(1)) ? format(Decimal.log(player.prestigeStat[0].plus(2), 2).pow((getTrueBCCompletions(2).min(3).plus(getTrueBCCompletions(2).max(3).minus(3).pow(0.2))).max(1).times(2.5)), 3, 2) : "???" )
    document.getElementById("TrueBCCompletions4").innerHTML = ( (getTrueBCCompletions(3).gte(1)) ? format(getTrueBCCompletions(3).times(1.6).max(1), 3, 3) : "???" )// 2nd RMU
    document.getElementById("TrueBCCompletions4.1").innerHTML = ( (getTrueBCCompletions(3).gte(1)) ? format(getTrueBCCompletions(3).times(2.56).max(1), 3, 3) : "???" )// 1st RMU
    document.getElementById("TrueBCCompletions5").innerHTML = ( (getTrueBCCompletions(4).gte(1)) ? format(getTotalFactories(2).div(5).plus(1).pow(getTrueBCCompletions(4).max(1).min(4).plus(getTrueBCCompletions(4).max(4).minus(4).pow(0.25)).pow(0.75)), 3, 2) : "???" )
    document.getElementById("TrueBCCompletions6").innerHTML = ( (getTrueBCCompletions(5).gte(1)) ? format(getTrueBCCompletions(5).pow(1.3).max(1).times(5), 3, 3) : "???" )
    document.getElementById("TrueBCCompletions7").innerHTML = ( (getTrueBCCompletions(6).gte(1)) ? format(getTrueBCCompletions(6).pow(1.25).times(3).max(1), 3, 3) : "???" )
    document.getElementById("TrueBCCompletions8").innerHTML = ( (getTrueBCCompletions(7).gte(1)) ? format(player.brickUpgrades.repeatable.level[1].plus(1).pow(getTrueBCCompletions(7).max(1).times(3)), 3, 2) : "???" )

    /*
    
    Decimal.log(player.prestigeStat[0].plus(2), 2)
    .pow(
        (
            getTrueBCCompletions(2).min(3)
            .plus(getTrueBCCompletions(2).max(3).minus(3).pow(0.5))
        )
        .pow(1.15)
        .max(1)
        .times(2.5)
    )
    */















    document.getElementById("ScrapFactoryAmount").innerHTML = format(player.factory[0].bought, 3, 0)
    document.getElementById("MultiplicatorAmount").innerHTML = player.multiplicatorBought.floor().toNumber().toLocaleString("en-US")
    document.getElementById("BrokenMultiplicator").innerHTML = ( (player.multiplicatorBought.gte(getMultiplicatorSoftcap()) ? "broken" : "" ) )
    document.getElementById("MultiplicatorSoftcap").innerHTML = getMultiplicatorSoftcap().floor().toNumber().toLocaleString("en-US")
    document.getElementById("MultiplicatorEffect").innerHTML = format(getMultiplicatorEffect())
    document.getElementById("MultiplicatorBase").innerHTML = format(getMultiplicatorBase(), 3, 3)
    document.getElementById("NetMultiplierPerMultiplicator").innerHTML = format(
        Decimal.pow(
            getMultiplicatorBase(),
            player.multiplicatorBought.min(getMultiplicatorSoftcap().minus(1))
            .plus(
                player.multiplicatorBought.max(getMultiplicatorSoftcap().minus(1)).minus(getMultiplicatorSoftcap().minus(1))
                .pow(0.5)
            ).max(1)
            .div(player.multiplicatorBought.max(1))
            
        )
    , 3, 3)
    document.getElementById("ScrapAmount").innerHTML = format(player.scrap, 3, 1)
    document.getElementById("ScrapsPerClick").innerHTML = "Click to gain<br>" + format((player.scrapsPerClick).times(getScrapGain())) + " Scraps"
    document.getElementById("ScrapsPerSecond").innerHTML = format((getTotalScrapsPerSecond()).times(getScrapGain()))
    document.getElementById("BuyFactoryDisplay").innerHTML = "Buy Factory<br>Cost: " + format(Decimal.pow(player.factory[0].costScaling.pow( player.boosterChallenges.isActive[4] ? 0 : 1 ), player.factory[0].bought).times(player.factory[0].cost.div(getBoosterPointTypeEffects(1)))) + " Scraps"
    document.getElementById("BuyScrapBoostDisplay").innerHTML = "Buy Multiplicator<br>Cost: " + format(Decimal.pow(player.multiplicatorCostScaling, player.multiplicatorBought).times(player.multiplicatorCost.div(getBoosterPointTypeEffects(1)))) + " Scraps"
    document.getElementById("GoldenScrapDisplay").innerHTML = format(player.goldenScrap)
    document.getElementById("GoldenScrapDisplay2").innerHTML = format(getGSEffect(), 3, 2)
    document.getElementById("PendingGoldenScrapDisplay").innerHTML = format(getGoldenScrapFormula())
    document.getElementById("GSSlowdown").innerHTML = (  (Decimal.times(player.scrap, "1e2000").gte(getGSGainSlowdown())) ? "Golden scrap gain starts to slowdown at "+ format(getGSGainSlowdown()) +" scraps!!" : "<br>"  )

    document.getElementById("ScrapClicks").innerHTML = ((player.scrapClicks.lte(1e15)) ? player.scrapClicks.floor().toNumber().toLocaleString("en-US") : format(player.scrapClicks, 3, 0))
    document.getElementById("PrestigeTime").innerHTML = ((player.timeSpentInThisPrestige.lte(1e15)) ? player.timeSpentInThisPrestige.toNumber().toLocaleString("en-US", {minimumFractionDigits: 1, maximumFractionDigits: 1}) : format(player.timeSpentInThisPrestige, 3, 0))


    document.getElementById("AchRewardEffect1").innerHTML = "To Electrons: " + format(
        Decimal.log(player.protons.div(1e14).plus(10), 10).pow(3)
    , 3, 2) + "x<br>To Protons: " + format(
        Decimal.log(player.electrons.div(1e14).plus(10), 10).pow(3)
    , 3, 2) + "x"
    document.getElementById("AchRewardEffect2").innerHTML = format(
        player.scrapClicks.min(5000).div(100).plus(1).pow(4)
        .times(player.scrapClicks.max(5000).minus(5000).div(6666).plus(1).pow(20))
        .pow(2)
    ) + "x"
    document.getElementById("AchRewardEffect3").innerHTML = format(2500, 3, 2)
    document.getElementById("AchRewardEffect4").innerHTML = format(Decimal.log(player.thermalEnergy.plus(2), 2).pow(2), 3, 2)
    document.getElementById("AchRewardEffect5").innerHTML = format(Decimal.log(player.goldenScrap.plus(2), 2).pow(2), 3, 2)
    document.getElementById("AchRewardEffect6").innerHTML = format(Decimal.log(player.thermalEnergy.div(1e100).plus(50), 50).pow(15), 3, 2)
    document.getElementById("AchRewardEffect7").innerHTML = format(Decimal.log(Decimal.log(player.scrap.plus(10), 10).plus(9), 10).pow(1.5), 3, 3)
    document.getElementById("AchRewardEffect8").innerHTML = format(Decimal.log(Decimal.log(player.scrap.plus(8), 8).plus(7), 8).pow(1.6), 3, 3)
    document.getElementById("AchRewardEffect9").innerHTML = format(Decimal.log(Decimal.log(player.scrap.plus(6), 6).plus(5), 6).pow(1.7), 3, 3)




//autoNMU

    document.getElementById("GSUAutobuyerStatus").innerHTML = (player.automator2.autoGSUpgrades ? "ON" : "OFF")
    document.getElementById("NMUAutobuyerStatus").innerHTML = (player.automator2.autoNMU ? "ON" : "OFF")
    document.getElementById("RBUAutobuyerStatus").innerHTML = (player.automator2.autoRBU ? "ON" : "OFF")
    document.getElementById("NBUAutobuyerStatus").innerHTML = (player.automator2.autoNBU ? "ON" : "OFF")

    






    for (i = 0; i < 2; i++) {
        document.querySelectorAll("#PrestigeStats")[i].innerHTML = ((player.prestigeStat[0].lte(1e15)) ? player.prestigeStat[0].floor().toNumber().toLocaleString("en-US") : format(player.prestigeStat[0], 3, 0))
    }

    for (i = 0; i < 2; i++) {
        document.getElementById("AutomatorLevel" + (i + 1)).innerHTML = player.automator[i].level.toNumber().toLocaleString("en-US", {minimumFractionDigits: 0, maximumFractionDigits: 0})
        document.getElementById("AutomatorSpeed" + (i + 1)).innerHTML = format(player.automator[i].baseSpeed.times( Decimal.pow(player.automator[i].speedPerLevel, player.automator[i].level) ).times(  Decimal.log(player.goldenScrap.plus(2), 2).pow( player.achievementsGotten[30] ? 2 : 0 )  )      , 3, 2)
        document.getElementById("AutomatorCost" + (i + 1)).innerHTML = format(player.automator[i].cost.div(getBoosterPointTypeEffects(1)).times( Decimal.pow(player.automator[i].costScaling, player.automator[i].level) ), 2, null)
    }

    for (i = 0; i < 3; i++) {
        document.getElementById("FactoryAmount" + (i + 1)).innerHTML = format(player.factory[i].bought, 3, 0) + " (+" + format(player.factory[i].extra) + ")"
        document.getElementById("FactoryCost" + (i + 1)).innerHTML = getFactoryCostDisplay(i)
        document.getElementById("FactoryScalingWeakness" + (i + 1)).innerHTML = format(getScalingWeaknesses(i).times(100), 3, 2)
    }

    
    

};

function updateStyle() {
    for (i = 0; i < 28; i++) {//Golden Scrap Upgrades
        if (player.goldenScrapUpgrades.isBought[i]) {
            document.getElementById("GSUpgrade" + (i + 1)).className = "goldenScrapUpgrade goldenScrapUpgradeIsBought"
        } else {
            document.getElementById("GSUpgrade" + (i + 1)).className = "goldenScrapUpgrade goldenScrapUpgradeIsNotBought"
        }

        if (!player.goldenScrapUpgrades.isBought[i] && player.goldenScrap.gte(player.goldenScrapUpgrades.cost[i].div(getBoosterPointTypeEffects(1)))) {
            document.getElementById("GSUpgrade" + (i + 1)).className = "goldenScrapUpgrade goldenScrapUpgradeIsAffordable"
        }
    }
    

    for (i = 0; i < 4; i++) {//Repeatable Magnet Upgrades
        if (player.magnetUpgrades.repeatable[i].requirement()) {
            document.getElementById("RepeatableMagnetUpgrade" + (i + 1)).className = "repeatableMagnetUpgrade repeatableMagnetUpgradeIsAffordable"
        } else {
            document.getElementById("RepeatableMagnetUpgrade" + (i + 1)).className = "repeatableMagnetUpgrade repeatableMagnetUpgradeIsNotAffordable"
        }
    }


    for (i = 0; i < 16; i++) {//Normal Magnet Upgrades
        if (player.magnetUpgrades.nonRepeatable.isBought[i]) {
            document.getElementById("MagnetUpgrade" + (i + 1)).className = "magnetUpgrade magnetUpgradeIsBought"
        } else {
            document.getElementById("MagnetUpgrade" + (i + 1)).className = "magnetUpgrade magnetUpgradeIsNotBought"
        }

        if (!player.magnetUpgrades.nonRepeatable.isBought[i] && player.magnetUpgrades.nonRepeatable.requirement(i)) {
            document.getElementById("MagnetUpgrade" + (i + 1)).className = "magnetUpgrade magnetUpgradeIsAffordable"
        }
    }

    for (i = 0; i < 4; i++) {//Repeatable Brick Upgrades
        if (player.bricks.gte(   player.brickUpgrades.repeatable.costFormula[i]()   )) {
            document.getElementById("RepeatableBrickUpgrade" + (i + 1)).className = "repeatableBrickUpgrade repeatableBrickUpgradeIsAffordable"
        } else {
            document.getElementById("RepeatableBrickUpgrade" + (i + 1)).className = "repeatableBrickUpgrade repeatableBrickUpgradeIsNotAffordable"
        }
    }
    
    for (i = 0; i < 8; i++) {//Normal Brick Upgrades
        if (player.brickUpgrades.nonRepeatable.isBought[i]) {
            document.getElementById("BrickUpgrade" + (i + 1)).className = "brickUpgrade brickUpgradeIsBought"
        } else {
            document.getElementById("BrickUpgrade" + (i + 1)).className = "brickUpgrade brickUpgradeIsNotBought"
        }

        if (!player.brickUpgrades.nonRepeatable.isBought[i] && player.bricks.gte(player.brickUpgrades.nonRepeatable.cost[i].div(getBoosterPointTypeEffects(1)))) {
            document.getElementById("BrickUpgrade" + (i + 1)).className = "brickUpgrade brickUpgradeIsAffordable"
        }
    }

    for (i = 0; i < 16; i++) {//Fuel Upgrades
        if (player.fuelUpgrades.isBought[i]) {
            document.getElementById("FuelUpgrade" + (i + 1)).className = "boosterUpgrade boosterUpgradeIsBought"
        } else {
            document.getElementById("FuelUpgrade" + (i + 1)).className = "boosterUpgrade boosterUpgradeIsNotBought"
        }

        if (!player.fuelUpgrades.isBought[i] && player.fuel.gte(player.fuelUpgrades.cost[i])) {
            document.getElementById("FuelUpgrade" + (i + 1)).className = "boosterUpgrade boosterUpgradeIsAffordable"
        }
    }


















    for (i = 0; i < 13; i++) {//Saving Milestones
        if ( player.savingMilestones.isGotten[i] ) {
            document.getElementById("SavingMilestone" + (i + 1)).className = "savingMilestone milestoneUnlocked"
        } else {
            document.getElementById("SavingMilestone" + (i + 1)).className = "savingMilestone milestoneLocked"
        }
    }

    if (player.savingMilestones.isGotten[3]) {
        document.getElementById("FuelUpgradeRow2").style.display = ""
        document.getElementById("FactoryRow3").style.display = ""
    } else {
        document.getElementById("FuelUpgradeRow2").style.display = "none"
        document.getElementById("FactoryRow3").style.display = "none"
    }

    if (player.savingMilestones.isGotten[4]) {
        document.getElementById("GSUAutobuyer").style.display = ""
    } else {
        document.getElementById("GSUAutobuyer").style.display = "none"
    }
//"NMUAutobuyer"
    if (player.savingMilestones.isGotten[5]) {
        document.getElementById("NMUAutobuyer").style.display = ""
    } else {
        document.getElementById("NMUAutobuyer").style.display = "none"
    }

    if (player.savingMilestones.isGotten[6]) {
        document.getElementById("NBUAutobuyer").style.display = ""
        document.getElementById("RBUAutobuyer").style.display = ""
    } else {
        document.getElementById("NBUAutobuyer").style.display = "none"
        document.getElementById("RBUAutobuyer").style.display = "none"
    }

    if (player.savingMilestones.isGotten[7]) {
        document.getElementById("boosterChallengeButton").style.display = ""
    } else {
        document.getElementById("boosterChallengeButton").style.display = "none"
    }

    if (player.savingMilestones.isGotten[9]) {
        document.getElementById("antiScalersButton").style.display = ""
        document.getElementById("antiScalers2Button").style.display = ""
    } else {
        document.getElementById("antiScalersButton").style.display = "none"
        document.getElementById("antiScalers2Button").style.display = "none"
    }

    if (player.savingMilestones.isGotten[10]) {
        document.getElementById("synergizersButton").style.display = ""
        document.getElementById("synergizers2Button").style.display = ""
        document.getElementById("FuelUpgradeRow3").style.display = ""
        document.getElementById("FuelUpgradeRow4").style.display = ""
    } else {
        document.getElementById("synergizersButton").style.display = "none"
        document.getElementById("synergizers2Button").style.display = "none"
        document.getElementById("FuelUpgradeRow3").style.display = "none"
        document.getElementById("FuelUpgradeRow4").style.display = "none"
    }







    for (i = 0; i < 8; i++) {
        if (player.boosterChallenges.isActive[i]) {
            document.getElementById("BCEffect" + (i + 1)).style.display = ""
        } else {
            document.getElementById("BCEffect" + (i + 1)).style.display = "none"
        }
    }











    if (player.boosterChallenges.isActive[6]) {
        document.getElementById("PossibleBoughtGSULeftText").style.display = ""
    } else {
        document.getElementById("PossibleBoughtGSULeftText").style.display = "none"
    }
















    if (player.prestigeStat[1].gte(1) || player.boosters.gte(1) || player.bestBoosters.gte(1)) {
        document.getElementById("CompressionConfDisplay").style.display = "inline"
    } else {
        document.getElementById("CompressionConfDisplay").style.display = "none"
    }











    if (player.achievementsGotten[18]) {
        document.getElementById("AchRewardDisplay1").style.display = ""
    } else {
        document.getElementById("AchRewardDisplay1").style.display = "none"
    }

    if (player.achievementsGotten[15]) {
        document.getElementById("AchRewardDisplay2").style.display = ""
    } else {
        document.getElementById("AchRewardDisplay2").style.display = "none"
    }

    if (player.achievementsGotten[16]) {
        document.getElementById("AchRewardDisplay3").style.display = ""
    } else {
        document.getElementById("AchRewardDisplay3").style.display = "none"
    }

    if (player.achievementsGotten[28]) {
        document.getElementById("AchRewardDisplay4").style.display = ""
    } else {
        document.getElementById("AchRewardDisplay4").style.display = "none"
    }

    if (player.achievementsGotten[30]) {
        document.getElementById("AchRewardDisplay5").style.display = ""
    } else {
        document.getElementById("AchRewardDisplay5").style.display = "none"
    }

    if (player.achievementsGotten[31]) {
        document.getElementById("AchRewardDisplay6").style.display = ""
    } else {
        document.getElementById("AchRewardDisplay6").style.display = "none"
    }

    if (player.achievementsGotten[32]) {
        document.getElementById("AchRewardDisplay7").style.display = ""
    } else {
        document.getElementById("AchRewardDisplay7").style.display = "none"
    }

    if (player.achievementsGotten[33]) {
        document.getElementById("AchRewardDisplay8").style.display = ""
    } else {
        document.getElementById("AchRewardDisplay8").style.display = "none"
    }

    if (player.achievementsGotten[34]) {
        document.getElementById("AchRewardDisplay9").style.display = ""
    } else {
        document.getElementById("AchRewardDisplay9").style.display = "none"
    }
}


setInterval(save, saveInterval);
setInterval(() => {
    updateStyle();
    updateText();
    showPrestigeTab();
    gameLoop();
    
    checkSavingMilestones();
    savingMilestonesDo();

    runAllShowUnlockFunctions()
}, interval);
load();
updateText();
tab("production");
subTab1("subPrestige2");
subTab2("subSettings1");
subTab3("subProduction1");
subTab4("subAchievements1");
subTab5("subBoosters2");
transformationTab("Transformation1");


player.magnetUpgrades.repeatable[0].cost = new Decimal("1e4")
player.magnetUpgrades.repeatable[0].costScaling = new Decimal("1.5")
player.magnetUpgrades.repeatable[1].cost = new Decimal("2e3")
player.magnetUpgrades.repeatable[1].costScaling = new Decimal("1.15")
player.magnetUpgrades.repeatable[2].cost = new Decimal("2.923892e11")
player.magnetUpgrades.repeatable[2].costScaling = new Decimal("1.15")
player.magnetUpgrades.repeatable[3].cost = new Decimal("1e10")
player.magnetUpgrades.repeatable[3].costScaling = new Decimal("1.15")

player.automator[0].maxLevel = new Decimal(Infinity)
player.automator[1].maxLevel = new Decimal("10")







player.factory[0].cost = new Decimal("10")
player.factory[0].costScaling = new Decimal("1.01")
player.factory[1].cost = new Decimal("1e510")
player.factory[1].costScaling = new Decimal("100")
player.factory[2].cost = new Decimal("10")
player.factory[2].costScaling = new Decimal("1.5")


player.goldenScrapUpgrades.cost = [
    new Decimal("400"), new Decimal("1e13"), new Decimal("4e50"), new Decimal("2e63"),
    new Decimal("1e117"), new Decimal("2e186"), new Decimal("1e210"), new Decimal("1e220"),
    new Decimal("2^1024"), new Decimal("1e350"), new Decimal("1e495"), new Decimal("1e525"),
    new Decimal("1e552"), new Decimal("2e558"), new Decimal("5e645"), new Decimal("2^2330"),
    new Decimal("1e1000"), new Decimal("1e1150"), new Decimal("1e1250"), new Decimal("1e1450"),
    new Decimal("1e1850"), new Decimal("2^6646"), new Decimal("1e2650"), new Decimal("3.2e3200"),
    new Decimal("1e3320"), new Decimal("1e3380"), new Decimal("1e3450"), new Decimal("1e3500")
   
];

player.brickUpgrades.nonRepeatable.cost = [
    new Decimal("1e12"), new Decimal("1e35"), new Decimal("1e45"), new Decimal("2e90"),
    new Decimal("1e100"), new Decimal("2e110"), new Decimal("4e120"), new Decimal("8e130")
]

player.stars.cost = new Decimal("1e4");
player.stars.costScaling = new Decimal("1e15");

player.automator[0].cost = new Decimal("1e15")
player.automator[0].costScaling = new Decimal("1000")
player.automator[0].speedPerLevel = new Decimal("1.03")

player.automator[1].cost = new Decimal("1e20")
player.automator[1].costScaling = new Decimal("1e20")
player.automator[1].speedPerLevel = new Decimal("1.5")

player.magnetUpgrades.nonRepeatable.requirement = (type) => {
    switch (type+1) {
        case 1:
            return player.magnets.gte(new Decimal(1e4).div(getBoosterPointTypeEffects(1)));
        case 2:
            return player.steelBeams.gte(new Decimal(1e22).div(getBoosterPointTypeEffects(1)));
        case 3:
            return player.electrons.gte(new Decimal(3e15).div(getBoosterPointTypeEffects(1)))
        case 4:
            return player.protons.gte(new Decimal(1e16).div(getBoosterPointTypeEffects(1)))
        case 5:
            return player.magnets.gte(new Decimal(5e39).div(getBoosterPointTypeEffects(1)))
        case 6:
            return player.steelBeams.gte(new Decimal(1e42).div(getBoosterPointTypeEffects(1)))
        case 7:
            return player.electrons.gte(new Decimal(1.2e18).div(getBoosterPointTypeEffects(1)))
        case 8:
            return player.protons.gte(new Decimal(1.7976931348623157e23).div(getBoosterPointTypeEffects(1)))
        case 9:
            return player.magnets.gte(new Decimal(9.124e50).div(getBoosterPointTypeEffects(1)))
        case 10:
            return player.steelBeams.gte(new Decimal(1e63).div(getBoosterPointTypeEffects(1)))
        case 11:
            return player.electrons.gte(new Decimal(2e25).div(getBoosterPointTypeEffects(1)))
        case 12:
            return player.protons.gte(new Decimal(1e28).div(getBoosterPointTypeEffects(1)))
        case 13:
            return player.magnets.gte(new Decimal(8.585e85).div(getBoosterPointTypeEffects(1)))
        case 14:
            return player.steelBeams.gte(new Decimal("2^350").div(getBoosterPointTypeEffects(1)))
        case 15:
            return player.electrons.gte(new Decimal(1e35).div(getBoosterPointTypeEffects(1)))
        case 16:
            return player.protons.gte(new Decimal(1e42).div(getBoosterPointTypeEffects(1)))
    }
},
player.magnetUpgrades.nonRepeatable.buy = (type) => {
    switch (type+1) {
        case 1:
            return player.magnets = player.magnets.minus(new Decimal(1e4).div(getBoosterPointTypeEffects(1)));
        case 2:
            return player.steelBeams = player.steelBeams.minus(new Decimal(1e22).div(getBoosterPointTypeEffects(1)));
        case 3:
            return player.electrons = player.electrons.minus(new Decimal(3e15).div(getBoosterPointTypeEffects(1)))
        case 4:
            return player.protons = player.protons.minus(new Decimal(1e16).div(getBoosterPointTypeEffects(1)))
        case 5:
            return player.magnets = player.magnets.minus(new Decimal(5e39).div(getBoosterPointTypeEffects(1)));
        case 6:
            return player.steelBeams = player.steelBeams.minus(new Decimal(1e42).div(getBoosterPointTypeEffects(1)));
        case 7:
            return player.electrons = player.electrons.minus(new Decimal(1.2e18).div(getBoosterPointTypeEffects(1)))
        case 8:
            return player.protons = player.protons.minus(new Decimal(1.7976931348623157e23).div(getBoosterPointTypeEffects(1)))
        case 9:
            return player.magnets = player.magnets.minus(new Decimal(9.124e50).div(getBoosterPointTypeEffects(1)));
        case 10:
            return player.steelBeams = player.steelBeams.minus(new Decimal(1e63).div(getBoosterPointTypeEffects(1)));
        case 11:
            return player.electrons = player.electrons.minus(new Decimal(2e25).div(getBoosterPointTypeEffects(1)))
        case 12:
            return player.protons = player.protons.minus(new Decimal(1e28).div(getBoosterPointTypeEffects(1)))
        case 13:
            return player.magnets = player.magnets.minus(new Decimal(8.585e85).div(getBoosterPointTypeEffects(1)));
        case 14:
            return player.steelBeams = player.steelBeams.minus(new Decimal("2^350").div(getBoosterPointTypeEffects(1)));
        case 15:
            return player.electrons = player.electrons.minus(new Decimal(2e25).div(getBoosterPointTypeEffects(1)))
        case 16:
            return player.protons = player.protons.minus(new Decimal(1e28).div(getBoosterPointTypeEffects(1)))
    }
},

document.getElementById("notationSelect").value = player.options.notation

document.getElementById('AutomatorActivation1').checked = player.automator[0].isActive
document.getElementById('AutomatorActivation2').checked = player.automator[1].isActive

document.getElementById('PrestigeConf').checked = player.options.confirmations.prestige
document.getElementById('CompressionConf').checked = player.options.confirmations.compression

player.fuelUpgrades.cost = [
    new Decimal("80"), new Decimal("95"), new Decimal("110"), new Decimal("125"),
    new Decimal("1000"), new Decimal("1000"), new Decimal("1000"), new Decimal("1000"),
    new Decimal("1e100"), new Decimal("1e115"), new Decimal("1e135"), new Decimal("1e250"),
    new Decimal("1e275"), new Decimal("4.040e404"), new Decimal("6.666e666"), new Decimal("1.111e1111")
]

player.savingMilestones.requirement = [
    new Decimal("1"), new Decimal("4"), new Decimal("9"), new Decimal("16"),
    new Decimal("32"), new Decimal("64"), new Decimal("256"), new Decimal("5000"),
    new Decimal("5e9"), new Decimal("5e11"), new Decimal("1e50"), new Decimal("1e130"),
    new Decimal("1e750")
]

player.boosterChallenges.scrapsRequired = [
    new Decimal("1e1150"), new Decimal("1e250"),
    new Decimal("1e1500"), new Decimal("1e185000"),
    new Decimal("1e4750"), new Decimal("1e80"),
    new Decimal("1e500000"), new Decimal("e7e6")
]

player.boosterChallenges.scrapDivider = [
    new Decimal("9.371e127"), new Decimal("1e200"),
    new Decimal("2^900"), new Decimal("1e91"),
    new Decimal("3^194"), new Decimal("1e500"),
    new Decimal("1e123"), new Decimal("e94000"),
]