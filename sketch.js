let sceneCounter = 1;
let backG;
let char;

let _s1 = true;
let _s2L, _s2R, _s3La, _s3Ra, _s3Lb, _s3Rb, _s4Ra, _s45La, _s4Rb, _s4Lb, _s4Rc, _s4Lc, _s4Rd, _s4Ld, _s5Ra, _s5Lb, _s5Rb, _s5Rc, _s5Lc, _s5Ld, _s5Rd, _s5Re, _s5Le, _s5Lf, _s5Rf, _s5Lg, _s5Rg, _s6La, _s6Ra, _s6Lb, _s6Rb, _s6Lc, _s6Rc, _s6Ld, _s6Rd, _s6Le, _s6Re, _s6Lf, _s6Rf, _s6Lg, _s6Rg, _s6Lh, _s6Rh, _s6Li, _s6Ri, _s6Lj, _s6Rj, _s6Lk, _s6Rk, _s6Ll, _s6Rl, _s6Lm, _s6Rm, _s6Ln, _s6Rn, _eSa, _eSb, _eSc, _eSd = false;

function setup() {
  createCanvas(600, 400);

  backG = new Background(91, 94, 95);
  char = new Char();
}

function draw() {
  background(220);

  backG.backG();

  if (_s1 == true) {
    char.stage1();
    s1();
    s2L();
    s2R();
  } else if (_s2L == true) {
    char.stage1();
    s3La();
    s3Ra();
  } else if (_s2R == true) {
    char.stage1();
    s3Lb();
    s3Rb();
  } else if (_s3La == true) {
    char.stage1();
    s45La();
    s4Ra();
  } else if (_s3Ra == true) {
    char.stage1();
    s4Lb();
    s4Rb();
  } else if (_s3Lb == true) {
    char.stage1();
    s4Lc();
    s4Rc();
  } else if (_s3Rb == true) {
    char.stage1();
    s4Ld();
    s4Rd();
  } else if (_s4Ra == true) {
    char.stage2();
    s45La();
    s5Ra();
  } else if (_s45La == true) {
    char.stage2();
    s6La();
    s6Ra();
  } else if (_s4Lb == true) {
    char.stage2();
    s5Lb();
    s5Rb();
  } else if (_s4Rb == true) {
    char.stage2();
    s5Lc();
    s5Rc();
  } else if (_s4Lc == true) {
    char.stage2();
    s5Ld();
    s5Rd();
  } else if (_s4Rc == true) {
    char.stage2();
    s5Le();
    s5Re();
  } else if (_s4Ld == true) {
    char.stage2();
    s5Lf();
    s5Rf();
  } else if (_s4Rd == true) {
    char.stage2();
    s5Lg();
    s5Rg();
  } else if (_s5Ra == true) {
    char.stage2();
    s6Lb();
    s6Rb();
  } else if (_s5Lb == true) {
    char.stage2();
    s6Lc();
    s6Rc();
  } else if (_s5Rb == true) {
    char.stage2();
    s6Ld();
    s6Rd();
  } else if (_s5Lc == true) {
    char.stage2();
    s6Le();
    s6Re();
  } else if (_s5Rc == true) {
    char.stage2();
    s6Lf();
    s6Rf();
  } else if (_s5Ld == true) {
    char.stage2();
    s6Lg();
    s6Rg();
  } else if (_s5Rd == true) {
    char.stage2();
    s6Lh();
    s6Rh();
  } else if (_s5Le == true) {
    char.stage2();
    s6Li();
    s6Ri();
  } else if (_s5Re == true) {
    char.stage2();
    s6Lj();
    s6Rj();
  } else if (_s5Lf == true) {
    char.stage2();
    s6Lk();
    s6Rk();
  } else if (_s5Rf == true) {
    char.stage2();
    s6Ll();
    s6Rl();
  } else if (_s5Lg == true) {
    char.stage2();
    s6Lm();
    s6Rm();
  } else if (_s5Rg == true) {
    char.stage2();
    s6Ln();
    s6Rn();
  } else if (_s6La == true) {
    char.stage3();
    cont();
  } else if (_s6Ra == true) {
    char.stage3();
    cont();
  } else if (_s6Lb == true) {
    char.stage3();
    cont();
  } else if (_s6Rb == true) {
    char.stage3();
    cont();
  } else if (_s6Lc == true) {
    char.stage3();
    cont();
  } else if (_s6Rc == true) {
    char.stage3();
    cont();
  } else if (_s6Ld == true) {
    char.stage3();
    cont();
  } else if (_s6Rd == true) {
    char.stage3();
    cont();
  } else if (_s6Le == true) {
    char.stage3();
    cont();
  } else if (_s6Re == true) {
    char.stage3();
    cont();
  } else if (_s6Lf == true) {
    char.stage3();
    cont();
  } else if (_s6Rf == true) {
    char.stage3();
    cont();
  } else if (_s6Lg == true) {
    char.stage3();
    cont();
  } else if (_s6Rg == true) {
    char.stage3();
    cont();
  } else if (_s6Lh == true) {
    char.stage3();
    cont();
  } else if (_s6Rh == true) {
    char.stage3();
    cont();
  } else if (_s6Li == true) {
    char.stage3();
    cont();
  } else if (_s6Ri == true) {
    char.stage3();
    cont();
  } else if (_s6Lj == true) {
    char.stage3();
    cont();
  } else if (_s6Rj == true) {
    char.stage3();
    cont();
  } else if (_s6Lk == true) {
    char.stage3();
    cont();
  } else if (_s6Rk == true) {
    char.stage3();
    cont();
  } else if (_s6Ll == true) {
    char.stage3();
    cont();
  } else if (_s6Rl == true) {
    char.stage3();
    cont();
  } else if (_s6Lm == true) {
    char.stage3();
    cont();
  } else if (_s6Rm == true) {
    char.stage3();
    cont();
  } else if (_s6Ln == true) {
    char.stage3();
    cont();
  } else if (_s6Rn == true) {
    char.stage3();
    cont();
  } else if (_eSa == true) {
    eSa();
  } else if (_eSb == true) {
    eSb();
  } else if (_eSc == true) {
    eSc();
  } else if (_eSd == true) {
    eSd();
  }


}


function keyPressed() {
  if (sceneCounter == 1) {
    //scene 1 - 2
    if (keyCode == LEFT_ARROW) {
      _s2L = true;
      _s1 = false;
      sceneCounter = 2;
    } else if (keyCode == RIGHT_ARROW) {
      _s2R = true;
      _s1 = false;
      sceneCounter = 3;
    }
    //scene 2 - 3a
  } else if (sceneCounter == 2) {
    if (keyCode == LEFT_ARROW) {
      _s3La = true;
      _s2L = false;
      sceneCounter = 4; //s3La
    } else if (keyCode == RIGHT_ARROW) {
      _s3Ra = true;
      _s2L = false;
      sceneCounter = 5; //s3Ra
    } //scene 2 - 3b
  } else if (sceneCounter == 3) {
    if (keyCode == LEFT_ARROW) {
      _s3Lb = true;
      _s2R = false;
      sceneCounter = 6; //s3Lb
    } else if (keyCode == RIGHT_ARROW) {
      _s3Rb = true;
      _s2R = false;
      sceneCounter = 7; //s3Rb
    } //scene 3La - 45La and 4a
  } else if (sceneCounter == 4) {
    if (keyCode == LEFT_ARROW) {
      _s45La = true;
      _s3La = false;
      sceneCounter = 8; //s45La
    } else if (keyCode == RIGHT_ARROW) {
      _s4Ra = true;
      _s3La = false;
      sceneCounter = 9; //s4Ra
    } //3Ra - 4b
  } else if (sceneCounter == 5) {
    if (keyCode == LEFT_ARROW) {
      _s4Lb = true;
      _s3Ra = false;
      sceneCounter = 10; //s4Lb
    } else if (keyCode == RIGHT_ARROW) {
      _s4Rb = true;
      _s3Ra = false;
      sceneCounter = 11; //s4Rb
    }
    //scene 3Lb - 4c
  } else if (sceneCounter == 6) {
    if (keyCode == LEFT_ARROW) {
      _s4Lc = true;
      _s3Lb = false;
      sceneCounter = 12; //s4Lc
    } else if (keyCode == RIGHT_ARROW) {
      _s4Rc = true;
      _s3Lb = false;
      sceneCounter = 13; //s4Rc
    }
  } //scene 3rb - 4d
  else if (sceneCounter == 7) {
    if (keyCode == LEFT_ARROW) {
      _s4Ld = true;
      _s3Rb = false;
      sceneCounter = 14; //s4Ld
    } else if (keyCode == RIGHT_ARROW) {
      _s4Rd = true;
      _s3Rb = false;
      sceneCounter = 15; //s4Rd
    }
  } //scene 45La - 6a
  else if (sceneCounter == 8) {
    if (keyCode == LEFT_ARROW) {
      _s6La = true;
      _s45La = false;
      sceneCounter = 16; //s6La
    } else if (keyCode == RIGHT_ARROW) {
      _s6Ra = true;
      _s45La = false;
      sceneCounter = 17; //s6Ra
    }
  } //scene 4Ra - 4/5a
  else if (sceneCounter == 9) {
    if (keyCode == LEFT_ARROW) {
      _s45La = true;
      _s4Ra = false;
      sceneCounter = 8; //s45La
    } else if (keyCode == RIGHT_ARROW) {
      _s5Ra = true;
      _s4Ra = false;
      sceneCounter = 18; //s5Ra
    }
  } //scene 4Lb - 5b
  else if (sceneCounter == 10) {
    if (keyCode == LEFT_ARROW) {
      _s5Lb = true;
      _s4Lb = false;
      sceneCounter = 19; //s5Lb
    } else if (keyCode == RIGHT_ARROW) {
      _s5Rb = true;
      _s4Lb = false;
      sceneCounter = 20; //s5Rb
    }
  } //scene 4Rb - 5c
  else if (sceneCounter == 11) {
    if (keyCode == LEFT_ARROW) {
      _s5Lc = true;
      _s4Rb = false;
      sceneCounter = 21; //s5Lc
    } else if (keyCode == RIGHT_ARROW) {
      _s5Rc = true;
      _s4Rb = false;
      sceneCounter = 22; //s5Rc
    }
  } //scene 4Lc - 5d
  else if (sceneCounter == 12) {
    if (keyCode == LEFT_ARROW) {
      _s5Ld = true;
      _s4Lc = false;
      sceneCounter = 23; //s5Ld
    } else if (keyCode == RIGHT_ARROW) {
      _s5Rd = true;
      _s4Lc = false;
      sceneCounter = 24; //s5Rd
    }
  } //scene 4Rc - 5e
  else if (sceneCounter == 13) {
    if (keyCode == LEFT_ARROW) {
      _s5Le = true;
      _s4Rc = false;
      sceneCounter = 25; //s5Le
    } else if (keyCode == RIGHT_ARROW) {
      _s5Re = true;
      _s4Rc = false;
      sceneCounter = 26; //s5Re
    }
  } //scene  4Ld - 5f
  else if (sceneCounter == 14) {
    if (keyCode == LEFT_ARROW) {
      _s5Lf = true;
      _s4Ld = false;
      sceneCounter = 27; //s5Lf
    } else if (keyCode == RIGHT_ARROW) {
      _s5Rf = true;
      _s4Ld = false;
      sceneCounter = 28; //s5Rf
    }
  } //scene 4Rd - 5g
  else if (sceneCounter == 15) {
    if (keyCode == LEFT_ARROW) {
      _s5Lg = true;
      _s4Rd = false;
      sceneCounter = 29; //s5Lg
    } else if (keyCode == RIGHT_ARROW) {
      _s5Rg = true;
      _s4Rd = false;
      sceneCounter = 30; //s5Rg
    }
  } //scene 6La - eSc
  else if (sceneCounter == 16) {
    if (keyCode == ENTER) {
      _eSc = true;
      _s6La = false;
      sceneCounter = 31; //eSc
    }
  } //scene 6Ra - eSa
  else if (sceneCounter == 17) {
    if (keyCode == ENTER) {
      _eSa = true;
      _s6Ra = false;
      sceneCounter = 32; //eSa
    }
  } //scene 5Ra - 6b
  else if (sceneCounter == 18) {
    if (keyCode == LEFT_ARROW) {
      _s6Lb = true;
      _s5Ra = false;
      sceneCounter = 33; //s6Lb
    } else if (keyCode == RIGHT_ARROW) {
      _s6Rb = true;
      _s5Ra = false;
      sceneCounter = 34; //s6Rb
    }
  } //scene 5Lb - 6c
  else if (sceneCounter == 19) {
    if (keyCode == LEFT_ARROW) {
      _s6Lc = true;
      _s5Lb = false;
      sceneCounter = 35; //s6Lc
    } else if (keyCode == RIGHT_ARROW) {
      _s6Rc = true;
      _s5Lb = false;
      sceneCounter = 36; //s6Rc
    }
  } //scene 5Rb - 6d
  else if (sceneCounter == 20) {
    if (keyCode == LEFT_ARROW) {
      _s6Ld = true;
      _s5Rb = false;
      sceneCounter = 37; //s6Ld
    } else if (keyCode == RIGHT_ARROW) {
      _s6Rd = true;
      _s5Rb = false;
      sceneCounter = 38; //s6Rd
    }
  } //scene 5Lc - 6e
  else if (sceneCounter == 21) {
    if (keyCode == LEFT_ARROW) {
      _s6Le = true;
      _s5Lc = false;
      sceneCounter = 39; //s6Le
    } else if (keyCode == RIGHT_ARROW) {
      _s6Re = true;
      _s5Lc = false;
      sceneCounter = 40; //s6Re
    }
  } //scene 5Rc - 6f
  else if (sceneCounter == 22) {
    if (keyCode == LEFT_ARROW) {
      _s6Lf = true;
      _s5Rc = false;
      sceneCounter = 41; //s6Lf
    } else if (keyCode == RIGHT_ARROW) {
      _s6Rf = true;
      _s5Rc = false;
      sceneCounter = 42; //s6Rf
    }
  } //scene 5Ld - 6g
  else if (sceneCounter == 23) {
    if (keyCode == LEFT_ARROW) {
      _s6Lg = true;
      _s5Ld = false;
      sceneCounter = 43; //s6Lg
    } else if (keyCode == RIGHT_ARROW) {
      _s6Rg = true;
      _s5Ld = false;
      sceneCounter = 44; //s6Rg
    }
  } // scene 5Rd - 6h
  else if (sceneCounter == 24) {
    if (keyCode == LEFT_ARROW) {
      _s6Lh = true;
      _s5Rd = false;
      sceneCounter = 45; //s6Lh
    } else if (keyCode == RIGHT_ARROW) {
      _s6Rh = true;
      _s5Rd = false;
      sceneCounter = 46; //s6Rh
    }
  } //scene 5Le - 6i
  else if (sceneCounter == 25) {
    if (keyCode == LEFT_ARROW) {
      _s6Li = true;
      _s5Le = false;
      sceneCounter = 47; //s6Li
    } else if (keyCode == RIGHT_ARROW) {
      _s6Ri = true;
      _s5Le = false;
      sceneCounter = 48; //s6Ri
    }
  } //scene 5Re - 6j
  else if (sceneCounter == 26) {
    if (keyCode == LEFT_ARROW) {
      _s6Lj = true;
      _s5Re = false;
      sceneCounter = 49; //s6Lj
    } else if (keyCode == RIGHT_ARROW) {
      _s6Rj = true;
      _s5Re = false;
      sceneCounter = 50; //s6Rj
    }
  } //scene 5Lf - 6k
  else if (sceneCounter == 27) {
    if (keyCode == LEFT_ARROW) {
      _s6Lk = true;
      _s5Lf = false;
      sceneCounter = 51; //s6Lk
    } else if (keyCode == RIGHT_ARROW) {
      _s6Rk = true;
      _s5Lf = false;
      sceneCounter = 52; //s6Rk
    }
  } //scene 5Rf - 6l
  else if (sceneCounter == 28) {
    if (keyCode == LEFT_ARROW) {
      _s6Ll = true;
      _s5Rf = false;
      sceneCounter = 53; //s6Ll
    } else if (keyCode == RIGHT_ARROW) {
      _s6Rl = true;
      _s5Rf = false;
      sceneCounter = 54; //s6Rl
    }
  } //scene 5Lg - 6m
  else if (sceneCounter == 29) {
    if (keyCode == LEFT_ARROW) {
      _s6Lm = true;
      _s5Lg = false;
      sceneCounter = 55; //s6Lm
    } else if (keyCode == RIGHT_ARROW) {
      _s6Rm = true;
      _s5Lg = false;
      sceneCounter = 56; //s6Rm
    }
  } //scene 5Rg - 6n
  else if (sceneCounter == 30) {
    if (keyCode == LEFT_ARROW) {
      _s6Ln = true;
      _s5Rg = false;
      sceneCounter = 57; //s6Ln
    } else if (keyCode == RIGHT_ARROW) {
      _s6Rn = true;
      _s5Rg = false;
      sceneCounter = 58; //s6Rn
    } //end scene - play again
  } else if (sceneCounter == 31) {
    if (keyCode == ENTER) {
      _s1 = true;
      _eSc = false;
      sceneCounter = 1;
    } //end scene - play again
  } else if (sceneCounter == 32) {
    if (keyCode == ENTER) {
      _s1 = true;
      _eSa = false;
      sceneCounter = 1;
    }
  }
  else if (sceneCounter == 33) {
    if (keyCode == ENTER) {
      _eSa = true;
      _s6Lb = false;
      sceneCounter = 32;
    }
  }
  else if (sceneCounter == 34) {
    if (keyCode == ENTER) {
      _eSc = true;
      _s6Rb = false;
      sceneCounter = 31;
    }
  }
   else if (sceneCounter == 35) {
    if (keyCode == ENTER) {
      _eSa = true;
      _s6Lc = false;
      sceneCounter = 32;
    }
  }
  else if (sceneCounter == 36) {
    if (keyCode == ENTER) {
      _eSa = true;
      _s6Rc = false;
      sceneCounter = 32;
    }
  }
  else if (sceneCounter == 37) {
    if (keyCode == ENTER) {
      _eSa = true;
      _s6Ld = false;
      sceneCounter = 32;
    }
  }
  else if (sceneCounter == 38) {
    if (keyCode == ENTER) {
      _eSc = true;
      _s6Rd = false;
      sceneCounter = 31;
    }
  }
  else if (sceneCounter == 39) {
    if (keyCode == ENTER) {
      _eSd = true;
      _s6Le = false;
      sceneCounter = 59;
    }
  }
  else if (sceneCounter == 40) {
    if (keyCode == ENTER) {
      _eSa = true;
      _s6Re = false;
      sceneCounter = 32;
    }
  }
  else if (sceneCounter == 41) {
    if (keyCode == ENTER) {
      _eSa = true;
      _s6Lf = false;
      sceneCounter = 32;
    }
  }
  else if (sceneCounter == 42) {
    if (keyCode == ENTER) {
      _eSc = true;
      _s6Rf = false;
      sceneCounter = 31;
    }
  }
  else if (sceneCounter == 43) {
    if (keyCode == ENTER) {
      _eSa = true;
      _s6Lg = false;
      sceneCounter = 32;
    }
  }
  else if (sceneCounter == 44) {
    if (keyCode == ENTER) {
      _eSd = true;
      _s6Rg = false;
      sceneCounter = 59;
    }
  }
  else if (sceneCounter == 45) {
    if (keyCode == ENTER) {
      _eSa = true;
      _s6Lh = false;
      sceneCounter = 32;
    }
  }
  else if (sceneCounter == 46) {
    if (keyCode == ENTER) {
      _eSc = true;
      _s6Rh = false;
      sceneCounter = 31;
    }
  }
  else if (sceneCounter == 47) {
    if (keyCode == ENTER) {
      _eSd = true;
      _s6Li = false;
      sceneCounter = 59;
    }
  }
  else if (sceneCounter == 48) {
    if (keyCode == ENTER) {
      _eSa = true;
      _s6Ri = false;
      sceneCounter = 32;
    }
  }
  else if (sceneCounter == 49) {
    if (keyCode == ENTER) {
      _eSa = true;
      _s6Lj = false;
      sceneCounter = 32;
    }
  }
  else if (sceneCounter == 50) {
    if (keyCode == ENTER) {
      _eSb = true;
      _s6Rj = false;
      sceneCounter = 60;
    }
  }
else if (sceneCounter == 51) {
    if (keyCode == ENTER) {
      _eSa = true;
      _s6Lk = false;
      sceneCounter = 32;
    }
  }
  else if (sceneCounter == 52) {
    if (keyCode == ENTER) {
      _eSa = true;
      _s6Rk = false;
      sceneCounter = 32;
    }
  }
  else if (sceneCounter == 53) {
    if (keyCode == ENTER) {
      _eSb = true;
      _s6Ll = false;
      sceneCounter = 60;
    }
  }
  else if (sceneCounter == 54) {
    if (keyCode == ENTER) {
      _eSc = true;
      _s6Rl = false;
      sceneCounter = 31;
    }
  }
  else if (sceneCounter == 55) {
    if (keyCode == ENTER) {
      _eSc = true;
      _s6Lm = false;
      sceneCounter = 31;
    }
  }
  else if (sceneCounter == 56) {
    if (keyCode == ENTER) {
      _eSa = true;
      _s6Rm = false;
      sceneCounter = 32;
    }
  }
   else if (sceneCounter == 57) {
    if (keyCode == ENTER) {
      _eSc = true;
      _s6Ln = false;
      sceneCounter = 31;
    }
  }
   else if (sceneCounter == 58) {
    if (keyCode == ENTER) {
      _eSc = true;
      _s6Rn = false;
      sceneCounter = 31;
    }
  }
  else if (sceneCounter == 59) {
    if (keyCode == ENTER) {
      _s1 = true;
      _eSd = false;
      sceneCounter = 1;
    }
  }
  else if (sceneCounter == 60) {
    if (keyCode == ENTER) {
      _s1 = true;
      _eSb = false;
      sceneCounter = 1;
    }
  }
  
  
}

//scene 1
function s1() {
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(30);
  text('You are young', width/2, 320, 240, 70);
  textSize(15);
  text('Use the left and right arrow keys to choose your path', width/2, 360, 240, 70);
}

//scene 2
function s2L() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Run away from home", width / 4, 55, 240, 70);
}

function s2R() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Get into trouble", width / 4 * 3, 55, 240, 70);
}

//scene 3
function s3La() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Get arrested", width / 4, 55, 240, 70);
}

function s3Ra() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Live with a friend", width / 4 * 3, 55, 240, 70);
}

function s3Lb() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Sneak out", width / 4, 55, 240, 70);
}

function s3Rb() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Get grounded", width / 4 * 3, 55, 240, 70);
}


//scene 4
function s45La() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Escape", width / 4, 55, 240, 70);
}

function s4Ra() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Go to juvie", width / 4 * 3, 55, 240, 70);
}

function s4Lb() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Get into a car accident", width / 4, 55, 240, 70);
}

function s4Rb() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Become a child laborer", width / 4 * 3, 55, 240, 70);
}

function s4Lc() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Drop out of school", width / 4, 55, 240, 70);
}

function s4Rc() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Become addicted to drugs", width / 4 * 3, 55, 240, 70);
}

function s4Ld() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Become depressed", width / 4, 55, 240, 70);
}

function s4Rd() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Become addicted to video games", width / 4 * 3, 55, 240, 70);
}


//scene 5
function s5Ra() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Live out your sentence", width / 4 * 3, 55, 240, 70);
}

function s5Lb() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Go home", width / 4, 55, 240, 70);
}

function s5Rb() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Take out a loan. Undergo expensive surgery", width / 4 * 3, 55, 240, 70);
}

function s5Lc() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Get promoted. Become the exploiting manager", width / 4, 55, 240, 70);
}

function s5Rc() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Factory closes. You lose your job", width / 4 * 3, 55, 240, 70);
}

function s5Ld() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Work as a sceptic tank cleaner", width / 4, 55, 240, 70);
}

function s5Rd() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Get your ex pregnant", width / 4 * 3, 55, 240, 70);
}

function s5Le() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Become a drug dealer", width / 4, 55, 240, 70);
}

function s5Re() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Go to rehab", width / 4 * 3, 55, 240, 70);
}

function s5Lf() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Take addictive medicine", width / 4, 55, 240, 70);
}

function s5Rf() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Go to therapy", width / 4 * 3, 55, 240, 70);
}

function s5Lg() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Move back to your parents' basement", width / 4, 55, 240, 70);
}

function s5Rg() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Become a streamer", width / 4 * 3, 55, 240, 70);
}

//scne 6
function s6La() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Flee the country", width / 4, 55, 240, 70);
}

function s6Ra() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Parents refuse to take you in", width / 4 * 3, 55, 240, 70);
}

function s6Lb() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("No one visits you", width / 4, 55, 240, 70);
}

function s6Rb() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("You've been framed", width / 4 * 3, 55, 240, 70);
}

function s6Lc() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Your parents take care of you", width / 4, 55, 240, 70);
}

function s6Rc() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Parents get a divorce because of you", width / 4 * 3, 55, 240, 70);
}

function s6Ld() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Sell an organ to pay the loan", width / 4, 55, 240, 70);
}

function s6Rd() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Go bankrupt", width / 4 * 3, 55, 240, 70);
}

function s6Le() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Your employees revolt", width / 4, 55, 240, 70);
}

function s6Re() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("The FBI arrests you", width / 4 * 3, 55, 240, 70);
}

function s6Lf() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Move back with your parents", width / 4, 55, 240, 70);
}

function s6Rf() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Live on the streets", width / 4 * 3, 55, 240, 70);
}

function s6Lg() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("You are promoted to head cleaner", width / 4, 55, 240, 70);
}

function s6Rg() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("You develope a terminal disease", width / 4 * 3, 55, 240, 70);
}

function s6Lh() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Your kid hates you", width / 4, 55, 240, 70);
}

function s6Rh() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Your ex leaves you and your kid", width / 4 * 3, 55, 240, 70);
}

function s6Li() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("You get killed", width / 4, 55, 240, 70);
}

function s6Ri() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("You get arrested", width / 4 * 3, 55, 240, 70);
}

function s6Lj() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("You fail the program", width / 4, 55, 240, 70);
}

function s6Rj() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Hookup with another patient", width / 4 * 3, 55, 240, 70);
}

function s6Lk() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Parents kick you out", width / 4, 55, 240, 70);
}

function s6Rk() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Go to rehab", width / 4 * 3, 55, 240, 70);
}

function s6Ll() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Hookup with your therapist", width / 4, 55, 240, 70);
}

function s6Rl() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Take addictive medicine", width / 4 * 3, 55, 240, 70);
}

function s6Lm() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Take care of your parents", width / 4, 55, 240, 70);
}

function s6Rm() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Parents kick you out", width / 4 * 3, 55, 240, 70);
}

function s6Ln() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Move back in with your parents", width / 4, 55, 240, 70);
}

function s6Rn() {
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("You have zero viewers", width / 4 * 3, 55, 240, 70);
}

//end scene
function eSa() {
  fill(0);
  rect(width/2, height/2, 600, 400);
noStroke();
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("No one cares. You die alone", width/2, height/2, 240, 70);
   textSize(10);
  text("Hit ENTER to play again", width/2, height/2 + 170, 240, 70);
}

function eSb() {
  fill(0);
  rect(width/2, height/2, 600, 400);
noStroke();
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("You get married and live out a full life", width/2, height/2, 240, 70);
   textSize(10);
  text("Hit ENTER to play again", width/2, height/2 + 170, 240, 70);
}

function eSc() {
  fill(0);
  rect(width/2, height/2, 600, 400);
  noStroke();
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("You struggle to make ends meet all your life. You die broke", width/2, height/2, 240, 70);
   textSize(10);
  text("Hit ENTER to play again", width/2, height/2 + 170, 240, 70);
}

function eSd() {
  fill(0);
  rect(width/2, height/2, 600, 400);
noStroke();
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("You're dead with no achievements", width/2, height/2, 240, 70);
  textSize(10);
  text("Hit ENTER to play again", width/2, height/2 + 170, 240, 70);
}

function cont() {
  noStroke();
  fill(255);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Hit ENTER to see how you die", width/2, 340, 240, 70);
}


//background 
class Background {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  backG() {
    rectMode(CENTER);
    strokeWeight(1);
    //walls
    stroke(1);
    fill(242, 242, 242);
    rect(width / 2, height / 2 - 55, width + 5, 291);
    //floor
    noStroke();
    fill(230, 228, 216);
    rect(width / 2, 348, width, 115);


    //doors
    stroke(1);
    fill(this.r, this.g, this.b);
    //left
    rect(width / 4, 200, 120, 180);
    ellipse(width / 4 + 50, 200, 10, 10);
    //right
    rect(width / 4 * 3, 200, 120, 180);
    ellipse(width / 4 * 3 + 50, 200, 10, 10);

    //textbox
    strokeWeight(6);
    stroke(250, 250, 210);
    fill(240, 230, 140);
    //left
    rect(width / 4, 55, 240, 70);
    //right
    rect(width / 4 * 3, 55, 240, 70);
  }

}


//character
class Char {
  constructor() {
  }
  
  stage1() {
    noStroke();
    fill(255,168,131);
    rect(width/2, height/2 - 5, 60, 40, 5);
    fill(255);
    ellipse(width/2 - 15, height/2 - 10, 15, 15);
    ellipse(width/2 + 15, height/2 - 10, 15, 15);
    strokeWeight(2);
    stroke(1);
    noFill();
    rect(width/2 - 16, height/2 - 10, 28, 20);
    rect(width/2 + 16, height/2 - 10, 28, 20);
    fill(0);
    triangle(width/2 - 5, height/2-25, width/2, height/2 - 40, width/2+5, height/2 - 25);
    noStroke();
    fill(78,105,162);
    rect(width/2, height/2 + 30, 15, 30, 10);
  }
  
  stage2() {
    noStroke();
    fill(163,107,83);
    rect(width/2, height/2 - 5, 60, 40, 5);
    fill(255);
    ellipse(width/2 - 15, height/2 - 10, 15, 15);
    ellipse(width/2 + 15, height/2 - 10, 15, 15);
    fill(0);
    rect(width/2, height/2-25,60, 10, 20);
    fill(44,101,82);
    rect(width/2, height/2 + 40, 35, 50, 10);
    fill(78,105,162);
    rect(width/2, height/2 + 32, 10, 35, 5);

  }
  
  stage3() {
    noStroke();
    fill(255,168,131);
    rect(width/2, height/2 - 5, 60, 40, 5);
    fill(255);
    ellipse(width/2 - 15, height/2 - 10, 15, 15);
    ellipse(width/2 + 15, height/2 - 10, 15, 15);
    fill(255);
    rect(width/2, height/2-25,60, 3, 20);
    noStroke();
    fill(78,105,162);
    rect(width/2, height/2 + 40, 20, 50, 10);
  }
}