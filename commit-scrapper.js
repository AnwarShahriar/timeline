let fetchLogs = (cb, options) => {
    options = options || {}
    const repo = require('electron').remote.process.argv[2];
    const git = require('simple-git')(repo)
    git.log((err, data) => {
        if (err) return cb(err, [])

        const container = document.getElementById('container')
        let logs = data.all
        if (options.reverse) {
            logs = logs.reverse();
        }
        cb(err, logs)
    })
}

module.exports = {
    fetchLogs
}