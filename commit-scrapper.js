let fetchLogs = (cb, options) => {
    options = options || {}
    const repo = require('electron').remote.process.argv[2];
    const git = require('simple-git')(repo)
    let opts = options.reverse ? ["--reverse"] : [];
    git.log(opts, (err, data) => {
        if (err) return cb(err, [])

        const container = document.getElementById('container')
        let logs = data.all
        cb(err, logs)
    })
}

module.exports = {
    fetchLogs
}