import statistics from "../database/statistics";
import threatFunctions from "../database/threatFunctions";

const makeCoreData = (sheet, base) => {
    const randomThreatFunction = threatFunctions[Math.floor(Math.random()*threatFunctions.length)];

    const { subFunctions } = randomThreatFunction;
    const randomThreatSubFunction = subFunctions[Math.floor(Math.random()*subFunctions.length)];

    randomThreatSubFunction.alterData(base);

    sheet.function = randomThreatFunction.functionName;
    sheet.subFunction = randomThreatSubFunction.nome;

    Object.entries(base).forEach((pair) => {
        sheet[pair[0]] = pair[1];
    });
};

const makeRandomSheet = (ND) => {
    const statistic = statistics.find((sta) => sta.ND === ND );
    const baseStatistic = { ...statistic };

    const newSheet = { ND };

    makeCoreData(newSheet, baseStatistic);

    return newSheet;
};

export default makeRandomSheet;