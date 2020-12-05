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
    script.src = '//dumplingclubhousecompliments.com/1da037bc0d05b04ca5a97f68953da67b/invoke.js';
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
    script.src = '//dumplingclubhousecompliments.com/75aa95e7c0c853dc23abd68b8b5e72ac/invoke.js';
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
    script.src = '//dumplingclubhousecompliments.com/f52e10fa10bb64c2eba8b5c95eb84d5a/invoke.js';
    var el = document.getElementById("center_middle_add");
    el.appendChild(script);
}
}
derot();
