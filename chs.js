/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Total Boosted Factories boost fuel gain": "总计提升的工厂 提升燃料增益",
    "Total factories boost Golden Scrap gain": "工厂总数提高了金废料的增益",
    "Total scrap factories boost Golden Scrap gain": "废钢工厂总数提高了金废钢的收益",
    "Total Scrap factories boost Golden Scrap gain": "废钢工厂总数提高了金废钢的收益",
    "Total Scrap Factories boost Magnet and Steel Beam gain": "总计废料工厂 提升磁铁和钢梁增益",
    "Total scrap factories boost Scrap and Golden Scrap gain": "废钢工厂总数提高废钢和金废钢的收益",
    "Total scrap factories boost Scrap gain": "废钢厂总数提高废钢收益",
    "Total Super Factories boost 16th GS Upgrade effect": "超级工厂总数提升第 16 次 GS 升级效果",
    "Total Super Factories boost 3rd NMU effect": "超级工厂总数提升了第三个 NMU 效应",
    "Total Super factories boost extra scrap factory gain": "超级工厂总数增加了额外的废料工厂收益",
    "Total Super Factories boost extra scrap factory gain": "超级工厂总数增加了额外的废料工厂收益",
    "Total Super factories boost Golden Scrap gain": "超级工厂总数提高了金废料的收益",
    "Total Super Factories boost Prestige Gain": "超级工厂总数提升声望增益",
    "Total Super factories generate extra levels of 2nd RMU": "超级工厂总数产生额外级别的第二个 RMU",
    "Unlock Booster Challenges": "解锁助推器挑战",
    "Unlock Boosters (Prestige layer)": "解锁助推器（声望层）",
    "Unlock Bricks": "解锁砖块",
    "Unlock Decayverse": "解锁衰变宇宙",
    "Unlock Empowerment (Prestige Layer)(Coming Soon)": "解锁赋能（威望层）（即将推出）",
    "Unlock Magnets": "解锁磁铁",
    "Unlock super factories and prestiging now subtracts": "解锁超级工厂和声望现在减去",
    "Upgrade Auto-Multiplicator": "升级自动乘法器",
    "Upgrade Autoclicker": "升级自动点击器",
    "Upgrades": "升级",
    "Walkthrough Video": "演练视频",
    "Welcome!": "欢迎！",
    "where p is": "其中 p 是",
    "wrenches": "扳手",
    "Wrenches make all RBU costs cheaper": "扳手使所有 RBU 成本更便宜",
    "RBU Autobuyer:": "RBU 自动购买者：",
    "Regeneration Points (+": "再生点 (+",
    "Regenerators and Regeneration Points.": "再生器和再生点。",
    "Regenerators provide more RP base gain and regenerator gain is boosted by its amount": "再生器提供更多的 RP 基础增益，并且再生器增益由其数量提升",
    "regenerators, which have provided you a base RP gain of +": "再生器，它们为您提供了 + 的基础 RP 增益",
    "Reinhardt's True Infinity γ": "莱因哈特的真无穷 γ",
    "Removed": "已移除",
    "Removed some news tickers.": "删除了一些新闻代码。",
    "Repeatable Brick Upgrades (RBU)": "可重复块升级 (RBU)",
    "Repeatable Magnet Upgrades (RMU)": "可重复磁铁升级 (RMU)",
    "Reset your fuel upgrades": "重置您的燃料升级",
    "Reward: +": "奖励：+",
    "Reward: 2nd RBU levels boost prestige gain by": "奖励：第 2 个 RBU 等级提升声望增益",
    "Reward: Boost 22nd Golden Scrap Upgrade effect by": "奖励：提升第 22 次金废料升级效果",
    "Reward: Prestiges boost 11th GS Upgrade effect by": "奖励：声望提升 11 次 GS 升级效果",
    "Reward: Raise your 1st RMU Effect to": "奖励：将您的第一个 RMU 效果提升到",
    "Reward: Star effect is raised to": "奖励：星级效果提升至",
    "Reward: Total boosted factories boost Booster gain by": "奖励：总助推器的工厂将助推器增益提高",
    "Reward: Total Boosted Factories boost extra Super Factory gain by": "奖励：总加速工厂将额外的超级工厂增益提高",
    "Rewards do not apply when you have below 1 completion": "当您完成以下 1 次时，奖励不适用",
    "RP and gained wrenches boost each other": "RP 和增益扳手相互促进",
    "RP base gain: ^1.00 → ^1.25": "RP 基础增益：^1.00 → ^1.25",
    "Sacrifice all your bricks": "牺牲你所有的砖头",
    "Sacrifice all your magnets": "牺牲你所有的磁铁",
    "Sacrifice all your steel beams": "牺牲你所有的钢梁",
    "Saving Milestones": "保存里程碑",
    "Scaling Weakness (SW):": "缩放弱点（SW）：",
    "Scientific": "科学的",
    "Scrap boost per achievement is increased from 1.30x to 2.00x.": "每个成就的废料提升从 1.30 倍增加到 2.00 倍。",
    "Scrap Clicker++": "废料点击器++",
    "Synergizers.": "协同作用",
    "Synergy II Points (+": "协同作用 II 点 (+",
    "Synergy Points (+": "协同点数（+",
    "There is exponential super decay that divides all your pre-boosters resource amount and gain, and your scrap gain is divided by": "有一个指数级的超级衰减将你所有的前助推器资源量和收益除以，你的废料收益除以",
    "Thermal Energy": "热能",
    "Thermal Energy (+": "热能（+",
    "Thermal Energy boost its gain": "热能提高其收益",
    "Thermal Energy boost SW of Boosted Factory": "Boosted Factory的热能boost SW",
    "Thermal Energy effects use better formula": "热能效应使用更好的公式",
    "Thermal Energy make you to gain wrenches on sacrifice every second": "热能让你每秒钟都在牺牲中获得扳手",
    "Thermal Energy power up Golden Scrap effect": "热能提升金废料效果",
    "They are dividing all pre-boosters costs (including Scrap Factory and Super Factory cost) by": "他们将所有前置助推器成本（包括废料工厂和超级工厂成本）除以",
    "They are increasing your multiplicator base by": "他们正在通过以下方式增加您的乘数基数",
    "They are making your GS Slowdown start at": "他们让你的 GS 减速开始于",
    "They are making your multiplicators start to broken at": "他们让你的倍增器开始坏掉在",
    "They are multiplying all pre-boosters resources by": "他们将所有预助推器资源乘以",
    "They are multiplying your scrap gain by": "他们将您的废料收益乘以",
    "They are raising discounter point effect to the power of p": "他们将折扣点效应提高到 p 的幂",
    "This cannot be undone!": "这不能被撤消！",
    "this challenge": "这个挑战",
    "Generate prestiges based on golden scraps": "根据黄金碎片产生声望",
    "Golden scrap effect uses better formula": "金边效果使用更好的配方",
    "Golden Scrap effect uses better formula": "黄金废料效果使用更好的配方",
    "Golden Scraps": "黄金废料",
    "Golden Scraps and GS Upgrades,": "黄金废料和 GS 升级，",
    "Golden scraps boost 3rd NMU Effect": "金色废料提升第三个 NMU 效果",
    "Golden Scraps make wrench effect to brick self boost strength stronger": "黄金碎块使扳手效果对砖的自增强度更强",
    "golden scraps.": "金色的碎片。",
    "Golden Scraps.": "黄金碎片。",
    "green-bordered box": "绿框",
    "GS effect is raised to": "GS效果提升至",
    "GS Slowdown starts at": "GS减速开始于",
    "GS Upgrade Autobuyer:": "GS 升级自动购买者：",
    "Hard Reset": "硬重置",
    "Helpers:": "帮手：",
    "Hevipelle's Antimatter Dimensions": "Hevipelle 的反物质维度",
    "Hold on!!": "坚持，稍等！！",
    "Hover over every factory name to see the cost scaling weakness info": "将鼠标悬停在每个工厂名称上以查看成本扩展弱点信息",
    "Hover over the achievements to see details": "将鼠标悬停在成就上以查看详细信息",
    "How does antivirus work?": "防病毒软件如何工作？",
    "https://www.youtube.com/watch?v=HpTKBHYDQm6": "https://www.youtube.com/watch?v=HpTKBHYDQm6",
    "I bet you can't watch this video →": "我打赌你不能看这个视频 →",
    "Improved the saving system": "改进了储蓄系统",
    "in No Booster Challenge": "在无助推器挑战中",
    "In return, you will get Boosters": "作为回报，您将获得助推器",
    "In return, you will get Golden Scraps": "作为回报，您将获得黄金碎片",
    "Inflation point effect use better formula": "通货膨胀点效应使用更好的公式",
    "Inflation Points (+": "通货膨胀点 (+",
    "Inflators": "充气机",
    "Inflators.": "充气机。",
    "Insipiration:": "启示：",
    "Level:": "等级：",
    "LOCKED": "锁定",
    "Magnet, Steel Beam and Wrench gain are reduced a lot, Multiplicators start to broken instantly, but GS effect is raised to 2 and your scrap gain is divided by": "磁铁，钢梁和扳手增益减少很多，乘法器立即开始损坏，但GS效果提高到2并且您的废料增益除以",
    "Magnets": "磁铁",
    "Magnets and Protons": "磁铁和质子",
    "Magnets and Steel Beams": "磁铁和钢梁",
    "Magnets and Steel Beams boost each other": "磁铁和钢梁相互促进",
    "Magnets, Steel Beams, Protons and Electrons,": "磁铁、钢梁、质子和电子，",
    "Manual scrap clicks boost scrap gain": "手动报废点击提高报废收益",
    "manual scrap clicks.": "手动报废点击。",
    "Max All (M)": "最大全部 (M)",
    "Max All RBUs": "最大所有 RBU",
    "Max All RMUs": "最大所有 RMU",
    "Multiplying your Magnet gain by": "将您的磁铁增益乘以",
    "multiplying your Scrap gain by": "将您的废料收益乘以",
    "Multiplying your scrap gain by": "将您的废料收益乘以",
    "Multiplying your Steel Beam gain by": "将您的钢梁增益乘以",
    "My YouTube Channel": "我的 YouTube 频道",
    "Name": "姓名",
    "NBU Autobuyer:": "NBU自动购买者：",
    "NBUs and All RBU Levels,": "NBU 和所有 RBU 级别，",
    "Nerfed 3rd Golden Scrap upgrade effect.": "削弱了第 3 次金色废料升级效果。",
    "Nerfed 4th Golden Scrap upgrade cost.": "Nerfed 4th Golden Scrap 升级成本。",
    "New": "新的",
    "Next regenerator at": "下一个再生器在",
    "NMU Autobuyer:": "NMU自动购买者：",
    "NMUs and All RMU Levels,": "NMU 和所有 RMU 级别，",
    "No ✗": "否 ✗",
    "Normal Brick Upgrades (NBU)": "普通砖升级 (NBU)",
    "Normal Magnet Upgrades (NMU)": "普通磁铁升级 (NMU)",
    "Notation :": "符号：",
    "Notation Improvement.": "符号改进。",
    "Notations now support negative numbers.": "符号现在支持负数。",
    "Extra scrap factory, Magnet, and Steel Beam gain are multiplied by 0, scrap factory cost doesn't scale whenever you buy them, but multiplicators will limit scrap factory amount from buy maxing and your scrap gain is divided by": "额外的废料工厂、磁铁和钢梁收益乘以 0，废料工厂成本不会随着您购买它们而增加，但倍增器会限制废料工厂数量，使其无法购买最大化，您的废料收益除以",
    "Automation": "自动化",
    "Automation Levels,": "自动化等级，",
    "Best boosters boost fuel gain": "最好的助推器提高燃料增益",
    "Best boosters power up 1st and 2nd RMU Effects": "最好的助推器为第一和第二 RMU 效果供电",
    "Best:": "最好的：",
    "Boost your Golden Scrap Gain by": "将您的黄金废料收益提高",
    "Boosted Factories (#3)": "提升工厂（#3）",
    "Booster": "助推器",
    "Booster Challenges": "助推器挑战",
    "Booster Transformation": "助推器转型",
    "Boosters": "助推器",
    "Bought scrap factories": "收购废料工厂",
    "Bought scrap factories and Extra scrap factories,": "购买废料工厂和额外的废料工厂，",
    "Bought super factories and Extra super factories,": "买了超级工厂和Extra超级工厂，",
    "Break Eternity (by Patashu)": "打破永恒（Patashu）",
    "Break Eternity.js by Patashu": "Patashu 打破 Eternity.js",
    "Brick Self-Boost:": "积木自升压：",
    "Bricks": "砖块",
    "Bricks (+": "砖块 (+",
    "Bricks and Wrenches,": "砖头和扳手，",
    "Bricks boost 11th GS Upgrade effect": "砖块提升第 11 次 GS 升级效果",
    "Bricks boost Golden Scrap gain": "砖块提高了金废料的收益",
    "Buffed 3rd Golden Scrap upgrade effect": "Buffed 3rd Golden Scrap 升级效果",
    "Buffed 4th Golden Scrap upgrade cost": "增强了 4 次黄金废料升级成本",
    "Buy a star": "买一颗星",
    "Buy Factory": "购买工厂",
    "Buy max": "购买最大",
    "Buy Max": "购买最大",
    "Buy Max Stars": "购买最大星星",
    "Buy maxes multiplicators automatically": "自动购买最大倍增器",
    "Buy Multiplicator": "购买乘数",
    "Can't prestige until 200 golden scraps": "直到 200 个金色碎片才能获得声望",
    "Changelog & Updates": "变更日志和更新",
    "Changes": "更改",
    "Click here to see details": "点击这里查看详细信息",
    "Click the": "点击",
    "Click to gain": "点击获取",
    "Come back if you have it ;)": "有的话就回来；）",
    "Compression Confirmation:": "压缩确认：",
    "Compressions": "压缩",
    "Cost:": "成本：",
    "Currently: ^": "目前：^",
    "Currently: +": "目前：+",
    "Decay Resistance:": "衰减电阻：",
    "decay. They are dividing your scrap gain by": "衰变。他们将您的废料收益除以",
    "Decayverse": "衰变宇宙",
    "Discount Points (+": "折扣积分（+",
    "Discounters": "折扣店",
    "Discounters.": "折扣店。",
    "Do a compression": "做一个压缩",
    "Each multiplicator multiplies your scrap gain by Multiplicator Base": "每个乘数将您的废料收益乘以乘数基础",
    "Electons and Protons boost each other in gain and effect": "电子和质子在增益和效果上相互促进",
    "Electron and proton effects use better formula": "电子和质子效应使用更好的公式",
    "electrons": "电子",
    "Electrons": "电子",
    "Electrons and Protons boost each other": "电子和质子相互促进",
    "Electrons and Protons boost each other in gain": "电子和质子在增益上相互促进",
    "Engineering": "工程",
    "Enter": "进入",
    "Exported save now appears on textarea instead of appearing on entire game screen.": "导出的存档现在出现在 textarea 上，而不是出现在整个游戏屏幕上。",
    "extra multiplicators": "额外的倍增器",
    "Extra scrap factories and": "额外的废料工厂和",
    "Factory lists": "工厂清单",
    "Fixed bug where 2nd Golden Scrap Upgrade didn't boost golden scraps.": "修复了第二次金色废料升级没有提升金色废料的错误。",
    "Fixed formula miscalculation on proton and electron effect display.": "修正了质子和电子效应显示的公式计算错误。",
    "for": "为了",
    "for every 1,000,000 multiplicators": "对于每 1,000,000 个倍增器",
    "for every second of prestige time, Multiplicators boost prestige time and your scrap gain is divided by": "对于声望时间的每一秒，倍增器会增加声望时间，而您的废料收益除以",
    "for game font.": "用于游戏字体。",
    "for making numbers able to go past 1.797e308.": "使数字能够超过 1.797e308。",
    "for polynomial growth.": "为多项式增长。",
    "for simple news ticker file.": "用于简单的新闻股票文件。",
    "for softcap things.": "对于软帽的东西。",
    "Fuel": "燃料",
    "fuel back": "回油",
    "Fuel on next compression.": "下次压缩时加油。",
    "Gain 1% Boosters and fuel on compression every second. Keep prestiges and extra Super Factories on next compression": "每秒获得 1% 的助推器和压缩燃料。在下次压缩时保留声望和额外的超级工厂",
    "Gain electrons and protons on sacrifice every second": "每秒牺牲一次获得电子和质子",
    "Gained bricks boost scrap gain and Scraps boost brick gain": "获得的砖块提高了废料收益，而废料增加了砖块的收益",
    "Gained Magnets and Steel Beams boost scraps": "获得的磁铁和钢梁增加了废料",
    "Gained Magnets and Steel Beams multiply brick self-boost strength": "获得的磁铁和钢梁成倍增加砖的自增强强度",
    "Gained Magnets and Steel beams power up Golden Scrap effect": "获得的磁铁和钢梁增强了金色废料效果",
    "Game Saved!": "游戏已保存！",
    "Game UI style change": "游戏UI风格改变",
    "Game:": "游戏：",
    "About": "关于",
    "Achievement": "成就",
    "Achievement Rewards": "成就奖励",
    "BOOST BOOST BOOST!!!": "提升 提升 提升!!!",
    "Are you sure about that?": "你确定吗？",
    "Are you sure you want to do that?": "你确定要这样做吗？",
    "August 28th, 2020 v0.0.0": "2020 年 8 月 28 日 v0.0.0",
    "Auto-Multiplicator Lvl.": "自动倍增器等级",
    "Autoclicker Lvl.": "自动点击器等级",
    "Autoclicks scrap gain button": "自动点击 废料增益按钮",
    "Automatically Buy GS Upgrades (can be turned off in GS Upgrades sub tab)": "自动购买 GS 升级（可以在 GS 升级子选项卡中关闭）",
    "Automatically Buy RBU levels and NBUs (can be turned off in Bricks sub tab)": "自动购买 RBU 级别和 NBU（可以在 Bricks 子选项卡中关闭）",
    "Billionaire": "亿万富翁",
    "Buy 3rd Normal Magnet Upgrade": "购买第三个普通磁铁升级",
    "Buy a golden scrap upgrade": "购买黄金废料升级",
    "Millionaire": "百万富翁",
    "More": "更多",
    "Multiplicator Details": "乘法器详细信息",
    "Multiplicators": "倍增器",
    "Multiplicators boost Fuel gain": "倍增器提高燃料增益",
    "Multiplicators,": "倍增器，",
    "multiplicators.": "倍增器。",
    "Multiply brick self-boost strength by": "将砖的自增强强度乘以",
    "Multiplying your brick gain by 1.000x": "将您的积木增益乘以 1.000 倍",
    "Nerf this!": "削弱这个！",
    "No idea what to name it": "不知道取什么名字",
    "Have 1.000e3 total levels of all RMU": "所有 RMU 的总等级为 1.000e3",
    "Have over 1.000e10 Steel Beams": "拥有超过 1.000e10 钢梁",
    "Have over 1.000e12 extra scrap factories": "拥有超过 1.000e12 个额外的废料工厂",
    "Have over 1.000e12 Scraps": "拥有超过 1.000e12 个废料",
    "Have over 1.000e15 Protons and Electrons. Reward: Electrons and protons boost each other in gain": "拥有超过 1.000e15 个质子和电子。奖励：电子和质子相互促进增益",
    "Have over 1.000e20 Golden Scraps": "拥有超过 1.000e20 黄金碎片",
    "Have over 1.000e3% of brick self-boost strength": "具有超过 1.000e3% 的砖自增强强度",
    "Have over 1.000e6 Scraps": "拥有超过 1.000e6 个废料",
    "Have over 1.000e9 Scraps": "拥有超过 1.000e9 个废料",
    "Have over 1.798e308 Scraps": "拥有超过 1.798e308 个废料",
    "Have over 200.00% of decay resistance": "具有超过 200.00% 的衰减抗性",
    "Have over 3.000e3 Prestiges. Reward: Golden scrap gain is multiplied by 2.500e3": "拥有超过 3.000e3 声望。奖励：黄金废料收益乘以 2.500e3",
    "Have over 300.00% of brick self-boost strength": "具有超过300.00%的砖自增强强度",
    "Have over 500.0 Scrap Clicks. Reward: Scrap gain is boosted by your manual scrap clicks": "有超过 500.0 次报废点击。奖励：您的手动报废点击会提高报废收益",
    "Hey game developers, why would you want to rickroll everyone on news ticker if you can advertise yourself? Take the chance.": "嘿，游戏开发者，如果你可以为自己做广告，你为什么要在新闻行情上让每个人都摇摇晃晃？把握机会。",
    "Inflation?": "通货膨胀？",
    "Only freebies want this upgrade": "只有免费赠品才需要此升级",
    "per second": "每秒",
    "Perform a compression": "执行压缩",
    "possible bought Golden Scrap Upgrades": "可能购买的黄金废料升级",
    "Prestige": "声望",
    "Prestige Confirmation:": "声望确认：",
    "Prestige for": "声望",
    "Prestige for the first time": "第一次有声望",
    "Prestige time boosts scrap gain": "声望时间提高废料收益",
    "Prestiges and Prestige Time,": "声望和声望时间，",
    "Prestiges make 2nd RBU cost cheaper": "声望使第二个 RBU 成本更便宜",
    "Prestigious": "声望很高的",
    "Production": "生产",
    "protons": "质子",
    "Protons": "质子",
    "Protons and Electrons": "质子和电子",
    "R.I.P Scraps :(": "R.I.P 废料 :(",
    "Renewable boost": "可再生能源",
    "Scrap dimensions, I guess?": "废料尺寸，我猜？",
    "Scrap Factories (#1)": "废料厂（#1）",
    "scrap factories.": "废料厂。",
    "Scrap gain is divided by its amount, you cannot gain protons and electrons and your scrap gain is divided by": "废料收益除以其数量，您无法获得质子和电子，您的废料收益除以",
    "Scraps": "废料",
    "Scraps (+": "废料 (+",
    "Scraps boost Booster gain": "废料提升助推器增益",
    "Scraps boost its gain": "废料增加了它的收益",
    "Scraps generate extra levels of 1st RMU": "废料产生额外的第一级 RMU",
    "scraps in decayverse": "衰变宇宙中的碎片",
    "Scraps power up Achievement Effect": "废料提升成就效果",
    "Scraps,": "废料，",
    "seconds": "秒",
    "seconds of prestige time (Instead of resetting to 0 secs)": "声望时间的秒数（而不是重置为 0 秒）",
    "Self-boost that boosts itself that boosts itself that boosts itself...": "自我提升 自我提升 自我提升 自我提升...",
    "September 3rd, 2020 v0.1.0": "2020 年 9 月 3 日 v0.1.0",
    "Sexdecuplers": "性别十倍频器",
    "Slight Achievement UI style change.": "轻微的成就 UI 样式更改。",
    "Speed:": "速度：",
    "Standard": "标准",
    "Star effect multiplier is added by": "星形效果乘数由",
    "star multiplier base for every star": "每颗星的乘数基数",
    "Stars": "星星",
    "Stars,": "星星，",
    "Stars.": "星星。",
    "Steel Beams": "钢梁",
    "Steel Beams and Electrons": "钢梁和电子",
    "Stronger wrench effect to brick self-boost": "砖自升力更强的扳手作用",
    "super decay. They are dividing your all pre-booster resources by": "超级衰变。他们将你所有的预助推器资源划分为",
    "Super Factories (#2)": "超级工厂（#2）",
    "Super Factories generate 3rd and 4th RMU extra levels": "超级工厂产生第三和第四个 RMU 额外关卡",
    "Synergism": "协同作用",
    "Synergizers": "增效剂",
    "Synergizers II": "增效剂 II",
    "Synergizers II.": "增效剂 II。",
    "The only game that has huge numbers of levels": "唯一拥有大量关卡的游戏",
    "Thicc potion → Thicc boost": "Thicc 药水 → Thicc 提升",
    "This game is NSFW, Not Safe For Work. Workers out there shouldn't play this game, cause not safe for work (in other words, you will get fired if the boss knows you play this).": "这个游戏是 NSFW，不适合工作。外面的工人不应该玩这个游戏，因为工作不安全（换句话说，如果老板知道你玩这个，你会被解雇）。",
    "This game is totally different with the original game!": "这个游戏和原版游戏完全不同！",
    "times": "次",
    "times || Prestige time:": "次||声望时间：",
    "to see the changelog": "查看更新日志",
    "Transform 1 Booster": "变形 1 助推器",
    "Transform 50% of your Boosters": "改造 50% 的助推器",
    "Trillionaire": "亿万富翁",
    "True engineering": "真正的工程",
    "True scientific": "真正的科学",
    "Unlock 2 more Booster types": "解锁另外 2 种助推器类型",
    "Unlock 2 more Booster types and several fuel upgrade": "解锁另外 2 种助推器类型和多种燃料升级",
    "Unlock Boosted Factories": "解锁加速工厂",
    "Unlock Boosted Factories (#3) and several fuel upgrades": "解锁加速工厂（#3）和一些燃料升级",
    "Unlock Super Factories": "解锁超级工厂",
    "Upcoming: Deboosters": "即将推出：减振器",
    "Used to fix Zimbabwean Dollar inflations!": "用于修复津巴布韦美元通胀！",
    "WE ARE": "我们是",
    "World's best OST": "世界上最好的OST",
    "You will gain": "你会获得",
    "You will keep extra scrap factories on next prestige": "您将在下一个声望中保留额外的废料工厂",
    "You will lose all your:": "您将失去所有：",
    "You will perform a compression when you enter booster challenges": "当您进入助推器挑战时，您将执行压缩",
    "Your achievements multiply your scrap gain by": "您的成就将您的废料收益乘以",
    "Your best boosters was": "你最好的助推器是",
    "Your Brick Self-Boost is at": "您的 砖块 自提升 在",
    "Your multiplicator base is": "你的倍增器基数是",
    "Your Multiplicator effect starts to softcap at": "您的倍增器效果开始软上限为",
    "Credits": "鸣谢",
    "Currently:": "当前:",
    "Currently: /": "当前: /",
    "Is Active:": "激活中：",
    "Join My Discord": "加入我的 Discord",
    "Play Antimatter Dimensions Now!": "现在玩反物质维度吧！",
    "to get": "去获得",
    "You are currently": "你当前",
    "You gain": "你获得",
    "You cannot easily do that!!": "你不能轻易做到这一点！！",
    "You can only buy 6 Golden Scrap Upgrades (upgrades that are kept on compression and unlocking features don't count) and your scrap gain is divided by": "您只能购买 6 次黄金废料升级（不计入压缩和解锁功能的升级），您的废料收益除以",
    "You gain Golden scraps on prestige every second": "你每秒获得声望的黄金碎片",
    "You gain Magnets and Steel Beams passively once you unlock Magnets and Automatically Buy NMUs (can be turned off in Magnets sub tab)": "一旦解锁磁铁并自动购买 NMU，您就会被动地获得磁铁和钢梁（可以在磁铁子选项卡中关闭）",
    "You gain more Golden scraps": "你获得更多的黄金碎片",
    "You gain more Magnets and Steel Beams": "你获得更多的磁铁和钢梁",
    "You gain more Magnets and Steel beams based on prestiges": "您根据声望获得更多磁铁和钢梁",
    "You gain more Protons and Electrons": "你获得更多的质子和电子",
    "You gain Thermal Energy based on total booster types": "您根据助推器类型获得热能",
    "You have done": "你已经完成了",
    "You have performed": "你执行了",
    "You have prestiged": "你有声望",
    "You keep 5 Extra Levels of 3rd RMU": "您保留 5 个额外级别的第三个 RMU",
    "x less scraps and your scrap gain is divided by": "x 更少的废料，您的废料收益除以",
    "x more scraps": "x 更多的废料",
    "x more wrenches": "x 更多的扳手",
    "Tip: Unlocking super factories and bricks also unlocks more NMUs unnoticeably.": "提示：解锁超级工厂和砖块也会在不知不觉中解锁更多 NMU。",
    "(boost starts at 5,000 scrap clicks)": "（提升从 5,000 次废料点击开始）",
    "(caps at 10)": "（上限为 10）",
    "\"Factory lists\" is always unlocked": "\"出厂列表\" 始终解锁",
    "/s), multiplying your golden scrap gain by": "/s），将您的黄金废料收益乘以",
    "% strength": "% 力量",
    "13th and 14th Golden Scrap Upgrade use better formula": "13、14黄金废升级使用更好的配方",
    "1st RBU effect gets better based on its level (Starts at 100 levels)": "第一个 RBU 效果会根据其等级变得更好（从 100 级开始）",
    "1st RMU effect is 50% stronger": "第一个 RMU 效果增强 50%",
    "20th GS Upgrade uses better formula": "第 20 次 GS 升级使用更好的配方",
    "2nd RBU cost is based on (level+5)^1.75 instead of (level+5)^2.0": "第二个 RBU 成本基于 (level+5)^1.75 而不是 (level+5)^2.0",
    "4th and 8th Golden Scrap Upgrade effect use better formula": "第4和第8金废料升级效果使用更好的配方",
    "5th and 13th Golden Scrap Upgrade use better formula": "第 5 和第 13 次金废料升级使用更好的配方",
    "Achievement 17 reward multipliers now go up based on protons and electrons.": "成就 17 奖励乘数现在基于质子和电子而上升。",
    "Added 2 more notations.": "增加了 2 个符号。",
    "Added achievements.": "添加了成就。",
    "Added Boosters.": "添加了助推器。",
    "Added credits.": "添加了鸣谢。",
    "Added GS Upgrades and stars": "添加了 GS 升级和星星",
    "Added Magnets, Bricks and Decayverse.": "添加了磁铁、砖块和衰变宇宙。",
    "Added more achievements.": "增加了更多成就。",
    "Added more news tickers.": "添加了更多新闻代码。",
    "Added news ticker.": "添加了新闻代码。",
    "Added notations.": "添加了符号。",
    "Added some upgrades.": "添加了一些升级。",
    "All Automation speed is boosted by Golden Scraps": "黄金废料提高了所有自动化速度",
    "All booster point types boost Booster gain": "所有助推器点类型都会提升助推器增益",
    "All pre-boosters resource gain are raised to": "所有前置助推器的资源增益都提高到",
    "Also this game doesn't support original scrap clicker saves!": "另外这个游戏不支持原始的剪贴板保存！",
    "Amount": "数量",
    "An incremental game with a lot of contents!": "内容丰富的增量游戏！",
    "and 2nd RMU Effect to": "和第二个 RMU 效果",
    "and are multiplying your decay resistance by": "并且将您的耐腐性乘以",
    "and multiplying your brick self-boost strength by 1.0000x": "并将您的砖块自增强强度乘以 1.0000 倍",
    "and multiplying your Golden Scrap gain by": "并将您的黄金废料收益乘以",
    "and multiplying your scrap gain by": "并将您的废料收益乘以",
    "and raising star effect to the power of p": "并将明星效应提升到 p 次方",
    "and your scrap gain is divided by": "你的报废收益除以",
    "Anti-Scalation II Points (+": "抗缩放 II 点 (+",
    "Anti-Scalation Points (+": "抗缩放点（+",
    "Anti-Scalers": "防垢剂",
    "Anti-Scalers II": "防垢剂 II",
    "Anti-Scalers II.": "防垢剂 II。",
    "Anti-Scalers.": "防垢剂。",
    "Created the game": "创建了游戏",
    "Current limit: 3 bought scrap factories per buy max": "当前限制：每次购买最多 3 个购买的废品工厂",
    "GS and": "GS和",
    "into Anti-Scaler": "进入防垢剂",
    "into Anti-Scaler II": "进入抗垢剂 II",
    "into Anti-Scalers": "进入防垢剂",
    "into Anti-Scalers II": "进入抗垢剂 II",
    "into Discounter": "进入折扣店",
    "into Discounters": "进入折扣店",
    "into Inflator": "进入充气机",
    "Exponential boost is for the weak": "指数级提升是针对弱者的",
    "Yes ✓": "是 ✓",
    "\"You cannot run and hide from us!!\" - Decay": "\“你不能逃跑和躲避我们！！\” - Decay",
    "A stack of Boosted Factories": "一堆加速工厂",
    "Balancing.exe has stopped working": "Balancing.exe 已停止工作",
    "Boost of googology!": "助推古学！",
    "Booster Billionaire": "助推器亿万富翁",
    "Burn your eyes": "燃烧你的眼睛",
    "Buy 3rd Golden Scrap Upgrade": "购买 第三个 黄金废料 升级",
    "Clay ≠ Scrap": "粘土≠废料",
    "Constant gaining is boring": "不断的收获很无聊",
    "Definitely Scrap Dimensions": "绝对废料维度",
    "DEMI": "黛米",
    "Feel the heat": "感受热量",
    "GODS!": "神！",
    "Have over 1.000e100 Golden Scraps": "拥有超过 1.000e100 黄金碎片",
    "Have over 1.000e100 Thermal Energy. Reward: Thermal Energy boost its gain": "拥有超过 1.000e100 的热能。奖励：热能提升增益",
    "Have over 1.000e20 Magnets": "拥有超过 1.000e20 个磁铁",
    "Have over 1.000e4 Stars. Reward: Scraps power up Achievement Effect": "拥有超过 1.000e4 颗星。奖励：碎片加电成就效果",
    "Have over 1.000e9 Boosters. Reward: All Automation speed is boosted by Golden Scraps": "拥有超过 1.000e9 助推器。奖励：Golden Scraps 提升所有自动化速度",
    "Have over 1.798e308 Boosters. Reward: Scraps power up Achievement Effect": "拥有超过 1.798e308 个助推器。奖励：碎片加电成就效果",
    "Have over 1.798e308 Golden Scraps": "拥有超过 1.798e308 个黄金碎片",
    "Have over 3.000e4 Stars. Reward: Scraps power up Achievement Effect": "拥有超过 3.000e4 颗星。奖励：碎片加电成就效果",
    "Have over 64 Boosted Factories.": "拥有超过 64 个加速工厂。",
    "I have too many!": "我有太多了！",
    "No Pain No Gain": "一分耕耘一分收获",
    "The only way to defeat yourself is do sui...[CENSORED]": "打败自己的唯一方法就是随心所欲……[审查]",
    "The universe is bright": "宇宙是光明的",
    "Time is absolute - Einsbert Altein": "时间是绝对的 - 爱因斯伯特·阿尔泰因",
    "times.": "次。",
    "Unlock Booster Challenges. Reward: Thermal Energy boost its gain": "解锁助推器挑战。奖励：热能提升增益",
    "YOU CAN BEAT BRICKMAN!?": "你能打败砖块人！？",
    "You love to grind, don't you?": "你喜欢研磨，是吗？",
    "You must be cheating": "你一定是在作弊",
    "into Inflators": "进入充气机",
    "into Synergizer": "进入增效剂",
    "into Synergizer II": "进入增效剂 II",
    "into Synergizers": "进入增效剂",
    "into Synergizers II": "进入增效剂 II",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Once upon a time, you died, game over, the end, bye bye.": "曾几何时，你死了，游戏结束，结束，再见。",
    "Money is for the weak": "钱是给弱者的",
    "You just need 9,999 more stars to beat Brickman": "你只需要再多 9,999 颗星星就可以击败 砖块人",
    "Speedrunning Instagram": "极速跑 Instagram",
    "← Dream face reveal UNMASKED!! 😍💓": "← 梦露露面！！ 😍💓",
    "YOU GOT A RICKROLL, HAHAHAAAA!!!!": "你有一个人力车，哈哈哈！！！！",
    "Yet Another Merge Game good, Pixel Gun 3D bad": "又一个合并游戏不错，Pixel Gun 3D 不好",
    "Tip: Don't forget to check upgrades if you feel stuck.": "提示：如果您觉得卡住了，请不要忘记检查升级。",
    "This game is SO incrementalistic!! I liked it ⭐⭐⭐⭐⭐": "这游戏太增量主义了！！ 我喜欢它⭐⭐⭐⭐⭐",
    "Synergism good, PUBG bad": "协同好，PUBG坏",
    "Planned prestige layers: Prestige, Boosters, Empowerment, Time, Dimensions, (Inter)galactic, Realms, Scrappyverse, to be continued.": "计划的声望层：声望、助推器、赋权、时间、维度、（星际）银河、领域、废料宇宙，待续。",
    "If COVID-19 grow exponentially, why can't they make COVID-19 Galaxy?": "如果 COVID-19 呈指数增长，为什么他们不能制造 COVID-19 星系？",
    "How to get FREE BRICKS. 1. Find river or lake.  2. If you found clay, mine it  3. Put clay in furnace (Make sure the furnace has fuel otherwise it will not work)  4. You get Bricks. Repeat the step in case you need more": "如何获得免费砖块。 1. 寻找河流或湖泊。 2. 如果你找到粘土，就开采它 3. 将粘土放入熔炉中（确保熔炉有燃料，否则将无法工作） 4. 你会得到砖块。 如果您需要更多，请重复该步骤",
    "First Scrap Clicker++ was made in 7 days!": "第一个 废料点击器++ 在 7 天内制作完成！",
    ". Disclaimer: It's in minecraft.": ". 免责声明：它在我的世界中。",
    "What you currently see here is Minecraft clone name variations: Minebuild, Buildcraft, Survivalbuild, Pixelcraft, Blockcraft, Worldbuild, etc.": "您目前在这里看到的是 Minecraft 克隆名称变体：Minebuild、Buildcraft、Survivalbuild、Pixelcraft、Blockcraft、Worldbuild 等。",
    "Jacorb, DEMEMZEA.": "Jacorb, DEMEMZEA.",
    "\"Suggestion: ×1.01 magnet every 100k scrap clicks, please (Like merge boost)\" - The guy who wants to make this game similar to scrap 2": "\"建议：每 100k 次废品点击 ×1.01 磁铁，请（喜欢合并提升）\" - 想要让这款游戏类似于废品 2 的人",
    "← This link is randomly generated. If you able to watch that random video, I will give you 💸💸 $100,000 💸💸. If same link appears, You will get GOD role and this realm will be yours": "← 此链接是随机生成的。 如果你能看那个随机的视频，我会给你 💸💸 100,000 美元 💸💸。 如果出现相同的链接，你将获得上帝角色，这个领域将是你的",
    "Feel this game slow? Take a look of all upgrades (You will realize that multipliers go up and affordable upgrades).": "感觉这游戏慢？ 查看所有升级（您会意识到乘数上升和负担得起的升级）。",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "To Electrons: ": "对于电子：",
    "To Proton: ": "对于质子：",
    "To Protons: ": "对于质子：",
    "To Scrap: ": "对于废料：",
    "To Electron effect: ": "对于电子效果：",
    "To Proton effect: ": "对于质子效果：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    " extra wrench multiplier base": "额外的扳手倍增器基数",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \(\+([\d\.]+)\)$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^This feature will be unlocked when you have (.+) Golden Scrap Upgrade$/, '此功能将在您进行第 $1 次黄金废料升级时解锁'],
    [/^Current limit: (.+) bought scrap factories per buy max$/, '当前上限：每次购买最多 $1 个购买的废品工厂'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^You have (.+) COVID-7s$/, '你有 $1 COVID-7s'],
    [/^You have (.+) COVID-66s$/, '你有 $1 COVID-66s'],
    [/^\"Still (.+) scraps, huh\?\" \- Scrapman with (.+) scraps$/, '“还是 $1 碎片，嗯？” \- 有 $2 碎片的 废料人'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^Buffed Achievement (.+) reward.$/, '强化成就 $1 奖励。'],
	[/^Achievement (.+) reward:$/, '成就 $1 奖励：'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) Scraps$/, '$1e$2 废料'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) Scraps$/, '$1 废料'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Currently: \/([\d\.]+)$/, '当前: \/$1'],
    [/^Currently: \/([\d\.]+)e([\d\.,]+)$/, '当前: \/$1e$2'],
    [/^Cost: ([\d\.]+)$/, '成本：$1'],
    [/^Cost: ([\d\.]+)e([\d\.,]+)$/, '成本：$1e$2'],
    [/^Cost: (.+) Scraps$/, '成本：$1 废料'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);