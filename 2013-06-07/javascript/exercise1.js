var bezierXYZpoints = {};

// DEFAULT COLOR = [(210/255), (105/255), (30/255)]

var x = 10;
var y = 30;
var altitudePlain = 0;
var altitudeHill = 3;
var altitudeMountain = 15;
var bezierLinesX = 75;
var bezierControlPoints = 75;

function digitalTerrainModel(x,y,altitudePlain,altitudeHill,altitudeMountain,bezierLinesX,bezierControlPoints,color) {

	var domainDTM = PROD1x1([INTERVALS(1)(50),INTERVALS(1)(50)])

	if (color === undefined)
		color = [(210/255), (105/255), (30/255)];

	var xBoundLake = (x/4);
	var yBoundLake = (y/4);

	var xBoundHill = (x*(3/4));
	var yBoundHill = (y*(3/4));

	var curveSet = new Array();

	var lastCurve = 0;
	for (var i=0; i<=x; i=i+(x/bezierLinesX)) {

		if (i <= x) {

			if (i===0 || i===x) {
				curveSet.push(BEZIER(S0)([[i,0,0],[i,y,0]]));
			}

			else {

				var bezierControlPointsSet = new Array();

				var lastControlPoint = 0;
				for (var j=0; j<=y; j=j+(y/bezierControlPoints)) {

					if (j===0 || j===y) {
						bezierControlPointsSet.push([i,j,0]);
						bezierXYZpoints[createKey(i, j)] = 0;
					}

					else {

						if (i < xBoundLake && j < yBoundLake) {
							bezierControlPointsSet.push([i,j,altitudePlain]);
							bezierXYZpoints[createKey(i, j)] = altitudePlain;
						}

						else if (i < xBoundHill && j < yBoundHill) {
							var z = randomZforHillAltitude(altitudeHill);
							bezierControlPointsSet.push([i,j,z]);
							bezierXYZpoints[createKey(i, j)] = z;
						}

						else {
							var z = randomZforMountainAltitude(altitudeMountain)
							bezierControlPointsSet.push([i,j,z]);
							bezierXYZpoints[createKey(i, j)] = z;
						}
					}

					lastControlPoint += j;
				}

				if (lastControlPoint !== y) {
					bezierControlPointsSet.push([i,y,0]);
					bezierXYZpoints[createKey(i, y)] = 0;
				}

				curveSet.push(BEZIER(S0)(bezierControlPointsSet));
			}

		}

		lastCurve += i;

	}

	if (lastCurve !== x) {
		curveSet.push(BEZIER(S0)([[x,0,0],[x,y,0]]));
	}

	return COLOR(color)(MAP(BEZIER(S1)(curveSet))(domainDTM));

}

function randomZforHillAltitude(altitudeHill) {
	return Math.random()*altitudeHill;
}

function randomZforMountainAltitude(altitudeMountain) {
	var rand = Math.random();
	if (rand > 0.5)
		return rand*altitudeMountain;
	return -(rand*altitudeMountain);
}

function createKey(x, y) {
	return (x+"_"+y);
}

function cooFromKey(str) {
	var keys = new Array();
	keys.push(str.split("_"));
	return keys;
}

/*
*  zone_id = 0, 1, 2
*  0: [0,xTresholdHill]
*  1: [xTresholdHill, xTresholdMountain]
*  2: [xTresholdMountain, x]
*/

function getZonePoints(x, y, xTresholdHill, yTresholdHill, xTresholdMountain, yTresholdMountain, zone_id) {
	var points = new Array();
	for (key in bezierXYZpoints) {
		xy = cooFromKey(key);
		x_coo = xy[0][0];
		y_coo = xy[0][1];
		z_coo = bezierXYZpoints[key];
		var p = new Array();
		p.push(x_coo);
		p.push(y_coo);
		p.push(z_coo);
		if (zone_id === 0) {
			if (x_coo < xTresholdHill && y_coo < yTresholdHill)
				points.push(p);
		}
		else if (zone_id === 1) {
			if (x_coo < xTresholdMountain && y_coo < yTresholdMountain && x_coo >= xTresholdHill && y_coo >= yTresholdHill)
				points.push(p);
		}
		else if (zone_id === 2) {
			if (x_coo >= xTresholdMountain && y_coo >= yTresholdMountain)
				points.push(p);
		}
	}

	return points;
}

function getSubzones(zone, zone_id, x, xTresholdHill, xTresholdMountain) {

	var zones = new Array();

	var first_subzone = new Array();
	var second_subzone = new Array();
	for (var i=0; i<zone.length; i++) {
		if (zone_id === 0) {
			var x_median = xTresholdHill/2;
			if (zone[i][0] < x_median)
				first_subzone.push(zone[i]);
			else if (zone[i][0] >= x_median)
				second_subzone.push(zone[i]);
		}
		else if (zone_id === 1) {
			var x_median = (xTresholdMountain+xTresholdHill)/2;
			if (zone[i][0] < x_median)
				first_subzone.push(zone[i]);
			else if (zone[i][0] >= x_median)
				second_subzone.push(zone[i]);
		}
		else if (zone_id === 2) {
			var x_median = (x+xTresholdMountain)/2;
			if (zone[i][0] < x_median)
				first_subzone.push(zone[i]);
			else if (zone[i][0] >= x_median)
				second_subzone.push(zone[i]);
		}
	}

	zones.push(first_subzone);
	zones.push(second_subzone);

	return zones;
}

function getRandomPointIndexFromZone(zone) {
	return Math.floor(Math.random()*zone.length);
}

//DRAW(DTM(15,10,0,2,12,100,100));
DRAW(digitalTerrainModel(x,y,altitudePlain,altitudeHill,altitudeMountain,bezierLinesX,bezierControlPoints));