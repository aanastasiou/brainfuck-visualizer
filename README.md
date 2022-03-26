# Brainfuck Visualizer

Brainfuck Interpreter & Visualizer in Javascript.

## Features

* Visual indication of the operation currently executed
* Debug mode with full control over code execution with Start, Stop, Step & Continue buttons

...and, two additional features over the original version:

1. Load code via URL parameter `bf`
   - Check out this simple addition example: [`+>+[-<+>]`](https://aanastasiou.github.io/brainfuck-visualizer/?bf=%2B%3E%2B%2B%5B-%3C%2B%3E%5D#)
   
2. Modify wordlength & memory size by appending `@(wordlength:memory_size)` at the end 
   of a brainfuck program.
   - Number 9 (in base-10) over 3-bit memory cells (mod-8): [`+++++++++@(3,27)`](https://aanastasiou.github.io/brainfuck-visualizer/?bf=%2B%2B%2B%2B%2B%2B%2B%2B%2B%3E%2B%2B%5B-%3C%2B%3E%5D%40(3%3A27)#)
   - Addition over a minimal 5 cell "tape", with 3 bits per cell [`+++++++++>++++[-<+>]@(3:5)`](https://aanastasiou.github.io/brainfuck-visualizer/?bf=%2B%2B%2B%2B%2B%2B%2B%2B%2B%3E%2B%2B%2B%2B%5B-%3C%2B%3E%5D%40(3%3A5)#) 


## History
A few years ago, I was looking for a brainfuck visualiser for an experiment I was running 
and this was the best I came across. Unfortunately, by the time I looked for it again, the 
repository was gone. I managed to find this from a third user who had cloned it and based my 
derivation on it.

The original version listed the following as contributors:

- Fatih Erikli ([fatiherikli](http://github.com/fatiherikli))
- Henry Heikkinen ([rce](https://github.com/rce))
- Gabriele Cirulli ([gabrielecirulli](https://github.com/gabrielecirulli))
- Asger Hautop Drewsen ([tyilo](https://github.com/Tyilo))
- Dwillie ([dwille](https://github.com/dwillie))
- Eugene Sharygin ([eush77](https://github.com/eush77))

