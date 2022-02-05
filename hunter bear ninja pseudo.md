# Hunter Bear Ninja
## Script of events
player visits website
greeted with nothing at first, just the background image coming into view, fading from the bottom

then the images pop up, into their squares
The title appears across the screen slowly, rules after a little bit

buttons and scoreboard pop up

player clicks around. If player clicks 10+ times and it isn't a button, have a div appear that says "Make a choice. Be bold."

Player clicks a button underneath an image
  the image enlarges a little bit, and shrinks, maybe pulsates?
Types
Thinking.
Thinking..
Thinking...
(type ellipsis for 100-500 milliseconds before )

when computer makes a choice, make a div between the buttons and the scoreboard
blank div that just has hunter, bear, or ninja
when this choice comes into view, also highlight the computer's choice in a different color? (if it's already the player's selection, should grow beneath it)

diaplays who won that round, fades in and out?
a tally mark goes onto the scoreboard. if it's a tie, tally goes in the tie category
first to 5 wins.

at 5 wins, the player or the computer goes in a div that appears between the scoreboard and the buttons?

Maybe it replaces the buttons? or is an alert?

***

## html pseudo
```
body
  background
    header
      Title
      rules
    selection
      (image+button
        image container
          image container (two, one for the player to change borders, one for the computer, computer bordere is a bit bigger and "behind" the player's border...)
            image
        button
          button text) x3
    scoreboard
      player
        scoreboard
      ties
        computer
    Winner display  
      bold text, you/computer
    footer


~~~

I want buttons to have rounded corners, and a shadowbox that glows a bit while the computer makes a selection
```

***

## Styles I want on the stuff
buttons:
- transparent background
- dark or light text, probably dark
- when hovered, becomes opaque for a moment, or the border grows, or the whole button grows a little bit? (onHover?)
images
- rounded corners
- shadow box underneath?

Scroll-bar-box for the score histroy? (that seems too complicated.... making a small text scrollale history...) 

fading text or images to/from a point.

how to fade the whole content in


***

## Functions to include
- need to link each button to its respective choice in an array, or list.
- need to have something pop up for a little bit while the computer "thinks"
- need to time the end of the animation of the player click 
    - The player click on a button
      - (buttons disappear) 
      - the image of the thing they clicked grows a little larger
      - the image has a colorful shadowbox now

- computer makes a choice, randomly (use other code for that)

do the math/loop before printing the computer's choice and highlighting their choice as well.

## Challenges
- Have the buttons be clickable only once until the computer is done thinking.
- 
- import a font to use for this project, link in CSS and all that
- animate stuff
- maybe when a winner happens, dim the lights around a new div that pops out, overlays, maybe doesn't pop out of the window, but pops out of the page, 


- solution for popping out victory window
  - could have a dive that takes up 100%vh, the whole screen,
  - the bacground of this div is like a semi-translucent thing, so it just darkens the stuff behind it.
there's another div, centered, that comes into view, has a rounded box in the center ( with a shadowbox and some text on it.)

stagger these fades, have the box take a little longer, than the translucent thing, but the box starts just a small bti later, so the screen startes to darken before the box comes in

transitionTime: transformTime