#2D CAR PROFILE CURVES

from pyplasm import *

DOM = INTERVALS(1)(50)

def BEZIERS1(points):
	return BEZIER(S1)(points)

def MAPBEZIER1D(points):
	return MAP(BEZIERS1(points))(DOM)

B1 = [[4.2, 5.83, 0], [6.48, 5.75, 0], [7.88, 5.75, 0], [9.07, 5.78, 0]]
B2 = [[9.06, 2.85, 0], [10.62, 3.19, 0], [10.31, 5.59, 0], [9.07, 5.78, 0]]
B3 = [[4.18, 2.81, 0], [5.59, 2.83, 0], [7.39, 2.88, 0], [9.06, 2.84, 0]]
B4 = [[4.19, 5.83, 0], [2.94, 5.52, 0], [2.95, 3.06, 0], [4.18, 2.81, 0]]

curve1 = MAPBEZIER1D(B1)
curve2 = MAPBEZIER1D(B2)
curve3 = MAPBEZIER1D(B3)
curve4 = MAPBEZIER1D(B4)

firstProfile = T(2)(-4.2)(STRUCT([curve1,curve2,curve3,curve4]))

#VIEW(firstProfile)

B5 = [[3.37, 1.18], [2.81, 2.43], [4.84, 1.98], [5.77, 2.27]]
B6 = [[6.35, 2.07], [6.17, 2.54], [5.87, 2.55], [5.77, 2.27]]
B7 = [[6.35, 2.07], [6.84, 1.99], [7.61, 1.84], [6.96, 2.36]]
B8 = [[8.07, 2.02], [7.12, 2.57], [6.94, 2.61], [6.96, 2.36]]
B9 = [[8.07, 2.02], [9.18, 2.05], [10.43, 1.61], [10.11, 1.03]]
B10 = [[9.27, 0.97], [9.49, 0.97], [9.7, 0.98], [10.11, 1.03]]
B11 = [[9.27, 0.97], [9.47, 2.06], [7.97, 2.09], [8.15, 0.91]]
B12 = [[5.13, 1], [5.91, 1.07], [4.81, 0.84], [8.15, 0.91]]
B13 = [[5.13, 1], [5.21, 2.3], [3.64, 1.98], [3.85, 1.01]]
B14 = [[3.37, 1.18], [3.48, 1.12], [3.67, 1.04], [3.85, 1.01]]

curve5 = MAPBEZIER1D(B5)
curve6 = MAPBEZIER1D(B6)
curve7 = MAPBEZIER1D(B7)
curve8 = MAPBEZIER1D(B8)
curve9 = MAPBEZIER1D(B9)
curve10 = MAPBEZIER1D(B10)
curve11 = MAPBEZIER1D(B11)
curve12 = MAPBEZIER1D(B12)
curve13 = MAPBEZIER1D(B13)
curve14 = MAPBEZIER1D(B14)

secondProfile = T(3)(-1.5)(R([2,3])(PI/2)(STRUCT([curve5,curve6,curve7,curve8,curve9,curve10,curve11,curve12,curve13,curve14])))

#VIEW(secondProfile)

B15 = [[0.34, 1], [1.08, 1], [2.19, 0.97], [2.85, 1]]
B16 = [[0.34, 1], [-0.01, 1.69], [0.07, 2.09], [0.67, 2.14]]
B17 = [[2.48, 2.14], [1.82, 2.19], [1.41, 2.19], [0.67, 2.14]]
B18 = [[2.48, 2.14], [3.02, 2.24], [3.34, 1.54], [2.85, 1]]

curve15 = MAPBEZIER1D(B15)
curve16 = MAPBEZIER1D(B16)
curve17 = MAPBEZIER1D(B17)
curve18 = MAPBEZIER1D(B18)

thirdProfile = T([1,2,3])([5,-1.5,-1.5])(R([1,2])(PI/2)(R([2,3])(PI/2)(STRUCT([curve15,curve16,curve17,curve18]))))
fourthProfile = T([1,2,3])([8.5,-1.5,-1.5])(R([1,2])(PI/2)(R([2,3])(PI/2)(STRUCT([curve15,curve16,curve17,curve18]))))

#VIEW(thirdProfile)

VIEW(STRUCT([firstProfile, secondProfile, thirdProfile, fourthProfile]))