(function() {
    var configuration = {
    "token": "0fc4c33227878b02768b61b867a4e64d",
    "entryScript": {
        "type": "timeout",
        "timeout": 3000,
        "capping": {
            "limit": 5,
            "timeout": 24
        }
    },
    "exitScript": {
        "enabled": true
    },
    "popUnder": {
        "enabled": true
    }
};
    var script = document.createElement('script');
    script.async = true;
    script.src = '//cdn.shorte.st/link-converter.min.js';
    script.onload = script.onreadystatechange = function () {var rs = this.readyState; if (rs && rs != 'complete' && rs != 'loaded') return; shortestMonetization(configuration);};
    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(script, entry);
})();
