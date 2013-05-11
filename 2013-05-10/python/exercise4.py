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


def STEERING_WHEEL () :
	DOM = POWER([INTERVALS(1)(50), INTERVALS(1)(50)])

	c0 = BEZIER(S1)([[2.69, 3.52, 0], [3.77, 3.91, 0], [4.34, 3.91, 0], [5.38, 3.54, 0]])
	c1 = BEZIER(S1)([[2.69, 3.52, 0], [2.54, 2.34, 0], [3.47, 1.94, 0], [3.56, 1.41, 0]])
	c2 = BEZIER(S1)([[5.38, 3.53, 0], [5.56, 2.32, 0], [4.63, 2.05, 0], [4.53, 1.41, 0]])
	c3 = BEZIER(S1)([[3.56, 1.41, 0], [3.53, 1.28, 0], [4.54, 1.27, 0], [4.53, 1.41, 0]])

	c_first = MAP(BEZIER(S2)([c0,c3]))(DOM)
	c_second = MAP(BEZIER(S2)([c1,c2]))(DOM)

	c = STRUCT([c_first, c_second])
	c_behind = T(3)(0.5)(c)

	c_sup = MAP(BEZIER(S2)([c0, BEZIER(S1)([[2.69, 3.52, 0.5], [3.77, 3.91, 0.5], [4.34, 3.91, 0.5], [5.38, 3.54, 0.5]])]))(DOM)
	c_down = MAP(BEZIER(S2)([c3, BEZIER(S1)([[3.56, 1.41, 0.5], [3.53, 1.28, 0.5], [4.54, 1.27, 0.5], [4.53, 1.41, 0.5]])]))(DOM)

	c_left = MAP(BEZIER(S2)([c1, BEZIER(S1)([[2.69, 3.52, 0.5], [2.54, 2.34, 0.5], [3.47, 1.94, 0.5], [3.56, 1.41, 0.5]])]))(DOM)
	c_right = MAP(BEZIER(S2)([c2, BEZIER(S1)([[5.38, 3.53, 0.5], [5.56, 2.32, 0.5], [4.63, 2.05, 0.5], [4.53, 1.41, 0.5]])]))(DOM)

	torus = T([3, 2, 1])([0.255, 2.5, 4])(TOR([3,2.5,2*PI,2*PI])([50,50]))

	presa_1 = T(1)(3.6)(CUBOID([0.9, 2.5, 0.5]))
	presa_2 = T([1,2])([3.6, 2.6])(R([1,2])(PI/2)(CUBOID([0.9, 2.2, 0.5])))
	presa_3 = T(1)(3)(presa_2)

	return (COLOR(BLACK)(STRUCT([c, c_behind, c_sup, c_down, c_left, c_right, torus, presa_1, presa_2, presa_3])))

VIEW(STEERING_WHEEL())