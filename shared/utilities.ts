import Hole from './types';

const generateHoles = () :Hole[] => {
    const ret = [];
    for (let i = 1; i < 18; i++) {
        let hole :Hole = {
            number: i,
            par: 4,
        };
        ret.push(hole);
    }
    return ret;
}

export default generateHoles;