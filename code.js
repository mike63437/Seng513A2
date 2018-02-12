//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
	
	function getNChars()
	{
		var totalChars = -1;
		for (var i in txt.split('\n'))
		{
			totalChars += txt.split('\n')[i].length +1;
		}
		return totalChars;
	}	
	
	function getNWords()
	{
		var nWords = "";
		var totalWords = -1;
		for (var i in txt.split('\n'))
		{
			nWords = txt.split('\n')[i].replace(/[^A-Z0-9]/gi, " ");
			totalWords += (nWords.split(" ").length-1)+1;
		}
		
		return totalWords;
	}
	
	function getNLines()
	{
		return txt.split('\n').length;
	}
	
	function getNNonEmptyLines()
	{
		return txt.split('\n').filter(x => x).length;
	}
	
	function getAverageWordLength()
	{
		
		var nCharsInWords = txt.replace(/[^A-Z0-9]/gi, "").length;
		var nWords = getNWords();
		return (nCharsInWords / nWords);
	}
	
	function getMaxLineLength()
	{
		var maxLineLength = 0;
		for (var i in txt.split('\n'))
		{
			if (txt.split('\n')[i].length > maxLineLength)
			{
				maxLineLength = txt.split('\n')[i].length;
			}
		}
		
		return maxLineLength;
	}
	
	function getPalindromes()
	{
		let palindromes = [];
		var split = txt.split(/[^A-Za-z0-9]/);
		for (var i in split)
		{
			newTxt = split[i].toLowerCase().replace(/[^A-Za-z0-9]/, '');
			length = newTxt.length;
			var palin = true;
			for (var i = 0; i < length/2; i++)
			{
				if (newTxt[i] !== newTxt[length - i - 1])
				{
					palin = false;
				}
			}
			if (length < 2)
			{
				palin = false;
			}
			if (palin == true)
			{
				palindromes.push(newTxt);
			}
		}
		return palindromes;
	}
	
    return {
        nChars: getNChars(),
        nWords: getNWords(),
        nLines: getNLines(),
        nNonEmptyLines: getNNonEmptyLines(),
        averageWordLength: getAverageWordLength(),
        maxLineLength: getMaxLineLength(),
        palindromes: getPalindromes(),
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

