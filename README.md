# Game of Life MK3

Conway's Game of Life implementation for Collider.JAM

Observe the emergent behavior of the cells.
Create or kill cells with left/right mouse click
to setup the colony.


## How to Run

Make sure, you have **Collider.JAM** framework installed:

```
npm i -g collider.jam
```

Then run ```jam play``` in the root folder of the project:

```
jam play
```

Collider.JAM is going to start a local web server to host the game
and will open the game page in the default browser.

Alternatively, you can start the Collider.JAM server:

```
jam
```

And then open the game link at (http://localhost:9999) in any browser or click on the link shown in the terminal window.



## Controls

### Mouse

Hold the left mouse button and move the mouse to "draw" new cells, hold the right mouse button and move to kill cells.

### Keyboard

| Keys          | Actions                       |
| ------------- |:-----------------------------:|
| Space         | Pause/unpause the game        |
| . or PageUp   | Speed up                      |
| , or PageDown | Speed down                    |
| Home          | Normal speed                  |
| Backslash     | Switch the colony info on/off |
| Backspace     | Switch the cursor on/off      |

