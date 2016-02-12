//Function to reverse the string
function reverse() {
	var str = document.getElementById('textId').value;
    var endIndex = str.length;
	var revStr  =  '';
	var startIndex = '';
	//Traverse String from last to first
   for (var i = str.length; i>=0; i--){
	   //Find the word
       if (str.charAt(i) == ' ' || i == 0){
		if (i == 0) {
			startIndex = i;
		} 
		else {
			startIndex = i+1;
		}
		//Reverse the word order
		for (var j = startIndex; j <= endIndex;j++) {
			revStr += str.charAt(j);
		}
		 if (i != 0){
			 revStr += ' ' ;
		 }
        endIndex = i-1;
      }
     }
	 document.getElementById('revId').innerHTML = "<b>Reversed string is :</b> " + revStr;
}

//Function to display Number series
function NumDispaly () {
	var num = [];
	var strNum = '';
	//Manipulate the array
	for (var i = 1; i <= 100; i++) {
		//Logic for fizz, bizz and fizzbizz
		if (i%3 == 0 || i%5 == 0) 
		{
			if (i%3 == 0) {
				strNum += "Fizz";
			}
			if (i%5 == 0) {
				strNum += "Bizz";
			}
			num [i-1] = strNum;
			strNum = '';
		}
		else {
			num[i-1]= i;
		}
	}
	
	document.getElementById('numId').innerHTML = num.join('<br>');
}