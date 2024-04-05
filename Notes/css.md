# CSS

## CSS stands for *Cascading Style Sheets*

### 04-05-2024

-- CSS class selector - A class selector is defined by a name with a dot directly in front of it, like this (e.g  .price) it is to target one specific class

-- CSS styling - To add multiple class selectors you should comma after each selector like this (.flavor, .dessert, .price)

-- CSS Styling - Flexbox is a one-dimensional CSS layout that can control the way items are spaced out and aligned within a container. To use it, give an element a display property of flex. This will make the element a flex container. Any direct children of a flex container are called flex items. For example (.gallery {display: flex;})

-- CSS styling - A selector is just the name of what you want to select like (coffee) and a class selector you start with a (.) like (.coffee)

-- CSS Styling - Flexbox has a main and cross axis. The main axis is defined by the flex-direction property, which has four possible values:
    o	row (default): horizontal axis with flex items from left to right
    o	row-reverse: horizontal axis with flex items from right to left
    o	column: vertical axis with flex items from top to bottom
    o	column-reverse: vertical axis with flex items from bottom to top 		
Note: The axes and directions will be different depending on the text direction. The values shown are for a left-to-right text direction.
The flex-wrap property determines how your flex items behave when the flex container is too small. Setting it to wrap will allow the items to wrap to the next row or column. nowrap (default) will prevent your items from wrapping and shrink them if needed.
The justify-content property determines how the items inside a flex container are positioned along the main axis, affecting their position and the space around them.
Here is an example of all of it in CSS code: For example (.gallery {display: flex;flex-direction: row;flex-wrap: wrap;})

