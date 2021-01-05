 
import {TWEEN} from './build/tween.module.min.js'

var camera, scene, renderer;
var palmo, pollice, indice, medio, anulare, mignolo;
var po2, in2, me2, an2, mi2;
var po3, in3, me3, an3, mi3;
var textureP, textureF, textureN, textureS;
var N, S;
var root;
var po2X, meX, anX, miX, paPOS;
var paY = 1.6;
var paZ = -1.5;
var paX = 1.5;
var tween, tweenB, tweenC, tweenD, tweenE, tweenF;
var rotI, rotIB, rotIC, rotID, rotIE; 
var rotF, rotFB, rotFC, rotFD, rotFE;
var angle, x, y, z, r;
var Name, Surname;
var flag;
var p;
var t = 1;
var american;
var anim = true;

function fun(p){
    if (flag == false){
        if ((p) == N){
            alphabet('change');
        } else {
            alphabet(Name[p], p);
        }
    }
    else {
        if ((p) == S){
            anim = true;
        } else{
        alphabet(Surname[p], p); 
        }              
    } 
}

function alphabet(letter, pos) {

    switch(letter){

        case 'change':

            tween = new TWEEN.Tween({x:0}).to({x:0}, 1000);
            tween.onComplete(function(){
                readSurname();
            });
            tween.start();

        break;

        case "a":
        case "A":
        case "à":

            soundA.setVolume(vol);
            soundA.play();
            
            rotI = {x: indice.rotation.y, y: in2.rotation.y};
            rotF = {x:-1.4, y:-2.2};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                indice.rotation.y = rotI.x;
                medio.rotation.y = rotI.x;
                anulare.rotation.y = rotI.x;
                mignolo.rotation.y = rotI.x;
                in2.rotation.y = rotI.y;
                me2.rotation.y = rotI.y;
                an2.rotation.y = rotI.y;
                mi2.rotation.y = rotI.y;              
            });
            tween.onComplete(function(){
                soundA.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();
        break;

        case "b":
        case "B":
            
            soundB.setVolume(vol);
            soundB.play();

            if (american){
                paY = 0;
            }

            rotI = {x: palmo.rotation.y, y: pollice.rotation.y, z: po2.rotation.x, 
                w: po2.rotation.y, j: po2.rotation.z, k: po3.rotation.y
            };
            rotF = {x:paY, y:-1, z:2.3, w:-0.9, j:0.9, k:-0.6};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                palmo.rotation.y = rotI.x;
                pollice.rotation.y = rotI.y;
                po2.rotation.x = rotI.z;
                po2.rotation.y = rotI.w;  
                po2.rotation.z = rotI.j;
                po3.rotation.y = rotI.k;
            });
            tween.onComplete(function(){
                soundB.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();

        break;

        case "c":
        case "C":
            
            soundC.setVolume(vol);
            soundC.play();

            rotI = {x:palmo.rotation.y, y:pollice.rotation.y, z:po2.rotation.x,
                w:po3.rotation.x, j:indice.rotation.y, k:in2.rotation.y,
                h:in3.rotation.y, q:mi3.rotation.y
            };
            rotF = {x:1.6, y:-1.5, z:0.3, w:0.5, j:-0.2, k:-1, h:-0.7, q:-0.5};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                palmo.rotation.y = rotI.x;
                pollice.rotation.y = rotI.y;
                po2.rotation.x = rotI.z;
                po3.rotation.x = rotI.w;   
                indice.rotation.y = rotI.j;
                in2.rotation.y = rotI.k;
                in3.rotation.y = rotI.h;
                medio.rotation.y = rotI.j;
                me2.rotation.y = rotI.k;
                me3.rotation.y = rotI.h;
                anulare.rotation.y = rotI.j;
                an2.rotation.y = rotI.k;
                an3.rotation.y = rotI.h;
                mignolo.rotation.y = rotI.j;
                mi2.rotation.y = rotI.k;
                mi3.rotation.y = rotI.q;
            });
            tween.onComplete(function(){
                soundC.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();

        break;

        case "d":
        case "D":
            
            soundD.setVolume(vol);
            soundD.play();

            if (american){
                paY = 0;
            }

            rotI = {x:palmo.rotation.y, y:pollice.rotation.y, z:po2.rotation.x,
                w:po2.rotation.y, j:po3.rotation.x, k:po3.rotation.y,
                h:medio.rotation.y, q:me2.rotation.y, e: mi2.rotation.y,
                t:me3.rotation.y, u:mi3.rotation.y
            };
            rotF = {x:paY, y:-1.6, z:0.3, w:-0.2, j:0.3, k:-0.3, h:-1, q:-1.4, e:-1.2, t:-0.4, u:-0.3};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                palmo.rotation.y = rotI.x;
                pollice.rotation.y = rotI.y;
                po2.rotation.x = rotI.z;
                po2.rotation.y = rotI.w;
                po3.rotation.x = rotI.j;
                po3.rotation.y = rotI.k;
                medio.rotation.y = rotI.h;
                me2.rotation.y = rotI.q;
                me3.rotation.y = rotI.t;
                anulare.rotation.y = rotI.h;
                an2.rotation.y = rotI.q;
                an3.rotation.y = rotI.t;
                mignolo.rotation.y = rotI.h;
                mi2.rotation.y = rotI.e;
                mi3.rotation.y = rotI.u;
            });
            tween.onComplete(function(){
                soundD.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();
            
        break;

        case "e":
        case "E":
        case "é":
        case "è":
            
            soundE.setVolume(vol);
            soundE.play();

            rotI = {x: pollice.rotation.y, y: po2.rotation.x, z: po2.rotation.y, 
                w: po2.rotation.z, j: po3.rotation.y, k: indice.rotation.y,
                h: in2.rotation.y, q: in3.rotation.y
            };
            rotF = {x:-1, y:2.3, z:-0.9, w:0.9, j:-0.6, k:-0.3, h:-2, q:-1};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                pollice.rotation.y = rotI.x;
                po2.rotation.x = rotI.y;
                po2.rotation.y = rotI.z;
                po2.rotation.z = rotI.w;  
                po3.rotation.y = rotI.j; 
                indice.rotation.y = rotI.k;       
                medio.rotation.y = rotI.k;   
                anulare.rotation.y = rotI.k;   
                mignolo.rotation.y = rotI.k; 
                in2.rotation.y = rotI.h;     
                me2.rotation.y = rotI.h;  
                an2.rotation.y = rotI.h;  
                mi2.rotation.y = rotI.h;  
                in3.rotation.y = rotI.q;
                me3.rotation.y = rotI.q;
                an3.rotation.y = rotI.q;
                mi3.rotation.y = rotI.q;
            });
            tween.onComplete(function(){
                soundE.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();
            
        break;

        case "f":
        case "F":

            soundF.setVolume(vol);
            soundF.play();

            if (american){
                paY = 0;
                meX = 1.5;
                anX = meX + 0.1;
                miX = anX + 0.1;
            }
            rotI = {x: palmo.rotation.y, y: pollice.rotation.y, z: po2.rotation.x,
                w: po2.rotation.y, j: po3.rotation.x, k: in2.rotation.y, 
                h: in3.rotation.y, q: medio.rotation.x, e: anulare.rotation.x,
                t: mignolo.rotation.x
            };
            rotF = {x:paY, y:-1.5, z:1, w:-0.1, j:0.3, k:-1.9, h:-0.3, q:meX, e:anX, t:miX};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                palmo.rotation.y = rotI.x;
                pollice.rotation.y = rotI.y;
                po2.rotation.x = rotI.z;
                po2.rotation.y = rotI.w;
                po3.rotation.x = rotI.j;   
                in2.rotation.y = rotI.k;
                in3.rotation.y = rotI.h;
                medio.rotation.x = rotI.q;
                anulare.rotation.x = rotI.e;
                mignolo.rotation.x = rotI.t;
            });
            tween.onComplete(function(){
                soundF.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();
            
        break;

        case "g":
        case "G":
            
            soundG.setVolume(vol);
            soundG.play();

            if(american){
                paPOS = 50;
                rotI = {x: pollice.rotation.y, y: palmo.position.z, z: palmo.rotation.x,
                    w: palmo.rotation.z, k: medio.rotation.y, h: me2.rotation.y, 
                    q: me3.rotation.y, e: mi3.rotation.y
                };
                rotF = {x:-1.6, y:paPOS, z:1.6, w:-3.0, k:-1.5, h:-2.1, q:-0.2, e:-0.1};
                tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
                tween.onUpdate(function(){
                    pollice.rotation.y = rotI.x;
                    palmo.position.z = rotI.y;
                    palmo.rotation.x = rotI.z;
                    palmo.rotation.z = rotI.w; 
                    medio.rotation.y = rotI.k;
                    anulare.rotation.y = rotI.k;
                    mignolo.rotation.y = rotI.k;
                    me2.rotation.y = rotI.h;
                    an2.rotation.y = rotI.h;
                    mi2.rotation.y = rotI.h;
                    me3.rotation.y = rotI.q;
                    an3.rotation.y = rotI.q;
                    mi3.rotation.y = rotI.e;
                }); 
                tween.onComplete(function(){
                    soundG.stop();
                    p = pos+1;
                    fun(p);
                });
                tween.repeat(1).yoyo(true).repeatDelay(t*1000);
                tween.start();

            } else {

                paPOS = -50;
            
                rotI = {x: pollice.rotation.y, y: po2.rotation.x, z: po2.rotation.y,
                    w: po3.rotation.x, j: po3.rotation.y, k: medio.rotation.y,
                    h: me2.rotation.y, q: me3.rotation.y, e: mi3.rotation.y
                };
                rotF = {x:-1.4, y:0.7, z:-0.6, w:0.1, j:-0.2, k:-1.5, h:-2.1, q:-0.2, e:-0.1};
                tween = new TWEEN.Tween(rotI).to(rotF, t*600);
                tween.onUpdate(function(){
                    pollice.rotation.y = rotI.x;
                    po2.rotation.x = rotI.y;
                    po2.rotation.y = rotI.z;
                    po3.rotation.x = rotI.w; 
                    po3.rotation.y = rotI.j;
                    medio.rotation.y = rotI.k;
                    anulare.rotation.y = rotI.k;
                    mignolo.rotation.y = rotI.k;
                    me2.rotation.y = rotI.h;
                    an2.rotation.y = rotI.h;
                    mi2.rotation.y = rotI.h;
                    me3.rotation.y = rotI.q;
                    an3.rotation.y = rotI.q;
                    mi3.rotation.y = rotI.e;
                });
                
                rotIB = {x: palmo.rotation.x, y: palmo.rotation.z, z: palmo.position.z};
                rotFB = {x:1.5, y:-0.6, z:paPOS};
                tweenB = new TWEEN.Tween(rotIB).to(rotFB, t*800);
                tweenB.onUpdate(function(){
                    palmo.position.z = rotIB.z;
                    palmo.rotation.x = rotIB.x;
                    palmo.rotation.z = rotIB.y;
                });
                tweenB.repeat(1).yoyo(true).repeatDelay(t*200); 

                rotIC = {x: pollice.rotation.y, y: po2.rotation.x, z: po2.rotation.y,
                    w: po3.rotation.x, j: po3.rotation.y, k: medio.rotation.y,
                    h: me2.rotation.y, q: me3.rotation.y, e: mi3.rotation.y
                };
                rotFC = {x:0, y:po2X, z:0, w:0, j:0, k:0, h:0, q:0, e:0};
                tweenC = new TWEEN.Tween(rotFC).to(rotIC, t*800);
                tweenC.onUpdate(function(){
                    pollice.rotation.y = rotIC.x;
                    po2.rotation.x = rotIC.y;
                    po2.rotation.y = rotIC.z;
                    po3.rotation.x = rotIC.w; 
                    po3.rotation.y = rotIC.j;
                    medio.rotation.y = rotIC.k;
                    anulare.rotation.y = rotIC.k;
                    mignolo.rotation.y = rotIC.k;
                    me2.rotation.y = rotIC.h;
                    an2.rotation.y = rotIC.h;
                    mi2.rotation.y = rotIC.h;
                    me3.rotation.y = rotIC.q;
                    an3.rotation.y = rotIC.q;
                    mi3.rotation.y = rotIC.e;
                });

                tweenD = new TWEEN.Tween({x:0}).to({x:0}, 10);
                tweenD.onUpdate(function(){
                    soundG.stop();
                    p = pos+1;
                    fun(p);
                });

                tween.chain(tweenB);
                tweenB.chain(tweenC); 
                tweenC.chain(tweenD);           
                tween.start(); 
            }           

        break;

        case "h":
        case "H":
            
            soundH.setVolume(vol);
            soundH.play();

            if(american){
                paPOS = 50;
                paX = 1.6;
                paZ = -3.0;
            } else {
                paPOS = -50;
                paZ = -0.6;
            }
            
            rotI = {x: pollice.rotation.y, y: po2.rotation.x, z: po2.rotation.y,
                w: anulare.rotation.y, j: an2.rotation.y, k: an3.rotation.y,
                h: mi3.rotation.y, q: palmo.position.z, e: palmo.rotation.x,
                t: palmo.rotation.z
            };
            rotF = {x:-1.6, y:0.9, z:-0.8, w:-1.5, j:-2.1, k:-0.2, h:-0.1, q:paPOS, e:paX, t:paZ};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                palmo.position.z = rotI.q;
                palmo.rotation.x = rotI.e;
                palmo.rotation.z = rotI.t;
                pollice.rotation.y = rotI.x;
                po2.rotation.x = rotI.y;
                po2.rotation.y = rotI.z;                       
                anulare.rotation.y = rotI.w;
                an2.rotation.y = rotI.j;
                an3.rotation.y = rotI.k;
                mignolo.rotation.y = rotI.w;
                mi2.rotation.y = rotI.j;
                mi3.rotation.y = rotI.h;
            });
            tween.onComplete(function(){
                soundH.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();

        break;

        case "i":
        case "I":
        case "ì":
            
            soundI.setVolume(vol);
            soundI.play();

            rotI = {x: pollice.rotation.y, y: po2.rotation.x, z: po2.rotation.y,
                w: po3.rotation.x, j: indice.rotation.y, k: in2.rotation.y
            };
            rotF = {x:-0.5, y:1.2, z:-1, w:0.3, j:-1.4, k:-2.2};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                pollice.rotation.y = rotI.x;
                po2.rotation.x = rotI.y;
                po2.rotation.y = rotI.z;
                po3.rotation.x = rotI.w; 
                indice.rotation.y = rotI.j;
                in2.rotation.y = rotI.k;
                medio.rotation.y = rotI.j;
                me2.rotation.y = rotI.k;
                anulare.rotation.y = rotI.j;
                an2.rotation.y = rotI.k;
            });
            tween.onComplete(function(){
                soundI.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();

        break;

        case "j":
        case "J":
            
            soundJ.setVolume(vol);
            soundJ.play();
            
            rotI = {x: pollice.rotation.y, y: po2.rotation.x, z: po2.rotation.y,
                w: po3.rotation.x, j: indice.rotation.y, k: in2.rotation.y
            };
            rotF = {x:-0.5, y:1.2, z:-1, w:0.3, j:-1.4, k:-2.2};
            tween = new TWEEN.Tween(rotI).to(rotF, t*600);
            tween.onUpdate(function(){
                pollice.rotation.y = rotI.x;
                po2.rotation.x = rotI.y;
                po2.rotation.y = rotI.z;
                po3.rotation.x = rotI.w; 
                indice.rotation.y = rotI.j;
                in2.rotation.y = rotI.k;
                medio.rotation.y = rotI.j;
                me2.rotation.y = rotI.k;
                anulare.rotation.y = rotI.j;
                an2.rotation.y = rotI.k;
            });
            
            rotIB = {x: palmo.position.y, y: palmo.rotation.x, z:palmo.rotation.z};
            rotFB = {x:167, y:1.6, z:-1.5};
            tweenB = new TWEEN.Tween(rotIB).to(rotFB, t*800);
            tweenB.onUpdate(function(){
                palmo.position.y = rotIB.x;
                palmo.rotation.x = rotIB.y;
                palmo.rotation.z = rotIB.z;
            });
            tweenB.repeat(1).yoyo(true).repeatDelay(t*300); 

            rotIC = {x: pollice.rotation.y, y: po2.rotation.x, z: po2.rotation.y,
                w: po3.rotation.x, j: indice.rotation.y, k: in2.rotation.y
            };
            rotFC = {x:0, y:po2X, z:0, w:0, j:0, k:0};
            tweenC = new TWEEN.Tween(rotFC).to(rotIC, t*800);
            tweenC.onUpdate(function(){
                pollice.rotation.y = rotIC.x;
                po2.rotation.x = rotIC.y;
                po2.rotation.y = rotIC.z;
                po3.rotation.x = rotIC.w; 
                indice.rotation.y = rotIC.j;
                in2.rotation.y = rotIC.k;
                medio.rotation.y = rotIC.j;
                me2.rotation.y = rotIC.k;
                anulare.rotation.y = rotIC.j;
                an2.rotation.y = rotIC.k;
            });

            tweenD = new TWEEN.Tween({x:0}).to({x:0}, 10);
            tweenD.onUpdate(function(){
                soundJ.stop();
                p = pos+1;
                fun(p);
            });

            tween.chain(tweenB);
            tweenB.chain(tweenC);   
            tweenC.chain(tweenD);         
            tween.start();

        break;

        case "k":
        case "K":
            
            soundK.setVolume(vol);
            soundK.play();

            if(american){
                rotI = {x: pollice.rotation.y, y: po2.rotation.x, z: po2.rotation.y,
                    w: anulare.rotation.y, j: an2.rotation.y, k: an3.rotation.y,
                    h: mi3.rotation.y, q: indice.rotation.x, e: medio.rotation.y,
                    t: po3.rotation.y
                };
                rotF = {x:-1.6, y:1.6, z:-0.3, w:-1.5, j:-2.1, k:-0.2, h:-0.1, q:1.4, e:-0.6, t:0.1};
                tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
                tween.onUpdate(function(){
                    pollice.rotation.y = rotI.x;
                    po2.rotation.x = rotI.y;
                    po2.rotation.y = rotI.z;
                    po3.rotation.y = rotI.t;
                    indice.rotation.x = rotI.q;
                    medio.rotation.y = rotI.e;
                    anulare.rotation.y = rotI.w;
                    an2.rotation.y = rotI.j;
                    an3.rotation.y = rotI.k;
                    mignolo.rotation.y = rotI.w;
                    mi2.rotation.y = rotI.j;
                    mi3.rotation.y = rotI.h;
                });
                tween.onComplete(function(){
                    soundK.stop();
                    p = pos+1;
                    fun(p);
                });
                tween.repeat(1).yoyo(true).repeatDelay(t*1000);
                tween.start();
            } else {
            
                rotI = {x: anulare.rotation.y, y: an2.rotation.y, z: medio.rotation.y,
                    w: pollice.rotation.y, j: po2.rotation.x, k: po2.rotation.y, 
                    h: po3.rotation.y, q: palmo.rotation.y
                };
                rotF = {x:-1.4, y:-2.2, z:-1.3, w:-1.6, j:1.6, k:-0.2, h:0.2, q:1.6};
                tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
                tween.onUpdate(function(){
                    palmo.rotation.y = rotI.q;
                    pollice.rotation.y = rotI.w;
                    po2.rotation.x = rotI.j;
                    po2.rotation.y = rotI.k; 
                    po3.rotation.y = rotI.h;
                    medio.rotation.y = rotI.z;
                    anulare.rotation.y = rotI.x;
                    mignolo.rotation.y = rotI.x;
                    an2.rotation.y = rotI.y;
                    mi2.rotation.y = rotI.y;
                });
                tween.onComplete(function(){
                    soundK.stop();
                    p = pos+1;
                    fun(p);
                });
                tween.repeat(1).yoyo(true).repeatDelay(t*1000);
                tween.start();
            }
                
        break;

        case "l":
        case "L":
            
            soundL.setVolume(vol);
            soundL.play();
            
            rotI = {x: po2.rotation.x, y: medio.rotation.y, z: me2.rotation.y};
            rotF = {x:0.2, y:-1.4, z:-2.2};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                po2.rotation.x = rotI.x;
                medio.rotation.y = rotI.y;
                me2.rotation.y = rotI.z;
                anulare.rotation.y = rotI.y;
                an2.rotation.y = rotI.z;
                mignolo.rotation.y = rotI.y;
                mi2.rotation.y = rotI.z;
            });
            tween.onComplete(function(){
                soundL.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();

        break;

        case "m":
        case "M":
            
            soundM.setVolume(vol);
            soundM.play();

            if (american){
                rotI = {x: pollice.rotation.y, y: mignolo.rotation.y, z: indice.rotation.y,
                    w: po2.rotation.y, j: mi2.rotation.y, k: in2.rotation.y
                };
                rotF = {x:-1.6, y:-1.4, z:-1.1, w:-1.0, j:-2.2, k:-2.1};
                tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
                tween.onUpdate(function(){
                    pollice.rotation.y = rotI.x;
                    mignolo.rotation.y = rotI.y;
                    indice.rotation.y = rotI.z;
                    medio.rotation.y = rotI.z;
                    anulare.rotation.y = rotI.z;
                    po2.rotation.y= rotI.w;
                    mi2.rotation.y = rotI.j;
                    in2.rotation.y = rotI.k;
                    me2.rotation.y = rotI.k;
                    an2.rotation.y = rotI.k;
                });
                tween.onComplete(function(){
                    soundM.stop();
                    p = pos+1;
                    fun(p);
                });
                tween.repeat(1).yoyo(true).repeatDelay(t*1000);
                tween.start();
            } else {
                
                rotI = {x: palmo.position.y, y: palmo.rotation.z, z:pollice.rotation.y,
                    w: po2.rotation.x, j: po2.rotation.y, k: po2.rotation.z, 
                    h: po3.rotation.y, q: indice.rotation.y
                };
                rotF = {x:167, y:-1.7, z:-1, w:2.3, j:-1, k:0.9, h:-0.6, q:-1.4};
                tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
                tween.onUpdate(function(){
                    palmo.position.y = rotI.x;
                    palmo.rotation.z = rotI.y;
                    pollice.rotation.y = rotI.z;
                    po2.rotation.x = rotI.w;
                    po2.rotation.y = rotI.j;
                    po2.rotation.z = rotI.k;
                    po3.rotation.y = rotI.h;  
                    indice.rotation.y = rotI.q;
                    medio.rotation.y = rotI.q;
                    anulare.rotation.y = rotI.q;
                    mignolo.rotation.y = rotI.q;
                });
                tween.onComplete(function(){
                    soundM.stop();
                    p = pos+1;
                    fun(p);
                });
                tween.repeat(1).yoyo(true).repeatDelay(t*1000);
                tween.start();
            } 
        break;

        case "n":
        case "N":
            
            soundN.setVolume(vol);
            soundN.play();

            if(american){
                rotI = {x: pollice.rotation.y, y: mignolo.rotation.y, z: indice.rotation.y,
                    w: po2.rotation.y, j: mi2.rotation.y, k: in2.rotation.y
                };
                rotF = {x:-1.6, y:-1.4, z:-1.1, w:-0.8, j:-2.2, k:-2.1};
                tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
                tween.onUpdate(function(){
                    pollice.rotation.y = rotI.x;
                    mignolo.rotation.y = rotI.y;
                    indice.rotation.y = rotI.z;
                    medio.rotation.y = rotI.z;
                    anulare.rotation.y = rotI.y;
                    po2.rotation.y= rotI.w;
                    mi2.rotation.y = rotI.j;
                    in2.rotation.y = rotI.k;
                    me2.rotation.y = rotI.k;
                    an2.rotation.y = rotI.j;
                });
                tween.onComplete(function(){
                    soundN.stop();
                    p = pos+1;
                    fun(p);
                });
                tween.repeat(1).yoyo(true).repeatDelay(t*1000);
                tween.start();
            } else{
                    
                rotI = {x: palmo.position.y, y: palmo.rotation.z, z:pollice.rotation.y,
                    w: po2.rotation.x, j: po2.rotation.y, k: po2.rotation.z, 
                    h: po3.rotation.y, q: indice.rotation.y, e:an2.rotation.y
                };
                rotF = {x:167, y:-1.7, z:-1, w:2.3, j:-1, k:0.9, h:-0.6, q:-1.4, e:-2.2};
                tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
                tween.onUpdate(function(){
                    palmo.position.y = rotI.x;
                    palmo.rotation.z = rotI.y;
                    pollice.rotation.y = rotI.z;
                    po2.rotation.x = rotI.w;
                    po2.rotation.y = rotI.j;
                    po2.rotation.z = rotI.k;
                    po3.rotation.y = rotI.h;  
                    indice.rotation.y = rotI.q;
                    medio.rotation.y = rotI.q;
                    anulare.rotation.y = rotI.q;
                    mignolo.rotation.y = rotI.q;
                    an2.rotation.y = rotI.e;
                    mi2.rotation.y = rotI.e;
                });
                tween.onComplete(function(){
                    soundN.stop();
                    p = pos+1;
                    fun(p);
                });
                tween.repeat(1).yoyo(true).repeatDelay(t*1000);
                tween.start();
            }    
        break;

        case "o":
        case "O":
        case "ò":
            
            soundO.setVolume(vol);
            soundO.play();
            
            rotI = {x: palmo.rotation.y, y: pollice.rotation.y, z: po2.rotation.x, 
                w: po3.rotation.x, j: indice.rotation.y, k: in2.rotation.y,
                h: in3.rotation.y, q: mi3.rotation.y
            };
            rotF = {x:1.6, y:-1.5, z:0.5, w:0.7, j:-0.5, k:-1.4, h:-1, q:-0.7};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                palmo.rotation.y = rotI.x;
                pollice.rotation.y = rotI.y;
                po2.rotation.x = rotI.z;
                po3.rotation.x = rotI.w;   
                indice.rotation.y = rotI.j;
                in2.rotation.y = rotI.k;
                in3.rotation.y = rotI.h;
                medio.rotation.y = rotI.j;
                me2.rotation.y = rotI.k;
                me3.rotation.y = rotI.h;
                anulare.rotation.y = rotI.j;
                an2.rotation.y = rotI.k;
                an3.rotation.y = rotI.h;
                mignolo.rotation.y = rotI.j;
                mi2.rotation.y = rotI.k;
                mi3.rotation.y = rotI.q;
            });
            tween.onComplete(function(){
                soundO.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();

        break;

        case "p":
        case "P":
     
            soundP.setVolume(vol);
            soundP.play();
            
            if (american){
                paPOS = -50;
                rotI = {x: pollice.rotation.y, y: mignolo.rotation.y, z: indice.rotation.y,
                    w: po2.rotation.y, j: mi2.rotation.y, k: in2.rotation.y,
                    h: palmo.position.z, q: palmo.rotation.y, e: palmo.rotation.z
                };
                rotF = {x:-1.6, y:-1.4, z:-0.6, w:-0.3, j:-2.2, k:-0.2, h:paPOS, q:-1.3, e:-0.6};
                tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
                tween.onUpdate(function(){
                    pollice.rotation.y = rotI.x;
                    mignolo.rotation.y = rotI.y;
                    medio.rotation.y = rotI.y;
                    anulare.rotation.y = rotI.y;
                    indice.rotation.y = rotI.z;
                    po2.rotation.y= rotI.w;
                    mi2.rotation.y = rotI.j;
                    in2.rotation.y = rotI.k;
                    me2.rotation.y = rotI.k;
                    an2.rotation.y = rotI.j;
                    palmo.position.z = rotI.h;
                    palmo.rotation.y = rotI.q;
                    palmo.rotation.z = rotI.e;
                });
                tween.onComplete(function(){
                    soundP.stop();
                    p = pos+1;
                    fun(p);
                });
                tween.repeat(1).yoyo(true).repeatDelay(t*1000);
                tween.start();
            } else {

                rotI = {x: palmo.rotation.y, y: palmo.rotation.z, z: po2.rotation.y,
                    w: me2.rotation.y, j: me3.rotation.y, k: palmo.position.y,
                    h: palmo.position.z, q: pollice.rotation.y, e: po2.rotation.x,
                    t: indice.rotation.y, u: medio.rotation.y, p: mi3.rotation.y
                };
                rotF = {x:-1.1, y:-1.5, z:-0.5, w:-1.3, j:-0.9, k:167, h:-50, q:-1.6, e:0.6, t:-0.7, u:-0.8, p:-0.6};
                tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
                tween.onUpdate(function(){
                    palmo.position.y = rotI.k;
                    palmo.position.z = rotI.h;
                    palmo.rotation.y = rotI.x;
                    palmo.rotation.z = rotI.y;
                    pollice.rotation.y = rotI.q;
                    po2.rotation.y = rotI.z;
                    po2.rotation.x = rotI.e;
                    indice.rotation.y = rotI.t;
                    medio.rotation.y = rotI.u;
                    me2.rotation.y = rotI.w;
                    me3.rotation.y = rotI.j;
                    anulare.rotation.y = rotI.u;
                    an2.rotation.y = rotI.w;
                    an3.rotation.y = rotI.j;
                    mignolo.rotation.y = rotI.u;
                    mi2.rotation.y = rotI.w;
                    mi3.rotation.y = rotI.p;
                });
                tween.onComplete(function(){
                    soundP.stop();
                    p = pos+1;
                    fun(p);
                });
                tween.repeat(1).yoyo(true).repeatDelay(t*1000);
                tween.start();
            }
        break;

        case "q":
        case "Q":
            
            soundQ.setVolume(vol);
            soundQ.play();

            if(american){
                paZ = -0.9;
            }         
            paPOS = -50;   
            rotI = {x: palmo.rotation.y, y: palmo.rotation.z, z: po2.rotation.y,
                w: me2.rotation.y, j: me3.rotation.y, k: palmo.position.y,
                h: palmo.position.z
            };
            rotF = {x:-1.1, y:paZ, z:-1.4, w:-2.2, j:-0.3, k:167, h:paPOS};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                palmo.position.y = rotI.k;
                palmo.position.z = rotI.h;
                palmo.rotation.y = rotI.x;
                palmo.rotation.z = rotI.y;
                po2.rotation.y = rotI.z;
                indice.rotation.y = rotI.z;
                medio.rotation.y = rotI.z;
                anulare.rotation.y = rotI.z;
                mignolo.rotation.y = rotI.z;
                me2.rotation.y = rotI.w;
                an2.rotation.y = rotI.w;
                mi2.rotation.y = rotI.w;
                me3.rotation.y = rotI.j;
                an3.rotation.y = rotI.j;
            });
            tween.onComplete(function(){
                soundQ.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();
            
        break;

        case "r":
        case "R":
            
            soundR.setVolume(vol);
            soundR.play();
            
            rotI = {x: pollice.rotation.y, y: po2.rotation.x, z: po3.rotation.y,
                w: anulare.rotation.y, j: an2.rotation.y, k: an3.rotation.y,
                h: mi3.rotation.y, q: indice.rotation.x, e: indice.rotation.y,
                t: medio.rotation.x, u: in2.rotation.y, p: me2.rotation.y
            };
            rotF = {x:-1.6, y:0.9, z:-0.8, w:-1.5, j:-2.1, k:-0.2, h:-0.1, q:1.8, e:-0.3, t:1.5, u:0.1, p:-0.2};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                pollice.rotation.y = rotI.x;
                po2.rotation.x = rotI.y;
                po2.rotation.y = rotI.z;
                indice.rotation.x = rotI.q;
                indice.rotation.y = rotI.e;
                medio.rotation.x = rotI.t;
                in2.rotation.y = rotI.u;
                me2.rotation.y = rotI.p;
                anulare.rotation.y = rotI.w;
                an2.rotation.y = rotI.j;
                an3.rotation.y = rotI.k;
                mignolo.rotation.y = rotI.w;
                mi2.rotation.y = rotI.j;
                mi3.rotation.y = rotI.h;
            });
            tween.onComplete(function(){
                soundR.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();
        break;

        case "s":
        case "S":
            
            soundS.setVolume(vol);
            soundS.play();

            if (american){
                rotI = {x: indice.rotation.y, y: in2.rotation.y, z: in3.rotation.y,
                    w: pollice.rotation.y, j: po2.rotation.x, k: po2.rotation.y,
                    h: po3.rotation.x
                };
                rotF = {x:-1.4, y:-2.0, z:-0.7, w:-0.5, j:1.2, k:-1.0, h:0.3};
                tween = new TWEEN.Tween(rotI).to(rotF, t*600);
                tween.onUpdate(function(){
                    indice.rotation.y = rotI.x;
                    medio.rotation.y = rotI.x;
                    anulare.rotation.y = rotI.x;
                    mignolo.rotation.y = rotI.x;
                    in2.rotation.y = rotI.y;
                    me2.rotation.y = rotI.y;
                    an2.rotation.y = rotI.y;
                    mi2.rotation.y = rotI.y;
                    in3.rotation.y = rotI.z;
                    me3.rotation.y = rotI.z;
                    an3.rotation.y = rotI.z;
                    mi3.rotation.y = rotI.z;
                    pollice.rotation.y = rotI.w;
                    po2.rotation.x = rotI.j;
                    po2.rotation.y = rotI.k;
                    po3.rotation.x = rotI.h;
                });
                tween.onComplete(function(){
                    soundS.stop();
                    p = pos+1;
                    fun(p);
                });
                tween.repeat(1).yoyo(true).repeatDelay(t*1000);
                tween.start();
            } else {
                
                rotI = {x: indice.rotation.y, y: in2.rotation.y, z: po2.rotation.x};
                rotF = {x:-1.4, y:-2.2, z:0.4};
                tween = new TWEEN.Tween(rotI).to(rotF, t*600);
                tween.onUpdate(function(){
                    indice.rotation.y = rotI.x;
                    medio.rotation.y = rotI.x;
                    anulare.rotation.y = rotI.x;
                    mignolo.rotation.y = rotI.x;
                    in2.rotation.y = rotI.y;
                    me2.rotation.y = rotI.y;
                    an2.rotation.y = rotI.y;
                    mi2.rotation.y = rotI.y;
                    po2.rotation.x = rotI.z;
                });

                rotIB = {x: palmo.position.z};
                rotFB = {x:-30};
                tweenB = new TWEEN.Tween(rotIB).to(rotFB, t*800);
                tweenB.onUpdate(function(){
                    palmo.position.z = rotIB.x;
                });
                tweenB.repeat(1).yoyo(true).repeatDelay(t*300); 

                rotIC = {x: indice.rotation.y, y: in2.rotation.y, z: po2.rotation.x};
                rotFC = {x:0, y:0, z:po2X};
                tweenC = new TWEEN.Tween(rotIC).to(rotFC, t*800);
                tweenC.onUpdate(function(){
                    indice.rotation.y = rotIC.x;
                    medio.rotation.y = rotIC.x;
                    anulare.rotation.y = rotIC.x;
                    mignolo.rotation.y = rotIC.x;
                    in2.rotation.y = rotIC.y;
                    me2.rotation.y = rotIC.y;
                    an2.rotation.y = rotIC.y;
                    mi2.rotation.y = rotIC.y;
                    po2.rotation.x = rotIC.z;
                });

                tweenD = new TWEEN.Tween({x:0}).to({x:0}, 10);
                tweenD.onUpdate(function(){
                    soundS.stop();
                    p = pos+1;
                    fun(p);
                });
                
                tween.chain(tweenB);
                tweenB.chain(tweenC);
                tweenC.chain(tweenD);
                tween.start();
            }
        break;

        case "t":
        case "T":
            
            soundT.setVolume(vol);
            soundT.play();
            
            if (american){
                rotI = {x: pollice.rotation.y, y: mignolo.rotation.y, z: indice.rotation.y,
                    w: po2.rotation.y, j: mi2.rotation.y, k: po3.rotation.y
                };
                rotF = {x:-1.6, y:-1.4, z:-0.8, w:-0.3, j:-2.2, k:-0.1};
                tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
                tween.onUpdate(function(){
                    pollice.rotation.y = rotI.x;
                    mignolo.rotation.y = rotI.y;
                    indice.rotation.y = rotI.z;
                    medio.rotation.y = rotI.y;
                    anulare.rotation.y = rotI.y;
                    po2.rotation.y= rotI.w;
                    mi2.rotation.y = rotI.j;
                    in2.rotation.y = rotI.j;
                    me2.rotation.y = rotI.j;
                    an2.rotation.y = rotI.j;
                    po3.rotation.y = rotI.k;
                });
                tween.onComplete(function(){
                    soundT.stop();
                    p = pos+1;
                    fun(p);
                });
                tween.repeat(1).yoyo(true).repeatDelay(t*1000);
                tween.start();
            } else {
                    
                rotI = {x: palmo.rotation.x, y: palmo.rotation.z, z: po2.rotation.x,
                    w: po2.rotation.y, j: po3.rotation.x, k: indice.rotation.y,
                    h: me2.rotation.y
                };
                rotF = {x:1.6, y:-1.5, z:2, w:-0.6, j:-0.4, k:-1.4, h:-2.2};
                tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
                tween.onUpdate(function(){
                    palmo.rotation.x = rotI.x;
                    palmo.rotation.z = rotI.y;
                    po2.rotation.x = rotI.z;
                    po2.rotation.y = rotI.w;
                    po3.rotation.x = rotI.j;
                    indice.rotation.y = rotI.k;
                    medio.rotation.y = rotI.k;
                    me2.rotation.y = rotI.h;
                    anulare.rotation.y = rotI.k;
                    an2.rotation.y = rotI.h;
                    mignolo.rotation.y = rotI.k;
                    mi2.rotation.y = rotI.h;
                });
                tween.onComplete(function(){
                    soundT.stop();
                    p = pos+1;
                    fun(p);
                });
                tween.repeat(1).yoyo(true).repeatDelay(t*1000);
                tween.start();
            }
        break;

        case "u":
        case "U":
        case "ù":
            
            soundU.setVolume(vol);
            soundU.play();

            rotI = {x: pollice.rotation.y, y: po2.rotation.x, z: po3.rotation.y,
                w: anulare.rotation.y, j: an2.rotation.y, k: an3.rotation.y,
                h: mi3.rotation.y
            };
            rotF = {x:-1.6, y:0.9, z:-0.8, w:-1.5, j:-2.1, k:-0.2, h:-0.1};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                pollice.rotation.y = rotI.x;
                po2.rotation.x = rotI.y;
                po2.rotation.y = rotI.z;
                anulare.rotation.y = rotI.w;
                an2.rotation.y = rotI.j;
                an3.rotation.y = rotI.k;
                mignolo.rotation.y = rotI.w;
                mi2.rotation.y = rotI.j;
                mi3.rotation.y = rotI.h;
            });
            tween.onComplete(function(){
                soundU.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();
            
        break;

        case "v":
        case "V":
            
            soundV.setVolume(vol);
            soundV.play();
            
            rotI = {x: pollice.rotation.y, y: po2.rotation.x, z: po3.rotation.y,
                w: anulare.rotation.y, j: an2.rotation.y, k: an3.rotation.y,
                h: mi3.rotation.y, q: indice.rotation.x, e: medio.rotation.x
            };
            rotF = {x:-1.6, y:0.9, z:-0.8, w:-1.5, j:-2.1, k:-0.2, h:-0.1, q:1.4, e:1.6};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                pollice.rotation.y = rotI.x;
                po2.rotation.x = rotI.y;
                po2.rotation.y = rotI.z;
                indice.rotation.x = rotI.q;
                medio.rotation.x = rotI.e;
                anulare.rotation.y = rotI.w;
                an2.rotation.y = rotI.j;
                an3.rotation.y = rotI.k;
                mignolo.rotation.y = rotI.w;
                mi2.rotation.y = rotI.j;
                mi3.rotation.y = rotI.h;
            });
            tween.onComplete(function(){
                soundV.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();
        break;

        case "w":
        case "W":
            
            soundW.setVolume(vol);
            soundW.play();
            
            rotI = {x: pollice.rotation.y, y: po2.rotation.y, z: indice.rotation.x,
                w: anulare.rotation.x, j: mignolo.rotation.x, k: mignolo.rotation.y,
                h: mi2.rotation.y
            };
            rotF = {x:-1.6, y:-1.2, z:1.4, w:1.7, j:1.8, k:-1.5, h:-1.5};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                pollice.rotation.y = rotI.x;
                po2.rotation.y = rotI.y;
                indice.rotation.x = rotI.z;
                anulare.rotation.x = rotI.w;
                mignolo.rotation.x = rotI.j;
                mignolo.rotation.y = rotI.k;
                mi2.rotation.y = rotI.h;
            });
            tween.onComplete(function(){
                soundW.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();
        
        break;

        case "x":
        case "X":
            
            soundX.setVolume(vol);
            soundX.play();
            
            rotI = {x: pollice.rotation.y, y: po2.rotation.x, z: po2.rotation.y,
                w: po3.rotation.x, j: po3.rotation.y, k: indice.rotation.y,
                h: in2.rotation.y, q: in3.rotation.y, e: medio.rotation.y,
                t: me2.rotation.y, u: me3.rotation.y, p: mi3.rotation.y
            };
            rotF = {x:-1.4, y:0.7, z:-0.6, w:0.1, j:-0.2, k:-0.1, h:-1, q:-1.2, e:-1.5, t:-2.1, u:-0.2, p:-0.1};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                pollice.rotation.y = rotI.x;
                po2.rotation.x = rotI.y;
                po2.rotation.y = rotI.z;
                po3.rotation.x = rotI.w;
                po3.rotation.y = rotI.j; 
                indice.rotation.y = rotI.k;
                in2.rotation.y = rotI.h;
                in3.rotation.y = rotI.q;
                medio.rotation.y = rotI.e;
                anulare.rotation.y = rotI.e;
                mignolo.rotation.y = rotI.e;
                me2.rotation.y = rotI.t;
                an2.rotation.y = rotI.t;
                mi2.rotation.y = rotI.t;
                me3.rotation.y = rotI.u;
                an3.rotation.y = rotI.u;
                mi3.rotation.y = rotI.p;
            });
            tween.onComplete(function(){
                soundX.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();

        break;

        case "y":
        case "Y":
            
            soundY.setVolume(vol);
            soundY.play();
            
            rotI = {x: indice.rotation.y, y: in2.rotation.y, z: po2.rotation.x};
            rotF = {x:-1.4, y:-2.2, z:0.4};
            tween = new TWEEN.Tween(rotI).to(rotF, t*1000);
            tween.onUpdate(function(){
                indice.rotation.y = rotI.x;
                medio.rotation.y = rotI.x;
                anulare.rotation.y = rotI.x;
                in2.rotation.y = rotI.y;
                me2.rotation.y = rotI.y;
                an2.rotation.y = rotI.y;
                po2.rotation.x = rotI.z;
            });
            tween.onComplete(function(){
                soundY.stop();
                p = pos+1;
                fun(p);
            });
            tween.repeat(1).yoyo(true).repeatDelay(t*1000);
            tween.start();

        break;

        case "z":
        case "Z":
            
            soundZ.setVolume(vol);
            soundZ.play();
            
            rotI = {x: pollice.rotation.y, y: po2.rotation.x, z: po2.rotation.y,
                w: po3.rotation.x, j: po3.rotation.y, k: medio.rotation.y,
                h: me2.rotation.y, q: me3.rotation.y, e: mi3.rotation.y,
                t: palmo.rotation.z
            };
            rotF = {x:-1.4, y:0.7, z:-0.6, w:0.1, j:-0.2, k:-1.5, h:-2.1, q:-0.2, e:-0.1, t:-0.7};
            tween = new TWEEN.Tween(rotI).to(rotF, t*800);
            tween.onUpdate(function(){
                pollice.rotation.y = rotI.x;
                po2.rotation.x = rotI.y;
                po2.rotation.y = rotI.z;
                po3.rotation.x = rotI.w; 
                po3.rotation.y = rotI.j;
                medio.rotation.y = rotI.k;
                anulare.rotation.y = rotI.k;
                mignolo.rotation.y = rotI.k;
                me2.rotation.y = rotI.h;
                an2.rotation.y = rotI.h;
                mi2.rotation.y = rotI.h;
                me3.rotation.y = rotI.q;
                an3.rotation.y = rotI.q;
                mi3.rotation.y = rotI.e;
                palmo.rotation.z = rotI.t;
            });

            rotIB = {x: indice.rotation.x, y: indice.rotation.y};
            rotFB = {x:1.9, y:-0.3};
            tweenB = new TWEEN.Tween(rotIB).to(rotFB, t*500);
            tweenB.onUpdate(function(){
                indice.rotation.x = rotIB.x;
                indice.rotation.y = rotIB.y;
            });

            rotIC = {x: 1.9, y: -0.3};
            rotFC = {x:1.4, y:-0.6};
            tweenC = new TWEEN.Tween(rotIC).to(rotFC, t*500);
            tweenC.onUpdate(function(){
                indice.rotation.x = rotIC.x;
                indice.rotation.y = rotIC.y;
            });

            rotID = {x: 1.4, y: -0.6};
            rotFD = {x:1.9, y:-0.9};
            tweenD = new TWEEN.Tween(rotID).to(rotFD, t*500);
            tweenD.onUpdate(function(){
                indice.rotation.x = rotID.x;
                indice.rotation.y = rotID.y;
            });

            rotIE = {x: pollice.rotation.y, y: po2.rotation.x, z: po2.rotation.y,
                w: po3.rotation.x, j: po3.rotation.y, k: medio.rotation.y,
                h: me2.rotation.y, q: me3.rotation.y, e: mi3.rotation.y,
                t: palmo.rotation.z, u: indice.rotation.x, p: indice.rotation.y
            };
            rotFE = {x:0, y:po2X, z:0, w:0, j:0, k:0, h:0, q:0, e:0, t:0, u:po2X, p:0};
            tweenE = new TWEEN.Tween(rotIE).to(rotFE, t*800);
            tweenE.onUpdate(function(){
                pollice.rotation.y = rotIE.x;
                po2.rotation.x = rotIE.y;
                po2.rotation.y = rotIE.z;
                po3.rotation.x = rotIE.w; 
                po3.rotation.y = rotIE.j;
                medio.rotation.y = rotIE.k;
                anulare.rotation.y = rotIE.k;
                mignolo.rotation.y = rotIE.k;
                me2.rotation.y = rotIE.h;
                an2.rotation.y = rotIE.h;
                mi2.rotation.y = rotIE.h;
                me3.rotation.y = rotIE.q;
                an3.rotation.y = rotIE.q;
                mi3.rotation.y = rotIE.e;
                palmo.rotation.z = rotIE.t;
                indice.rotation.x = rotIE.u;
                indice.rotation.y = rotIE.p;
            });
            tweenE.delay(400);

            tweenF = new TWEEN.Tween({x:0}).to({x:0}, 10);
            tweenF.onUpdate(function(){
                soundZ.stop();
                p = pos+1;
                fun(p);
            });

            tween.chain(tweenB);
            tweenB.chain(tweenC);
            tweenC.chain(tweenD);
            tweenD.chain(tweenE);
            tweenE.chain(tweenF);
            tween.start();
        break;

        default:

            p = pos+1;
            fun(p);
            
        break;
    }

}

function readName(){

    anim = false;

    N = Name.length;

    flag = false;

    if (N != 0){
        
        for (var dito of palmo.children){
            dito.material = new THREE.MeshStandardMaterial( { map: textureN } );
            for (var falange of dito.children){
                falange.material = new THREE.MeshStandardMaterial( { map: textureN } );
                for (var punta of falange.children){
                    punta.material = new THREE.MeshStandardMaterial( { map: textureN } );
                }
            }
        }

        alphabet(Name[0], 0);

    } else {

        alphabet('change');

    }
             
}

function readSurname(){
    
    S = Surname.length;

    flag = true;

    if (S != 0){
        
        for (var dito of palmo.children){
            dito.material = new THREE.MeshStandardMaterial( { map: textureS } );
            for (var falange of dito.children){
                falange.material = new THREE.MeshStandardMaterial( { map: textureS } );
                for (var punta of falange.children){
                    punta.material = new THREE.MeshStandardMaterial( { map: textureS } );
                }
            }
        }
     
        alphabet(Surname[0], 0);
        
    } else {
        fun(0);
    } 
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animation() {
    requestAnimationFrame( animation );
    TWEEN.update()
    renderer.render( scene, camera );
}

function components(){
    palmo = root.getObjectByName('Palmo');
    pollice = root.getObjectByName('Pollice');
    po2 = root.getObjectByName('Pollice2');
    po3 = root.getObjectByName('Pollice3');
    indice = root.getObjectByName('Indice');
    in2 = root.getObjectByName('Indice2');
    in3 = root.getObjectByName('Indice3');
    medio = root.getObjectByName('Medio');
    me2 = root.getObjectByName('Medio2');
    me3 = root.getObjectByName('Medio3');
    anulare = root.getObjectByName('Anulare');
    an2 = root.getObjectByName('Anulare2');
    an3 = root.getObjectByName('Anulare3');
    mignolo = root.getObjectByName('Mignolo');
    mi2 = root.getObjectByName('Mignolo2');
    mi3 = root.getObjectByName('Mignolo3');
}

function init() {

    scene = new THREE.Scene();              

    const ambient = new THREE.AmbientLight(0xFFFFFF, 0.5);
    scene.add(ambient);

    const directional = new THREE.DirectionalLight(0xB3B3FF, 1);
    directional.position.set(200, 100, 400);
    directional.target.position.set(-100, 50, -500);
    scene.add(directional);
    scene.add(directional.target);

    camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 1, 1000 );
    r = 400;
    angle = 0;
    x = r*Math.cos(angle);
    z = r*Math.sin(angle);
    y = 0;
    camera.position.set(x, y, z);
    camera.lookAt(0, 0, 0);

    listener = new THREE.AudioListener();
    camera.add(listener);

    sounds();

    renderer = new THREE.WebGLRenderer( { antialias: true, alpha : true} );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    document.body.appendChild( renderer.domElement );
    
    textureP = new THREE.TextureLoader().load( 'texture/gray.jpg' );
    textureF = new THREE.TextureLoader().load( 'texture/Dgray.jpg' );
    textureN = new THREE.TextureLoader().load( 'texture/blue.jpg' );
    textureS = new THREE.TextureLoader().load( 'texture/purple.jpg' );

    const gltfLoader = new THREE.GLTFLoader();
    const url = "Hand.gltf";
    gltfLoader.load(url, (gltf) => {
        root = gltf.scene;
        root.position.set(0, -150, 0);

        components();

        po2X = po2.rotation.x;
        meX = medio.rotation.x;

        palmo.material = new THREE.MeshPhongMaterial( { map: textureP } );
        for (var dito of palmo.children){
            dito.material = new THREE.MeshStandarzdMaterial( { map: textureF } );
            for (var falange of dito.children){
                falange.material = new THREE.MeshStandardMaterial( { map: textureF } );
                for (var punta of falange.children){
                    punta.material = new THREE.MeshStandardMaterial( { map: textureF } );
                }
            }
        }

        scene.add( root );

    });

    document.getElementById("BtnIta").onclick = function(){
        american = false;
    }

    document.getElementById("BtnAmer").onclick = function(){
        american = true;
    }

    document.getElementById("BtnSend").onclick = function(){
        Name = document.getElementById("TxtName").value;
        Surname = document.getElementById("TxtSur").value;
        if (anim){
            readName();     
        }   
    }

    document.getElementById("slideV").onchange = function(event){
        t = event.target.value/10;
    };

    document.getElementById("slideVol").onchange = function(event){
        vol = event.target.value/10;
    };

    document.getElementById("slideC").onchange = function(event){
        angle = event.target.value/10;
        x = r*Math.cos(angle);
        z = r*Math.sin(angle);
        camera.position.set(x, y, z);
        camera.lookAt(0, 0, 0);
    };

    animation();

    window.addEventListener( 'resize', onWindowResize, false );

}

init();