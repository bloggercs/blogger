function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function derot() {
await sleep(1000);
if(document.getElementById("top_header_addone")){
	var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '<iframe data-aa="1396857" src="//ad.a-ads.com/1396857?size=728x90" scrolling="no" style="width:728px; height:90px; border:0px; padding:0; overflow:hidden" allowtransparency="true"></iframe>';
    var el = document.getElementById("top_header_addone");
    el.appendChild(script);
}
await sleep(3000);
if(document.getElementById("sidebar_add")){
	var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '<iframe data-aa="1396854" src="//ad.a-ads.com/1396854?size=300x250" scrolling="no" style="width:300px; height:250px; border:0px; padding:0; overflow:hidden" allowtransparency="true"></iframe>';
    var el = document.getElementById("sidebar_add");
    el.appendChild(script);
}
await sleep(3000);
if(document.getElementById("center_middle_add")){
	var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '<iframe data-aa="1396856" src="//ad.a-ads.com/1396856?size=468x60" scrolling="no" style="width:468px; height:60px; border:0px; padding:0; overflow:hidden" allowtransparency="true"></iframe>';
    var el = document.getElementById("center_middle_add");
    el.appendChild(script);
}
}
derot();
