// document.write("<p>これはJavaScriptのサンプルです。</p>");

// var x = 123;
// var y = 654;
// var z = 987;
// var kotae = (x + y + z) / 3;
// document.write("<p>答え：");
// document.write(kotae);
// document.write("</p>");

// var x = 40;
// x = x * 1;
// var y = 2;
// document.write(x + y);

// var arr = {
//     '太郎': 'yamada@taro.co.jp',
//     '花子': 'hanako@hana.com',
//     'つやの': 'tuyano@shoda.jp'
// };
// 
// document.write('<ul>');
// for(name in arr){
//     document.write('<li>' + name + '（' + arr[name] + '）</li>')
// }
// document.write('</ul>');

var arr = new Array();

arr['taro'] = { '名前':'太郎', 'メール':'yamada@taro.co.jp', '電話':'888-7777' };
arr['hanako'] = { '名前':'花子', 'メール':'hanako@hana.com', '電話':'555-5555' };
arr['tuyano'] = { '名前':'つやの', 'メール':'tuyano@shoda.jp', '電話':'03-3333-3333' };

document.write('<ul>');
for(obj in arr){
    document.write('<li>');
    for(obj2 in arr[obj]){
        document.write(obj2 + ":" + arr[obj][obj2] + "<br>");
    }
    document.write('</li>');    
}
document.write('</ul>');
