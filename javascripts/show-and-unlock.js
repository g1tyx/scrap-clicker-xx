function showPrestigeTab() {
    if (player.bestScraps.gte(1e9) || player.goldenScrap.gt(0) || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
        showElement("prestigeTab")
    } else {
        hideElement("prestigeTab")
    }
}

function unlockFactoryListsSubTab() {
    if (player.goldenScrapUpgrades.isBought[11] || player.savingMilestones.isGotten[0]) {
        hideElement("factoryListLockedText")
        showElement("factoryListScreen")
    } else {
        showElement("factoryListLockedText")
        hideElement("factoryListScreen")
    }
}

function showFactoryListsSubTab() {
    if (player.goldenScrapUpgrades.isBought[11] || player.goldenScrapUpgrades.isBought[10] || player.boosters.gte(1) || player.prestigeStat[1].gte(1) || player.savingMilestones.isGotten[0]) {
        showElement("factorySubTab")
    } else {
        hideElement("factorySubTab")
    }
}

function showMoreNMUpgrades() {
    for (i = 0; i < 8; i++) {
        if (player.goldenScrapUpgrades.isBought[11] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
            document.querySelectorAll("tr td#MoreNMUpgrades1")[i].style.visibility = "visible"
        } else {
            document.querySelectorAll("tr td#MoreNMUpgrades1")[i].style.visibility = "hidden"
        }
    }

    for (i = 0; i < 4; i++) {
        if (player.goldenScrapUpgrades.isBought[17] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
            document.querySelectorAll("tr td#MoreNMUpgrades2")[i].style.visibility = "visible"
        } else {
            document.querySelectorAll("tr td#MoreNMUpgrades2")[i].style.visibility = "hidden"
        }
    }

    if (player.goldenScrapUpgrades.isBought[11] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
        document.getElementById("NMURow2").style.display = "inline"
        document.getElementById("NMURow3").style.display = "inline"
        document.getElementById("newLine1.2").style.display = "inline"
        
    } else {
        document.getElementById("NMURow2").style.display = "none"
        document.getElementById("NMURow3").style.display = "none"
        document.getElementById("newLine1.2").style.display = "none"
        
    }

    if (player.goldenScrapUpgrades.isBought[17] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
        document.getElementById("NMURow4").style.display = "inline"
        document.getElementById("newLine2.2").style.display = "inline"
    } else {
        document.getElementById("NMURow4").style.display = "none"
        document.getElementById("newLine2.2").style.display = "none"
    }

    
}

function showMoreGSUpgrades() {
    for (i = 0; i < 6; i++) {
        if (player.goldenScrapUpgrades.isBought[5] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
            document.querySelectorAll("tr td#MoreGSUpgrades1")[i].style.visibility = "visible"
        } else {
            document.querySelectorAll("tr td#MoreGSUpgrades1")[i].style.visibility = "hidden"
        } 
    }

    if (player.goldenScrapUpgrades.isBought[5] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
        document.getElementById("GSURow3").style.display = "inline"
    } else {
        document.getElementById("GSURow3").style.display = "none"
    }

    

    
}

function showMoreGSUpgrades2() {
    for (i = 0; i < 6; i++) {
        if (player.goldenScrapUpgrades.isBought[11] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
            document.querySelectorAll("tr td#MoreGSUpgrades2")[i].style.visibility = "visible"
        } else {
            document.querySelectorAll("tr td#MoreGSUpgrades2")[i].style.visibility = "hidden"
        } 
    }

    for (i = 0; i < 5; i++) {
        if (player.goldenScrapUpgrades.isBought[17] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
            document.querySelectorAll("tr td#MoreGSUpgrades3")[i].style.visibility = "visible"
        } else {
            document.querySelectorAll("tr td#MoreGSUpgrades3")[i].style.visibility = "hidden"
        } 
    }

    for (i = 0; i < 4; i++) {
        if (player.goldenScrapUpgrades.isBought[23] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
            document.querySelectorAll("tr td#MoreGSUpgrades4")[i].style.visibility = "visible"
        } else {
            document.querySelectorAll("tr td#MoreGSUpgrades4")[i].style.visibility = "hidden"
        } 
    }
    

    if (player.goldenScrapUpgrades.isBought[11] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
        document.getElementById("GSURow4").style.display = "inline"
        document.getElementById("newLine1.1").style.display = "inline"
    } else {
        document.getElementById("GSURow4").style.display = "none"
        document.getElementById("newLine1.1").style.display = "none"
    }

    if (player.goldenScrapUpgrades.isBought[15] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
        document.getElementById("GSURow5").style.display = "inline"
        document.getElementById("newLine2.1").style.display = "inline"
    } else {
        document.getElementById("GSURow5").style.display = "none"
        document.getElementById("newLine2.1").style.display = "none"
    }

    if (player.goldenScrapUpgrades.isBought[17] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
        document.getElementById("GSURow6").style.display = "inline"
        document.getElementById("newLine3.1").style.display = "inline"
    } else {
        document.getElementById("GSURow6").style.display = "none"
        document.getElementById("newLine3.1").style.display = "none"
    }

    if (player.goldenScrapUpgrades.isBought[23] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
        document.getElementById("GSURow7").style.display = "inline"
        document.getElementById("newLine4.1").style.display = "inline"
    } else {
        document.getElementById("GSURow7").style.display = "none"
        document.getElementById("newLine4.1").style.display = "none"
    }
}

function showMagnetsSubTab() {
    if (player.goldenScrapUpgrades.isBought[4] || player.goldenScrapUpgrades.isBought[5] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
        showElement("magnetsSubTab")
    } else {
        hideElement("magnetsSubTab")
    }
}

function unlockMagnetsSubTab() {
    if (player.goldenScrapUpgrades.isBought[5]) {
        hideElement("magnetsLockedText")
        showElement("magnetsScreen")
    } else {
        showElement("magnetsLockedText")
        hideElement("magnetsScreen")
    }
}

function showBricksSubTab() {
    if (player.goldenScrapUpgrades.isBought[16] || player.goldenScrapUpgrades.isBought[17] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
        showElement("bricksSubTab")
    } else {
        hideElement("bricksSubTab")
    }
}

function unlockBricksSubTab() {
    if (player.goldenScrapUpgrades.isBought[17]) {
        hideElement("bricksLockedText")
        showElement("bricksScreen")
    } else {
        showElement("bricksLockedText")
        hideElement("bricksScreen")
    }
}

function showDecaySubTab() {
    if (player.goldenScrapUpgrades.isBought[22] || player.goldenScrapUpgrades.isBought[23]  || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
        showElement("decaySubTab")
    } else {
        hideElement("decaySubTab")
    }
}

function unlockDecaySubTab() {
    if (player.goldenScrapUpgrades.isBought[23]) {
        hideElement("decayLockedText")
        showElement("decayScreen")
    } else {
        showElement("decayLockedText")
        hideElement("decayScreen")
    }
}

function showBoostersTab() {
    if (player.goldenScrapUpgrades.isBought[26] || player.goldenScrapUpgrades.isBought[27] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
        showElement("boostersTab")
    } else {
        hideElement("boostersTab")
    }
}

function unlockBoostersTab() {
    if (player.goldenScrapUpgrades.isBought[27] || player.boosters.gte(1) || player.prestigeStat[1].gte(1)) {
        hideElement("boostersLockedText")
        showElement("boostersScreen")
    } else {
        showElement("boostersLockedText")
        hideElement("boostersScreen")
    }
}

function runAllShowUnlockFunctions() {
    showMagnetsSubTab();
    unlockMagnetsSubTab();
    showBoostersTab();
    unlockBoostersTab();
    showPrestigeTab();
    showMoreGSUpgrades();
    showMoreGSUpgrades2();
    showFactoryListsSubTab();
    unlockFactoryListsSubTab();
    showMoreNMUpgrades();
    showBricksSubTab();
    unlockBricksSubTab();
    showDecaySubTab();
    unlockDecaySubTab();
}
