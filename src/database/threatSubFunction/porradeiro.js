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

const alterAtkBonusMinus = (statistic) => {
    const { level, atkBonus } = statistic;

    if (level === 1) {
        return atkBonus - 2;
    }

    if (level === 2) {
        return atkBonus - 4;
    }

    return atkBonus - 6;
};

const alterDamagePlus = (statistic) => {
    const { level, damage } = statistic;

    if (level === 1) {
        return damage + 5;
    }

    if (level === 2) {
        return damage + 15;
    }

    return damage + 30;
};

const alterDamageMinus = (statistic) => {
    const { level, damage } = statistic;

    if (level === 1) {
        return damage - 5;
    }

    if (level === 2) {
        return damage - 15;
    }

    return damage - 30;
};

const alterDefensePlus = (statistic) => {
    const { level, defense } = statistic;

    if (level === 1) {
        return defense + 2;
    }

    if (level === 2) {
        return defense + 4;
    }

    return defense + 6;
};

const alterDefenseMinus = (statistic) => {
    const { level, defense } = statistic;

    if (level === 1) {
        return defense - 2;
    }

    if (level === 2) {
        return defense - 4;
    }

    return defense - 6;
};

const porradeiro = [
    {
        id: 1,
        nome: 'Imprudente',
        alterData: (statistic) => {
            statistic.atkBonus = alterAtkBonusPlus(statistic);
            statistic.damage = alterDamagePlus(statistic);
            statistic.strongRes = statistic.mediumRes;
            statistic.defense = alterDefenseMinus(statistic);
        }
    },
    {
        id: 2,
        nome: 'Cauteloso',
        alterData: (statistic) => {
            statistic.atkBonus = alterAtkBonusMinus(statistic);
            statistic.damage = alterDamageMinus(statistic);
            statistic.mediumRes = statistic.strongRes;
            statistic.defense = alterDefensePlus(statistic);
        }  
    },
];

export default porradeiro;