var spawn = require('child_process').spawn;

free = spawn('hexo', ['server', '-p 4000']);/* 其实就是等于执行hexo server -p 4000*/

free.stdout.on('data', function (data) {

    console.log('standard output:\n' + data);

});

free.stderr.on('data', function (data) {

    console.log('standard error output:\n' + data);

});

free.on('exit', function (code, signal) {

    console.log('child process eixt ,exit:' + code);

});

作者：不系流年系乾坤
链接：https://www.jianshu.com/p/a256ca175c64
來源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
