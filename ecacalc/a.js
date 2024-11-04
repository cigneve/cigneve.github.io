function calc(lp,epw,cat){
  let res = (60-(lp/20+epw/20+cat/5))*8/7;
  return res;
}

function getValue(selector){
 let val = document.querySelector(selector).value;
 let float = parseFloat(val.replace(/,/g,".")); 
 return float;
}

function handle(){
  let lp = getValue("#lp-input");
  let epw = getValue("#epw-input");
  let cat = getValue("#cat-input");
  let output = document.querySelector("#output");
  output.value = calc(lp,epw,cat);

}

