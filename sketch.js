// declaring a variable
// star1
let x_position1 = 400
let x_direction1 = 'right'
let speed1 = 3
let diameter1 = 40
let y_direction1 = 'down'
let y_position1 = 80
let angle = 0

//star2
let x_position2 = 345
let x_direction2 = 'right'
let speed2 = 2
let diameter2 = 45
let y_direction2 = 'down'
let y_position2 = 25

//star3
let x_position3 = 208
let x_direction3 = 'right'
let speed3 = 4
let diameter3 = 30
let y_direction3 = 'down'
let y_position3 = 27

//star4
let x_position4 = 159
let x_direction4 = 'right'
let speed4 = 4
let diameter4 = 35
let y_direction4 = 'down'
let y_position4 = 15

//star5
let x_position5 = 148
let x_direction5 = 'right'
let speed5 = 3
let diameter5 = 40
let y_direction5 = 'down'
let y_position5 = 68

//star6
let x_position6 = 35
let x_direction6 = 'right'
let speed6 = 3
let diameter6 = 45
let y_direction6 = 'down'
let y_position6 = 19

//star7
let x_position7 = 169
let x_direction7 = 'right'
let speed7 = 4
let diameter7 = 25
let y_direction7 = 'down'
let y_position7 = 146

//star8
let x_position8 = 209
let x_direction8 = 'right'
let speed8 = 5
let diameter8 = 70
let y_direction8 = 'down'
let y_position8 = 237

//star9
let x_position9 = 65
let x_direction9 = 'right'
let speed9 = 2
let diameter9 = 40
let y_direction9 = 'down'
let y_position9 = 180

//star10
let x_position10 = 11
let x_direction10 = 'right'
let speed10 = 5
let diameter10 = 30
let y_direction10 = 'down'
let y_position10 = 165

function setup() {
	createCanvas(650, 450)
	
	angleMode(DEGREES)
}

function draw() {
//starrynight background
fill(0,0,139)
rect(0, 0, 650, 450)

//big moon
noStroke()
fill(249, 227, 87, 200)
ellipse(563, 80, 180, 180)

noStroke()
fill(255, 215, 0)
ellipse(563, 80, 150, 150)

noStroke()
fill(255, 165, 0)
ellipse(563, 80, 100, 100,)

noStroke()
fill(255, 215, 0)
ellipse (580, 80, 70, 70)


// grassy hills
fill(34, 139, 34)
stroke(0, 100, 0)
strokeWeight(5)
beginShape()
	vertex(0, 434)
	vertex(0, 355)
	vertex(25, 361)
	vertex(56, 358)
	vertex(80, 357)
	vertex(268, 350)
	vertex(311, 343)
	vertex(355, 330)
	vertex(415, 328)
	vertex(482, 339)
	vertex(535, 339)
	vertex(598, 326)
	vertex(650, 323)
	vertex(650, 433)
endShape()	

fill(0, 100, 0)
beginShape()
	vertex(0, 434)
	vertex(36, 399)
	vertex(65, 395)
	vertex(80, 395)
	vertex(83, 416)
	vertex(89, 433)
endShape()	

//house
stroke(112, 93, 30)
fill(112, 93, 30)
strokeWeight(2)
beginShape()
	vertex(359, 398)
	vertex(359, 371)
	vertex(393, 371)
	vertex(393, 399)
endShape()	

//roof house
fill(70, 58, 19)
beginShape()
	vertex(345, 371)
	vertex(377, 350)
 	vertex(402, 371)
endShape()

// house replicated
push()
translate(50, 10)
stroke(112, 93, 30)
fill(112, 93, 30)
strokeWeight(2)
beginShape()
	vertex(359, 398)
	vertex(359, 371)
	vertex(393, 371)
	vertex(393, 399)
endShape()	

fill(70, 58, 19)
beginShape()
	vertex(345, 371)
	vertex(377, 350)
 	vertex(402, 371)
endShape()
pop()

// house replicated
push()
translate(100, 20)
stroke(112, 93, 30)
fill(112, 93, 30)
strokeWeight(2)
beginShape()
	vertex(359, 398)
	vertex(359, 371)
	vertex(393, 371)
	vertex(393, 399)
endShape()	

fill(70, 58, 19)
beginShape()
	vertex(345, 371)
	vertex(377, 350)
 	vertex(402, 371)
endShape()
pop()




fill(107, 142, 35)
noStroke()
beginShape()
	vertex(276, 434)
	vertex(288, 410)
	vertex(306, 391)
	vertex(347, 387)
	vertex(376, 399)
	vertex(395, 413)
	vertex(419, 419)
	vertex(440, 433)
endShape()



noStroke()



noFill()
// bottom shape
beginShape()
	curveVertex(0, 337)
	curveVertex(0, 337)
	curveVertex(46, 343)
	curveVertex(97, 328)
	curveVertex(125, 335)
	curveVertex(191, 341)
	curveVertex(209, 330)
	curveVertex(233, 318)
	curveVertex(258, 316)
	curveVertex(270, 321)
	curveVertex(272, 327)
	curveVertex(287, 321)
	curveVertex(340, 292)
	curveVertex(359, 286)
	curveVertex(383, 284)
	curveVertex(384, 285)
	curveVertex(426, 308)
	curveVertex(426, 308)

	curveVertex(426, 308)
	curveVertex(442, 304)
	curveVertex(463, 301)
	curveVertex(485, 299)
	curveVertex(499, 299)
	curveVertex(516, 300)
	curveVertex(533, 304)
	curveVertex(548, 293)
	curveVertex(572, 276)
	curveVertex(598, 267)
	curveVertex(633, 265)
	curveVertex(653, 266)
	curveVertex(653, 266)
endShape()



//swirls in blue sky swirl
fill(135, 206, 250)
beginShape()
	curveVertex(9, 95)
	curveVertex(23, 100)

endShape()

// swirly in sky
noFill()
fill(173,216,230)
beginShape()
	curveVertex(0, 172)
	curveVertex(0, 172)
	curveVertex(0, 80)
	curveVertex(13, 86)
	curveVertex(28, 94)
	curveVertex(49, 106)
	curveVertex(68, 112)
	curveVertex(88, 112)
	curveVertex(107, 113)
	curveVertex(136, 107)
	curveVertex(159, 97)
	curveVertex(182, 83)
	curveVertex(201, 68)
	curveVertex(224, 55)
	curveVertex(256, 47)
	curveVertex(291, 47)
	curveVertex(318, 52)
	curveVertex(335, 64)
	curveVertex(350, 80)
	curveVertex(357, 99)
	curveVertex(358, 118)
	curveVertex(353, 139)
	curveVertex(345, 154)
	curveVertex(327, 162)
	curveVertex(300, 162)
	curveVertex(282, 153)
	curveVertex(267, 142)
	curveVertex(251, 131)
	curveVertex(232, 124)
	curveVertex(212, 125)
	curveVertex(191, 131)
	curveVertex(161, 141)
	curveVertex(142, 149)
	curveVertex(94, 160)
	curveVertex(71, 161)
	curveVertex(42, 156)
	curveVertex(17, 152)
	curveVertex(0, 151)
	curveVertex(0, 151)
endShape()

beginShape()
	curveVertex(277, 154)
	curveVertex(277, 154)
	curveVertex(263, 145)
	curveVertex(249, 135)
	curveVertex(232, 130)
	curveVertex(215, 130)
	curveVertex(199, 133)
	curveVertex(187, 139)
	curveVertex(181, 149)
	curveVertex(179, 163)
	curveVertex(183, 175)
	curveVertex(193, 189)
	curveVertex(200, 202)
	curveVertex(209, 211)
	curveVertex(216, 219)
	curveVertex(232, 226)
	curveVertex(258, 227)
	curveVertex(286, 223)
	curveVertex(312, 215)
	curveVertex(332, 205)
	curveVertex(351, 189)
	curveVertex(367, 177)
	curveVertex(386, 164)
	curveVertex(406, 157)
	curveVertex(423, 153)
	curveVertex(439, 152)
	curveVertex(448, 155)
	curveVertex(453, 160)
	curveVertex(457, 165)
	curveVertex(460, 173)
	curveVertex(460, 175)
	curveVertex(457, 183)
	curveVertex(446, 187)
	curveVertex(432, 184)
	curveVertex(422, 178)
	curveVertex(412, 179)
	curveVertex(407, 183)
	curveVertex(410, 190)
	curveVertex(421, 195)
	curveVertex(441, 201)
	curveVertex(461, 198)
	curveVertex(474, 189)
	curveVertex(483, 175)
	curveVertex(486, 150)
	curveVertex(476, 132)
	curveVertex(458, 122)
	curveVertex(436, 117)
	curveVertex(414, 118)
	curveVertex(393, 124)
	curveVertex(373, 134)
	curveVertex(357, 144)
	curveVertex(348, 153)
	curveVertex(339, 160)
	curveVertex(324, 164)
	curveVertex(309, 163)
	curveVertex(301, 163)
	curveVertex(284, 157)
	curveVertex(277, 154)
	curveVertex(277, 154)
endShape()


//swirls in blue sky swirl
fill(135, 206, 250)
beginShape()
	vertex(9, 95)
	vertex(24, 105)
	vertex(39, 112)
	vertex(49, 112)
endShape()

beginShape()
	vertex(33, 144)
	vertex(55, 141)
	vertex(68, 142)
	vertex(71, 144)
	vertex(77, 143)
	vertex(79, 140)
	vertex(89, 137)
	vertex(96, 138)
	vertex(98, 141)
	vertex(95, 144)
	vertex(89, 145)
	vertex(78, 147)
	vertex(64, 147)
endShape()

beginShape()
	vertex(152, 116)
	vertex(168, 104)
	vertex(182, 97)
	vertex(189, 95)
	vertex(198, 92)
	vertex(206, 94)
	vertex(198, 96)
	vertex(186, 99)
endShape()

beginShape()
	vertex(264, 129)
	vertex(277, 140)
	vertex(287, 149)
	vertex(293, 150)
	vertex(297, 151)
	vertex(299, 154)
	vertex()
	vertex()

endShape()


// green bush
fill(85,107,47)
beginShape()
	curveVertex(104, 450)
	curveVertex(104, 450)
	curveVertex(88, 430)
	curveVertex(84, 416)
	curveVertex(79, 398)
	curveVertex(78, 373)
	curveVertex(84, 342)
	curveVertex(94, 328)
	curveVertex(96, 312)
	curveVertex(84, 269)
	curveVertex(82, 241)
	curveVertex(87, 210)
	curveVertex(87, 184)
	curveVertex(80, 152)
	curveVertex(82, 137)
	curveVertex(82, 150)
	curveVertex(88, 165)
	curveVertex(92, 175)
	curveVertex(92, 175)
	curveVertex(101, 157)
	curveVertex(102, 138)
	curveVertex(104, 125)
	curveVertex(106, 130)
	curveVertex(106, 134)
	curveVertex(108, 137)
	curveVertex(113, 125)
	curveVertex(113, 108)
	curveVertex(107, 92)
	curveVertex(100, 79)
	curveVertex(96, 60)
	curveVertex(96, 39)
	curveVertex(98, 22)
	curveVertex(100, 11)
	curveVertex(97, 1)
	curveVertex(102, 8)
	curveVertex(102, 12)
	curveVertex(100, 24)
	curveVertex(99, 36)
	curveVertex(102, 48)
	curveVertex(106, 65)
	curveVertex(119, 81)
	curveVertex(128, 95)
	curveVertex(133, 120)
	curveVertex(133, 157)
	curveVertex(132, 177)
	curveVertex(137, 164)
	curveVertex(139, 151)
	curveVertex(141, 139)
	curveVertex(142, 147)
	curveVertex(142, 154)
	curveVertex(141, 162)
	curveVertex(138, 171)
	curveVertex(137, 179)
	curveVertex(140, 196)
	curveVertex(144, 215)
	curveVertex(147, 235)
	curveVertex(150, 259)
	curveVertex(150, 276)
	curveVertex(154, 266)
	curveVertex(155, 251)
	curveVertex(158, 238)
	curveVertex(162, 225)
	curveVertex(167, 219)
	curveVertex(164, 227)
	curveVertex(163, 237)
	curveVertex(163, 245)
	curveVertex(161, 261)
	curveVertex(160, 276)
	curveVertex(158, 286)
	curveVertex(163, 293)
	curveVertex(173, 307)
	curveVertex(184, 320)
	curveVertex(190, 332)

	curveVertex(193, 340)
	curveVertex(190, 318)
	curveVertex(183, 305)
	curveVertex(178, 292)
	curveVertex(175, 274)
	curveVertex(176, 254)
	curveVertex(184, 235)
	curveVertex(190, 218)
	curveVertex(192, 203)
	curveVertex(194, 216)
	curveVertex(194, 226)
	curveVertex(193, 239)
	curveVertex(195, 254)
	curveVertex(203, 271)
	curveVertex(215, 290)
	curveVertex(226, 306)
	curveVertex(228, 319)
	curveVertex(230, 338)
	curveVertex(236, 354)
	curveVertex(240, 368)
	

	curveVertex(241, 385)
	curveVertex(245, 366)
	curveVertex(244, 351)
	curveVertex(247, 329)
	curveVertex(250, 319)
	curveVertex(251, 326)
	curveVertex(250, 335)
	curveVertex(252, 347)
	curveVertex(260, 361)
	curveVertex(268, 377)
	curveVertex(272, 397)
	curveVertex(269, 416)
	curveVertex(265, 450)
	curveVertex(265, 450)
endShape()

// light blue streak above hills
noFill()
fill(176,196,222)
beginShape()
	curveVertex(0, 337)
	curveVertex(0, 337)
	curveVertex(0, 279)
	curveVertex(0, 279)
	curveVertex(15, 268)
	curveVertex(38, 256)
	curveVertex(59, 257)
	curveVertex(70, 268)
	curveVertex(80, 280)
	curveVertex(87, 283)
	curveVertex(91, 298)
	curveVertex(94, 306)
	curveVertex(96, 316)
	curveVertex(97, 317)
	curveVertex(95, 324)
	curveVertex(93, 329)
	curveVertex(81, 332)
	curveVertex(70, 337)
	curveVertex(50, 341)
	curveVertex(36, 342)
	curveVertex(35, 342)
	curveVertex(35, 342)
endShape()

	
beginShape()
	curveVertex(233, 318)
	curveVertex(233, 318)
	curveVertex(258, 316)
	curveVertex(270, 321)
	curveVertex(272, 327)
	curveVertex(287, 321)
	curveVertex(340, 292)
	curveVertex(359, 286)
	curveVertex(383, 284)
	curveVertex(384, 285)
	curveVertex(426, 308)
	curveVertex(426, 308)

	curveVertex(426, 308)
	curveVertex(442, 304)
	curveVertex(463, 301)
	curveVertex(485, 299)
	curveVertex(499, 299)
	curveVertex(516, 300)
	curveVertex(533, 304)
	curveVertex(548, 293)
	curveVertex(572, 276)
	curveVertex(598, 267)
	curveVertex(633, 265)
	curveVertex(650, 266)
	curveVertex(650, 266)
	
	curveVertex(650, 182)
	curveVertex(609, 178)
	curveVertex(577, 179)
	curveVertex(556, 184)
	curveVertex(532, 188)
	curveVertex(503, 186)
	curveVertex(488, 188)
	curveVertex(478, 195)
	curveVertex(459, 212)
	curveVertex(437, 230)
	curveVertex(412, 248)
	curveVertex(393, 254)
	curveVertex(365, 254)
	curveVertex(334, 255)
	curveVertex(308, 260)
	curveVertex(262, 265)
	curveVertex(223, 267)
	curveVertex(202, 271)
	curveVertex(226, 307)
	curveVertex(227, 319)
	curveVertex(227, 319)
endShape()

// star 1
noStroke()
fill(250, 236, 145, 200)
ellipse(x_position1, y_position1, 40, 40)

noStroke()
fill(255, 215,0)
ellipse(x_position1, y_position1, 20, 20)

// star 2
noStroke()
fill(255, 165, 0, 200)
ellipse(x_position2, y_position2, 45, 45)

noStroke()
fill(255, 215, 0)
ellipse(x_position2, y_position2, 25, 25)


// star 3
noStroke()
fill(250, 236, 145, 200)
ellipse(x_position3, y_position3, 30, 30)

noStroke()
fill(255, 165, 0)
ellipse(x_position3, y_position3, 15, 15)

noStroke()
fill(255, 127, 80)
ellipse(x_position3, y_position3, 5, 5)

//star 4
noStroke()
fill(255, 165, 0, 200)
ellipse(x_position4, y_position4, 35, 35)

noStroke()
fill(255, 215, 0)
ellipse(x_position4, y_position4, 10, 10)

// star 5
noStroke()
fill(250, 235, 161, 200)
ellipse (x_position5, y_position5, 40, 40)

noStroke()
fill(252, 227, 102, 250)
ellipse (x_position5, y_position5, 30, 30)

noStroke()
fill(246, 186, 46)
ellipse(x_position5, y_position5, 5, 5)

// star 6
noStroke()
fill(247, 239, 187, 200)
ellipse(x_position6, y_position6, 45, 45)

noStroke()
fill(246, 228, 111)
ellipse (x_position6, y_position6, 25, 25)

noStroke()
fill(255, 160, 122)
ellipse (x_position6, y_position6, 7, 7)

//star 7
noStroke()
fill(247, 239, 187, 170)
ellipse(x_position7, y_position7, 25, 25)

noStroke()
fill(247, 210, 87)
ellipse(x_position7, y_position7, 15, 15)

noStroke()
fill(255, 160, 122)
ellipse(x_position7, y_position7, 10, 10)

//star 8
noStroke()
fill(250, 250, 210, 210)
ellipse(x_position8, y_position8, 70, 70)

noStroke()
fill(255, 215, 0)
ellipse (x_position8, y_position8, 20, 20)

noStroke()
fill(250, 128, 114)
ellipse(x_position8, y_position8, 10, 10)

//star 9
noStroke()
fill(250, 236, 145, 200)
ellipse(x_position9, y_position9, 40, 40)

noStroke()
fill(255, 215,0)
ellipse(x_position9, y_position9, 20, 20)

noStroke()
fill(255, 160, 122)
ellipse (x_position9, y_position9, 7, 7)

//star 10
noStroke()
fill(250, 236, 145, 200)
ellipse(x_position10, y_position10, 30, 30)

noStroke()
fill(255, 165, 0)
ellipse(x_position10, y_position10, 15, 15)






// refreshes canvas after every draw so it doesnt fill entire canvas
	//background?

	
	// line(x_position1, 0, x_position1, height)
	//ellipse(x_position1, y_position1, diameter1, diameter1)
	strokeWeight(2)
	stroke(0)
	
	
//star1

// draws a line contiually across the screen, one after another. sets the variable with a single =
	strokeWeight(10)
	noStroke()

	if (x_direction1 == 'right') {
		x_position1 = x_position1 + speed1
	

	}

	if (x_direction1 == 'left'){
		x_position1 = x_position1 - speed1

	}	

	// right wall
	if (x_position1 >= width + diameter1) {
		x_position1 = -diameter1
		//x_direction2 = 'left'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}
	// left wall
	if (x_position1 <= 0 - diameter1/2) {
		x_direction1 = 'right'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}


	//if (y_direction1 == 'up') {
		//y_position1 = y_position1 - speed1
	// or 	x_position1 += speed

	//}

	//if (y_direction1 == 'down') {
		//y_position1 = y_position1 + speed1
	// or 	x_position1 += speed
 	//}
	//bottom wall
	// if (y_position1 >= height - diameter1/2) {
	// 	y_direction1 = 'up'
	// 	fill(random(0, 255), random(0, 255), random(0, 255))
	// }
	// // top wall
	// if (y_position1 <= 0 + diameter1/2) {
	// 	y_direction1 = 'down'
	// 	fill(random(0, 255), random(0, 255), random(0, 255))
	// }



// star 2

	strokeWeight(10)
	noStroke()
	
	//ellipse(x_position2, y_position2, diameter2, diameter2)


	if (x_direction2 == 'right') {
		x_position2 = x_position2 + speed2
	

	}

	if (x_direction2 == 'left'){
		x_position2 = x_position2 - speed2

	}	



	// right wall
	if (x_position2 >= width + diameter2) {
		x_position2 = -diameter2
		//x_direction2 = 'left'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}
	// left wall
	if (x_position2 <= 0 - diameter2/2) {
		x_direction2 = 'right'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}


	// if (y_direction2 == 'up') {
	// 	y_position2 = y_position2 - speed2


	// }
	// if (y_direction2 == 'down') {
	// 	y_position2 = y_position2 + speed2}

	//bottom wall
	// if (y_position2 >= height - diameter2/2) {
	// 	y_direction2 = 'up'
	// 	fill(random(0, 255), random(0, 255), random(0, 255))
	// }
	// //top wall
	// if (y_position2 <= 0 + diameter2/2) {
	// 	y_direction2 = 'down'
	// 	fill(random(0, 255), random(0, 255), random(0, 255)) 
	// }

//star3

	strokeWeight(10)
	noStroke()

	if (x_direction3 == 'right') {
		x_position3 = x_position3 + speed3
	

	}

	if (x_direction3 == 'left'){
		x_position3 = x_position3 - speed3

	}	

	// right wall
	if (x_position3 >= width + diameter3) {
		x_position3 = -diameter3
		//x_direction2 = 'left'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}
	// left wall
	if (x_position3 <= 0 - diameter3/2) {
		x_direction3 = 'right'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}

//star4
	strokeWeight(10)
	noStroke()

	if (x_direction4 == 'right') {
		x_position4 = x_position4 + speed4
	

	}

	if (x_direction4 == 'left'){
		x_position4 = x_position4 - speed4

	}	

	// right wall
	if (x_position4 >= width + diameter4) {
		x_position4 = -diameter4
		//x_direction2 = 'left'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}
	// left wall
	if (x_position4 <= 0 - diameter4/2) {
		x_direction4 = 'right'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}


//star5
	strokeWeight(10)
	noStroke()

	if (x_direction5 == 'right') {
		x_position5 = x_position5 + speed5
	

	}

	if (x_direction5 == 'left'){
		x_position5 = x_position5 - speed5

	}	

	// right wall
	if (x_position5 >= width + diameter5) {
		x_position5 = -diameter5
		//x_direction2 = 'left'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}
	// left wall
	if (x_position5 <= 0 - diameter5/2) {
		x_direction5 = 'right'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}


//star6
	strokeWeight(10)
	noStroke()

	if (x_direction6 == 'right') {
		x_position6 = x_position6 + speed6
	

	}

	if (x_direction6 == 'left'){
		x_position6 = x_position6 - speed6

	}	

	// right wall
	if (x_position6 >= width + diameter6) {
		x_position6 = -diameter6
		//x_direction2 = 'left'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}
	// left wall
	if (x_position6 <= 0 - diameter6/2) {
		x_direction6 = 'right'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}

//star7
	strokeWeight(10)
	noStroke()

	if (x_direction7 == 'right') {
		x_position7 = x_position7 + speed7
	

	}

	if (x_direction7 == 'left'){
		x_position7 = x_position7 - speed7

	}	

	// right wall
	if (x_position7 >= width + diameter7) {
		x_position7 = -diameter7
		//x_direction2 = 'left'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}
	// left wall
	if (x_position7 <= 0 - diameter7/2) {
		x_direction7 = 'right'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}

//star8
	strokeWeight(10)
	noStroke()

	if (x_direction8 == 'right') {
		x_position8 = x_position8 + speed8
	

	}

	if (x_direction8 == 'left'){
		x_position8 = x_position8 - speed8

	}	

	// right wall
	if (x_position8 >= width + diameter8) {
		x_position8 = -diameter8
		//x_direction2 = 'left'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}
	// left wall
	if (x_position8 <= 0 - diameter8/2) {
		x_direction8 = 'right'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}
//star9
	strokeWeight(10)
	noStroke()

	if (x_direction9 == 'right') {
		x_position9 = x_position9 + speed9
	

	}

	if (x_direction9 == 'left'){
		x_position9 = x_position9 - speed9

	}	

	// right wall
	if (x_position9 >= width + diameter9) {
		x_position9 = -diameter9
		//x_direction2 = 'left'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}
	// left wall
	if (x_position9 <= 0 - diameter9/2) {
		x_direction9 = 'right'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}


//star10
	strokeWeight(10)
	noStroke()

	if (x_direction10 == 'right') {
		x_position10 = x_position10 + speed10
	

	}

	if (x_direction10 == 'left'){
		x_position10 = x_position10 - speed10

	}	

	// right wall
	if (x_position10 >= width + diameter10) {
		x_position10 = -diameter10
		//x_direction2 = 'left'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}
	// left wall
	if (x_position10 <= 0 - diameter10/2) {
		x_direction10 = 'left'
		//fill(random(0, 255), random(0, 255), random(0, 255))
	}

//border lines
	push()
	noFill()
	strokeWeight(1)
	stroke(0)
	rect(0, 0, width, height)
	pop()

}



function mouseClicked() {
	print(int(mouseX), int(mouseY))

}







// height and width variable automatically make something the size of the orginal canvas