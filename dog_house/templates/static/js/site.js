if (window.innerWidth<=1140){

	ham=document.getElementById("ham")
	var i=0
	ham.addEventListener("click",function(){
		i++
		if (i==1){
		nav=document.querySelector(".navbar").childNodes[0].nextElementSibling
		lis=document.querySelector(".nlist")
		console.log(lis)
		lis.style.display="block"
	}
	else{
		lis.style.display="none"
		i=0
	}
		
	})
}


