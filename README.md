# Epicodus Intro to Programming Unit 3.4 Practice: Cryptosquare

#### Project 2 in Epicodus Unit 3.4: Roman Numerals.  01/28/2019 start date, 01/30/2019 initial finalization date.

#### By **Robert James "Jimmy" Gore**

## Description

The primary purpose of this project is to continue working with behavior-driven development in JavaScript, this project specifically working to demonstrate functionality of a cryptosquare with an output varying heavily on user input.  Specs will be listed below.

## Setup/Installation Requirements

* Install Git Bash for Git repository cloning of the project
* Install Atom for review and edit of Code
* To access repository for project and review code, first clone repository at the appropriate link, then use Git Bash and/or Atom to open the project folder.
* GitHub Repository link is https://github.com/RJGore92/behavior-driven-development.

## Known Bugs

No known bugs are present in this project.

## Assignment Specs

1. The project removes spacing and punctuation from user inputs (In: I don't care -> Out: Idontcare)
2. The entire message is downcased to lowercase (Idontcare -> idontcare)
3. The project looks at the length of the lowercase message (idontcare -> 9)
4. The project scripting determines how best to build a square or rectangle as close to square dimensions as possible.  Smaller samples of grids can be seen below.  (Size 9, output below using basic text to represent the grid)
(i)(d)(o)
(n)(t)(c)
(a)(r)(e)
5. The project's scripts then look at the number of rows and columns and determines the intervals of which to start encoding.  (Input is grid output from stage 4, output variables are 3 and 3 for loops)
6. Using the variables based on grid size, the JavaScript code proceeds to start encoding the message vertically, from top to bottom in priority, working from left to right in columns.  (input is the grid in stage 4, output in initial-stage encoding is inadtroce).
7. From this point in stage six, the output becomes split every 5th character with a space in between.  (Input is inadtroce, final output is inadt roce)


#### Square/rectangle size examples based on input size (inputs focus on letters and keep the grid size as close to a square as possible):

* An input with a length of 3 (after special characters and white space removed) will make a 2x2 grid with the lower right square empty.
* An input with a length of 6 (special characters and white space removed) will make a grid two wide and three tall.
* An input with a length of 7 will make a 3x3 grid with the rightmost squares on the lowest row empty.
* An input with a length of 10 will make a grid 4x3 in size with the lower row having three squares empty.

#### Below are output examples of encoded messages based on the following user inputs.  The encoded messages will always be divided with blocks of five letters, the last of which can be less than five characters in length.

* A user input provided with "dare" will convert to "drae" after conversion.
* A user input of "hello, I'm Jimmy Gore" will convert to "hoige imolm mrljy e"
* A user input provided in the example "don't compare yourself to others, compare yourself to the person you were yesterday" will convert to "daeer leweo rlref rerne fsyts rdtyt coooe acooo utnyy ouomr hyemr tpseo spsha eput" after encryption.

## Technologies Used

* Git Bash
* Atom
* HTML
* MD
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

Copyright (c) 2019 **Robert James "Jimmy" Gore**
