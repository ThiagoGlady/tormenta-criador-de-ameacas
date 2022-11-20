import statistics from "../statistics";

const alterAtkBonusPlus = (statistic) => {
    const { level, atkBonus } = statistic;

    if (level === 1) {
        return atkBonus + 2;
    }

    if (level === 2) {
        return atkBonus + 4;
    }

    return atkBonus + 6;
};

const alterDamagePlus = (statistic) => {
    const { ND } = statistic;

    return statistics.find((sta) => sta.ND === ND+2).damage;
};

const alterDefenseMinus = (statistic) => {
    const { level, defense } = statistic;

    if (level === 1) {
        return defense - 3;
    }

    if (level === 2) {
        return defense - 6;
    }

    return defense - 9;
};

const alterPVMinus = (statistic) => {
    const { ND } = statistic;

    return statistics.find((sta) => sta.ND === ND+1).PV;
}

const dilonge = [
    {
        id: 1,
        nome: 'Certeiro',
        alterData: (statistic) => {
            statistic.defense = alterDefenseMinus(statistic);
            statistic.damage = alterDamagePlus(statistic);
            statistic.atkBonus = alterAtkBonusPlus(statistic);
        }
    },
    {
        id: 2,
        nome: 'Explosivo',
        alterData: (statistic) => {
            statistic.PV = alterPVMinus(statistic);
            statistic.damage = alterDamagePlus(statistic);
            statistic.mediumRes = statistic.weakRes;
        }  
    },
];

export default dilonge;