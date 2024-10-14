bricks
======

Did you know HTML5 is the next big thing? Oh, you’ve read that a million times already ... but do you know why is it the next big thing, beside from being the playground for google’s doodles? no? Ok, so here is a (somewhat) full breakout game implemented in HTML5 + Javascript. It’s about 5K of code (it’s plain Javascript, no jquery, prototype or any other libraries), including the HTML markup and the Javascript code. I made a real effort not to obfuscate stuff. My point is, you could write this same program using a lot less code, but I did not want to exaggerate.

I’m using one of the most important additions in HTML5: the <canvas> tag. This tag opens up a really nice 2d context for developers to implement programatic graphic experiences similar to those found in Flash, although with a lot less predefined interactions. The canvas element I’m using looks like this:

    <canvas id="board" width="640" height="480"></canvas>

That’s it. That creates a graphic context that can be manipulated at the pixel level using javascript. From there you only need to use the drawing primitives and get creative:

    board = document.getElementById('board');
    context = board.getContext('2d');
     
    context.fillStyle = get('background');
    context.fillRect(0, 0, width, height);
     
    context.fillStyle = get('hud');
    context.font = get('hudfont');
    context.fillText('lives: ' + lives, 10, 15, 100);
    context.fillText('score: ' + score, 10, 30, 100);
    context.fillText('level: ' + level, 10, 45, 100);
    context.fillText('speed: ' + bs, 10, 60, 100);

You get the idea.

My implementation is really simple, and could have a couple of bugs given the ‘optimizations’ I’ve made to keep the code clean and short. It only has 10 levels; if you finish all of them you are sent back to the first one, but now the ball moves a lot faster. The levels are defined in this manner:

    case 1: br = '\n\n\n\n10010101\n\n\n00101010\n\n101001\n\n0101001'; break;
    case 2: br = '\n\n\n\n10101011\n\n10101001\n00001\n\n100010020'; break;
    case 3: br = '\n\n\n\n10211012\n\n10100022\n0010001\n0000112\n11000000\n21'; break;
    case 4: br = '\n\n\n\n12121212\n00022000\n\n\n01010101\n\n01100110'; break;
    case 5: br = '\n\n\n\n33003300\n33003300\n33003302'; break;
    case 6: br = '\n\n\n\n12345543\n11110000\n\n\n11111114\n\n33003300'; break;
    case 7: br = '\n\n\n\n33331232\n00003002\n00302010\n\n\n12341234\n3300033\n0033\n0033\n0022'; break;
    case 8: br = '\n\n\n00500505\n00500505\n12121212\n21212121\n\n\n320032\n10005\n\n22\n2200033\n11'; break;
    case 9: br = '\n\n\n\n123\n\n1230044\n\n4400055\n\n33333333\n\n54354311\n1000001'; break;
    case 10: br = '\n\n\n\n15555555\n15555555\n15555555\n\n55555551\n55555551\n55555551'; break;

Each level is a string of numbers. 0 means no brick, 1 means a brick that needs one hit to disappear, 2 means two hits, 3 three, etc. Let me know if you have a level suggestion and I will include it. As I’m not using any external libraries it may not work on all browsers. I’ve only tested it on Chrome.

<a href="https://bigjocker.com/bricks/index.html">Click here to play the game</a>. It may work on your tablet or HTML5 enabled phone: touching on the right side of the page moves the pad right, and touching the left side moves it left. Or you can use the arrow keys on your PC. Or you can close your eyes and wish the pad to move. Let me know if that one works, as I’ve not tested it yet.
