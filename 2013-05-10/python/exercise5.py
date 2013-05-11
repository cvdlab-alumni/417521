#3D CAR MODEL

from pyplasm import *

def TOR (radius):
	r1 , r2, interval1, interval2 = radius
	def TOR0 (subds):
		N , M = subds
		a=0.5*(r2-r1)
		c=0.5*(r1+r2)
		domain=Plasm.power(  INTERVALS(interval1)(N),  INTERVALS(interval2)(M)  )
		fx = lambda p: (c+a*COS(p[1])) * COS(p[0])
		fy = lambda p: (c+a*COS(p[1])) * SIN(p[0])
		fz = lambda p: a*SIN(p[1])
		return MAP(([fx,fy,fz]))(domain)
	return TOR0

def wheel ():
	firstR = ROTATE([1,3])(PI)(TOR([1,2, 2*PI, PI])([50,50]))
	secondR = T(3)(0.4)(TOR([1,2, 2*PI, PI])([50,50]))
	externalR = TUBE([1, 2, 0.5])(50)
	gomma = COLOR(BLACK)(STRUCT([firstR, secondR, externalR]))
	internalR = TUBE([1, 1, 0.5])(50)
	cilindro = T(3)(-0.1)(TUBE([0, 0.2, 0.7])(50))
	cerchione = COLOR(GREEN)(STRUCT([internalR, cilindro]))
	cerchio1a = CUBOID([1,0.2,0.5])
	cerchio1b = R([1,2])(PI/4.2)(cerchio1a)
	cerchio2a = R([1,2])(1.2*PI)(cerchio1b)
	cerchio2b = R([1,2])(PI)(cerchio1b)
	cerchio3a = R([1,2])(PI/1.8)(cerchio1b)
	cerchio3b = R([1,2])(PI/3)(cerchio1b)
	cerchio = STRUCT([cerchio1a, cerchio1b, cerchio2a, cerchio2b, cerchio3a, cerchio3b])
	return COLOR(GREEN)(STRUCT([gomma, cerchione,  cerchio]))

#TEST CAR

def car3d () :

	DOM = POWER([INTERVALS(1)(50), INTERVALS(1)(50)])

	C0_0 = BEZIER(S1)([[3.31, 1.3, 0], [3.39, 1.12, 0], [3.72, 1, 0], [3.9, 1.02, 0]])
	C0 = BEZIER(S1)([[3.31, 1.5, 0], [3.39, 1.14, 0], [3.72, 1.5, 0], [3.9, 1.5, 0]])
	C1 = BEZIER(S1)([[3.28, 1.69, 0.1], [3.8, 2.16, 0.1], [3.34, 2.14, 0.1], [3.9, 2, 0.1]])
	FIRST = MAP(BEZIER(S2)([C0_0,C0,C1]))(DOM)
	C1_S = BEZIER(S1)([[3.28, 1.69, -0.1-1.5], [3.8, 2.16, -0.1-1.5], [3.34, 2.14, -0.1-1.5], [3.9, 2, -0.1-1.5]])
	FIRST_S = S(3)(-1)(FIRST)
	UNION_C1 = MAP(BEZIER(S2)([C1, C1_S]))(DOM)
	UNION_C1_DOWN = T(3)(0.2)(MAP(BEZIER(S2)([C0_0, BEZIER(S1)([[3.31, 1.3, -1.9], [3.39, 1.12, -1.9], [3.372, 1, -1.9], [3.9, 1.02, -1.9]])]))(DOM))

	C2_0 = BEZIER(S1)([[3.9, 1.02, 0], [3.79, 2.34, 0], [5.37, 1.96, 0], [5.14, 1.01, 0]])
	C2 = BEZIER(S1)([[3.9, 1.5, 0], [3.79, 2.21, 0], [5.37, 2.05, 0], [5.14, 1.5, 0]])
	C3 = BEZIER(S1)([[3.9, 2, 0.1], [4.14, 2.12, 0.1], [4.71, 2.12, 0.1], [5.14, 2.12, 0.1]])
	SECOND = MAP(BEZIER(S2)([C2_0,C2,C3]))(DOM)
	C3_S = BEZIER(S1)([[3.9, 2, -0.1-1.5], [4.14, 2.12, -0.1-1.5], [4.71, 2.12, -0.1-1.5], [5.14, 2.12, -0.1-1.5]])
	SECOND_S = S(3)(-1)(SECOND)
	UNION_C3 = MAP(BEZIER(S2)([C3, C3_S]))(DOM)
	UNION_C3_DOWN = T(3)(0.2)(MAP(BEZIER(S2)([C2_0, BEZIER(S1)([[3.9, 1.02, -1.9], [3.79, 2.34, -1.9], [5.37, 1.96, -1.9], [5.14, 1.01, -1.9]])]))(DOM))

	C4_0 = BEZIER(S1)([[5.14, 1.01, 0], [6.19, 0.99, 0], [4.4, 0.84, 0], [8.13, 0.91, 0]])
	C4 = BEZIER(S1)([[5.14, 1.5, 0], [6.19, 1.5, 0], [4.4, 1.4, 0], [8.13, 1.4, 0]])
	C5 = BEZIER(S1)([[5.14, 2.12, 0.1], [6.11, 2.01, 0.1], [6.99, 1.96, 0.1], [8.13, 1.95, 0.1]])
	THIRD = MAP(BEZIER(S2)([C4_0,C4,C5]))(DOM)
	C5_S = BEZIER(S1)([[5.14, 2.12, -0.1-1.5], [6.11, 2.01, -0.1-1.5], [6.99, 1.96, -0.1-1.5], [8.13, 1.95, -0.1-1.5]])
	THIRD_S = S(3)(-1)(THIRD)
	C5_PART = BEZIER(S1)([[5.14, 2.12, 0.1], [5.70, 2.01, 0.1], [5.90, 1.96, 0.1], [6.40, 1.95, 0.1]])
	C5_PART_S = BEZIER(S1)([[5.14, 2.12, -0.1-1.5], [5.70, 2.01, -0.1-1.5], [5.90, 1.96, -0.1-1.5], [6.40, 1.95, -0.1-1.5]])
	UNION_C5 = MAP(BEZIER(S2)([C5_PART, C5_PART_S]))(DOM)
	UNION_C5_DOWN = T(3)(0.2)(MAP(BEZIER(S2)([C4_0, BEZIER(S1)([[5.14, 1.01, -1.9], [6.19, 0.99, -1.9], [4.4, 0.84, -1.9], [8.13, 0.91, -1.9]])]))(DOM))

	C6_0 = BEZIER(S1)([[8.13, 0.91, 0], [8, 2.32, 0], [9.59, 1.88, 0], [9.27, 0.98, 0]])
	C6 = BEZIER(S1)([[8.13, 1.4, 0], [8, 2.15, 0], [9.59, 1.89, 0], [9.27, 1.45, 0]])
	C7 = BEZIER(S1)([[8.13, 1.95, 0.1], [8.45, 2, 0.1], [9.27, 1.9, 0.1], [9.27, 1.84, 0.1]])
	FOURTH = MAP(BEZIER(S2)([C6_0,C6,C7]))(DOM)
	C7_S = BEZIER(S1)([[8.13, 1.95, -0.1-1.5], [8.45, 2, -0.1-1.5], [9.27, 1.9, -0.1-1.5], [9.27, 1.84, -0.1-1.5]])
	FOURTH_S = S(3)(-1)(FOURTH)
	UNION_C7 = MAP(BEZIER(S2)([C7, C7_S]))(DOM)
	UNION_C7_DOWN = T(3)(0.2)(MAP(BEZIER(S2)([C6_0, BEZIER(S1)([[8.13, 0.91, -1.9], [8, 2.32, -1.9], [9.59, 1.88, -1.9], [9.27, 0.98, -1.9]])]))(DOM))

	C8_0 = BEZIER(S1)([[9.27, 0.98, 0], [9.67, 0.97, 0], [9.21, 0.86, 0], [10.06, 0.92, 0]])
	C8 = BEZIER(S1)([[9.27, 1.5, 0], [9.67, 1.3, 0], [9.21, 1.4, 0], [10.06, 1.2, 0]])
	C9 = BEZIER(S1)([[9.27, 1.84, 0.1], [9.88, 1.62, 0.1], [9.61, 1.76, 0.1], [10.06, 1.43, 0.1]])
	FIFTH = MAP(BEZIER(S2)([C8_0,C8,C9]))(DOM)
	C9_S = BEZIER(S1)([[9.27, 1.84, -0.1-1.5], [9.88, 1.62, -0.1-1.5], [9.61, 1.76, -0.1-1.5], [10.06, 1.43, -0.1-1.5]])
	FIFTH_S = S(3)(-1)(FIFTH)
	UNION_C9 = MAP(BEZIER(S2)([C9, C9_S]))(DOM)
	UNION_C9_DOWN = T(3)(0.2)(MAP(BEZIER(S2)([C8_0, BEZIER(S1)([[9.27, 0.98, -1.9], [9.67, 0.97, -1.9], [9.21, 0.86, -1.9], [10.06, 0.92, -1.9]])]))(DOM))

	LATERAL_SX = STRUCT([FIRST, SECOND, THIRD, FOURTH, FIFTH])
	LATERAL_DX = T(3)(1.5+(4*0.1))(STRUCT([FIRST_S, SECOND_S, THIRD_S, FOURTH_S, FIFTH_S]))
	LATERALS = STRUCT([LATERAL_SX, LATERAL_DX])
	UNIONS = T(3)(1.5+(2*0.1))(STRUCT([UNION_C1, UNION_C3, UNION_C5, UNION_C7, UNION_C9]))
	UNIONS_DOWN = T(3)(1.5+(2*0.1))(STRUCT([UNION_C1_DOWN, UNION_C3_DOWN, UNION_C5_DOWN, UNION_C7_DOWN, UNION_C9_DOWN]))


	FILL_FRONT_HOLE_1 = BEZIER(S1)([[10.06, 0.92, 0], [10.06, 1.43,0]])
	FILL_FRONT_HOLE_2 = BEZIER(S1)([[10.06, 0.92, 1.9], [10.06, 1.43,1.9]])
	FILL_FRONT_HOLE = MAP(BEZIER(S2)([FILL_FRONT_HOLE_1, FILL_FRONT_HOLE_2]))(DOM)

	FILL_BACK_HOLE_1 = BEZIER(S1)([[3.31, 1.3, 0], [3.28, 1.69, 0]])
	FILL_BACK_HOLE_2 = BEZIER(S1)([[3.31, 1.3, 1.9], [3.28, 1.69, 1.9]])
	FILL_BACK_HOLE = MAP(BEZIER(S2)([FILL_BACK_HOLE_1, FILL_BACK_HOLE_2]))(DOM)


	PARABREZZA0 = BEZIER(S1)([[7.48, 1.96,0.1], [7.67, 1.98,0.1], [7.93, 1.99,0.1], [8.08, 2,0.1]])
	PARABREZZA1 = BEZIER(S1)([[7.04, 2.42,0.1], [7.11, 2.42,0.1], [7.19, 2.42,0.1], [7.25, 2.42,0.1]])
	PARABREZZA_FIRST = MAP(BEZIER(S2)([PARABREZZA0, PARABREZZA1]))(DOM)
	PARABREZZA_SECOND = S(3)(-16)(PARABREZZA_FIRST)

	pt = BEZIER(S1)([[7.48, 1.96,-0.1-1.5], [7.67, 1.98,-0.1-1.5], [7.93, 1.99,-0.1-1.5], [8.08, 2,-0.1-1.5]])
	PARABREZZA_THIRD = MAP(BEZIER(S2)([PARABREZZA0, pt]))(DOM)
	pf = BEZIER(S1)([[7.04, 2.42,-0.1-1.5], [7.11, 2.42,-0.1-1.5], [7.19, 2.42,-0.1-1.5], [7.25, 2.42,-0.1-1.5]])
	PARABREZZA_FOURTH = MAP(BEZIER(S2)([PARABREZZA1, pf]))(DOM)
	PARABREZZA = T(1)(0.2)(T(3)(1.7)(STRUCT([PARABREZZA_FIRST, PARABREZZA_SECOND, PARABREZZA_THIRD, PARABREZZA_FOURTH])))

	BODY = STRUCT([LATERALS, UNIONS, UNIONS_DOWN, FILL_FRONT_HOLE, FILL_BACK_HOLE, PARABREZZA])

	#TEST ENGINE:

	MOT1 = BEZIER(S1)([[0.87, 2.07,0], [1.07, 2.34,0], [1.32, 2.34,0], [1.54, 2.07,0]])
	MOT2 = BEZIER(S1)([[1.07,2.07,1.50],[1.32,2.07,1.50]])
	FIRST_MOT = R([1,3])(PI/2)(MAP(BEZIER(S2)([MOT1,MOT2]))(DOM))
	SECOND_MOT = T(3)(-0.68)(FIRST_MOT)
	MOT = T(3)(0.1)(T(1)(6.4)(STRUCT([FIRST_MOT,SECOND_MOT])))

	return COLOR(RED)(STRUCT([MOT, BODY, gomma_result]))


gomma_final_1 = wheel()
gomma_final_2 = T(3)(5)(gomma_final_1)
gomma_final_3 = T(1)(14)(gomma_final_1)
gomma_final_4 = T(1)(14)(gomma_final_2);

gomma_result = T([2,1,3])([1.2,4.5,0.2])(S(3)(0.3)(S(2)(0.3)(S(1)(0.3)(	STRUCT([gomma_final_1, gomma_final_2, gomma_final_3, gomma_final_4])))))
VIEW(STRUCT([car3d(), gomma_result]))