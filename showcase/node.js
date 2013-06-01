!(function (exports){

  var fs = require('fs');

  var plasm_lib = require('plasm.js');
  var obj = plasm_lib.plasm;
  var fun = plasm_lib.plasm_fun;
  var plasm = obj.plasm;
  var Plasm = obj.Plasm;

  var root = this;

  Object.keys(fun).forEach(function (k) {
    root[k] = fun[k];
  });

  var p = new Plasm();
  fun.PLASM(p);


  var scmodel = (function () {

	  	/*
	  	 *  MODEL: CROSLEY RADIO
	  	 *  AUTHOR: Fabio Cumbo
	  	 *  STUDENT ID: 417521
	  	 *  DATE: 01/06/2013
	  	 *  DEVELOPMENT LANGUAGE: PLaSM.js
	  	 */

		var domain = PROD1x1([INTERVALS(1)(10),INTERVALS(1)(10)]);

		/******************************************************************************************************/
		var front_lx = BEZIER(S0)([[0.47, 1.41, 0], [0.06, 4.74, 0], [1.18, 5.74, 0], [2.32, 5.79, 0]]);
		var front_dx = BEZIER(S0)([[4.17, 1.41, 0], [4.58, 4.74, 0], [3.46, 5.74, 0], [2.32, 5.79, 0]]);
		var front = MAP(BEZIER(S1)([front_lx,front_dx]))(domain);

		var back = T([2])([4])(front);
		/******************************************************************************************************/

		var box_lx_front = BEZIER(S0)([[0.47, 1.41, 0], [0.06, 4.74, 0], [1.18, 5.74, 0], [2.32, 5.79, 0]]);
		var box_lx_back = BEZIER(S0)([[0.47, 1.41, 4], [0.06, 4.74, 4], [1.18, 5.74, 4], [2.32, 5.79, 4]]);
		var box_lx = MAP(BEZIER(S1)([box_lx_front,box_lx_back]))(domain);

		var box_ly_front = BEZIER(S0)([[4.17, 1.41, 0], [4.58, 4.74, 0], [3.46, 5.74, 0], [2.32, 5.79, 0]]);
		var box_ly_back = BEZIER(S0)([[4.17, 1.41, 4], [4.58, 4.74, 4], [3.46, 5.74, 4], [2.32, 5.79, 4]]);
		var box_ly = MAP(BEZIER(S1)([box_ly_front,box_ly_back]))(domain);

		var box_down_front = BEZIER(S0)([[0.47, 1.41, 0], [4.17, 1.41, 0]]);
		var box_down_back = BEZIER(S0)([[0.47, 1.41, 4], [4.17, 1.41, 4]]);
		var box_down = MAP(BEZIER(S1)([box_down_front,box_down_back]))(domain);

		var box = STRUCT([box_lx,box_ly,box_down]);

		/******************************************************************************************************/

		var speaker_lx_I = BEZIER(S0)([[0.42, 1.98, 1], [0.36, 2.75, 1], [0.34, 3.37, 1], [0.49, 3.88, 1]]);
		var speaker_lx_II = BEZIER(S0)([[0.39, 1.98, 1], [0.33, 2.75, 1], [0.31, 3.37, 1], [0.46, 3.88, 1]]);
		var speaker_lx_III = BEZIER(S0)([[0.42, 1.98, 1.2], [0.36, 2.75, 1.2], [0.34, 3.37, 1.2], [0.49, 3.88, 1.2]]);
		var speaker_lx_IV = BEZIER(S0)([[0.39, 1.98, 1.2], [0.33, 2.75, 1.2], [0.31, 3.37, 1.2], [0.46, 3.88, 1.2]]);
		var speaker_lx_V = BEZIER(S0)([[0.49, 3.88, 1], [0.46, 3.88, 1]]);
		var speaker_lx_VI = BEZIER(S0)([[0.49, 3.88, 1.2], [0.46, 3.88, 1.2]]);
		var speaker_lx_VII = BEZIER(S0)([[0.42, 1.98, 1], [0.39, 1.98, 1]]);
		var speaker_lx_VIII = BEZIER(S0)([[0.42, 1.98, 1.2], [0.39, 1.98, 1.2]]);

		var speaker_lx_IX = BEZIER(S0)([[0.49, 3.88, 1], [0.52, 4.01, 1], [0.54, 4.11, 1], [0.59, 4.21, 1]]);
		var speaker_lx_X = BEZIER(S0)([[0.46, 3.88, 1], [0.49, 4.01, 1], [0.51, 4.11, 1], [0.56, 4.21, 1]]);
		var speaker_lx_XI = BEZIER(S0)([[0.49, 3.88, 3.2], [0.52, 4.01, 3.2], [0.54, 4.11, 3.2], [0.59, 4.21, 3.2]]);
		var speaker_lx_XII = BEZIER(S0)([[0.46, 3.88, 3.2], [0.49, 4.01, 3.2], [0.51, 4.11, 3.2], [0.56, 4.21, 3.2]]);
		var speaker_lx_XIII = BEZIER(S0)([[0.59, 4.21, 1], [0.56, 4.21, 1]]);
		var speaker_lx_XIV = BEZIER(S0)([[0.59, 4.21, 3.2], [0.56, 4.21, 3.2]]);
		var speaker_lx_XV = BEZIER(S0)([[0.49, 3.88, 1], [0.46, 3.88, 1]]);
		var speaker_lx_XVI = BEZIER(S0)([[0.49, 3.88, 3.2], [0.46, 3.88, 3.2]]);

		var speaker_lx_XVII = BEZIER(S0)([[0.43, 1.63, 1], [0.42, 1.76, 1], [0.42, 1.87, 1], [0.42, 1.98, 1]]);
		var speaker_lx_XVIII = BEZIER(S0)([[0.4, 1.63, 1], [0.39, 1.76, 1], [0.39, 1.87, 1], [0.39, 1.98, 1]]);
		var speaker_lx_XIX = BEZIER(S0)([[0.43, 1.63, 3.2], [0.42, 1.76, 3.2], [0.42, 1.87, 3.2], [0.42, 1.98, 3.2]]);
		var speaker_lx_XX = BEZIER(S0)([[0.4, 1.63, 3.2], [0.39, 1.76, 3.2], [0.39, 1.87, 3.2], [0.39, 1.98, 3.2]]);
		var speaker_lx_XXI = BEZIER(S0)([[0.42, 1.98, 1], [0.39, 1.98, 1]]);
		var speaker_lx_XXII = BEZIER(S0)([[0.42, 1.98, 3.2], [0.39, 1.98, 3.2]]);
		var speaker_lx_XXIII = BEZIER(S0)([[0.43, 1.63, 1], [0.4, 1.63, 1]]);
		var speaker_lx_XXIV = BEZIER(S0)([[0.43, 1.63, 3.2], [0.4, 1.63, 3.2]]);

		var speaker_lx_supI = MAP(BEZIER(S1)([speaker_lx_I, speaker_lx_II]))(domain);
		var speaker_lx_supII = MAP(BEZIER(S1)([speaker_lx_III, speaker_lx_IV]))(domain);
		var speaker_lx_supIII = MAP(BEZIER(S1)([speaker_lx_I, speaker_lx_III]))(domain);
		var speaker_lx_supIV = MAP(BEZIER(S1)([speaker_lx_II, speaker_lx_IV]))(domain);
		var speaker_lx_supV = MAP(BEZIER(S1)([speaker_lx_V, speaker_lx_VI]))(domain);
		var speaker_lx_supVI = MAP(BEZIER(S1)([speaker_lx_VII, speaker_lx_VIII]))(domain);

		var speaker_lx_supVII = MAP(BEZIER(S1)([speaker_lx_IX, speaker_lx_X]))(domain);
		var speaker_lx_supVIII = MAP(BEZIER(S1)([speaker_lx_XI, speaker_lx_XII]))(domain);
		var speaker_lx_supIX = MAP(BEZIER(S1)([speaker_lx_IX, speaker_lx_XI]))(domain);
		var speaker_lx_supX = MAP(BEZIER(S1)([speaker_lx_X, speaker_lx_XII]))(domain);
		var speaker_lx_supXI = MAP(BEZIER(S1)([speaker_lx_XIII, speaker_lx_XIV]))(domain);
		var speaker_lx_supXII = MAP(BEZIER(S1)([speaker_lx_XV, speaker_lx_XVI]))(domain);

		var speaker_lx_supXIII = MAP(BEZIER(S1)([speaker_lx_XVII, speaker_lx_XVIII]))(domain);
		var speaker_lx_supXIV = MAP(BEZIER(S1)([speaker_lx_XIX, speaker_lx_XX]))(domain);
		var speaker_lx_supXV = MAP(BEZIER(S1)([speaker_lx_XVII, speaker_lx_XIX]))(domain);
		var speaker_lx_supXVI = MAP(BEZIER(S1)([speaker_lx_XVIII, speaker_lx_XX]))(domain);
		var speaker_lx_supXVII = MAP(BEZIER(S1)([speaker_lx_XXI, speaker_lx_XXII]))(domain);
		var speaker_lx_supXVIII = MAP(BEZIER(S1)([speaker_lx_XXIII, speaker_lx_XXIV]))(domain);

		var speaker_lx_n00 = STRUCT([speaker_lx_supVII, speaker_lx_supVIII, speaker_lx_supIX, speaker_lx_supX, speaker_lx_supXI, speaker_lx_supXII]);
		var speaker_lx_n01 = STRUCT([speaker_lx_supXIII, speaker_lx_supXIV, speaker_lx_supXV, speaker_lx_supXVI, speaker_lx_supXVII, speaker_lx_supXVIII]);
		var speaker_lx_nI = STRUCT([speaker_lx_supI, speaker_lx_supII, speaker_lx_supIII, speaker_lx_supIV, speaker_lx_supV, speaker_lx_supVI]);
		var speaker_lx_nII = T([2])([0.4])(speaker_lx_nI);
		var speaker_lx_nIII = T([2])([0.4])(speaker_lx_nII);
		var speaker_lx_nIV = T([2])([0.4])(speaker_lx_nIII);
		var speaker_lx_nV = T([2])([0.4])(speaker_lx_nIV);
		var speaker_lx_nVI = T([2])([0.4])(speaker_lx_nV);

		var speaker_lx = STRUCT([speaker_lx_n00, speaker_lx_n01, speaker_lx_nI, speaker_lx_nII, speaker_lx_nIII, speaker_lx_nIV, speaker_lx_nV, speaker_lx_nVI]);
		var speaker_dx = T([0])([4.62])(SCALE([0])([-1])(speaker_lx));
		var speaker = COLOR([0.55, 0.27, 0.07, 1])(STRUCT([speaker_lx, speaker_dx]));

		/******************************************************************************************************/

		var hole_lx_f_I_front = BEZIER(S0)([[1.2, 4.02, 0], [1.37, 3.95, 0], [1.46, 4.42, 0], [1.79, 4.23, 0]]);
		var hole_lx_f_II_front = BEZIER(S0)([[1.79, 4.23, 0], [2.14, 4, 0], [1.75, 3.92, 0], [1.95, 3.59, 0]]);
		var hole_lx_first_front = MAP(BEZIER(S1)([hole_lx_f_I_front,hole_lx_f_II_front]))(domain);
		var hole_lx_s_I_front = BEZIER(S0)([[1.2, 4.02, 0], [1.85, 4.19, 0], [1.69, 4.26, 0], [1.95, 3.59, 0]]);
		var hole_lx_s_II_front = BEZIER(S0)([[1.2, 4.02, 0], [1.13, 3.53, 0], [1.66, 3.32, 0], [1.95, 3.59, 0]]);
		var hole_lx_second_front = MAP(BEZIER(S1)([hole_lx_s_I_front,hole_lx_s_II_front]))(domain);
		var hole_lx_front = STRUCT([hole_lx_first_front, hole_lx_second_front]);

		var hole_lx_back = T([2])([-0.1])(hole_lx_front);

		var hole_lx_I_4depth = BEZIER(S0)([[1.2, 4.02, -0.1], [1.37, 3.95, -0.1], [1.46, 4.42, -0.1], [1.79, 4.23, -0.1]]);
		var hole_lx_II_4depth = BEZIER(S0)([[1.79, 4.23, -0.1], [2.14, 4, -0.1], [1.75, 3.92, -0.1], [1.95, 3.59, -0.1]]);
		var hole_lx_III_4depth = BEZIER(S0)([[1.2, 4.02, -0.1], [1.13, 3.53, -0.1], [1.66, 3.32, -0.1], [1.95, 3.59, -0.1]]);
		var hole_lx_left_4depth = MAP(BEZIER(S1)([hole_lx_f_I_front, hole_lx_I_4depth]))(domain);
		var hole_lx_right_4depth = MAP(BEZIER(S1)([hole_lx_f_II_front, hole_lx_II_4depth]))(domain);
		var hole_lx_down_4depth = MAP(BEZIER(S1)([hole_lx_s_II_front, hole_lx_III_4depth]))(domain);

		var hole_lx = T([2])([0.2])(STRUCT([hole_lx_front, hole_lx_back, hole_lx_left_4depth, hole_lx_right_4depth, hole_lx_down_4depth]));

		var hole_dx = T([0])([4.68])(SCALE([0])([-1])(hole_lx));

		/******************************************************************************************************/

		var hole_middle_f_I_front = BEZIER(S0)([[1.45, 4.33, 0], [1.99, 4.43, 0], [2.02, 4.13, 0], [1.99, 3.78, 0]]);
		var hole_middle_f_II_front = BEZIER(S0)([[1.6, 4.93, 0], [1.91, 4.82, 0], [2.17, 4.64, 0], [2.13, 3.8, 0]]);
		var hole_middle_first_front = MAP(BEZIER(S1)([hole_middle_f_I_front, hole_middle_f_II_front]))(domain);
		var hole_middle_s_I_front = BEZIER(S0)([[1.45, 4.33, 0], [1.36, 4.63, 0], [1.42, 4.81, 0], [1.6, 4.93, 0]]);
		var hole_middle_s_II_front = BEZIER(S0)([[1.45, 4.33, 0], [1.91, 4.52, 0], [1.79, 4.75, 0], [1.6, 4.93, 0]]);
		var hole_middle_second_front = MAP(BEZIER(S1)([hole_middle_s_I_front, hole_middle_s_II_front]))(domain);
		var hole_middle_t_I_front = BEZIER(S0)([[1.99, 3.78, 0], [2.02, 3.71, 0], [2.11, 3.72, 0], [2.13, 3.8, 0]]);
		var hole_middle_t_II_front = BEZIER(S0)([[1.99, 3.78, 0], [2.05, 3.97, 0], [2.06, 4.01, 0], [2.13, 3.8, 0]]);
		var hole_middle_third_front = MAP(BEZIER(S1)([hole_middle_t_I_front, hole_middle_t_II_front]))(domain);
		var hole_middle_front = STRUCT([hole_middle_first_front, hole_middle_second_front, hole_middle_third_front]);

		var hole_middle_back = T([2])([-0.1])(hole_middle_front);

		var hole_middle_I_4depth = BEZIER(S0)([[1.45, 4.33, -0.1], [1.99, 4.43, -0.1], [2.02, 4.13, -0.1], [1.99, 3.78, -0.1]]);
		var hole_middle_II_4depth = BEZIER(S0)([[1.6, 4.93, -0.1], [1.91, 4.82, -0.1], [2.17, 4.64, -0.1], [2.13, 3.8, -0.1]]);
		var hole_middle_III_4depth = BEZIER(S0)([[1.45, 4.33, -0.1], [1.36, 4.63, -0.1], [1.42, 4.81, -0.1], [1.6, 4.93, -0.1]]);
		var hole_middle_IV_4depth = BEZIER(S0)([[1.99, 3.78, -0.1], [2.02, 3.71, -0.1], [2.11, 3.72, -0.1], [2.13, 3.8, -0.1]]);
		var hole_middle_left_4depth = MAP(BEZIER(S1)([hole_middle_f_I_front, hole_middle_I_4depth]))(domain);
		var hole_middle_right_4depth = MAP(BEZIER(S1)([hole_middle_f_II_front, hole_middle_II_4depth]))(domain);
		var hole_middle_up_4depth = MAP(BEZIER(S1)([hole_middle_s_I_front, hole_middle_III_4depth]))(domain);
		var hole_middle_down_4depth = MAP(BEZIER(S1)([hole_middle_t_I_front, hole_middle_IV_4depth]))(domain);

		var hole_middle_lx = T([2])([0.2])(STRUCT([hole_middle_front, hole_middle_back, hole_middle_left_4depth, hole_middle_right_4depth, hole_middle_up_4depth, hole_middle_down_4depth]));

		var hole_middle_dx = T([0])([4.68])(SCALE([0])([-1])(hole_middle_lx));

		/******************************************************************************************************/

		var hole_middle_intd_f_I_front = BEZIER(S0)([[2.2, 3.81, 0], [2.24, 4.26, 0], [2.11, 4.69, 0], [1.95, 4.79, 0]]);
		var hole_middle_intd_f_II_front = BEZIER(S0)([[2.33, 3.81, 0], [2.32, 4.21, 0], [2.31, 4.63, 0], [2.3, 4.88, 0]]);
		var hole_middle_intd_first_front = MAP(BEZIER(S1)([hole_middle_intd_f_I_front, hole_middle_intd_f_II_front]))(domain);
		var hole_middle_intd_s_I_front = BEZIER(S0)([[1.95, 4.79, 0], [1.98, 5, 0], [2.17, 5.06, 0], [2.3, 4.88, 0]]);
		var hole_middle_intd_s_II_front = BEZIER(S0)([[1.95, 4.79, 0], [2.21, 4.58, 0], [2.19, 4.58, 0], [2.3, 4.88, 0]]);
		var hole_middle_intd_second_front = MAP(BEZIER(S1)([hole_middle_intd_s_I_front, hole_middle_intd_s_II_front]))(domain);
		var hole_middle_intd_t_I_front = BEZIER(S0)([[2.2, 3.81, 0], [2.24, 3.75, 0], [2.28, 3.75, 0], [2.33, 3.81, 0]]);
		var hole_middle_intd_t_II_front = BEZIER(S0)([[2.2, 3.81, 0], [2.25, 4.08, 0], [2.27, 4.08, 0], [2.33, 3.81, 0]]);
		var hole_middle_intd_third_front = MAP(BEZIER(S1)([hole_middle_intd_t_I_front, hole_middle_intd_t_II_front]))(domain);
		var hole_middle_intd_front = STRUCT([hole_middle_intd_first_front, hole_middle_intd_second_front, hole_middle_intd_third_front]);

		var hole_middle_intd_back = T([2])([-0.1])(hole_middle_intd_front);

		var hole_middle_intd_I_4depth = BEZIER(S0)([[2.2, 3.81, -0.1], [2.24, 4.26, -0.1], [2.11, 4.69, -0.1], [1.95, 4.79, -0.1]]);
		var hole_middle_intd_II_4depth = BEZIER(S0)([[2.33, 3.81, -0.1], [2.32, 4.21, -0.1], [2.31, 4.63, -0.1], [2.3, 4.88, -0.1]]);
		var hole_middle_intd_III_4depth = BEZIER(S0)([[1.95, 4.79, -0.1], [1.98, 5, -0.1], [2.17, 5.06, -0.1], [2.3, 4.88, -0.1]]);
		var hole_middle_intd_IV_4depth = BEZIER(S0)([[2.2, 3.81, -0.1], [2.24, 3.75, -0.1], [2.28, 3.75, -0.1], [2.33, 3.81, -0.1]]);
		var hole_middle_intd_left_4depth = MAP(BEZIER(S1)([hole_middle_intd_f_I_front, hole_middle_intd_I_4depth]))(domain);
		var hole_middle_intd_right_4depth = MAP(BEZIER(S1)([hole_middle_intd_f_II_front, hole_middle_intd_II_4depth]))(domain);
		var hole_middle_intd_up_4depth = MAP(BEZIER(S1)([hole_middle_intd_s_I_front, hole_middle_intd_III_4depth]))(domain);
		var hole_middle_intd_down_4depth = MAP(BEZIER(S1)([hole_middle_intd_t_I_front, hole_middle_intd_IV_4depth]))(domain);

		var hole_middle_intd_lx = T([2])([0.2])(STRUCT([hole_middle_intd_front, hole_middle_intd_back, hole_middle_intd_left_4depth, hole_middle_intd_right_4depth, hole_middle_intd_up_4depth, hole_middle_intd_down_4depth]));

		var hole_middle_intd_dx = T([0])([4.68])(SCALE([0])([-1])(hole_middle_intd_lx));

		/******************************************************************************************************/

		var hole_middle_intu_f_I_front = BEZIER(S0)([[1.88, 4.91, 0], [1.95, 5.05, 0], [2.11, 5.11, 0], [2.23, 5.07, 0]]);
		var hole_middle_intu_f_II_front = BEZIER(S0)([[1.71, 5.08, 0], [1.83, 5.24, 0], [2.01, 5.33, 0], [2.2, 5.32, 0]]);
		var hole_middle_intu_first_front = MAP(BEZIER(S1)([hole_middle_intu_f_I_front, hole_middle_intu_f_II_front]))(domain);
		var hole_middle_intu_s_I_front = BEZIER(S0)([[1.71, 5.08, 0], [1.71, 4.98, 0], [1.79, 4.92, 0], [1.88, 4.91, 0]]);
		var hole_middle_intu_s_II_front = BEZIER(S0)([[1.71, 5.08, 0], [1.87, 5.12, 0], [1.9, 5.11, 0], [1.88, 4.91, 0]]);
		var hole_middle_intu_second_front = MAP(BEZIER(S1)([hole_middle_intu_s_I_front, hole_middle_intu_s_II_front]))(domain);
		var hole_middle_intu_t_I_front = BEZIER(S0)([[2.2, 5.32, 0], [2.28, 5.27, 0], [2.29, 5.17, 0], [2.23, 5.07, 0]]);
		var hole_middle_intu_t_II_front = BEZIER(S0)([[2.2, 5.32, 0], [2.07, 5.2, 0], [2.08, 5.18, 0], [2.23, 5.07, 0]]);
		var hole_middle_intu_third_front = MAP(BEZIER(S1)([hole_middle_intu_t_I_front, hole_middle_intu_t_II_front]))(domain);
		var hole_middle_intu_front = STRUCT([hole_middle_intu_first_front, hole_middle_intu_second_front, hole_middle_intu_third_front]);

		var hole_middle_intu_back = T([2])([-0.1])(hole_middle_intu_front);

		var hole_middle_intu_I_4depth = BEZIER(S0)([[1.88, 4.91, -0.1], [1.95, 5.05, -0.1], [2.11, 5.11, -0.1], [2.23, 5.07, -0.1]]);
		var hole_middle_intu_II_4depth = BEZIER(S0)([[1.71, 5.08, -0.1], [1.83, 5.24, -0.1], [2.01, 5.33, -0.1], [2.2, 5.32, -0.1]]);
		var hole_middle_intu_III_4depth = BEZIER(S0)([[1.71, 5.08, -0.1], [1.71, 4.98, -0.1], [1.79, 4.92, -0.1], [1.88, 4.91, -0.1]]);
		var hole_middle_intu_IV_4depth = BEZIER(S0)([[2.2, 5.32, -0.1], [2.28, 5.27, -0.1], [2.29, 5.17, -0.1], [2.23, 5.07, -0.1]]);
		var hole_middle_intu_left_4depth = MAP(BEZIER(S1)([hole_middle_intu_f_I_front, hole_middle_intu_I_4depth]))(domain);
		var hole_middle_intu_right_4depth = MAP(BEZIER(S1)([hole_middle_intu_f_II_front, hole_middle_intu_II_4depth]))(domain);
		var hole_middle_intu_up_4depth = MAP(BEZIER(S1)([hole_middle_intu_s_I_front, hole_middle_intu_III_4depth]))(domain);
		var hole_middle_intu_down_4depth = MAP(BEZIER(S1)([hole_middle_intu_t_I_front, hole_middle_intu_IV_4depth]))(domain);

		var hole_middle_intu_lx = T([2])([0.2])(STRUCT([hole_middle_intu_front, hole_middle_intu_back, hole_middle_intu_left_4depth, hole_middle_intu_right_4depth, hole_middle_intu_up_4depth, hole_middle_intu_down_4depth]));

		var hole_middle_intu_dx = T([0])([4.68])(SCALE([0])([-1])(hole_middle_intu_lx));

		/******************************************************************************************************/

		var quadrant_down_I = BEZIER(S0)([[1.1, 1.6, 0], [1.1, 2.41, 0]]);
		var quadrant_down_II = BEZIER(S0)([[3.62, 1.6, 0], [3.62, 2.41, 0]]);
		var quadrant_down_front = MAP(BEZIER(S1)([quadrant_down_I, quadrant_down_II]))(domain);
		var quadrant_down_back = T([2])([-0.1])(quadrant_down_front);
		var quadrant_down_I_4depth = BEZIER(S0)([[1.1, 1.6, -0.1], [1.1, 2.41, -0.1]]);
		var quadrant_down_II_4depth = BEZIER(S0)([[3.62, 1.6, -0.1], [3.62, 2.41, -0.1]]);
		var quadrant_down_lx_4depth = MAP(BEZIER(S1)([quadrant_down_I, quadrant_down_I_4depth]))(domain);
		var quadrant_down_dx_4depth = MAP(BEZIER(S1)([quadrant_down_II, quadrant_down_II_4depth]))(domain);
		var quadrant_down_III = BEZIER(S0)([[1.1, 1.6, 0], [3.62, 1.6, 0]]);
		var quadrant_down_III_4depth = BEZIER(S0)([[1.1, 1.6, -0.1], [3.62, 1.6, -0.1]]);
		var quadrant_down_d_4depth = MAP(BEZIER(S1)([quadrant_down_III, quadrant_down_III_4depth]))(domain);
		var quadrant_down = STRUCT([quadrant_down_front, quadrant_down_back, quadrant_down_lx_4depth, quadrant_down_dx_4depth, quadrant_down_d_4depth]);

		var quadrant_middle_I = BEZIER(S0)([[1.1, 2.41, 0], [1.24, 2.61, 0], [1.27, 2.69, 0], [1.27, 2.89, 0]]);
		var quadrant_middle_II = BEZIER(S0)([[3.62, 2.41, 0], [3.53, 2.55, 0], [3.48, 2.72, 0], [3.45, 2.89, 0]]);
		var quadrant_middle_front = MAP(BEZIER(S1)([quadrant_middle_I, quadrant_middle_II]))(domain);
		var quadrant_middle_back = T([2])([-0.1])(quadrant_middle_front);
		var quadrant_middle_I_4depth = BEZIER(S0)([[1.1, 2.41, -0.1], [1.24, 2.61, -0.1], [1.27, 2.69, -0.1], [1.27, 2.89, -0.1]]);
		var quadrant_middle_II_4depth = BEZIER(S0)([[3.62, 2.41, -0.1], [3.53, 2.55, -0.1], [3.48, 2.72, -0.1], [3.45, 2.89, -0.1]]);
		var quadrant_middle_up_I = BEZIER(S0)([[1.27, 2.89, 0], [3.45, 2.89, 0]]);
		var quadrant_middle_up_II = BEZIER(S0)([[1.27, 2.89, -0.1], [3.45, 2.89, -0.1]]);
		var quadrant_middle_lx_4depth = MAP(BEZIER(S1)([quadrant_middle_I, quadrant_middle_I_4depth]))(domain);
		var quadrant_middle_dx_4depth = MAP(BEZIER(S1)([quadrant_middle_II, quadrant_middle_II_4depth]))(domain);
		var quadrant_middle_up_4depth = MAP(BEZIER(S1)([quadrant_middle_up_I, quadrant_middle_up_II]))(domain);
		var quadrant_middle = STRUCT([quadrant_middle_front, quadrant_middle_back, quadrant_middle_lx_4depth, quadrant_middle_dx_4depth, quadrant_middle_up_4depth]);

		var quadrant_up_I = BEZIER(S0)([[1.78, 2.89, 0], [2.05, 3.6, 0], [2.66, 3.6, 0], [2.94, 2.89, 0]]);
		var quadrant_up_II = BEZIER(S0)([[1.78, 2.89, 0], [2.94, 2.89, 0]]);
		var quadrant_up_front = MAP(BEZIER(S1)([quadrant_up_I, quadrant_up_II]))(domain);
		var quadrant_up_back = T([2])([-0.1])(quadrant_up_front);
		var quadrant_up_I_4depth = BEZIER(S0)([[1.78, 2.89, -0.1], [2.05, 3.6, -0.1], [2.66, 3.6, -0.1], [2.94, 2.89, -0.1]]);
		var quadrant_up_4depth = MAP(BEZIER(S1)([quadrant_up_I, quadrant_up_I_4depth]))(domain);
		var quadrant_up = STRUCT([quadrant_up_front, quadrant_up_back, quadrant_up_4depth]);

		var quadrant = T([2])([0.2])(STRUCT([quadrant_down, quadrant_middle, quadrant_up]));

		/******************************************************************************************************/

		var channel_I = BEZIER(S0)([[2.09, 2.78, 0], [2.23, 2.84, 0], [2.49, 2.84, 0], [2.63, 2.78, 0]]);
		var channel_II = BEZIER(S0)([[2.16, 2.47, 0], [2.56, 2.47, 0]]);
		var channel_front = MAP(BEZIER(S1)([channel_I, channel_II]))(domain);
		var channel_back = T([2])([-0.01])(channel_front);
		var channel_I_4depth = BEZIER(S0)([[2.09, 2.78, -0.01], [2.23, 2.84, -0.01], [2.49, 2.84, -0.01], [2.63, 2.78, -0.01]]);
		var channel_II_4depth = BEZIER(S0)([[2.16, 2.47, -0.01], [2.56, 2.47, -0.01]]);
		var channel_up = MAP(BEZIER(S1)([channel_I, channel_I_4depth]))(domain);
		var channel_down = MAP(BEZIER(S1)([channel_II, channel_II_4depth]))(domain);

		var channel_lx_I = BEZIER(S0)([[2.09, 2.78, 0], [2.16, 2.47, 0]]);
		var channel_lx_I_4depth = BEZIER(S0)([[2.09, 2.78, -0.01], [2.16, 2.47, -0.01]]);
		var channel_lx = MAP(BEZIER(S1)([channel_lx_I, channel_lx_I_4depth]))(domain);

		var channel_dx_I = BEZIER(S0)([[2.63, 2.78, 0], [2.56, 2.47, 0]]);
		var channel_dx_I_4depth = BEZIER(S0)([[2.63, 2.78, -0.01], [2.56, 2.47, -0.01]]);
		var channel_dx = MAP(BEZIER(S1)([channel_dx_I, channel_dx_I_4depth]))(domain);

		var channel = T([2])([0.1])(COLOR([0,0,0,1])(STRUCT([channel_front, channel_back, channel_up, channel_down, channel_lx, channel_dx])));

		/******************************************************************************************************/

		var disk_I = BEZIER(S0)([[1.44, 1.76, 0], [3.28, 1.76, 0]]);
		var disk_II = BEZIER(S0)([[1.44, 2.04, 0], [3.28, 2.04, 0]]);
		var disk_hole_front = MAP(BEZIER(S1)([disk_I, disk_II]))(domain);
		var disk_hole_back = T([2])([-0.01])(disk_hole_front);
		var disk_I_4depth = BEZIER(S0)([[1.44, 1.76, -0.01], [3.28, 1.76, -0.01]]);
		var disk_II_4depth = BEZIER(S0)([[1.44, 2.04, -0.01], [3.28, 2.04, -0.01]]);
		var disk_hole_down = MAP(BEZIER(S1)([disk_I, disk_I_4depth]))(domain);
		var disk_hole_up = MAP(BEZIER(S1)([disk_II, disk_II_4depth]))(domain);
		var disk_lx_I = BEZIER(S0)([[1.44, 1.76, 0], [1.44, 2.04, 0]]);
		var disk_lx_II = BEZIER(S0)([[1.44, 1.76, -0.01], [1.44, 2.04, -0.01]]);
		var disk_lx = MAP(BEZIER(S1)([disk_lx_I, disk_lx_II]))(domain);
		var disk_dx_I = BEZIER(S0)([[3.28, 1.76, 0], [3.28, 2.04, 0]]);
		var disk_dx_II = BEZIER(S0)([[3.28, 1.76, -0.01], [3.28, 2.04, -0.01]]);
		var disk_dx = MAP(BEZIER(S1)([disk_dx_I, disk_dx_II]))(domain);

		var disk_hole = COLOR([0,0,0,1])(STRUCT([disk_hole_front, disk_hole_back, disk_hole_up, disk_hole_down, disk_lx, disk_dx]));

		var cart = COLOR([0,0,0,1])(CUBOID([1.84, 0.1, 1]));
		var cover = T([2])([-0.1])(COLOR([0.33,0.33,0.33,1])(CUBOID([1.84, 0.28, 0.1])));
		var disk_partial = T([0,1,2])([1.44, 1.76, -0.01])(T([2])([-1])(STRUCT([cart, cover])));

		var disk = T([2])([0.1])(STRUCT([disk_hole, disk_partial]));

		/******************************************************************************************************/

		var volume_disk_lx = EXTRUDE([0.1])(DISK(0.1)());
		var volume_disk_dx = T([0])([1.5])(EXTRUDE([0.1])(DISK(0.1)()));

		var volume_disk = T([0,1])([1.6, 2.6])(COLOR([0.33,0.33,0.33,1])(STRUCT([volume_disk_lx, volume_disk_dx])));

		/******************************************************************************************************/

		var key_I = BEZIER(S0)([[1.25, 2.14, 0], [1.44, 2.14, 0]]);
		var key_II = BEZIER(S0)([[1.25, 2.22, 0], [1.44, 2.22, 0]]);
		var key_front = MAP(BEZIER(S1)([key_I, key_II]))(domain);
		var key_back = T([2])([-0.1])(key_front);
		var key_I_4depth = BEZIER(S0)([[1.25, 2.14, -0.1], [1.44, 2.14, -0.1]]);
		var key_II_4depth = BEZIER(S0)([[1.25, 2.22, -0.1], [1.44, 2.22, -0.1]]);
		var key_down = MAP(BEZIER(S1)([key_I, key_I_4depth]))(domain);
		var key_up = MAP(BEZIER(S1)([key_II, key_II_4depth]))(domain);
		var key_lx_I = BEZIER(S0)([[1.25, 2.14, 0], [1.25, 2.22, 0]]);
		var key_lx_II = BEZIER(S0)([[1.25, 2.14, -0.1], [1.25, 2.22, -0.1]]);
		var key_lx = MAP(BEZIER(S1)([key_lx_I, key_lx_II]))(domain);
		var key_dx_I = BEZIER(S0)([[1.44, 2.14, 0], [1.44, 2.22, 0]]);
		var key_dx_II = BEZIER(S0)([[1.44, 2.14, -0.1], [1.44, 2.22, -0.1]]);
		var key_dx = MAP(BEZIER(S1)([key_dx_I, key_dx_II]))(domain);

		var key_I = T([0])([0.19])(COLOR([0.33,0.33,0.33,1])(STRUCT([key_front,key_back,key_down,key_up,key_lx,key_dx])));
		var key_II = T([0])([0.29])(key_I);
		var key_III = T([0])([0.29])(key_II);
		var key_IV = T([0])([0.29])(key_III);
		var key_V = T([0])([0.29])(key_IV);
		var key_VI = T([0])([0.29])(key_V);

		var key_set_I = STRUCT([key_I, key_II, key_III]);
		var key_set_II = T([0])([0.2])(STRUCT([key_IV, key_V, key_VI]));
		var keys = T([2])([0.1])(STRUCT([key_set_I, key_set_II]));

		/******************************************************************************************************/

		var plain_up = T([0,1,2])([0.1, 0.2, 0.1])(CUBOID([3.9,0.1,4.2]));
		var plain_down = CUBOID([4.1,0.2,4.4]);
		var plain = COLOR([0.8, 0.4, 0.11, 1])(T([0,1])([0.25, 1.11])(STRUCT([plain_up, plain_down])));

		/******************************************************************************************************/

		var holes = COLOR([0.55, 0.27, 0.07, 1])(STRUCT([hole_lx, hole_dx, hole_middle_lx, hole_middle_dx, hole_middle_intd_lx, hole_middle_intd_dx, hole_middle_intu_lx, hole_middle_intu_dx]));
		var body = COLOR([0.8, 0.4, 0.11, 1])(T([2])([0.2])(STRUCT([front, back, box])));
		var model = STRUCT([body, plain, holes, quadrant, channel, disk, volume_disk, keys, speaker]);

		return model
  })();

  exports.author = 'fabio-cumbo';
  exports.category = 'others';
  exports.scmodel = scmodel;

  if (!module.parent) {
    fs.writeFile('C:\Users\Fabio\Desktop\showcase\data.json', JSON.stringify(scmodel.toJSON()));
  }

}(this));