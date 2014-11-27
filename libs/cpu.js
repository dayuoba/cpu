var os=require('os');


var CPU=module.exports=function(){};

CPU.num=function(){
	return os.cpus().length;
};