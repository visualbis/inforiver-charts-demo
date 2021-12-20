export function groupBy(array, groups, measures) {
    var map = new Map();
    groups = [].concat(groups);
    return array.reduce((r, o) => {
        const result = groups.reduce((m, k, i, { length }) => {
            var child;
            if (m.has(o[k])) return m.get(o[k]);
            if (i + 1 === length) {
                const mObj = measures.reduce((mR, mK) => {
                    mR[mK] = 0;
                    return mR;
                }, {});
                child = Object.assign(...groups.map((k) => ({ [k]: o[k] })), mObj);
                r.push(child);
            } else {
                child = new Map();
            }
            m.set(o[k], child);
            return child;
        }, map);
        measures.forEach((mKey) => {
            result[mKey] += +o[mKey];
        });
        return r;
    }, []);
}