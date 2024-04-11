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

##### 04-10-2024

-- CSS Styling - The box-sizing property is used to set this behavior. By default, the content-box model is used. With this model, when an element has a specific width, that width is calculated based only on the element's content. Padding and border values get added to the total width, so the element grows to accommodate these values.
Try setting box-sizing to content-box explicitly, with the global * selector. At this point, you will not see any changes, because you are using the default value
{box-sizing: content-box;}

-- CSS Styling - Even though your <div> has no text, it's still treated as a box with content. <div></div> 

-- CSS Styling - Variable declarations begin with two dashes (-) and are given a name and a value like this: --variable-name: value; To use a variable, put the variable name in parentheses with var in front of them like this: var(--variable-name). Whatever value you gave the variable will be applied to whatever property you use it on.
.bb1a {
    width: 70%;
    height: 10%;
    background-color: var(--building-color1);
}

-- CSS Styling – Fallback (To do a fallback in CSS for the font-family you need to put the font-family in quotes and then a space after the name and put a comma and then another space followed by the fallback for example). 
h1 {
font-family: 'Anton', sans-serif;
}

h2, h3, h4, h5, h6 {
font-family: 'Raleway', sans-serif;
}

-- CSS Styling - Shorthand declaration (Use the border shorthand declaration to give the .frame element a solid, black border with a width of 50px.) 
For example .            		  
frame {									
    border: 50px solid black;								
    } 

-- CSS Styling - The gap CSS shorthand property sets the gaps, also known as gutters, between rows and columns. The gap property and its row-gap and column-gap sub-properties provide this functionality for flex, grid, and multi-column layout. You apply the property to the container element

-- CSS Styling – The  ::after pseudo-element creates an element that is the last child of the selected element. You can use it to add an empty element after the last image. If you give it the same width as the images it will push the last image to the left when the gallery is in a two-column layout. Right now, it is in the center because you set justify-content: center on the flex container.
Example:
	.container::after {
  			content: "";
  			width: 860px;
					}

-- Hex Colors - With hex colors, 00 is 0% of that color, and FF is 100%. So #00FF00 translates to 0% red, 100% green, and 0% blue, and is the same as rgb(0, 255, 0).Lower the intensity of green by setting the green value of the hex color to 7F.          
