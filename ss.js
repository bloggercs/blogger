function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function derot() {
    await sleep(1000);
    if(document.getElementById("top_header_addone")){
        document.getElementById("top_header_addone").innerHTML = '<a href="https://s.click.aliexpress.com/e/_Am8XVp" target="_parent"><img src="https://bloggercs.github.io/blogger/selena.jpg"/><span style="display:block;"/><span style="display:block;"></span></a>';
    }
    await sleep(3000);
    if(document.getElementById("sidebar_add")){
        document.getElementById("sidebar_add").innerHTML = '<a href="https://s.click.aliexpress.com/e/_Atfjsn" target="_parent"><img src="https://bloggercs.github.io/blogger/selena1.jpg"/><span style="display:block;"/><span style="display:block;"></span></a>';
    }
    await sleep(3000);
    if(document.getElementById("center_middle_add")){
        document.getElementById("center_middle_add").innerHTML = '<a href="https://s.click.aliexpress.com/e/_A1b3cB" target="_parent"><img src="https://bloggercs.github.io/blogger/selena2.jpg"/><span style="display:block;"/><span style="display:block;"></span></a>';
}
}
derot();
