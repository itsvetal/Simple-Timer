(() => {
    "use strict";
    (() => {
        const e = document.querySelector(".bacon");
        fetch

        ("https://baconipsum.com/api/?type=all-meat&paras=3").then((e => e.json())).then((t => {
            const c = t.reduce(((e, t) => e + `<p>${t}</p>`), "");
            e.innerHTML = c
        })).catch((t => e.innerHTML = t))
    })()
})();