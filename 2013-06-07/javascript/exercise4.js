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

function createLake(x,y,altitudePlain,altitudeHill,color) {

	// WATER BLUE
	// DEFAULT COLOR = [(37/255), (109/255), (123/255)]

	if (color === undefined)
		color = [(37/255), (109/255), (123/255)];

	var lambdaX = (x/10);
	var lambdaY = (y/10);
	var rand = (randomZforHillAltitude(altitudeHill)/2);
	var lake = CUBOID([x, y, (rand+altitudePlain)]);

	return COLOR(color)(lake);
}

DRAW(createLake(x,y,altitudePlain,altitudeHill))

function createTree(h_cone, h_trunk) {

	var domain = PROD1x1([INTERVALS(1)(30),INTERVALS(1)(30)]);

	var cone_color = [(34/255), (139/255), (34/255)];
	var trunk_color = [(83/255), (27/255), 0];

	var first_circle = BEZIER(S0)([[2.43, 2.33, 0], [2.6, 4.96, 0], [6.24, 4.96, 0], [6.35, 2.33, 0]]);
	var second_circle = BEZIER(S0)([[2.43, 2.33, 0], [2.6, -0.3, 0], [6.24, -0.3, 0], [6.35, 2.33, 0]]);
	var point = BEZIER(S0)([[4.4, 2.31, h_cone],[4.4, 2.31, h_cone]]);

	var first_surface = MAP(BEZIER(S1)([first_circle,point]))(domain);
	var second_surface = MAP(BEZIER(S1)([second_circle,point]))(domain);
	var fill_hole = MAP(BEZIER(S1)([first_circle,second_circle]))(domain);

	var cone = COLOR(cone_color)(STRUCT([first_surface, second_surface, fill_hole]));
	var trunk = COLOR(trunk_color)(T([0,1,2])([4.4, 2.31, -h_trunk])(EXTRUDE([h_trunk])(DISK(0.9)())));
	var tree = T([0,1,2])([-4.4, -2.31, h_trunk])(STRUCT([cone, trunk]));

	return tree;
}

var zonePoints = getZonePoints(x,10,(x/4),(y/4),(x*(3/4)),(y*(3/4)), 1);
var subzones = getSubzones(zonePoints, 1, x, (x/4), (y*(3/4)));
var forest_subzone = subzones[0];
var settlement_subzone = subzones[1];

var n_trees = 60;

for (var n=0; n<n_trees; n++) {
	var pointIndex = getRandomPointIndexFromZone(forest_subzone);
	var point = forest_subzone[pointIndex];
	var tree = S([0,1,2])([0.05,0.05,0.05])(createTree(2,8));
	//DRAW(T([0,1,2])([point[0], point[1], point[2]])(tree))
	DRAW(T([0,1,2])([point[0], point[1], 1.3])(tree))
	forest_subzone.splice(pointIndex, 1);
}

function createHouse(l,L,h,hT) {
	var base = COLOR([1.5,1.5,1.5])(CUBOID([l,L,h]));
	var roof_points = [[0,0,h],[l,0,h],[0,L,h],[l,L,h],[(l/2),0,hT],[(l/2),L,hT]];
	var roof_cells = [[0,1,2], [1,2,3], [0,1,4], [2,3,5], [0,2,4], [2,4,5], [1,3,4], [3,4,5]];
	var roof = COLOR([Math.random(),Math.random(),Math.random()])(SIMPLICIAL_COMPLEX(roof_points)(roof_cells))

	var house = STRUCT([base, roof]);
	return house;
}

var first_clusterHouse = STRUCT([createHouse(4,3,2,4), T([0])([5])(createHouse(3,4,3,4)), T([0,1])([2.5,5])(createHouse(5,3,3,5))]);
var second_clusterHouse = T([0,1])([-5,-5])(R([0,1])([PI])(STRUCT([createHouse(4,3,2,4), T([0])([5])(createHouse(3,4,3,4)), T([0,1])([2.5,5])(createHouse(5,3,3,5))])));
var third_clusterHouse = T([1])([25])(second_clusterHouse);

var settlement = T([0,1,2])([5,3,altitudeHill-1.5])(S([0,1,2])([0.1,0.1,0.1])(T([1])([12.5])(STRUCT([first_clusterHouse, second_clusterHouse, third_clusterHouse]))));

DRAW(settlement);