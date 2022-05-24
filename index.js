var gpio = require("gpio");
var kisa=300;
var bekleme=80;
var uzun=900;
var ara=1000;
var g16 = gpio.export(16,
     {
        direction: gpio.DIRECTION.OUT,
        ready: function(){
            sos()
        }
     })

function sos(){
	yak(kisa,()=>yak(kisa,()=>yak(kisa,()=>{
		yak(uzun,()=>yak(uzun,()=>yak(uzun,()=>{
			yak(kisa,()=>yak(kisa,()=>yak(kisa,()=>{
					console.log('done!')
					setTimeout(sos,ara);
				}
			)))
		})))
	})))
	
}

function yak(ms,cb){

	g16.set(0);
	console.log('yandı!')
	setTimeout(()=>{
		g16.set(1); 
		console.log('söndü')
		setTimeout(cb,bekleme);
	},ms)
}