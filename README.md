# puzzle-game

The puzzle game is a JavaScript implementation of a sliding puzzle game. It creates a grid of tiles with images and allows the player to drag and drop the tiles to rearrange them and solve the puzzle. Here's a breakdown of the code:

Variables:
rows and columns: Define the number of rows and columns in the puzzle grid.
currTile and otherTile: Store references to the currently dragged tile and the tile being swapped with it.
turns: Keep track of the number of turns or moves made by the player.
imgOrder: An array that contains the order of image filenames to be assigned to the tiles.

Window onload event:
This event handler function is triggered when the window finishes loading.
It creates the puzzle grid by iterating over each row and column.
Inside the loop, a new img element is created and assigned an ID and image source from the imgOrder array.
Event listeners are added to each tile for drag and drop functionality.
Finally, the tile is appended to the element with the ID "board".

Drag and drop event functions:
dragStart: Triggered when a tile is dragged.
It sets the currTile variable to the current tile being dragged and sets the data being dragged to the tile's ID.
dragOver and dragEnter: Prevents the default drag behavior to allow the tile to be dropped.
dragLeave: Currently an empty function, can be used to add custom behavior when the tile is dragged out of a drop target.
dragDrop: Triggered when a tile is dropped onto another tile.
It assigns the currently dragged tile's image source to currImg and the other tile's image source to otherImg.
Then, it swaps the image sources between the two tiles.
The number of turns is incremented, and the turn count is updated on the page.
dragEnd: Triggered when the dragging operation ends.
It resets the currTile and otherTile variables to null.
