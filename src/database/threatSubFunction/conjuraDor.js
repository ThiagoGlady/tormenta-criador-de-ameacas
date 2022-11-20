import statistics from "../statistics";

const alterPVMinusOne = (statistic) => {
    const { ND } = statistic;

    return (statistics.find((sta) => sta.ND === ND-1)).PV;
}

const alterPVMinusTwo = (statistic) => {
    const { ND } = statistic;

    return (statistics.find((sta) => sta.ND === ND-2)).PV;
}

const alterCDWeak = (statistic) => {
    const { level, CD } = statistic;

    if (level === 1) {
        return CD + 1;
    }

    if (level === 2) {
        return CD + 2;
    }

    return CD + 3;
}

const alterCDStrong = (statistic) => {
    const { level, CD } = statistic;

    if (level === 1) {
        return CD + 2;
    }

    if (level === 2) {
        return CD + 4;
    }

    return CD + 6;
}

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

const conjuraDor = [
    {
        id: 1,
        nome: 'Corajoso',
        alterData: (statistic) => {
            statistic.PV = alterPVMinusOne(statistic);
            statistic.CD = alterCDWeak(statistic);
        }
    },
    {
        id: 2,
        nome: 'Agressivo',
        alterData: (statistic) => {
            statistic.PV = alterPVMinusTwo(statistic);
            statistic.defense = alterDefenseMinus(statistic);
            statistic.weakRes = statistic.mediumRes;
            statistic.CD = alterCDWeak(statistic);
        }  
    },
];

export default conjuraDor;