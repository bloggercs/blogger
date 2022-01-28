function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function derot() {
    await sleep(1000);
    if(document.getElementById("top_header_addone")){
        document.getElementById("top_header_addone").innerHTML = 'reklam kodu buraya';
    }
    await sleep(3000);
    if(document.getElementById("sidebar_add")){
        document.getElementById("sidebar_add").innerHTML = '<a href="https://s.click.aliexpress.com/e/_9zIYND" target="_parent"><img src="//ae01.alicdn.com/kf/Ucab5b7c34feb444ea31639f19d0f7bcev/Women-s-Winter-Fur-Jacket-Wool-Sheep-Skin-Leather-Jacket-Genuine-Slim-Fit-Biker-Fashion-Clothing.jpg_220x220.jpg"/><span style="display:block;">AliExpress.com Product - Women\'s Winter Fur Jacket Wool Sheep Skin Leather Jacket Genuine Slim Fit Biker Fashion Clothing from Turkey Monte</span></a>';
    }
    await sleep(3000);
    if(document.getElementById("center_middle_add")){
        document.getElementById("center_middle_add").innerHTML = 'reklam kodu buraya';
    }
}
derot();
