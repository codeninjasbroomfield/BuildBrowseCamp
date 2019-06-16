function placeOrder(food){
				var node = document.getElementsByClassName('orderItem');
				node[0].textContent =food;
				var orderNode = document.getElementById('orderInfo');
				orderNode.style.display = "block";
				window.scrollTo(0, 0);
				setTimeout(function(){
					var n =document.getElementById('orderInfo');
					n.style.display = "none";
				},5000);
}