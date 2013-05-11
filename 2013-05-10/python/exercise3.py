#FOUR WHEEL INSTANCES

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


def wheel () :
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

gomma_final_1 = wheel()
gomma_final_2 = T(3)(5)(gomma_final_1)
gomma_final_3 = T(1)(9)(gomma_final_1)
gomma_final_4 = T(1)(9)(gomma_final_2);

gomma_result = STRUCT([gomma_final_1, gomma_final_2, gomma_final_3, gomma_final_4])

VIEW(gomma_result)

