document.querySelector("#btn").addEventListener("click", function () {
	var num = "0123456789ABCDEF";
	var hash = "#";
	for (var i = 0; i < 6; i++) {
		hash += num[Math.floor(Math.random() * 16)];
	}
	var str = hash;
	console.log(str);
	var target = document.getElementById("hexcode");
	target.innerHTML = str;
	document.getElementById("wrapper").style.backgroundColor = str;
});
