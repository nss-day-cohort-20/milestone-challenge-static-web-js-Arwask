var getMainDiv = document.getElementById('mainDiv');
getMainDiv.addEventListener("keyup",function() 
{
	if(event.keyCode === 13)
	{
	document.getElementById('buildTree').click();
	}
})

var getButton = document.getElementById('buildTree')
getButton.addEventListener("click", function()
{	
	height = document.getElementById('height').value;
	character = document.getElementById('character').value;
	
	if(height === "" || character === "")
	{
		alert("Both fields should have value");
	}
	var userSpecifications = {}
	userSpecifications.height = height;
	userSpecifications.character = character;
	console.log("userSpecifications", userSpecifications);
	tree(userSpecifications);
})	

function tree(userSpecifications)
{
	var msg = "";
	for(i=0; i<height; i++)
	{
		for(j=height; i<j; j--)
		{
			msg +=" ";
		}
		msg += character.repeat(i+i+1);
		msg += '\n'
	}
	console.log(msg);
}