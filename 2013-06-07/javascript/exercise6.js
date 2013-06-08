function lar_to_obj(larModel){
	var V = larModel[0];
	var FV = larModel[1];
	var vertices = V.length;
	var faces = FV.length;
	var objResult = "";
	for (var i = 0; i < vertices; i++){
		objResult = objResult + "V ";
		if (V[i][2] !== undefined)
			objResult = objResult + V[i][0]+" "+V[i][1]+" "+V[i][2];
		else
			objResult = objResult + V[i][0]+" "+V[i][1]+" 0"; 
		objResult+="\n";
	}
	objResult+="\n";
	for (var i = 0; i < faces; i++){
		objResult = objResult + "F ";
		for (var j = 0; j < FV[i].length; j++) {
			objResult = objResult + FV[i][j] + " ";
		};
		objResult+="\n";
	}
	return objResult;
}

/*
* ESEMPIO ESTRATTO DA examples.py
* A.A. 2012-1013
* PROF. PAOLUZZI
* LINK: https://github.com/cvdlab-cg/lessons/blob/master/lessons/2013-06-04/examples.py
*/

FV = [[5,6,7,8],
[0,5,8],
[0,4,5],
[1,2,4,5],
[2,3,5,6],
[0,8,7], [3,6,7], [1,2,3], [0,1,4]
]

V = [[0,6],
[0,0],
[3,0],
[6,0],
[0,3],
[3,3],
[6,3],
[6,6],
[3,6]]

var larModel = [V,FV]
var obj = lar_to_obj(larModel);