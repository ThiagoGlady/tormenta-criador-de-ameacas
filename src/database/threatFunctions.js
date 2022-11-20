import porradeiro from "./threatSubFunction/porradeiro";
import dilonge from "./threatSubFunction/dilonge";
import conjuraDor from "./threatSubFunction/conjuraDor";

const threatFunctions = [
    {
        id: 1,
        functionName: 'Porradeiro',
        subFunctions: porradeiro,
    },
    {
        id: 2,
        functionName: 'Dilonge',
        subFunctions: dilonge,
    },
    {
        id: 3,
        functionName: 'ConjuraDor',
        subFunctions: conjuraDor,
    },
];

export default threatFunctions;
