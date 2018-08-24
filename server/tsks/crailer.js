const cp = require('child_process');
const { resolve } = require('path');

(async () => {
    const script = resolve(__dirname, '../carwler/video');
    const child = cp.fork(script, []);
    let inviked = false;

    child.on('error', err => {
        if (inviked) return;
        inviked = true;
        console.log(err);
    });

    child.on('exit', code => {
        if (inviked) return;
        inviked = true;
        let err = code === 0 ? null : new Error('exit code' + code);
        console.log(err);
    });

    child.on('message', data => {
        console.log(data);
    });
})();