var cpu=require('../index');

var num=cpu.num();
console.log(num);
cpu.usage(function(data){
	console.log(data);
});
