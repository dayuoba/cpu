var os=require('os');
var cluster=require('cluster');


function getCPUTimes(){
	var cpus=os.cpus();
	var num=cpus.length;
	var data=[];
	for(var i=num-1;i>=0;i--){
		data.push(cpus[i].times);
	}
	return data;
}

function getCPUUsage(data,cb){
		var first=data[0];
		var second=data[1];
		var third=data[2];
		var usage=[];
		for(var i=0;i<first.length;i++){
			var first_idle=first[i].idle
			var first_total=first[i].idle+first[i].user+first[i].nice+first[i].sys+first[i].irq;
			var second_idle=second[i].idle
			var second_total=second[i].idle+second[i].user+second[i].nice+second[i].sys+second[i].irq;
			var third_idle=third[i].idle
			var third_total=third[i].idle+third[i].user+third[i].nice+third[i].sys+third[i].irq;
			var first_usage=1-(second_idle-first_idle)/(second_total-first_total);
			var second_usage=1-(third_idle-second_idle)/(third_total-second_total);
			var per_usage=(first_usage+second_usage)/2*100;
			usage.push(per_usage.toFixed(1));
		}
		cb(usage);
	}
}

var CPU=module.exports=function(){};

CPU.num=function(){
	return os.cpus().length;
};
CPU.usage=function(cb){
	var first=getCPUTimes();
	setTimeout(function(){
		var second=getCPUTimes();
		setTimeout(function(){
			var third=getCPUTimes();
			var data=[first,second,third];
			getCPUUsage(data,cb);
		},500);
	},500);
};