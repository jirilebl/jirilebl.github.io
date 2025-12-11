var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "diffyqs-3-3",
  "level": "1",
  "url": "diffyqs-3-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "notes_section",
  "level": "1",
  "url": "notes_section.html",
  "type": "Section",
  "number": "0.1",
  "title": "Notes about these notes",
  "body": " Notes about these notes   Note: A section for the instructor.  This book originated from my class notes for Math 286 at the University of Illinois at Urbana-Champaign (UIUC) in Fall 2008 and Spring 2009. It is a first course on differential equations for engineers. Using this book, I also taught Math 285 at UIUC, Math 20D at University of California, San Diego (UCSD), and Math 2233 and 4233 at Oklahoma State University (OSU). Normally these courses are taught with Edwards and Penney, Differential Equations and Boundary Value Problems: Computing and Modeling , or Boyce and DiPrima's Elementary Differential Equations and Boundary Value Problems , and this book aims to be more or less a drop-in replacement. Other books I used as sources of information and inspiration are E.L. Ince's classic (and inexpensive) Ordinary Differential Equations , Stanley Farlow's Differential Equations and Their Applications , now available from Dover, Berg and McGregor's Elementary Partial Differential Equations , and William Trench's free book Elementary Differential Equations with Boundary Value Problems . See the Further Reading chapter at the end of the book.    Organization  The organization of this book requires, to some degree, that the chapters be covered in order. Later chapters can be dropped. The dependence of the material covered is roughly:     There are a few references in chapters and to (some linear algebra), but these references are not essential and can be skimmed over, so can safely be dropped, while still covering chapters and . does not depend on except that the PDEs section makes a few references to , although it could, in theory, be covered separately. The more in-depth on linear algebra can replace the short review for a course that combines linear algebra and ODEs.    Typical types of courses  Several typical courses can be run with the book. There are the two original one-semester courses at UIUC, both cover ODEs as well as some PDEs. First course runs at 4 hours a week (Math 286):   Introduction ( ), ( – ), , , ( – ), (or or or ).  The second course at UIUC runs 3 hours a week (Math 285):   Introduction ( ), ( – ), , ( – ), (and maybe , , or ).  A semester-long course at 3 hours a week that does not cover either systems or PDEs will cover, beyond the introduction, , , , and , (with sections skipped as above). On the other hand, a typical course that covers systems will probably need to skip Laplace and power series and cover , , , and .  If sections need to be skipped in the beginning, a good core of the sections on single ODEs is: , – , , , , – .  The complete book can be covered at a reasonably fast pace at approximately 76 lectures (without ) or 86 lectures (with replacing ). This is not accounting for exams, review, or time spent in a computer lab. A two-quarter or a two-semester course can be easily run with the material. For example (with some sections perhaps strategically skipped):  Semester 1: Introduction , , , , . Semester 2: , , , .  A combined course on ODEs with linear algebra can run as:   Introduction , ( – ), , , (w\/o ), (possibly ).  The chapter on the Laplace transform ( ), the chapter on Sturm–Liouville ( ), the chapter on power series ( ), and the chapter on nonlinear systems ( ), are more or less interchangeable and can be treated as topics . If is covered, it may be best to place it right after , and is best covered right after . If time is short, the first two sections of make a reasonable self-contained unit.    Computer resources  The book's website or contains the following resources:    Interactive SAGE demos.    Online WeBWorK homeworks (using either your own WeBWorK installation or Edfinity) for most sections, customized for this book.    The PDFs of the figures used in this book.    YouTube videos and corresponding slides for some sections.    I used IODE IODE software ( ) in the UIUC courses. IODE is a free software package that works with Matlab (proprietary) or Octave (free software). The graphs in the book were made with the Genius Genius software software (see ).  The latex source of the book is also available for possible modification and customization at GitHub ( ).    Acknowledgments  Firstly, I would like to acknowledge Rick Laugesen. I used his handwritten class notes the first time I taught Math 286. My organization of this book through chapter 5, and the choice of material covered, is heavily influenced by his notes. Many examples and computations are taken from his notes. I am also heavily indebted to Rick for all the advice he has given me, not just on teaching Math 286. For spotting errors and other suggestions, I would also like to acknowledge (in no particular order): John P. D'Angelo, Sean Raleigh, Jessica Robinson, Michael Angelini, Leonardo Gomes, Jeff Winegar, Ian Simon, Thomas Wicklund, Eliot Brenner, Sean Robinson, Jannett Susberry, Dana Al-Quadi, Cesar Alvarez, Cem Bagdatlioglu, Nathan Wong, Alison Shive, Shawn White, Wing Yip Ho, Joanne Shin, Gladys Cruz, Jonathan Gomez, Janelle Louie, Navid Froutan, Grace Victorine, Paul Pearson, Jared Teague, Ziad Adwan, Martin Weilandt, Sönmez Şahutoğlu, Pete Peterson, Thomas Gresham, Prentiss Hyde, Jai Welch, Simon Tse, Andrew Browning, James Choi, Dusty Grundmeier, John Marriott, Jim Kruidenier, Barry Conrad, Wesley Snider, Colton Koop, Sarah Morse, Erik Boczko, Asif Shakeel, Chris Peterson, Nicholas Hu, Paul Seeburger, Jonathan McCormick, David Leep, William Meisel, Shishir Agrawal, Tom Wan, Andres Valloud, Martin Irungu, Justin Corvino, Tai-Peng Tsai, Santiago Mendoza Reyes, Glen Pugh, Michael Tran, Heber Farnsworth, Tamás Zsoldos, Mark Mills, George Ballinger, and probably others I have forgotten. Finally, I would like to acknowledge NSF grants DMS-0900885 and DMS-1362337.   "
},
{
  "id": "introde_section",
  "level": "1",
  "url": "introde_section.html",
  "type": "Section",
  "number": "0.2",
  "title": "Introduction to differential equations",
  "body": " Introduction to differential equations   Note: more than 1 lecture, §1.1 in , chapter 1 in    Differential equations  The laws of physics are generally written down as differential equations. Therefore, all of science and engineering uses differential equations to some degree. Differential equations are essential to understanding almost anything you will study in your science and engineering classes. You can think of mathematics as the language of science, and differential equations are one of the most important parts of this language as far as science and engineering are concerned. As an analogy, suppose all your classes from now on were given in Swahili. It would be important to first learn Swahili, or you would have a very tough time getting a good grade in your classes.  A differential equation differential equation is simply an equation that involves not only an unknown variable, but also its derivatives. You have seen and even solved many differential equations already in calculus perhaps without knowing about it. Here is an example you may not have seen: The unknown, , is the dependent variable dependent variable and is the independent variable independent variable . That is, is a function of . Equation is an example of a first-order differential equation first-order differential equation , since it involves only the first derivative of the dependent variable. This equation arises from Newton's law of cooling where the ambient temperature oscillates with time.    Solutions of differential equations  Solving the differential equation means finding in terms of . That is, we want to find a function of , which we call , such that when we plug , , and into , the equation holds; that is, the left-hand side equals the right-hand side. It is the same idea as it would be for a normal (algebraic) equation of just and . We claim that is a solution solution . How do we check? We simply plug into equation ! First we need to compute . We find that . Now let us compute the left-hand side of . Yay! We got precisely the right-hand side. But there is more! We claim is also a solution. Let us try, We plug into the left-hand side of  And it works yet again!  So there can be many different solutions. For this equation, all solutions can be written in the form for some constant . Different constants will give different solutions, so there are really infinitely many possible solutions. See for the graph of a few of these solutions. We will see how we find these solutions in a later section.   A few solutions of .    Solving differential equations can be quite hard. There is no general method that solves every differential equation. We will generally focus on how to get exact formulas for solutions of certain differential equations, but we will also spend a little bit of time on getting approximate solutions. And we will spend some time on understanding the equations without solving them.  Most of this book is dedicated to ordinary differential equations ordinary differential equation or ODEs ODE , that is, equations with only one independent variable, where derivatives are only with respect to this one variable. If there are several independent variables, we get partial differential equations partial differential equation or PDEs PDE .  Even for ODEs, which are very well understood, it is not a simple question of turning a crank to get solutions. When you can find exact solutions, they are usually preferable to approximate solutions. It is important to understand how such solutions are found. Although in real applications you will leave much of the actual calculations to computers, you need to understand what they are doing. It is often necessary to simplify or transform your equations into something that a computer can understand and solve. You may even need to make certain assumptions and changes in your model to achieve this.  To be a successful engineer or scientist, you will be required to solve problems in your job that you have never seen before. It is important to learn problem solving techniques, so that you may apply those techniques to new problems. A common mistake is to expect to learn some prescription for solving all the problems you will encounter in your later career. This course is no exception.    Differential equations in practice     How do we use differential equations in science and engineering? First, we have some real-world problem real-world problem we wish to understand. We make some simplifying assumptions and create a mathematical model mathematical model . That is, we translate the real-world situation into a differential equation (or equations). Then we use mathematics to get some sort of a mathematical solution mathematical solution . There is still something left to do. We must interpret the results. We have to figure out what the mathematical solution says about the real-world problem we started with.  Formulating the mathematical model and interpreting the results is what you do in your physics and engineering classes. In this course, we focus mostly on the mathematical analysis. Sometimes we will work with simple real-world examples to have some intuition and motivation about what we are doing. Let us look at an example of the entire process.    One of the most basic differential equations is the exponential growth model exponential growth model . Let denote the population of some bacteria on a Petri dish. We assume that there is enough food and enough space. Then the rate of growth of the bacteria is proportional to the population—a larger population grows faster. Let denote time (say in seconds) and the population. Our model is for some positive constant .  Suppose there are 100 bacteria at time 0 and 200 bacteria 10 seconds later. How many bacteria will there be 1 minute from time 0 (in 60 seconds)?  First we need to solve the equation. We claim that a solution is given by where is a constant. Let us try: And it really is a solution.  OK, now what? We do not know , and we do not know . But we know something. We know , and we know . We plug these conditions in and see what happens: Therefore, or . So At one minute, , the population is . See .   Bacteria growth in the first 60 seconds.    Let us interpret the results. Does our solution mean that there must be exactly 6400 bacteria on the plate at 60s? No! We made assumptions that might not be true exactly, just approximately. If our assumptions are reasonable, then there will be approximately 6400 bacteria. Also, in real life is a discrete quantity, that is, a whole number. However, our model has no problem saying that for example at 61 seconds, .    Normally, the in is given, and we want to solve the equation for some initial condition initial condition . For example, the problem could be: Solve the equation (so ) subject to (the initial condition). Then the solution is (exercise) We call  the general solution general solution , as every solution of the equation can be written in this form for some constant . We need an initial condition to find out what is, in order to find the particular solution particular solution we are looking for, in this case, . Generally, when we say particular solution, we just mean some solution.  In real life, parameters such as must often first be somehow computed or estimated. The example above shows how finding an analytic solution to the differential equation is useful in finding these parameters.    Four fundamental equations  A few equations appear often and it is useful to just memorize what their solutions are. Let us call them the four fundamental equations four fundamental equations . Their solutions are reasonably easy to guess by recalling properties of exponentials, sines, and cosines. They are also simple to check, which is something that you should always do. No need to wonder if you remembered the solution correctly.  The first such equation is for some constant . Here is the dependent and the independent variable. The general solution for this equation is We saw above that this function is a solution, although we used different variable names.  Next, we have for some constant . The general solution for this equation is     Check that the given is really a solution to the equation above.    Next, take the second-order differential equation second-order differential equation  for some constant . The general solution for this equation is Since the equation is a second-order differential equation, we have two constants in our general solution.    Check that the given is really a solution to the equation above.    Finally, consider the second-order differential equation for some constant . The general solution for this equation is or   For those who do not know, and are defined by They are called the hyperbolic cosine hyperbolic cosine and hyperbolic sine hyperbolic sine . These functions are sometimes easier to work with than exponentials. They have some nice familiar properties such as , , and (no, that is not a typo) and .    Check that both forms of the given are really solutions to the equation above.      In equations of higher order, you get more constants you must solve for to get a particular solution and hence you need more initial conditions. The equation has the general solution ; simply integrate twice and don't forget about the constant of integration. Consider the initial conditions and . We plug in our general solution and solve for the constants: In other words, is the particular solution we seek.    An interesting note about : The graph of is the exact shape of a hanging chain. This shape is called a catenary catenary . Contrary to popular belief, this is not a parabola. If you invert the graph of , it is also the ideal arch for supporting its weight—a parabola would not work. For example, per the National Park Service, the exact formula used by the architects of the Gateway Arch in Saint Louis is (a so-called weighted catenary)       Show that is a solution to .      Show that is not a solution to .      Is a solution to ? Justify.      Let . Now try a solution of the form for some (unknown) constant . Is this a solution for some ? If so, find all such .      Verify that is a solution to . Find to solve for the initial condition .      Verify that is a solution to . Find and to solve for the initial conditions and .      Find a solution to using your knowledge of derivatives of functions that you know from basic calculus.      Solve:                            Is there a solution to , such that ?      The population of city X was 100 thousand 20 years ago, and it was 120 thousand 10 years ago. Assuming constant growth, you can use the exponential population model (like for the bacteria). What do you estimate the population is now?      Suppose that a football coach gets a salary of one million dollars now, and a raise of every year (so exponential model, like population of bacteria). Let be the salary in millions of dollars, and is time in years.    What are and ?    Approximately how many years will it take for the salary to be 10 million?    Approximately how many years will it take for the salary to be 20 million?    Approximately how many years will it take for the salary to be 30 million?      Note: Exercises with numbers 101 and higher have solutions.    Show that is a solution to .    Compute and . Then .      Is a solution to ? Justify.    Yes.      Let . Try a solution of the form . Is this a solution for some ? If so, find all such .     is a solution for and .      Verify that is a solution to . Find and so that satisfies and .     ,       Solve and .           Solve:                          a)  b)  c)  d)      "
},
{
  "id": "intro_plotsfig",
  "level": "2",
  "url": "introde_section.html#intro_plotsfig",
  "type": "Figure",
  "number": "1",
  "title": "",
  "body": " A few solutions of .   "
},
{
  "id": "introde_section-5-5",
  "level": "2",
  "url": "introde_section.html#introde_section-5-5",
  "type": "Example",
  "number": "0.2.1",
  "title": "",
  "body": "  One of the most basic differential equations is the exponential growth model exponential growth model . Let denote the population of some bacteria on a Petri dish. We assume that there is enough food and enough space. Then the rate of growth of the bacteria is proportional to the population—a larger population grows faster. Let denote time (say in seconds) and the population. Our model is for some positive constant .  Suppose there are 100 bacteria at time 0 and 200 bacteria 10 seconds later. How many bacteria will there be 1 minute from time 0 (in 60 seconds)?  First we need to solve the equation. We claim that a solution is given by where is a constant. Let us try: And it really is a solution.  OK, now what? We do not know , and we do not know . But we know something. We know , and we know . We plug these conditions in and see what happens: Therefore, or . So At one minute, , the population is . See .   Bacteria growth in the first 60 seconds.    Let us interpret the results. Does our solution mean that there must be exactly 6400 bacteria on the plate at 60s? No! We made assumptions that might not be true exactly, just approximately. If our assumptions are reasonable, then there will be approximately 6400 bacteria. Also, in real life is a discrete quantity, that is, a whole number. However, our model has no problem saying that for example at 61 seconds, .   "
},
{
  "id": "subsection_fourfundamental-5",
  "level": "2",
  "url": "introde_section.html#subsection_fourfundamental-5",
  "type": "Exercise",
  "number": "0.2.1",
  "title": "",
  "body": "  Check that the given is really a solution to the equation above.   "
},
{
  "id": "subsection_fourfundamental-7",
  "level": "2",
  "url": "introde_section.html#subsection_fourfundamental-7",
  "type": "Exercise",
  "number": "0.2.2",
  "title": "",
  "body": "  Check that the given is really a solution to the equation above.   "
},
{
  "id": "subsection_fourfundamental-10",
  "level": "2",
  "url": "introde_section.html#subsection_fourfundamental-10",
  "type": "Exercise",
  "number": "0.2.3",
  "title": "",
  "body": "  Check that both forms of the given are really solutions to the equation above.   "
},
{
  "id": "subsection_fourfundamental-11",
  "level": "2",
  "url": "introde_section.html#subsection_fourfundamental-11",
  "type": "Example",
  "number": "0.2.2",
  "title": "",
  "body": "  In equations of higher order, you get more constants you must solve for to get a particular solution and hence you need more initial conditions. The equation has the general solution ; simply integrate twice and don't forget about the constant of integration. Consider the initial conditions and . We plug in our general solution and solve for the constants: In other words, is the particular solution we seek.   "
},
{
  "id": "introde_section-7-1",
  "level": "2",
  "url": "introde_section.html#introde_section-7-1",
  "type": "Exercise",
  "number": "0.2.4",
  "title": "",
  "body": "  Show that is a solution to .   "
},
{
  "id": "introde_section-7-2",
  "level": "2",
  "url": "introde_section.html#introde_section-7-2",
  "type": "Exercise",
  "number": "0.2.5",
  "title": "",
  "body": "  Show that is not a solution to .   "
},
{
  "id": "introde_section-7-3",
  "level": "2",
  "url": "introde_section.html#introde_section-7-3",
  "type": "Exercise",
  "number": "0.2.6",
  "title": "",
  "body": "  Is a solution to ? Justify.   "
},
{
  "id": "introde_section-7-4",
  "level": "2",
  "url": "introde_section.html#introde_section-7-4",
  "type": "Exercise",
  "number": "0.2.7",
  "title": "",
  "body": "  Let . Now try a solution of the form for some (unknown) constant . Is this a solution for some ? If so, find all such .   "
},
{
  "id": "introde_section-7-5",
  "level": "2",
  "url": "introde_section.html#introde_section-7-5",
  "type": "Exercise",
  "number": "0.2.8",
  "title": "",
  "body": "  Verify that is a solution to . Find to solve for the initial condition .   "
},
{
  "id": "introde_section-7-6",
  "level": "2",
  "url": "introde_section.html#introde_section-7-6",
  "type": "Exercise",
  "number": "0.2.9",
  "title": "",
  "body": "  Verify that is a solution to . Find and to solve for the initial conditions and .   "
},
{
  "id": "introde_section-7-7",
  "level": "2",
  "url": "introde_section.html#introde_section-7-7",
  "type": "Exercise",
  "number": "0.2.10",
  "title": "",
  "body": "  Find a solution to using your knowledge of derivatives of functions that you know from basic calculus.   "
},
{
  "id": "introde_section-7-8",
  "level": "2",
  "url": "introde_section.html#introde_section-7-8",
  "type": "Exercise",
  "number": "0.2.11",
  "title": "",
  "body": "  Solve:                         "
},
{
  "id": "introde_section-7-9",
  "level": "2",
  "url": "introde_section.html#introde_section-7-9",
  "type": "Exercise",
  "number": "0.2.12",
  "title": "",
  "body": "  Is there a solution to , such that ?   "
},
{
  "id": "introde_section-7-10",
  "level": "2",
  "url": "introde_section.html#introde_section-7-10",
  "type": "Exercise",
  "number": "0.2.13",
  "title": "",
  "body": "  The population of city X was 100 thousand 20 years ago, and it was 120 thousand 10 years ago. Assuming constant growth, you can use the exponential population model (like for the bacteria). What do you estimate the population is now?   "
},
{
  "id": "introde_section-7-11",
  "level": "2",
  "url": "introde_section.html#introde_section-7-11",
  "type": "Exercise",
  "number": "0.2.14",
  "title": "",
  "body": "  Suppose that a football coach gets a salary of one million dollars now, and a raise of every year (so exponential model, like population of bacteria). Let be the salary in millions of dollars, and is time in years.    What are and ?    Approximately how many years will it take for the salary to be 10 million?    Approximately how many years will it take for the salary to be 20 million?    Approximately how many years will it take for the salary to be 30 million?     "
},
{
  "id": "introde_section-7-13",
  "level": "2",
  "url": "introde_section.html#introde_section-7-13",
  "type": "Exercise",
  "number": "0.2.101",
  "title": "",
  "body": "  Show that is a solution to .    Compute and . Then .   "
},
{
  "id": "introde_section-7-14",
  "level": "2",
  "url": "introde_section.html#introde_section-7-14",
  "type": "Exercise",
  "number": "0.2.102",
  "title": "",
  "body": "  Is a solution to ? Justify.    Yes.   "
},
{
  "id": "introde_section-7-15",
  "level": "2",
  "url": "introde_section.html#introde_section-7-15",
  "type": "Exercise",
  "number": "0.2.103",
  "title": "",
  "body": "  Let . Try a solution of the form . Is this a solution for some ? If so, find all such .     is a solution for and .   "
},
{
  "id": "introde_section-7-16",
  "level": "2",
  "url": "introde_section.html#introde_section-7-16",
  "type": "Exercise",
  "number": "0.2.104",
  "title": "",
  "body": "  Verify that is a solution to . Find and so that satisfies and .     ,    "
},
{
  "id": "introde_section-7-17",
  "level": "2",
  "url": "introde_section.html#introde_section-7-17",
  "type": "Exercise",
  "number": "0.2.105",
  "title": "",
  "body": "  Solve and .        "
},
{
  "id": "introde_section-7-18",
  "level": "2",
  "url": "introde_section.html#introde_section-7-18",
  "type": "Exercise",
  "number": "0.2.106",
  "title": "",
  "body": "  Solve:                          a)  b)  c)  d)    "
},
{
  "id": "classification_section",
  "level": "1",
  "url": "classification_section.html",
  "type": "Section",
  "number": "0.3",
  "title": "Classification of differential equations",
  "body": " Classification of differential equations  Note: less than 1 lecture or left as reading, §1.3 in  There are many types of differential equations, and we classify them into different categories based on their properties. Let us quickly go over the most basic classification. We already saw the distinction between ordinary and partial differential equations:     Ordinary differential equations  Ordinary differential equations ODE (ODE) are equations where the derivatives are taken with respect to only one variable. That is, there is only one independent variable.     Partial differential equations  Partial differential equations PDE (PDE) are equations that depend on partial derivatives of several variables. That is, there are several independent variables.    Let us see some examples of ordinary differential equations: And of partial differential equations:   If there are several equations working together, we have a so-called system of differential equations system of differential equations . For example, is a system of ordinary differential equations. Maxwell's equations Maxwell's equations for electromagnetics, are a system of partial differential equations. The divergence operator and the curl operator can be written out in partial derivatives of the functions involved in the , , and variables.  The next bit of information is the order order of the equation (or system). The order is the order of the largest derivative that appears. If the highest derivative that appears is the first derivative, the equation is of first order. If the highest derivative that appears is the second derivative, then the equation is of second order. For example, Newton's law of cooling above is a first-order equation, while the mechanical vibrations equation is a second-order equation. The equation governing transversal vibrations in a beam, is a fourth-order partial differential equation. It is of fourth order as at least one derivative is the fourth derivative. It does not matter that the derivative in is only of second order.  In the first chapter, we will start attacking first-order ordinary differential equations, that is, equations of the form . In general, lower-order equations are easier to work with and have simpler behavior, which is why we start with them.  We also distinguish how the dependent variables appear in the equation (or system). In particular, an equation is linear linear equation if the dependent variable (or variables) and their derivatives appear linearly, that is, only as first powers, they are not multiplied together, and no other functions of the dependent variables appear. The equation is a sum of terms, where each term is a function of the independent variables or a function of the independent variables multiplied by a dependent variable or one of its derivatives. An ordinary differential equation is linear if it can be put into the form The functions , , ..., are called the coefficients coefficients . The equation is allowed to depend arbitrarily on the independent variable. So is a linear equation as and its derivatives only appear linearly.  All the equations and systems given as examples above are linear. Linearity may not be immediately obvious for Maxwell's equations unless you write out the divergence and curl in terms of partial derivatives. If an equation is not linear, we say it is nonlinear nonlinear equation . Let us see some example nonlinear equations. Burger's equation Burger's equation , is a nonlinear second-order partial differential equation. It is nonlinear because and are multiplied together. The equation is a nonlinear first-order ordinary differential equation as there is a second power of the dependent variable . Another nonlinear ODE is the pendulum equation which is nonlinear as the dependent variable appears inside a function. Nonlinear equations are notoriously difficult to solve and their solutions may behave in strange and unexpected ways. Perhaps you have heard of chaos theory and butterflies in the Amazon causing hurricanes in the Atlantic, all due to nonlinear equations. So sometimes we study related linear equations, such as for the pendulum, instead. The solutions to and are different, but they are close for some short time, and the linear equation is far simpler to solve and analyze.  A linear equation is further called homogeneous homogeneous if all terms depend on the dependent variable. That is, if no term is a function of the independent variables alone. Otherwise, the equation is called nonhomogeneous nonhomogeneous or inhomogeneous inhomogeneous . For example, the exponential growth equation, the wave equation, or the transport equation above are homogeneous. The mechanical vibrations equation above is nonhomogeneous as long as is not the zero function. Similarly, if the ambient temperature is nonzero, Newton's law of cooling is nonhomogeneous. A homogeneous linear ODE can be put into the form Compare with and notice there is no function .  If the coefficients of a linear equation are actually constant functions, then the equation is said to have constant coefficients constant-coefficient . The coefficients are the functions multiplying the dependent variable(s) or one of its derivatives, not the function standing alone. A constant-coefficient nonhomogeneous ODE is an equation of the form where are all constants, but may depend on the independent variable . The mechanical vibrations equation is a constant-coefficient nonhomogeneous second-order ODE. The same nomenclature applies to PDEs, so the transport equation, heat equation and wave equation are all examples of constant-coefficient linear PDEs. A linear equation whose coefficients are not constants is sometimes called a variable-coefficient variable-coefficient equation.  Finally, an equation (or system) is called autonomous autonomous if the equation does not depend on the independent variable. For autonomous ordinary differential equations, the independent variable is then thought of as time. An autonomous equation means an equation that does not change with time. For example, Newton's law of cooling is autonomous, so are the equations and . On the other hand, mechanical vibrations (as long as is nonconstant) or are not autonomous. A general first-order autonomous ODE would have the form      Classify the following equations. Are they ODEs or PDEs? Is it an equation or a system? What is the order? Is it linear or nonlinear, and if it is linear, is it homogeneous, constant-coefficient? If it is an ODE, is it autonomous?                                      If is a vector, we have the divergence and the curl . Notice that the curl of a vector is still a vector. Write out Maxwell's equations in terms of partial derivatives and classify the system.      Suppose is a linear function of two variables, that is, for constants and . Suppose . Classify equations of the form .      Write down an explicit example of a third-order, linear, variable-coefficient (i.e. not constant-coefficient), nonautonomous, nonhomogeneous system of two ODEs such that every derivative that could appear, does appear.      Classify the following equations. Are they ODEs or PDEs? Is it an equation or a system? What is the order? Is it linear or nonlinear, and if it is linear, is it homogeneous, constant-coefficient? If it is an ODE, is it autonomous?                                    a) PDE, equation, -order, linear, nonhomogeneous, constant-coefficient. b) ODE, equation, -order, linear, nonhomogeneous, not constant-coefficient, not autonomous. c) ODE, equation, -order, linear, homogeneous, constant-coefficient, autonomous. d) ODE, equation, -order, linear, nonhomogeneous, constant-coefficient, autonomous. e) ODE, system, -order, nonlinear. f) PDE, equation, -order, nonlinear.      Write down the general zero th-order linear ordinary differential equation. Write down the general solution.    equation: , solution: .      For which is linear? Hint: There are two answers.     or      "
},
{
  "id": "classification_section-14-1",
  "level": "2",
  "url": "classification_section.html#classification_section-14-1",
  "type": "Exercise",
  "number": "0.3.1",
  "title": "",
  "body": "  Classify the following equations. Are they ODEs or PDEs? Is it an equation or a system? What is the order? Is it linear or nonlinear, and if it is linear, is it homogeneous, constant-coefficient? If it is an ODE, is it autonomous?                                   "
},
{
  "id": "classification_section-14-2",
  "level": "2",
  "url": "classification_section.html#classification_section-14-2",
  "type": "Exercise",
  "number": "0.3.2",
  "title": "",
  "body": "  If is a vector, we have the divergence and the curl . Notice that the curl of a vector is still a vector. Write out Maxwell's equations in terms of partial derivatives and classify the system.   "
},
{
  "id": "classification_section-14-3",
  "level": "2",
  "url": "classification_section.html#classification_section-14-3",
  "type": "Exercise",
  "number": "0.3.3",
  "title": "",
  "body": "  Suppose is a linear function of two variables, that is, for constants and . Suppose . Classify equations of the form .   "
},
{
  "id": "classification_section-14-4",
  "level": "2",
  "url": "classification_section.html#classification_section-14-4",
  "type": "Exercise",
  "number": "0.3.4",
  "title": "",
  "body": "  Write down an explicit example of a third-order, linear, variable-coefficient (i.e. not constant-coefficient), nonautonomous, nonhomogeneous system of two ODEs such that every derivative that could appear, does appear.   "
},
{
  "id": "classification_section-14-5",
  "level": "2",
  "url": "classification_section.html#classification_section-14-5",
  "type": "Exercise",
  "number": "0.3.101",
  "title": "",
  "body": "  Classify the following equations. Are they ODEs or PDEs? Is it an equation or a system? What is the order? Is it linear or nonlinear, and if it is linear, is it homogeneous, constant-coefficient? If it is an ODE, is it autonomous?                                    a) PDE, equation, -order, linear, nonhomogeneous, constant-coefficient. b) ODE, equation, -order, linear, nonhomogeneous, not constant-coefficient, not autonomous. c) ODE, equation, -order, linear, homogeneous, constant-coefficient, autonomous. d) ODE, equation, -order, linear, nonhomogeneous, constant-coefficient, autonomous. e) ODE, system, -order, nonlinear. f) PDE, equation, -order, nonlinear.   "
},
{
  "id": "classification_section-14-6",
  "level": "2",
  "url": "classification_section.html#classification_section-14-6",
  "type": "Exercise",
  "number": "0.3.102",
  "title": "",
  "body": "  Write down the general zero th-order linear ordinary differential equation. Write down the general solution.    equation: , solution: .   "
},
{
  "id": "classification_section-14-7",
  "level": "2",
  "url": "classification_section.html#classification_section-14-7",
  "type": "Exercise",
  "number": "0.3.103",
  "title": "",
  "body": "  For which is linear? Hint: There are two answers.     or    "
},
{
  "id": "integralsols_section",
  "level": "1",
  "url": "integralsols_section.html",
  "type": "Section",
  "number": "1.1",
  "title": "Integrals as solutions",
  "body": " Integrals as solutions  Note: 1 lecture (or less), §1.2 in , covered in §1.2 and §2.1 in  A first-order ODE is an equation of the form or just In general, there is no simple formula or procedure one can follow to find solutions. In the next few lectures, we will look at cases where solutions are not difficult to obtain. In this section, we consider the case when is a function of alone, that is, the equation is We can integrate (antidifferentiate) both sides of the equation with respect to : that is, This is actually the general solution. So to solve , we find some antiderivative of and then we add an arbitrary constant to get the general solution.    Find the general solution of .  Elementary calculus tells us that the general solution must be . Let us check by differentiating: . We got precisely our equation back.    Now is a good time to discuss a point about calculus notation and terminology. Calculus textbooks muddy the waters by talking about the integral as primarily the so-called indefinite integral. The indefinite integral indefinite integral is really the antiderivative antiderivative (in fact the whole one-parameter family of antiderivatives). There really exists only one integral and that is the definite integral. The only reason for the indefinite integral notation is that we can always write an antiderivative as a definite integral. That is, by the fundamental theorem of calculus, we can always write as Hence the terminology to integrate integrate when we may really mean to antidifferentiate antidifferentiate . Integration is just one way to compute the antiderivative (and it is a way that always works, see the following examples). Integration is defined as the area under the graph—it only happens to also compute antiderivatives. For the sake of consistency, we will keep using the indefinite integral notation when we want an antiderivative, and you should always think of the definite integral as a way to write it.  Normally, we also have an initial condition such as for some two numbers and ( is often 0, but not always). We can then write the solution as a definite integral in a nice way. Suppose our problem is , . Then the solution is Let us check! We compute via the fundamental theorem of calculus, and by Jupiter, is a solution. Is it the one satisfying the initial condition? Well, . It is!  Do note that the definite integral and the indefinite integral (antidifferentiation) are completely different beasts. The definite integral always evaluates to a number. Therefore, is a formula we can plug into the calculator or a computer, and it will be happy to calculate specific values for us. We will easily be able to plot the solution and work with it just like with any other function. It is not so crucial to always find a closed form for the antiderivative.    Solve   By the preceding discussion, the solution must be Here is a good way to make fun of your friends taking second-semester calculus. Tell them to find the closed form solution. Ha ha ha (bad math joke). It is not possible (in closed form). There is absolutely nothing wrong with writing the solution as a definite integral. This particular integral is in fact very important in statistics.    Using this method, we can also solve equations of the form We write the equation in Leibniz notation Leibniz notation : We use the inverse function theorem from calculus to switch the roles of and , that is, we treat as a function of and find What we are doing seems like algebra with and . It is tempting to just do algebra with and as if they were numbers. And in this case it does work. Be careful, however, as this sort of hand-waving calculation can lead to trouble, especially when more than one independent variable is involved. At this point, we integrate with respect to , That is not quite the form we wanted the solution in, so we next try to solve for .    Previously, we guessed (for some ) has the solution . We could have found the solution by integrating. First we note that is a solution. Henceforth, we assume . We write We integrate in to obtain where is an arbitrary constant. Now we solve for (actually for ). If we replace with an arbitrary constant , we can get rid of the absolute value bars (which we can do as was arbitrary). In this way, we also incorporate the solution . We get the same general solution as we guessed before, .      Find the general solution of .  First we note that is a solution. We can now assume that . Write We integrate to get We solve for . So the general solution is Note the singularities of the solution. If, for example, , then the solution blows up as we approach . See . Generally, it is hard to tell from just looking at the equation itself how the solution is going to behave. The equation is very nice and defined everywhere, but the solution is only defined on the interval or . Usually when this happens, we only consider the solution on one of these intervals and not both. For example, if we impose an initial condition , then the solution is , and we consider this solution only for on the interval , because our initial (that is, ) is in this interval. In the figure, it is the left side of the graph.   Plot of .    On the other hand, if we impose the initial condition instead, then we again get the solution . Now, however, it is the right hand side of the graph, that is, it is defined on the interval , as that is the interval containing , the initial .    Classical problems leading to differential equations solvable by integration are problems dealing with velocity velocity , acceleration acceleration , and distance distance . You have surely seen these problems before in your calculus class.    Suppose a car drives at a speed of meters per second, where is time in seconds. How far did the car get in 2 seconds (starting at )? How far in 10 seconds?  Let denote the distance the car traveled. The equation is We just integrate this equation to get that We still need to figure out . We know that when , then . That is, . So Thus and Now we just plug in to get where the car is at 2 and at 10 seconds. We obtain       Suppose that the car accelerates at . At time the car is at the 1 meter mark and is traveling at 10 . Where is the car at time ?  Well, this is actually a second-order problem. If is the distance traveled, then is the velocity, and is the acceleration. The equation with initial conditions is We can add a new dependent variable and declare that . Then we solve Once we find , we solve , to find . We leave the integration to the reader.      Solve for , then solve for . Find to answer the question.       Solve for .      Solve for .      Solve for .      Solve for .       (little harder) Solve for .      Solve for .       (harder) Solve for , .      A spaceship is traveling at the speed  ( is time in seconds). It is pointing directly away from earth and at time it is 1000 kilometers from earth. How far from earth is it at one minute from time ?      Solve , . It is OK to leave your answer as a definite integral.      A dropped ball accelerates downwards at a constant rate meters per second squared. Set up the differential equation for the height above ground in meters. Then supposing meters, how long does it take for the ball to hit the ground.      Find the general solution of , and then .      Solve and .           Solve , .           Solve , .           Sid is in a car traveling at speed miles per hour away from Las Vegas, where is in hours. At , Sid is 10 miles away from Vegas. How far from Vegas is Sid 2 hours later?    170      Solve , , where is a positive integer. Hint: You have to consider different cases.    If , then . If , then .      The rate of change of the volume of a snowball that is melting is proportional to the surface area of the snowball. Suppose the snowball is perfectly spherical. The volume (in centimeters cubed) of a ball of radius centimeters is . The surface area is . Set up the differential equation for how the radius is changing. Then, suppose that at time minutes, the radius is 10 centimeters. After 5 minutes, the radius is 8 centimeters. At what time will the snowball be completely melted?    The equation is for some constant . The snowball will be completely melted in 25 minutes from time .      Find the general solution to . How many distinct constants do you need?     , so 4 constants.     "
},
{
  "id": "integralsols_section-4",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-4",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  Find the general solution of .  Elementary calculus tells us that the general solution must be . Let us check by differentiating: . We got precisely our equation back.   "
},
{
  "id": "integralsols_section-8",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-8",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  Solve   By the preceding discussion, the solution must be Here is a good way to make fun of your friends taking second-semester calculus. Tell them to find the closed form solution. Ha ha ha (bad math joke). It is not possible (in closed form). There is absolutely nothing wrong with writing the solution as a definite integral. This particular integral is in fact very important in statistics.   "
},
{
  "id": "integralsols_section-10",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-10",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "  Previously, we guessed (for some ) has the solution . We could have found the solution by integrating. First we note that is a solution. Henceforth, we assume . We write We integrate in to obtain where is an arbitrary constant. Now we solve for (actually for ). If we replace with an arbitrary constant , we can get rid of the absolute value bars (which we can do as was arbitrary). In this way, we also incorporate the solution . We get the same general solution as we guessed before, .   "
},
{
  "id": "integralsols_section-11",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-11",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": "  Find the general solution of .  First we note that is a solution. We can now assume that . Write We integrate to get We solve for . So the general solution is Note the singularities of the solution. If, for example, , then the solution blows up as we approach . See . Generally, it is hard to tell from just looking at the equation itself how the solution is going to behave. The equation is very nice and defined everywhere, but the solution is only defined on the interval or . Usually when this happens, we only consider the solution on one of these intervals and not both. For example, if we impose an initial condition , then the solution is , and we consider this solution only for on the interval , because our initial (that is, ) is in this interval. In the figure, it is the left side of the graph.   Plot of .    On the other hand, if we impose the initial condition instead, then we again get the solution . Now, however, it is the right hand side of the graph, that is, it is defined on the interval , as that is the interval containing , the initial .   "
},
{
  "id": "integralsols_section-13",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-13",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": "  Suppose a car drives at a speed of meters per second, where is time in seconds. How far did the car get in 2 seconds (starting at )? How far in 10 seconds?  Let denote the distance the car traveled. The equation is We just integrate this equation to get that We still need to figure out . We know that when , then . That is, . So Thus and Now we just plug in to get where the car is at 2 and at 10 seconds. We obtain    "
},
{
  "id": "integralsols_section-14",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-14",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "  Suppose that the car accelerates at . At time the car is at the 1 meter mark and is traveling at 10 . Where is the car at time ?  Well, this is actually a second-order problem. If is the distance traveled, then is the velocity, and is the acceleration. The equation with initial conditions is We can add a new dependent variable and declare that . Then we solve Once we find , we solve , to find . We leave the integration to the reader.   "
},
{
  "id": "integralsols_section-15",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-15",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  Solve for , then solve for . Find to answer the question.   "
},
{
  "id": "integralsols_section-16-1",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-1",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "  Solve for .   "
},
{
  "id": "integralsols_section-16-2",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-2",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": "  Solve for .   "
},
{
  "id": "integralsols_section-16-3",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-3",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": "  Solve for .   "
},
{
  "id": "integralsols_section-16-4",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-4",
  "type": "Exercise",
  "number": "1.1.5",
  "title": "",
  "body": "  Solve for .   "
},
{
  "id": "integralsols_section-16-5",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-5",
  "type": "Exercise",
  "number": "1.1.6",
  "title": "",
  "body": "   (little harder) Solve for .   "
},
{
  "id": "integralsols_section-16-6",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-6",
  "type": "Exercise",
  "number": "1.1.7",
  "title": "",
  "body": "  Solve for .   "
},
{
  "id": "integralsols_section-16-7",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-7",
  "type": "Exercise",
  "number": "1.1.8",
  "title": "",
  "body": "   (harder) Solve for , .   "
},
{
  "id": "integralsols_section-16-8",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-8",
  "type": "Exercise",
  "number": "1.1.9",
  "title": "",
  "body": "  A spaceship is traveling at the speed  ( is time in seconds). It is pointing directly away from earth and at time it is 1000 kilometers from earth. How far from earth is it at one minute from time ?   "
},
{
  "id": "integralsols_section-16-9",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-9",
  "type": "Exercise",
  "number": "1.1.10",
  "title": "",
  "body": "  Solve , . It is OK to leave your answer as a definite integral.   "
},
{
  "id": "integralsols_section-16-10",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-10",
  "type": "Exercise",
  "number": "1.1.11",
  "title": "",
  "body": "  A dropped ball accelerates downwards at a constant rate meters per second squared. Set up the differential equation for the height above ground in meters. Then supposing meters, how long does it take for the ball to hit the ground.   "
},
{
  "id": "integralsols_section-16-11",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-11",
  "type": "Exercise",
  "number": "1.1.12",
  "title": "",
  "body": "  Find the general solution of , and then .   "
},
{
  "id": "integralsols_section-16-12",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-12",
  "type": "Exercise",
  "number": "1.1.101",
  "title": "",
  "body": "  Solve and .        "
},
{
  "id": "integralsols_section-16-13",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-13",
  "type": "Exercise",
  "number": "1.1.102",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "integralsols_section-16-14",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-14",
  "type": "Exercise",
  "number": "1.1.103",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "integralsols_section-16-15",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-15",
  "type": "Exercise",
  "number": "1.1.104",
  "title": "",
  "body": "  Sid is in a car traveling at speed miles per hour away from Las Vegas, where is in hours. At , Sid is 10 miles away from Vegas. How far from Vegas is Sid 2 hours later?    170   "
},
{
  "id": "integralsols_section-16-16",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-16",
  "type": "Exercise",
  "number": "1.1.105",
  "title": "",
  "body": "  Solve , , where is a positive integer. Hint: You have to consider different cases.    If , then . If , then .   "
},
{
  "id": "integralsols_section-16-17",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-17",
  "type": "Exercise",
  "number": "1.1.106",
  "title": "",
  "body": "  The rate of change of the volume of a snowball that is melting is proportional to the surface area of the snowball. Suppose the snowball is perfectly spherical. The volume (in centimeters cubed) of a ball of radius centimeters is . The surface area is . Set up the differential equation for how the radius is changing. Then, suppose that at time minutes, the radius is 10 centimeters. After 5 minutes, the radius is 8 centimeters. At what time will the snowball be completely melted?    The equation is for some constant . The snowball will be completely melted in 25 minutes from time .   "
},
{
  "id": "integralsols_section-16-18",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-16-18",
  "type": "Exercise",
  "number": "1.1.107",
  "title": "",
  "body": "  Find the general solution to . How many distinct constants do you need?     , so 4 constants.   "
},
{
  "id": "slopefields_section",
  "level": "1",
  "url": "slopefields_section.html",
  "type": "Section",
  "number": "1.2",
  "title": "Slope fields",
  "body": " Slope fields   Note: 1 lecture, §1.3 in , §1.1 in  As we said, the general first-order equation we are studying looks like Frequently, we cannot simply solve these kinds of equations explicitly. It would be nice if we could at least figure out the shape and behavior of the solutions, or find approximate solutions.    Slope fields  The equation gives you a slope at each point in the -plane. And this is the slope a solution would have at if its value was . In other words, is the slope of a solution whose graph runs through the point . At a point , we draw a short line with the slope . For example, if , then at point we draw a short line of slope . If is a solution and , then the equation mandates that . See .   The slope at .    To get an idea of how solutions behave, we draw such lines at lots of points in the plane, not just the point . We would ideally want to see the slope at every point, but that is just not possible. Usually we pick a grid of points fine enough so that it shows the behavior, but not too fine so that we can still recognize the individual lines. We call this picture the slope field slope field of the equation. See for the slope field of the equation . In practice, one does not do this by hand; a computer can do the drawing.  Suppose we are given a specific initial condition . A solution, that is, the graph of the solution, would be a curve that follows the slopes we drew. For a few sample solutions, see . It is easy to roughly sketch (or at least imagine) possible solutions in the slope field, just from looking at the slope field itself. You simply sketch a line that roughly fits the little line segments and goes through your initial condition.   Slope field of .    Slope field of with a graph of solutions satisfying , , and .    By looking at the slope field, we get a lot of information about the behavior of solutions without having to solve the equation. For example, in we see what the solutions do when the initial conditions are , , and . A small change in the initial condition causes quite different behavior. We see this behavior just from the slope field and imagining what solutions ought to do.  We see a different behavior for the equation . The slope field and a few solutions is in see . If we think of moving from left to right (perhaps is time and time is usually increasing), then we see that no matter what is, all solutions tend to zero as tends to infinity. Again that behavior is clear from simply looking at the slope field itself.   Slope field of with a graph of a few solutions.      Existence and uniqueness  It seems that if we want a solution starting at some point, we could just follow the slope field. With that in mind, we wish to ask two fundamental questions about the problem     Does a solution exist ?    Is the solution unique (if it exists)?    What do you think is the answer? The answer to both questions seems to be yes, does it not? Well, it really is yes most of the time. But there are cases when the answer to either question can be no.  Since the equations we encounter in applications come from real life situations, it seems logical that a solution always exists. It also has to be unique if we believe our universe is deterministic. If the solution does not exist, or if it is not unique, we have probably not devised the correct model. Hence, it is good to know when things go wrong and why.    Attempt to solve:   Integrate to find the general solution . The solution does not exist at . See . You may say one can see the division by zero a mile away, but the equation may have been written as the seemingly harmless .   Slope field of .    Slope field of with two solutions satisfying .        Solve:   See . Note that is a solution. But another solution is the function     It is hard to tell by staring at the slope field that the solution is not unique. Is there any hope? Of course there is. We have the following theorem, known as Picard's theorem Named after the French mathematician Charles Émile Picard (1856–1941) .   Picard's theorem on existence and uniqueness  existence and uniqueness  Picard's theorem   If is continuous (as a function of two variables) and exists and is continuous near some , then a solution to exists (at least for in some small interval) and is unique.    Note that the problems , and , do not satisfy the hypothesis of the theorem. Even if we can use the theorem, we ought to be careful about this existence business. It is quite possible that the solution only exists for a short while.    For some constant , solve:   We know how to solve this equation. First assume that , so is not equal to zero at least for some near 0. So , so , so . If , then so If , then is a solution.  For instance, when the solution blows up at . Hence, the solution does not exist for all even if the equation itself is nice everywhere—it only exists in the interval . The equation certainly looks nice.    For most of this course, we will be interested in equations where existence and uniqueness hold, and in fact hold globally unlike for the equation .      Sketch slope field for . How do the solutions behave as grows? Can you guess a particular solution by looking at the slope field?      Sketch slope field for .      Sketch slope field for .      Is it possible to solve the equation for ? Justify.      Is it possible to solve the equation for ? Is the solution unique? Justify.      Match equations , , to slope fields. Justify.                        (challenging) Take , , where for all and . If the solution exists for all , can you say what happens to as goes to positive infinity? Explain.       (challenging) Take , .    Find two distinct solutions.    Explain why this does not violate Picard's theorem.        Suppose . What will the slope field look like, explain and sketch an example, if you know the following about :     does not depend on .     does not depend on .     for any number .     and for all .        Find a solution to , . Does Picard's theorem apply?      Take an equation for some function . Can you solve the problem for the initial condition , and if so what is the solution?       (challenging) Suppose is such that for every , is continuous and exists and is continuous for every and .    Guess a solution given the initial condition .    Can graphs of two solutions of the equation for different initial conditions ever intersect?    Given , what can you say about the solution. In particular, can for any ? Can for any ? Why or why not?        Sketch the slope field of . Can you visually find the solution that satisfies ?        is a solution such that .      Is it possible to solve for ? Is the solution unique?    Yes a solution exists. The equation is where . The function is continuous and , which is also continuous near . So a solution exists and is unique. (In fact, is the solution.)      Is it possible to solve for ?    No, the equation is not defined at .      Match equations , , to slope fields. Justify.                     a) , b) , c) . Justification left to reader.       (tricky) Suppose Does , have a continuously differentiable solution? Does Picard apply? Why, or why not?    Picard does not apply as is not continuous at . The equation does not have a continuously differentiable solution. Suppose it did. Notice that . By the first derivative test, for small positive . But then for those , we have . It is not possible for to be continous, and for arbitrarily small positive .      Consider an equation of the form for some continuous function , and an initial condition . Does a solution exist for all ? Why or why not?    The solution is , and this does indeed exist for every .     "
},
{
  "id": "X1_3_fig0",
  "level": "2",
  "url": "slopefields_section.html#X1_3_fig0",
  "type": "Figure",
  "number": "1.2",
  "title": "",
  "body": " The slope at .   "
},
{
  "id": "X1_3_fig1",
  "level": "2",
  "url": "slopefields_section.html#X1_3_fig1",
  "type": "Figure",
  "number": "1.3",
  "title": "",
  "body": " Slope field of .   "
},
{
  "id": "X1_3_fig2",
  "level": "2",
  "url": "slopefields_section.html#X1_3_fig2",
  "type": "Figure",
  "number": "1.4",
  "title": "",
  "body": " Slope field of with a graph of solutions satisfying , , and .   "
},
{
  "id": "X1_3_fig3",
  "level": "2",
  "url": "slopefields_section.html#X1_3_fig3",
  "type": "Figure",
  "number": "1.5",
  "title": "",
  "body": " Slope field of with a graph of a few solutions.   "
},
{
  "id": "slopefields_section-4-6",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-4-6",
  "type": "Example",
  "number": "1.2.1",
  "title": "",
  "body": "  Attempt to solve:   Integrate to find the general solution . The solution does not exist at . See . You may say one can see the division by zero a mile away, but the equation may have been written as the seemingly harmless .   Slope field of .    Slope field of with two solutions satisfying .     "
},
{
  "id": "slopefields_section-4-7",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-4-7",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  Solve:   See . Note that is a solution. But another solution is the function    "
},
{
  "id": "slope_picardthm",
  "level": "2",
  "url": "slopefields_section.html#slope_picardthm",
  "type": "Theorem",
  "number": "1.2.1",
  "title": "Picard’s theorem on existence and uniqueness.",
  "body": " Picard's theorem on existence and uniqueness  existence and uniqueness  Picard's theorem   If is continuous (as a function of two variables) and exists and is continuous near some , then a solution to exists (at least for in some small interval) and is unique.   "
},
{
  "id": "slopefields_section-4-11",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-4-11",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  For some constant , solve:   We know how to solve this equation. First assume that , so is not equal to zero at least for some near 0. So , so , so . If , then so If , then is a solution.  For instance, when the solution blows up at . Hence, the solution does not exist for all even if the equation itself is nice everywhere—it only exists in the interval . The equation certainly looks nice.   "
},
{
  "id": "slopefields_section-5-1",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-1",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "  Sketch slope field for . How do the solutions behave as grows? Can you guess a particular solution by looking at the slope field?   "
},
{
  "id": "slopefields_section-5-2",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-2",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": "  Sketch slope field for .   "
},
{
  "id": "slopefields_section-5-3",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-3",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": "  Sketch slope field for .   "
},
{
  "id": "slopefields_section-5-4",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-4",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "",
  "body": "  Is it possible to solve the equation for ? Justify.   "
},
{
  "id": "slopefields_section-5-5",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-5",
  "type": "Exercise",
  "number": "1.2.5",
  "title": "",
  "body": "  Is it possible to solve the equation for ? Is the solution unique? Justify.   "
},
{
  "id": "slopefields_section-5-6",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-6",
  "type": "Exercise",
  "number": "1.2.6",
  "title": "",
  "body": "  Match equations , , to slope fields. Justify.                    "
},
{
  "id": "slopefields_section-5-7",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-7",
  "type": "Exercise",
  "number": "1.2.7",
  "title": "",
  "body": "   (challenging) Take , , where for all and . If the solution exists for all , can you say what happens to as goes to positive infinity? Explain.   "
},
{
  "id": "slopefields_section-5-8",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-8",
  "type": "Exercise",
  "number": "1.2.8",
  "title": "",
  "body": "   (challenging) Take , .    Find two distinct solutions.    Explain why this does not violate Picard's theorem.     "
},
{
  "id": "slopefields_section-5-9",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-9",
  "type": "Exercise",
  "number": "1.2.9",
  "title": "",
  "body": "  Suppose . What will the slope field look like, explain and sketch an example, if you know the following about :     does not depend on .     does not depend on .     for any number .     and for all .     "
},
{
  "id": "slopefields_section-5-10",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-10",
  "type": "Exercise",
  "number": "1.2.10",
  "title": "",
  "body": "  Find a solution to , . Does Picard's theorem apply?   "
},
{
  "id": "slopefields_section-5-11",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-11",
  "type": "Exercise",
  "number": "1.2.11",
  "title": "",
  "body": "  Take an equation for some function . Can you solve the problem for the initial condition , and if so what is the solution?   "
},
{
  "id": "slopefields_section-5-12",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-12",
  "type": "Exercise",
  "number": "1.2.12",
  "title": "",
  "body": "   (challenging) Suppose is such that for every , is continuous and exists and is continuous for every and .    Guess a solution given the initial condition .    Can graphs of two solutions of the equation for different initial conditions ever intersect?    Given , what can you say about the solution. In particular, can for any ? Can for any ? Why or why not?     "
},
{
  "id": "slopefields_section-5-13",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-13",
  "type": "Exercise",
  "number": "1.2.101",
  "title": "",
  "body": "  Sketch the slope field of . Can you visually find the solution that satisfies ?        is a solution such that .   "
},
{
  "id": "slopefields_section-5-14",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-14",
  "type": "Exercise",
  "number": "1.2.102",
  "title": "",
  "body": "  Is it possible to solve for ? Is the solution unique?    Yes a solution exists. The equation is where . The function is continuous and , which is also continuous near . So a solution exists and is unique. (In fact, is the solution.)   "
},
{
  "id": "slopefields_section-5-15",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-15",
  "type": "Exercise",
  "number": "1.2.103",
  "title": "",
  "body": "  Is it possible to solve for ?    No, the equation is not defined at .   "
},
{
  "id": "slopefields_section-5-16",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-16",
  "type": "Exercise",
  "number": "1.2.104",
  "title": "",
  "body": "  Match equations , , to slope fields. Justify.                     a) , b) , c) . Justification left to reader.   "
},
{
  "id": "slopefields_section-5-17",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-17",
  "type": "Exercise",
  "number": "1.2.105",
  "title": "",
  "body": "   (tricky) Suppose Does , have a continuously differentiable solution? Does Picard apply? Why, or why not?    Picard does not apply as is not continuous at . The equation does not have a continuously differentiable solution. Suppose it did. Notice that . By the first derivative test, for small positive . But then for those , we have . It is not possible for to be continous, and for arbitrarily small positive .   "
},
{
  "id": "slopefields_section-5-18",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-18",
  "type": "Exercise",
  "number": "1.2.106",
  "title": "",
  "body": "  Consider an equation of the form for some continuous function , and an initial condition . Does a solution exist for all ? Why or why not?    The solution is , and this does indeed exist for every .   "
},
{
  "id": "separable_section",
  "level": "1",
  "url": "separable_section.html",
  "type": "Section",
  "number": "1.3",
  "title": "Separable equations",
  "body": " Separable equations   Note: 1 lecture, §1.4 in , §2.2 in  When a differential equation is of the form , we integrate: . Unfortunately, simply integrating no longer works for the general form of the equation . Integrating both sides yields the rather unhelpful expression Notice the dependence on in the integral.    Separable equations  We say a differential equation is separable separable if we can write it as for some functions and . Let us write the equation in the Leibniz notation Leibniz notation  We rewrite the equation as Both sides look like something we can integrate. We obtain If we can find closed form expressions for these two integrals, we can, perhaps, solve for .    Take the equation Note that is a solution. We will remember that fact and assume from now on, so that we can divide by . Write the equation as or . Then We compute the antiderivatives to get or where is some constant. Because is also a solution and because of the absolute value, we can write: for any number (including zero or negative).  We check: Yay!    You may be worried that we integrated in two different variables. We seemingly did a different operation to each side. Perhaps we should be a little bit more careful and work through this method more rigorously. Consider We rewrite the equation as follows. Note that is a function of and so is ! We integrate both sides with respect to : We use the change of variables formula (substitution) on the left-hand side: And we are done.    Implicit solutions  We sometimes get stuck even if we can do the integration. Consider the separable equation We separate variables, We integrate to get or perhaps the less intimidating expression (where ) It is not easy to find the solution explicitly—it is hard to solve for . We, therefore, leave the solution in this form and call it an implicit solution implicit solution . It is still easy to check that an implicit solution satisfies the differential equation. In this case, we differentiate with respect to , and remember that is a function of , to get That is usually called implicit differentiation in calculus, but it is just the chain rule. Anyway, now multiply both sides by and divide by and you will get exactly the differential equation. We leave this computation to the reader.  If you have an implicit solution, and you want to compute values for , you might have to be tricky. You might get multiple solutions for each , so you have to pick one. Sometimes you can graph as a function of , and then turn your paper to see a graph. Sometimes you have to do more.  Computers are also good at some of these tricks. More advanced mathematical software usually has some way of plotting solutions to implicit equations. For example, for , if you plot all the points that are solutions to , you find the two curves in . This is not quite a graph of a function. For each there are two choices of . To find a function, you have to pick one of these two curves. You pick the one that satisfies your initial condition if you have one. For instance, the top curve satisfies the condition . So for each , we really got two solutions. As you can see, computing values from an implicit solution can be somewhat tricky. But sometimes, an implicit solution is the best we can do.   The implicit solution to .    The equation above also has the solution . So the general solution is Sometimes these extra solutions that came up due to division by zero such as are called singular solutions singular solution .  We still solve for the constants using initial conditions in implicit solutions as usual. For example, consider the initial condition . We can discount the solution . In the implicit solution let us plug in and to get , in other words, . So the solution for this initial condition is , but only the part of this implicit solution that is positive as that is what our initial condition requires.    More examples of separable equations    Solve , .  Factor the right-hand side Separate variables, integrate, and solve for : Solve for the initial condition, to get (or , or , etc.). The particular solution we seek is, therefore,       Bob made a cup of coffee, and Bob likes to drink coffee only once it reaches 60 degrees Celsius and will not burn him. Initially, right after it was poured in the cup, Bob measured the temperature and the coffee was 89 degrees Celsius. One minute later, Bob measured the coffee again and it had 85 degrees. The temperature of the room (the ambient temperature) is 22 degrees. When should Bob start drinking?  Let be the temperature of the coffee in degrees Celsius, let be the ambient (room) temperature, also in degrees Celsius, and let denote the time in minutes, with denoting the time when Bob made the coffee. Newton's law of cooling Newton's law of cooling states that the rate at which the temperature of the coffee is changing is proportional to the difference between the ambient temperature and the temperature of the coffee. That is, for some positive constant . For our setup , , . Let and denote arbitrary constants, and notice that since the coffee is clearly warmer than the room. We separate variables and integrate. That is, . We plug in the first condition: , and hence . So . The second condition says . Solving for , we get . We solve for the time that gives a temperature of 60 degrees. Namely, we solve to get minutes. So Bob can begin to drink the coffee at just over 9 minutes from the time Bob made it. That is probably about the amount of time it took us to calculate how long it would take. See .   Graphs of the coffee temperature function . On the left, horizontal lines are drawn at temperatures 60, 85, and 89. Vertical lines are drawn at and . Notice that the temperature of the coffee hits 85 at , and 60 at . On the right, the graph is over a longer period of time, with a horizontal line at the ambient temperature 22.        Find the general solution to (including any singular solutions).  First, note that is a solution (a singular solution). Next, assume and separate: The general solution is         Solve .      Solve .      Solve , for .      Solve , for .      Solve . Hint: Factor the right-hand side.      Solve , where .      Solve , for .      Find an implicit solution for , for .      Find an explicit solution for , .      Find an explicit solution for , for .      Find an explicit solution for , . It is alright to leave a definite integral in your answer.      Suppose a cup of coffee is at 100 degrees Celsius at time , it is at 70 degrees at minutes, and it is at 50 degrees at minutes. Compute the ambient temperature.      Solve .           Solve , .           Find an implicit solution for , .           Find an explicit solution to , .           Find an implicit solution to .           Take with the same numbers: 89 degrees at , 85 degrees at , and ambient temperature of 22 degrees. Suppose these temperatures were measured with precision of degrees. Given this imprecision, the time it takes the coffee to cool to (exactly) 60 degrees is also only known in a certain range. Find this range. Hint: Think about what kind of error makes the cooling time longer and what shorter.    The range is approximately 7.45 to 12.15 minutes.      A population of rabbits on an island is modeled by , where the independent variable is time in months. At time , there are 40 rabbits on the island.    Find the solution to the equation with the initial condition.    How many rabbits are on the island in 1 month, 5 months, 10 months, 15 months (round to the nearest integer).      a) . b) 102 rabbits after one month, 861 after 5 months, 999 after 10 months, 1000 after 15 months.     "
},
{
  "id": "example_yprimeisxy",
  "level": "2",
  "url": "separable_section.html#example_yprimeisxy",
  "type": "Example",
  "number": "1.3.1",
  "title": "",
  "body": "  Take the equation Note that is a solution. We will remember that fact and assume from now on, so that we can divide by . Write the equation as or . Then We compute the antiderivatives to get or where is some constant. Because is also a solution and because of the absolute value, we can write: for any number (including zero or negative).  We check: Yay!   "
},
{
  "id": "implicitsols_fig",
  "level": "2",
  "url": "separable_section.html#implicitsols_fig",
  "type": "Figure",
  "number": "1.8",
  "title": "",
  "body": " The implicit solution to .   "
},
{
  "id": "separable_section-5-2",
  "level": "2",
  "url": "separable_section.html#separable_section-5-2",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  Solve , .  Factor the right-hand side Separate variables, integrate, and solve for : Solve for the initial condition, to get (or , or , etc.). The particular solution we seek is, therefore,    "
},
{
  "id": "sep_coffeeexample",
  "level": "2",
  "url": "separable_section.html#sep_coffeeexample",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "  Bob made a cup of coffee, and Bob likes to drink coffee only once it reaches 60 degrees Celsius and will not burn him. Initially, right after it was poured in the cup, Bob measured the temperature and the coffee was 89 degrees Celsius. One minute later, Bob measured the coffee again and it had 85 degrees. The temperature of the room (the ambient temperature) is 22 degrees. When should Bob start drinking?  Let be the temperature of the coffee in degrees Celsius, let be the ambient (room) temperature, also in degrees Celsius, and let denote the time in minutes, with denoting the time when Bob made the coffee. Newton's law of cooling Newton's law of cooling states that the rate at which the temperature of the coffee is changing is proportional to the difference between the ambient temperature and the temperature of the coffee. That is, for some positive constant . For our setup , , . Let and denote arbitrary constants, and notice that since the coffee is clearly warmer than the room. We separate variables and integrate. That is, . We plug in the first condition: , and hence . So . The second condition says . Solving for , we get . We solve for the time that gives a temperature of 60 degrees. Namely, we solve to get minutes. So Bob can begin to drink the coffee at just over 9 minutes from the time Bob made it. That is probably about the amount of time it took us to calculate how long it would take. See .   Graphs of the coffee temperature function . On the left, horizontal lines are drawn at temperatures 60, 85, and 89. Vertical lines are drawn at and . Notice that the temperature of the coffee hits 85 at , and 60 at . On the right, the graph is over a longer period of time, with a horizontal line at the ambient temperature 22.     "
},
{
  "id": "separable_section-5-4",
  "level": "2",
  "url": "separable_section.html#separable_section-5-4",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Find the general solution to (including any singular solutions).  First, note that is a solution (a singular solution). Next, assume and separate: The general solution is    "
},
{
  "id": "separable_section-6-1",
  "level": "2",
  "url": "separable_section.html#separable_section-6-1",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "  Solve .   "
},
{
  "id": "separable_section-6-2",
  "level": "2",
  "url": "separable_section.html#separable_section-6-2",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": "  Solve .   "
},
{
  "id": "separable_section-6-3",
  "level": "2",
  "url": "separable_section.html#separable_section-6-3",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "",
  "body": "  Solve , for .   "
},
{
  "id": "separable_section-6-4",
  "level": "2",
  "url": "separable_section.html#separable_section-6-4",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "",
  "body": "  Solve , for .   "
},
{
  "id": "separable_section-6-5",
  "level": "2",
  "url": "separable_section.html#separable_section-6-5",
  "type": "Exercise",
  "number": "1.3.5",
  "title": "",
  "body": "  Solve . Hint: Factor the right-hand side.   "
},
{
  "id": "separable_section-6-6",
  "level": "2",
  "url": "separable_section.html#separable_section-6-6",
  "type": "Exercise",
  "number": "1.3.6",
  "title": "",
  "body": "  Solve , where .   "
},
{
  "id": "separable_section-6-7",
  "level": "2",
  "url": "separable_section.html#separable_section-6-7",
  "type": "Exercise",
  "number": "1.3.7",
  "title": "",
  "body": "  Solve , for .   "
},
{
  "id": "separable_section-6-8",
  "level": "2",
  "url": "separable_section.html#separable_section-6-8",
  "type": "Exercise",
  "number": "1.3.8",
  "title": "",
  "body": "  Find an implicit solution for , for .   "
},
{
  "id": "separable_section-6-9",
  "level": "2",
  "url": "separable_section.html#separable_section-6-9",
  "type": "Exercise",
  "number": "1.3.9",
  "title": "",
  "body": "  Find an explicit solution for , .   "
},
{
  "id": "separable_section-6-10",
  "level": "2",
  "url": "separable_section.html#separable_section-6-10",
  "type": "Exercise",
  "number": "1.3.10",
  "title": "",
  "body": "  Find an explicit solution for , for .   "
},
{
  "id": "separable_section-6-11",
  "level": "2",
  "url": "separable_section.html#separable_section-6-11",
  "type": "Exercise",
  "number": "1.3.11",
  "title": "",
  "body": "  Find an explicit solution for , . It is alright to leave a definite integral in your answer.   "
},
{
  "id": "separable_section-6-12",
  "level": "2",
  "url": "separable_section.html#separable_section-6-12",
  "type": "Exercise",
  "number": "1.3.12",
  "title": "",
  "body": "  Suppose a cup of coffee is at 100 degrees Celsius at time , it is at 70 degrees at minutes, and it is at 50 degrees at minutes. Compute the ambient temperature.   "
},
{
  "id": "separable_section-6-13",
  "level": "2",
  "url": "separable_section.html#separable_section-6-13",
  "type": "Exercise",
  "number": "1.3.101",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "separable_section-6-14",
  "level": "2",
  "url": "separable_section.html#separable_section-6-14",
  "type": "Exercise",
  "number": "1.3.102",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "separable_section-6-15",
  "level": "2",
  "url": "separable_section.html#separable_section-6-15",
  "type": "Exercise",
  "number": "1.3.103",
  "title": "",
  "body": "  Find an implicit solution for , .        "
},
{
  "id": "separable_section-6-16",
  "level": "2",
  "url": "separable_section.html#separable_section-6-16",
  "type": "Exercise",
  "number": "1.3.104",
  "title": "",
  "body": "  Find an explicit solution to , .        "
},
{
  "id": "separable_section-6-17",
  "level": "2",
  "url": "separable_section.html#separable_section-6-17",
  "type": "Exercise",
  "number": "1.3.105",
  "title": "",
  "body": "  Find an implicit solution to .        "
},
{
  "id": "separable_section-6-18",
  "level": "2",
  "url": "separable_section.html#separable_section-6-18",
  "type": "Exercise",
  "number": "1.3.106",
  "title": "",
  "body": "  Take with the same numbers: 89 degrees at , 85 degrees at , and ambient temperature of 22 degrees. Suppose these temperatures were measured with precision of degrees. Given this imprecision, the time it takes the coffee to cool to (exactly) 60 degrees is also only known in a certain range. Find this range. Hint: Think about what kind of error makes the cooling time longer and what shorter.    The range is approximately 7.45 to 12.15 minutes.   "
},
{
  "id": "separable_section-6-19",
  "level": "2",
  "url": "separable_section.html#separable_section-6-19",
  "type": "Exercise",
  "number": "1.3.107",
  "title": "",
  "body": "  A population of rabbits on an island is modeled by , where the independent variable is time in months. At time , there are 40 rabbits on the island.    Find the solution to the equation with the initial condition.    How many rabbits are on the island in 1 month, 5 months, 10 months, 15 months (round to the nearest integer).      a) . b) 102 rabbits after one month, 861 after 5 months, 999 after 10 months, 1000 after 15 months.   "
},
{
  "id": "intfactor_section",
  "level": "1",
  "url": "intfactor_section.html",
  "type": "Section",
  "number": "1.4",
  "title": "Linear equations and the integrating factor",
  "body": " Linear equations and the integrating factor   Note: 1 lecture, §1.5 in , §2.1 in  One of the most important types of equations we will learn to solve are the so-called linear equations linear equation . In fact, the majority of the course is about linear equations. In this section we focus on the first-order linear equation first-order linear equation . A first-order equation is linear if we can put it into the form: The word linear means linear in and ; no higher powers or functions of or appear. The dependence on can be more complicated.  Solutions of linear equations have nice properties. For example, the solution exists wherever and are continuous, and it has essentially the same regularity (read: it is just as nice). Most importantly for us right now, there is a method for solving linear first-order equations.  The trick is to rewrite the left-hand side of as a derivative of a product of with another function. To this end, we wish to find a function such that This is the left-hand side of multiplied by . If we multiply by , we obtain We can now integrate both sides, which we can do as the right-hand side does not depend on and the left-hand side is written as a derivative of a function. After the integration, we solve for by dividing by . The function is called the integrating factor integrating factor and the method is called the integrating factor method integrating factor method .  We are looking for a function , such that if we differentiate it, we get the same function back multiplied by . That seems like a job for the exponential function! Let where is any antiderivative of . We compute:   Of course, to get a closed form formula for , we need to be able to find a closed form formula for the integrals appearing above.    Solve   First note that and . The integrating factor is . We multiply both sides of the equation by to get We integrate Next, we solve for the initial condition , so . The solution is     Note that we do not care which antiderivative we take when computing . You can always add a constant of integration, but those constants will not matter in the end.    Try it! Add a constant of integration to the integral in the integrating factor and show that the solution you get in the end is the same as what we got above.    Advice: Do not try to remember the formula for itself; that is way too hard. It is easier to remember the process and repeat it.  Since we cannot always evaluate the integrals in closed form, it is useful to know how to write the solution in definite integral form. A definite integral is something that you can plug into a computer or a calculator. Suppose we are given Look at the solution and write the integrals as definite integrals. You should be careful to properly use dummy variables here. If you now plug such a formula into a computer or a calculator, it will be happy to give you numerical answers.    Check that in formula .      Write the solution of the following problem as a definite integral, but try to simplify as far as you can. You will not be able to find the solution in closed form.       Before we move on, we should note some interesting properties of linear equations. First, for the linear initial value problem , , there is an explicit formula for the solution. Second, it follows from the formula that if and are continuous on some interval , then the solution exists and is differentiable on . Compare with the simple nonlinear example we have seen previously, , and compare to .      We get to a common simple application of linear equations. Real-life applications of this type of problem include computing the concentration of chemicals in bodies of water (rivers and lakes).     A 100 liter tank contains 10 kilograms of salt dissolved in 60 liters of water. Solution of water and salt (brine) with concentration of 0.1 kilograms per liter is flowing in at the rate of 5 liters a minute. The solution in the tank is well stirred and flows out at a rate of 3 liters a minute. How much salt is in the tank when the tank is full?  To solve this problem, we need to find the differential equation for this setup. Let denote the kilograms of salt in the tank, let denote the time in minutes. For a small change in time, the change in (denoted ) is approximately Dividing through by and taking the limit , we see that In our example, Our differential equation is In the form , it is   Let us solve. The integrating factor is We multiply both sides of the equation by to get   To find , note that at , we have . That is, or   We know liters per minute are flowing in and liters per minute are flowing out, so the volume is increasing by liters a minute. So the tank is full when , or when . We are interested in the value of when the tank is full, that is, we want to compute : There are of salt in the tank when it is full. See for the graph of over .  The concentration when the tank is full is approximately , and we started with or approximately 0.1667 .   Graph of the solution kilograms of salt in the tank at time .        In the exercises, feel free to leave answer as a definite integral if a closed form solution cannot be found. If you can find a closed form solution, you should give that.    Solve .      Solve .      Solve , with .      Solve .      Solve , with .      Suppose there are two lakes located on a stream. Clean water flows into the first lake, then the water from the first lake flows into the second lake, and then water from the second lake flows further downstream. The in and out flow from each lake is 500 liters per hour. The first lake contains 100 thousand liters of water and the second lake contains 200 thousand liters of water. A truck with 500 kg of toxic substance crashes into the first lake. Assume that the water is being continually mixed perfectly by the stream.    Find the concentration of toxic substance as a function of time in both lakes.    When will the concentration in the first lake be below 0.001 kg per liter?    When will the concentration in the second lake be maximal?        Newton's law of cooling Newton's law of cooling states that where is the temperature, is time, is the ambient temperature, and is a constant. Suppose that for some constants and . That is, the ambient temperature oscillates (for example night and day temperatures).    Find the general solution.    In the long term, will the initial conditions make much of a difference? Why or why not?        Initially 5 grams of salt are dissolved in 20 liters of water. Brine with concentration of salt 2 grams of salt per liter is added at a rate of 3 liters a minute. The tank is mixed well and is drained at 3 liters a minute. How long does the process have to continue until there are 20 grams of salt in the tank?      Initially a tank contains 10 liters of pure water. Brine of unknown (but constant) concentration of salt is flowing in at 1 liter per minute. The water is mixed well and drained at 1 liter per minute. In 20 minutes there are 15 grams of salt in the tank. What is the concentration of salt in the incoming brine?      Solve .           Solve , .           Suppose a water tank is being pumped out at 3 . The water tank starts at 10 L of clean water. Water with toxic substance is flowing into the tank at 2 , with concentration  at time . When the tank is half empty, how many grams of toxic substance are in the tank (assuming perfect mixing)?     grams      There is bacteria on a plate and a toxic substance is being added that slows down the rate of growth of the bacteria. That is, suppose that . If , find the population at .           A cylindrical water tank has water flowing in at cubic meters per second. Let be the area of the cross section of the tank in square meters. Suppose water is flowing out from the bottom of the tank at a rate proportional to the height of the water level. Set up the differential equation for , the height of the water, introducing and naming constants that you need. You should also give the units for your constants.     , where is a constant with units .     "
},
{
  "id": "intfactor_section-2-7",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-2-7",
  "type": "Example",
  "number": "1.4.1",
  "title": "",
  "body": "  Solve   First note that and . The integrating factor is . We multiply both sides of the equation by to get We integrate Next, we solve for the initial condition , so . The solution is    "
},
{
  "id": "intfactor_section-2-9",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-2-9",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "  Try it! Add a constant of integration to the integral in the integrating factor and show that the solution you get in the end is the same as what we got above.   "
},
{
  "id": "intfactor_section-2-12",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-2-12",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "  Check that in formula .   "
},
{
  "id": "intfactor_section-2-13",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-2-13",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": "  Write the solution of the following problem as a definite integral, but try to simplify as far as you can. You will not be able to find the solution in closed form.    "
},
{
  "id": "intfactor_section-2-14",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-2-14",
  "type": "Remark",
  "number": "1.4.1",
  "title": "",
  "body": "  Before we move on, we should note some interesting properties of linear equations. First, for the linear initial value problem , , there is an explicit formula for the solution. Second, it follows from the formula that if and are continuous on some interval , then the solution exists and is differentiable on . Compare with the simple nonlinear example we have seen previously, , and compare to .   "
},
{
  "id": "intfactor_section-2-15",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-2-15",
  "type": "Example",
  "number": "1.4.2",
  "title": "",
  "body": "  We get to a common simple application of linear equations. Real-life applications of this type of problem include computing the concentration of chemicals in bodies of water (rivers and lakes).     A 100 liter tank contains 10 kilograms of salt dissolved in 60 liters of water. Solution of water and salt (brine) with concentration of 0.1 kilograms per liter is flowing in at the rate of 5 liters a minute. The solution in the tank is well stirred and flows out at a rate of 3 liters a minute. How much salt is in the tank when the tank is full?  To solve this problem, we need to find the differential equation for this setup. Let denote the kilograms of salt in the tank, let denote the time in minutes. For a small change in time, the change in (denoted ) is approximately Dividing through by and taking the limit , we see that In our example, Our differential equation is In the form , it is   Let us solve. The integrating factor is We multiply both sides of the equation by to get   To find , note that at , we have . That is, or   We know liters per minute are flowing in and liters per minute are flowing out, so the volume is increasing by liters a minute. So the tank is full when , or when . We are interested in the value of when the tank is full, that is, we want to compute : There are of salt in the tank when it is full. See for the graph of over .  The concentration when the tank is full is approximately , and we started with or approximately 0.1667 .   Graph of the solution kilograms of salt in the tank at time .     "
},
{
  "id": "intfactor_section-3-2",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-2",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": "  Solve .   "
},
{
  "id": "intfactor_section-3-3",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-3",
  "type": "Exercise",
  "number": "1.4.5",
  "title": "",
  "body": "  Solve .   "
},
{
  "id": "intfactor_section-3-4",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-4",
  "type": "Exercise",
  "number": "1.4.6",
  "title": "",
  "body": "  Solve , with .   "
},
{
  "id": "intfactor_section-3-5",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-5",
  "type": "Exercise",
  "number": "1.4.7",
  "title": "",
  "body": "  Solve .   "
},
{
  "id": "intfactor_section-3-6",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-6",
  "type": "Exercise",
  "number": "1.4.8",
  "title": "",
  "body": "  Solve , with .   "
},
{
  "id": "intfactor_section-3-7",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-7",
  "type": "Exercise",
  "number": "1.4.9",
  "title": "",
  "body": "  Suppose there are two lakes located on a stream. Clean water flows into the first lake, then the water from the first lake flows into the second lake, and then water from the second lake flows further downstream. The in and out flow from each lake is 500 liters per hour. The first lake contains 100 thousand liters of water and the second lake contains 200 thousand liters of water. A truck with 500 kg of toxic substance crashes into the first lake. Assume that the water is being continually mixed perfectly by the stream.    Find the concentration of toxic substance as a function of time in both lakes.    When will the concentration in the first lake be below 0.001 kg per liter?    When will the concentration in the second lake be maximal?     "
},
{
  "id": "intfactor_section-3-8",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-8",
  "type": "Exercise",
  "number": "1.4.10",
  "title": "",
  "body": "  Newton's law of cooling Newton's law of cooling states that where is the temperature, is time, is the ambient temperature, and is a constant. Suppose that for some constants and . That is, the ambient temperature oscillates (for example night and day temperatures).    Find the general solution.    In the long term, will the initial conditions make much of a difference? Why or why not?     "
},
{
  "id": "intfactor_section-3-9",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-9",
  "type": "Exercise",
  "number": "1.4.11",
  "title": "",
  "body": "  Initially 5 grams of salt are dissolved in 20 liters of water. Brine with concentration of salt 2 grams of salt per liter is added at a rate of 3 liters a minute. The tank is mixed well and is drained at 3 liters a minute. How long does the process have to continue until there are 20 grams of salt in the tank?   "
},
{
  "id": "intfactor_section-3-10",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-10",
  "type": "Exercise",
  "number": "1.4.12",
  "title": "",
  "body": "  Initially a tank contains 10 liters of pure water. Brine of unknown (but constant) concentration of salt is flowing in at 1 liter per minute. The water is mixed well and drained at 1 liter per minute. In 20 minutes there are 15 grams of salt in the tank. What is the concentration of salt in the incoming brine?   "
},
{
  "id": "intfactor_section-3-11",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-11",
  "type": "Exercise",
  "number": "1.4.101",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "intfactor_section-3-12",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-12",
  "type": "Exercise",
  "number": "1.4.102",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "intfactor_section-3-13",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-13",
  "type": "Exercise",
  "number": "1.4.103",
  "title": "",
  "body": "  Suppose a water tank is being pumped out at 3 . The water tank starts at 10 L of clean water. Water with toxic substance is flowing into the tank at 2 , with concentration  at time . When the tank is half empty, how many grams of toxic substance are in the tank (assuming perfect mixing)?     grams   "
},
{
  "id": "intfactor_section-3-14",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-14",
  "type": "Exercise",
  "number": "1.4.104",
  "title": "",
  "body": "  There is bacteria on a plate and a toxic substance is being added that slows down the rate of growth of the bacteria. That is, suppose that . If , find the population at .        "
},
{
  "id": "intfactor_section-3-15",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-15",
  "type": "Exercise",
  "number": "1.4.105",
  "title": "",
  "body": "  A cylindrical water tank has water flowing in at cubic meters per second. Let be the area of the cross section of the tank in square meters. Suppose water is flowing out from the bottom of the tank at a rate proportional to the height of the water level. Set up the differential equation for , the height of the water, introducing and naming constants that you need. You should also give the units for your constants.     , where is a constant with units .   "
},
{
  "id": "substitution_section",
  "level": "1",
  "url": "substitution_section.html",
  "type": "Section",
  "number": "1.5",
  "title": "Substitution",
  "body": " Substitution   Note: 1 lecture, can safely be skipped, §1.6 in , not in  Just as when solving integrals, one method to try is to change variables to end up with a simpler equation to solve.    Substitution  The equation is neither separable nor linear. What can we do? How about trying to change variables, so that in the new variables the equation is simpler. We use another variable , which we treat as a function of . We try We need to figure out in terms of , and . We differentiate (in ) to obtain . So . We plug this into the equation to get In other words, . Such an equation we know how to solve by separating variables: So for some constant . Note that and are also solutions.  Now we need to unsubstitute to obtain and also the two solutions or , and or . We solve the first equation for : Note that gives , but no value of gives the solution .  Substitution in differential equations is applied in much the same way that it is applied in calculus. You guess. Several different substitutions might work. There are some general patterns to look for. We summarize a few of these in a table.    When you see Try substituting         Usually, you try to substitute in the most complicated part of the equation, with the hopes of simplifying it. The table above is just a rule of thumb. You might have to modify your guesses. If a substitution does not work (it does not make the equation any simpler), try a different one.    Bernoulli equations  There are some forms of equations where there is a general rule for substitution that always works. One such example is the so-called Bernoulli equation Bernoulli equation There are several things called Bernoulli equations; this is just one of them. The Bernoullis were a prominent Swiss family of mathematicians. These particular equations are named for Jacob Bernoulli (1654–1705). : This equation looks a lot like a linear equation except for the . If or , then the equation is linear and we can solve it. Otherwise, the substitution transforms the Bernoulli equation into a linear equation. Note that need not be an integer.    Solve Divide the equation by and rearrange to see it is a Bernoulli equation, , that is, and . We substitute In other words, . So and finally The equation is now linear. We can use the integrating factor method. In particular, we use formula . We assume that so . This assumption is OK, as our initial condition is at . Let us compute the integrating factor. Here from formula is . We now plug in to  The integral in this expression is not possible to find in closed form. As we said before, it is perfectly fine to have a definite integral in our solution. Now unsubstitute        Homogeneous equations  Another type of equations we can solve by substitution are the so-called homogeneous equations homogeneous equation . Suppose that we can write the differential equation as Here we try the substitutions We note that the equation is transformed into Hence an implicit solution is Clearly this solution does not work when (we would, after all, divide by zero in ). So we will either assume or depending on the initial condition.    Solve   We put the equation into the form , that is, . As the initial condition is for a positive value, we will assume . We substitute to get the separable equation which has a solution We unsubstitute We want , so Thus and the solution we are looking for is       Hint: Answers need not always be in closed form.    Solve , with .      Solve , with .      Solve , with .      Solve .      Solve .      Solve , with .      Solve , .           Solve , .           Solve , .           Solve .          "
},
{
  "id": "substitution_section-4-3",
  "level": "2",
  "url": "substitution_section.html#substitution_section-4-3",
  "type": "Example",
  "number": "1.5.1",
  "title": "",
  "body": "  Solve Divide the equation by and rearrange to see it is a Bernoulli equation, , that is, and . We substitute In other words, . So and finally The equation is now linear. We can use the integrating factor method. In particular, we use formula . We assume that so . This assumption is OK, as our initial condition is at . Let us compute the integrating factor. Here from formula is . We now plug in to  The integral in this expression is not possible to find in closed form. As we said before, it is perfectly fine to have a definite integral in our solution. Now unsubstitute     "
},
{
  "id": "substitution_section-5-3",
  "level": "2",
  "url": "substitution_section.html#substitution_section-5-3",
  "type": "Example",
  "number": "1.5.2",
  "title": "",
  "body": "  Solve   We put the equation into the form , that is, . As the initial condition is for a positive value, we will assume . We substitute to get the separable equation which has a solution We unsubstitute We want , so Thus and the solution we are looking for is    "
},
{
  "id": "substitution_section-6-2",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-2",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "  Solve , with .   "
},
{
  "id": "substitution_section-6-3",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-3",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "  Solve , with .   "
},
{
  "id": "substitution_section-6-4",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-4",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "",
  "body": "  Solve , with .   "
},
{
  "id": "substitution_section-6-5",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-5",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "",
  "body": "  Solve .   "
},
{
  "id": "substitution_section-6-6",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-6",
  "type": "Exercise",
  "number": "1.5.5",
  "title": "",
  "body": "  Solve .   "
},
{
  "id": "substitution_section-6-7",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-7",
  "type": "Exercise",
  "number": "1.5.6",
  "title": "",
  "body": "  Solve , with .   "
},
{
  "id": "substitution_section-6-8",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-8",
  "type": "Exercise",
  "number": "1.5.101",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "substitution_section-6-9",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-9",
  "type": "Exercise",
  "number": "1.5.102",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "substitution_section-6-10",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-10",
  "type": "Exercise",
  "number": "1.5.103",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "substitution_section-6-11",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-11",
  "type": "Exercise",
  "number": "1.5.104",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "auteq_section",
  "level": "1",
  "url": "auteq_section.html",
  "type": "Section",
  "number": "1.6",
  "title": "Autonomous equations",
  "body": " Autonomous equations  Note: 1 lecture, §2.2 in , §2.5 in  Consider problems of the form where the derivative of solutions depends only on (the dependent variable). Such equations are called autonomous equations autonomous equation . If we think of as time, the naming comes from the fact that the equation is independent of time.  We return to the cooling coffee problem ( ). Newton's law of cooling Newton's law of cooling says where is the temperature, is time, is some positive constant, and is the ambient temperature. See for an example with and .  Note the solution (in the figure ). We call these constant solutions the equilibrium solutions equilibrium solution . The points on the -axis where are called critical points critical point or equilibria equilibrium . The point is a critical point. In fact, each critical point corresponds to an equilibrium solution. Note also, by looking at the graph, that the solution is stable in that small perturbations in do not lead to substantially different solutions as grows. If we change the initial condition a little bit, then as , we still get . We call such a critical point stable stable critical point . In this simple example, all solutions in fact go to as . If a critical point is not stable, we say it is unstable unstable critical point .   The slope field and some solutions of .    The slope field and some solutions of .    Consider now the logistic equation logistic equation  for some positive and . This equation is commonly used to model population if we know the limiting population , that is, the maximum sustainable population. The logistic equation leads to less catastrophic predictions on world population than . In the real world, there is no such thing as negative population, but we will still consider negative for the purposes of the math.  See for an example, . There are two critical points, and . The critical point at is stable, while the critical point at is unstable. It is not necessary to find the exact solutions to understand their long term behavior, that is, behavior as time goes to infinity. From the slope field above of , we see that Here DNE means does not exist. From just looking at the slope field, we cannot quite decide what happens if . It could be that the solution does not exist for all the way to . Think of the equation ; we have seen that solutions only exist for some finite period of time. Same can happen here. In our example equation above it turns out that the solution does not exist for all time, but to see that we would have to solve the equation. In any case, the solution does go to , but it may get there rather quickly.  If we are interested only in the long term behavior of the solution, we would be doing unnecessary work if we solved the equation exactly. We could draw the slope field, but it is easier to just look at the phase diagram phase diagram or phase portrait phase portrait , which is a simple way to visualize the behavior of autonomous equations. In this case there is one dependent variable, the . We draw the -axis, we mark all the critical points, and then we draw arrows in between. Since is the dependent variable, we draw the axis vertically, as it appears in the slope field diagrams above. If , we draw an up arrow. If , we draw a down arrow. To figure this out, we could just plug in some between the critical points, will have the same sign at all between two critical points as long is continuous. For example, , so for , and the arrow above is a down arrow. Next, , so whenever , and the arrow points up. Finally, , so when , and the arrow points down.     Armed with the phase diagram, it is easy to sketch the solutions approximately: As time moves from left to right, the graph of a solution goes up if the arrow is up, and it goes down if the arrow is down.    Try sketching a few solutions simply from looking at the phase diagram. Check with the preceding graphs if you are getting the same type of curves.    Once we draw the phase diagram, we classify critical points as stable or unstable Unstable points with one of the arrows pointing towards the critical point are sometimes called semistable semistable critical point . . Since any mathematical model we cook up will only be an approximation to the real world, unstable points are generally bad news.     We remark that you can figure out the arrows by plotting the graph . However, in that case note that is then the dependent variable and will be on the horizontal axis.  Let us think about the logistic equation with harvesting logistic equation with harvesting harvesting . Suppose an alien race really likes to eat humans. They keep a planet with humans and harvest the humans at a rate of million humans per year. Suppose is the number of humans in millions on the planet and is time in years. Let be the limiting population when no harvesting is done. The number is a constant depending on how fast humans multiply. Our equation becomes We expand the right-hand side and set it to zero. Solving for the critical points, let us call them and , we get     Sketch a phase diagram for different possibilities. Note that these possibilities are , or , or and both complex (i.e. no real solutions). Hint: Fix some simple and and then vary .    For example, let and . When , then and are distinct and positive. See for the slope field. As long as the population starts above , which is approximately 1.55 million, then the population will not die out, it will tend towards million. If ever a catastrophe happens and the population drops below , humans will die out, and the fast food restaurant serving them will go out of business.   The slope field and some solutions of .    The slope field and some solutions of .    When , then . There is only one critical point and it is unstable More precisely, it is semistable. . When the population starts above 4 million, it will tend towards 4 million. However, if it ever drops below 4 million, perhaps a worse than normal hurricane season one year, then humans will die out on the planet. This scenario is not one that we (as the human fast food proprietor) want to be in. A small perturbation of the equilibrium state and we are out of business. There is no room for error. See .  Finally, if we are harvesting at 2 million humans per year, there are no critical points. The population will always plummet towards zero, no matter how well stocked the planet starts. See .   The slope field and some solutions of .       Consider .    Draw the phase diagram, find the critical points, and mark them stable or unstable.    Sketch typical solutions of the equation.    Find for the solution with the initial condition .        Consider .    Draw the phase diagram for . On this interval mark the critical points stable or unstable.    Sketch typical solutions of the equation.    Find for the solution with the initial condition .        Suppose is positive for , it is zero when and , and it is negative for all other .    Draw the phase diagram for , find the critical points, and mark them stable or unstable.    Sketch typical solutions of the equation.    Find for the solution with the initial condition .        Start with the logistic equation . Suppose we modify our harvesting. That is we will only harvest an amount proportional to current population. In other words, we harvest per unit of time for some (similar to earlier example with replaced with ).    Construct the differential equation.    Show that if , then the equation is still logistic.    What happens when ?        A disease is spreading through the country. Let be the number of people infected. Let the constant be the number of people susceptible to infection. The infection rate is proportional to the product of already infected people, , and the number of susceptible but uninfected people, .    Write down the differential equation.    Supposing , that is, some people are infected at time , what is .    Does the solution to part b) agree with your intuition? Why or why not?        Let .    Sketch the phase diagram and find critical points.    Classify the critical points.    If , then find .      a) 0, 1, 2 are critical points. b) is unstable (semistable), is stable, and is unstable. c) 1      Let .    Find and classify all critical points.    Find given any initial condition.      a) There are no critical points. b)       Assume that a population of fish in a lake satisfies . Now suppose that fish are continually added at fish per unit of time.    Find the differential equation for .    What is the new limiting population?      a)  b)       Suppose for two numbers .    Find the critical points, and classify them.    For b), c), d), find based on the phase diagram.     ,     ,     .      a) is a stable critical point, is an unstable one. b) , c) , d) or DNE.     "
},
{
  "id": "X2_2_coffeefig",
  "level": "2",
  "url": "auteq_section.html#X2_2_coffeefig",
  "type": "Figure",
  "number": "1.11",
  "title": "",
  "body": " The slope field and some solutions of .   "
},
{
  "id": "X2_2_logisticfig",
  "level": "2",
  "url": "auteq_section.html#X2_2_logisticfig",
  "type": "Figure",
  "number": "1.12",
  "title": "",
  "body": " The slope field and some solutions of .   "
},
{
  "id": "auteq_section-16",
  "level": "2",
  "url": "auteq_section.html#auteq_section-16",
  "type": "Exercise",
  "number": "1.6.1",
  "title": "",
  "body": "  Try sketching a few solutions simply from looking at the phase diagram. Check with the preceding graphs if you are getting the same type of curves.   "
},
{
  "id": "auteq_section-21",
  "level": "2",
  "url": "auteq_section.html#auteq_section-21",
  "type": "Exercise",
  "number": "1.6.2",
  "title": "",
  "body": "  Sketch a phase diagram for different possibilities. Note that these possibilities are , or , or and both complex (i.e. no real solutions). Hint: Fix some simple and and then vary .   "
},
{
  "id": "X2_2_harv1",
  "level": "2",
  "url": "auteq_section.html#X2_2_harv1",
  "type": "Figure",
  "number": "1.13",
  "title": "",
  "body": " The slope field and some solutions of .   "
},
{
  "id": "X2_2_harvc",
  "level": "2",
  "url": "auteq_section.html#X2_2_harvc",
  "type": "Figure",
  "number": "1.14",
  "title": "",
  "body": " The slope field and some solutions of .   "
},
{
  "id": "X2_2_harv2",
  "level": "2",
  "url": "auteq_section.html#X2_2_harv2",
  "type": "Figure",
  "number": "1.15",
  "title": "",
  "body": " The slope field and some solutions of .   "
},
{
  "id": "auteq_section-33-1",
  "level": "2",
  "url": "auteq_section.html#auteq_section-33-1",
  "type": "Exercise",
  "number": "1.6.3",
  "title": "",
  "body": "  Consider .    Draw the phase diagram, find the critical points, and mark them stable or unstable.    Sketch typical solutions of the equation.    Find for the solution with the initial condition .     "
},
{
  "id": "auteq_section-33-2",
  "level": "2",
  "url": "auteq_section.html#auteq_section-33-2",
  "type": "Exercise",
  "number": "1.6.4",
  "title": "",
  "body": "  Consider .    Draw the phase diagram for . On this interval mark the critical points stable or unstable.    Sketch typical solutions of the equation.    Find for the solution with the initial condition .     "
},
{
  "id": "auteq_section-33-3",
  "level": "2",
  "url": "auteq_section.html#auteq_section-33-3",
  "type": "Exercise",
  "number": "1.6.5",
  "title": "",
  "body": "  Suppose is positive for , it is zero when and , and it is negative for all other .    Draw the phase diagram for , find the critical points, and mark them stable or unstable.    Sketch typical solutions of the equation.    Find for the solution with the initial condition .     "
},
{
  "id": "auteq_section-33-4",
  "level": "2",
  "url": "auteq_section.html#auteq_section-33-4",
  "type": "Exercise",
  "number": "1.6.6",
  "title": "",
  "body": "  Start with the logistic equation . Suppose we modify our harvesting. That is we will only harvest an amount proportional to current population. In other words, we harvest per unit of time for some (similar to earlier example with replaced with ).    Construct the differential equation.    Show that if , then the equation is still logistic.    What happens when ?     "
},
{
  "id": "auteq_section-33-5",
  "level": "2",
  "url": "auteq_section.html#auteq_section-33-5",
  "type": "Exercise",
  "number": "1.6.7",
  "title": "",
  "body": "  A disease is spreading through the country. Let be the number of people infected. Let the constant be the number of people susceptible to infection. The infection rate is proportional to the product of already infected people, , and the number of susceptible but uninfected people, .    Write down the differential equation.    Supposing , that is, some people are infected at time , what is .    Does the solution to part b) agree with your intuition? Why or why not?     "
},
{
  "id": "auteq_section-33-6",
  "level": "2",
  "url": "auteq_section.html#auteq_section-33-6",
  "type": "Exercise",
  "number": "1.6.101",
  "title": "",
  "body": "  Let .    Sketch the phase diagram and find critical points.    Classify the critical points.    If , then find .      a) 0, 1, 2 are critical points. b) is unstable (semistable), is stable, and is unstable. c) 1   "
},
{
  "id": "auteq_section-33-7",
  "level": "2",
  "url": "auteq_section.html#auteq_section-33-7",
  "type": "Exercise",
  "number": "1.6.102",
  "title": "",
  "body": "  Let .    Find and classify all critical points.    Find given any initial condition.      a) There are no critical points. b)    "
},
{
  "id": "auteq_section-33-8",
  "level": "2",
  "url": "auteq_section.html#auteq_section-33-8",
  "type": "Exercise",
  "number": "1.6.103",
  "title": "",
  "body": "  Assume that a population of fish in a lake satisfies . Now suppose that fish are continually added at fish per unit of time.    Find the differential equation for .    What is the new limiting population?      a)  b)    "
},
{
  "id": "auteq_section-33-9",
  "level": "2",
  "url": "auteq_section.html#auteq_section-33-9",
  "type": "Exercise",
  "number": "1.6.104",
  "title": "",
  "body": "  Suppose for two numbers .    Find the critical points, and classify them.    For b), c), d), find based on the phase diagram.     ,     ,     .      a) is a stable critical point, is an unstable one. b) , c) , d) or DNE.   "
},
{
  "id": "numer_section",
  "level": "1",
  "url": "numer_section.html",
  "type": "Section",
  "number": "1.7",
  "title": "Numerical methods: Euler’s method",
  "body": " Numerical methods: Euler's method  Note: 1 lecture, can safely be skipped, §2.4 in , §8.1 in  Unless is of a special form, it is generally very hard if not impossible to get a nice formula for the solution of the problem   If the equation can be solved in closed form, we should do that. But what if we have an equation that cannot be solved in closed form? What if we want to find the value of the solution at some particular ? Or perhaps we want to produce a graph of the solution to inspect the behavior. In this section we will learn about the basics of numerical approximation of solutions.  The simplest method for approximating a solution is Euler's method Euler's method Named after the Swiss mathematician Leonhard Paul Euler (1707–1783). The correct pronunciation of the name sounds more like oiler. . It works as follows: Take and and compute the slope . The slope is the change in per unit change in . Follow the line for an interval of length on the -axis. We call the step size step size . Hence if at , then we say that , the approximate value of at , is . Rinse, repeat! Let , and then compute and . Now compute and using and , etc. Consider the equation , , and . Then and . We compute We draw an approximate graph of the solution by connecting the points , , ,.... See for the first two steps of the method.   First two steps of Euler's method with for the equation with initial conditions .    We can continue along, for any , we compute The line segments we get are an approximate graph of the solution. In particular, is the approximation of . Generally it is not exactly the solution. See for the plot of the real solution and the approximation.   Two steps of Euler's method (step size 1) and the exact solution for the equation with initial conditions .    We continue with the example , . We have approximated with Euler's method with step size 1. We conclude that is approximately , that is, . The real answer is 3. We are off by roughly 1.074. The difference between the actual solution and the approximate solution is called the error. We usually talk about the size of the error and we do not care much about its sign. We usually do not know the error exactly. If we knew the error exactly, we would know the actual solution ... so what is the point of doing the approximation?    Solve the problem , exactly and show that .    Let us now halve the step size to to, hopefully, improve the approximation. With half the step size, we do twice as many steps. Here, to find , we do 4 steps with as then . Computing , we find . An error of about 0.791. gives the values computed, for a few more halvings.   Euler's method approximation of where of , .   Approximate Error Steps done  1 1.92593 1.07407 2  0.5 2.20861 0.79139 0.73681 4  0.25 2.47250 0.52751 0.66656 8  0.125 2.68034 0.31966 0.60599 16  0.0625 2.82040 0.17960 0.56184 32  0.03125 2.90412 0.09588 0.53385 64  0.015625 2.95035 0.04965 0.51779 128  0.0078125 2.97472 0.02528 0.50913 256    Note that except for the first few times, each time we halve the , the error approximately halves. Halving of the error is a general feature of Euler's method as it is a first-order method first-order method . A simple improvement of the Euler method, see the exercises, produces a second-order method second-order method . A second-order method reduces the error to approximately one quarter every time we halve the step size. The order being second means the squaring in .  To get the error to be less than 0.1, we did 64 steps. To get it below 0.01, we would have to halve another three or four times, doing 512 or 1024 steps. The improved Euler method from the exercises should quarter the error every time we halve the step size, so we would have to do (approximately) half as many halvings to get the same error. This reduction can be a big deal. With 10 halvings (starting at ) we have 1024 steps, whereas with 5 halvings we only have to do 32 steps, assuming that the error was comparable to start with. A computer may not care about this difference for a problem this simple, but suppose each step would take a second to compute (the function may be substantially more difficult to compute than ). Then the difference is 32 seconds versus about 17 minutes. We are not being altogether fair; a second-order method would probably double the time to do each step. Even so, it is 1 minute versus 17 minutes. Next, suppose that we have to repeat such a calculation for different parameters a thousand times. You get the idea.  In practice, we do not know how large the error is! How do we know what is the right step size? One possibility is that we keep halving the step size, and if we are lucky, we can estimate the error from a few of these calculations and the assumption that the error halves each time (if we are using standard Euler).    In the table above, suppose you do not know the error. Take the approximate values of the function in the last two lines, assume that the error halves. Can you estimate the error in the last line from this information? Does it (approximately) agree with the table? Now do it for the first two rows. Does this agree with the table? Feel free to assume that the real value of is bigger than any of the approximate values, but you are not allowed to know the real value.    Let us talk a little bit more about the example , . Suppose that instead of , we wish to find . lists the results of this effort for successive halvings of . What is going on here? Well, you should solve the equation exactly and you will notice that the solution does not exist at . In fact, the solution goes to infinity when you approach .   Attempts to use Euler's to approximate where of , .   Approximate  1 3.16232  0.5 4.54329  0.25 6.86079  0.125 10.80321  0.0625 17.59893  0.03125 29.46004  0.015625 50.40121  0.0078125 87.75769    Another case where things go bad is if the solution oscillates wildly near some point. The solution may exist at all points, but even a much better numerical method than Euler would need an insanely small step size to approximate the solution with reasonable precision. And computers might not be able to easily handle such a small step size.  In real applications, we would not use a simple method such as Euler's. The simplest method one would probably use in a real application is the standard Runge–Kutta method (see exercises). That is a fourth-order method fourth-order method , meaning that if we halve the step size, the error gets multiplied by (it is fourth-order as ).  Choosing the right method to use and the right step size can be very tricky. There are several competing factors to consider.    Computational time: Each step takes computer time. Even if the function is simple to compute, we do it many times over. Large step size (fewer steps) means faster computation, but perhaps not the right precision.    Roundoff errors: Computers only compute with a certain number of significant digits. Errors introduced by rounding numbers during computations become noticeable when the step size becomes too small relative to the quantities we are working with. So reducing step size too much may make errors worse. There is a certain optimum step size where the precision increases as we approach it, but then starts getting worse as we make our step size smaller still. The trouble is that this optimum may be hard to find.    Stability: Certain equations may be numerically unstable. What may happen is that the numbers never seem to stabilize no matter how many times we halve the step size. We may need a ridiculously small step size, which may not be practical due to roundoff errors or computational time considerations. Such problems are sometimes called stiff stiff problem . In the worst case, the numerical computations might be giving us bogus numbers that look like a correct answer. Just because the numbers seem to have stabilized after successive halving, does not mean that we must have the right answer.    We have seen just the beginnings of the challenges that appear in real applications. Numerical approximation of solutions to differential equations is an active research area for engineers and mathematicians. For example, the general purpose method used for the ODE solver in Matlab and Octave (as of this writing) is a method that appeared in the literature only in the 1980s.     Consider , . Use Euler's method with step size to approximate .      Consider , .    Use Euler's method with step sizes to approximate .    Solve the equation exactly.    Describe what happens to the errors for each you used. That is, find the factor by which the error changed each time you halved the step size.        Approximate the value of by looking at the initial value problem with and approximating using Euler's method with a step size of .      Example of numerical instability: Take , . We know that the solution should decay to zero as grows. Using Euler's method, start with and compute to try to approximate . What happened? Now halve the step size. Keep halving the step size and approximating until the numbers you are getting start to stabilize (that is, until they start going towards zero). Note: You might want to use a calculator.    The simplest method used in practice is the Runge–Kutta method Runge–Kutta method . Consider , , and a step size . Everything is the same as in Euler's method, except the computation of and . That is, in each step we compute slopes , , , and , and then we compute the next and :     Consider , .    Approximate using Runge–Kutta (see above) with step sizes and .    Approximate using Euler's method with and .    Solve exactly, find the exact value of , and compare with the approximations.        Let , and . Approximate using Euler's method with step sizes 1, 0.5, 0.25. Use a calculator and compute up to 4 decimal digits.    Approximately: 1.0000, 1.2397, 1.3829      Let , and .    Approximate using Euler's method with step sizes 4, 2, and 1.    Solve exactly, and compute the errors.    Compute the factor by which the errors changed.      a) 0, 8, 12 b) , so errors are: 16, 8, 4. c) Factors are 0.5 and 0.5.      Let , and .    Approximate using Euler's method with step sizes 4, 2, and 1.    Guess an exact solution based on part a) and compute the errors.      a) 0, 0, 0 b) is a solution so errors are: 0, 0, 0.    There is a simple way to improve Euler's method to make it a second-order method by doing just one extra step. Improved Euler's method Consider , , and a step size . What we do is to pretend we compute the next step as in Euler, that is, we start with , we compute a slope , and then look at the point . Instead of letting our new point be , we compute the slope at that point, call it , and then take the average of and , hoping that the average is going to be closer to the actual slope on the interval from to . And we are correct, if we halve the step, the error should get multiplied by . To summarize, the setup is the same as for regular Euler, except the computation of and . At each step, we compute the new slopes and and then the next and :     Consider , .    Approximate using the improved Euler's method (see above) with step sizes and .    Approximate using Euler's method with and .    Solve exactly, find the exact value of .    Compute the errors, and the factors by which the errors changed.      a) Improved Euler: for , for , b) Standard Euler: for , for , c) , so is approximately . d) Approximate errors for improved Euler: for and for . For standard Euler: for and for . Factor is approximately for improved Euler and for standard Euler.     "
},
{
  "id": "euler-step12_fig",
  "level": "2",
  "url": "numer_section.html#euler-step12_fig",
  "type": "Figure",
  "number": "1.16",
  "title": "",
  "body": " First two steps of Euler's method with for the equation with initial conditions .   "
},
{
  "id": "euler-step12-sol_fig",
  "level": "2",
  "url": "numer_section.html#euler-step12-sol_fig",
  "type": "Figure",
  "number": "1.17",
  "title": "",
  "body": " Two steps of Euler's method (step size 1) and the exact solution for the equation with initial conditions .   "
},
{
  "id": "numer_section-14",
  "level": "2",
  "url": "numer_section.html#numer_section-14",
  "type": "Exercise",
  "number": "1.7.1",
  "title": "",
  "body": "  Solve the problem , exactly and show that .   "
},
{
  "id": "euler-table_table",
  "level": "2",
  "url": "numer_section.html#euler-table_table",
  "type": "Table",
  "number": "1.1",
  "title": "Euler’s method approximation of <span class=\"process-math\">\\(y(2)\\)<\/span> where of <span class=\"process-math\">\\(y'=\\nicefrac{y^2}{3}\\text{,}\\)<\/span> <span class=\"process-math\">\\(y(0)=1\\text{.}\\)<\/span>",
  "body": " Euler's method approximation of where of , .   Approximate Error Steps done  1 1.92593 1.07407 2  0.5 2.20861 0.79139 0.73681 4  0.25 2.47250 0.52751 0.66656 8  0.125 2.68034 0.31966 0.60599 16  0.0625 2.82040 0.17960 0.56184 32  0.03125 2.90412 0.09588 0.53385 64  0.015625 2.95035 0.04965 0.51779 128  0.0078125 2.97472 0.02528 0.50913 256   "
},
{
  "id": "numer_section-22",
  "level": "2",
  "url": "numer_section.html#numer_section-22",
  "type": "Exercise",
  "number": "1.7.2",
  "title": "",
  "body": "  In the table above, suppose you do not know the error. Take the approximate values of the function in the last two lines, assume that the error halves. Can you estimate the error in the last line from this information? Does it (approximately) agree with the table? Now do it for the first two rows. Does this agree with the table? Feel free to assume that the real value of is bigger than any of the approximate values, but you are not allowed to know the real value.   "
},
{
  "id": "euler-table2_table",
  "level": "2",
  "url": "numer_section.html#euler-table2_table",
  "type": "Table",
  "number": "1.2",
  "title": "Attempts to use Euler’s to approximate <span class=\"process-math\">\\(y(3)\\)<\/span> where of <span class=\"process-math\">\\(y'=\\nicefrac{y^2}{3}\\text{,}\\)<\/span> <span class=\"process-math\">\\(y(0)=1\\text{.}\\)<\/span>",
  "body": " Attempts to use Euler's to approximate where of , .   Approximate  1 3.16232  0.5 4.54329  0.25 6.86079  0.125 10.80321  0.0625 17.59893  0.03125 29.46004  0.015625 50.40121  0.0078125 87.75769   "
},
{
  "id": "numer_section-32-1",
  "level": "2",
  "url": "numer_section.html#numer_section-32-1",
  "type": "Exercise",
  "number": "1.7.3",
  "title": "",
  "body": "  Consider , . Use Euler's method with step size to approximate .   "
},
{
  "id": "numer_section-32-2",
  "level": "2",
  "url": "numer_section.html#numer_section-32-2",
  "type": "Exercise",
  "number": "1.7.4",
  "title": "",
  "body": "  Consider , .    Use Euler's method with step sizes to approximate .    Solve the equation exactly.    Describe what happens to the errors for each you used. That is, find the factor by which the error changed each time you halved the step size.     "
},
{
  "id": "numer_section-32-3",
  "level": "2",
  "url": "numer_section.html#numer_section-32-3",
  "type": "Exercise",
  "number": "1.7.5",
  "title": "",
  "body": "  Approximate the value of by looking at the initial value problem with and approximating using Euler's method with a step size of .   "
},
{
  "id": "numer_section-32-4",
  "level": "2",
  "url": "numer_section.html#numer_section-32-4",
  "type": "Exercise",
  "number": "1.7.6",
  "title": "",
  "body": "  Example of numerical instability: Take , . We know that the solution should decay to zero as grows. Using Euler's method, start with and compute to try to approximate . What happened? Now halve the step size. Keep halving the step size and approximating until the numbers you are getting start to stabilize (that is, until they start going towards zero). Note: You might want to use a calculator.   "
},
{
  "id": "numer_section-32-6",
  "level": "2",
  "url": "numer_section.html#numer_section-32-6",
  "type": "Exercise",
  "number": "1.7.7",
  "title": "",
  "body": "  Consider , .    Approximate using Runge–Kutta (see above) with step sizes and .    Approximate using Euler's method with and .    Solve exactly, find the exact value of , and compare with the approximations.     "
},
{
  "id": "numer_section-32-7",
  "level": "2",
  "url": "numer_section.html#numer_section-32-7",
  "type": "Exercise",
  "number": "1.7.101",
  "title": "",
  "body": "  Let , and . Approximate using Euler's method with step sizes 1, 0.5, 0.25. Use a calculator and compute up to 4 decimal digits.    Approximately: 1.0000, 1.2397, 1.3829   "
},
{
  "id": "numer_section-32-8",
  "level": "2",
  "url": "numer_section.html#numer_section-32-8",
  "type": "Exercise",
  "number": "1.7.102",
  "title": "",
  "body": "  Let , and .    Approximate using Euler's method with step sizes 4, 2, and 1.    Solve exactly, and compute the errors.    Compute the factor by which the errors changed.      a) 0, 8, 12 b) , so errors are: 16, 8, 4. c) Factors are 0.5 and 0.5.   "
},
{
  "id": "numer_section-32-9",
  "level": "2",
  "url": "numer_section.html#numer_section-32-9",
  "type": "Exercise",
  "number": "1.7.103",
  "title": "",
  "body": "  Let , and .    Approximate using Euler's method with step sizes 4, 2, and 1.    Guess an exact solution based on part a) and compute the errors.      a) 0, 0, 0 b) is a solution so errors are: 0, 0, 0.   "
},
{
  "id": "numer_section-32-11",
  "level": "2",
  "url": "numer_section.html#numer_section-32-11",
  "type": "Exercise",
  "number": "1.7.104",
  "title": "",
  "body": "  Consider , .    Approximate using the improved Euler's method (see above) with step sizes and .    Approximate using Euler's method with and .    Solve exactly, find the exact value of .    Compute the errors, and the factors by which the errors changed.      a) Improved Euler: for , for , b) Standard Euler: for , for , c) , so is approximately . d) Approximate errors for improved Euler: for and for . For standard Euler: for and for . Factor is approximately for improved Euler and for standard Euler.   "
},
{
  "id": "exact_section",
  "level": "1",
  "url": "exact_section.html",
  "type": "Section",
  "number": "1.8",
  "title": "Exact equations",
  "body": " Exact equations   Note: 1–2 lectures, can safely be skipped, §1.6 in , §2.6 in  A type of equation that comes up quite often in physics and engineering is an exact equation exact equation . Suppose is a function of two variables, which we call the potential function potential function . The naming should suggest potential energy, or electric potential. Exact equations and potential functions appear when there is a conservation law at play, such as conservation of energy. Let us make up a simple example. Consider    Solutions to for various .    We are interested in the lines of constant potential Accordingly, these curves are sometimes called equipotential curves equipotential curves . ; curves given by , for some constant . In our example, the curves are circles. See .  We take the total derivative total derivative of : For convenience, we will use the notation and . In our example, If we apply the total derivative to the equation , we find the differential equation . This differential equation has the form An equation of this form is called exact if it was obtained as for some potential function . In our simple example, we obtain the equation Since we obtained this equation by differentiating , the equation is exact. We often wish to solve for in terms of . In our example,   In terms of multivariable calculus, at each point in the plane, is a vector, that is, a direction and a magnitude. As and are functions of , we have a vector field vector field . A vector field that comes from an exact equation is a so-called conservative vector field conservative vector field , that is, a vector field that comes with a potential function , such that Let be a path in the plane starting at and ending at . If we think of as force, then the work required to move along is the path integral In other words, the work done depends only on the endpoints—where we start and where we end. For example, suppose is gravitational potential (physicists use the convention that is the potential, but idea is the same). The derivative of given by is the gravitational force. What we are saying is that the work required to move a heavy box from the ground floor to the roof only depends on the change in potential energy. The work done is the same no matter what path we took; if we took the stairs or the elevator. Although if we took the elevator, the elevator did the work for us. Movement along the curves requires no work done, such as the heavy box sliding along without accelerating or braking on a perfectly flat roof on a cart with incredibly well-oiled wheels.  An exact equation is a conservative vector field, and the implicit solution of this equation is the potential function.    Solving exact equations  Now you, the reader, should ask: Where did we solve a differential equation? Well, in applications we generally know and , but we do not know . That is, we may have just started with , or perhaps even It is up to us to find some potential that works. Many different will work; adding a constant to does not change the equation. Once we have a potential function , the equation gives an implicit solution of the ODE.    Let us find the general solution to . Forget we know .  If we know that this is an exact equation, we start looking for a potential function . We have and . If exists, it must be such that . Integrate in the variable to find for some function . The function is the constant of integration, though it is only constant as far as is concerned, and may still depend on . Now differentiate in and set it equal to , which is what is supposed to be: Integrating, we find . We could add a constant of integration if we wanted to, but there is no need. We found . Next for a constant , we solve for in terms of . In this case, we obtain as we did before.      Why did we not need to add a constant of integration when integrating ? Add a constant of integration, say , and see what you get. What is the difference from what we got above, and why does it not matter?    The procedure, once we know that the equation is exact, is:    Integrate in resulting in .    Differentiate this in and set that equal to . Then find by integration.    The procedure can also be done by first integrating in and then differentiating in . Pretty easy huh? Let's try this again.    Consider now .  OK, so and . We try to proceed as before. Suppose exists. Then . We integrate: for some function . Differentiate in and set equal to : But there is no way to satisfy this requirement! The function cannot be written as plus a function of . The equation is not exact; no potential function exists.    Is there an easier way to check for exactness, other than failing in trying to find ? Yes there is. Suppose and . As long as the second derivatives are continuous, If , the equation is not exact. For example, in , where and , the equation is not exact. Indeed, and are not equal.  What is interesting is that this idea works in reverse too. If , then a potential exists, at least near an initial point. This result is called the Poincaré Lemma Named for the French polymath Jules Henri Poincaré (1854–1912). .   Poincaré Lemma  Poincaré Lemma   If and are continuously differentiable functions of , and , then near any point there is a function such that and .      Solve Write the equation as so , , and Poincaré Lemma applies, so let us look for . Integrating in , we find Differentiating in and setting to , we find So , and will work. We obtain , so the implicit solution is . First we find . As , we have . Therefore, , so . Now we solve for to get       Solve We leave to the reader to check that , so the Poincaré Lemma applies.  This vector field is not conservative (the equation is not exact) if considered as a vector field of the entire plane minus the origin. The problem is that if the curve is a circle around the origin, say starting at and ending at going counterclockwise, then if existed, we would expect That is nonsense! We leave the computation of the path integral to the interested reader, or you can consult your multivariable calculus textbook. So there is no potential function defined everywhere outside the origin .  The Poincaré Lemma does not guarantee such an anyway. It only guarantees a potential function locally—only in some region containing the initial point. As , we start at the point . Considering and integrating in or in , we find This is defined on the region and so the equation is exact on that region. The implicit solution is . Solving, . That is, the solution is a straight line. Solving gives us that , and so is the desired solution. See , and note again that the solution only exists for .   Solution to , , with initial point marked.      If the region where and are defined and where has no holes, such as, for instance, the entire -plane, then the equation is exact and an defined on that region can be found. For example, in , and are defined in the entire plane and , so there a global exists. Similarly, in the half-plane where also has no holes and a potential function exists on that region. So in such cases, checking is good enough to check for being exact.    Solve   The reader should check that this equation is exact. Let and . We follow the procedure for exact equations and Therefore or and . We try to solve . We easily solve for and then just take the square root: When , the term in front of is zero, and our explicit solution is not valid. The given equation has no solution (for ) near , but the equation does have a solution . In fact, one could solve for in terms of for any initial condition. The solution is messy, so we leave it as .      Integrating factors  Sometimes an equation is not exact, but it can be made exact by multiplying with a function . That is, perhaps for some nonzero function , is exact. Any solution to this new equation is also a solution to .  In fact, a linear equation is always such an equation. Let be the integrating factor for the linear equation. Multiply the equation by and write it in the form of . Then , so , while , so . In other words, we have an exact equation. Integrating factors for linear functions are just a special case of integrating factors for exact equations.  But how do we find the integrating factor ? Well, for to be exact, the function should satisfy Therefore, At first it may seem we replaced one differential equation by another. Even worse, the new equation is a PDE. True, but all hope is not lost.  A strategy that often works is to look for a that is a function of alone, or a function of alone. After all, that is what worked for linear equations. If is a function of alone, that is, , then we write instead of , and is just zero. Then In particular, ought to be a function of alone (not depend on ). If so, then we have a linear equation Letting , we solve the linear equation to find . The constant in the solution is not relevant, we need any nonzero solution, so we take . Then is the integrating factor making the equation exact.  Similarly, we could try a function of the form . Then In particular, ought to be a function of alone. If so, we have a linear equation Letting , we find . We take . So is the integrating factor.    Solve   Let and . Compute As this is not zero, the equation is not exact. We notice is a function of alone. We compute the integrating factor We multiply our given equation by to obtain which is an exact equation that we solved in . The solution was       Solve   First compute As this is not zero, the equation is not exact. We observe is a function of alone. We compute the integrating factor Therefore, we look at the exact equation The reader should double check that this equation is exact. We follow the procedure for exact equations and Consequently, or . Thus . It is not possible to solve for in terms of elementary functions, so let us be content with the implicit solution: We are looking for the general solution and we divided by above. We should check what happens when , as the equation itself makes perfect sense in that case. We plug in to find the equation is satisfied. So is also a solution.        Solve the following exact equations, implicit general solutions will suffice:                            Find the integrating factors for the following equations making them into exact equations:                            Suppose you have an equation of the form: .    Show it is exact.    Find the form of the potential function in terms of and .        Suppose that we have the equation .    Is this equation exact?    Find the general solution using a definite integral.        Find the potential function of the exact equation in two different ways.    Integrate in terms of and then differentiate in and set to .    Integrate in terms of and then differentiate in and set to .        A function is said to be a harmonic function harmonic function if .    Show if is harmonic, is an exact equation. So there exists (at least locally) the so-called harmonic conjugate harmonic conjugate function such that and .    Verify that the following are harmonic and find the corresponding harmonic conjugates :                       Solve the following exact equations, implicit general solutions will suffice:                          a)  b)  c)  d)       Find the integrating factor for the following equations making them into exact equations:                          a) Integrating factor is , equation becomes . b) Integrating factor is , equation becomes . c) Integrating factor is , equation becomes . d) Integrating factor is , equation becomes .          Show that every separable equation can be written as an exact equation, and verify that it is indeed exact.    Rewrite as an exact equation, solve it, and verify that the solution is the same as it was in .      a) The equation is , and this is exact because , , so . b) , leads to potential function , solving leads to the same solution as the example.     "
},
{
  "id": "exact_circlesfig",
  "level": "2",
  "url": "exact_section.html#exact_circlesfig",
  "type": "Figure",
  "number": "1.18",
  "title": "",
  "body": " Solutions to for various .   "
},
{
  "id": "exact_section-3-3",
  "level": "2",
  "url": "exact_section.html#exact_section-3-3",
  "type": "Example",
  "number": "1.8.1",
  "title": "",
  "body": "  Let us find the general solution to . Forget we know .  If we know that this is an exact equation, we start looking for a potential function . We have and . If exists, it must be such that . Integrate in the variable to find for some function . The function is the constant of integration, though it is only constant as far as is concerned, and may still depend on . Now differentiate in and set it equal to , which is what is supposed to be: Integrating, we find . We could add a constant of integration if we wanted to, but there is no need. We found . Next for a constant , we solve for in terms of . In this case, we obtain as we did before.   "
},
{
  "id": "exact_section-3-4",
  "level": "2",
  "url": "exact_section.html#exact_section-3-4",
  "type": "Exercise",
  "number": "1.8.1",
  "title": "",
  "body": "  Why did we not need to add a constant of integration when integrating ? Add a constant of integration, say , and see what you get. What is the difference from what we got above, and why does it not matter?   "
},
{
  "id": "exact_example_2xyandxy",
  "level": "2",
  "url": "exact_section.html#exact_example_2xyandxy",
  "type": "Example",
  "number": "1.8.2",
  "title": "",
  "body": "  Consider now .  OK, so and . We try to proceed as before. Suppose exists. Then . We integrate: for some function . Differentiate in and set equal to : But there is no way to satisfy this requirement! The function cannot be written as plus a function of . The equation is not exact; no potential function exists.   "
},
{
  "id": "exact_section-3-11",
  "level": "2",
  "url": "exact_section.html#exact_section-3-11",
  "type": "Theorem",
  "number": "1.8.1",
  "title": "Poincaré Lemma.",
  "body": " Poincaré Lemma  Poincaré Lemma   If and are continuously differentiable functions of , and , then near any point there is a function such that and .   "
},
{
  "id": "exact_exactR2example",
  "level": "2",
  "url": "exact_section.html#exact_exactR2example",
  "type": "Example",
  "number": "1.8.3",
  "title": "",
  "body": "  Solve Write the equation as so , , and Poincaré Lemma applies, so let us look for . Integrating in , we find Differentiating in and setting to , we find So , and will work. We obtain , so the implicit solution is . First we find . As , we have . Therefore, , so . Now we solve for to get    "
},
{
  "id": "exact_examplevortex",
  "level": "2",
  "url": "exact_section.html#exact_examplevortex",
  "type": "Example",
  "number": "1.8.4",
  "title": "",
  "body": "  Solve We leave to the reader to check that , so the Poincaré Lemma applies.  This vector field is not conservative (the equation is not exact) if considered as a vector field of the entire plane minus the origin. The problem is that if the curve is a circle around the origin, say starting at and ending at going counterclockwise, then if existed, we would expect That is nonsense! We leave the computation of the path integral to the interested reader, or you can consult your multivariable calculus textbook. So there is no potential function defined everywhere outside the origin .  The Poincaré Lemma does not guarantee such an anyway. It only guarantees a potential function locally—only in some region containing the initial point. As , we start at the point . Considering and integrating in or in , we find This is defined on the region and so the equation is exact on that region. The implicit solution is . Solving, . That is, the solution is a straight line. Solving gives us that , and so is the desired solution. See , and note again that the solution only exists for .   Solution to , , with initial point marked.     "
},
{
  "id": "exact_exampleabove",
  "level": "2",
  "url": "exact_section.html#exact_exampleabove",
  "type": "Example",
  "number": "1.8.5",
  "title": "",
  "body": "  Solve   The reader should check that this equation is exact. Let and . We follow the procedure for exact equations and Therefore or and . We try to solve . We easily solve for and then just take the square root: When , the term in front of is zero, and our explicit solution is not valid. The given equation has no solution (for ) near , but the equation does have a solution . In fact, one could solve for in terms of for any initial condition. The solution is messy, so we leave it as .   "
},
{
  "id": "exact_section-4-7",
  "level": "2",
  "url": "exact_section.html#exact_section-4-7",
  "type": "Example",
  "number": "1.8.6",
  "title": "",
  "body": "  Solve   Let and . Compute As this is not zero, the equation is not exact. We notice is a function of alone. We compute the integrating factor We multiply our given equation by to obtain which is an exact equation that we solved in . The solution was    "
},
{
  "id": "exact_section-4-8",
  "level": "2",
  "url": "exact_section.html#exact_section-4-8",
  "type": "Example",
  "number": "1.8.7",
  "title": "",
  "body": "  Solve   First compute As this is not zero, the equation is not exact. We observe is a function of alone. We compute the integrating factor Therefore, we look at the exact equation The reader should double check that this equation is exact. We follow the procedure for exact equations and Consequently, or . Thus . It is not possible to solve for in terms of elementary functions, so let us be content with the implicit solution: We are looking for the general solution and we divided by above. We should check what happens when , as the equation itself makes perfect sense in that case. We plug in to find the equation is satisfied. So is also a solution.   "
},
{
  "id": "exact_section-5-1",
  "level": "2",
  "url": "exact_section.html#exact_section-5-1",
  "type": "Exercise",
  "number": "1.8.2",
  "title": "",
  "body": "  Solve the following exact equations, implicit general solutions will suffice:                         "
},
{
  "id": "exact_section-5-2",
  "level": "2",
  "url": "exact_section.html#exact_section-5-2",
  "type": "Exercise",
  "number": "1.8.3",
  "title": "",
  "body": "  Find the integrating factors for the following equations making them into exact equations:                         "
},
{
  "id": "exact_section-5-3",
  "level": "2",
  "url": "exact_section.html#exact_section-5-3",
  "type": "Exercise",
  "number": "1.8.4",
  "title": "",
  "body": "  Suppose you have an equation of the form: .    Show it is exact.    Find the form of the potential function in terms of and .     "
},
{
  "id": "exact_section-5-4",
  "level": "2",
  "url": "exact_section.html#exact_section-5-4",
  "type": "Exercise",
  "number": "1.8.5",
  "title": "",
  "body": "  Suppose that we have the equation .    Is this equation exact?    Find the general solution using a definite integral.     "
},
{
  "id": "exact_section-5-5",
  "level": "2",
  "url": "exact_section.html#exact_section-5-5",
  "type": "Exercise",
  "number": "1.8.6",
  "title": "",
  "body": "  Find the potential function of the exact equation in two different ways.    Integrate in terms of and then differentiate in and set to .    Integrate in terms of and then differentiate in and set to .     "
},
{
  "id": "exact_section-5-6",
  "level": "2",
  "url": "exact_section.html#exact_section-5-6",
  "type": "Exercise",
  "number": "1.8.7",
  "title": "",
  "body": "  A function is said to be a harmonic function harmonic function if .    Show if is harmonic, is an exact equation. So there exists (at least locally) the so-called harmonic conjugate harmonic conjugate function such that and .    Verify that the following are harmonic and find the corresponding harmonic conjugates :                    "
},
{
  "id": "exact_section-5-7",
  "level": "2",
  "url": "exact_section.html#exact_section-5-7",
  "type": "Exercise",
  "number": "1.8.101",
  "title": "",
  "body": "  Solve the following exact equations, implicit general solutions will suffice:                          a)  b)  c)  d)    "
},
{
  "id": "exact_section-5-8",
  "level": "2",
  "url": "exact_section.html#exact_section-5-8",
  "type": "Exercise",
  "number": "1.8.102",
  "title": "",
  "body": "  Find the integrating factor for the following equations making them into exact equations:                          a) Integrating factor is , equation becomes . b) Integrating factor is , equation becomes . c) Integrating factor is , equation becomes . d) Integrating factor is , equation becomes .   "
},
{
  "id": "exact_section-5-9",
  "level": "2",
  "url": "exact_section.html#exact_section-5-9",
  "type": "Exercise",
  "number": "1.8.103",
  "title": "",
  "body": "      Show that every separable equation can be written as an exact equation, and verify that it is indeed exact.    Rewrite as an exact equation, solve it, and verify that the solution is the same as it was in .      a) The equation is , and this is exact because , , so . b) , leads to potential function , solving leads to the same solution as the example.   "
},
{
  "id": "fopde_section",
  "level": "1",
  "url": "fopde_section.html",
  "type": "Section",
  "number": "1.9",
  "title": "First-order linear PDEs",
  "body": " First-order linear PDEs  Note: 1 lecture, can safely be skipped  We have only considered ODEs so far, so let us solve a linear first-order PDE. Consider where is a function of and . We again use the notation and for convenience. The initial condition initial condition for a PDE  is now a function of rather than just a number. In these problems, it is useful to think of as position and as time. The equation describes the evolution of a function of as time goes on. Below, the coefficients , , , and the function are mostly going to be constant or zero. The method we describe works with nonconstant coefficients, although the computations may get difficult quickly.  This method we use is the method of characteristics method of characteristics characteristics . The idea is to find lines along which the equation is an ODE that we then solve. We will see this technique again for second-order PDEs when we encounter the wave equation in .    Consider where is a constant. This particular equation, , is called the transport equation transport equation .  The data will propagate along curves called characteristics. The idea is to change to the so-called characteristic coordinates characteristic coordinates , which we will call . If we change to these coordinates, the equation simplifies. The change of variables for this equation is Let us see what the equation becomes. Remember the chain rule in several variables. The equation in the coordinates and becomes or in other words, Treating as simply a parameter, we have obtained the ODE . That is trivial to solve.  The solution is a function that does not depend on (but it does depend on ). That is, there is some function such that The initial condition says that so . In other words, Everything is simply moving to the right That is assuming . If , then we are moving to the left. with velocity as increases. The curves given by the equation are called the characteristic curves characteristic curve . See . In this case, the solution does not change along the characteristic as .   Characteristic curves.    In the coordinates, the characteristic curves satisfy , and are in fact lines. The slope of characteristic lines is , and for each different , we get a different characteristic line.  We see why is called the transport equation: Everything travels at some constant speed. This behavior is called convection convection . An example application is material being moved by a river where the material does not diffuse and is simply carried along. In this setup, is the position along the river, is the time, and the concentration the material at position and time . See for an example.   Example of \\myquote{transport} in (that is, ) where the initial condition is a peak at the origin. On the left is a graph of the initial condition . On the right is a graph of the function , that is, at time . Notice it is the same graph shifted one unit to the right.      We use a similar idea in the more general case: We change coordinates to the characteristic coordinates, which we call . These are coordinates where becomes differentiation in the variable.  Along the characteristic curves (where is constant), we get a new ODE in the variable. In the transport equation, we got the simple . In general, we get the linear equation We think of everything as a function of and , although we are thinking of as a parameter rather than an independent variable. So the equation is an ODE. It is a linear ODE that we can solve using the integrating factor.  To find the characteristics, think of a curve given parametrically . We try to have the curve satisfy Why? Because when we think of and as functions of , we find, using the chain rule, So we get the ODE , which then describes the value of the solution of the PDE along this characteristic curve. It is convenient to make sure that corresponds to , that is, . It will also be convenient for . See .   General characteristic curve.      Consider We find the characteristics, that is, the curves given by So for some and . At , we want and . So we let and :   The ODE is , and . So, the ODE to solve along the characteristic is The general solution of this equation, treating as a parameter, is , for some , which can depend on . At , our initial condition is that is , since at , we have . Given this initial condition, we find . So, Substitute and to find in terms of and : See for a plot of as a function of two variables.   Plot of the solution to , .      When the coefficients are not constants, the characteristic curves are not going to be straight lines anymore.    Consider the following variable-coefficient equation: We find the characteristics, that is, the curves given by So At , we wish to get and as before. So   OK, the ODE we need to solve is This is for a fixed . We find . At , we want to be , so that is our initial condition for the ODE. Hence, . We solve for and to find and . Consequently,     We make a few closing remarks. One thing to keep in mind is that we would get into trouble if the coefficient in front of , that is, the , is ever zero. Let us consider a quick example of what can go wrong: This problem has no solution. If we had a solution, it would imply that , but . The problem is that the characteristic curve is now the line , and the solution is already provided on that line! As ought to then be nonzero, it is convenient to ensure that is positive by multiplying the equation by if necessary, so that a positive means a positive .  Another remark is that if or in the equation are not constants, the computations can quickly get out of hand, as the expressions for the characteristic coordinates become messy and then solving the ODE becomes even messier. In the examples above, was always , meaning we got in the characteristic coordinates. If is not constant, your expression for will be more complicated.  Finding the characteristic coordinates is really a system of ODEs in general if depends on or if depends on . In that case, we would need techniques of systems of ODEs to solve, see or . In general, if and are not linear functions or constants, finding closed form expressions for the characteristic coordinates may be impossible.  Finally, the method of characteristics applies to nonlinear first-order PDEs as well. In the nonlinear case, the characteristics depend not only on the differential equation, but also on the initial data. This leads to not only more difficult computations, but also the formation of singularities where the solution breaks down at a certain point in time. An example application where first-order nonlinear PDEs come up is traffic flow theory, and you have probably experienced the formation of singularities: traffic jams. But we digress.     Solve     ,  ,     ,  ,     ,  ,     ,  .        Solve , .      Solve , .      Solve , .          Find the characteristic coordinates for the following equations:  1) , , 2) , .    Solve the two equations using the coordinates.    Explain why you got the same solution, although the characteristic coordinates you found were different.        Solve , . Hint: Think a little out of the box.      Solve     ,  ,     ,  .      a)  b)       Solve , .           Solve , .          "
},
{
  "id": "fopde_section-5",
  "level": "2",
  "url": "fopde_section.html#fopde_section-5",
  "type": "Example",
  "number": "1.9.1",
  "title": "",
  "body": "  Consider where is a constant. This particular equation, , is called the transport equation transport equation .  The data will propagate along curves called characteristics. The idea is to change to the so-called characteristic coordinates characteristic coordinates , which we will call . If we change to these coordinates, the equation simplifies. The change of variables for this equation is Let us see what the equation becomes. Remember the chain rule in several variables. The equation in the coordinates and becomes or in other words, Treating as simply a parameter, we have obtained the ODE . That is trivial to solve.  The solution is a function that does not depend on (but it does depend on ). That is, there is some function such that The initial condition says that so . In other words, Everything is simply moving to the right That is assuming . If , then we are moving to the left. with velocity as increases. The curves given by the equation are called the characteristic curves characteristic curve . See . In this case, the solution does not change along the characteristic as .   Characteristic curves.    In the coordinates, the characteristic curves satisfy , and are in fact lines. The slope of characteristic lines is , and for each different , we get a different characteristic line.  We see why is called the transport equation: Everything travels at some constant speed. This behavior is called convection convection . An example application is material being moved by a river where the material does not diffuse and is simply carried along. In this setup, is the position along the river, is the time, and the concentration the material at position and time . See for an example.   Example of \\myquote{transport} in (that is, ) where the initial condition is a peak at the origin. On the left is a graph of the initial condition . On the right is a graph of the function , that is, at time . Notice it is the same graph shifted one unit to the right.     "
},
{
  "id": "fopde_charcurvecurvy",
  "level": "2",
  "url": "fopde_section.html#fopde_charcurvecurvy",
  "type": "Figure",
  "number": "1.22",
  "title": "",
  "body": " General characteristic curve.   "
},
{
  "id": "fopde_section-12",
  "level": "2",
  "url": "fopde_section.html#fopde_section-12",
  "type": "Example",
  "number": "1.9.2",
  "title": "",
  "body": "  Consider We find the characteristics, that is, the curves given by So for some and . At , we want and . So we let and :   The ODE is , and . So, the ODE to solve along the characteristic is The general solution of this equation, treating as a parameter, is , for some , which can depend on . At , our initial condition is that is , since at , we have . Given this initial condition, we find . So, Substitute and to find in terms of and : See for a plot of as a function of two variables.   Plot of the solution to , .     "
},
{
  "id": "fopde_section-14",
  "level": "2",
  "url": "fopde_section.html#fopde_section-14",
  "type": "Example",
  "number": "1.9.3",
  "title": "",
  "body": "  Consider the following variable-coefficient equation: We find the characteristics, that is, the curves given by So At , we wish to get and as before. So   OK, the ODE we need to solve is This is for a fixed . We find . At , we want to be , so that is our initial condition for the ODE. Hence, . We solve for and to find and . Consequently,    "
},
{
  "id": "fopde_section-19-1",
  "level": "2",
  "url": "fopde_section.html#fopde_section-19-1",
  "type": "Exercise",
  "number": "1.9.1",
  "title": "",
  "body": "  Solve     ,  ,     ,  ,     ,  ,     ,  .     "
},
{
  "id": "fopde_section-19-2",
  "level": "2",
  "url": "fopde_section.html#fopde_section-19-2",
  "type": "Exercise",
  "number": "1.9.2",
  "title": "",
  "body": "  Solve , .   "
},
{
  "id": "fopde_section-19-3",
  "level": "2",
  "url": "fopde_section.html#fopde_section-19-3",
  "type": "Exercise",
  "number": "1.9.3",
  "title": "",
  "body": "  Solve , .   "
},
{
  "id": "fopde_section-19-4",
  "level": "2",
  "url": "fopde_section.html#fopde_section-19-4",
  "type": "Exercise",
  "number": "1.9.4",
  "title": "",
  "body": "  Solve , .   "
},
{
  "id": "fopde_section-19-5",
  "level": "2",
  "url": "fopde_section.html#fopde_section-19-5",
  "type": "Exercise",
  "number": "1.9.5",
  "title": "",
  "body": "      Find the characteristic coordinates for the following equations:  1) , , 2) , .    Solve the two equations using the coordinates.    Explain why you got the same solution, although the characteristic coordinates you found were different.     "
},
{
  "id": "fopde_section-19-6",
  "level": "2",
  "url": "fopde_section.html#fopde_section-19-6",
  "type": "Exercise",
  "number": "1.9.6",
  "title": "",
  "body": "  Solve , . Hint: Think a little out of the box.   "
},
{
  "id": "fopde_section-19-7",
  "level": "2",
  "url": "fopde_section.html#fopde_section-19-7",
  "type": "Exercise",
  "number": "1.9.101",
  "title": "",
  "body": "  Solve     ,  ,     ,  .      a)  b)    "
},
{
  "id": "fopde_section-19-8",
  "level": "2",
  "url": "fopde_section.html#fopde_section-19-8",
  "type": "Exercise",
  "number": "1.9.102",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "fopde_section-19-9",
  "level": "2",
  "url": "fopde_section.html#fopde_section-19-9",
  "type": "Exercise",
  "number": "1.9.103",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "solinear_section",
  "level": "1",
  "url": "solinear_section.html",
  "type": "Section",
  "number": "2.1",
  "title": "Second-order linear ODEs",
  "body": " Second-order linear ODEs  Note: 1 lecture, reduction of order optional, first part of §3.1 in , parts of §3.1 and §3.2 in  Consider the general second-order linear differential equation second-order linear differential equation  We often divide through by to get where , , and . The word linear linear equation means that the equation contains no powers or functions of , , and .  In the special case when , we have a so-called homogeneous homogeneous linear equation equation We have already seen some second-order linear homogeneous equations.   If we know two solutions of a linear homogeneous equation, we know many more of them.   Superposition  superposition   Suppose and are two solutions of the homogeneous equation . Then also solves for arbitrary constants and .    That is, we can add solutions together and multiply them by constants to obtain new and different solutions. We call the expression a linear combination linear combination of and . Let us prove this theorem; the proof is very enlightening and illustrates how linear equations work.   Proof: Let . Then   The proof becomes even simpler to state if we use the operator notation. An operator operator is an object that eats functions and spits out functions (kind of like what a function is, but a function eats numbers and spits out numbers). Define the operator by The differential equation now becomes . The operator (and the equation) being linear linear operator means that . It is almost as if we were multiplying by . The proof above becomes   Two different solutions to the second equation are and . Recalling the definition of and , we note that these are solutions by superposition as they are linear combinations of the two exponential solutions: and .  The functions and are sometimes more convenient to use than the exponential. Let us review some of their properties:     Derive these properties using the definitions of and in terms of exponentials.    Linear equations have nice and simple answers to the existence and uniqueness question.   Existence and uniqueness  existence and uniqueness   Suppose are continuous functions on some interval , is a number in , and are constants. Then the equation has exactly one solution defined on the interval satisfying the initial conditions     For example, the equation with and has the solution The equation with and has the solution Using and in this solution allows us to solve for the initial conditions in a cleaner way than if we had used the exponentials.  The initial conditions for a second-order ODE consist of two equations. Common sense tells us that if we have two arbitrary constants and two equations, then we should be able to solve for the constants and find a solution to the differential equation satisfying the initial conditions.   Question: Suppose we find two different solutions and to the homogeneous equation . Can every solution be written (using superposition) in the form ?  The answer is affirmative! Provided that and are different enough in the following sense. We say and are linearly independent linearly independent if one is not a constant multiple of the other.    Let be continuous functions. Let and be two linearly independent solutions to the homogeneous equation . Then every other solution is of the form That is, is the general solution.    For example, we found the solutions and for the equation . It is not hard to see that sine and cosine are not constant multiples of each other. Indeed, if for some constant , plugging in would imply . But then for all , which is preposterous. So and are linearly independent. Hence, is the general solution to .  For two functions, checking linear independence is rather simple. Here is another example. Consider . Then and are solutions. To see that they are linearly independent, suppose one is a multiple of the other: , we just have to show that cannot be a constant. In this case, we have , which is most decidedly not a constant. So is the general solution.  If you have one nonzero solution to a second-order linear homogeneous equation, then you can find another one. This is the reduction of order method reduction of order method . The idea is that if we somehow found as a solution of , then we try a second solution of the form . We just need to find . We plug into the equation: In other words, . Using , we have the first-order linear equation . After solving this equation for (integrating factor), we find by antidifferentiating . We then form by computing . For example, suppose we somehow know is a solution to . The equation for is then . We find a solution, , and we find an antiderivative . Hence . Any works and so makes . Thus, the general solution is .  Since we have a formula for the solution to the first-order linear equation, we can write a formula for : However, it is much easier to remember that we just need to try and find as we did above. The technique works for higher-order equations too: You get to reduce the order by one for each solution you find. So it is better to remember how to do it rather than a specific formula.  We will study the solution of nonhomogeneous equations in . We will first focus on finding general solutions to homogeneous equations.     Show that and are linearly independent.      Take . Find (guess!) a solution.      Prove the superposition principle for nonhomogeneous equations. Suppose that is a solution to and is a solution to (same linear operator ). Show that solves .      For the equation , find two solutions, show that they are linearly independent and find the general solution. Hint: Try .    Equations of the form are called Euler's equations Euler's equation or Cauchy–Euler equations Cauchy–Euler equation . They are solved by trying and solving for (assume for simplicity).    Suppose that .    Find a formula for the general solution of Euler's equation (see above) . Hint: Try and find a formula for .    What happens when or ?      We will revisit the case when later.    Same equation as in . Suppose . Find a formula for the general solution of . Hint: Try for the second solution.     reduction of order   Suppose is a solution to . By directly plugging into the equation, show that is also a solution.     Chebyshev's equation of order 1  Chebyshev's equation of order 1   Take .    Show that is a solution.    Use reduction of order to find a second linearly independent solution.    Write down the general solution.       Hermite's equation of order 2  Hermite's equation of order 2   Take .    Show that is a solution.    Use reduction of order to find a second linearly independent solution. (It's OK to leave a definite integral in the formula.)    Write down the general solution.        Are and linearly independent? Justify.    Yes. To justify try to find a constant such that for all .      Are and linearly independent? Justify.    No. .      Guess a solution to .           Find the general solution to . Hint: It is a first-order ODE in .           Write down an equation (guess) for which we have the solutions and . Hint: Try an equation of the form for constants and , plug in both and and solve for and .          "
},
{
  "id": "solinear_section-6",
  "level": "2",
  "url": "solinear_section.html#solinear_section-6",
  "type": "Theorem",
  "number": "2.1.1",
  "title": "Superposition.",
  "body": " Superposition  superposition   Suppose and are two solutions of the homogeneous equation . Then also solves for arbitrary constants and .   "
},
{
  "id": "solinear_section-12",
  "level": "2",
  "url": "solinear_section.html#solinear_section-12",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": "  Derive these properties using the definitions of and in terms of exponentials.   "
},
{
  "id": "solinear_section-14",
  "level": "2",
  "url": "solinear_section.html#solinear_section-14",
  "type": "Theorem",
  "number": "2.1.2",
  "title": "Existence and uniqueness.",
  "body": " Existence and uniqueness  existence and uniqueness   Suppose are continuous functions on some interval , is a number in , and are constants. Then the equation has exactly one solution defined on the interval satisfying the initial conditions    "
},
{
  "id": "solinear_section-19",
  "level": "2",
  "url": "solinear_section.html#solinear_section-19",
  "type": "Theorem",
  "number": "2.1.3",
  "title": "",
  "body": "  Let be continuous functions. Let and be two linearly independent solutions to the homogeneous equation . Then every other solution is of the form That is, is the general solution.   "
},
{
  "id": "solinear_section-25-1",
  "level": "2",
  "url": "solinear_section.html#solinear_section-25-1",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": "  Show that and are linearly independent.   "
},
{
  "id": "solinear_section-25-2",
  "level": "2",
  "url": "solinear_section.html#solinear_section-25-2",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "",
  "body": "  Take . Find (guess!) a solution.   "
},
{
  "id": "solinear_section-25-3",
  "level": "2",
  "url": "solinear_section.html#solinear_section-25-3",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "",
  "body": "  Prove the superposition principle for nonhomogeneous equations. Suppose that is a solution to and is a solution to (same linear operator ). Show that solves .   "
},
{
  "id": "solinear_section-25-4",
  "level": "2",
  "url": "solinear_section.html#solinear_section-25-4",
  "type": "Exercise",
  "number": "2.1.5",
  "title": "",
  "body": "  For the equation , find two solutions, show that they are linearly independent and find the general solution. Hint: Try .   "
},
{
  "id": "sol_eulerex",
  "level": "2",
  "url": "solinear_section.html#sol_eulerex",
  "type": "Exercise",
  "number": "2.1.6",
  "title": "",
  "body": "  Suppose that .    Find a formula for the general solution of Euler's equation (see above) . Hint: Try and find a formula for .    What happens when or ?     "
},
{
  "id": "sol_eulerexln",
  "level": "2",
  "url": "solinear_section.html#sol_eulerexln",
  "type": "Exercise",
  "number": "2.1.7",
  "title": "",
  "body": "  Same equation as in . Suppose . Find a formula for the general solution of . Hint: Try for the second solution.   "
},
{
  "id": "exercise_reductionoforder",
  "level": "2",
  "url": "solinear_section.html#exercise_reductionoforder",
  "type": "Exercise",
  "number": "2.1.8",
  "title": "reduction of order.",
  "body": " reduction of order   Suppose is a solution to . By directly plugging into the equation, show that is also a solution.   "
},
{
  "id": "solinear_section-25-10",
  "level": "2",
  "url": "solinear_section.html#solinear_section-25-10",
  "type": "Exercise",
  "number": "2.1.9",
  "title": "Chebyshev’s equation of order 1.",
  "body": " Chebyshev's equation of order 1  Chebyshev's equation of order 1   Take .    Show that is a solution.    Use reduction of order to find a second linearly independent solution.    Write down the general solution.     "
},
{
  "id": "solinear_section-25-11",
  "level": "2",
  "url": "solinear_section.html#solinear_section-25-11",
  "type": "Exercise",
  "number": "2.1.10",
  "title": "Hermite’s equation of order 2.",
  "body": " Hermite's equation of order 2  Hermite's equation of order 2   Take .    Show that is a solution.    Use reduction of order to find a second linearly independent solution. (It's OK to leave a definite integral in the formula.)    Write down the general solution.     "
},
{
  "id": "solinear_section-25-12",
  "level": "2",
  "url": "solinear_section.html#solinear_section-25-12",
  "type": "Exercise",
  "number": "2.1.101",
  "title": "",
  "body": "  Are and linearly independent? Justify.    Yes. To justify try to find a constant such that for all .   "
},
{
  "id": "solinear_section-25-13",
  "level": "2",
  "url": "solinear_section.html#solinear_section-25-13",
  "type": "Exercise",
  "number": "2.1.102",
  "title": "",
  "body": "  Are and linearly independent? Justify.    No. .   "
},
{
  "id": "solinear_section-25-14",
  "level": "2",
  "url": "solinear_section.html#solinear_section-25-14",
  "type": "Exercise",
  "number": "2.1.103",
  "title": "",
  "body": "  Guess a solution to .        "
},
{
  "id": "solinear_section-25-15",
  "level": "2",
  "url": "solinear_section.html#solinear_section-25-15",
  "type": "Exercise",
  "number": "2.1.104",
  "title": "",
  "body": "  Find the general solution to . Hint: It is a first-order ODE in .        "
},
{
  "id": "solinear_section-25-16",
  "level": "2",
  "url": "solinear_section.html#solinear_section-25-16",
  "type": "Exercise",
  "number": "2.1.105",
  "title": "",
  "body": "  Write down an equation (guess) for which we have the solutions and . Hint: Try an equation of the form for constants and , plug in both and and solve for and .        "
},
{
  "id": "sec_ccsol",
  "level": "1",
  "url": "sec_ccsol.html",
  "type": "Section",
  "number": "2.2",
  "title": "Constant-coefficient second-order linear ODEs",
  "body": " Constant-coefficient second-order linear ODEs   Note: more than 1 lecture, second part of §3.1 in , §3.1 in    Solving constant-coefficient equations  Consider the problem This is a second-order linear homogeneous equation with constant coefficients. Constant coefficients constant-coefficient means that the functions in front of , , and are constants; they do not depend on .  To guess a solution, think of a function that stays essentially the same when we differentiate it, so that we can take the function and its derivatives, add some multiples of these together, and end up with zero. Yes, we are talking about the exponential.  We try Making an educated guess with some parameters to solve for is such a central technique in differential equations that people sometimes use a fancy name for such a guess: ansatz ansatz , German for initial placement of a tool at a work piece. Yes, the Germans have a word for that. a solution of the form . Then and . Plug in to get Hence, if or , then is a solution. So let and .    Check that and are solutions.    The functions and are linearly independent. If they were not linearly independent, we could write for some constant , implying that for all , which is clearly not possible. Hence, we can write the general solution as We need to solve for and . To apply the initial conditions, we first find . We plug into and and solve. Either apply some matrix algebra, or just solve these by high school math. For example, divide the second equation by 2 to obtain , then subtract the two equations to get . Then as . Hence, the solution we are looking for is   We generalize this example into a method. Suppose that we have an equation where are constants. Try the solution to obtain Divide by to obtain the so-called characteristic equation characteristic equation of the ODE: Solve for the by using the quadratic formula quadratic formula : Suppose that for now so that and are real. So and are solutions. There is still a difficulty if , but it is not hard to overcome.    Suppose that and are the roots of the characteristic equation.    If and are distinct and real (when ), then has the general solution     If (happens when ), then has the general solution         Solve The characteristic equation is or . Consequently, and are the two linearly independent solutions, and the general solution is Since and , we can also write the general solution as       Find the general solution of   The characteristic equation is . The equation has a double root . The general solution is, therefore,     Check that and are linearly independent.    It is good to check your work. That solves the equation is clear. Let us check that solves the equation. Compute and . Plug in,     In some sense, a double root rarely happens. If coefficients are picked randomly, a double root is unlikely. There are, however, some real-world problems where a double root does happen naturally (e.g. critically damped mass-spring system, as we will see).  Here is a short argument for why the solution works for a double root. A double root is a limit case of two distinct but very close roots. Note that is a solution when the roots are distinct. When we take the limit as goes to , we are really taking the derivative of using as the variable. Therefore, the limit is , and hence this is a solution in the double root case. We remark that in some numerical computations, two very close roots may lead to numerical instability while a double root will not.    Complex numbers and Euler's formula  A polynomial may have complex roots. The equation has no real roots, but it does have two complex roots. Here we review some properties of complex numbers complex number .  Complex numbers may seem a strange concept, perhaps due to the terminology. There is nothing imaginary or complicated about complex numbers. A complex number is simply a pair of real numbers, , that is, it is a point in the plane. We add complex numbers in the straightforward way: . We define multiplication multiplication of complex numbers by It turns out that with this multiplication rule, all the standard properties of arithmetic hold. Further, and most importantly .  Generally we write as , and we treat as if it were an unknown. When is zero, then is just the number . We do arithmetic with complex numbers just as we would with polynomials. The property we just mentioned becomes . So whenever we see , we replace it by . For example,   The numbers and are the two roots of . Some engineers use the letter instead of for the square root of . We follow the mathematicians' convention and use .    Make sure you understand (that you can justify) the following identities:     , , ,     ,     ,     ,     .      We also define the exponential of a complex number by writing down the Taylor series and plugging in the complex number. Most properties of the exponential follow from its Taylor series, and so these properties hold for the complex exponential too. For example, we have the property: . In particular, . Hence, if we can compute , we can compute . For , we use the so-called Euler's formula Euler's formula .   Euler's formula        In other words, .    Using Euler's formula, check the identities:      Double angle identities   Start with . Use Euler on each side to deduce:     For a complex number , we call the real part real part and the imaginary part imaginary part of the number. Often the following notation is used:     Complex roots  Suppose the differential equation has the characteristic equation that has complex roots complex roots . By the quadratic formula, the roots are . These roots are complex if . In this case, we write the roots as As you can see, we get a pair of roots of the form . We could still write the solution as However, the exponential is now complex-valued. We need to allow and to be complex numbers to obtain a real-valued solution (which is what we are after). While there is nothing particularly wrong with this approach, it can make calculations harder and it is generally preferred to find two real-valued solutions.   Euler's formula comes to the rescue. Let Then Linear combinations of solutions are also solutions. Hence, are also solutions. It is not hard to see that and are linearly independent (not multiples of each other). So the general solution can be written in terms of and . And as they are real-valued, no complex numbers need to be used for the arbitrary constants in the general solution. We summarize what we found as a theorem.    Take the equation If the characteristic equation has the roots (when ), then the general solution is       Find the general solution of , for a constant .  The characteristic equation is , and the roots are . By the theorem, the general solution is       Find the solution of , , .  The characteristic equation is . Completing the square, we get and hence the roots are . Per the theorem, the general solution is To find the solution satisfying the initial conditions, we first plug in zero to get Hence, and . We differentiate, We again plug in the initial condition and obtain , or . The solution we are seeking is         Find the general solution of .      Find the general solution of .      Solve for , .      Solve for , .      Find the general solution of .      Find the general solution of .      Find the general solution of using the methods of this section.      The method of this section applies to equations of other orders than two. We will see higher orders later. Solve the first-order equation using the methods of this section.      Let us revisit the Cauchy–Euler equations Cauchy–Euler equation of . Suppose now that . Find a formula for the general solution of . Hint: Note that .      Find the solution to , , , where , , and are real numbers.      Construct an equation such that is the general solution.      Find the general solution to .           Find the general solution to .           Find the solution to , , .           Find the solution to , , .           Find the solution to , , .           Find the solution to , , , where , , , and are real numbers, and .           Construct an equation such that is the general solution.          "
},
{
  "id": "sec_ccsol-3-5",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-3-5",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": "  Check that and are solutions.   "
},
{
  "id": "sec_ccsol-3-8",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-3-8",
  "type": "Theorem",
  "number": "2.2.1",
  "title": "",
  "body": "  Suppose that and are the roots of the characteristic equation.    If and are distinct and real (when ), then has the general solution     If (happens when ), then has the general solution      "
},
{
  "id": "example_expsecondorder",
  "level": "2",
  "url": "sec_ccsol.html#example_expsecondorder",
  "type": "Example",
  "number": "2.2.1",
  "title": "",
  "body": "  Solve The characteristic equation is or . Consequently, and are the two linearly independent solutions, and the general solution is Since and , we can also write the general solution as    "
},
{
  "id": "sec_ccsol-3-10",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-3-10",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "  Find the general solution of   The characteristic equation is . The equation has a double root . The general solution is, therefore,     Check that and are linearly independent.    It is good to check your work. That solves the equation is clear. Let us check that solves the equation. Compute and . Plug in,    "
},
{
  "id": "sec_ccsol-4-6",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-4-6",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": "  Make sure you understand (that you can justify) the following identities:     , , ,     ,     ,     ,     .     "
},
{
  "id": "eulersformula",
  "level": "2",
  "url": "sec_ccsol.html#eulersformula",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "Euler’s formula.",
  "body": " Euler's formula       "
},
{
  "id": "sec_ccsol-4-10",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-4-10",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": "  Using Euler's formula, check the identities:    "
},
{
  "id": "sec_ccsol-4-11",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-4-11",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "Double angle identities.",
  "body": " Double angle identities   Start with . Use Euler on each side to deduce:    "
},
{
  "id": "sec_ccsol-5-4",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-5-4",
  "type": "Theorem",
  "number": "2.2.3",
  "title": "",
  "body": "  Take the equation If the characteristic equation has the roots (when ), then the general solution is    "
},
{
  "id": "example_sincossecondorder",
  "level": "2",
  "url": "sec_ccsol.html#example_sincossecondorder",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  Find the general solution of , for a constant .  The characteristic equation is , and the roots are . By the theorem, the general solution is    "
},
{
  "id": "sec_ccsol-5-6",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-5-6",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": "  Find the solution of , , .  The characteristic equation is . Completing the square, we get and hence the roots are . Per the theorem, the general solution is To find the solution satisfying the initial conditions, we first plug in zero to get Hence, and . We differentiate, We again plug in the initial condition and obtain , or . The solution we are seeking is    "
},
{
  "id": "sec_ccsol-6-1",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-1",
  "type": "Exercise",
  "number": "2.2.6",
  "title": "",
  "body": "  Find the general solution of .   "
},
{
  "id": "sec_ccsol-6-2",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-2",
  "type": "Exercise",
  "number": "2.2.7",
  "title": "",
  "body": "  Find the general solution of .   "
},
{
  "id": "sec_ccsol-6-3",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-3",
  "type": "Exercise",
  "number": "2.2.8",
  "title": "",
  "body": "  Solve for , .   "
},
{
  "id": "sec_ccsol-6-4",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-4",
  "type": "Exercise",
  "number": "2.2.9",
  "title": "",
  "body": "  Solve for , .   "
},
{
  "id": "sec_ccsol-6-5",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-5",
  "type": "Exercise",
  "number": "2.2.10",
  "title": "",
  "body": "  Find the general solution of .   "
},
{
  "id": "sec_ccsol-6-6",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-6",
  "type": "Exercise",
  "number": "2.2.11",
  "title": "",
  "body": "  Find the general solution of .   "
},
{
  "id": "sec_ccsol-6-7",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-7",
  "type": "Exercise",
  "number": "2.2.12",
  "title": "",
  "body": "  Find the general solution of using the methods of this section.   "
},
{
  "id": "sec_ccsol-6-8",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-8",
  "type": "Exercise",
  "number": "2.2.13",
  "title": "",
  "body": "  The method of this section applies to equations of other orders than two. We will see higher orders later. Solve the first-order equation using the methods of this section.   "
},
{
  "id": "sec_ccsol-6-9",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-9",
  "type": "Exercise",
  "number": "2.2.14",
  "title": "",
  "body": "  Let us revisit the Cauchy–Euler equations Cauchy–Euler equation of . Suppose now that . Find a formula for the general solution of . Hint: Note that .   "
},
{
  "id": "sec_ccsol-6-10",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-10",
  "type": "Exercise",
  "number": "2.2.15",
  "title": "",
  "body": "  Find the solution to , , , where , , and are real numbers.   "
},
{
  "id": "sec_ccsol-6-11",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-11",
  "type": "Exercise",
  "number": "2.2.16",
  "title": "",
  "body": "  Construct an equation such that is the general solution.   "
},
{
  "id": "sec_ccsol-6-12",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-12",
  "type": "Exercise",
  "number": "2.2.101",
  "title": "",
  "body": "  Find the general solution to .        "
},
{
  "id": "sec_ccsol-6-13",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-13",
  "type": "Exercise",
  "number": "2.2.102",
  "title": "",
  "body": "  Find the general solution to .        "
},
{
  "id": "sec_ccsol-6-14",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-14",
  "type": "Exercise",
  "number": "2.2.103",
  "title": "",
  "body": "  Find the solution to , , .        "
},
{
  "id": "sec_ccsol-6-15",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-15",
  "type": "Exercise",
  "number": "2.2.104",
  "title": "",
  "body": "  Find the solution to , , .        "
},
{
  "id": "sec_ccsol-6-16",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-16",
  "type": "Exercise",
  "number": "2.2.105",
  "title": "",
  "body": "  Find the solution to , , .        "
},
{
  "id": "sec_ccsol-6-17",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-17",
  "type": "Exercise",
  "number": "2.2.106",
  "title": "",
  "body": "  Find the solution to , , , where , , , and are real numbers, and .        "
},
{
  "id": "sec_ccsol-6-18",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-18",
  "type": "Exercise",
  "number": "2.2.107",
  "title": "",
  "body": "  Construct an equation such that is the general solution.        "
},
{
  "id": "sec_hol",
  "level": "1",
  "url": "sec_hol.html",
  "type": "Section",
  "number": "2.3",
  "title": "Higher-order linear ODEs",
  "body": " Higher-order linear ODEs   Note: somewhat more than 1 lecture, §3.2 and §3.3 in , §4.1 and §4.2 in  We briefly study higher-order equations. Equations appearing in applications tend to be second-order. Higher-order equations do appear from time to time, but generally the world around us is second-order.   The basic results about linear ODEs of higher order are essentially the same as for second-order equations, with 2 replaced by . The important concept of linear independence is somewhat more complicated when more than two functions are involved. For higher-order constant-coefficient ODEs, the methods developed are also somewhat harder to apply, but we will not dwell on these complications. It is also possible to use the methods for systems of linear equations from to solve higher-order constant-coefficient equations.  Consider a general homogeneous linear equation    Superposition  superposition   If , , ..., are solutions of the homogeneous equation , then also solves for arbitrary constants .    That is, a linear combination linear combination of solutions to is a solution to . There is also the existence and uniqueness theorem for linear equations, including nonhomogeneous ones.   Existence and uniqueness  existence and uniqueness   Suppose , and are continuous functions on some interval , is a number in , and are constants. Then the equation has exactly one solution defined on the same interval satisfying the initial conditions       Linear independence  When we had two functions and , we said they were linearly independent if one was not a multiple of the other. Same idea holds for functions, although in this case it is easier to state as follows. The functions , , ..., are linearly independent linearly independent if the equation has only the trivial solution , where the equation must hold for all . If we can solve the equation with some constants , where for example , then we can solve for as a linear combination of the others. If the functions are not linearly independent, they are linearly dependent linearly dependent .    Verify that are linearly independent.  Let us give several ways to show this fact. Many textbooks (including and ) introduce Wronskians, but it is difficult to see why they work and they are not really necessary here.  Consider We use rules of exponentials and write . Hence and . Then we have The left-hand side is a third degree polynomial in . It is either identically zero, or it has at most 3 zeros. Therefore, it is identically zero, , and the functions are linearly independent.  Let us try another way. As before we write This equation has to hold for all . We divide through by to get As the equation is true for all , let . After taking the limit we see that . Hence our equation becomes Rinse, repeat!  How about yet another way. We again write We can evaluate the equation and its derivatives at different values of to obtain equations for , , and . Let us first divide by for simplicity. We set to get the equation . Now differentiate both sides We set to get . We divide by again and differentiate to get . It is clear that is zero. Then must be zero as , and must be zero because .  There is no one best way to do it. All of these methods are perfectly valid. The important thing is to understand why the functions are linearly independent.      On the other hand, the functions , , and are linearly dependent. Simply apply definition of the hyperbolic cosine:     Once we have enough linearly independent solutions, we have the general solution to the homogeneous equation, just as we did for second-order equations.    If , , ..., are linearly independent solutions of the homogeneous equation , then the general solution to can be written as       Constant-coefficient higher-order ODEs  When we have a higher-order constant-coefficient homogeneous linear equation, the song and dance is exactly the same as it was for second order. We just need to find more solutions. If the equation is -order, we need to find linearly independent solutions. It is best seen by example.    Find the general solution to   Try: . We plug in and get We divide through by . Then The trick now is to find the roots. There is a formula for the roots of degree 3 and 4 polynomials, but it is very complicated. There is no formula for higher degree polynomials. That does not mean that the roots do not exist. There are always roots for an degree polynomial. They may be repeated repeated roots and they may be complex. Computers are pretty good at finding roots approximately for reasonable size polynomials.  A good place to start is to plot the polynomial and check where it is zero. We can also simply try plugging in. We just start plugging in numbers and see if we get a hit (we can also try complex numbers). Even if we do not get a hit, we may get an indication of where the root is. For example, we plug into our polynomial and get ; we plug in and get . That means there is a root between and , because the sign changed. If we find one root, say , then we know is a factor of our polynomial. Polynomial long division can then be used.  A good strategy is to begin with , , or . These are easy to compute. Our polynomial has two such roots, and . There should be 3 roots and the last root is reasonably easy to find. The constant term in a monic The word monic means that the coefficient of the top degree , in our case , is . polynomial such as this is the product of the negations of all the roots because . So You should check that really is a root. Hence , and are solutions to . They are linearly independent as can easily be checked, and there are 3 of them, which happens to be exactly the number we need. So the general solution is   Suppose we were given some initial conditions , , and . Then It is possible to find the solution by high school algebra, but it would be a pain. The sensible way to solve a system of equations such as this is to use matrix algebra, see or . For now we note that the solution is , , and . The specific solution to the ODE is     Next, suppose that we have real roots, but they are repeated. Let us say we have a root repeated times. In the spirit of the second-order solution, and for the same reasons, we have the solutions We take a linear combination of these solutions to find the general solution.    Solve   We note that the characteristic equation is By inspection, we note that . Hence the roots given with multiplicity multiplicity are . Thus the general solution is     The case of complex roots is similar to second-order equations. Complex roots always come in pairs . Suppose we have two such complex roots, each repeated times. The corresponding solution is where , ..., , , ..., are arbitrary constants.    Solve   The characteristic equation is Hence the roots are , both with multiplicity 2. Hence the general solution to the ODE is The way we solved the characteristic equation above is really by guessing or by inspection. It is not so easy in general. We could also have asked a computer or an advanced calculator for the roots.        Find the general solution for .      Find the general solution for .      Find the general solution for .      Suppose the characteristic equation for an ODE is .    Find such a differential equation.    Find its general solution.        Suppose that a fourth-order equation has a solution .    Find such an equation.    Find the initial conditions that the given solution satisfies.        Find the general solution for the equation of .      Let , , and . Are , , and linearly independent? If so, show it, if not, find a linear combination that works.      Let , , and . Are , , and linearly independent? If so, show it, if not, find a linear combination that works.      Are , , and linearly independent? If so, show it, if not, find a linear combination that gives .      Are , , and linearly independent? If so, show it, if not, find a linear combination that gives .      Find an equation such that is a solution.      Find the general solution of .           Suppose that the characteristic equation of a third-order differential equation has roots and 3.    What is the characteristic equation?    Find the corresponding differential equation.    Find the general solution.      a)  b)  c)       Solve , , , .           Are , , , linearly independent? If so, show it, if not find a linear combination that gives .    No. .      Are , , linearly independent? If so, show it, if not find a linear combination that gives .    Yes. (Hint: First note that is bounded. Then note that and cannot be multiples of each other.)      Find an equation such that , , are solutions.          "
},
{
  "id": "sec_hol-2-5",
  "level": "2",
  "url": "sec_hol.html#sec_hol-2-5",
  "type": "Theorem",
  "number": "2.3.1",
  "title": "Superposition.",
  "body": " Superposition  superposition   If , , ..., are solutions of the homogeneous equation , then also solves for arbitrary constants .   "
},
{
  "id": "sec_hol-2-7",
  "level": "2",
  "url": "sec_hol.html#sec_hol-2-7",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "Existence and uniqueness.",
  "body": " Existence and uniqueness  existence and uniqueness   Suppose , and are continuous functions on some interval , is a number in , and are constants. Then the equation has exactly one solution defined on the same interval satisfying the initial conditions    "
},
{
  "id": "sec_hol-3-3",
  "level": "2",
  "url": "sec_hol.html#sec_hol-3-3",
  "type": "Example",
  "number": "2.3.1",
  "title": "",
  "body": "  Verify that are linearly independent.  Let us give several ways to show this fact. Many textbooks (including and ) introduce Wronskians, but it is difficult to see why they work and they are not really necessary here.  Consider We use rules of exponentials and write . Hence and . Then we have The left-hand side is a third degree polynomial in . It is either identically zero, or it has at most 3 zeros. Therefore, it is identically zero, , and the functions are linearly independent.  Let us try another way. As before we write This equation has to hold for all . We divide through by to get As the equation is true for all , let . After taking the limit we see that . Hence our equation becomes Rinse, repeat!  How about yet another way. We again write We can evaluate the equation and its derivatives at different values of to obtain equations for , , and . Let us first divide by for simplicity. We set to get the equation . Now differentiate both sides We set to get . We divide by again and differentiate to get . It is clear that is zero. Then must be zero as , and must be zero because .  There is no one best way to do it. All of these methods are perfectly valid. The important thing is to understand why the functions are linearly independent.   "
},
{
  "id": "sec_hol-3-4",
  "level": "2",
  "url": "sec_hol.html#sec_hol-3-4",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": "  On the other hand, the functions , , and are linearly dependent. Simply apply definition of the hyperbolic cosine:    "
},
{
  "id": "sec_hol-3-6",
  "level": "2",
  "url": "sec_hol.html#sec_hol-3-6",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "",
  "body": "  If , , ..., are linearly independent solutions of the homogeneous equation , then the general solution to can be written as    "
},
{
  "id": "sec_hol-4-3",
  "level": "2",
  "url": "sec_hol.html#sec_hol-4-3",
  "type": "Example",
  "number": "2.3.3",
  "title": "",
  "body": "  Find the general solution to   Try: . We plug in and get We divide through by . Then The trick now is to find the roots. There is a formula for the roots of degree 3 and 4 polynomials, but it is very complicated. There is no formula for higher degree polynomials. That does not mean that the roots do not exist. There are always roots for an degree polynomial. They may be repeated repeated roots and they may be complex. Computers are pretty good at finding roots approximately for reasonable size polynomials.  A good place to start is to plot the polynomial and check where it is zero. We can also simply try plugging in. We just start plugging in numbers and see if we get a hit (we can also try complex numbers). Even if we do not get a hit, we may get an indication of where the root is. For example, we plug into our polynomial and get ; we plug in and get . That means there is a root between and , because the sign changed. If we find one root, say , then we know is a factor of our polynomial. Polynomial long division can then be used.  A good strategy is to begin with , , or . These are easy to compute. Our polynomial has two such roots, and . There should be 3 roots and the last root is reasonably easy to find. The constant term in a monic The word monic means that the coefficient of the top degree , in our case , is . polynomial such as this is the product of the negations of all the roots because . So You should check that really is a root. Hence , and are solutions to . They are linearly independent as can easily be checked, and there are 3 of them, which happens to be exactly the number we need. So the general solution is   Suppose we were given some initial conditions , , and . Then It is possible to find the solution by high school algebra, but it would be a pain. The sensible way to solve a system of equations such as this is to use matrix algebra, see or . For now we note that the solution is , , and . The specific solution to the ODE is    "
},
{
  "id": "sec_hol-4-5",
  "level": "2",
  "url": "sec_hol.html#sec_hol-4-5",
  "type": "Example",
  "number": "2.3.4",
  "title": "",
  "body": "  Solve   We note that the characteristic equation is By inspection, we note that . Hence the roots given with multiplicity multiplicity are . Thus the general solution is    "
},
{
  "id": "sec_hol-4-7",
  "level": "2",
  "url": "sec_hol.html#sec_hol-4-7",
  "type": "Example",
  "number": "2.3.5",
  "title": "",
  "body": "  Solve   The characteristic equation is Hence the roots are , both with multiplicity 2. Hence the general solution to the ODE is The way we solved the characteristic equation above is really by guessing or by inspection. It is not so easy in general. We could also have asked a computer or an advanced calculator for the roots.   "
},
{
  "id": "sec_hol-5-1",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-1",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": "  Find the general solution for .   "
},
{
  "id": "sec_hol-5-2",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-2",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": "  Find the general solution for .   "
},
{
  "id": "sec_hol-5-3",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-3",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": "  Find the general solution for .   "
},
{
  "id": "sec_hol-5-4",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-4",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": "  Suppose the characteristic equation for an ODE is .    Find such a differential equation.    Find its general solution.     "
},
{
  "id": "hol_eqfromsolex",
  "level": "2",
  "url": "sec_hol.html#hol_eqfromsolex",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "",
  "body": "  Suppose that a fourth-order equation has a solution .    Find such an equation.    Find the initial conditions that the given solution satisfies.     "
},
{
  "id": "sec_hol-5-6",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-6",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "",
  "body": "  Find the general solution for the equation of .   "
},
{
  "id": "sec_hol-5-7",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-7",
  "type": "Exercise",
  "number": "2.3.7",
  "title": "",
  "body": "  Let , , and . Are , , and linearly independent? If so, show it, if not, find a linear combination that works.   "
},
{
  "id": "sec_hol-5-8",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-8",
  "type": "Exercise",
  "number": "2.3.8",
  "title": "",
  "body": "  Let , , and . Are , , and linearly independent? If so, show it, if not, find a linear combination that works.   "
},
{
  "id": "sec_hol-5-9",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-9",
  "type": "Exercise",
  "number": "2.3.9",
  "title": "",
  "body": "  Are , , and linearly independent? If so, show it, if not, find a linear combination that gives .   "
},
{
  "id": "sec_hol-5-10",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-10",
  "type": "Exercise",
  "number": "2.3.10",
  "title": "",
  "body": "  Are , , and linearly independent? If so, show it, if not, find a linear combination that gives .   "
},
{
  "id": "sec_hol-5-11",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-11",
  "type": "Exercise",
  "number": "2.3.11",
  "title": "",
  "body": "  Find an equation such that is a solution.   "
},
{
  "id": "sec_hol-5-12",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-12",
  "type": "Exercise",
  "number": "2.3.101",
  "title": "",
  "body": "  Find the general solution of .        "
},
{
  "id": "sec_hol-5-13",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-13",
  "type": "Exercise",
  "number": "2.3.102",
  "title": "",
  "body": "  Suppose that the characteristic equation of a third-order differential equation has roots and 3.    What is the characteristic equation?    Find the corresponding differential equation.    Find the general solution.      a)  b)  c)    "
},
{
  "id": "sec_hol-5-14",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-14",
  "type": "Exercise",
  "number": "2.3.103",
  "title": "",
  "body": "  Solve , , , .        "
},
{
  "id": "sec_hol-5-15",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-15",
  "type": "Exercise",
  "number": "2.3.104",
  "title": "",
  "body": "  Are , , , linearly independent? If so, show it, if not find a linear combination that gives .    No. .   "
},
{
  "id": "sec_hol-5-16",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-16",
  "type": "Exercise",
  "number": "2.3.105",
  "title": "",
  "body": "  Are , , linearly independent? If so, show it, if not find a linear combination that gives .    Yes. (Hint: First note that is bounded. Then note that and cannot be multiples of each other.)   "
},
{
  "id": "sec_hol-5-17",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-17",
  "type": "Exercise",
  "number": "2.3.106",
  "title": "",
  "body": "  Find an equation such that , , are solutions.        "
},
{
  "id": "sec_mv",
  "level": "1",
  "url": "sec_mv.html",
  "type": "Section",
  "number": "2.4",
  "title": "Mechanical vibrations",
  "body": " Mechanical vibrations   Note: 2 lectures, §3.4 in , §3.7 in  Let us look at some applications of linear second-order constant-coefficient equations.    Some examples     Our first example is a mass on a spring. Suppose we have a mass (in kilograms) connected by a spring with spring constant (in newtons per meter) to a fixed wall. There may be some external force (in newtons) acting on the mass. Here, is time in seconds. Finally, there is some friction measured by (in newton-seconds per meter) as the mass slides along the floor (or perhaps a damper is connected).  Let be the displacement of the mass in meters ( is the rest position), with growing to the right (away from the wall). The force exerted by the spring is proportional to the compression of the spring by Hooke's law Hooke's law . Therefore, it is in the negative direction. Similarly, the force exerted by friction is proportional to the velocity of the mass. Newton's second law Newton's second law says that force equals mass times acceleration. Hence, or The equation is a linear second-order constant-coefficient ODE. We say the motion is     forced forced motion if (if is not identically zero),     unforced unforced motion or free free motion if (if is identically zero),     damped damped motion if , and     undamped undamped motion if .    This system appears in lots of applications even if it does not at first seem like it. Many real-world scenarios can be simplified to a mass on a spring. For example, a bungee jump setup is essentially a mass and spring system (you are the mass). It would be good if someone did the math before you jump off the bridge, right? Let us give two other examples.     Here is an example for electrical engineers. Consider the pictured RLC circuit RLC circuit . There is a resistor with a resistance of ohms, an inductor with an inductance of henries, and a capacitor with a capacitance of farads. There is also an electric source (such as a battery) with voltage of volts at time (measured in seconds). Let be the charge (in coulombs) on the capacitor and be the current (in amperes) in the circuit. The relation between the two is . By elementary principles, we find . We differentiate to get This is a nonhomogeneous second-order constant-coefficient linear equation. As , and are all positive, this circuit behaves just like the mass and spring system. Position of the mass is replaced by current. Mass is replaced by inductance, damping is replaced by resistance, and the spring constant is replaced by one over the capacitance. The change in voltage becomes the forcing function—for constant voltage this is an unforced motion.     Our next example behaves like a mass and spring system only approximately. Suppose a mass hangs on a pendulum of length . We seek an equation for the angle (in radians). Let be the acceleration due to gravity. Elementary physics mandates that the equation is   Let us derive this equation using Newton's second law Newton's second law : force equals mass times acceleration. The acceleration is and mass is . So has to be equal to the tangential component of the force given by the gravity, which is in the opposite direction. So . The curiously cancels from the equation.  Now we make our approximation. For small we have that approximately . This can be seen by looking at the graph. In , we can see that for approximately (in radians) the graphs of and are almost the same.   The graphs of and (in radians).    Therefore, when the swings are small, is small, and we can model the behavior by the simpler linear equation The errors from this approximation build up. After a long time, the state of the real-world system might be substantially different from our solution. Also, we will see that in a mass-spring system, the amplitude is independent of the period. This is not true for a pendulum. Nevertheless, for reasonably short periods of time and small swings (that is, only small angles ), the approximation is reasonably good.  In real-world problems it is often necessary to make these types of simplifications. We must understand both the mathematics and the physics of the situation to see if the simplification is valid in the context of the questions we are trying to answer.    Free undamped motion  In this section we only consider free or unforced motion, as we do not know yet how to solve nonhomogeneous equations. We start with undamped undamped motion where . The equation is We divide by and let to rewrite the equation as The general solution to this equation is By a trigonometric identity for two different constants and . One finds that and , and therefore it is not hard to compute that and . Therefore, we let and be our arbitrary constants and write .    Justify the identity and verify the equations and . Hint: Start with and multiply by . Then what should and be?    While it is easier to use the first form with and to solve for the initial conditions, the second form is more natural. The constants and have nice physical interpretation. Write the solution as This is a pure-frequency oscillation (a sine wave). The amplitude amplitude is , is the (angular) frequency frequency angular frequency , and is the so-called phase shift phase shift . The phase shift just shifts the graph left or right. We call the natural (angular) frequency natural (angular) frequency . This entire setup is called simple harmonic motion simple harmonic motion .  Let us pause to explain the word angular before the word frequency . The units of are radians per unit time, not cycles per unit time as is the usual measure of frequency. Because one cycle is radians, the usual frequency is given by . It is simply a matter of where we put the constant , and that is a matter of taste.  The period period of the motion is one over the frequency (in cycles per unit time) and hence it is . That is the amount of time it takes to complete one full cycle.    Suppose that and . The whole mass and spring setup is sitting on a truck that was traveling at 1 . The truck crashes and hence stops. The mass was held in place 0.5 meters forward from the rest position. During the crash the mass gets loose. That is, the mass is now moving forward at 1 , while the other end of the spring is held in place. The mass therefore starts oscillating. What is the frequency of the resulting oscillation? What is the amplitude? The units are the mks units mks units (meters-kilograms-seconds).  The setup means that the mass was at half a meter in the positive direction during the crash and relative to the wall the spring is mounted to, the mass was moving forward (in the positive direction) at 1 . This gives the initial conditions. So the equation with initial conditions is We compute . Hence the angular frequency is 2. The usual frequency in Hertz (cycles per second) is .  The general solution is Letting means . Then . Letting , we get . Therefore, the amplitude is . The solution is A plot of is shown in .     Simple undamped oscillation.    In general, for free undamped motion, a solution of the form corresponds to the initial conditions and . It is easy to find and from the initial conditions. The amplitude and the phase shift are computed from and . In the example, we found the amplitude . How about the phase shift . We know . The arctangent of is or approximately . We must check if gives the correct quadrant—if the angle from the positive -axis is in the same quadrant as the point —if not, we add . That is because and . Both and are positive, so must be in the first quadrant. As radians is in the first quadrant, .  Note: Many calculators and computer software have not only the atan atan function for arctangent, but also what is sometimes called atan2 atan2 . This function takes two arguments, and , and returns a in the correct quadrant for you.    Free damped motion   Let us now focus on damped damped motion. We rewrite the equation as where The characteristic equation is Using the quadratic formula, we get that the roots are The form of the solution depends on whether we get complex or real roots. We get real roots if and only if the following number is nonnegative: The sign of is the same as the sign of . Thus we get real roots if and only if is nonnegative, or in other words if .    Overdamping  When , the system is overdamped overdamped . In this case, there are two distinct real roots and . As is always less than , the expression for the roots is negative either way. So both roots are negative.  The solution is Since are negative, as . Thus the mass will tend towards the rest position as time goes to infinity. For a few sample plots for different initial conditions, see .   Overdamped motion for several different initial conditions.    No oscillation happens. In fact, the graph crosses the -axis at most once. To see why, we try to solve . Therefore, and using laws of exponents we obtain This equation has at most one solution ; the graph of is either always increasing or always decreasing. For some initial conditions the graph never crosses the -axis, as is evident from the sample graphs.    Suppose the mass is released from rest. That is, and . Then It is not hard to see that this satisfies the initial conditions.      Critical damping  When , the system is critically damped critically damped . In this case, there is one root of multiplicity 2 and this root is . Our solution is The behavior of a critically damped system is very similar to an overdamped system. After all, a critically damped system is, in some sense, a limit of overdamped systems. Since these equations are really only an approximation to the real world, in reality, we are never critically damped; it is a place we can only reach in theory. We are always a little bit underdamped or a little bit overdamped. It is better not to dwell on critical damping.    Underdamping  When , the system is underdamped underdamped . In this case, the roots are complex. where . Our solution is or An example plot is given in . Note that we still have that as .   Underdamped motion with the envelope curves shown.    The figure also shows the envelope curves envelope curves  and . The solution is the oscillating line between the two envelope curves. The envelope curves give the maximum amplitude of the oscillation at any given point in time. For example, if you are bungee jumping, you are really interested in computing the envelope curve so as not to hit the concrete with your head. The phase shift shifts the oscillation left or right, but within the envelope curves (the envelope curves do not change if changes).  Notice that the angular pseudo-frequency pseudo-frequency We do not call a frequency since the solution is not really a periodic function.  becomes smaller when the damping (and hence ) becomes larger. This makes sense. First, when we change the damping just a little bit, we do not expect the behavior of the solution to change dramatically. Second, if we keep making larger, then at some point the solution should start looking like the solution for critical damping or overdamping, where no oscillation happens. As gets larger and approaches , we find that approaches . On the other hand, when gets smaller, approaches ( is always smaller than ), and the solution looks more and more like the steady periodic motion of the undamped case. The envelope curves become flatter and flatter as (and hence ) goes to .       Consider a mass and spring system with a mass , spring constant , and damping constant .    Set up and find the general solution of the system.    Is the system underdamped, overdamped, or critically damped?    If the system is not critically damped, find a that makes the system critically damped.        Do for , , and .      Using the mks units (meters-kilograms-seconds) mks units , suppose you have a spring with spring constant 4 . You want to use it to weigh items. Assume no friction. You place the mass on the spring and put it in motion.    You count and find that the frequency is 0.8 Hz (cycles per second). What is the mass?    Find a formula for the mass given the frequency in Hz.        Suppose we add possible friction to . Further, suppose you do not know the spring constant, but you have two reference weights 1 kg and 2 kg to calibrate your setup. You put each in motion on your spring and measure the frequency. For the 1 kg weight you measured 1.1 Hz, for the 2 kg weight you measured 0.8 Hz.    Find (spring constant) and (damping constant).    Find a formula for the mass in terms of the frequency in Hz. Note that there may be more than one possible mass for a given frequency.     For an unknown object you measured 0.2 Hz, what is the mass of the object? Suppose that you know that the mass of the unknown object is more than a kilogram.        Suppose you wish to measure the friction a mass of 0.1 kg experiences as it slides along a floor (you wish to find ). You have a spring with spring constant . You take the spring, you attach it to the mass and fix it to a wall. Then you pull on the spring and let the mass go. You find that the mass oscillates with frequency 1 Hz. What is the friction?      A mass of kilograms is on a spring with spring constant newtons per meter with no damping. Suppose the system is at rest and at time the mass is kicked and starts traveling at 2 meters per second. How large does have to be to so that the mass does not go further than 3 meters from the rest position?     (and larger)      Suppose we have an RLC circuit with a resistor of 100 milliohms (0.1 ohms), inductor of inductance of 50 millihenries (0.05 henries), and a capacitor of 5 farads, with constant voltage.    Set up the ODE equation for the current .    Find the general solution.    Solve for and .      a)  b)  c)       A 5000 kg railcar hits a bumper (a spring) at 1 , and the spring compresses by 0.1 m. Assume no damping.    Find .    How far does the spring compress when a 10000 kg railcar hits the spring at the same speed?    If the spring would break if it compresses further than 0.3 m, what is the maximum mass of a railcar that can hit it at 1 ?    What is the maximum mass of a railcar that can hit the spring without it breaking at 2 ?      a)  b)  c) 45000 kg d) 11250 kg      A mass of kg is on a spring with and . Find the mass for which there is critical damping. If , does the system oscillate or not, that is, is it underdamped or overdamped?     . If , then the system is overdamped and will not oscillate.     "
},
{
  "id": "mv_sinthetafig",
  "level": "2",
  "url": "sec_mv.html#mv_sinthetafig",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " The graphs of and (in radians).   "
},
{
  "id": "sec_mv-4-3",
  "level": "2",
  "url": "sec_mv.html#sec_mv-4-3",
  "type": "Exercise",
  "number": "2.4.1",
  "title": "",
  "body": "  Justify the identity and verify the equations and . Hint: Start with and multiply by . Then what should and be?   "
},
{
  "id": "sec_mv-4-7",
  "level": "2",
  "url": "sec_mv.html#sec_mv-4-7",
  "type": "Example",
  "number": "2.4.1",
  "title": "",
  "body": "  Suppose that and . The whole mass and spring setup is sitting on a truck that was traveling at 1 . The truck crashes and hence stops. The mass was held in place 0.5 meters forward from the rest position. During the crash the mass gets loose. That is, the mass is now moving forward at 1 , while the other end of the spring is held in place. The mass therefore starts oscillating. What is the frequency of the resulting oscillation? What is the amplitude? The units are the mks units mks units (meters-kilograms-seconds).  The setup means that the mass was at half a meter in the positive direction during the crash and relative to the wall the spring is mounted to, the mass was moving forward (in the positive direction) at 1 . This gives the initial conditions. So the equation with initial conditions is We compute . Hence the angular frequency is 2. The usual frequency in Hertz (cycles per second) is .  The general solution is Letting means . Then . Letting , we get . Therefore, the amplitude is . The solution is A plot of is shown in .   "
},
{
  "id": "mv_undampedfig",
  "level": "2",
  "url": "sec_mv.html#mv_undampedfig",
  "type": "Figure",
  "number": "2.2",
  "title": "",
  "body": " Simple undamped oscillation.   "
},
{
  "id": "mv_overdampedfig",
  "level": "2",
  "url": "sec_mv.html#mv_overdampedfig",
  "type": "Figure",
  "number": "2.3",
  "title": "",
  "body": " Overdamped motion for several different initial conditions.   "
},
{
  "id": "sec_mv-5-3-8",
  "level": "2",
  "url": "sec_mv.html#sec_mv-5-3-8",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": "  Suppose the mass is released from rest. That is, and . Then It is not hard to see that this satisfies the initial conditions.   "
},
{
  "id": "mv_underdampedfig",
  "level": "2",
  "url": "sec_mv.html#mv_underdampedfig",
  "type": "Figure",
  "number": "2.4",
  "title": "",
  "body": " Underdamped motion with the envelope curves shown.   "
},
{
  "id": "mv_ex1",
  "level": "2",
  "url": "sec_mv.html#mv_ex1",
  "type": "Exercise",
  "number": "2.4.2",
  "title": "",
  "body": "  Consider a mass and spring system with a mass , spring constant , and damping constant .    Set up and find the general solution of the system.    Is the system underdamped, overdamped, or critically damped?    If the system is not critically damped, find a that makes the system critically damped.     "
},
{
  "id": "sec_mv-6-2",
  "level": "2",
  "url": "sec_mv.html#sec_mv-6-2",
  "type": "Exercise",
  "number": "2.4.3",
  "title": "",
  "body": "  Do for , , and .   "
},
{
  "id": "mv_exwt1",
  "level": "2",
  "url": "sec_mv.html#mv_exwt1",
  "type": "Exercise",
  "number": "2.4.4",
  "title": "",
  "body": "  Using the mks units (meters-kilograms-seconds) mks units , suppose you have a spring with spring constant 4 . You want to use it to weigh items. Assume no friction. You place the mass on the spring and put it in motion.    You count and find that the frequency is 0.8 Hz (cycles per second). What is the mass?    Find a formula for the mass given the frequency in Hz.     "
},
{
  "id": "sec_mv-6-4",
  "level": "2",
  "url": "sec_mv.html#sec_mv-6-4",
  "type": "Exercise",
  "number": "2.4.5",
  "title": "",
  "body": "  Suppose we add possible friction to . Further, suppose you do not know the spring constant, but you have two reference weights 1 kg and 2 kg to calibrate your setup. You put each in motion on your spring and measure the frequency. For the 1 kg weight you measured 1.1 Hz, for the 2 kg weight you measured 0.8 Hz.    Find (spring constant) and (damping constant).    Find a formula for the mass in terms of the frequency in Hz. Note that there may be more than one possible mass for a given frequency.     For an unknown object you measured 0.2 Hz, what is the mass of the object? Suppose that you know that the mass of the unknown object is more than a kilogram.     "
},
{
  "id": "sec_mv-6-5",
  "level": "2",
  "url": "sec_mv.html#sec_mv-6-5",
  "type": "Exercise",
  "number": "2.4.6",
  "title": "",
  "body": "  Suppose you wish to measure the friction a mass of 0.1 kg experiences as it slides along a floor (you wish to find ). You have a spring with spring constant . You take the spring, you attach it to the mass and fix it to a wall. Then you pull on the spring and let the mass go. You find that the mass oscillates with frequency 1 Hz. What is the friction?   "
},
{
  "id": "sec_mv-6-6",
  "level": "2",
  "url": "sec_mv.html#sec_mv-6-6",
  "type": "Exercise",
  "number": "2.4.101",
  "title": "",
  "body": "  A mass of kilograms is on a spring with spring constant newtons per meter with no damping. Suppose the system is at rest and at time the mass is kicked and starts traveling at 2 meters per second. How large does have to be to so that the mass does not go further than 3 meters from the rest position?     (and larger)   "
},
{
  "id": "sec_mv-6-7",
  "level": "2",
  "url": "sec_mv.html#sec_mv-6-7",
  "type": "Exercise",
  "number": "2.4.102",
  "title": "",
  "body": "  Suppose we have an RLC circuit with a resistor of 100 milliohms (0.1 ohms), inductor of inductance of 50 millihenries (0.05 henries), and a capacitor of 5 farads, with constant voltage.    Set up the ODE equation for the current .    Find the general solution.    Solve for and .      a)  b)  c)    "
},
{
  "id": "sec_mv-6-8",
  "level": "2",
  "url": "sec_mv.html#sec_mv-6-8",
  "type": "Exercise",
  "number": "2.4.103",
  "title": "",
  "body": "  A 5000 kg railcar hits a bumper (a spring) at 1 , and the spring compresses by 0.1 m. Assume no damping.    Find .    How far does the spring compress when a 10000 kg railcar hits the spring at the same speed?    If the spring would break if it compresses further than 0.3 m, what is the maximum mass of a railcar that can hit it at 1 ?    What is the maximum mass of a railcar that can hit the spring without it breaking at 2 ?      a)  b)  c) 45000 kg d) 11250 kg   "
},
{
  "id": "sec_mv-6-9",
  "level": "2",
  "url": "sec_mv.html#sec_mv-6-9",
  "type": "Exercise",
  "number": "2.4.104",
  "title": "",
  "body": "  A mass of kg is on a spring with and . Find the mass for which there is critical damping. If , does the system oscillate or not, that is, is it underdamped or overdamped?     . If , then the system is overdamped and will not oscillate.   "
},
{
  "id": "sec_nonhom",
  "level": "1",
  "url": "sec_nonhom.html",
  "type": "Section",
  "number": "2.5",
  "title": "Nonhomogeneous equations",
  "body": " Nonhomogeneous equations   Note: 2 lectures, §3.5 in , §3.5 and §3.6 in    Solving nonhomogeneous equations  We have solved linear constant-coefficient homogeneous equations. What about nonhomogeneous linear ODEs? For example, the equations for forced mechanical vibrations. That is, consider an equation such as We will write when the exact form of the operator is not important. We solve in the following manner. First, we find the general solution to the associated homogeneous equation associated homogeneous equation  We call the complementary solution complementary solution . Next, we find a single particular solution particular solution  to in some way. Then is the general solution to . We have and . As is a linear operator linear operator , we verify that is a solution: .  Let us see why we obtain the general solution. Let and be two different particular solutions to . Write the difference as . Then plug into the left-hand side of the equation to get With the operator notation, the calculation becomes even clearer. As is a linear operator, So is a solution to , that is, . Any two solutions of differ by a solution to the homogeneous equation . The solution includes all solutions to , since is the general solution to the associated homogeneous equation.    Let be a linear ODE (not necessarily constant-coefficient). Let be the complementary solution (the general solution to the associated homogeneous equation ) and let be any particular solution to . Then the general solution to is     The moral of the story is that we can find the particular solution in any old way. If we find a different particular solution (by a different method or by simply guessing), then we still get the same general solution. The formula may look different, and the constants we have to choose to satisfy the initial conditions may be different, but it is the same solution.    Undetermined coefficients  undetermined coefficients  The trick is to somehow, in a smart way, guess one particular solution to . Note that is a polynomial, and the left-hand side of the equation will be a polynomial if we let be a polynomial of the same degree. Let us try We plug into the left-hand side to obtain So . Therefore, and . That means . Solving the complementary problem (exercise!), we get Hence the general solution to is Now suppose we are further given some initial conditions. For example, and . First find . Then We solve to get and . The particular solution we want is     Check that really solves the equation and the given initial conditions.    Note: A common mistake is to solve for constants using the initial conditions with and only add the particular solution after that. That will not work. You need to first compute and only then solve for the constants using the initial conditions.  Another important remark is that you should not forget the lower degree terms, even if they do not appear on the right-hand side. If the equation is , you must try , even though there is no nor on the right-hand side of the equation. It is a general polynomial of degree 3 that must be tried.  A right-hand side consisting of exponentials, sines, and cosines can be handled similarly. For example, Let us find some . We start by guessing the solution includes some multiple of . We may have to also add a multiple of to our guess since derivatives of cosine are sines. We try We plug into the equation and we get or The left-hand side must equal the right-hand side. Namely, and . So and and hence and . So   Similarly, if the right-hand side contains exponentials, we try exponentials. If we try as our guess and try to solve for .  When the right-hand side is a multiple of sines, cosines, exponentials, and polynomials, we can use the product rule for differentiation to come up with a guess. We need to guess a form for such that is of the same form, and has all the terms needed for the right-hand side. For example, For this equation, we guess We plug in and then hopefully get equations that we can solve for , , , , , and . As you can see this can make for a very long and tedious tedious calculation very quickly. C'est la vie la vie !  There is one hiccup in all this. It could be that our guess actually solves the associated homogeneous equation. That is, consider We would love to guess , but if we plug this into the left-hand side of the equation, we get There is no way to choose to make the left-hand side . The trick is to multiply our guess by to get rid of duplication with the complementary solution. First, we find (solution to ), We note that the term is a duplicate with our desired guess. We modify our guess to so that there is no duplication anymore. Let us try: and , so Thus is supposed to equal . Hence, and so . We can now write the general solution as   It is possible that multiplying by does not get rid of all duplication. Consider, The complementary solution is . Guessing does not get us anywhere. We want to guess . Basically, we multiply our guess by until all duplication is gone. But no more! Multiplying too many times will not work.  Also make sure to look for duplication in the entire expression you try. For the equation , where , it is not enough that does not appear in . Trying will not work as appears in , you must try .  Finally, what if the right-hand side has several terms, such as In this case, we find that solves and that solves (that is, do each term separately). If we set , then we find our desired particular solution. That is because is linear; we have .    Variation of parameters  The method of undetermined coefficients works for many basic problems that crop up. But it does not work all the time. It only works when the right-hand side of the equation has finitely many linearly independent derivatives, so that we can write a guess that consists of them all. Some equations are a bit tougher. Consider Each new derivative of looks completely different and cannot be written as a linear combination of the previous derivatives. If we start differentiating , we get:   This equation calls for a different method. We present the method of variation of parameters variation of parameters , which handles any equation of the form , provided we can solve certain integrals. For simplicity, we restrict ourselves to second-order constant-coefficient equations, but the method works for higher-order equations just as well (the computations become more tedious tedious ). The method also works for equations with nonconstant coefficients, provided we can solve the associated homogeneous equation.  The details below will work for any equation of the form , but perhaps it is best to explain the method with a specific example. Consider the equation First we find the complementary solution (solution to ). We get , where and . To find a particular solution to the nonhomogeneous equation, the trick to this method is to try where and are functions and not constants. We are trying to satisfy . That gives us one condition on the functions and . Compute (note the product rule!) We can still impose one more condition at our discretion to simplify computations (we have two unknown functions, so we should be allowed two conditions). We require that (the first term above). This makes computing the second derivative easier: Since and are solutions to , we find and . (If the equation where the more general , we would have .) So We have and so and hence For to satisfy , we must have .  What we need to solve are the two equations (conditions) we imposed on and : We get these same equations for any , where . We solve for and in terms of , , and . There is a general formula for the solution we could just plug into, but instead of memorizing that, it is easier to simply solve it as we do below. In our case, , , and , so the two equations are Multiply the first equation by and the second by : Add the two equations to eliminate , solve for , and then solve for : We integrate and to get and . We are looking for a particular solution, so we forget about the constants of integration. So our particular solution is The general solution to is, therefore,   So the general idea for any is to first find solutions , to . Then solve the two boxed equations for and , that is, solve and . Integrate and to find and , and plug those into to find the particular solution. We remark that if has some coefficient that is not , that is, if the equation is , you must first divide the equation (and hence ) by .      Find a particular solution of .      Find a particular solution of .      Solve the initial value problem for , .      Set up the form of the particular solution but do not solve for the coefficients for .      Set up the form of the particular solution but do not solve for the coefficients for .          Using variation of parameters, find a particular solution of .    Find a particular solution using undetermined coefficients.    Are the two solutions you found the same? See also .        Find a particular solution of . It is OK to leave the answer as a definite integral.      For an arbitrary constant find a particular solution to . Hint: Make sure to handle every possible real .          Using variation of parameters, find a particular solution of .    Find a particular solution using undetermined coefficients.    Are the two solutions you found the same? What is going on?        Find a polynomial , so that solves .      Find a particular solution to .               Find a particular solution to .    Find the general solution.      a)  b)       Solve , , .           Use variation of parameters to find a particular solution of .           For an arbitrary constant find the general solution to .           Undetermined coefficients can sometimes be used to guess a particular solution to other equations than those with constant coefficients. Find a polynomial that solves .  Note: Not every right-hand side will allow a polynomial solution, for example, does not, but a technique based on undetermined coefficients does work, see .          "
},
{
  "id": "sec_nonhom-3-4",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-3-4",
  "type": "Theorem",
  "number": "2.5.1",
  "title": "",
  "body": "  Let be a linear ODE (not necessarily constant-coefficient). Let be the complementary solution (the general solution to the associated homogeneous equation ) and let be any particular solution to . Then the general solution to is    "
},
{
  "id": "sec_nonhom-4-4",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-4-4",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "",
  "body": "  Check that really solves the equation and the given initial conditions.   "
},
{
  "id": "sec_nonhom-6-1",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-1",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "",
  "body": "  Find a particular solution of .   "
},
{
  "id": "sec_nonhom-6-2",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-2",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "",
  "body": "  Find a particular solution of .   "
},
{
  "id": "sec_nonhom-6-3",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-3",
  "type": "Exercise",
  "number": "2.5.4",
  "title": "",
  "body": "  Solve the initial value problem for , .   "
},
{
  "id": "sec_nonhom-6-4",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-4",
  "type": "Exercise",
  "number": "2.5.5",
  "title": "",
  "body": "  Set up the form of the particular solution but do not solve for the coefficients for .   "
},
{
  "id": "sec_nonhom-6-5",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-5",
  "type": "Exercise",
  "number": "2.5.6",
  "title": "",
  "body": "  Set up the form of the particular solution but do not solve for the coefficients for .   "
},
{
  "id": "sec_nonhom-6-6",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-6",
  "type": "Exercise",
  "number": "2.5.7",
  "title": "",
  "body": "      Using variation of parameters, find a particular solution of .    Find a particular solution using undetermined coefficients.    Are the two solutions you found the same? See also .     "
},
{
  "id": "sec_nonhom-6-7",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-7",
  "type": "Exercise",
  "number": "2.5.8",
  "title": "",
  "body": "  Find a particular solution of . It is OK to leave the answer as a definite integral.   "
},
{
  "id": "sec_nonhom-6-8",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-8",
  "type": "Exercise",
  "number": "2.5.9",
  "title": "",
  "body": "  For an arbitrary constant find a particular solution to . Hint: Make sure to handle every possible real .   "
},
{
  "id": "exercise_diffvarparunder",
  "level": "2",
  "url": "sec_nonhom.html#exercise_diffvarparunder",
  "type": "Exercise",
  "number": "2.5.10",
  "title": "",
  "body": "      Using variation of parameters, find a particular solution of .    Find a particular solution using undetermined coefficients.    Are the two solutions you found the same? What is going on?     "
},
{
  "id": "sec_nonhom-6-10",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-10",
  "type": "Exercise",
  "number": "2.5.11",
  "title": "",
  "body": "  Find a polynomial , so that solves .   "
},
{
  "id": "sec_nonhom-6-11",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-11",
  "type": "Exercise",
  "number": "2.5.101",
  "title": "",
  "body": "  Find a particular solution to .        "
},
{
  "id": "sec_nonhom-6-12",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-12",
  "type": "Exercise",
  "number": "2.5.102",
  "title": "",
  "body": "      Find a particular solution to .    Find the general solution.      a)  b)    "
},
{
  "id": "sec_nonhom-6-13",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-13",
  "type": "Exercise",
  "number": "2.5.103",
  "title": "",
  "body": "  Solve , , .        "
},
{
  "id": "sec_nonhom-6-14",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-14",
  "type": "Exercise",
  "number": "2.5.104",
  "title": "",
  "body": "  Use variation of parameters to find a particular solution of .        "
},
{
  "id": "sec_nonhom-6-15",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-15",
  "type": "Exercise",
  "number": "2.5.105",
  "title": "",
  "body": "  For an arbitrary constant find the general solution to .        "
},
{
  "id": "sec_nonhom-6-16",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-16",
  "type": "Exercise",
  "number": "2.5.106",
  "title": "",
  "body": "  Undetermined coefficients can sometimes be used to guess a particular solution to other equations than those with constant coefficients. Find a polynomial that solves .  Note: Not every right-hand side will allow a polynomial solution, for example, does not, but a technique based on undetermined coefficients does work, see .        "
},
{
  "id": "forcedo_section",
  "level": "1",
  "url": "forcedo_section.html",
  "type": "Section",
  "number": "2.6",
  "title": "Forced oscillations and resonance",
  "body": " Forced oscillations and resonance   Note: 2 lectures, §3.6 in , §3.8 in     Let us return back to the example of a mass on a spring. We examine the case of forced oscillations, which we did not yet handle. That is, we consider the equation for some nonzero . The setup is again: is position, is mass, is friction, is the spring constant, and is an external force acting on the mass.  We are interested in periodic forcing, such as noncentered rotating parts, or perhaps loud sounds, or other sources of periodic force. Using Fourier series, see , we note that we can understand all periodic functions by considering (or sine instead of cosine, the calculations are essentially the same), so we focus on this simple case.    Undamped forced motion and resonance  First, let us consider undamped ( ) motion. We have the equation This equation has the complementary solution (solution to the associated homogeneous equation) where is the natural frequency natural frequency (angular). It is the frequency at which the system wants to oscillate without external interference.  Suppose that . We solve using the method of undetermined coefficients. We try the solution and solve for . We do not need a sine in our trial solution as after plugging in we only have cosines. If you include a sine, it is fine; you will find that its coefficient is zero (I could not find a second rhyme). We plug into the equation and solve for to find We leave it as an exercise to do the algebra required.  The general solution is Written another way The solution is a superposition of two (shifted) cosine waves at different frequencies.    Take   Let us compute. First we read off the parameters: , , , . The general solution is   Solve for and using the initial conditions: and . Hence    Graph of .    Do notice the beating behavior beating in . To analyze it, we use the trigonometric identity to get The function is a high-frequency wave modulated by a low-frequency wave.    Now suppose . We notice that solves the associated homogeneous equation. Hence, we cannot try the solution with the method of undetermined coefficients. Therefore, we try . This time we do need the sine term, since the second derivative of contains sines. We write the equation Plugging into the left-hand side, we get Hence and . Our particular solution is and the general solution is   The important term is the last one (the particular solution we found). This term grows without bound as . In fact it oscillates between and . The first two terms only oscillate between , which becomes smaller and smaller in proportion to the oscillations of the last term as gets larger. In , we see the graph with , , , .   Graph of .    By forcing the system at just the right frequency, we produce very wild oscillations. This kind of behavior is called resonance resonance or perhaps pure resonance pure resonance . Sometimes resonance is desired. For example, remember when as a kid you could start swinging by just moving back and forth on the swing seat in the correct frequency ? You were trying to achieve resonance. The force of each one of your moves was small, but after a while it produced large swings.  On the other hand, resonance can be destructive. In an earthquake, some buildings collapse while others may be relatively undamaged. This is due to different buildings having different resonance frequencies. So figuring out the resonance frequency can be very important.  A common (but wrong) example of the destructive force of resonance is the Tacoma Narrows bridge failure. It turns out there was a different phenomenon at play K. Billah and R. Scanlan, Resonance, Tacoma Narrows Bridge Failure, and Undergraduate Physics Textbooks , American Journal of Physics, 59(2), 1991, 118–124, .    Damped forced motion and practical resonance  In real life, things are not as simple as they were above. There is, of course, some damping. Our equation becomes for some . We solved the homogeneous problem before. We let We replace equation with The roots of the characteristic equation of the associated homogeneous problem are . The form of the general solution of the associated homogeneous equation depends on the sign of , or equivalently on the sign of , as before: where . In any case, we see that as .  Let us find a particular solution. There can be no conflicts when trying to solve for the undetermined coefficients by trying . We plug in and solve for and . We get (the tedious tedious details are left to reader)   We solve for and as usual: Thus our particular solution is The amplitude of this solution is Let us write the solution in the alternative form for amplitude and phase shift where (if ) Hence, If , then , , and .  For reasons we will explain in a moment, we call the transient solution transient solution and denote it by . We call the steady periodic solution steady periodic solution and denote it by . The general solution is   The transient solution goes to zero as , as all the terms involve an exponential with a negative exponent. So for large , the effect of is negligible and we see essentially only . Hence the name transient . Notice that involves no arbitrary constants, and the initial conditions only affect . Thus, the effect of the initial conditions is negligible after some period of time. We might as well focus on the steady periodic solution and ignore the transient solution. See for a graph given several different initial conditions.   Solutions with different initial conditions for parameters , , , , and .    How fast goes to zero depends on (and hence ). The bigger is (the bigger is), the faster  becomes negligible. Conversely, the smaller the damping, the longer the transient region. This is consistent with the observation that when , the initial conditions affect the behavior for all time (i.e. an infinite transient region ).  Let us describe what we mean by resonance when damping is present. There were no conflicts solving with undetermined coefficients, so no term in goes to infinity. Instead, we consider the amplitude of the steady periodic solution , that is, the furthest the mass goes either way from the rest position. We plot as a function of (fix all other parameters) and we find its maximum. The that gives this maximum is the practical resonance frequency practical resonance frequency . The maximal amplitude is the practical resonance amplitude practical resonance amplitude . Thus when damping is present we talk of practical resonance practical resonance rather than pure resonance. shows a sample plot for three different values of . Notice that the practical resonance amplitude grows as damping gets smaller, and practical resonance can disappear altogether when damping is large.   Graph of showing practical resonance with parameters , , . The top line is with , the middle line with , and the bottom line with .    To find the maximum of , we find the derivative : This is zero either when or when . In other words, when If is positive, then is the practical resonance frequency (the point where is maximal). This conclusion follows by the first derivative test, for example, as then for small in this case. If on the other hand is not positive, then achieves its maximum at , and there is no practical resonance since we assume in our system. In this case, the amplitude gets larger as the forcing frequency gets smaller.  If practical resonance occurs, the frequency is smaller than . As the damping (and hence ) becomes smaller, the practical resonance frequency goes to . So when damping is very small, is a good estimate of the practical resonance frequency. This behavior agrees with the observation that when , then is the resonance frequency.  Another interesting observation to make is that when , then . This means that if the forcing frequency gets too high it does not manage to get the mass moving in the mass-spring system. This is quite reasonable intuitively. If we wiggle back and forth really fast while sitting on a swing, we will not get it moving at all, no matter how forceful. Fast vibrations just cancel each other out before the mass has any chance of responding by moving one way or the other.  The behavior is more complicated if the forcing function is not an exact cosine wave, but for example a square wave square wave . A general periodic function will be the sum (superposition) of many cosine waves of different frequencies. The reader is encouraged to come back to this section once we have learned about the Fourier series.      Derive a formula for if the equation is . Assume .      Derive a formula for if the equation is . Assume .      Take . Fix , , and . Consider the function . For what values of (solve in terms of , , and ) will there be no practical resonance (that is, for what values of is there no maximum of for )?      Take . Fix , , and . Consider the function . For what values of (solve in terms of , , and ) will there be no practical resonance (that is, for what values of is there no maximum of for )?      A water tower in an earthquake acts as a mass-spring system. Assume that the container on top is full and the water does not move around. The container then acts as the mass and the support acts as the spring, where the induced vibrations are horizontal. The container with water has a mass of . It takes a force of 1000 newtons to displace the container 1 meter. For simplicity, assume no friction. When the earthquake hits, the water tower is at rest (it is not moving). The earthquake induces an external force newtons.    What is the natural frequency of the water tower?    If is not the natural frequency, find a formula for the maximal amplitude of the resulting oscillations of the water container (the maximal deviation from the rest position). The motion will be a high-frequency wave modulated by a low-frequency wave, so simply find the constant in front of the sines.    Suppose and an earthquake with frequency 0.5 cycles per second comes. What is the amplitude of the oscillations? Suppose that if the water tower moves more than 1.5 meters from the rest position, the tower collapses. Will the tower collapse?        A mass of 4 kg on a spring with and a damping constant . Suppose that . Using the forcing function , find the that causes practical resonance and find the practical resonance amplitude.             Derive a formula for for , where is some constant. Assume .     , where and .      Suppose there is no damping in a mass and spring system with , , and . Suppose is chosen to be precisely the resonance frequency.    Find .    Find the amplitude of the oscillations at time seconds, given the system is at rest at .      a)  b)      "
},
{
  "id": "forcedo_section-3-5",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-3-5",
  "type": "Example",
  "number": "2.6.1",
  "title": "",
  "body": "  Take   Let us compute. First we read off the parameters: , , , . The general solution is   Solve for and using the initial conditions: and . Hence    Graph of .    Do notice the beating behavior beating in . To analyze it, we use the trigonometric identity to get The function is a high-frequency wave modulated by a low-frequency wave.   "
},
{
  "id": "X3_6_resonancefig",
  "level": "2",
  "url": "forcedo_section.html#X3_6_resonancefig",
  "type": "Figure",
  "number": "2.6",
  "title": "",
  "body": " Graph of .   "
},
{
  "id": "X3_6_transbehfig",
  "level": "2",
  "url": "forcedo_section.html#X3_6_transbehfig",
  "type": "Figure",
  "number": "2.7",
  "title": "",
  "body": " Solutions with different initial conditions for parameters , , , , and .   "
},
{
  "id": "X3_6_pracresfig",
  "level": "2",
  "url": "forcedo_section.html#X3_6_pracresfig",
  "type": "Figure",
  "number": "2.8",
  "title": "",
  "body": " Graph of showing practical resonance with parameters , , . The top line is with , the middle line with , and the bottom line with .   "
},
{
  "id": "forcedo_section-5-1",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-5-1",
  "type": "Exercise",
  "number": "2.6.1",
  "title": "",
  "body": "  Derive a formula for if the equation is . Assume .   "
},
{
  "id": "forcedo_section-5-2",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-5-2",
  "type": "Exercise",
  "number": "2.6.2",
  "title": "",
  "body": "  Derive a formula for if the equation is . Assume .   "
},
{
  "id": "forcedo_section-5-3",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-5-3",
  "type": "Exercise",
  "number": "2.6.3",
  "title": "",
  "body": "  Take . Fix , , and . Consider the function . For what values of (solve in terms of , , and ) will there be no practical resonance (that is, for what values of is there no maximum of for )?   "
},
{
  "id": "forcedo_section-5-4",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-5-4",
  "type": "Exercise",
  "number": "2.6.4",
  "title": "",
  "body": "  Take . Fix , , and . Consider the function . For what values of (solve in terms of , , and ) will there be no practical resonance (that is, for what values of is there no maximum of for )?   "
},
{
  "id": "forcedo_section-5-5",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-5-5",
  "type": "Exercise",
  "number": "2.6.5",
  "title": "",
  "body": "  A water tower in an earthquake acts as a mass-spring system. Assume that the container on top is full and the water does not move around. The container then acts as the mass and the support acts as the spring, where the induced vibrations are horizontal. The container with water has a mass of . It takes a force of 1000 newtons to displace the container 1 meter. For simplicity, assume no friction. When the earthquake hits, the water tower is at rest (it is not moving). The earthquake induces an external force newtons.    What is the natural frequency of the water tower?    If is not the natural frequency, find a formula for the maximal amplitude of the resulting oscillations of the water container (the maximal deviation from the rest position). The motion will be a high-frequency wave modulated by a low-frequency wave, so simply find the constant in front of the sines.    Suppose and an earthquake with frequency 0.5 cycles per second comes. What is the amplitude of the oscillations? Suppose that if the water tower moves more than 1.5 meters from the rest position, the tower collapses. Will the tower collapse?     "
},
{
  "id": "forcedo_section-5-6",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-5-6",
  "type": "Exercise",
  "number": "2.6.101",
  "title": "",
  "body": "  A mass of 4 kg on a spring with and a damping constant . Suppose that . Using the forcing function , find the that causes practical resonance and find the practical resonance amplitude.          "
},
{
  "id": "forcedo_section-5-7",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-5-7",
  "type": "Exercise",
  "number": "2.6.102",
  "title": "",
  "body": "  Derive a formula for for , where is some constant. Assume .     , where and .   "
},
{
  "id": "forcedo_section-5-8",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-5-8",
  "type": "Exercise",
  "number": "2.6.103",
  "title": "",
  "body": "  Suppose there is no damping in a mass and spring system with , , and . Suppose is chosen to be precisely the resonance frequency.    Find .    Find the amplitude of the oscillations at time seconds, given the system is at rest at .      a)  b)    "
},
{
  "id": "sec_introtosys",
  "level": "1",
  "url": "sec_introtosys.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction to systems of ODEs",
  "body": " Introduction to systems of ODEs   Note: 1 to 1.5 lectures, §4.1 in , §7.1 in    Systems  Often we do not have just one dependent variable and one equation. We will see that we may end up with a system of several equations and several dependent variables even if we start with a single equation.  Given several dependent variables, suppose , , ..., , we can have a differential equation involving all of them and their derivatives with respect to one independent variable . For example, . Usually, when we have two dependent variables, we have two equations such as for some known functions and . We call the above a system of differential equations system of differential equations . More precisely, the above is a second-order system second-order system of ODEs as second-order derivatives appear. The system is a first-order system first-order system , where are the dependent variables, and is the independent variable.  The terminology for systems is essentially the same as for single equations. For the system above, a solution solution to a system is a set of three functions , , , such that   We may also have an initial condition initial condition for a system . As for single equations, we specify , , and for some fixed . For example, , , , where , , and are some constants. For a second-order system, we must also specify the first derivatives at the initial point. If we find a solution with arbitrary constants in it, where solving for the constants gives a solution for any initial condition, we call this solution the general solution general solution to a system . Best to look at a simple example.    Sometimes a system is easy to solve by solving for one variable and then for the second variable. Take the first-order system with , as the dependent variables and as the independent variable. Consider initial conditions , .  We note that is the general solution of the first equation. We then plug this into the second equation and get the equation , which is a linear first-order equation that is easily solved for . By the integrating factor method, we get or . The general solution to the system is, therefore, We solve for and given the initial conditions. We substitute to find and , or in other words, and . Thus the solution is , and .    Generally, we will not be so lucky to be able to solve for each variable separately as in the example—we will need to solve for all variables at once. While we cannot always solve one variable at a time, we will try to salvage as much as possible from this technique. In a certain sense, to solve systems, we will still (try to) solve a bunch of single equations and put their solutions together. Let us not worry right now about how to solve systems yet.  We will mostly consider linear systems linear systems . is a linear first-order system linear first-order system . It is linear as none of the dependent variables or their derivatives appear in nonlinear functions or with powers higher than one ( , , , , constants, and functions of can appear, but not or or ). Another, more complicated, example of a linear (second-order) system is     Applications  We consider some simple applications of systems and how to set up the equations.    First, we consider salt and brine tanks, but this time water flows from one to the other and back. Imagine we have two tanks, each containing volume liters of salt brine. The amount of salt in the first tank is grams, and the amount of salt in the second tank is grams. Let denote time—the independent variable. The liquid in each tank is being constantly and perfectly mixed and flows or is pumped at a rate of liters per second out of each tank into the other. See .   A closed system of two brine tanks.    The rate of change of , that is, , is the rate of salt entering minus the rate leaving. The density of the salt in tank 2 is , so the rate of salt entering tank 1 is times . The density of the salt in tank 1 is , so the rate of salt leaving tank 1 is times . In other words, Similarly, to find the rate , the roles of and are reversed. All in all, the system of ODEs for this problem is In this system, we cannot solve for or separately. We must solve for both and at once, which is intuitively clear—the amount of salt in one tank affects the amount in the other. We cannot know before we know , and vice versa.  We do not yet know how to find all the solutions, but intuitively we can at least find some solutions. Suppose we know that initially the tanks have the same amount of salt. That is, we have an initial condition such as . Then clearly the amount of salt entering and leaving each tank is the same, so the amounts are not changing. In other words, and (the constant functions) is a solution: , and , so the equations are satisfied.  Let us think about the setup a little bit more without solving it. Suppose the initial conditions are and , for two different constants and . Since no salt is coming in or out of this closed system, the total amount of salt is constant. That is, is constant, and so it equals . Intuitively, if , more salt will flow out of tank one than into it. After a long time, we then expect the amount of salt in each tank to equalize. In other words, the solutions of both and should tend towards as goes to . Once you know how to solve systems, you can check that this really is so.      Let us look at a second-order example. We return to the mass and spring setup, but this time we consider two masses.     Consider one spring with constant and two masses and . Think of the masses as carts on a straight track with no friction. Let be the displacement of the first cart and be the displacement of the second cart. That is, we put the two carts somewhere with no tension on the spring, we mark the position of the first and second cart, and we call those the zero positions. Then measures how far the first cart is from its zero position, and measures how far the second cart is from its zero position. The force exerted by the spring on the first cart is as is how far the spring is stretched (or compressed) from the rest position. The force exerted on the second cart is the opposite, thus the same thing with a negative sign. Newton's second law Newton's second law states that force equals mass times acceleration, that is,   Again, we cannot solve for the or variables one at a time. Where the first cart goes depends on exactly where the second cart goes and vice versa.      Changing to first-order systems  To some degree, we need only be able to solve first-order systems. Consider an -order differential equation We define new variables and write the system We solve this system for , , ..., . Once we have solved for the , we can discard through and let . This solves the original equation.    Take . Letting , , , we find the system: Note why solves the original equation: The first two equations of the system give that . If we plug , , , and into the third equation of the system, we recover the third-order equation we started with.    The same idea works for a system of higher-order differential equations. A system of differential equations in unknowns, all of order , can be transformed into a first-order system of equations and unknowns.    Consider the system from the example with carts, : Let , , , . The second-order system becomes the first-order system       The idea works in reverse as well. Suppose we want to solve the system for the initial conditions , . Let the independent variable be .  If we differentiate the second equation, we get . We know what is in terms of and , and we know that . So, We now have the equation . We know how to solve this equation and we find that . Once we have , we use the equation to get . We solve for the initial conditions and . Hence, and . So and . Our solution is       Plug in and check that this really is the solution.    It is useful to go back and forth between systems and higher-order equations for other reasons. For example, software for solving ODEs numerically (approximation) is generally for first-order systems. To use it, you take whatever ODE you want to solve and convert it to a first-order system. It is not very hard to adapt computer code for the Euler or Runge–Kutta method for first-order equations to handle first-order systems. We simply treat the dependent variable not as a number but as a vector. In many mathematical computer languages there is almost no distinction in syntax.    Autonomous systems and vector fields  A system where the equations do not depend on the independent variable is called an autonomous system autonomous system . For example, the system , is autonomous as the independent variable, say , does not appear in the equations.  For autonomous systems, we can draw the so-called direction field direction field or vector field vector field , a plot similar to a slope field, but instead of giving a slope at each point, we give a direction (and a magnitude). The previous example, , , says that at the point the direction in which we should travel to satisfy the equations should be the direction of the vector with the speed equal to the magnitude of this vector. So we draw the vector at the point and we do this for many points on the -plane. For example, at the point , we draw the vector , a vector pointing to the right and a little bit up, while at the point we draw the vector a vector that points straight up. When drawing the vectors, we will scale down their size to fit many of them on the same direction field. If we drew the arrows at the actual size, the diagram would be a jumbled mess once we draw more than a couple of arrows. So we scale them all so that not even the longest one interferes with the others. We are mostly interested in their direction and relative size. See . The diagrams we drew in for autonomous equations in one dimension are similar, but note how much more complicated things become when we allow just one extra dimension.  We can draw a path of the solution in the plane. Suppose the solution is given by , . We pick an interval of (say for our example) and plot all the points for in the selected range. The resulting picture is called the phase portrait phase portrait (or phase plane portrait phase plane portrait ). The particular curve obtained is called the trajectory trajectory or solution curve solution curve . See an example plot in . In the figure the solution starts at and travels along the vector field for a distance of 2 units of . We solved this system precisely, so we compute and to find and . This point corresponds to the top right end of the plotted solution curve in the figure.   The direction field for , .    The direction field for , with the trajectory of the solution starting at for .    We can draw phase portraits and trajectories in the -plane even if the system is not autonomous. In this case, however, we cannot draw the direction field, since the field changes as changes. For each we would get a different direction field.    Picard's theorem  Before going further, we mention that Picard's theorem on existence and uniqueness also holds for systems of ODEs. Let us restate this theorem in this setting. A general first-order system is of the form    Picard's theorem on existence and uniqueness for systems  existence and uniqueness for systems  Picard's theorem   If for every and every each is continuous and the derivative exists and is continuous near some , then a solution to subject to the initial condition , , ..., exists (at least for in some small interval) and is unique.    That is, a unique solution exists for any initial condition given that the system is reasonable (each and its partial derivatives in the variables are continuous). As for single equations, we may not have a solution for all time , but it is guaranteed at least for some short period of time.  As we can change any -order ODE into a first-order system, this theorem also provides the existence and uniqueness of solutions for higher-order equations.      Find the general solution of , .      Find the general solution of , .      Write as a first-order system of ODEs.      Write , as a first-order system of ODEs.      Suppose two masses on carts on frictionless surface are at displacements and as in . Suppose that a rocket applies force in the positive direction on cart . Set up the system of equations.      Suppose the tanks are as in , starting both at volume , but now the rate of flow from tank 1 to tank 2 is , and rate of flow from tank 2 to tank one is . Notice that the volumes are now not constant. Set up the system of equations.      Find the general solution to , , .     , ,       Solve , , , .     ,       Write as a first-order system.     , , , (here )      Write , as a first-order system.     , , ,       Suppose two masses on carts on frictionless surface are at displacements and as in . Suppose initial displacement is , and initial velocity is for some number . Use your intuition to solve the system, explain your reasoning.     . Explanation of the intuition is left to reader.      Suppose the tanks are as in except that clean water flows in at a rate of liters per second into tank 1, and brine flows out of tank 2 and into the sewer also at a rate of liters per second. The rate of flow from tank 1 into tank 2 is still , but the rate of flow from tank 2 back into tank 1 is (assume ).    Draw the picture.    Set up the system of equations.    Intuitively, what happens as goes to infinity, explain.      a) Left to reader. b) , . c) As goes to infinity, both and go to zero, explanation is left to reader.     "
},
{
  "id": "example_simplesystem",
  "level": "2",
  "url": "sec_introtosys.html#example_simplesystem",
  "type": "Example",
  "number": "3.1.1",
  "title": "",
  "body": "  Sometimes a system is easy to solve by solving for one variable and then for the second variable. Take the first-order system with , as the dependent variables and as the independent variable. Consider initial conditions , .  We note that is the general solution of the first equation. We then plug this into the second equation and get the equation , which is a linear first-order equation that is easily solved for . By the integrating factor method, we get or . The general solution to the system is, therefore, We solve for and given the initial conditions. We substitute to find and , or in other words, and . Thus the solution is , and .   "
},
{
  "id": "sintro_closedbrine-example",
  "level": "2",
  "url": "sec_introtosys.html#sintro_closedbrine-example",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": "  First, we consider salt and brine tanks, but this time water flows from one to the other and back. Imagine we have two tanks, each containing volume liters of salt brine. The amount of salt in the first tank is grams, and the amount of salt in the second tank is grams. Let denote time—the independent variable. The liquid in each tank is being constantly and perfectly mixed and flows or is pumped at a rate of liters per second out of each tank into the other. See .   A closed system of two brine tanks.    The rate of change of , that is, , is the rate of salt entering minus the rate leaving. The density of the salt in tank 2 is , so the rate of salt entering tank 1 is times . The density of the salt in tank 1 is , so the rate of salt leaving tank 1 is times . In other words, Similarly, to find the rate , the roles of and are reversed. All in all, the system of ODEs for this problem is In this system, we cannot solve for or separately. We must solve for both and at once, which is intuitively clear—the amount of salt in one tank affects the amount in the other. We cannot know before we know , and vice versa.  We do not yet know how to find all the solutions, but intuitively we can at least find some solutions. Suppose we know that initially the tanks have the same amount of salt. That is, we have an initial condition such as . Then clearly the amount of salt entering and leaving each tank is the same, so the amounts are not changing. In other words, and (the constant functions) is a solution: , and , so the equations are satisfied.  Let us think about the setup a little bit more without solving it. Suppose the initial conditions are and , for two different constants and . Since no salt is coming in or out of this closed system, the total amount of salt is constant. That is, is constant, and so it equals . Intuitively, if , more salt will flow out of tank one than into it. After a long time, we then expect the amount of salt in each tank to equalize. In other words, the solutions of both and should tend towards as goes to . Once you know how to solve systems, you can check that this really is so.   "
},
{
  "id": "sintro_carts-example",
  "level": "2",
  "url": "sec_introtosys.html#sintro_carts-example",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  Let us look at a second-order example. We return to the mass and spring setup, but this time we consider two masses.     Consider one spring with constant and two masses and . Think of the masses as carts on a straight track with no friction. Let be the displacement of the first cart and be the displacement of the second cart. That is, we put the two carts somewhere with no tension on the spring, we mark the position of the first and second cart, and we call those the zero positions. Then measures how far the first cart is from its zero position, and measures how far the second cart is from its zero position. The force exerted by the spring on the first cart is as is how far the spring is stretched (or compressed) from the rest position. The force exerted on the second cart is the opposite, thus the same thing with a negative sign. Newton's second law Newton's second law states that force equals mass times acceleration, that is,   Again, we cannot solve for the or variables one at a time. Where the first cart goes depends on exactly where the second cart goes and vice versa.   "
},
{
  "id": "sec_introtosys-5-3",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-5-3",
  "type": "Example",
  "number": "3.1.4",
  "title": "",
  "body": "  Take . Letting , , , we find the system: Note why solves the original equation: The first two equations of the system give that . If we plug , , , and into the third equation of the system, we recover the third-order equation we started with.   "
},
{
  "id": "sec_introtosys-5-5",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-5-5",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": "  Consider the system from the example with carts, : Let , , , . The second-order system becomes the first-order system    "
},
{
  "id": "sec_introtosys-5-6",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-5-6",
  "type": "Example",
  "number": "3.1.6",
  "title": "",
  "body": "  The idea works in reverse as well. Suppose we want to solve the system for the initial conditions , . Let the independent variable be .  If we differentiate the second equation, we get . We know what is in terms of and , and we know that . So, We now have the equation . We know how to solve this equation and we find that . Once we have , we use the equation to get . We solve for the initial conditions and . Hence, and . So and . Our solution is    "
},
{
  "id": "sec_introtosys-5-7",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-5-7",
  "type": "Exercise",
  "number": "3.1.1",
  "title": "",
  "body": "  Plug in and check that this really is the solution.   "
},
{
  "id": "sintro-vectorfield_fig",
  "level": "2",
  "url": "sec_introtosys.html#sintro-vectorfield_fig",
  "type": "Figure",
  "number": "3.2",
  "title": "",
  "body": " The direction field for , .   "
},
{
  "id": "sintro-vectorfield-sol_fig",
  "level": "2",
  "url": "sec_introtosys.html#sintro-vectorfield-sol_fig",
  "type": "Figure",
  "number": "3.3",
  "title": "",
  "body": " The direction field for , with the trajectory of the solution starting at for .   "
},
{
  "id": "sys_picardthm",
  "level": "2",
  "url": "sec_introtosys.html#sys_picardthm",
  "type": "Theorem",
  "number": "3.1.1",
  "title": "Picard’s theorem on existence and uniqueness for systems.",
  "body": " Picard's theorem on existence and uniqueness for systems  existence and uniqueness for systems  Picard's theorem   If for every and every each is continuous and the derivative exists and is continuous near some , then a solution to subject to the initial condition , , ..., exists (at least for in some small interval) and is unique.   "
},
{
  "id": "sec_introtosys-8-1",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-1",
  "type": "Exercise",
  "number": "3.1.2",
  "title": "",
  "body": "  Find the general solution of , .   "
},
{
  "id": "sec_introtosys-8-2",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-2",
  "type": "Exercise",
  "number": "3.1.3",
  "title": "",
  "body": "  Find the general solution of , .   "
},
{
  "id": "sec_introtosys-8-3",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-3",
  "type": "Exercise",
  "number": "3.1.4",
  "title": "",
  "body": "  Write as a first-order system of ODEs.   "
},
{
  "id": "sec_introtosys-8-4",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-4",
  "type": "Exercise",
  "number": "3.1.5",
  "title": "",
  "body": "  Write , as a first-order system of ODEs.   "
},
{
  "id": "sec_introtosys-8-5",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-5",
  "type": "Exercise",
  "number": "3.1.6",
  "title": "",
  "body": "  Suppose two masses on carts on frictionless surface are at displacements and as in . Suppose that a rocket applies force in the positive direction on cart . Set up the system of equations.   "
},
{
  "id": "sec_introtosys-8-6",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-6",
  "type": "Exercise",
  "number": "3.1.7",
  "title": "",
  "body": "  Suppose the tanks are as in , starting both at volume , but now the rate of flow from tank 1 to tank 2 is , and rate of flow from tank 2 to tank one is . Notice that the volumes are now not constant. Set up the system of equations.   "
},
{
  "id": "sec_introtosys-8-7",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-7",
  "type": "Exercise",
  "number": "3.1.101",
  "title": "",
  "body": "  Find the general solution to , , .     , ,    "
},
{
  "id": "sec_introtosys-8-8",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-8",
  "type": "Exercise",
  "number": "3.1.102",
  "title": "",
  "body": "  Solve , , , .     ,    "
},
{
  "id": "sec_introtosys-8-9",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-9",
  "type": "Exercise",
  "number": "3.1.103",
  "title": "",
  "body": "  Write as a first-order system.     , , , (here )   "
},
{
  "id": "sec_introtosys-8-10",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-10",
  "type": "Exercise",
  "number": "3.1.104",
  "title": "",
  "body": "  Write , as a first-order system.     , , ,    "
},
{
  "id": "sec_introtosys-8-11",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-11",
  "type": "Exercise",
  "number": "3.1.105",
  "title": "",
  "body": "  Suppose two masses on carts on frictionless surface are at displacements and as in . Suppose initial displacement is , and initial velocity is for some number . Use your intuition to solve the system, explain your reasoning.     . Explanation of the intuition is left to reader.   "
},
{
  "id": "sec_introtosys-8-12",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-12",
  "type": "Exercise",
  "number": "3.1.106",
  "title": "",
  "body": "  Suppose the tanks are as in except that clean water flows in at a rate of liters per second into tank 1, and brine flows out of tank 2 and into the sewer also at a rate of liters per second. The rate of flow from tank 1 into tank 2 is still , but the rate of flow from tank 2 back into tank 1 is (assume ).    Draw the picture.    Set up the system of equations.    Intuitively, what happens as goes to infinity, explain.      a) Left to reader. b) , . c) As goes to infinity, both and go to zero, explanation is left to reader.   "
},
{
  "id": "sec_matrix",
  "level": "1",
  "url": "sec_matrix.html",
  "type": "Section",
  "number": "3.2",
  "title": "Matrices and linear systems",
  "body": " Matrices and linear systems   Note: 1.5 lectures, first part of §5.1 in , §7.2 and §7.3 in , see also    Matrices and vectors  Before we start talking about linear systems of ODEs, we need to talk about matrices, so let us review these briefly. A matrix matrix is an array of numbers ( rows and columns). For example, we denote a matrix as follows The numbers are called elements element of a matrix or entries entry of a matrix . We say a matrix is square square matrix if it has , that is, it has the same number of rows and columns.  In the setting of matrices, by a vector vector , we usually mean a column vector column vector , that is, an matrix. If we mean a row vector row vector , we will explicitly say so (a row vector is a matrix). We usually denote matrices by upper case letters and vectors by lower case letters with an arrow such as or . We write for a vector of all zeros.  We define some operations on matrices. We want matrices to really act like numbers, so our operations have to be compatible with this viewpoint. First, we can multiply scalar multiplication a matrix by a scalar scalar (a number). We simply multiply each entry in the matrix by the scalar. For example, Matrix addition addition of matrices is also simple. We add matrices element by element. For example, If the sizes do not match, then addition is not defined. If we denote by 0 the matrix with all zero entries, by , scalars, and by , , matrices, we have the following familiar rules:   Another useful operation for matrices is the so-called transpose transpose . This operation just swaps rows and columns of a matrix. The transpose of is denoted by . Example:     Matrix multiplication  Matrix multiplication is a bit more complicated. First we define the so-called dot product dot product (or inner product inner product ) of two vectors. Usually this will be a row vector multiplied with a column vector of the same size. For the dot product, we multiply each pair of entries from the first and the second vector, and we sum these products. The result is a single number. For example, Similarly for larger (or smaller) vectors.  Armed with the dot product, we define the product of matrices product of matrices . We denote by the row of and by the column of . For an matrix and an matrix , we can define the product . We let be an matrix whose entry is the dot product Do note how the sizes match up: multiplied by is . Example:   For multiplication, we want an analogue of a 1. This analogue is the so-called identity matrix identity matrix . The identity matrix is a square matrix with 1s on the diagonal and zeros everywhere else. It is usually denoted by . For each size, we have a different identity matrix. So sometimes we may denote the size as a subscript. For example, would be the identity matrix   We have the following rules for matrix multiplication. Suppose that , , are matrices of the correct sizes so that the following make sense. Let denote a scalar (number). Then,   A few warnings are in order.     in general (it may be true by fluke sometimes). That is, matrices do not commute commute . For example, take and .     does not necessarily imply , even if is not 0.     does not necessarily mean that or . Try, for example, .    For the last two items to hold, we would need to divide by a matrix. This is where the matrix inverse matrix inverse comes in. Suppose that and are matrices such that Then we call the inverse of and we denote by . If the inverse of exists, then we call  invertible invertible matrix . If is not invertible, we sometimes say is singular singular matrix .  If is invertible, then does imply that (in particular, the inverse of is unique). We just multiply both sides by (on the left) to get or or . It is also not hard to see that .    The determinant  For square matrices we define a useful quantity called the determinant determinant . We define the determinant of a matrix as the value of its only entry. For a matrix, we define   Before trying to define the determinant for larger matrices, let us note the meaning of the determinant. Consider an matrix as a mapping of the -dimensional euclidean space to itself, where gets sent to . In particular, a matrix is a mapping of the plane to itself. The determinant of is the factor by which the area of objects changes. If we take the unit square (square of side 1) in the plane, then takes the square to a parallelogram of area . The sign of denotes changing of orientation (negative if the axes get flipped). For example, let Then . Let us see where the (unit) square with vertices , , , and gets sent. Clearly gets sent to . The image of the square is another square with vertices , , , and . The image square has a side of length and is therefore of area 2.  If you think back to high school geometry, you may have seen a formula for computing the area of a parallelogram parallelogram with vertices , , and . And it is precisely The vertical lines above mean absolute value. The matrix carries the unit square to the given parallelogram.  Let us look at the determinant for larger matrices. We define as the matrix with the row and the column deleted. To compute the determinant of a matrix, pick one row, say the row and compute: For the first row, we get We alternately add and subtract the determinants of the submatrices multiplied by for a fixed and all . For a matrix, picking the first row, we get . For example,   The numbers are called cofactors cofactor of the matrix and this way of computing the determinant is called the cofactor expansion cofactor expansion . No matter which row you pick, you always get the same number. It is also possible to compute the determinant by expanding along columns (picking a column instead of a row above). It is true that .  A common notation for the determinant is a pair of vertical lines: I personally find this notation confusing as vertical lines usually mean a positive quantity, while determinants can be negative. Also think about how to write the absolute value of a determinant. I will not use this notation in this book.  Think of the determinants telling you the scaling of a mapping. If doubles the sizes of geometric objects and triples them, then (which applies to an object and then ) should make size go up by a factor of . This is true in general: This property is one of the most useful, and it can be employed to actually compute determinants. A particularly interesting consequence is to note what it means for existence of inverses. Take and to be inverses of each other, that is, . Then Neither nor can be zero. Conversely, if is not zero, then is invertible. We state this observation as a theorem as it is very important in the context of this course.    An matrix is invertible if and only if .    In fact, says that . So we even know what the determinant of is before we know how to compute .  There is a simple formula for the inverse of a matrix Notice the determinant of the matrix in the denominator of the fraction. The formula only works if the determinant is nonzero, otherwise we are dividing by zero.    Solving linear systems  One application of matrices we will need is to solve systems of linear equations. This is best shown by example. Suppose that we have the following system of linear equations   Without changing the solution, we could swap equations in this system, we could multiply any of the equations by a nonzero number, and we could add a multiple of one equation to another equation. It turns out these operations always suffice to find a solution.  It is easier to write the system as a matrix equation. The system above can be written as To solve the system, we put the coefficient matrix (the matrix on the left-hand side of the equation) together with the vector on the right-hand side and get the so-called augmented matrix augmented matrix :   We apply a sequence of the following three elementary row operations elementary row operations row operations .    Swap two rows.    Multiply a row by a nonzero number.    Add a multiple of one row to another row.    We keep doing these operations until we get into a state where it is easy to read off the answer, or until we get into a contradiction indicating no solution, for example if we come up with an equation such as .  Let us work through the example. First multiply the first row by to obtain Now subtract the first row from the second and third row: Multiply the last row by and the second row by : Swap rows 2 and 3: Subtract the last row from the first, then subtract the second row from the first: Finally, we think about what equations this augmented matrix represents: , , and . We try this solution in the original system and, voilà, it works!    Check that the solution above really solves the given equations.    We write this equation in matrix notation as where is the matrix and is the vector . The solution can also be computed via the inverse,   It is possible that the solution is not unique, or that no solution exists. It is easy to tell if a solution does not exist. If during the row reduction you come up with a row where all the entries except the last one are zero (the last entry in a row corresponds to the right-hand side of the equation), then the system is inconsistent inconsistent system and has no solution. For example, for a system of 3 equations and 3 unknowns, if you find a row such as in the augmented matrix, you know the system is inconsistent. That row corresponds to .  You generally try to use row operations until the following conditions are satisfied. The first (from the left) nonzero entry in each row is called the leading entry leading entry .    The leading entry in any row is strictly to the right of the leading entry of the row above.    Any zero rows are below all the nonzero rows.    All leading entries are 1.    All the entries above and below a leading entry are zero.    Such a matrix is said to be in reduced row echelon form reduced row echelon form . The variables corresponding to columns with no leading entries are said to be free variables free variable . Free variables mean that we can pick those variables to be anything we want and then solve for the rest of the unknowns.    The following augmented matrix is in reduced row echelon form. Suppose the variables are , , and . Then is the free variable, , and .  On the other hand, if during the row reduction process you come up with the matrix there is no need to go further. The last row corresponds to the equation , which is preposterous. Hence, no solution exists.      Computing the inverse  If the matrix is square and there exists a unique solution to for any (there are no free variables), then is invertible. Multiplying both sides by , you can see that . So it is useful to compute the inverse if you want to solve the equation for many different right-hand sides .  We have a formula for the inverse, but it is also not hard to compute inverses of larger matrices. While we will not have too much occasion to compute inverses for larger matrices than by hand, let us touch on how to do it. Finding the inverse of is actually just solving a bunch of linear equations. If we can solve where is the vector with all zeros except a 1 at the position, then the inverse is the matrix with the columns for (exercise: why?). Therefore, to find the inverse we write a larger augmented matrix , where is the identity matrix. We then perform row reduction. The reduced row echelon form of will be of the form if and only if is invertible. We then just read off the inverse .      Solve by using matrix inverse.      Compute determinant of .      Compute determinant of . Hint: Expand along the proper row or column to make the calculations simpler.      Compute inverse of .      For which is not invertible? Is there only one such ? Are there several? Infinitely many?      For which is not invertible? Find all such .      Solve .      Solve .      Solve .      Find 3 nonzero matrices , , and such that but .      Compute determinant of            Find such that is not invertible.           Solve .           Suppose are nonzero numbers. Let , .    Compute .    Compute .      a)  b)      "
},
{
  "id": "sec_matrix-5-9",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-5-9",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "",
  "body": "  An matrix is invertible if and only if .   "
},
{
  "id": "sec_matrix-6-9",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-6-9",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": "  Check that the solution above really solves the given equations.   "
},
{
  "id": "sec_matrix-6-15",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-6-15",
  "type": "Example",
  "number": "3.2.1",
  "title": "",
  "body": "  The following augmented matrix is in reduced row echelon form. Suppose the variables are , , and . Then is the free variable, , and .  On the other hand, if during the row reduction process you come up with the matrix there is no need to go further. The last row corresponds to the equation , which is preposterous. Hence, no solution exists.   "
},
{
  "id": "sec_matrix-8-1",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-1",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": "  Solve by using matrix inverse.   "
},
{
  "id": "sec_matrix-8-2",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-2",
  "type": "Exercise",
  "number": "3.2.3",
  "title": "",
  "body": "  Compute determinant of .   "
},
{
  "id": "sec_matrix-8-3",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-3",
  "type": "Exercise",
  "number": "3.2.4",
  "title": "",
  "body": "  Compute determinant of . Hint: Expand along the proper row or column to make the calculations simpler.   "
},
{
  "id": "sec_matrix-8-4",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-4",
  "type": "Exercise",
  "number": "3.2.5",
  "title": "",
  "body": "  Compute inverse of .   "
},
{
  "id": "sec_matrix-8-5",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-5",
  "type": "Exercise",
  "number": "3.2.6",
  "title": "",
  "body": "  For which is not invertible? Is there only one such ? Are there several? Infinitely many?   "
},
{
  "id": "sec_matrix-8-6",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-6",
  "type": "Exercise",
  "number": "3.2.7",
  "title": "",
  "body": "  For which is not invertible? Find all such .   "
},
{
  "id": "sec_matrix-8-7",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-7",
  "type": "Exercise",
  "number": "3.2.8",
  "title": "",
  "body": "  Solve .   "
},
{
  "id": "sec_matrix-8-8",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-8",
  "type": "Exercise",
  "number": "3.2.9",
  "title": "",
  "body": "  Solve .   "
},
{
  "id": "sec_matrix-8-9",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-9",
  "type": "Exercise",
  "number": "3.2.10",
  "title": "",
  "body": "  Solve .   "
},
{
  "id": "sec_matrix-8-10",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-10",
  "type": "Exercise",
  "number": "3.2.11",
  "title": "",
  "body": "  Find 3 nonzero matrices , , and such that but .   "
},
{
  "id": "sec_matrix-8-11",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-11",
  "type": "Exercise",
  "number": "3.2.101",
  "title": "",
  "body": "  Compute determinant of         "
},
{
  "id": "sec_matrix-8-12",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-12",
  "type": "Exercise",
  "number": "3.2.102",
  "title": "",
  "body": "  Find such that is not invertible.        "
},
{
  "id": "sec_matrix-8-13",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-13",
  "type": "Exercise",
  "number": "3.2.103",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "sec_matrix-8-14",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-14",
  "type": "Exercise",
  "number": "3.2.104",
  "title": "",
  "body": "  Suppose are nonzero numbers. Let , .    Compute .    Compute .      a)  b)    "
},
{
  "id": "linsystems_section",
  "level": "1",
  "url": "linsystems_section.html",
  "type": "Section",
  "number": "3.3",
  "title": "Linear systems of ODEs",
  "body": " Linear systems of ODEs  Note: less than 1 lecture, second part of §5.1 in , §7.4 in  A matrix- or vector-valued function is simply a matrix or a vector whose entries depend on some variable. If is the independent variable, we write a vector-valued function vector-valued function  as Similarly a matrix-valued function matrix-valued function  is The derivative or is just the matrix-valued function whose entry is .  Rules of differentiation of matrix-valued functions are similar to rules for normal functions. Let and be matrix-valued functions. Let be a scalar and a constant matrix. Then Note the order of the multiplication in the last two expressions.  A first-order linear system of ODEs first-order linear system of ODEs is a system that can be written as the vector equation where is a matrix-valued function, and and are vector-valued functions. We will often suppress the dependence on and only write . A solution of the system is a vector-valued function satisfying the vector equation.  For example, the equations can be written as   We will mostly concentrate on equations that are not just linear, but are in fact constant-coefficient constant-coefficient equations. That is, the matrix will be constant; it will not depend on .  When (the zero vector), we say the system is homogeneous homogeneous system . For homogeneous linear systems, we have the principle of superposition, just like for single homogeneous linear equations.   Superposition  superposition   Let be a linear homogeneous system of ODEs. Suppose that are solutions of the equation and are any constants, then is also a solution. Furthermore, if this is a system of equations ( is ), and are linearly independent, then every solution can be written as .    Linear independence for vector-valued functions is the same idea as for normal functions. The vector-valued functions are linearly independent linearly independent for vector-valued functions when has only the solution , where the equation must hold for all .     , , are linearly dependent because , and this holds for all . So , , and above will work.  On the other hand, if we change the example slightly to , , , then the functions are linearly independent. First write and note that it has to hold for all . We get that In other words and . If we set , then the second equation becomes . But then the first equation becomes for all and so . Thus the second equation is just , which means . So is the only solution and , , and are linearly independent.    The linear combination could always be written as where is the matrix with columns , and is the column vector with entries . Assuming that are linearly independent, the matrix-valued function is called a fundamental matrix fundamental matrix , or a fundamental matrix solution fundamental matrix solution . Note that the fundamental matrix is not unique; if you take any constant invertible matrix , then is another fundamental matrix.  To solve nonhomogeneous first-order linear systems, we use the same technique as we applied to solve single linear nonhomogeneous equations.    Let be a linear system of ODEs. Suppose is one particular solution. Then every solution can be written as where is a solution to the associated homogeneous equation associated homogeneous equation ( ).    The procedure for systems is the same as for single equations. We find a particular solution to the nonhomogeneous equation, then we find the general solution to the associated homogeneous equation, and finally we add the two together.  Alright, suppose you have found the general solution of . Next suppose you are given an initial condition of the form for some fixed and a constant vector . Let be a fundamental matrix solution of the associated homogeneous equation (i.e. columns of are solutions). The general solution can be written as We are seeking a vector such that In other words, we are solving for the nonhomogeneous system of linear equations     In , we solved the system with initial conditions , . Let us consider this problem in the language of this section. The system is homogeneous, so . We write the system and the initial conditions as   Ignoring the initial condition for a moment, the general solution is and . Letting and , we obtain the solution . Letting and , we obtain . These two solutions are linearly independent, as can be seen by setting , and noting that the resulting constant vectors are linearly independent. In matrix notation, a fundamental matrix solution is, therefore,   To solve the initial value problem, we solve for in the equation or in other words, A single elementary row operation shows . Our solution is This new solution agrees with our previous solution from .       Write the system , in the form .          Verify that the system has the two solutions and .    Write down the general solution.    Write down the general solution in the form , (i.e. write down a formula for each element of the solution).        Verify that and are linearly independent. Hint: Just plug in .      Verify that and and are linearly independent. Hint: You must be a bit more tricky than in the previous exercise.      Verify that and are linearly independent.      Take the system , .    Write it in the form for matrices and .    Compute and use that to write the system in the form .        Are and linearly independent? Justify.    Yes.      Are , , and linearly independent? Justify.    No.       Write , in matrix notation.               Write , in matrix notation.    Solve and write the solution in matrix notation.      a)  b)      "
},
{
  "id": "linsystems_section-9",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-9",
  "type": "Theorem",
  "number": "3.3.1",
  "title": "Superposition.",
  "body": " Superposition  superposition   Let be a linear homogeneous system of ODEs. Suppose that are solutions of the equation and are any constants, then is also a solution. Furthermore, if this is a system of equations ( is ), and are linearly independent, then every solution can be written as .   "
},
{
  "id": "linsystems_section-11",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-11",
  "type": "Example",
  "number": "3.3.1",
  "title": "",
  "body": "   , , are linearly dependent because , and this holds for all . So , , and above will work.  On the other hand, if we change the example slightly to , , , then the functions are linearly independent. First write and note that it has to hold for all . We get that In other words and . If we set , then the second equation becomes . But then the first equation becomes for all and so . Thus the second equation is just , which means . So is the only solution and , , and are linearly independent.   "
},
{
  "id": "linsystems_section-14",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-14",
  "type": "Theorem",
  "number": "3.3.2",
  "title": "",
  "body": "  Let be a linear system of ODEs. Suppose is one particular solution. Then every solution can be written as where is a solution to the associated homogeneous equation associated homogeneous equation ( ).   "
},
{
  "id": "linsystems_section-17",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-17",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  In , we solved the system with initial conditions , . Let us consider this problem in the language of this section. The system is homogeneous, so . We write the system and the initial conditions as   Ignoring the initial condition for a moment, the general solution is and . Letting and , we obtain the solution . Letting and , we obtain . These two solutions are linearly independent, as can be seen by setting , and noting that the resulting constant vectors are linearly independent. In matrix notation, a fundamental matrix solution is, therefore,   To solve the initial value problem, we solve for in the equation or in other words, A single elementary row operation shows . Our solution is This new solution agrees with our previous solution from .   "
},
{
  "id": "linsystems_section-18-1",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-18-1",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": "  Write the system , in the form .   "
},
{
  "id": "linsystems_section-18-2",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-18-2",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": "      Verify that the system has the two solutions and .    Write down the general solution.    Write down the general solution in the form , (i.e. write down a formula for each element of the solution).     "
},
{
  "id": "linsystems_section-18-3",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-18-3",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "",
  "body": "  Verify that and are linearly independent. Hint: Just plug in .   "
},
{
  "id": "linsystems_section-18-4",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-18-4",
  "type": "Exercise",
  "number": "3.3.4",
  "title": "",
  "body": "  Verify that and and are linearly independent. Hint: You must be a bit more tricky than in the previous exercise.   "
},
{
  "id": "linsystems_section-18-5",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-18-5",
  "type": "Exercise",
  "number": "3.3.5",
  "title": "",
  "body": "  Verify that and are linearly independent.   "
},
{
  "id": "linsystems_section-18-6",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-18-6",
  "type": "Exercise",
  "number": "3.3.6",
  "title": "",
  "body": "  Take the system , .    Write it in the form for matrices and .    Compute and use that to write the system in the form .     "
},
{
  "id": "linsystems_section-18-7",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-18-7",
  "type": "Exercise",
  "number": "3.3.101",
  "title": "",
  "body": "  Are and linearly independent? Justify.    Yes.   "
},
{
  "id": "linsystems_section-18-8",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-18-8",
  "type": "Exercise",
  "number": "3.3.102",
  "title": "",
  "body": "  Are , , and linearly independent? Justify.    No.    "
},
{
  "id": "linsystems_section-18-9",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-18-9",
  "type": "Exercise",
  "number": "3.3.103",
  "title": "",
  "body": "  Write , in matrix notation.        "
},
{
  "id": "linsystems_section-18-10",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-18-10",
  "type": "Exercise",
  "number": "3.3.104",
  "title": "",
  "body": "      Write , in matrix notation.    Solve and write the solution in matrix notation.      a)  b)    "
},
{
  "id": "eigenmethod_section",
  "level": "1",
  "url": "eigenmethod_section.html",
  "type": "Section",
  "number": "3.4",
  "title": "Eigenvalue method",
  "body": " Eigenvalue method   Note: 2 lectures, §5.2 in , part of §7.3, §7.5, and §7.6 in  In this section, we will learn how to solve linear homogeneous constant-coefficient systems of ODEs by the eigenvalue method. Suppose we have such a system where is a constant square matrix. We wish to adapt the method for the single constant-coefficient equation by trying the function for an unknown constant . However, is a vector. So we try , where is an unknown constant vector. We plug this into the equation to get We divide by and notice that we are looking for a scalar and a vector that satisfy the equation   To solve this equation, we need a little bit more linear algebra, which we now review.    Eigenvalues and eigenvectors of a matrix  Let be a constant square matrix. Suppose is a scalar and is a nonzero vector such that We call such a an eigenvalue eigenvalue of , and we call a corresponding eigenvector eigenvector .    The matrix has an eigenvalue with a corresponding eigenvector , because     Let us compute eigenvalues for any matrix. Rewrite the equation for an eigenvalue as and thus as This equation has a nonzero solution if and only if is not invertible. Were invertible, we could write , which implies . Therefore, has the eigenvalue if and only if solves the equation Consequently, we can find an eigenvalue of without finding a corresponding eigenvector at the same time. An eigenvector will have to be found later, once is known.    Find all eigenvalues of .  We write Setting this to zero, we find that the eigenvalues are , , and .    For an matrix, the polynomial we get by computing is of degree , and hence in general, we have eigenvalues. Some may be repeated, some may be complex.  To find an eigenvector corresponding to an eigenvalue , we write and solve for a nontrivial (nonzero) vector . If is an eigenvalue, there will be at least one free variable, and so for each distinct eigenvalue , we can always find an eigenvector.    Find an eigenvector of corresponding to the eigenvalue .  We write To solve this system of linear equations, we write down the augmented matrix and we perform row operations (exercise: which ones?) until we get: The entries of have to satisfy the equations , , and is a free variable. We pick to be arbitrary (but nonzero), we let , and of course . For example, if we pick , then . Let us verify that really is an eigenvector corresponding to : Yay! It worked.       (easy) Are eigenvectors unique? Can you find a different eigenvector for in the example above? How are the two eigenvectors related?      When the matrix is you do not need to do row operations when computing an eigenvector, you can read it off from (if you have computed the eigenvalues correctly). Can you see why? Explain. Try it for the matrix .      The eigenvalue method with distinct real eigenvalues  OK, back to homogeneous constant-coefficient systems of ODEs. We have the system We find the eigenvalues , , ..., of the matrix , and corresponding eigenvectors , , ..., . The functions , , ..., are solutions of the system of equations and hence is a solution.    Take . If is an constant matrix that has distinct real eigenvalues , , ..., , then there exist linearly independent corresponding eigenvectors , , ..., , and the general solution to can be written as     The corresponding fundamental matrix solution is That is, is the matrix whose column is .    Consider the system Find the general solution.  Earlier, we found the eigenvalues are . We found the eigenvector for the eigenvalue 3. Similarly we find the eigenvector for the eigenvalue 1 and for the eigenvalue 2 (exercise: check). The general solution is In terms of a fundamental matrix solution,       Check that this really solves the system.    Note: If we write a single homogeneous linear constant-coefficient -order equation as a first-order system (as we did in ), then the eigenvalue equation is essentially the same as the characteristic equation we got in and .    Complex eigenvalues  A matrix may very well have complex eigenvalues even if all the entries are real. Take, for example, Let us compute the eigenvalues of the matrix . Thus . Corresponding eigenvectors are also complex. Start with . The equations and are multiples of each other. So we only need to consider one of them. After picking , for example, we have an eigenvector . In similar fashion, we find that is an eigenvector corresponding to the eigenvalue .  We could write the solution as We would then need to look for complex values and to solve any initial conditions. It is perhaps not completely clear that we get a real solution. After solving for and , we could use Euler's formula and do the whole song and dance we did before, but we will not. We will apply the formula in a smarter way first to find independent real solutions.  We claim that we did not have to look for a second eigenvector (nor for the second eigenvalue). All complex eigenvalues come in pairs (because the matrix is real).  First a small detour. The real part of a complex number can be computed as , where the bar above means . The bar of is called the complex conjugate complex conjugate of . If is a real number, then . Similarly we bar whole vectors or matrices by taking the complex conjugate of every entry. Suppose a matrix is real. Then , and so . Also the complex conjugate of 0 is still 0, therefore, In other words, if is an eigenvalue, then so is . And if is an eigenvector corresponding to the eigenvalue , then is an eigenvector corresponding to the eigenvalue .  Suppose is a complex eigenvalue of , and is a corresponding eigenvector. Then is a solution (complex-valued) of . Euler's formula shows that , and so is also a solution. As and are solutions, the function is also a solution. And is real-valued! Similarly as is the imaginary part, we find that is also a real-valued solution. It turns out that and are linearly independent. We will use Euler's formula to separate out the real and imaginary part.  Returning to our problem, Then are the two real-valued linearly independent solutions we seek.    Check that these really are solutions.    The general solution is This solution is real-valued for real and . At this point, we would solve for any initial conditions we may have to find and .  We summarize the discussion as a theorem.    Let be a real-valued constant matrix. If has a complex eigenvalue and a corresponding eigenvector , then also has a complex eigenvalue with a corresponding eigenvector . Furthermore, has two linearly independent real-valued solutions     For each pair of complex eigenvalues and , we get two real-valued linearly independent solutions. We then go on to the next eigenvalue, which is either a real eigenvalue or another complex eigenvalue pair. If we have distinct eigenvalues (real or complex), then we end up with linearly independent solutions. If we had only two equations ( ) as in the example above, then once we found two solutions we are finished, and our general solution is   We can now find a real-valued general solution to any homogeneous system where the matrix has distinct eigenvalues. When we have repeated eigenvalues, matters get a bit more complicated and we will look at that situation in .       (easy) Let be a matrix with an eigenvalue of 3 and a corresponding eigenvector . Find .          Find the general solution of , using the eigenvalue method (first write the system in the form ).    Solve the system by solving each equation separately and verify you get the same general solution.        Find the general solution of , using the eigenvalue method.      Find the general solution of , using the eigenvalue method. Do not use complex exponentials in your solution.          Compute eigenvalues and eigenvectors of .    Find the general solution of .        Compute eigenvalues and eigenvectors of .      Let be numbers. Find the eigenvalues of .          Compute eigenvalues and eigenvectors of .    Solve the system .      a) Eigenvalues:  Eigenvectors: , ,  b)           Compute eigenvalues and eigenvectors of .    Solve the system .      a) Eigenvalues: , Eigenvectors: ,  b)       Solve , using the eigenvalue method.           Solve , using the eigenvalue method.          "
},
{
  "id": "eigenmethod_section-3-3",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-3-3",
  "type": "Example",
  "number": "3.4.1",
  "title": "",
  "body": "  The matrix has an eigenvalue with a corresponding eigenvector , because    "
},
{
  "id": "eigenmethod_section-3-5",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-3-5",
  "type": "Example",
  "number": "3.4.2",
  "title": "",
  "body": "  Find all eigenvalues of .  We write Setting this to zero, we find that the eigenvalues are , , and .   "
},
{
  "id": "eigenmethod_section-3-8",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-3-8",
  "type": "Example",
  "number": "3.4.3",
  "title": "",
  "body": "  Find an eigenvector of corresponding to the eigenvalue .  We write To solve this system of linear equations, we write down the augmented matrix and we perform row operations (exercise: which ones?) until we get: The entries of have to satisfy the equations , , and is a free variable. We pick to be arbitrary (but nonzero), we let , and of course . For example, if we pick , then . Let us verify that really is an eigenvector corresponding to : Yay! It worked.   "
},
{
  "id": "eigenmethod_section-3-9",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-3-9",
  "type": "Exercise",
  "number": "3.4.1",
  "title": "",
  "body": "   (easy) Are eigenvectors unique? Can you find a different eigenvector for in the example above? How are the two eigenvectors related?   "
},
{
  "id": "eigenmethod_section-3-10",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-3-10",
  "type": "Exercise",
  "number": "3.4.2",
  "title": "",
  "body": "  When the matrix is you do not need to do row operations when computing an eigenvector, you can read it off from (if you have computed the eigenvalues correctly). Can you see why? Explain. Try it for the matrix .   "
},
{
  "id": "eigenmethod_section-4-3",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-4-3",
  "type": "Theorem",
  "number": "3.4.1",
  "title": "",
  "body": "  Take . If is an constant matrix that has distinct real eigenvalues , , ..., , then there exist linearly independent corresponding eigenvectors , , ..., , and the general solution to can be written as    "
},
{
  "id": "eigenmethod_section-4-5",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-4-5",
  "type": "Example",
  "number": "3.4.4",
  "title": "",
  "body": "  Consider the system Find the general solution.  Earlier, we found the eigenvalues are . We found the eigenvector for the eigenvalue 3. Similarly we find the eigenvector for the eigenvalue 1 and for the eigenvalue 2 (exercise: check). The general solution is In terms of a fundamental matrix solution,    "
},
{
  "id": "eigenmethod_section-4-6",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-4-6",
  "type": "Exercise",
  "number": "3.4.3",
  "title": "",
  "body": "  Check that this really solves the system.   "
},
{
  "id": "eigenmethod_section-5-8",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-5-8",
  "type": "Exercise",
  "number": "3.4.4",
  "title": "",
  "body": "  Check that these really are solutions.   "
},
{
  "id": "eigenmethod_section-5-11",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-5-11",
  "type": "Theorem",
  "number": "3.4.2",
  "title": "",
  "body": "  Let be a real-valued constant matrix. If has a complex eigenvalue and a corresponding eigenvector , then also has a complex eigenvalue with a corresponding eigenvector . Furthermore, has two linearly independent real-valued solutions    "
},
{
  "id": "eigenmethod_section-6-1",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-1",
  "type": "Exercise",
  "number": "3.4.5",
  "title": "",
  "body": "   (easy) Let be a matrix with an eigenvalue of 3 and a corresponding eigenvector . Find .   "
},
{
  "id": "eigenmethod_section-6-2",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-2",
  "type": "Exercise",
  "number": "3.4.6",
  "title": "",
  "body": "      Find the general solution of , using the eigenvalue method (first write the system in the form ).    Solve the system by solving each equation separately and verify you get the same general solution.     "
},
{
  "id": "eigenmethod_section-6-3",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-3",
  "type": "Exercise",
  "number": "3.4.7",
  "title": "",
  "body": "  Find the general solution of , using the eigenvalue method.   "
},
{
  "id": "eigenmethod_section-6-4",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-4",
  "type": "Exercise",
  "number": "3.4.8",
  "title": "",
  "body": "  Find the general solution of , using the eigenvalue method. Do not use complex exponentials in your solution.   "
},
{
  "id": "eigenmethod_section-6-5",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-5",
  "type": "Exercise",
  "number": "3.4.9",
  "title": "",
  "body": "      Compute eigenvalues and eigenvectors of .    Find the general solution of .     "
},
{
  "id": "eigenmethod_section-6-6",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-6",
  "type": "Exercise",
  "number": "3.4.10",
  "title": "",
  "body": "  Compute eigenvalues and eigenvectors of .   "
},
{
  "id": "eigenmethod_section-6-7",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-7",
  "type": "Exercise",
  "number": "3.4.11",
  "title": "",
  "body": "  Let be numbers. Find the eigenvalues of .   "
},
{
  "id": "eigenmethod_section-6-8",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-8",
  "type": "Exercise",
  "number": "3.4.101",
  "title": "",
  "body": "      Compute eigenvalues and eigenvectors of .    Solve the system .      a) Eigenvalues:  Eigenvectors: , ,  b)    "
},
{
  "id": "eigenmethod_section-6-9",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-9",
  "type": "Exercise",
  "number": "3.4.102",
  "title": "",
  "body": "      Compute eigenvalues and eigenvectors of .    Solve the system .      a) Eigenvalues: , Eigenvectors: ,  b)    "
},
{
  "id": "eigenmethod_section-6-10",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-10",
  "type": "Exercise",
  "number": "3.4.103",
  "title": "",
  "body": "  Solve , using the eigenvalue method.        "
},
{
  "id": "eigenmethod_section-6-11",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-11",
  "type": "Exercise",
  "number": "3.4.104",
  "title": "",
  "body": "  Solve , using the eigenvalue method.        "
},
{
  "id": "sec_twodimaut",
  "level": "1",
  "url": "sec_twodimaut.html",
  "type": "Section",
  "number": "3.5",
  "title": "Two-dimensional systems and their vector fields",
  "body": " Two-dimensional systems and their vector fields  Note: 1 lecture, part of §6.2 in , parts of §7.5 and §7.6 in  We take a moment to discuss constant-coefficient linear homogeneous systems in the plane. Much intuition can be obtained by studying this simple case. We use coordinates for the plane as usual, and suppose is a matrix. Consider the system The system is autonomous (compare this section to ), and so we draw a vector field (see the end of ). We will be able to visually understand this vectorfield and the solutions of the ODE in terms of the eigenvalues and eigenvectors of the matrix . For this section, we assume that has two distinct eigenvalues and two corresponding eigenvectors. We will also assume that is nonsingular, that is, neither eigenvalue is zero.   Case 1. Suppose that the eigenvalues of are real and positive. We find two corresponding eigenvectors and plot them in the plane. For example, take the matrix . The eigenvalues are 1 and 2 and corresponding eigenvectors are and . See .   Eigenvectors of .    Let be a point on the line determined by an eigenvector for an eigenvalue . That is, for some scalar . Then The derivative is a multiple of and hence points along the line determined by . As , the derivative points in the direction of when is positive and in the opposite direction when is negative. We draw the lines determined by the eigenvectors and arrows on the lines to indicate the directions. See .  We fill in the rest of the arrows for the vector field, and we draw a few solutions. See . The picture looks like a source with arrows coming out from the origin. Hence we call this type of picture a source source or sometimes an unstable node unstable node .   Eigenvectors of with directions.    Example source vector field with eigenvectors and solutions.     Case 2. Suppose both eigenvalues are negative. For example, take the negation of the matrix from case 1, . The eigenvalues are and and corresponding eigenvectors are the same, and . The calculation and the picture are almost the same. The difference is that the eigenvalues are negative and arrows are reversed. We get the picture in . We call this type of picture a sink sink or a stable node stable node .   Example sink vector field with eigenvectors and solutions.    Example saddle vector field with eigenvectors and solutions.     Case 3. Suppose one eigenvalue is positive and one is negative. For example, consider . The eigenvalues are 1 and and corresponding eigenvectors are and . We reverse the arrows on the line corresponding to the negative eigenvalue and we obtain the picture in . We call this picture a saddle point saddle point .  For the next three cases, we will assume the eigenvalues are complex. In this case the eigenvectors are also complex and we cannot just plot them in the plane.   Case 4. Suppose the eigenvalues are purely imaginary, that is, . For example, let . The eigenvalues are and corresponding eigenvectors are and . Consider the eigenvalue and its eigenvector . The real and imaginary parts of are We can take any linear combination of them to get other solutions, which one we take depends on the initial conditions. Now note that the real part is a parametric equation for an ellipse. Same with the imaginary part and in fact any linear combination of the two. This is what happens in general when the eigenvalues are purely imaginary. So when the eigenvalues are purely imaginary, we get ellipses ellipses (vector field) for the solutions. This type of picture is sometimes called a center center . See .   Example center vector field.    Example spiral source vector field.     Case 5. Now suppose the complex eigenvalues have a positive real part. That is, suppose the eigenvalues are for some . For example, let . The eigenvalues turn out to be and eigenvectors are and . We take and its eigenvector and find the real and imaginary parts of are Note the in front of the solutions. The solutions grow in magnitude while spinning around the origin. Hence we get a spiral source spiral source . See .   Case 6. Finally suppose the complex eigenvalues have a negative real part. That is, suppose the eigenvalues are for some . For example, let . The eigenvalues turn out to be and eigenvectors are and . We take and its eigenvector and find the real and imaginary parts of are Note the in front of the solutions. The solutions shrink in magnitude while spinning around the origin. Hence we get a spiral sink spiral sink . See .   Example spiral sink vector field.    We summarize the behavior of linear homogeneous two-dimensional systems given by a nonsingular matrix in . Systems where one of the eigenvalues is zero (the matrix is singular) come up in practice from time to time, see , and the pictures are somewhat different (simpler in a way). See the exercises. When the eigenvalues are real and repeated, the analysis is a little bit more difficult and we have not yet covered how to solve such systems, but the idea is roughly the same—a repeated positive eigenvalue means a source and a repeated negative eigenvalue means a sink.   Summary of behavior of linear homogeneous two-dimensional systems.   Eigenvalues Behavior  real and both positive source \/ unstable node  real and both negative sink \/ stable node  real and opposite signs saddle  purely imaginary center point \/ ellipses  complex with positive real part spiral source  complex with negative real part spiral sink       Take the equation , with , , for the mass-spring system.    Convert this to a system of first-order equations.    Classify for what do you get which behavior.    Explain from physical intuition why you do not get all the different kinds of behavior here?        What happens in the case when ? In this case the eigenvalue is repeated and there is only one independent eigenvector. Draw and describe the vector field.      What happens in the case when ? Draw the vector field. Does this look like any of the pictures we have drawn?      Which behaviors are possible if is diagonal, that is, ? You can assume that and are not zero.      Take the system from , , . As we said, one of the eigenvalues is zero. What is the other eigenvalue, how does the picture look like, and what happens when goes to infinity.      Describe the behavior of the following systems without solving:     ,  .     ,  .     ,  .     ,  .     ,  .      a) Two eigenvalues: so the behavior is a saddle. b) Two eigenvalues: and , so the behavior is a source. c) Two eigenvalues: , so the behavior is a center (ellipses). d) Two eigenvalues: and , so the behavior is a sink. e) Two eigenvalues: and , so the behavior is a saddle.      Suppose that where is a 2 by 2 matrix with eigenvalues . Describe the behavior.    Spiral source.      Take . Draw the vector field and describe the behavior. Is it one of the behaviors that we have seen before?     The solution does not move anywhere if . When is positive, the solution moves (with constant speed) in the positive direction. When is negative, the solution moves (with constant speed) in the negative direction. It is not one of the behaviors we saw. Note that the matrix has a double eigenvalue 0 and the general solution is and , which agrees with the description above.     "
},
{
  "id": "pln_source-eigfig",
  "level": "2",
  "url": "sec_twodimaut.html#pln_source-eigfig",
  "type": "Figure",
  "number": "3.4",
  "title": "",
  "body": " Eigenvectors of .   "
},
{
  "id": "pln_source-eig-arrfig",
  "level": "2",
  "url": "sec_twodimaut.html#pln_source-eig-arrfig",
  "type": "Figure",
  "number": "3.5",
  "title": "",
  "body": " Eigenvectors of with directions.   "
},
{
  "id": "pln_source-fullfig",
  "level": "2",
  "url": "sec_twodimaut.html#pln_source-fullfig",
  "type": "Figure",
  "number": "3.6",
  "title": "",
  "body": " Example source vector field with eigenvectors and solutions.   "
},
{
  "id": "pln_sink-fullfig",
  "level": "2",
  "url": "sec_twodimaut.html#pln_sink-fullfig",
  "type": "Figure",
  "number": "3.7",
  "title": "",
  "body": " Example sink vector field with eigenvectors and solutions.   "
},
{
  "id": "pln_saddle-fullfig",
  "level": "2",
  "url": "sec_twodimaut.html#pln_saddle-fullfig",
  "type": "Figure",
  "number": "3.8",
  "title": "",
  "body": " Example saddle vector field with eigenvectors and solutions.   "
},
{
  "id": "pln_ellipsesfig",
  "level": "2",
  "url": "sec_twodimaut.html#pln_ellipsesfig",
  "type": "Figure",
  "number": "3.9",
  "title": "",
  "body": " Example center vector field.   "
},
{
  "id": "pln_spiral-sourcefig",
  "level": "2",
  "url": "sec_twodimaut.html#pln_spiral-sourcefig",
  "type": "Figure",
  "number": "3.10",
  "title": "",
  "body": " Example spiral source vector field.   "
},
{
  "id": "pln_spiral-sinkfig",
  "level": "2",
  "url": "sec_twodimaut.html#pln_spiral-sinkfig",
  "type": "Figure",
  "number": "3.11",
  "title": "",
  "body": " Example spiral sink vector field.   "
},
{
  "id": "pln_behtab",
  "level": "2",
  "url": "sec_twodimaut.html#pln_behtab",
  "type": "Table",
  "number": "3.1",
  "title": "Summary of behavior of linear homogeneous two-dimensional systems.",
  "body": " Summary of behavior of linear homogeneous two-dimensional systems.   Eigenvalues Behavior  real and both positive source \/ unstable node  real and both negative sink \/ stable node  real and opposite signs saddle  purely imaginary center point \/ ellipses  complex with positive real part spiral source  complex with negative real part spiral sink   "
},
{
  "id": "sec_twodimaut-38-1",
  "level": "2",
  "url": "sec_twodimaut.html#sec_twodimaut-38-1",
  "type": "Exercise",
  "number": "3.5.1",
  "title": "",
  "body": "  Take the equation , with , , for the mass-spring system.    Convert this to a system of first-order equations.    Classify for what do you get which behavior.    Explain from physical intuition why you do not get all the different kinds of behavior here?     "
},
{
  "id": "sec_twodimaut-38-2",
  "level": "2",
  "url": "sec_twodimaut.html#sec_twodimaut-38-2",
  "type": "Exercise",
  "number": "3.5.2",
  "title": "",
  "body": "  What happens in the case when ? In this case the eigenvalue is repeated and there is only one independent eigenvector. Draw and describe the vector field.   "
},
{
  "id": "sec_twodimaut-38-3",
  "level": "2",
  "url": "sec_twodimaut.html#sec_twodimaut-38-3",
  "type": "Exercise",
  "number": "3.5.3",
  "title": "",
  "body": "  What happens in the case when ? Draw the vector field. Does this look like any of the pictures we have drawn?   "
},
{
  "id": "sec_twodimaut-38-4",
  "level": "2",
  "url": "sec_twodimaut.html#sec_twodimaut-38-4",
  "type": "Exercise",
  "number": "3.5.4",
  "title": "",
  "body": "  Which behaviors are possible if is diagonal, that is, ? You can assume that and are not zero.   "
},
{
  "id": "sec_twodimaut-38-5",
  "level": "2",
  "url": "sec_twodimaut.html#sec_twodimaut-38-5",
  "type": "Exercise",
  "number": "3.5.5",
  "title": "",
  "body": "  Take the system from , , . As we said, one of the eigenvalues is zero. What is the other eigenvalue, how does the picture look like, and what happens when goes to infinity.   "
},
{
  "id": "sec_twodimaut-38-6",
  "level": "2",
  "url": "sec_twodimaut.html#sec_twodimaut-38-6",
  "type": "Exercise",
  "number": "3.5.101",
  "title": "",
  "body": "  Describe the behavior of the following systems without solving:     ,  .     ,  .     ,  .     ,  .     ,  .      a) Two eigenvalues: so the behavior is a saddle. b) Two eigenvalues: and , so the behavior is a source. c) Two eigenvalues: , so the behavior is a center (ellipses). d) Two eigenvalues: and , so the behavior is a sink. e) Two eigenvalues: and , so the behavior is a saddle.   "
},
{
  "id": "sec_twodimaut-38-7",
  "level": "2",
  "url": "sec_twodimaut.html#sec_twodimaut-38-7",
  "type": "Exercise",
  "number": "3.5.102",
  "title": "",
  "body": "  Suppose that where is a 2 by 2 matrix with eigenvalues . Describe the behavior.    Spiral source.   "
},
{
  "id": "sec_twodimaut-38-8",
  "level": "2",
  "url": "sec_twodimaut.html#sec_twodimaut-38-8",
  "type": "Exercise",
  "number": "3.5.103",
  "title": "",
  "body": "  Take . Draw the vector field and describe the behavior. Is it one of the behaviors that we have seen before?     The solution does not move anywhere if . When is positive, the solution moves (with constant speed) in the positive direction. When is negative, the solution moves (with constant speed) in the negative direction. It is not one of the behaviors we saw. Note that the matrix has a double eigenvalue 0 and the general solution is and , which agrees with the description above.   "
},
{
  "id": "sol_section",
  "level": "1",
  "url": "sol_section.html",
  "type": "Section",
  "number": "3.6",
  "title": "Second-order systems and applications",
  "body": " Second-order systems and applications   Note: more than 2 lectures, §5.4 in , not in    Undamped mass-spring systems  While we did say that we can usually only study first-order systems, it is sometimes more convenient to analyze the system in the way it arises naturally. For example, consider 3 masses connected by springs between two walls. We could pick any higher number, and the math would be essentially the same, but for simplicity, we pick 3 right now. We also assume no friction, that is, the system is undamped undamped motion systems . The masses are , , and and the spring constants are , , , and . Let be the displacement from rest position of the first mass, and and the displacement of the second and third mass. We make, as usual, positive values go right (as grows, the first mass is moving right). See .   System of masses and springs.    This simple system turns up in unexpected places. For example, our world really consists of many small particles of matter interacting together. When we try the system above with many more masses, we obtain a good approximation to how an elastic material behaves. By somehow taking a limit of the number of masses going to infinity, we obtain the continuous one-dimensional wave equation (that we study in ). But we digress.  Let us set up the equations for the three mass system three mass system . By Hooke's law Hooke's law , the force acting on the mass equals the spring compression times the spring constant. By Newton's second law Newton's second law , force is mass times acceleration. So if we sum the forces acting on each mass, put the right sign in front of each term, depending on the direction in which it is acting, and set this equal to mass times the acceleration, we end up with the desired system of equations. We define the matrices We write the equation simply as At this point we could introduce 3 new variables and write out a system of 6 first-order equations. We claim this simple setup is easier to handle as a second-order system. We call the displacement vector displacement vector , the mass matrix mass matrix , and the stiffness matrix stiffness matrix .    Repeat this setup for 4 masses (find the matrices and ). Do it for 5 masses. Can you find a prescription to do it for masses?    As with a single equation, we want to divide by . This means computing the inverse of . The masses are all nonzero and is a diagonal matrix diagonal matrix , so computing the inverse is easy: This fact follows readily by how we multiply diagonal matrices. As an exercise, you should verify that .  Let . We look at the system , or Many real world systems can be modeled by this equation. For simplicity, we will only talk about the given masses-and-springs problem. We try a solution of the form We compute that for this guess, . We plug our guess into the equation and get We divide by to arrive at . Hence if is an eigenvalue of and is a corresponding eigenvector, we have found a solution.  In our example, and in other common applications, has only real negative eigenvalues (and possibly a zero eigenvalue). So we study only this case. When an eigenvalue is negative, it means that is negative. Hence there is some real number such that . Then . For , the solution we guessed is or By taking the real and imaginary parts (note that is real), we find that and are linearly independent solutions.  If an eigenvalue is zero, it turns out that both and are solutions, where is an eigenvector corresponding to the eigenvalue 0.    Show that if has a zero eigenvalue and is a corresponding eigenvector, then is a solution of for arbitrary constants and .      Let be a real matrix with distinct real negative (or zero) eigenvalues we denote by , and corresponding eigenvectors by , , ..., . If is invertible (that is, if ), then is the general solution of for some arbitrary constants and . If has a zero eigenvalue, that is, , and all other eigenvalues are distinct and negative, then the general solution can be written as     We use this solution and the setup from the introduction of this section even when some of the masses and springs are missing. For example, when there are only 2 masses and only 2 springs, simply take only the equations for the two masses and set all the spring constants for the springs that are missing to zero.    Examples    Consider the setup in , with , , , and .   System of masses and springs.    The equations we write down are or   We find the eigenvalues of to be (exercise). We find corresponding eigenvectors to be and respectively (exercise). We check the theorem and note that and . Hence the general solution is   The two terms in the solution represent the two so-called natural natural mode of oscillation or normal modes of oscillation normal mode of oscillation . And the two (angular) frequencies are the natural frequencies natural frequency . The first natural frequency is 1, and the second is 2. The two modes are plotted in .   The two modes of the mass-spring system. In the left plot the masses are moving in unison and in the right plot are masses moving in the opposite direction.    Let us write the solution as The first term, corresponds to the mode where the masses move synchronously in the same direction.  The second term, corresponds to the mode where the masses move synchronously but in opposite directions.  The general solution is a combination of the two modes. That is, the initial conditions determine the amplitude and phase shift of each mode. As an example, suppose we have initial conditions We use the constants to solve for initial conditions. First We solve (exercise) to find , . To find the and , we differentiate first: Now we solve: Again solve (exercise) to find , . So our solution is The graphs of the two displacements, and of the two carts is in .   Superposition of the two modes given the initial conditions.        We have two toy rail cars. Car 1 of mass 2 kg is traveling at 3 towards the second rail car of mass 1 kg. There is a bumper on the second rail car that engages at the moment the cars hit (it connects to two cars) and does not let go. The bumper acts like a spring of spring constant . The second car is 10 meters from a wall. See .   The crash of two rail cars.    We want to ask several questions. At what time after the cars link does impact with the wall happen? What is the speed of car 2 when it hits the wall?  OK, let us first set the system up. Let be the time when the two cars link up. Let be the displacement of the first car from the position at , and let be the displacement of the second car from its original location. Then the time when is exactly the time when impact with the wall occurs. For this , is the speed at impact. This system acts just like the system of the previous example but without . Hence the equation is or   We compute the eigenvalues of . It is not hard to see that the eigenvalues are 0 and (exercise). Furthermore, eigenvectors are and respectively (exercise). Then , , and by the second part of the theorem the general solution is   We now apply the initial conditions. First the cars start at position 0 so and . The first car is traveling at 3 , so and the second car starts at rest, so . The first conditions says It is not hard to see that . We set and in and differentiate to get So Solving these two equations, we find and . Hence the position of our cars is (until the impact with the wall) Note how the presence of the zero eigenvalue resulted in a term containing . This means that the cars will be traveling in the positive direction as time grows, which is what we expect.  What we are really interested in is the second expression, the one for . We have . See for the plot of versus time.  Just from the graph we can see that the time of impact will be a little more than 5 seconds from time zero. For this we have to solve the equation . Using a computer (or even a graphing calculator) we find that seconds.   Position of the second car in time (ignoring the wall).    The speed of the second car is . At the time of impact (5.22 seconds from ) we get . The maximum speed is the maximum of , which is 4. We are traveling at almost the maximum speed when we hit the wall.  Suppose that Bob is a tiny person sitting on car 2. Bob has a Martini in his hand and would like not to spill it. Let us suppose Bob would not spill his Martini when the first car links up with car 2, but if car 2 hits the wall at any speed greater than zero, Bob will spill his drink. Suppose Bob can move car 2 a few meters towards or away from the wall (he cannot go all the way to the wall, nor can he get out of the way of the first car). Is there a safe distance for him to be at? A distance such that the impact with the wall is at zero speed?  The answer is yes. On , note the plateau between and . There is a point where the speed is zero. To find it we solve . This is when or in other words when and so on. We plug in the first value to obtain . So a safe distance is about 7 and a quarter meters from the wall.  Alternatively Bob could move away from the wall towards the incoming car 2, where another safe distance is and so on. We can use all the different such that . Of course is also a solution, corresponding to , but that means standing right at the wall.      Forced oscillations  Finally we move to forced oscillations forced motion systems . Suppose that now our system is That is, we are adding periodic forcing to the system in the direction of the vector .  As before, this system just requires us to find one particular solution , add it to the general solution of the associated homogeneous system , and we will have the general solution to . Let us suppose that is not one of the natural frequencies of , then we can guess where is an unknown constant vector. Note that we do not need to use sine since there are only second derivatives. We solve for to find . This is really just the method of undetermined coefficients undetermined coefficients for second-order systems for systems. Let us differentiate twice to get Plug and into equation : We cancel out the cosine and rearrange the equation to obtain So Of course this is possible only if is invertible. That matrix is invertible if and only if is not an eigenvalue of . That is true if and only if is not a natural frequency of the system.  We simplified things a little bit. If we wish to have the forcing term to be in the units of force, say Newtons, then we must write If we then write things in terms of , we have where .    Let us take the example in with the same parameters as before: , , , and . Now suppose that there is a force acting on the second cart.  The equation is We solved the associated homogeneous equation before and found the complementary solution to be   The natural frequencies are 1 and 2. As 3 is not a natural frequency, we try . We invert : Hence,   Combining with the general solution of the associated homogeneous problem, we get that the general solution to is We would then solve for the constants , , , and using any given initial conditions.    Note that given force , we write the equation as to get the units right. Then we write . The term in is in units of force per unit mass.  If is a natural frequency of the system, resonance resonance may occur, because we will have to try a particular solution of the form That is assuming that the eigenvalues of the coefficient matrix are distinct. Next, note that the amplitude of this solution grows without bound as grows.      Find a particular solution to        (challenging) Consider the example in with the same parameters as before: , , and , except for , which is unknown. Suppose that there is a force acting on the first mass. Find an such that there exists a particular solution where the first mass does not move.  Note: This idea is called dynamic damping dynamic damping . In practice there will be a small amount of damping and so any transient solution will disappear and after long enough time, the first mass will always come to a stop.      Let us take the , but that at time of impact, car 2 is moving to the left with speed 3 .    Find the behavior of the system after linkup.    Will the second car hit the wall, or will it be moving away from the wall as time goes on?    At what speed would the first car have to be traveling for the system to essentially stay in place after linkup?        Let us take the example in with parameters , . Does there exist a set of initial conditions for which the first cart moves but the second cart does not? If so, find those conditions. If not, argue why not.      Find the general solution to .             Suppose there are three carts of equal mass and connected by two springs of constant (and no connections to walls). Set up the system and find its general solution.     . Solution:       Suppose a cart of mass 2 kg is attached by a spring of constant to a cart of mass 3 kg, which is attached to the wall by a spring also of constant . Suppose that the initial position of the first cart is 1 meter in the positive direction from the rest position, and the second cart starts at the rest position. The carts are not moving and are let go. Find the position of the second cart as a function of time.          "
},
{
  "id": "sosa_threecartsfig",
  "level": "2",
  "url": "sol_section.html#sosa_threecartsfig",
  "type": "Figure",
  "number": "3.12",
  "title": "",
  "body": " System of masses and springs.   "
},
{
  "id": "sol_section-3-8",
  "level": "2",
  "url": "sol_section.html#sol_section-3-8",
  "type": "Exercise",
  "number": "3.6.1",
  "title": "",
  "body": "  Repeat this setup for 4 masses (find the matrices and ). Do it for 5 masses. Can you find a prescription to do it for masses?   "
},
{
  "id": "sol_section-3-13",
  "level": "2",
  "url": "sol_section.html#sol_section-3-13",
  "type": "Exercise",
  "number": "3.6.2",
  "title": "",
  "body": "  Show that if has a zero eigenvalue and is a corresponding eigenvector, then is a solution of for arbitrary constants and .   "
},
{
  "id": "sol_section-3-14",
  "level": "2",
  "url": "sol_section.html#sol_section-3-14",
  "type": "Theorem",
  "number": "3.6.1",
  "title": "",
  "body": "  Let be a real matrix with distinct real negative (or zero) eigenvalues we denote by , and corresponding eigenvectors by , , ..., . If is invertible (that is, if ), then is the general solution of for some arbitrary constants and . If has a zero eigenvalue, that is, , and all other eigenvalues are distinct and negative, then the general solution can be written as    "
},
{
  "id": "sol_section-4-2",
  "level": "2",
  "url": "sol_section.html#sol_section-4-2",
  "type": "Example",
  "number": "3.6.1",
  "title": "",
  "body": "  Consider the setup in , with , , , and .   System of masses and springs.    The equations we write down are or   We find the eigenvalues of to be (exercise). We find corresponding eigenvectors to be and respectively (exercise). We check the theorem and note that and . Hence the general solution is   The two terms in the solution represent the two so-called natural natural mode of oscillation or normal modes of oscillation normal mode of oscillation . And the two (angular) frequencies are the natural frequencies natural frequency . The first natural frequency is 1, and the second is 2. The two modes are plotted in .   The two modes of the mass-spring system. In the left plot the masses are moving in unison and in the right plot are masses moving in the opposite direction.    Let us write the solution as The first term, corresponds to the mode where the masses move synchronously in the same direction.  The second term, corresponds to the mode where the masses move synchronously but in opposite directions.  The general solution is a combination of the two modes. That is, the initial conditions determine the amplitude and phase shift of each mode. As an example, suppose we have initial conditions We use the constants to solve for initial conditions. First We solve (exercise) to find , . To find the and , we differentiate first: Now we solve: Again solve (exercise) to find , . So our solution is The graphs of the two displacements, and of the two carts is in .   Superposition of the two modes given the initial conditions.     "
},
{
  "id": "sosa_railcarexample",
  "level": "2",
  "url": "sol_section.html#sosa_railcarexample",
  "type": "Example",
  "number": "3.6.2",
  "title": "",
  "body": "  We have two toy rail cars. Car 1 of mass 2 kg is traveling at 3 towards the second rail car of mass 1 kg. There is a bumper on the second rail car that engages at the moment the cars hit (it connects to two cars) and does not let go. The bumper acts like a spring of spring constant . The second car is 10 meters from a wall. See .   The crash of two rail cars.    We want to ask several questions. At what time after the cars link does impact with the wall happen? What is the speed of car 2 when it hits the wall?  OK, let us first set the system up. Let be the time when the two cars link up. Let be the displacement of the first car from the position at , and let be the displacement of the second car from its original location. Then the time when is exactly the time when impact with the wall occurs. For this , is the speed at impact. This system acts just like the system of the previous example but without . Hence the equation is or   We compute the eigenvalues of . It is not hard to see that the eigenvalues are 0 and (exercise). Furthermore, eigenvectors are and respectively (exercise). Then , , and by the second part of the theorem the general solution is   We now apply the initial conditions. First the cars start at position 0 so and . The first car is traveling at 3 , so and the second car starts at rest, so . The first conditions says It is not hard to see that . We set and in and differentiate to get So Solving these two equations, we find and . Hence the position of our cars is (until the impact with the wall) Note how the presence of the zero eigenvalue resulted in a term containing . This means that the cars will be traveling in the positive direction as time grows, which is what we expect.  What we are really interested in is the second expression, the one for . We have . See for the plot of versus time.  Just from the graph we can see that the time of impact will be a little more than 5 seconds from time zero. For this we have to solve the equation . Using a computer (or even a graphing calculator) we find that seconds.   Position of the second car in time (ignoring the wall).    The speed of the second car is . At the time of impact (5.22 seconds from ) we get . The maximum speed is the maximum of , which is 4. We are traveling at almost the maximum speed when we hit the wall.  Suppose that Bob is a tiny person sitting on car 2. Bob has a Martini in his hand and would like not to spill it. Let us suppose Bob would not spill his Martini when the first car links up with car 2, but if car 2 hits the wall at any speed greater than zero, Bob will spill his drink. Suppose Bob can move car 2 a few meters towards or away from the wall (he cannot go all the way to the wall, nor can he get out of the way of the first car). Is there a safe distance for him to be at? A distance such that the impact with the wall is at zero speed?  The answer is yes. On , note the plateau between and . There is a point where the speed is zero. To find it we solve . This is when or in other words when and so on. We plug in the first value to obtain . So a safe distance is about 7 and a quarter meters from the wall.  Alternatively Bob could move away from the wall towards the incoming car 2, where another safe distance is and so on. We can use all the different such that . Of course is also a solution, corresponding to , but that means standing right at the wall.   "
},
{
  "id": "sol_section-5-5",
  "level": "2",
  "url": "sol_section.html#sol_section-5-5",
  "type": "Example",
  "number": "3.6.3",
  "title": "",
  "body": "  Let us take the example in with the same parameters as before: , , , and . Now suppose that there is a force acting on the second cart.  The equation is We solved the associated homogeneous equation before and found the complementary solution to be   The natural frequencies are 1 and 2. As 3 is not a natural frequency, we try . We invert : Hence,   Combining with the general solution of the associated homogeneous problem, we get that the general solution to is We would then solve for the constants , , , and using any given initial conditions.   "
},
{
  "id": "sol_section-6-1",
  "level": "2",
  "url": "sol_section.html#sol_section-6-1",
  "type": "Exercise",
  "number": "3.6.3",
  "title": "",
  "body": "  Find a particular solution to    "
},
{
  "id": "sol_section-6-2",
  "level": "2",
  "url": "sol_section.html#sol_section-6-2",
  "type": "Exercise",
  "number": "3.6.4",
  "title": "",
  "body": "   (challenging) Consider the example in with the same parameters as before: , , and , except for , which is unknown. Suppose that there is a force acting on the first mass. Find an such that there exists a particular solution where the first mass does not move.  Note: This idea is called dynamic damping dynamic damping . In practice there will be a small amount of damping and so any transient solution will disappear and after long enough time, the first mass will always come to a stop.   "
},
{
  "id": "sol_section-6-3",
  "level": "2",
  "url": "sol_section.html#sol_section-6-3",
  "type": "Exercise",
  "number": "3.6.5",
  "title": "",
  "body": "  Let us take the , but that at time of impact, car 2 is moving to the left with speed 3 .    Find the behavior of the system after linkup.    Will the second car hit the wall, or will it be moving away from the wall as time goes on?    At what speed would the first car have to be traveling for the system to essentially stay in place after linkup?     "
},
{
  "id": "sol_section-6-4",
  "level": "2",
  "url": "sol_section.html#sol_section-6-4",
  "type": "Exercise",
  "number": "3.6.6",
  "title": "",
  "body": "  Let us take the example in with parameters , . Does there exist a set of initial conditions for which the first cart moves but the second cart does not? If so, find those conditions. If not, argue why not.   "
},
{
  "id": "sol_section-6-5",
  "level": "2",
  "url": "sol_section.html#sol_section-6-5",
  "type": "Exercise",
  "number": "3.6.101",
  "title": "",
  "body": "  Find the general solution to .          "
},
{
  "id": "sol_section-6-6",
  "level": "2",
  "url": "sol_section.html#sol_section-6-6",
  "type": "Exercise",
  "number": "3.6.102",
  "title": "",
  "body": "  Suppose there are three carts of equal mass and connected by two springs of constant (and no connections to walls). Set up the system and find its general solution.     . Solution:    "
},
{
  "id": "sol_section-6-7",
  "level": "2",
  "url": "sol_section.html#sol_section-6-7",
  "type": "Exercise",
  "number": "3.6.103",
  "title": "",
  "body": "  Suppose a cart of mass 2 kg is attached by a spring of constant to a cart of mass 3 kg, which is attached to the wall by a spring also of constant . Suppose that the initial position of the first cart is 1 meter in the positive direction from the rest position, and the second cart starts at the rest position. The carts are not moving and are let go. Find the position of the second cart as a function of time.        "
},
{
  "id": "sec_multeigen",
  "level": "1",
  "url": "sec_multeigen.html",
  "type": "Section",
  "number": "3.7",
  "title": "Repeated eigenvalues",
  "body": " Repeated eigenvalues   Note: 1 or 1.5 lectures, §5.5 in , §7.8 in  It may happen that a matrix has some repeated eigenvalues. That is, the characteristic equation may have repeated roots. This is actually unlikely to happen for a random matrix. If we take a small perturbation of (we change the entries of slightly), we get a matrix with distinct eigenvalues. As any system we want to solve in practice is an approximation to reality anyway, it is not absolutely indispensable to know how to solve these corner cases. On the other hand, these cases do come up in applications from time to time. Furthermore, if we have distinct but very close eigenvalues, the behavior is similar to that of repeated eigenvalues, and so understanding that case will give us insight into what is going on.    Geometric multiplicity  Take the diagonal matrix  has an eigenvalue 3 of multiplicity 2. We call the multiplicity of the eigenvalue multiplicity of an eigenvalue in the characteristic equation the algebraic multiplicity algebraic multiplicity . In this case, there also exist 2 linearly independent eigenvectors, and corresponding to the eigenvalue 3. This means that the so-called geometric multiplicity geometric multiplicity of this eigenvalue is also 2.  In all the theorems where we required a matrix to have distinct eigenvalues, we only really needed to have linearly independent eigenvectors. For example, has the general solution We restate the theorem about real eigenvalues. In the theorem, we will repeat eigenvalues according to (algebraic) multiplicity. So for the matrix above, we would say that it has eigenvalues 3 and 3.    Suppose the matrix has real eigenvalues (not necessarily distinct), , , ..., , and there are linearly independent corresponding eigenvectors , , ..., . Then the general solution to can be written as     The geometric multiplicity of an eigenvalue is equal to the number of corresponding linearly independent eigenvectors. The geometric multiplicity is always less than or equal to the algebraic multiplicity. The theorem handles the case when these two multiplicities are equal for all eigenvalues. If for an eigenvalue the geometric multiplicity is equal to the algebraic multiplicity, then we say the eigenvalue is complete complete eigenvalue .  In other words, the hypothesis of the theorem could be stated as saying that if all the eigenvalues of are complete, then there are linearly independent eigenvectors and thus we have the given general solution.  If the geometric multiplicity of an eigenvalue is 2 or greater, then the set of linearly independent eigenvectors is not unique up to multiples as it was before. For example, for the diagonal matrix we could also pick eigenvectors and , or in fact any pair of two linearly independent vectors. The number of linearly independent eigenvectors corresponding to is the number of free variables we obtain when solving . We pick specific values for those free variables to obtain eigenvectors. If you pick different values, you may get different eigenvectors.    Defective eigenvalues  If an matrix has less than linearly independent eigenvectors, it is said to be deficient deficient matrix . Then there is at least one eigenvalue with its geometric multiplicity that is less than its algebraic multiplicity. We call this eigenvalue defective defective eigenvalue and the difference between the two multiplicities we call the defect defect . In other words, the defect is the number of eigenvectors we are missing.     The matrix has an eigenvalue 3 of algebraic multiplicity 2. As , to compute the eigenvectors, we must solve So . All eigenvectors are of the form . Any two such vectors are linearly dependent, and hence the geometric multiplicity of the eigenvalue is 1. Therefore, the defect is 1, and we can no longer apply the eigenvalue method directly to a system of ODEs with such a coefficient matrix.  To solve such an ODE, we need a new idea. Roughly, the key observation we will use is that if is an eigenvalue of of algebraic multiplicity , then it is possible to find certain linearly independent vectors solving for various powers . We will call these generalized eigenvectors generalized eigenvectors .  We continue with the example equation where . We found an eigenvalue of (algebraic) multiplicity 2 and defect 1. We found one eigenvector . We have one solution We are now stuck, we get no other solutions from standard eigenvectors. But we need two linearly independent solutions to find the general solution of the equation.  In the spirit of repeated roots of the characteristic equation for a single equation, we try another solution of the form We differentiate to get As we are assuming that is a solution, must equal . So we compute : By looking at the coefficients of and , we see and . This means that Therefore, is a solution if these two equations are satisfied. The second equation is satisfied if is an eigenvector, and we found the eigenvector above, so let . So, if we can find a that solves , then we are done. This is just a bunch of linear equations to solve and we are by now very good at that. Let us solve . Write By inspection, we see that letting ( could be anything in fact) and does the job. Hence we can take . Our general solution to is Let us check that we really do have the solution. First . Good. Now . Good.    In the example, if we plug into we find If and , then is an eigenvector, a multiple of . In this case, is just the zero matrix (exercise). So any vector solves and we just need a such that . Then we could use for and for .  Note this example system has a simpler solution since is a so-called upper triangular matrix upper triangular matrix , that is, every entry below the diagonal is zero. In particular, the equation for does not depend on . Mind you, not every defective matrix is triangular.    Solve by first solving for and then for independently. Check that you got the same solution as we did above.    Let us describe the general algorithm. Suppose that is an eigenvalue of multiplicity 2, defect 1. First find an eigenvector of . That is, solves . Then, find a vector such that This gives us two linearly independent solutions     Consider the system Compute the eigenvalues, The eigenvalues are 1 and 2, where 2 has multiplicity 2. We leave it to the reader to find that is an eigenvector for the eigenvalue .  We focus on . We compute eigenvectors: The first equation says that , so the last equation is . Let be the free variable to find that . Perhaps let to find an eigenvector . Problem is that setting to anything else just gets multiples of this vector and so we have a defect of 1. Let be the eigenvector and we look for a generalized eigenvector : or where we used , , as components of for simplicity. The first equation says so . The second equation says nothing. The last equation is , or , or . We let be the free variable, and we choose . We find .  The general solution is therefore,     This machinery can also be generalized to higher multiplicities and higher defects. We will not go over this method in detail, but we sketch the idea. Suppose that has an eigenvalue of multiplicity . We find vectors such that Such vectors are called generalized eigenvectors generalized eigenvectors (then is an eigenvector). For the eigenvector there is a chain of generalized eigenvectors through such that: Really once you find the such that but , you find the entire chain since you can compute the rest, , , etc. We form the linearly independent solutions Recall that is the factorial. If you have an eigenvalue of geometric multiplicity , you will have to find such chains (some of them might be short: just the single eigenvector equation). We go until we form linearly independent solutions where is the algebraic multiplicity. We do not quite know which specific eigenvectors go with which chain, so start by finding first for the longest possible chain and go from there.  For example, if is an eigenvalue of of algebraic multiplicity 3 and defect 2, then solve That is, find such that , but . Then you are done as and . The 3 linearly independent solutions are   If, on the other hand, has an eigenvalue of algebraic multiplicity 3 and defect 1, then solve Here and are actual honest eigenvectors, and is a generalized eigenvector. So there are two chains. To solve, first find a such that , but . Then is going to be an eigenvector. Then solve for an eigenvector that is linearly independent from . You get 3 linearly independent solutions       Let . Find the general solution of .      Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .        Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of in two different ways and verify you get the same answer.        Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .        Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .        Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .        Suppose that is a matrix with a repeated eigenvalue . Suppose that there are two linearly independent eigenvectors. Show that .      Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .      a)  b) No defects. c)       Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .      a)  b) Eigenvalue 1 has a defect of 1 c)       Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .      a)  b) Eigenvalue 2 has a defect of 2 c)       Let , where , , and are unknowns. Suppose that is a doubled eigenvalue of defect 1, and suppose that is a corresponding eigenvector. Find and show that there is only one such matrix .          "
},
{
  "id": "sec_multeigen-3-4",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-3-4",
  "type": "Theorem",
  "number": "3.7.1",
  "title": "",
  "body": "  Suppose the matrix has real eigenvalues (not necessarily distinct), , , ..., , and there are linearly independent corresponding eigenvectors , , ..., . Then the general solution to can be written as    "
},
{
  "id": "sec_multeigen-4-3",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-4-3",
  "type": "Example",
  "number": "3.7.1",
  "title": "",
  "body": "  The matrix has an eigenvalue 3 of algebraic multiplicity 2. As , to compute the eigenvectors, we must solve So . All eigenvectors are of the form . Any two such vectors are linearly dependent, and hence the geometric multiplicity of the eigenvalue is 1. Therefore, the defect is 1, and we can no longer apply the eigenvalue method directly to a system of ODEs with such a coefficient matrix.  To solve such an ODE, we need a new idea. Roughly, the key observation we will use is that if is an eigenvalue of of algebraic multiplicity , then it is possible to find certain linearly independent vectors solving for various powers . We will call these generalized eigenvectors generalized eigenvectors .  We continue with the example equation where . We found an eigenvalue of (algebraic) multiplicity 2 and defect 1. We found one eigenvector . We have one solution We are now stuck, we get no other solutions from standard eigenvectors. But we need two linearly independent solutions to find the general solution of the equation.  In the spirit of repeated roots of the characteristic equation for a single equation, we try another solution of the form We differentiate to get As we are assuming that is a solution, must equal . So we compute : By looking at the coefficients of and , we see and . This means that Therefore, is a solution if these two equations are satisfied. The second equation is satisfied if is an eigenvector, and we found the eigenvector above, so let . So, if we can find a that solves , then we are done. This is just a bunch of linear equations to solve and we are by now very good at that. Let us solve . Write By inspection, we see that letting ( could be anything in fact) and does the job. Hence we can take . Our general solution to is Let us check that we really do have the solution. First . Good. Now . Good.   "
},
{
  "id": "sec_multeigen-4-6",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-4-6",
  "type": "Exercise",
  "number": "3.7.1",
  "title": "",
  "body": "  Solve by first solving for and then for independently. Check that you got the same solution as we did above.   "
},
{
  "id": "sec_multeigen-4-8",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-4-8",
  "type": "Example",
  "number": "3.7.2",
  "title": "",
  "body": "  Consider the system Compute the eigenvalues, The eigenvalues are 1 and 2, where 2 has multiplicity 2. We leave it to the reader to find that is an eigenvector for the eigenvalue .  We focus on . We compute eigenvectors: The first equation says that , so the last equation is . Let be the free variable to find that . Perhaps let to find an eigenvector . Problem is that setting to anything else just gets multiples of this vector and so we have a defect of 1. Let be the eigenvector and we look for a generalized eigenvector : or where we used , , as components of for simplicity. The first equation says so . The second equation says nothing. The last equation is , or , or . We let be the free variable, and we choose . We find .  The general solution is therefore,    "
},
{
  "id": "sec_multeigen-5-1",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-1",
  "type": "Exercise",
  "number": "3.7.2",
  "title": "",
  "body": "  Let . Find the general solution of .   "
},
{
  "id": "sec_multeigen-5-2",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-2",
  "type": "Exercise",
  "number": "3.7.3",
  "title": "",
  "body": "  Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .     "
},
{
  "id": "sec_multeigen-5-3",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-3",
  "type": "Exercise",
  "number": "3.7.4",
  "title": "",
  "body": "  Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of in two different ways and verify you get the same answer.     "
},
{
  "id": "sec_multeigen-5-4",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-4",
  "type": "Exercise",
  "number": "3.7.5",
  "title": "",
  "body": "  Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .     "
},
{
  "id": "sec_multeigen-5-5",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-5",
  "type": "Exercise",
  "number": "3.7.6",
  "title": "",
  "body": "  Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .     "
},
{
  "id": "sec_multeigen-5-6",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-6",
  "type": "Exercise",
  "number": "3.7.7",
  "title": "",
  "body": "  Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .     "
},
{
  "id": "sec_multeigen-5-7",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-7",
  "type": "Exercise",
  "number": "3.7.8",
  "title": "",
  "body": "  Suppose that is a matrix with a repeated eigenvalue . Suppose that there are two linearly independent eigenvectors. Show that .   "
},
{
  "id": "sec_multeigen-5-8",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-8",
  "type": "Exercise",
  "number": "3.7.101",
  "title": "",
  "body": "  Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .      a)  b) No defects. c)    "
},
{
  "id": "sec_multeigen-5-9",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-9",
  "type": "Exercise",
  "number": "3.7.102",
  "title": "",
  "body": "  Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .      a)  b) Eigenvalue 1 has a defect of 1 c)    "
},
{
  "id": "sec_multeigen-5-10",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-10",
  "type": "Exercise",
  "number": "3.7.103",
  "title": "",
  "body": "  Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .      a)  b) Eigenvalue 2 has a defect of 2 c)    "
},
{
  "id": "sec_multeigen-5-11",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-11",
  "type": "Exercise",
  "number": "3.7.104",
  "title": "",
  "body": "  Let , where , , and are unknowns. Suppose that is a doubled eigenvalue of defect 1, and suppose that is a corresponding eigenvector. Find and show that there is only one such matrix .        "
},
{
  "id": "sec_matexp",
  "level": "1",
  "url": "sec_matexp.html",
  "type": "Section",
  "number": "3.8",
  "title": "Matrix exponentials",
  "body": " Matrix exponentials   Note: 2 lectures, may need to refer to , §5.6 in , §7.7 in    Definition  There is another way of finding a fundamental matrix solution of a system. Consider the constant-coefficient equation If this would be just one equation (when is a number or a matrix), then the solution would be That does not (yet) make sense if is a larger matrix, but essentially the same computation that led to the above works for matrices when we define properly. First we write the Taylor series for for some number : Recall is the factorial, and . We differentiate this series term by term Maybe we can try the same trick with matrices. For an matrix we define the matrix exponential matrix exponential exponential of a matrix as We will not worry about convergence—the series really does always converge. We usually write as by convention when is a matrix. With this small change and by the exact same calculation as above, we have that Now and hence is an matrix. What we are looking for is a vector. In the case we would at this point multiply by an arbitrary constant to get the general solution. In the matrix case we multiply by a column vector .    Let be an matrix. Then the general solution to is where is an arbitrary constant vector. In fact, .    Check:   Hence is a fundamental matrix solution fundamental matrix solution of the homogeneous system. If we can compute the matrix exponential, we have another method of solving constant-coefficient homogeneous systems. It also makes it easy to solve for initial conditions. To solve , , we take the solution This equation follows because , so .  We mention a drawback of matrix exponentials. In general . The trouble is that matrices do not commute, that is, in general . If you would try to rewrite as using the Taylor series, you will see why the lack of commutativity becomes a problem. It is true that if , that is, if and commute, then . We will find this fact useful. We restate this as a theorem to make a point.    If , then . Otherwise, in general.      Simple cases  In some instances it may work to just plug into the series definition. Suppose the matrix is diagonal diagonal matrix matrix exponential of . For example, . Then and In particular,   This makes exponentials of certain other matrices easy to compute. For example, the matrix can be written as where . Notice that . So for all . Therefore, . Suppose we actually want to compute . The matrices and commute (exercise: check this) and , since . We write We found a fundamental matrix solution for the system . Note that this matrix has a repeated eigenvalue with a defect; there is only one eigenvector for the eigenvalue 3. So we found a perhaps easier way to handle this case. In fact, if a matrix is and has an eigenvalue of multiplicity 2, then either , or where . This is a good exercise.    Suppose that is and is the only eigenvalue. Show that , and therefore that we can write , where (and possibly ). Hint: First write down what does it mean for the eigenvalue to be of multiplicity 2. You will get an equation for the entries. Now compute the square of .    Matrices such that for some are called nilpotent nilpotent . Computation of the matrix exponential for nilpotent matrices is easy by just writing down the first terms of the Taylor series.    General matrices  In general, the exponential is not as easy to compute as above. We usually cannot write a matrix as a sum of commuting matrices where the exponential is simple for each one. But fear not, it is still not too difficult provided we can find enough eigenvectors. First we need the following interesting result about matrix exponentials. For two square matrices and , with invertible, we have This can be seen by writing down the Taylor series. First And by the same reasoning . Now write the Taylor series for :   Given a square matrix , we can usually write , where is diagonal and invertible. This procedure is called diagonalization diagonalization . If we can do that, the computation of the exponential becomes easy as is just taking the exponential of the entries on the diagonal. Adding into the mix, we can then compute the exponential   To diagonalize we need linearly independent eigenvectors of . Otherwise, this method of computing the exponential does not work and we need to be trickier, but we will not get into such details. Let be the matrix with the eigenvectors as columns. Let , , ..., be the eigenvalues and let , , ..., be the eigenvectors, then . Make a diagonal matrix with the eigenvalues on the diagonal: We compute The columns of are linearly independent as these are linearly independent eigenvectors of . Hence is invertible. Since , we multiply on the right by and we get This means that . Multiplying the matrix by , we obtain The formula , therefore, gives the formula for computing a fundamental matrix solution for the system , in the case where we have linearly independent eigenvectors.  This computation still works when the eigenvalues and eigenvectors are complex, though then you have to compute with complex numbers. It is clear from the definition that if is real, then is real. So you will only need complex numbers in the computation and not for the result. You may need to apply Euler's formula to simplify the result. If simplified properly, the final matrix will not have any complex numbers in it.    Compute a fundamental matrix solution using the matrix exponential for the system Then compute the particular solution for the initial conditions and .  Let be the coefficient matrix . We first compute (exercise) that the eigenvalues are 3 and and corresponding eigenvectors are and . Hence the diagonalization of is We write   The initial conditions are and . Hence, by the property that , we find that the particular solution we are looking for is where is . The particular solution we are looking for is       Fundamental matrix solutions  If you can compute a fundamental matrix solution in a different way, you can use this to find the matrix exponential . A fundamental matrix solution of a system of ODEs is not unique. The exponential is the fundamental matrix solution with the property that for we get the identity matrix. So we must find the right fundamental matrix solution. Let be any fundamental matrix solution to . We claim If we plug into , we get the identity as needed. We can multiply a fundamental matrix solution on the right by any constant invertible matrix and we still get a fundamental matrix solution. All we are doing is changing what are the arbitrary constants in the general solution .    Approximations  If you think about it, the computation of any fundamental matrix solution using the eigenvalue method is just as difficult as the computation of . So perhaps we did not gain much by this new tool. However, the Taylor series expansion actually gives us a way to approximate solutions, which the eigenvalue method did not.  The simplest thing we can do is to just compute the series up to a certain number of terms. There are better ways to approximate the exponential C. Moler and C.F. Van Loan, Nineteen Dubious Ways to Compute the Exponential of a Matrix, Twenty-Five Years Later , SIAM Review 45 (1), 2003, 3–49 . In many cases, however, few terms of the Taylor series give a reasonable approximation for the exponential and may suffice for the application. For example, let us compute the first 4 terms of the series for the matrix . Just like the scalar version of the Taylor series approximation, the approximation will be better for small and worse for larger . For larger , we will have to compute more terms. Let us see how we stack up against the real solution with . The approximate solution is approximately (rounded to 8 decimal places) Plugging into the real solution (rounded to 8 decimal places), we get Not bad at all! Although if we take the same approximation for , we get while the real value is (again rounded to 8 decimal places) So the approximation is not very good once we get up to . To get a good approximation at (say up to 2 decimal places), we would need to go up to the power (exercise).      Using the matrix exponential, find a fundamental matrix solution for the system , .      Find for the matrix .      Find a fundamental matrix solution for the system , , . Then find the solution that satisfies .      Compute the matrix exponential for .       (challenging) Suppose . Show that under this assumption, .      Use to show that . In particular, is invertible even if is not.      Let be a matrix with eigenvalues , , and corresponding eigenvectors , .    Find matrix with these properties.    Find a fundamental matrix solution to .    Solve the system in with initial conditions .        Suppose that is an matrix with a repeated eigenvalue of multiplicity with linearly independent eigenvectors. Show that the matrix is diagonal, in fact, . Hint: Use diagonalization and the fact that the identity matrix commutes with every other matrix.      Let .    Find .    Solve , .        Let . Approximate by expanding the power series up to the third order.      For any positive integer , find a formula (or a recipe) for for the following matrices:                            Compute where .           Compute where .               Compute where .    Solve for .      a)  b)       Compute the first 3 terms (up to the second degree) of the Taylor expansion of where . Write it as a single matrix. Then use it to approximate .             For any positive integer , find a formula (or a recipe) for for the following matrices:                     a)  b)  c) if is even, and if is odd.     "
},
{
  "id": "sec_matexp-3-3",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-3-3",
  "type": "Theorem",
  "number": "3.8.1",
  "title": "",
  "body": "  Let be an matrix. Then the general solution to is where is an arbitrary constant vector. In fact, .   "
},
{
  "id": "sec_matexp-3-7",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-3-7",
  "type": "Theorem",
  "number": "3.8.2",
  "title": "",
  "body": "  If , then . Otherwise, in general.   "
},
{
  "id": "sec_matexp-4-4",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-4-4",
  "type": "Exercise",
  "number": "3.8.1",
  "title": "",
  "body": "  Suppose that is and is the only eigenvalue. Show that , and therefore that we can write , where (and possibly ). Hint: First write down what does it mean for the eigenvalue to be of multiplicity 2. You will get an equation for the entries. Now compute the square of .   "
},
{
  "id": "sec_matexp-5-6",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-5-6",
  "type": "Example",
  "number": "3.8.1",
  "title": "",
  "body": "  Compute a fundamental matrix solution using the matrix exponential for the system Then compute the particular solution for the initial conditions and .  Let be the coefficient matrix . We first compute (exercise) that the eigenvalues are 3 and and corresponding eigenvectors are and . Hence the diagonalization of is We write   The initial conditions are and . Hence, by the property that , we find that the particular solution we are looking for is where is . The particular solution we are looking for is    "
},
{
  "id": "sec_matexp-8-1",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-1",
  "type": "Exercise",
  "number": "3.8.2",
  "title": "",
  "body": "  Using the matrix exponential, find a fundamental matrix solution for the system , .   "
},
{
  "id": "sec_matexp-8-2",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-2",
  "type": "Exercise",
  "number": "3.8.3",
  "title": "",
  "body": "  Find for the matrix .   "
},
{
  "id": "sec_matexp-8-3",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-3",
  "type": "Exercise",
  "number": "3.8.4",
  "title": "",
  "body": "  Find a fundamental matrix solution for the system , , . Then find the solution that satisfies .   "
},
{
  "id": "sec_matexp-8-4",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-4",
  "type": "Exercise",
  "number": "3.8.5",
  "title": "",
  "body": "  Compute the matrix exponential for .   "
},
{
  "id": "matexp_explawex",
  "level": "2",
  "url": "sec_matexp.html#matexp_explawex",
  "type": "Exercise",
  "number": "3.8.6",
  "title": "",
  "body": "   (challenging) Suppose . Show that under this assumption, .   "
},
{
  "id": "matexp_expinvex",
  "level": "2",
  "url": "sec_matexp.html#matexp_expinvex",
  "type": "Exercise",
  "number": "3.8.7",
  "title": "",
  "body": "  Use to show that . In particular, is invertible even if is not.   "
},
{
  "id": "sec_matexp-8-7",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-7",
  "type": "Exercise",
  "number": "3.8.8",
  "title": "",
  "body": "  Let be a matrix with eigenvalues , , and corresponding eigenvectors , .    Find matrix with these properties.    Find a fundamental matrix solution to .    Solve the system in with initial conditions .     "
},
{
  "id": "sec_matexp-8-8",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-8",
  "type": "Exercise",
  "number": "3.8.9",
  "title": "",
  "body": "  Suppose that is an matrix with a repeated eigenvalue of multiplicity with linearly independent eigenvectors. Show that the matrix is diagonal, in fact, . Hint: Use diagonalization and the fact that the identity matrix commutes with every other matrix.   "
},
{
  "id": "sec_matexp-8-9",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-9",
  "type": "Exercise",
  "number": "3.8.10",
  "title": "",
  "body": "  Let .    Find .    Solve , .     "
},
{
  "id": "sec_matexp-8-10",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-10",
  "type": "Exercise",
  "number": "3.8.11",
  "title": "",
  "body": "  Let . Approximate by expanding the power series up to the third order.   "
},
{
  "id": "sec_matexp-8-11",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-11",
  "type": "Exercise",
  "number": "3.8.12",
  "title": "",
  "body": "  For any positive integer , find a formula (or a recipe) for for the following matrices:                         "
},
{
  "id": "sec_matexp-8-12",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-12",
  "type": "Exercise",
  "number": "3.8.101",
  "title": "",
  "body": "  Compute where .        "
},
{
  "id": "sec_matexp-8-13",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-13",
  "type": "Exercise",
  "number": "3.8.102",
  "title": "",
  "body": "  Compute where .        "
},
{
  "id": "sec_matexp-8-14",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-14",
  "type": "Exercise",
  "number": "3.8.103",
  "title": "",
  "body": "      Compute where .    Solve for .      a)  b)    "
},
{
  "id": "sec_matexp-8-15",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-15",
  "type": "Exercise",
  "number": "3.8.104",
  "title": "",
  "body": "  Compute the first 3 terms (up to the second degree) of the Taylor expansion of where . Write it as a single matrix. Then use it to approximate .          "
},
{
  "id": "sec_matexp-8-16",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-16",
  "type": "Exercise",
  "number": "3.8.105",
  "title": "",
  "body": "  For any positive integer , find a formula (or a recipe) for for the following matrices:                     a)  b)  c) if is even, and if is odd.   "
},
{
  "id": "nonhomogsys_section",
  "level": "1",
  "url": "nonhomogsys_section.html",
  "type": "Section",
  "number": "3.9",
  "title": "Nonhomogeneous systems",
  "body": " Nonhomogeneous systems   Note: 3 lectures (may have to skip a little), somewhat different from §5.7 in , §7.9 in    First-order constant-coefficient   Integrating factor  We first focus on the nonhomogeneous first-order equation where is a constant matrix. The first method we look at is the integrating factor method integrating factor method for systems . For simplicity, we rewrite the equation as where . We multiply both sides of the equation by (being mindful that we are dealing with matrices that may not commute) to obtain We notice that . This fact follows by writing down the series definition of : So . The product rule says and so We can now integrate. That is, we integrate each component of the vector separately Recall from that . Therefore, we obtain   Perhaps it is better understood as a definite integral. In this case it will be easy to also solve for the initial conditions. Consider the equation with initial conditions The solution can then be written as Again, the integration means that each component of the vector is integrated separately. It is not hard to see that really does satisfy the initial condition .     Suppose that we have the system with initial conditions .  Let us write the system as The matrix has a doubled eigenvalue 2 with defect 1, and we leave it as an exercise to double-check we computed correctly. Once we have , we find , simply by negating . Instead of computing the whole formula at once, let us do it in stages. First Then Phew!  Let us check that this really works. Similarly (exercise) . The initial conditions are also satisfied (exercise).    For systems, the integrating factor method only works if does not depend on , that is, is constant. The problem is that in general because matrix multiplication is not commutative.    Eigenvector decomposition  eigenvector decomposition  For the next method, note that eigenvectors of a matrix give the directions in which the matrix acts like a scalar. If we solve the system along these directions, the computations are simpler as we treat the matrix as a scalar. We then put those solutions together to get the general solution for the system.  Take the equation Assume has linearly independent eigenvectors . Write That is, we wish to write our solution as a linear combination of eigenvectors of . If we solve for the scalar functions through , we have our solution . Let us decompose in terms of the eigenvectors as well. We wish to write That is, we wish to find through that satisfy . Since all the eigenvectors are independent, the matrix is invertible. Write the equation as , where the components of are the functions through . Then . Hence it is always possible to find when there are linearly independent eigenvectors.  We plug into , and note that : If we identify the coefficients of the vectors through , we get the equations Each one of these equations is independent of the others. They are all linear first-order equations and can easily be solved by the standard integrating factor method for single equations. That is, for the equation we write We use the integrating factor to find that We integrate and solve for to get If we are looking for just any particular solution, we can set to be zero. If we leave these constants in, we get the general solution. Write , and we are done.  As always, it is perhaps better to write these integrals as definite integrals. Suppose that we have an initial condition . Take to find , just like before. Then if we write we get the particular solution satisfying , because .  We remark that the technique we just outlined is the eigenvalue method applied to nonhomogeneous systems. If a system is homogeneous, that is, if , then the equations we get are , and so are the solutions and that is precisely what we got in .    Let . Solve where for .  The eigenvalues of are and 4 and corresponding eigenvectors are and respectively. This calculation is left as an exercise. We write down the matrix of the eigenvectors and compute its inverse (using the inverse formula for matrices)   We are looking for a solution of the form . We first need to write in terms of the eigenvectors. That is we wish to write . Thus So and .  We further need to write in terms of the eigenvectors. That is, we wish to write . Hence So and . We plug our into the equation and get We get the two equations We solve with the integrating factor method. Computation of the integral is left as an exercise to the student. You will need integration by parts. where is the constant of integration. As , then and . Similarly, As , we have and hence . The solution is That is, and .      Check that and solve the problem. Check both that they satisfy the differential equation and that they satisfy the initial conditions.      Undetermined coefficients  The method of undetermined coefficients undetermined coefficients for systems also works for systems. The only difference is that we use unknown vectors rather than just numbers. Same caveats apply to undetermined coefficients for systems as for single equations. This method does not always work. Furthermore, if the right-hand side is complicated, we have to solve for lots of variables. Each element of an unknown vector is an unknown number. In a system of 3 equations with say 4 unknown vectors (this would not be uncommon), we already have 12 unknown numbers to solve for. The method can turn into a lot of tedious tedious work if done by hand. As the method is essentially the same as for single equations, let us just do an example.    Let . Find a particular solution of where .  One can solve this system in an easier way (can you see how?), but for the purposes of the example, we use the eigenvalue method and undetermined coefficients. The eigenvalues of are and . Corresponding eigenvectors are and respectively. Hence, our complementary solution is for some arbitrary constants and .  We would next want to guess a particular solution of the form However, something of the form appears in the complementary solution. Because we do not yet know if the vector is a multiple of , we do not know if a conflict arises. It is possible that there is no conflict, but to be safe we also try . Here we find the crux of the difference between a single equation and systems. We try both terms and in the solution, not just the term . Therefore, we try We have 8 unknowns as , , , and . We plug into the equation. First let us compute . Now must equal , which is We identify the coefficients of , , and any constant vectors in and in to find the equations: We could write the augmented matrix and do row reduction, but it is easier to solve these in an ad hoc manner. Immediately, we see , , . Plugging these back in, we get and . The remaining equations that tell us something are So and . Finally, can be arbitrary and still satisfy the equations. We are looking for just a single solution, so presumably the simplest one is when . Therefore, That is, , . We add this particular solution to the complementary solution to get the general solution of the problem: Notice that both and really were needed.      Check that and solve the problem. Then set and check this solution as well. What is the difference between the two solutions (one with and one with )?    As you can see, other than the handling of conflicts, undetermined coefficients works exactly the same as it did for single equations. However, the computations can get out of hand pretty quickly for systems. The equation we considered was pretty simple.     First-order variable-coefficient   Variation of parameters  Just as for a single equation, there is the method of variation of parameters variation of parameters for systems . For constant-coefficient systems, it is essentially the same thing as the integrating factor method we discussed earlier. However, this method works for any linear system, even if it is not constant-coefficient, provided we somehow solve the associated homogeneous problem.  Consider the equation Suppose we somehow solved the associated homogeneous equation and found a fundamental matrix solution . The general solution to the associated homogeneous equation is for a constant vector . As in variation of parameters for a single equation, we try the solution to the nonhomogeneous equation of the form where is a vector-valued function instead of a constant. We substitute into : As is a fundamental matrix solution to the homogeneous problem, that is, , we find Hence, . We compute , and then . We integrate to obtain , and we have the particular solution . Hence, we have the formula   If is a constant matrix and , then . We obtain a solution , which is precisely what we got using the integrating factor method.    Find a particular solution to   Here, is most definitely not constant. Perhaps by a lucky guess, we find that solves . Once we know the complementary solution, we can find a solution to . First, we compute Next, we know a particular solution to is Adding the complementary solution, we find the general solution to :       Check that and really solve .    In the variation of parameters, as in the integrating factor method, we can obtain the general solution by adding in constants of integration. Doing so would add for a vector of arbitrary constants. But that is precisely the complementary solution.     Second-order constant-coefficients   Undetermined coefficients  We have already seen a simple example of the method of undetermined coefficients undetermined coefficients for second-order systems for second-order systems in . This method is essentially the same as undetermined coefficients for first-order systems. There are some simplifications that we can make, as we did in . Consider the equation where is a constant matrix. If is of the form , then as two derivatives of cosine is again cosine, we do not need to introduce sines, and we try a solution of the form   If is a sum of cosines, recall the superposition principle. If , then we would try for the problem , and we would try for the problem . Then we sum the solutions.  If there is duplication with the complementary solution, or the equation is of the form , then we need to do the same thing as we do for first-order systems.  You can never go wrong by putting in more terms than needed into your guess. Those extra coefficients will turn out to be zero. But it is useful to save some time and effort.    Eigenvector decomposition  If we have the system we can do eigenvector decomposition eigenvector decomposition , just like for first-order systems.  Let be the eigenvalues and be eigenvectors. Again form the matrix . Write Decompose in terms of the eigenvectors where, again, .  We plug in and as before we obtain We identify the coefficients of the eigenvectors to get the equations Each one of these equations is independent of the others. We solve each equation using the methods of . We write to find a particular solution. If we find the general solutions for through , then is the general solution as well.    Let us do the example from using this method. The equation is The eigenvalues are and , with eigenvectors and . Therefore and . Therefore, So after the whole song and dance of plugging in, the equations we get are For each equation we use the method of undetermined coefficients. We try for the first equation and for the second equation. We plug in to get We solve each of these equations separately. We get and . And hence and . So our particular solution is This solution matches what we got previously in .         Find a particular solution to ,     using integrating factor method,    using eigenvector decomposition,    using undetermined coefficients.        Find the general solution to ,     using integrating factor method,    using eigenvector decomposition,    using undetermined coefficients.        Find the general solution to ,     using eigenvector decomposition,    using undetermined coefficients.        Find the general solution to ,     using eigenvector decomposition,    using undetermined coefficients.        Take the equation     Check that is the complementary solution.    Use variation of parameters to find a particular solution.        Find a particular solution to ,     using integrating factor method,    using eigenvector decomposition,    using undetermined coefficients.      The general solution is (particular solutions should agree with one of these):  ,        Find a particular solution to ,     using integrating factor method,    using eigenvector decomposition,    using undetermined coefficients.      The general solution is (particular solutions should agree with one of these):  ,        Solve , with initial conditions , using eigenvector decomposition.           Solve , with initial conditions , , , using eigenvector decomposition.            "
},
{
  "id": "nonhomogsys_section-3-2-4",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-3-2-4",
  "type": "Example",
  "number": "3.9.1",
  "title": "",
  "body": "  Suppose that we have the system with initial conditions .  Let us write the system as The matrix has a doubled eigenvalue 2 with defect 1, and we leave it as an exercise to double-check we computed correctly. Once we have , we find , simply by negating . Instead of computing the whole formula at once, let us do it in stages. First Then Phew!  Let us check that this really works. Similarly (exercise) . The initial conditions are also satisfied (exercise).   "
},
{
  "id": "nonhomogsys_section-3-3-8",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-3-3-8",
  "type": "Example",
  "number": "3.9.2",
  "title": "",
  "body": "  Let . Solve where for .  The eigenvalues of are and 4 and corresponding eigenvectors are and respectively. This calculation is left as an exercise. We write down the matrix of the eigenvectors and compute its inverse (using the inverse formula for matrices)   We are looking for a solution of the form . We first need to write in terms of the eigenvectors. That is we wish to write . Thus So and .  We further need to write in terms of the eigenvectors. That is, we wish to write . Hence So and . We plug our into the equation and get We get the two equations We solve with the integrating factor method. Computation of the integral is left as an exercise to the student. You will need integration by parts. where is the constant of integration. As , then and . Similarly, As , we have and hence . The solution is That is, and .   "
},
{
  "id": "nonhomogsys_section-3-3-9",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-3-3-9",
  "type": "Exercise",
  "number": "3.9.1",
  "title": "",
  "body": "  Check that and solve the problem. Check both that they satisfy the differential equation and that they satisfy the initial conditions.   "
},
{
  "id": "nonhomogsys_section-3-4-3",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-3-4-3",
  "type": "Example",
  "number": "3.9.3",
  "title": "",
  "body": "  Let . Find a particular solution of where .  One can solve this system in an easier way (can you see how?), but for the purposes of the example, we use the eigenvalue method and undetermined coefficients. The eigenvalues of are and . Corresponding eigenvectors are and respectively. Hence, our complementary solution is for some arbitrary constants and .  We would next want to guess a particular solution of the form However, something of the form appears in the complementary solution. Because we do not yet know if the vector is a multiple of , we do not know if a conflict arises. It is possible that there is no conflict, but to be safe we also try . Here we find the crux of the difference between a single equation and systems. We try both terms and in the solution, not just the term . Therefore, we try We have 8 unknowns as , , , and . We plug into the equation. First let us compute . Now must equal , which is We identify the coefficients of , , and any constant vectors in and in to find the equations: We could write the augmented matrix and do row reduction, but it is easier to solve these in an ad hoc manner. Immediately, we see , , . Plugging these back in, we get and . The remaining equations that tell us something are So and . Finally, can be arbitrary and still satisfy the equations. We are looking for just a single solution, so presumably the simplest one is when . Therefore, That is, , . We add this particular solution to the complementary solution to get the general solution of the problem: Notice that both and really were needed.   "
},
{
  "id": "nonhomogsys_section-3-4-4",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-3-4-4",
  "type": "Exercise",
  "number": "3.9.2",
  "title": "",
  "body": "  Check that and solve the problem. Then set and check this solution as well. What is the difference between the two solutions (one with and one with )?   "
},
{
  "id": "nonhomogsys_section-4-2-5",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-4-2-5",
  "type": "Example",
  "number": "3.9.4",
  "title": "",
  "body": "  Find a particular solution to   Here, is most definitely not constant. Perhaps by a lucky guess, we find that solves . Once we know the complementary solution, we can find a solution to . First, we compute Next, we know a particular solution to is Adding the complementary solution, we find the general solution to :    "
},
{
  "id": "nonhomogsys_section-4-2-6",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-4-2-6",
  "type": "Exercise",
  "number": "3.9.3",
  "title": "",
  "body": "  Check that and really solve .   "
},
{
  "id": "nonhomogsys_section-5-3-5",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-5-3-5",
  "type": "Example",
  "number": "3.9.5",
  "title": "",
  "body": "  Let us do the example from using this method. The equation is The eigenvalues are and , with eigenvectors and . Therefore and . Therefore, So after the whole song and dance of plugging in, the equations we get are For each equation we use the method of undetermined coefficients. We try for the first equation and for the second equation. We plug in to get We solve each of these equations separately. We get and . And hence and . So our particular solution is This solution matches what we got previously in .   "
},
{
  "id": "nonhomogsys_section-6-1",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-1",
  "type": "Exercise",
  "number": "3.9.4",
  "title": "",
  "body": "  Find a particular solution to ,     using integrating factor method,    using eigenvector decomposition,    using undetermined coefficients.     "
},
{
  "id": "nonhomogsys_section-6-2",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-2",
  "type": "Exercise",
  "number": "3.9.5",
  "title": "",
  "body": "  Find the general solution to ,     using integrating factor method,    using eigenvector decomposition,    using undetermined coefficients.     "
},
{
  "id": "nonhomogsys_section-6-3",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-3",
  "type": "Exercise",
  "number": "3.9.6",
  "title": "",
  "body": "  Find the general solution to ,     using eigenvector decomposition,    using undetermined coefficients.     "
},
{
  "id": "nonhomogsys_section-6-4",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-4",
  "type": "Exercise",
  "number": "3.9.7",
  "title": "",
  "body": "  Find the general solution to ,     using eigenvector decomposition,    using undetermined coefficients.     "
},
{
  "id": "nonhomogsys_section-6-5",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-5",
  "type": "Exercise",
  "number": "3.9.8",
  "title": "",
  "body": "  Take the equation     Check that is the complementary solution.    Use variation of parameters to find a particular solution.     "
},
{
  "id": "nonhomogsys_section-6-6",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-6",
  "type": "Exercise",
  "number": "3.9.101",
  "title": "",
  "body": "  Find a particular solution to ,     using integrating factor method,    using eigenvector decomposition,    using undetermined coefficients.      The general solution is (particular solutions should agree with one of these):  ,     "
},
{
  "id": "nonhomogsys_section-6-7",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-7",
  "type": "Exercise",
  "number": "3.9.102",
  "title": "",
  "body": "  Find a particular solution to ,     using integrating factor method,    using eigenvector decomposition,    using undetermined coefficients.      The general solution is (particular solutions should agree with one of these):  ,     "
},
{
  "id": "nonhomogsys_section-6-8",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-8",
  "type": "Exercise",
  "number": "3.9.103",
  "title": "",
  "body": "  Solve , with initial conditions , using eigenvector decomposition.        "
},
{
  "id": "nonhomogsys_section-6-9",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-9",
  "type": "Exercise",
  "number": "3.9.104",
  "title": "",
  "body": "  Solve , with initial conditions , , , using eigenvector decomposition.          "
},
{
  "id": "bvp_section",
  "level": "1",
  "url": "bvp_section.html",
  "type": "Section",
  "number": "4.1",
  "title": "Boundary value problems",
  "body": " Boundary value problems   Note: 2 lectures, similar to §3.8 in , §10.1 and §11.1 in    Boundary value problems  Before we tackle the Fourier series, we study the so-called boundary value problems boundary value problem (or endpoint problems endpoint problem ). Consider for some constant , where is defined for in the interval . Previously we specified the value of the solution and its derivative at a single point. Now we specify the value of the solution at two different points. As is a solution, existence of solutions is not a problem. Uniqueness of solutions is another issue. The general solution to has two arbitrary constants See or and . . It is, therefore, natural (but wrong) to believe that requiring two conditions guarantees a unique solution.    Take , , . That is, Then is another solution (besides ) satisfying both boundary conditions. There are more. Write down the general solution of the differential equation, which is . The condition forces . Letting does not give us any more information as already satisfies both boundary conditions. Hence, there are infinitely many solutions of the form , where is an arbitrary constant.      On the other hand, consider . That is, Then the general solution is . Letting still forces . We apply the second condition to find . As we obtain . Therefore is the unique solution to this problem.    What is going on? We will be interested in finding which constants allow a nonzero solution, and we will be interested in finding those solutions. This problem is an analogue of finding eigenvalues and eigenvectors of matrices.    Eigenvalue problems  For basic Fourier series theory, we will need the following three eigenvalue problems:  and A number is called an eigenvalue eigenvalue of a boundary value problem of (resp. or ) if and only if there exists a nonzero (not identically zero) solution to (resp. or ) given that specific . A nonzero solution is called a corresponding eigenfunction eigenfunction corresponding eigenfunction . We will consider more general equations and boundary conditions, but we will postpone this until .  Note the similarity to eigenvalues and eigenvectors of matrices. The similarity is not just coincidental. If we think of the equations as differential operators, then we are doing the same exact thing. Think of a function as a vector with infinitely many components (one for each ). Let be the linear operator. Then the eigenvalue\/eigenfunction pair should be and nonzero such that . In other words, we are looking for nonzero functions satisfying certain endpoint conditions that solve . A lot of the formalism from linear algebra still applies here, though we will not pursue this line of reasoning too far.    Find the eigenvalues and eigenfunctions of   We have to handle the cases , , and separately. First suppose that . Then the general solution to is The condition implies immediately . Next If is zero, then is not a nonzero solution. So to get a nonzero solution, we must have that . Hence, must be an integer multiple of . In other words, for a positive integer . Hence, the positive eigenvalues are for all integers . Corresponding eigenfunctions can be taken as . Just like for eigenvectors, constant multiples of an eigenfunction are also eigenfunctions, so we only need to pick one.  Now suppose that . In this case the equation is , and its general solution is . The condition implies that , and implies that . This means that is not an eigenvalue.  Finally, suppose that . In this case we have the general solution Recall that and . As an exercise try the computation with the general solution written as (for different and of course).  Letting implies that (recall and ). So our solution must be and satisfy . This is only possible if is zero. Why? Because is only zero when . You should plot sinh to see this fact. We can also see this from the definition of sinh. We get . Hence , which implies and that is only true if . So there are no negative eigenvalues.  In summary, the eigenvalues and corresponding eigenfunctions are       Compute the eigenvalues and eigenfunctions of   Again we have to handle the cases , , separately. First suppose that . The general solution to is . So The condition implies immediately . Next Again cannot be zero if is to be an eigenvalue, and is only zero if for a positive integer . Hence, the positive eigenvalues are again for all integers . And the corresponding eigenfunctions can be taken as .  Now suppose that . In this case, the equation is and the general solution is so . The condition implies that . The condition also implies . Hence could be anything (let us take it to be 1). So is an eigenvalue and is a corresponding eigenfunction.  Finally, let . In this case, the general solution is and We have already seen (with roles of and switched) that for this expression to be zero at and , we must have . Hence, there are no negative eigenvalues.  In summary, the eigenvalues and corresponding eigenfunctions are and there is another eigenvalue     The following problem is the one that leads to the general Fourier series.    Compute the eigenvalues and eigenfunctions of We have not specified the values or the derivatives at the endpoints, but rather that they are the same at the beginning and at the end of the interval.  We skip . The computations are the same as before, and again we find that there are no negative eigenvalues.  For , the general solution is . The condition implies that ( implies ). The second condition says nothing about and hence is an eigenvalue with a corresponding eigenfunction .  For we get that . Now We remember that and . Therefore, Hence either or . Similarly (exercise) if we differentiate and plug in the second condition we find that or . Therefore, unless we want and to both be zero (which we do not) we must have . Hence, is an integer and the eigenvalues are yet again for an integer . In this case, however, is an eigenfunction for any and any . So we have two linearly independent eigenfunctions and . Remember that for a matrix, we can also have two eigenvectors corresponding to a single eigenvalue if the eigenvalue is repeated.  In summary, the eigenvalues and corresponding eigenfunctions are       Orthogonality of eigenfunctions  Something that will be very useful in the next section is the orthogonality orthogonality property of the eigenfunctions. This is an analogue of the following fact about eigenvectors of a matrix. A matrix is called symmetric symmetric matrix if (it is equal to its transpose). Eigenvectors for two distinct eigenvalues of a symmetric matrix are orthogonal. The differential operators we are dealing with act much like a symmetric matrix. We, therefore, get the following theorem.    Suppose that and are two eigenfunctions of the problem , , or for two different eigenvalues and . Then they are orthogonal orthogonal functions in the sense that     The terminology comes from the fact that the integral is a type of inner product. We will expand on this in the next section. The theorem has a very short, elegant, and illuminating proof so we give it here. First, we have the following two equations. Multiply the first by and the second by and subtract to get Integrate both sides of the equation: The last equality holds because of the boundary conditions. For example, if we consider we have and so is zero at both and . As , the theorem follows.     (easy) Finish the proof of the theorem (check the last equality in the proof) for the cases and .    The function is an eigenfunction for the problem , , . Hence for positive integers and , we have the integrals Similarly, still assuming that and are positive integers, Finally, we also get  and     Fredholm alternative  We now touch on a very useful theorem in the theory of differential equations. The theorem holds in a more general setting than we are going to state it, but for our purposes the following statement is sufficient. We will give a slightly more general version in .   Fredholm alternative  Fredholm alternative simple case    Named after the Swedish mathematician Erik Ivar Fredholm (1866–1927). Exactly one of the following statements holds. Either has a nonzero solution, or has a unique solution for every function continuous on .    The theorem is also true for the other types of boundary conditions we considered. The theorem means that if is not an eigenvalue, the nonhomogeneous equation has a unique solution for every right-hand side. On the other hand if is an eigenvalue, then need not have a solution for every , and furthermore, even if it happens to have a solution, the solution is not unique.  We also want to reinforce the idea here that linear differential operators have much in common with matrices. So it is no surprise that there is a finite-dimensional version of Fredholm alternative for matrices as well. Let be an matrix. The Fredholm alternative then states that either has a nontrivial solution, or has a unique solution for every .  A lot of intuition from linear algebra can be applied to linear differential operators, but one must be careful of course. For example, one difference we have already seen is that in general a differential operator will have infinitely many eigenvalues, while a matrix has only finitely many.    Application  Let us consider a physical application of an endpoint problem. Suppose we have a tightly stretched quickly spinning elastic string or rope of uniform linear density , for example in . Let us put this problem into the -plane and both and are in meters. The -axis represents the position on the string. The string rotates at angular velocity , in . Imagine that the whole -plane rotates at angular velocity . This way, the string stays in this -plane and measures its deflection from the equilibrium position, , on the -axis. Hence the graph of gives the shape of the string. We consider an ideal string with no volume, just a mathematical curve. We suppose the tension on the string is a constant in Newtons. Assuming that the deflection is small, we can use Newton's second law (let us skip the derivation) to get the equation To check the units notice that the units of are , as the derivative is in terms of .  Let be the length of the string (in meters) and the string is fixed at the beginning and end points. Hence, and . See .   Whirling string.    We rewrite the equation as . The setup is similar to , except for the interval length being instead of . We are looking for eigenvalues of where . As before there are no nonpositive eigenvalues. With , the general solution to the equation is . The condition implies that as before. The condition implies that and hence for some integer , so   What does this say about the shape of the string? It says that for all parameters , , not satisfying the equation above, the string is in the equilibrium position, . When , then the string will pop out some distance . We cannot compute with the information we have.  Let us assume that and are fixed and we are changing . For most values of , the string is in the equilibrium state. When the angular velocity hits a value , then the string pops out and has the shape of a sin wave crossing the -axis times between the end points. For example, at , the string does not cross the -axis and the shape looks like in . On the other hand, when the string crosses the -axis 2 times, see . When changes again, the string returns to the equilibrium position. The higher the angular velocity, the more times it crosses the -axis when it is popped out.   Whirling string at the third eigenvalue ( ).    For another example, if you have a spinning jump rope (then as it is completely popped out ) and you pull on the ends to increase the tension, then the velocity also increases for the rope to stay popped out .    Hint for the following exercises: Note that if , then and are also solutions of the homogeneous equation.    Compute all eigenvalues and eigenfunctions of , , (assume ).      Compute all eigenvalues and eigenfunctions of , , (assume ).      Compute all eigenvalues and eigenfunctions of , , (assume ).      Compute all eigenvalues and eigenfunctions of , , (assume ).      We skipped the case of for the boundary value problem , , . Finish the calculation and show that there are no negative eigenvalues.      Consider a spinning string of length 2 and linear density 0.1 and tension 3. Find smallest angular velocity when the string pops out.           Suppose and , . Find all for which there is more than one solution. Also find the corresponding solutions (only for the eigenvalues).     for    (for any )      Suppose and , . Find all the solution(s) if any exist.           Consider and , . Why does it not have any eigenvalues? Why does every first-order equation with two endpoint conditions such as above have no eigenvalues?    General solution is . Since then , and so . Therefore, the solution is always identically zero. One condition is always enough to guarantee a unique solution for a first-order equation.       (challenging) Suppose and , , . Suppose that . Find an equation that all such eigenvalues must satisfy. Hint: Note that is a root of .          "
},
{
  "id": "bvp_section-3-3",
  "level": "2",
  "url": "bvp_section.html#bvp_section-3-3",
  "type": "Example",
  "number": "4.1.1",
  "title": "",
  "body": "  Take , , . That is, Then is another solution (besides ) satisfying both boundary conditions. There are more. Write down the general solution of the differential equation, which is . The condition forces . Letting does not give us any more information as already satisfies both boundary conditions. Hence, there are infinitely many solutions of the form , where is an arbitrary constant.   "
},
{
  "id": "bvp_section-3-4",
  "level": "2",
  "url": "bvp_section.html#bvp_section-3-4",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "  On the other hand, consider . That is, Then the general solution is . Letting still forces . We apply the second condition to find . As we obtain . Therefore is the unique solution to this problem.   "
},
{
  "id": "bvp_eig1ex",
  "level": "2",
  "url": "bvp_section.html#bvp_eig1ex",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": "  Find the eigenvalues and eigenfunctions of   We have to handle the cases , , and separately. First suppose that . Then the general solution to is The condition implies immediately . Next If is zero, then is not a nonzero solution. So to get a nonzero solution, we must have that . Hence, must be an integer multiple of . In other words, for a positive integer . Hence, the positive eigenvalues are for all integers . Corresponding eigenfunctions can be taken as . Just like for eigenvectors, constant multiples of an eigenfunction are also eigenfunctions, so we only need to pick one.  Now suppose that . In this case the equation is , and its general solution is . The condition implies that , and implies that . This means that is not an eigenvalue.  Finally, suppose that . In this case we have the general solution Recall that and . As an exercise try the computation with the general solution written as (for different and of course).  Letting implies that (recall and ). So our solution must be and satisfy . This is only possible if is zero. Why? Because is only zero when . You should plot sinh to see this fact. We can also see this from the definition of sinh. We get . Hence , which implies and that is only true if . So there are no negative eigenvalues.  In summary, the eigenvalues and corresponding eigenfunctions are    "
},
{
  "id": "bvp_section-4-5",
  "level": "2",
  "url": "bvp_section.html#bvp_section-4-5",
  "type": "Example",
  "number": "4.1.4",
  "title": "",
  "body": "  Compute the eigenvalues and eigenfunctions of   Again we have to handle the cases , , separately. First suppose that . The general solution to is . So The condition implies immediately . Next Again cannot be zero if is to be an eigenvalue, and is only zero if for a positive integer . Hence, the positive eigenvalues are again for all integers . And the corresponding eigenfunctions can be taken as .  Now suppose that . In this case, the equation is and the general solution is so . The condition implies that . The condition also implies . Hence could be anything (let us take it to be 1). So is an eigenvalue and is a corresponding eigenfunction.  Finally, let . In this case, the general solution is and We have already seen (with roles of and switched) that for this expression to be zero at and , we must have . Hence, there are no negative eigenvalues.  In summary, the eigenvalues and corresponding eigenfunctions are and there is another eigenvalue    "
},
{
  "id": "bvp-periodic_example",
  "level": "2",
  "url": "bvp_section.html#bvp-periodic_example",
  "type": "Example",
  "number": "4.1.5",
  "title": "",
  "body": "  Compute the eigenvalues and eigenfunctions of We have not specified the values or the derivatives at the endpoints, but rather that they are the same at the beginning and at the end of the interval.  We skip . The computations are the same as before, and again we find that there are no negative eigenvalues.  For , the general solution is . The condition implies that ( implies ). The second condition says nothing about and hence is an eigenvalue with a corresponding eigenfunction .  For we get that . Now We remember that and . Therefore, Hence either or . Similarly (exercise) if we differentiate and plug in the second condition we find that or . Therefore, unless we want and to both be zero (which we do not) we must have . Hence, is an integer and the eigenvalues are yet again for an integer . In this case, however, is an eigenfunction for any and any . So we have two linearly independent eigenfunctions and . Remember that for a matrix, we can also have two eigenvectors corresponding to a single eigenvalue if the eigenvalue is repeated.  In summary, the eigenvalues and corresponding eigenfunctions are    "
},
{
  "id": "bvp_orthogonaleigen",
  "level": "2",
  "url": "bvp_section.html#bvp_orthogonaleigen",
  "type": "Theorem",
  "number": "4.1.1",
  "title": "",
  "body": "  Suppose that and are two eigenfunctions of the problem , , or for two different eigenvalues and . Then they are orthogonal orthogonal functions in the sense that    "
},
{
  "id": "bvp_section-5-5",
  "level": "2",
  "url": "bvp_section.html#bvp_section-5-5",
  "type": "Exercise",
  "number": "4.1.1",
  "title": "",
  "body": "   (easy) Finish the proof of the theorem (check the last equality in the proof) for the cases and .   "
},
{
  "id": "thm_fredholmsimple",
  "level": "2",
  "url": "bvp_section.html#thm_fredholmsimple",
  "type": "Theorem",
  "number": "4.1.2",
  "title": "Fredholm alternative.",
  "body": " Fredholm alternative  Fredholm alternative simple case    Named after the Swedish mathematician Erik Ivar Fredholm (1866–1927). Exactly one of the following statements holds. Either has a nonzero solution, or has a unique solution for every function continuous on .   "
},
{
  "id": "bvp_whirstringfig",
  "level": "2",
  "url": "bvp_section.html#bvp_whirstringfig",
  "type": "Figure",
  "number": "4.1",
  "title": "",
  "body": " Whirling string.   "
},
{
  "id": "bvp_whirstring2fig",
  "level": "2",
  "url": "bvp_section.html#bvp_whirstring2fig",
  "type": "Figure",
  "number": "4.2",
  "title": "",
  "body": " Whirling string at the third eigenvalue ( ).   "
},
{
  "id": "bvp_section-8-2",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-2",
  "type": "Exercise",
  "number": "4.1.2",
  "title": "",
  "body": "  Compute all eigenvalues and eigenfunctions of , , (assume ).   "
},
{
  "id": "bvp_section-8-3",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-3",
  "type": "Exercise",
  "number": "4.1.3",
  "title": "",
  "body": "  Compute all eigenvalues and eigenfunctions of , , (assume ).   "
},
{
  "id": "bvp_section-8-4",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-4",
  "type": "Exercise",
  "number": "4.1.4",
  "title": "",
  "body": "  Compute all eigenvalues and eigenfunctions of , , (assume ).   "
},
{
  "id": "bvp_section-8-5",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-5",
  "type": "Exercise",
  "number": "4.1.5",
  "title": "",
  "body": "  Compute all eigenvalues and eigenfunctions of , , (assume ).   "
},
{
  "id": "bvp_section-8-6",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-6",
  "type": "Exercise",
  "number": "4.1.6",
  "title": "",
  "body": "  We skipped the case of for the boundary value problem , , . Finish the calculation and show that there are no negative eigenvalues.   "
},
{
  "id": "bvp_section-8-7",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-7",
  "type": "Exercise",
  "number": "4.1.101",
  "title": "",
  "body": "  Consider a spinning string of length 2 and linear density 0.1 and tension 3. Find smallest angular velocity when the string pops out.        "
},
{
  "id": "bvp_section-8-8",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-8",
  "type": "Exercise",
  "number": "4.1.102",
  "title": "",
  "body": "  Suppose and , . Find all for which there is more than one solution. Also find the corresponding solutions (only for the eigenvalues).     for    (for any )   "
},
{
  "id": "bvp_section-8-9",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-9",
  "type": "Exercise",
  "number": "4.1.103",
  "title": "",
  "body": "  Suppose and , . Find all the solution(s) if any exist.        "
},
{
  "id": "bvp_section-8-10",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-10",
  "type": "Exercise",
  "number": "4.1.104",
  "title": "",
  "body": "  Consider and , . Why does it not have any eigenvalues? Why does every first-order equation with two endpoint conditions such as above have no eigenvalues?    General solution is . Since then , and so . Therefore, the solution is always identically zero. One condition is always enough to guarantee a unique solution for a first-order equation.   "
},
{
  "id": "bvp_section-8-11",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-11",
  "type": "Exercise",
  "number": "4.1.105",
  "title": "",
  "body": "   (challenging) Suppose and , , . Suppose that . Find an equation that all such eigenvalues must satisfy. Hint: Note that is a root of .        "
},
{
  "id": "ts_section",
  "level": "1",
  "url": "ts_section.html",
  "type": "Section",
  "number": "4.2",
  "title": "The trigonometric series",
  "body": " The trigonometric series   Note: 2 lectures, §9.1 in , §10.2 in    Periodic functions and motivation  As motivation for studying Fourier series, consider the problem for some periodic function . In , we found the general solution to One way to solve is to decompose as a sum of cosines (and sines) and then solve many problems of the form . We then use the principle of superposition, to sum up all the solutions we got to get a solution to .  Before we proceed, let us talk a little bit more in detail about periodic functions. A function is said to be periodic periodic with period if for all . For brevity we say is -periodic. Note that a -periodic function is also -periodic, -periodic and so on. For example, and are -periodic. So are and for all integers . The constant functions are an extreme example. They are periodic for any period (exercise).  Normally we start with a function defined on some interval , and we want to extend periodically extend periodically periodic extension to make it a -periodic function. We do this extension by defining a new function such that for in , . For in , we define , for in , , and so on. To make that work we needed . We could have also started with defined only on the half-open interval and then define .    Define on . Extend periodically to a 2-periodic function. For , we get . For , we get . For , we get . And so on. See .   Periodic extension of the function .      You should be careful to distinguish between and its extension. A common mistake is to assume that a formula for holds for its extension. It can be confusing when the formula for is periodic, but with perhaps a different period.    Define on . Take the -periodic extension and sketch its graph. How does it compare to the graph of ?      Inner product and eigenvector decomposition  Suppose is a symmetric matrix symmetric matrix , that is, . As we remarked before, eigenvectors of are then orthogonal. Here the word orthogonal orthogonal vectors means that if and are two eigenvectors of for distinct eigenvalues, then . In this case, the inner product is the dot product dot product , which can be computed as .  To decompose a vector in terms of mutually orthogonal vectors and , we write Let us find the formula for and . We compute, Therefore, Similarly, You probably remember this formula from vector calculus.    Write as a linear combination of and .  Note that and are orthogonal as . Then Hence,       The trigonometric series  Instead of decomposing a vector in terms of eigenvectors of a matrix, we decompose a function in terms of eigenfunctions of a certain eigenvalue problem. The eigenvalue problem we use for the Fourier series is We computed that eigenfunctions are 1, , . That is, we want to find a representation of a -periodic function as This series is called the Fourier series Fourier series Named after the French mathematician Jean Baptiste Joseph Fourier (1768–1830). or the trigonometric series trigonometric series for . The term is sometimes called the  harmonic harmonic . We write the coefficient of the eigenfunction 1 as for convenience. We could also think of , so that we only need to look at and .  As for matrices, we want to find a projection projection of onto the subspaces given by the eigenfunctions. So we want to define an inner product of functions inner product of functions . For example, to find , we want to compute . We define the inner product as With this inner product, we saw in the previous section that the eigenfunctions (including the constant eigenfunction), and are orthogonal orthogonal functions , that is, For , we have by elementary calculus. For the constant, we get The coefficients are given by Compare these expressions with the finite-dimensional example. For , we get a similar formula   Let us check the formulas via the orthogonality properties. Suppose for a moment that Then for , we have Hence, .    Carry out the calculation for and .      Take the function for in . Extend periodically and write it as a Fourier series. This function is called the sawtooth sawtooth , and it finds many applications, for example, in electronic music.   The graph of the sawtooth function.    The plot of the extended periodic function is given in . Let us compute the coefficients. We start with , We will often use the result from calculus that says that the integral of an odd function over a symmetric interval is zero. Recall that an odd function odd function is a function such that . For example the functions , , or (importantly for us) are all odd functions. Thus We move to . Another useful fact from calculus is that the integral of an even function over a symmetric interval is twice the integral of the same function over half the interval. An even function even function is a function such that . For example, is even. We have used that The series, therefore, is   More explicitly, the first 3 harmonics of the series for are The plot of these first three terms of the series, along with a plot of the first 20 terms is given in .   First 3 (left graph) and 20 (right graph) harmonics of the sawtooth function.        Take the function Extend periodically and write it as a Fourier series. This function or its variants appear often in applications and the function is called the square wave square wave . It is a signal generated by simply periodically flipping a switch on or off.   The graph of the square wave function.    The plot of the extended periodic function is given in . Now we compute the coefficients. We start with  Next, And finally, The Fourier series is   The first 3 harmonics of the series for are The plot of these first three and also of the first 20 terms of the series is given in .   First 3 (left graph) and 20 (right graph) harmonics of the square wave function.      We have so far skirted the issue of convergence. For example, if is the square wave function, the equation is only an equality for such where is continuous. We do not get an equality for and all the other discontinuities of . It is not hard to see that when is an integer multiple of (which gives all the discontinuities), then and so We redefine on as and extend periodically. The series equals this new extended everywhere, including the discontinuities. We will generally not worry about changing the function values at several (finitely many) points.  We will say more about convergence in the next section. Roughly speaking, if is a nice enough function then the series converges to wherever is continuous. Let us, however, briefly mention an effect of the discontinuity. Zoom in near the discontinuity in the square wave. Further, plot the first 100 harmonics, see . While the series is a very good approximation away from the discontinuities, the error (the overshoot) near the discontinuity at does not seem to be getting any smaller as we take more and more harmonics. This behavior is known as the Gibbs phenomenon Gibbs phenomenon . The region where the error is large does get smaller, however, the more terms in the series we take.   Gibbs phenomenon in action.    We can think of a periodic function as a signal that is a superposition of many signals of pure frequency. For example, we could think of the square wave as a tone of certain base frequency coming through the speaker of your computer. This base frequency is called the fundamental frequency fundamental frequency and that is the musical note that you identify this sound as. But the square wave will also be a superposition of many different pure tones of frequencies that are multiples of the fundamental frequency. In music, the higher frequencies are called the overtones overtones . All the frequencies that appear are called the spectrum spectrum of the signal. On the other hand, if the signal were a simple sine wave instead of the square wave, then it is only the pure tone of fundamental frequency (no overtones). The simplest way to make sound using a computer is the square wave, and the sound is very different from a pure tone. If you ever played video games from the 1980s or so, then you heard what square waves sound like.      Suppose is defined on as . Extend periodically and compute the Fourier series of .      Suppose is defined on as . Extend periodically and compute the Fourier series of .      Suppose is defined on as . Extend periodically and compute the Fourier series of .      Suppose is defined on as Extend periodically and compute the Fourier series of .      Suppose is defined on as . Extend periodically and compute the Fourier series of .      Suppose is defined on as . Extend periodically and compute the Fourier series of .    There is another form of the Fourier series using complex exponentials for instead of and for positive . This form may be easier to work with sometimes. It is certainly more compact to write, and there is only one formula for the coefficients. On the downside, the coefficients are complex numbers.    Let Use Euler's formula to show that there exist complex numbers such that Note that the sum now ranges over all the integers including negative ones. Do not worry about convergence in this calculation. Hint: It may be better to start from the complex exponential form and write the series as       Suppose is defined on as . Extend periodically and compute the Fourier series.           Suppose is defined on as . Extend periodically and compute the Fourier series.           Suppose is defined on as . Extend periodically and compute the Fourier series.           Suppose is defined on as . Extend periodically and compute the Fourier series.          "
},
{
  "id": "ts_section-3-5",
  "level": "2",
  "url": "ts_section.html#ts_section-3-5",
  "type": "Example",
  "number": "4.2.1",
  "title": "",
  "body": "  Define on . Extend periodically to a 2-periodic function. For , we get . For , we get . For , we get . And so on. See .   Periodic extension of the function .     "
},
{
  "id": "ts_section-3-7",
  "level": "2",
  "url": "ts_section.html#ts_section-3-7",
  "type": "Exercise",
  "number": "4.2.1",
  "title": "",
  "body": "  Define on . Take the -periodic extension and sketch its graph. How does it compare to the graph of ?   "
},
{
  "id": "ts_section-4-4",
  "level": "2",
  "url": "ts_section.html#ts_section-4-4",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  Write as a linear combination of and .  Note that and are orthogonal as . Then Hence,    "
},
{
  "id": "ts_section-5-5",
  "level": "2",
  "url": "ts_section.html#ts_section-5-5",
  "type": "Exercise",
  "number": "4.2.2",
  "title": "",
  "body": "  Carry out the calculation for and .   "
},
{
  "id": "ts_section-5-6",
  "level": "2",
  "url": "ts_section.html#ts_section-5-6",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": "  Take the function for in . Extend periodically and write it as a Fourier series. This function is called the sawtooth sawtooth , and it finds many applications, for example, in electronic music.   The graph of the sawtooth function.    The plot of the extended periodic function is given in . Let us compute the coefficients. We start with , We will often use the result from calculus that says that the integral of an odd function over a symmetric interval is zero. Recall that an odd function odd function is a function such that . For example the functions , , or (importantly for us) are all odd functions. Thus We move to . Another useful fact from calculus is that the integral of an even function over a symmetric interval is twice the integral of the same function over half the interval. An even function even function is a function such that . For example, is even. We have used that The series, therefore, is   More explicitly, the first 3 harmonics of the series for are The plot of these first three terms of the series, along with a plot of the first 20 terms is given in .   First 3 (left graph) and 20 (right graph) harmonics of the sawtooth function.     "
},
{
  "id": "ts_section-5-7",
  "level": "2",
  "url": "ts_section.html#ts_section-5-7",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": "  Take the function Extend periodically and write it as a Fourier series. This function or its variants appear often in applications and the function is called the square wave square wave . It is a signal generated by simply periodically flipping a switch on or off.   The graph of the square wave function.    The plot of the extended periodic function is given in . Now we compute the coefficients. We start with  Next, And finally, The Fourier series is   The first 3 harmonics of the series for are The plot of these first three and also of the first 20 terms of the series is given in .   First 3 (left graph) and 20 (right graph) harmonics of the square wave function.     "
},
{
  "id": "ts_squarewavegibbsfig",
  "level": "2",
  "url": "ts_section.html#ts_squarewavegibbsfig",
  "type": "Figure",
  "number": "4.8",
  "title": "",
  "body": " Gibbs phenomenon in action.   "
},
{
  "id": "ts_section-6-1",
  "level": "2",
  "url": "ts_section.html#ts_section-6-1",
  "type": "Exercise",
  "number": "4.2.3",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series of .   "
},
{
  "id": "ts_section-6-2",
  "level": "2",
  "url": "ts_section.html#ts_section-6-2",
  "type": "Exercise",
  "number": "4.2.4",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series of .   "
},
{
  "id": "ts_section-6-3",
  "level": "2",
  "url": "ts_section.html#ts_section-6-3",
  "type": "Exercise",
  "number": "4.2.5",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series of .   "
},
{
  "id": "ts_section-6-4",
  "level": "2",
  "url": "ts_section.html#ts_section-6-4",
  "type": "Exercise",
  "number": "4.2.6",
  "title": "",
  "body": "  Suppose is defined on as Extend periodically and compute the Fourier series of .   "
},
{
  "id": "ts_section-6-5",
  "level": "2",
  "url": "ts_section.html#ts_section-6-5",
  "type": "Exercise",
  "number": "4.2.7",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series of .   "
},
{
  "id": "ts_section-6-6",
  "level": "2",
  "url": "ts_section.html#ts_section-6-6",
  "type": "Exercise",
  "number": "4.2.8",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series of .   "
},
{
  "id": "ts_section-6-8",
  "level": "2",
  "url": "ts_section.html#ts_section-6-8",
  "type": "Exercise",
  "number": "4.2.9",
  "title": "",
  "body": "  Let Use Euler's formula to show that there exist complex numbers such that Note that the sum now ranges over all the integers including negative ones. Do not worry about convergence in this calculation. Hint: It may be better to start from the complex exponential form and write the series as    "
},
{
  "id": "ts_section-6-9",
  "level": "2",
  "url": "ts_section.html#ts_section-6-9",
  "type": "Exercise",
  "number": "4.2.101",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series.        "
},
{
  "id": "ts_section-6-10",
  "level": "2",
  "url": "ts_section.html#ts_section-6-10",
  "type": "Exercise",
  "number": "4.2.102",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series.        "
},
{
  "id": "ts_section-6-11",
  "level": "2",
  "url": "ts_section.html#ts_section-6-11",
  "type": "Exercise",
  "number": "4.2.103",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series.        "
},
{
  "id": "ts_section-6-12",
  "level": "2",
  "url": "ts_section.html#ts_section-6-12",
  "type": "Exercise",
  "number": "4.2.104",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series.        "
},
{
  "id": "moreonfourier_section",
  "level": "1",
  "url": "moreonfourier_section.html",
  "type": "Section",
  "number": "4.3",
  "title": "More on the Fourier series",
  "body": " More on the Fourier series   Note: 2 lectures, §9.2–§9.3 in , §10.3 in    -periodic functions  We computed the Fourier series for a -periodic function, but what about functions of different periods. Well, fear not, the computation is a simple case of change of variables. We just rescale the independent axis. Consider a -periodic function . The is called the half period half period . Let . Then the function is -periodic and we know what to do with it. We must also rescale all our sines and cosines. In the series, we use as the variable. That is, we want to write If we change variables to , we see that We compute and as before. After we write down the integrals, we change variables from back to , noting also that .   The two most common half periods that show up in examples are and 1 because of the simplicity of the formulas. We should stress that we have done no new mathematics, we have only changed variables. If you understand the Fourier series for -periodic functions, you understand it for -periodic functions. You can think of it as just using different units for time. All that we are doing is moving some constants around, but all the mathematics is the same.    Let extended periodically. The plot of the periodic extension is given in . Compute the Fourier series of .   Periodic extension of the function .    First, we recognize that is -periodic and so . We want to write . We start with for . We note that is even and for , . Hence, Next we find : You should be able to find this integral by thinking about the integral as the area under the graph without doing any computation at all. Finally, we find . Notice that is odd, and so Hence, the series is   The first few terms of the series up to the harmonic are The plot of these few terms and also a plot up to the harmonic is given in . You should notice how close the graph is to the real function. You should also notice that there is no Gibbs phenomenon present as there are no discontinuities.   Fourier series of up to the harmonic (left graph) and up to the harmonic (right graph).        Convergence  We will need the one sided limits of functions. We will use the following notation If you are unfamiliar with this notation, means we are taking a limit of as approaches from below (i.e. ) and means we are taking a limit of as approaches from above (i.e. ). For example, for the square wave function we have and .  Let be a function defined on an interval . Suppose that we find finitely many points , , , ..., in the interval, such that is continuous on the intervals , , ..., . Also suppose that all the one sided limits exist, that is, all of , , , , , ..., exist and are finite. Then we say is piecewise continuous piecewise continuous .  If moreover, is differentiable at all but finitely many points, and is piecewise continuous, then is said to be piecewise smooth piecewise smooth .    The square wave function, extended periodically, is piecewise smooth on or any other finite interval, so we just say that is piecewise smooth without mentioning an interval.      The function is piecewise smooth.      The function is not piecewise smooth on (or any other interval containing zero). In fact, it is not even piecewise continuous.      The function is not piecewise smooth on (or any other interval containing zero). The function is continuous, but its derivative , is unbounded near zero and hence not piecewise continuous.    Piecewise smooth functions have an easy answer on the convergence of the Fourier series.    Suppose is a -periodic piecewise smooth function. Let be the Fourier series for . Then the series converges for all . If is continuous at , then Otherwise,     If we happen to have that at all the discontinuities, the Fourier series converges to everywhere. We can always just redefine by changing the value at each discontinuity appropriately. Then we can write an equals sign between and the series without any worry. We mentioned this fact briefly at the end last section.  The theorem does not say how fast the series converges. Think back to the discussion of the Gibbs phenomenon in the last section. The closer you get to the discontinuity, the more terms you need to take to get an accurate approximation to the function.    Differentiation and integration of Fourier series  Not only does Fourier series converge nicely, but it is easy to differentiate and integrate the series. We can do this just by differentiating or integrating term by term.    Suppose is a piecewise smooth continuous function and the derivative is piecewise smooth. Then the derivative can be obtained by differentiating term by term,     It is important that the function is continuous. It can have corners, but no jumps. Otherwise, the differentiated series will fail to converge. For an exercise, take the series obtained for the square wave and try to differentiate the series. Similarly to differentiation, integration of Fourier series is also done term by term.    Suppose is a piecewise smooth function. Then the antiderivative is obtained by antidifferentiating term by term and so where and is an arbitrary constant.    Note that the series for is no longer a Fourier series as it contains the term. The antiderivative of a periodic function need no longer be periodic and so we should not expect a Fourier series. Unless, of course, .    Rates of convergence and smoothness  We consider an example of a periodic function differentiable once but not twice.    Take the function and extend to a 2-periodic function. The derivative exists for all , but does not exist if is an integer. In particular, if and if , so has a corner at . See for the plot of and .   Smooth 2-periodic function (the smooth line) with its nonsmooth derivative (the jagged line).      Compute and .    Let us compute the Fourier-series coefficients. The actual computation involves several integrations by parts and is left to the reader. That is, the series is   This series converges very fast. If we plot up to the third harmonic, that is, the plot is almost indistinguishable from the plot of in . In fact, the coefficient is already just 0.0096 (approximately). The reason for this behavior is the term in the denominator. The coefficients in this case go to zero as fast as goes to zero.    For functions constructed piecewise from polynomials as above, it is generally true that if you have one derivative but not two derivatives, the Fourier coefficients will go to zero approximately like . If you have only a continuous function that is not differentiable, then the Fourier coefficients will go to zero as . If you have discontinuities, then the Fourier coefficients will go to zero approximately as . For more general functions the story is somewhat more complicated but the same idea holds, the more derivatives you have, the faster the coefficients go to zero. Similar reasoning works in reverse. If the coefficients go to zero like (or faster), you always obtain a continuous function. If they go to zero like (or faster), you obtain an everywhere differentiable function.  To justify this behavior, take for example the function defined by the Fourier series When we differentiate term by term, we notice Therefore, the coefficients now go down like , which means that we have a continuous function. The derivative of is defined at most points, but there are points where is not differentiable. It has corners, but no jumps. If we differentiate again (where we can), we find that the function , now fails to be continuous (has jumps) This function is similar to the sawtooth. If we tried to differentiate the series again, we would obtain which does not converge!    Use a computer to plot the series we obtained for , and . That is, plot say the first 5 harmonics of the functions. At what points does have the discontinuities?        Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.        Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.        Let extended periodically (period is 20).    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.        Let . Is continuous and differentiable everywhere? Find the derivative (if it exists everywhere) or justify why is not differentiable everywhere.      Let . Is differentiable everywhere? Find the derivative (if it exists everywhere) or justify why is not differentiable everywhere.      Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.        Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.    What does the series converge to at .        Let extended periodically.    Compute the Fourier series for .    By plugging in , evaluate .    Now evaluate .        Let extended periodically. Suppose is the function given by the Fourier series of . Without computing the Fourier series evaluate                                      Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.      a)  b)       Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.      a)  b)       Let Compute .           Let     Find the antiderivative.    Is the antiderivative periodic?      a)  b) no      Let extended periodically.    Compute the Fourier series for .    Plug in to find a series representation for .    Using the first 4 terms of the result from part b) approximate .      a)  b) is continuous at so the Fourier series converges to . Obtain . c) Using the first 4 terms get (quite a bad approximation, you would have to take about 50 terms to start to get to within of ).      Let extended periodically. Suppose is the function given by the Fourier series of . Without computing the Fourier series evaluate                                    a) , b) , c) , d) , e) , f)      "
},
{
  "id": "moreonfourier_section-3-4",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-3-4",
  "type": "Example",
  "number": "4.3.1",
  "title": "",
  "body": "  Let extended periodically. The plot of the periodic extension is given in . Compute the Fourier series of .   Periodic extension of the function .    First, we recognize that is -periodic and so . We want to write . We start with for . We note that is even and for , . Hence, Next we find : You should be able to find this integral by thinking about the integral as the area under the graph without doing any computation at all. Finally, we find . Notice that is odd, and so Hence, the series is   The first few terms of the series up to the harmonic are The plot of these few terms and also a plot up to the harmonic is given in . You should notice how close the graph is to the real function. You should also notice that there is no Gibbs phenomenon present as there are no discontinuities.   Fourier series of up to the harmonic (left graph) and up to the harmonic (right graph).     "
},
{
  "id": "moreonfourier_section-4-5",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-4-5",
  "type": "Example",
  "number": "4.3.2",
  "title": "",
  "body": "  The square wave function, extended periodically, is piecewise smooth on or any other finite interval, so we just say that is piecewise smooth without mentioning an interval.   "
},
{
  "id": "moreonfourier_section-4-6",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-4-6",
  "type": "Example",
  "number": "4.3.3",
  "title": "",
  "body": "  The function is piecewise smooth.   "
},
{
  "id": "moreonfourier_section-4-7",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-4-7",
  "type": "Example",
  "number": "4.3.4",
  "title": "",
  "body": "  The function is not piecewise smooth on (or any other interval containing zero). In fact, it is not even piecewise continuous.   "
},
{
  "id": "moreonfourier_section-4-8",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-4-8",
  "type": "Example",
  "number": "4.3.5",
  "title": "",
  "body": "  The function is not piecewise smooth on (or any other interval containing zero). The function is continuous, but its derivative , is unbounded near zero and hence not piecewise continuous.   "
},
{
  "id": "moreonfourier_section-4-10",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-4-10",
  "type": "Theorem",
  "number": "4.3.1",
  "title": "",
  "body": "  Suppose is a -periodic piecewise smooth function. Let be the Fourier series for . Then the series converges for all . If is continuous at , then Otherwise,    "
},
{
  "id": "moreonfourier_section-5-3",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-5-3",
  "type": "Theorem",
  "number": "4.3.2",
  "title": "",
  "body": "  Suppose is a piecewise smooth continuous function and the derivative is piecewise smooth. Then the derivative can be obtained by differentiating term by term,    "
},
{
  "id": "moreonfourier_section-5-5",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-5-5",
  "type": "Theorem",
  "number": "4.3.3",
  "title": "",
  "body": "  Suppose is a piecewise smooth function. Then the antiderivative is obtained by antidifferentiating term by term and so where and is an arbitrary constant.   "
},
{
  "id": "moreonfourier_section-6-3",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-6-3",
  "type": "Example",
  "number": "4.3.6",
  "title": "",
  "body": "  Take the function and extend to a 2-periodic function. The derivative exists for all , but does not exist if is an integer. In particular, if and if , so has a corner at . See for the plot of and .   Smooth 2-periodic function (the smooth line) with its nonsmooth derivative (the jagged line).      Compute and .    Let us compute the Fourier-series coefficients. The actual computation involves several integrations by parts and is left to the reader. That is, the series is   This series converges very fast. If we plot up to the third harmonic, that is, the plot is almost indistinguishable from the plot of in . In fact, the coefficient is already just 0.0096 (approximately). The reason for this behavior is the term in the denominator. The coefficients in this case go to zero as fast as goes to zero.   "
},
{
  "id": "moreonfourier_section-6-6",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-6-6",
  "type": "Exercise",
  "number": "4.3.2",
  "title": "",
  "body": "  Use a computer to plot the series we obtained for , and . That is, plot say the first 5 harmonics of the functions. At what points does have the discontinuities?   "
},
{
  "id": "moreonfourier_section-7-1",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-1",
  "type": "Exercise",
  "number": "4.3.3",
  "title": "",
  "body": "  Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.     "
},
{
  "id": "moreonfourier_section-7-2",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-2",
  "type": "Exercise",
  "number": "4.3.4",
  "title": "",
  "body": "  Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.     "
},
{
  "id": "moreonfourier_section-7-3",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-3",
  "type": "Exercise",
  "number": "4.3.5",
  "title": "",
  "body": "  Let extended periodically (period is 20).    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.     "
},
{
  "id": "moreonfourier_section-7-4",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-4",
  "type": "Exercise",
  "number": "4.3.6",
  "title": "",
  "body": "  Let . Is continuous and differentiable everywhere? Find the derivative (if it exists everywhere) or justify why is not differentiable everywhere.   "
},
{
  "id": "moreonfourier_section-7-5",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-5",
  "type": "Exercise",
  "number": "4.3.7",
  "title": "",
  "body": "  Let . Is differentiable everywhere? Find the derivative (if it exists everywhere) or justify why is not differentiable everywhere.   "
},
{
  "id": "moreonfourier_section-7-6",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-6",
  "type": "Exercise",
  "number": "4.3.8",
  "title": "",
  "body": "  Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.     "
},
{
  "id": "moreonfourier_section-7-7",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-7",
  "type": "Exercise",
  "number": "4.3.9",
  "title": "",
  "body": "  Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.    What does the series converge to at .     "
},
{
  "id": "moreonfourier_section-7-8",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-8",
  "type": "Exercise",
  "number": "4.3.10",
  "title": "",
  "body": "  Let extended periodically.    Compute the Fourier series for .    By plugging in , evaluate .    Now evaluate .     "
},
{
  "id": "moreonfourier_section-7-9",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-9",
  "type": "Exercise",
  "number": "4.3.11",
  "title": "",
  "body": "  Let extended periodically. Suppose is the function given by the Fourier series of . Without computing the Fourier series evaluate                                   "
},
{
  "id": "moreonfourier_section-7-10",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-10",
  "type": "Exercise",
  "number": "4.3.101",
  "title": "",
  "body": "  Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.      a)  b)    "
},
{
  "id": "moreonfourier_section-7-11",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-11",
  "type": "Exercise",
  "number": "4.3.102",
  "title": "",
  "body": "  Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.      a)  b)    "
},
{
  "id": "moreonfourier_section-7-12",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-12",
  "type": "Exercise",
  "number": "4.3.103",
  "title": "",
  "body": "  Let Compute .        "
},
{
  "id": "moreonfourier_section-7-13",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-13",
  "type": "Exercise",
  "number": "4.3.104",
  "title": "",
  "body": "  Let     Find the antiderivative.    Is the antiderivative periodic?      a)  b) no   "
},
{
  "id": "moreonfourier_section-7-14",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-14",
  "type": "Exercise",
  "number": "4.3.105",
  "title": "",
  "body": "  Let extended periodically.    Compute the Fourier series for .    Plug in to find a series representation for .    Using the first 4 terms of the result from part b) approximate .      a)  b) is continuous at so the Fourier series converges to . Obtain . c) Using the first 4 terms get (quite a bad approximation, you would have to take about 50 terms to start to get to within of ).   "
},
{
  "id": "moreonfourier_section-7-15",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-15",
  "type": "Exercise",
  "number": "4.3.106",
  "title": "",
  "body": "  Let extended periodically. Suppose is the function given by the Fourier series of . Without computing the Fourier series evaluate                                    a) , b) , c) , d) , e) , f)    "
},
{
  "id": "sec_scs",
  "level": "1",
  "url": "sec_scs.html",
  "type": "Section",
  "number": "4.4",
  "title": "Sine and cosine series",
  "body": " Sine and cosine series   Note: 2 lectures, §9.3 in , §10.4 in    Odd and even periodic functions  You may have noticed by now that an odd function has no cosine terms in the Fourier series and an even function has no sine terms in the Fourier series. This observation is not a coincidence. Let us look at even and odd periodic functions in more detail.  Recall that a function is odd odd function if . A function is even even function if . For example, is even and is odd. Similarly the function is even if is even and odd if is odd.    Take two functions and and define their product .    Suppose both and are odd. Is odd or even?    Suppose one is even and one is odd. Is odd or even?    Suppose both are even. Is odd or even?      If and are both odd, then is odd. Similarly for even functions. On the other hand, if is odd and even, then we cannot say anything about the sum . In fact, the Fourier series of any function is a sum of an odd (the sine terms) and an even (the cosine terms) function.  In this section, we consider odd and even periodic functions. We have previously defined the -periodic extension of a function defined on the interval . Sometimes we are only interested in the function on the range , and it would be convenient to have an odd (resp. even) function. If the function is odd (resp. even), all the cosine (resp. sine) terms disappear. What we will do is take the odd (resp. even) extension of the function to and then extend periodically to a -periodic function.  Take a function defined on . On define the functions Extend and to be -periodic. Then is called the odd periodic extension odd periodic extension of , and is called the even periodic extension even periodic extension of . For the odd extension, we generally assume that .    Check that is odd and is even. For , assume .      Take the function defined on . shows the plots of the odd and even periodic extensions of .   Odd and even 2-periodic extension of , .        Sine and cosine series  Let be an odd -periodic function. We write the Fourier series for . First, we compute the coefficients (including ) and get That is, the Fourier series of an odd function has no cosine terms. The integral is zero as is an odd function (product of an odd and an even function is odd) and the integral of an odd function over a symmetric interval is zero. The function is even as it is the product of two odd functions. The integral of an even function over a symmetric interval is twice the integral of the function over the interval . So The Fourier series of an odd is then   Similarly, if is an even -periodic function. For the same exact reasons as above, we find that and The formula still works for , in which case it becomes The Fourier series of an even is then   An interesting consequence is that the coefficients of the Fourier series of an odd (or even) function can be computed by just integrating over the half interval . Therefore, we can compute the Fourier series of the odd (or even) extension of a function by computing certain integrals over the interval where the original function is defined.    Let be a piecewise smooth function defined on . Then the odd periodic extension of has the Fourier series where The even periodic extension of has the Fourier series where     We call the series the sine series sine series of and we call the series the cosine series cosine series of . We often do not actually care what happens outside of . We simply pick whichever series fits our problem better.  It is not necessary to start with the full Fourier series to obtain the sine and cosine series. The sine series is really the eigenfunction expansion of using eigenfunctions of the eigenvalue problem , , . The cosine series is the eigenfunction expansion of using eigenfunctions of the eigenvalue problem , , . We would, therefore, get the same formulas by defining the inner product and following the procedure of . This point of view is useful, as we commonly use a specific series that arose because our underlying question led to a certain eigenvalue problem. If the eigenvalue problem is not one of the three we covered so far, you can still do an eigenfunction expansion, generalizing the results of this chapter. We will deal with such a generalization in .    Find the Fourier series of the even periodic extension of the function for .  We want to write where and Note that we detected the continuity of the extension since the coefficients decay as . That is, the even periodic extension of has no jump discontinuities. It does have corners, since the derivative, which is an odd function and a sine series, has jumps; it has a Fourier series whose coefficients decay only as .  Explicitly, the first few terms of the series for are           Compute the derivative of the even periodic extension of above and verify it has jump discontinuities. Use the actual definition of , not its cosine series!    Why is it that the derivative of the even periodic extension of is the odd periodic extension of ?        Application  Fourier series ties in to the boundary value problems that we studied earlier. Consider the boundary value problem with the Dirichlet boundary conditions Dirichlet boundary conditions  , . The Fredholm alternative ( ) says that as long as is not an eigenvalue of the underlying homogeneous problem, there exists a unique solution. Eigenfunctions of this eigenvalue problem are the functions . To find the solution, we first find the Fourier sine series for . We write also as a sine series, but with unknown coefficients. We substitute the series for into the equation and solve for the unknown coefficients. If we have the Neumann boundary conditions Neumann boundary conditions  , , we do the same procedure using the cosine series. Let us see how this method works on examples.    Take the boundary value problem where on , and satisfying the Dirichlet boundary conditions , . We write as a sine series Compute We write as We plug in to obtain Therefore, or That is not zero for any , and that we can solve for , is precisely because is not an eigenvalue of the problem. We have thus obtained a Fourier series for the solution See for a graph of the solution. Notice that because the eigenfunctions satisfy the boundary conditions, and is written in terms of the boundary conditions, then satisfies the boundary conditions.   Plot of the solution of , , .        We handle the Neumann conditions with cosine series. Take the boundary value problem where again on , but now satisfying the Neumann boundary conditions , . We write as a cosine series where and We write as a cosine series We plug in to obtain Therefore, , for even ( ), and for odd, we have or The Fourier series for the solution is         Take defined on .    Sketch the plot of the even periodic extension of .    Sketch the plot of the odd periodic extension of .        Find the Fourier series of both the odd and even periodic extension of the function for . Can you tell which extension is continuous from the Fourier-series coefficients?      Find the Fourier series of both the odd and even periodic extension of the function for .      Find the Fourier series of the even periodic extension of the function for .      Consider where on .    Solve for the Dirichlet conditions .    Solve for the Neumann conditions .        Consider for on .    Solve for the Dirichlet conditions .    Solve for the Neumann conditions .        Consider where . Write the solution as a Fourier series, where the coefficients are given in terms of .      Let for . Let be the odd periodic extension. Compute , , , , , , . Note: Do not compute the sine series.      Let on .    Find the Fourier series of the even periodic extension.    Find the Fourier series of the odd periodic extension.      a)  b)       Let on .    Find the Fourier series of the even periodic extension.    Find the Fourier series of the odd periodic extension.      a)  b)       Let be defined on . Consider the average of the two extensions .    What is if (Justify!)    What is if (Justify!)      a)  b)       Let . Solve for the Dirichlet conditions and .            (challenging) Let . Solve for the Dirichlet conditions and . Hint: Note that satisfies the given Dirichlet conditions.          "
},
{
  "id": "sec_scs-3-4",
  "level": "2",
  "url": "sec_scs.html#sec_scs-3-4",
  "type": "Exercise",
  "number": "4.4.1",
  "title": "",
  "body": "  Take two functions and and define their product .    Suppose both and are odd. Is odd or even?    Suppose one is even and one is odd. Is odd or even?    Suppose both are even. Is odd or even?     "
},
{
  "id": "sec_scs-3-8",
  "level": "2",
  "url": "sec_scs.html#sec_scs-3-8",
  "type": "Exercise",
  "number": "4.4.2",
  "title": "",
  "body": "  Check that is odd and is even. For , assume .   "
},
{
  "id": "sec_scs-3-9",
  "level": "2",
  "url": "sec_scs.html#sec_scs-3-9",
  "type": "Example",
  "number": "4.4.1",
  "title": "",
  "body": "  Take the function defined on . shows the plots of the odd and even periodic extensions of .   Odd and even 2-periodic extension of , .     "
},
{
  "id": "sec_scs-4-5",
  "level": "2",
  "url": "sec_scs.html#sec_scs-4-5",
  "type": "Theorem",
  "number": "4.4.1",
  "title": "",
  "body": "  Let be a piecewise smooth function defined on . Then the odd periodic extension of has the Fourier series where The even periodic extension of has the Fourier series where    "
},
{
  "id": "sec_scs-4-8",
  "level": "2",
  "url": "sec_scs.html#sec_scs-4-8",
  "type": "Example",
  "number": "4.4.2",
  "title": "",
  "body": "  Find the Fourier series of the even periodic extension of the function for .  We want to write where and Note that we detected the continuity of the extension since the coefficients decay as . That is, the even periodic extension of has no jump discontinuities. It does have corners, since the derivative, which is an odd function and a sine series, has jumps; it has a Fourier series whose coefficients decay only as .  Explicitly, the first few terms of the series for are    "
},
{
  "id": "sec_scs-4-9",
  "level": "2",
  "url": "sec_scs.html#sec_scs-4-9",
  "type": "Exercise",
  "number": "4.4.3",
  "title": "",
  "body": "      Compute the derivative of the even periodic extension of above and verify it has jump discontinuities. Use the actual definition of , not its cosine series!    Why is it that the derivative of the even periodic extension of is the odd periodic extension of ?     "
},
{
  "id": "sec_scs-5-3",
  "level": "2",
  "url": "sec_scs.html#sec_scs-5-3",
  "type": "Example",
  "number": "4.4.3",
  "title": "",
  "body": "  Take the boundary value problem where on , and satisfying the Dirichlet boundary conditions , . We write as a sine series Compute We write as We plug in to obtain Therefore, or That is not zero for any , and that we can solve for , is precisely because is not an eigenvalue of the problem. We have thus obtained a Fourier series for the solution See for a graph of the solution. Notice that because the eigenfunctions satisfy the boundary conditions, and is written in terms of the boundary conditions, then satisfies the boundary conditions.   Plot of the solution of , , .     "
},
{
  "id": "sec_scs-5-4",
  "level": "2",
  "url": "sec_scs.html#sec_scs-5-4",
  "type": "Example",
  "number": "4.4.4",
  "title": "",
  "body": "  We handle the Neumann conditions with cosine series. Take the boundary value problem where again on , but now satisfying the Neumann boundary conditions , . We write as a cosine series where and We write as a cosine series We plug in to obtain Therefore, , for even ( ), and for odd, we have or The Fourier series for the solution is    "
},
{
  "id": "sec_scs-6-1",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-1",
  "type": "Exercise",
  "number": "4.4.4",
  "title": "",
  "body": "  Take defined on .    Sketch the plot of the even periodic extension of .    Sketch the plot of the odd periodic extension of .     "
},
{
  "id": "sec_scs-6-2",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-2",
  "type": "Exercise",
  "number": "4.4.5",
  "title": "",
  "body": "  Find the Fourier series of both the odd and even periodic extension of the function for . Can you tell which extension is continuous from the Fourier-series coefficients?   "
},
{
  "id": "sec_scs-6-3",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-3",
  "type": "Exercise",
  "number": "4.4.6",
  "title": "",
  "body": "  Find the Fourier series of both the odd and even periodic extension of the function for .   "
},
{
  "id": "sec_scs-6-4",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-4",
  "type": "Exercise",
  "number": "4.4.7",
  "title": "",
  "body": "  Find the Fourier series of the even periodic extension of the function for .   "
},
{
  "id": "sec_scs-6-5",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-5",
  "type": "Exercise",
  "number": "4.4.8",
  "title": "",
  "body": "  Consider where on .    Solve for the Dirichlet conditions .    Solve for the Neumann conditions .     "
},
{
  "id": "sec_scs-6-6",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-6",
  "type": "Exercise",
  "number": "4.4.9",
  "title": "",
  "body": "  Consider for on .    Solve for the Dirichlet conditions .    Solve for the Neumann conditions .     "
},
{
  "id": "sec_scs-6-7",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-7",
  "type": "Exercise",
  "number": "4.4.10",
  "title": "",
  "body": "  Consider where . Write the solution as a Fourier series, where the coefficients are given in terms of .   "
},
{
  "id": "sec_scs-6-8",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-8",
  "type": "Exercise",
  "number": "4.4.11",
  "title": "",
  "body": "  Let for . Let be the odd periodic extension. Compute , , , , , , . Note: Do not compute the sine series.   "
},
{
  "id": "sec_scs-6-9",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-9",
  "type": "Exercise",
  "number": "4.4.101",
  "title": "",
  "body": "  Let on .    Find the Fourier series of the even periodic extension.    Find the Fourier series of the odd periodic extension.      a)  b)    "
},
{
  "id": "sec_scs-6-10",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-10",
  "type": "Exercise",
  "number": "4.4.102",
  "title": "",
  "body": "  Let on .    Find the Fourier series of the even periodic extension.    Find the Fourier series of the odd periodic extension.      a)  b)    "
},
{
  "id": "sec_scs-6-11",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-11",
  "type": "Exercise",
  "number": "4.4.103",
  "title": "",
  "body": "  Let be defined on . Consider the average of the two extensions .    What is if (Justify!)    What is if (Justify!)      a)  b)    "
},
{
  "id": "sec_scs-6-12",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-12",
  "type": "Exercise",
  "number": "4.4.104",
  "title": "",
  "body": "  Let . Solve for the Dirichlet conditions and .        "
},
{
  "id": "sec_scs-6-13",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-13",
  "type": "Exercise",
  "number": "4.4.105",
  "title": "",
  "body": "   (challenging) Let . Solve for the Dirichlet conditions and . Hint: Note that satisfies the given Dirichlet conditions.        "
},
{
  "id": "appoffourier_section",
  "level": "1",
  "url": "appoffourier_section.html",
  "type": "Section",
  "number": "4.5",
  "title": "Applications of Fourier series",
  "body": " Applications of Fourier series   Note: 2 lectures, §9.4 in , not in    Periodically forced oscillation     We return to the forced oscillations. Consider a mass-spring system as before, where we have a mass on a spring with spring constant , with damping , and a force applied to the mass. Suppose the forcing function is -periodic for some . We saw this problem in with . The equation that governs this particular setup is   The general solution of consists of the complementary solution , which solves the associated homogeneous equation , and a particular solution of we call . For , the complementary solution will decay as time goes by. Therefore, we are mostly interested in a particular solution that does not decay and is periodic with the same period as . We call this particular solution the steady periodic solution steady periodic solution and we write it as as before. What is new in this section is that we consider an arbitrary forcing function instead of a simple cosine.  For simplicity, suppose . The problem with is very similar. The equation has the general solution where . Any solution to is of the form . The steady periodic solution has the same period as .  In the spirit of the last section and the idea of undetermined coefficients we first write Then we write a proposed steady periodic solution as where and are unknowns. We plug into the differential equation and solve for and in terms of and . This process is perhaps best understood by example.    Suppose that and . The units are again the mks units mks units (meters-kilograms-seconds). There is a jetpack strapped to the mass, which fires with a force of 1 newton for 1 second and then is off for 1 second, and so on. We want to find the steady periodic solution.  The equation is, therefore, where is the step function extended periodically. We write We compute So   We want to try Once we plug into the differential equation , it is clear that for as there are no corresponding terms in the series for . Similarly, for even . Hence we try We plug into the differential equation and obtain So , for even , and for odd , we get   The steady periodic solution has the Fourier series We know this is the steady periodic solution as it contains no terms of the complementary solution and it is periodic with the same period as itself. See for the plot of this solution.   Plot of the steady periodic solution of .        Resonance  Just as when the forcing function was a simple cosine, we may encounter resonance. We assume and so we discuss only pure resonance. Let be -periodic and consider When we expand and find that some of its terms coincide with the complementary solution to , we cannot use those terms in the guess. Just like before, they disappear when we plug them into the left-hand side, and we get a contradictory equation (such as ). That is, suppose where for some positive integer . We have to modify our guess and try In other words, we multiply the offending term by . From then on, we proceed as before.  The solution is not a Fourier series (it is not even periodic) since it contains these terms multiplied by . The terms eventually dominate and lead to wild oscillations. As before, this behavior is called pure resonance pure resonance or just resonance resonance .  Note that we may hit the resonance frequency with infinitely many terms (overtones) of the forcing function . That is, suppose we use the same shape for , and we change the base frequency (we change the ). Then different terms from the Fourier series of may interfere with the complementary solution, that is, for some , and possibly cause resonance. Theoretically, infinitely many base frequencies could cause resonance, however, we should note that since everything is an approximation to any real life application, only the first few terms of , and hence only a few such frequencies, would matter in real life.    We want to solve the equation where extended periodically. We note that     Compute the Fourier series of to verify the equation above.    As , the solution to is for some particular solution .  If we just try an given as a Fourier series with as usual, the complementary equation, , eats our harmonic. That is, the term with is already in our complementary solution. Therefore, we pull that term out and multiply it by . We also add a cosine term to get everything right. That is, we try We compute the second derivative. We now plug into the left-hand side of the differential equation. We simplify, This series has to equal to the series for . We equate the coefficients and solve for and : That is,     When , you do not have to worry about pure resonance. There are never any conflicts, and you do not need to multiply any terms by . There is a corresponding concept of practical resonance, practical resonance, and it is very similar to the ideas we already explored in . Basically, what happens in practical resonance is that one of the coefficients in the series for can get very big. Let us not go into details here.      Let . Find the steady periodic solution to . Express your solution as a Fourier series.      Let . Find the steady periodic solution to . Express your solution as a Fourier series.      Let . Find the steady periodic solution to . Express your solution as a Fourier series.      Let for and extended periodically. Find the steady periodic solution to . Express your solution as a series.      Let for and extended periodically. Find the steady periodic solution to . Express your solution as a series.      Let . Find the steady periodic solution to . Express your solution as a Fourier series.           Let . Find the steady periodic solution to . Express your solution as a Fourier series.           Let for extended periodically. Find the steady periodic solution to . Express your solution as a series.           Let for extended periodically. Find the steady periodic solution to . Express your solution as a series.          "
},
{
  "id": "afs_steadyex",
  "level": "2",
  "url": "appoffourier_section.html#afs_steadyex",
  "type": "Example",
  "number": "4.5.1",
  "title": "",
  "body": "  Suppose that and . The units are again the mks units mks units (meters-kilograms-seconds). There is a jetpack strapped to the mass, which fires with a force of 1 newton for 1 second and then is off for 1 second, and so on. We want to find the steady periodic solution.  The equation is, therefore, where is the step function extended periodically. We write We compute So   We want to try Once we plug into the differential equation , it is clear that for as there are no corresponding terms in the series for . Similarly, for even . Hence we try We plug into the differential equation and obtain So , for even , and for odd , we get   The steady periodic solution has the Fourier series We know this is the steady periodic solution as it contains no terms of the complementary solution and it is periodic with the same period as itself. See for the plot of this solution.   Plot of the steady periodic solution of .     "
},
{
  "id": "appoffourier_section-4-5",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-4-5",
  "type": "Example",
  "number": "4.5.2",
  "title": "",
  "body": "  We want to solve the equation where extended periodically. We note that     Compute the Fourier series of to verify the equation above.    As , the solution to is for some particular solution .  If we just try an given as a Fourier series with as usual, the complementary equation, , eats our harmonic. That is, the term with is already in our complementary solution. Therefore, we pull that term out and multiply it by . We also add a cosine term to get everything right. That is, we try We compute the second derivative. We now plug into the left-hand side of the differential equation. We simplify, This series has to equal to the series for . We equate the coefficients and solve for and : That is,    "
},
{
  "id": "appoffourier_section-5-1",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-1",
  "type": "Exercise",
  "number": "4.5.2",
  "title": "",
  "body": "  Let . Find the steady periodic solution to . Express your solution as a Fourier series.   "
},
{
  "id": "appoffourier_section-5-2",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-2",
  "type": "Exercise",
  "number": "4.5.3",
  "title": "",
  "body": "  Let . Find the steady periodic solution to . Express your solution as a Fourier series.   "
},
{
  "id": "appoffourier_section-5-3",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-3",
  "type": "Exercise",
  "number": "4.5.4",
  "title": "",
  "body": "  Let . Find the steady periodic solution to . Express your solution as a Fourier series.   "
},
{
  "id": "appoffourier_section-5-4",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-4",
  "type": "Exercise",
  "number": "4.5.5",
  "title": "",
  "body": "  Let for and extended periodically. Find the steady periodic solution to . Express your solution as a series.   "
},
{
  "id": "appoffourier_section-5-5",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-5",
  "type": "Exercise",
  "number": "4.5.6",
  "title": "",
  "body": "  Let for and extended periodically. Find the steady periodic solution to . Express your solution as a series.   "
},
{
  "id": "appoffourier_section-5-6",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-6",
  "type": "Exercise",
  "number": "4.5.101",
  "title": "",
  "body": "  Let . Find the steady periodic solution to . Express your solution as a Fourier series.        "
},
{
  "id": "appoffourier_section-5-7",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-7",
  "type": "Exercise",
  "number": "4.5.102",
  "title": "",
  "body": "  Let . Find the steady periodic solution to . Express your solution as a Fourier series.        "
},
{
  "id": "appoffourier_section-5-8",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-8",
  "type": "Exercise",
  "number": "4.5.103",
  "title": "",
  "body": "  Let for extended periodically. Find the steady periodic solution to . Express your solution as a series.        "
},
{
  "id": "appoffourier_section-5-9",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-9",
  "type": "Exercise",
  "number": "4.5.104",
  "title": "",
  "body": "  Let for extended periodically. Find the steady periodic solution to . Express your solution as a series.        "
},
{
  "id": "heateq_section",
  "level": "1",
  "url": "heateq_section.html",
  "type": "Section",
  "number": "4.6",
  "title": "PDEs, separation of variables, and the heat equation",
  "body": " PDEs, separation of variables, and the heat equation   Note: 2 lectures, §9.5 in , §10.5 in  Recall that a partial differential equation partial differential equation or PDE PDE is an equation containing the partial derivatives with respect to several independent variables. Solving PDEs will be our main application of Fourier series.  A PDE is said to be linear linear PDE if the dependent variable and its derivatives appear at most to the first power and in no functions. We will only talk about linear PDEs. Together with a PDE, we usually specify some boundary conditions boundary conditions for a PDE , where the value of the solution or its derivatives is given along the boundary of a region, and\/or some initial conditions initial conditions for a PDE where the value of the solution or its derivatives is given for some initial time. Sometimes such conditions are mixed together and we will refer to them simply as side conditions side conditions for a PDE .  We will study three specific partial differential equations, each one representing a general class of equations. First, we will study the heat equation heat equation , which is an example of a parabolic PDE parabolic PDE . Next, we will study the wave equation wave equation , which is an example of a hyperbolic PDE hyperbolic PDE . Finally, we will study the Laplace equation Laplace equation , which is an example of an elliptic PDE elliptic PDE . Each of our examples will illustrate behavior that is typical for the whole class.    Heat on an insulated wire  We start with the heat equation. Consider a wire (or a thin metal rod) of length insulated along its length except at the endpoints. Let denote the position along the wire and let denote time. See .   Insulated wire.    Let denote the temperature at point at time . The equation governing this setup is the so-called one-dimensional heat equation one-dimensional heat equation heat equation : where is a constant (the thermal conductivity thermal conductivity of the material). That is, the change in heat with respect to time at some point is proportional to the second derivative of the heat in the direction—along the wire. This makes sense; if at a fixed the graph of the heat distribution has a maximum (the graph is concave down and the second derivative is negative), then heat should flow away from the maximum and so the derivative should also be negative. Similarly at a minimum, heat wants to flow in.  We generally use a more convenient notation for partial derivatives. We write instead of , and we write instead of . With this notation the heat equation becomes   The region in which we will solve the heat equation is given by      We must also have some side conditions on the boundaries of that region. We assume that the ends of the wire are either exposed and touching some body of constant heat, or the ends are insulated. If the ends of the wire are kept at temperature 0, then the conditions are If, on the other hand, the ends are insulated, the conditions are Let us see why that is so. If is positive at some point , then at a particular time, is smaller to the left of and higher to the right of . Heat is flowing from high heat to low heat, that is, to the left. On the other hand, if is negative, then heat is again flowing from high heat to low heat, that is, to the right. So when is zero, we are at a point where heat is not flowing in either direction. In other words, means no heat is flowing in or out of the wire at the point .  We have two conditions along the -axis as there are two derivatives in the direction. These side conditions are said to be homogeneous homogeneous side conditions (i.e. or a derivative of is set to zero).  We also need an initial condition—the temperature distribution at time . That is, for some known function . This initial condition is not a homogeneous side condition.    Separation of variables  The heat equation is linear as and its derivatives do not appear to any powers or in any functions, and it is homogeneous—there is no term independent of . Thus the principle of superposition superposition still applies for the heat equation (without side conditions): If and are solutions and , are constants, then is also a solution.    Verify the principle of superposition for the heat equation.    Superposition preserves some side conditions. If and are solutions that satisfy and , and , are constants, then is still a solution that satisfies and . Similarly for the side conditions and . In general, superposition preserves all homogeneous side conditions.  The method of separation of variables separation of variables is to try to find solutions that are products of functions of one variable. For the heat equation, we try to find solutions of the form That the desired particular solution we are looking for is of this form is too much to hope for. What is perfectly reasonable to ask, however, is to find enough building-block solutions of the form using this procedure so that the desired solution to the PDE is somehow constructed from these building blocks by the use of superposition.  Let us try to solve the heat equation problem We guess . We will try to make this guess satisfy the differential equation, , and the homogeneous side conditions, and . Then, as superposition preserves the differential equation and the homogeneous side conditions, we will try to build up a solution from these building blocks to solve the nonhomogeneous initial condition .  First, we plug into the heat equation to obtain We rewrite as This equation must hold for all and all . But the left-hand side does not depend on and the right-hand side does not depend on . Hence, each side must be a constant. Let us call this constant (the minus sign is for convenience later). We obtain the two equations In other words, The boundary condition implies . We are looking for a nontrivial solution, and so we can assume that is not identically zero. Hence . Similarly, implies . We are looking for nontrivial solutions of the eigenvalue problem , , . We have previously found that the only eigenvalues are , for integers , where eigenfunctions are . Hence, let us pick the solutions The corresponding must satisfy the equation This is one of our fundamental equations , and the solution is an exponential: where we picked the particular solution where conveniently . Our building-block solutions are   We note that . We write as the sine series That is, we find the Fourier series of the odd periodic extension of . We used the sine series as it corresponds to the eigenvalue problem for above. Finally, we use superposition to write the solution as   Why does this solution work? First note that it is a solution to the heat equation by superposition. It satisfies and , because or makes all the sines vanish. Finally, plugging in , we notice that , and so     Consider an insulated wire of length 1 whose ends are embedded in ice (temperature 0). Let and let the initial heat distribution be . See . Suppose we want to find the temperature function . In particular, suppose we want to find when (at what time ) does the maximum temperature in the wire drop to one half of the initial maximum of 12.5.   Initial distribution of temperature in the wire.    We are solving the following PDE problem: Write for as a sine series , where We plug in these coefficients into the series for to obtain the solution We plot the solution in for .   Plot of the temperature of the wire at position at time for . Notice the side conditions and how the exponential makes the temperature decay with time.    Finally, we answer the question about the maximum temperature. It is relatively easy to see that the maximum temperature at any fixed time is always at , in the middle of the wire. The plot of confirms this intuition. If we plug in , we get For and higher (remember is only odd), the terms of the series are insignificant compared to the first term. The first term in the series is already a very good approximation of the function. Hence The approximation gets better and better as gets larger as the other terms decay much faster. We plot the function , the temperature at the midpoint of the wire at time , and its approximation by the first term in .   Temperature at the midpoint of the wire (the bottom curve), and the approximation of this temperature by using only the first term in the series (top curve).    After or so, it would be hard to tell the difference between the first term of the series for and the real solution . This behavior is a general feature of solving the heat equation. If you are interested in behavior for large enough , only the first one or two terms may be necessary.  We get back to the question of when is the maximum temperature one half of the initial maximum temperature. That is, when is the temperature at the midpoint . The graph suggests that the approximation by the first term will be close enough. We solve That is, So the maximum temperature drops to half at about .    We mention an interesting behavior of the solution to the heat equation. The heat equation smoothes out the function as grows. For a fixed , the solution is a Fourier series with coefficients . If , then these coefficients go to zero faster than any for any power . In other words, the Fourier series has infinitely many derivatives everywhere. Thus even if the function has jumps and corners, then for a fixed , the solution as a function of is as smooth as we want it to be.    When the initial condition is already a sine series, then there is no need to compute anything, you just need to plug in. Consider The solution is then       Insulated ends  Now suppose the ends of the wire are insulated. In this case, we are solving the problem Yet again we try a solution of the form . By the same procedure as before, we plug into the heat equation and arrive at the following two equations: At this point, the story changes slightly. The boundary condition implies . Hence . Similarly, implies . We want nontrivial solutions of the eigenvalue problem , , . We previously found that the only eigenvalues are , for integers , where eigenfunctions are (we include the constant eigenfunction). We pick the solutions The corresponding must satisfy the equation For , as before, For , we have and hence . Our building-block solutions are and   We note that . We write using the cosine series That is, we find the Fourier series of the even periodic extension of .  We use superposition to write the solution as     Try the same equation as before, but with insulated ends. We are solving the following PDE problem   For this problem, we must find the cosine series of . For , we have The calculation is left to the reader. Hence, the solution to the PDE problem, plotted in , is given by the series    Plot of the temperature of the insulated wire at position at time .    Note in the graph that as time goes on, the temperature evens out across the wire. Eventually, all the terms except the constant die out, and you will be left with a uniform temperature of along the entire length of the wire.    Let us expand on the last point. The constant term in the series is In other words, is the average value of , that is, the average of the initial temperature. As the wire is insulated everywhere, no heat can get out, no heat can get in. So the temperature tries to distribute evenly over time, and the average temperature must always be the same, in particular, it is always . As time goes to infinity, the temperature goes to the constant everywhere.      Consider a wire of length 2, with and an initial temperature distribution . Both ends are embedded in ice (temperature 0). Find the solution as a series.      Find a series solution of       Find a series solution of       Find a series solution of       Find a series solution of Hint: Use the fact that is a solution satisfying , , . Then use superposition.      Find the steady-state temperature steady-state temperature solution as a function of alone, by letting in the solution from exercises and . Verify that it satisfies the equation .      Use separation variables to find a nontrivial solution to , where and . Hint: Try .       (challenging) Suppose that one end of the wire is insulated (say at ) and the other end is kept at zero temperature. That is, find a series solution of Express any coefficients in the series by integrals of .       (challenging) Suppose that the wire is circular and insulated, so there are no ends. You can think of this as simply connecting the two ends and making sure the solution matches up at the ends. That is, find a series solution of Express any coefficients in the series by integrals of .      Consider a wire insulated on both ends, , , and .    Find the solution . Hint: a trig identity.    Find the average temperature.    Initially the temperature variation is 1 (maximum minus the minimum). Find the time when the variation is .        Find a series solution of            Find a series solution of            Use separation of variables to find a nontrivial solution to .     for some       Use a variation on separation of variables to find a nontrivial solution to . Hint: Try .           Suppose that the temperature on the wire is fixed at at the ends, , , and .    What is the temperature at at any time.    What is the maximum and the minimum temperature on the wire at .    At what time is the maximum temperature on the wire exactly one half of the initial maximum at .      a) , b) minimum , maximum , c) .     "
},
{
  "id": "heat_wirefig",
  "level": "2",
  "url": "heateq_section.html#heat_wirefig",
  "type": "Figure",
  "number": "4.15",
  "title": "",
  "body": " Insulated wire.   "
},
{
  "id": "heateq_section-4-3",
  "level": "2",
  "url": "heateq_section.html#heateq_section-4-3",
  "type": "Exercise",
  "number": "4.6.1",
  "title": "",
  "body": "  Verify the principle of superposition for the heat equation.   "
},
{
  "id": "heateq_section-4-10",
  "level": "2",
  "url": "heateq_section.html#heateq_section-4-10",
  "type": "Example",
  "number": "4.6.1",
  "title": "",
  "body": "  Consider an insulated wire of length 1 whose ends are embedded in ice (temperature 0). Let and let the initial heat distribution be . See . Suppose we want to find the temperature function . In particular, suppose we want to find when (at what time ) does the maximum temperature in the wire drop to one half of the initial maximum of 12.5.   Initial distribution of temperature in the wire.    We are solving the following PDE problem: Write for as a sine series , where We plug in these coefficients into the series for to obtain the solution We plot the solution in for .   Plot of the temperature of the wire at position at time for . Notice the side conditions and how the exponential makes the temperature decay with time.    Finally, we answer the question about the maximum temperature. It is relatively easy to see that the maximum temperature at any fixed time is always at , in the middle of the wire. The plot of confirms this intuition. If we plug in , we get For and higher (remember is only odd), the terms of the series are insignificant compared to the first term. The first term in the series is already a very good approximation of the function. Hence The approximation gets better and better as gets larger as the other terms decay much faster. We plot the function , the temperature at the midpoint of the wire at time , and its approximation by the first term in .   Temperature at the midpoint of the wire (the bottom curve), and the approximation of this temperature by using only the first term in the series (top curve).    After or so, it would be hard to tell the difference between the first term of the series for and the real solution . This behavior is a general feature of solving the heat equation. If you are interested in behavior for large enough , only the first one or two terms may be necessary.  We get back to the question of when is the maximum temperature one half of the initial maximum temperature. That is, when is the temperature at the midpoint . The graph suggests that the approximation by the first term will be close enough. We solve That is, So the maximum temperature drops to half at about .   "
},
{
  "id": "heateq_section-4-12",
  "level": "2",
  "url": "heateq_section.html#heateq_section-4-12",
  "type": "Example",
  "number": "4.6.2",
  "title": "",
  "body": "  When the initial condition is already a sine series, then there is no need to compute anything, you just need to plug in. Consider The solution is then    "
},
{
  "id": "heateq_section-5-5",
  "level": "2",
  "url": "heateq_section.html#heateq_section-5-5",
  "type": "Example",
  "number": "4.6.3",
  "title": "",
  "body": "  Try the same equation as before, but with insulated ends. We are solving the following PDE problem   For this problem, we must find the cosine series of . For , we have The calculation is left to the reader. Hence, the solution to the PDE problem, plotted in , is given by the series    Plot of the temperature of the insulated wire at position at time .    Note in the graph that as time goes on, the temperature evens out across the wire. Eventually, all the terms except the constant die out, and you will be left with a uniform temperature of along the entire length of the wire.   "
},
{
  "id": "heateq_section-6-1",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-1",
  "type": "Exercise",
  "number": "4.6.2",
  "title": "",
  "body": "  Consider a wire of length 2, with and an initial temperature distribution . Both ends are embedded in ice (temperature 0). Find the solution as a series.   "
},
{
  "id": "heateq_section-6-2",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-2",
  "type": "Exercise",
  "number": "4.6.3",
  "title": "",
  "body": "  Find a series solution of    "
},
{
  "id": "heateq_section-6-3",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-3",
  "type": "Exercise",
  "number": "4.6.4",
  "title": "",
  "body": "  Find a series solution of    "
},
{
  "id": "heat_cosexr",
  "level": "2",
  "url": "heateq_section.html#heat_cosexr",
  "type": "Exercise",
  "number": "4.6.5",
  "title": "",
  "body": "  Find a series solution of    "
},
{
  "id": "heat_oneto100exr",
  "level": "2",
  "url": "heateq_section.html#heat_oneto100exr",
  "type": "Exercise",
  "number": "4.6.6",
  "title": "",
  "body": "  Find a series solution of Hint: Use the fact that is a solution satisfying , , . Then use superposition.   "
},
{
  "id": "heateq_section-6-6",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-6",
  "type": "Exercise",
  "number": "4.6.7",
  "title": "",
  "body": "  Find the steady-state temperature steady-state temperature solution as a function of alone, by letting in the solution from exercises and . Verify that it satisfies the equation .   "
},
{
  "id": "heateq_section-6-7",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-7",
  "type": "Exercise",
  "number": "4.6.8",
  "title": "",
  "body": "  Use separation variables to find a nontrivial solution to , where and . Hint: Try .   "
},
{
  "id": "heateq_section-6-8",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-8",
  "type": "Exercise",
  "number": "4.6.9",
  "title": "",
  "body": "   (challenging) Suppose that one end of the wire is insulated (say at ) and the other end is kept at zero temperature. That is, find a series solution of Express any coefficients in the series by integrals of .   "
},
{
  "id": "heateq_section-6-9",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-9",
  "type": "Exercise",
  "number": "4.6.10",
  "title": "",
  "body": "   (challenging) Suppose that the wire is circular and insulated, so there are no ends. You can think of this as simply connecting the two ends and making sure the solution matches up at the ends. That is, find a series solution of Express any coefficients in the series by integrals of .   "
},
{
  "id": "heateq_section-6-10",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-10",
  "type": "Exercise",
  "number": "4.6.11",
  "title": "",
  "body": "  Consider a wire insulated on both ends, , , and .    Find the solution . Hint: a trig identity.    Find the average temperature.    Initially the temperature variation is 1 (maximum minus the minimum). Find the time when the variation is .     "
},
{
  "id": "heateq_section-6-11",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-11",
  "type": "Exercise",
  "number": "4.6.101",
  "title": "",
  "body": "  Find a series solution of         "
},
{
  "id": "heateq_section-6-12",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-12",
  "type": "Exercise",
  "number": "4.6.102",
  "title": "",
  "body": "  Find a series solution of         "
},
{
  "id": "heateq_section-6-13",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-13",
  "type": "Exercise",
  "number": "4.6.103",
  "title": "",
  "body": "  Use separation of variables to find a nontrivial solution to .     for some    "
},
{
  "id": "heateq_section-6-14",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-14",
  "type": "Exercise",
  "number": "4.6.104",
  "title": "",
  "body": "  Use a variation on separation of variables to find a nontrivial solution to . Hint: Try .        "
},
{
  "id": "heateq_section-6-15",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-15",
  "type": "Exercise",
  "number": "4.6.105",
  "title": "",
  "body": "  Suppose that the temperature on the wire is fixed at at the ends, , , and .    What is the temperature at at any time.    What is the maximum and the minimum temperature on the wire at .    At what time is the maximum temperature on the wire exactly one half of the initial maximum at .      a) , b) minimum , maximum , c) .   "
},
{
  "id": "we_section",
  "level": "1",
  "url": "we_section.html",
  "type": "Section",
  "number": "4.7",
  "title": "One-dimensional wave equation",
  "body": " One-dimensional wave equation  Note: 1 lecture, §9.6 in , §10.7 in  Imagine a tensioned guitar string of length that can vibrate. We will only consider vibrations in one direction. Let denote the position along the string, let denote time, and let denote the displacement of the string from the rest position. See .   Vibrating string of length , is position, is displacement.    The equation that governs this setup is the so-called one-dimensional wave equation one-dimensional wave equation wave equation : for some constant . The intuition is similar to the heat equation, replacing velocity with acceleration: the acceleration at a specific point is proportional to the second derivative of the shape of the string. In other words, when the string is concave down then is negative and the string wants to accelerate downwards, so should be negative. And vice versa. The wave equation is an example of a hyperbolic PDE.  We will again solve for in the region and . Assume that the ends of the string are fixed in place as on the guitar: We have two conditions along the -axis as there are two derivatives in the direction. There are also two derivatives along the direction and hence we need two further conditions here. We need to know the initial position and the initial velocity of the string. That is, for some known functions and , we impose   The equation is linear and homogeneous, so superposition works just as it did for the heat equation. Superposition also preserves the homogeneous side conditions and . Again we will use separation of variables to find enough building-block solutions to get the particular solution also solving the nonhomogeneous initial conditions. There is one change however. We will solve two separate problems and add their solutions.  The two problems we will solve are and   The principle of superposition implies that solves the wave equation and the homogeneous side conditions. Furthermore, and . Hence, is a solution to   The reason for all this complexity is that superposition only works for homogeneous conditions such as , , or . Therefore, we can use separation of variables to find many building-block solutions solving all the homogeneous conditions. We can then use them to construct a solution satisfying the remaining nonhomogeneous condition.  Let us start with . We try a solution of the form again. We plug into the wave equation to obtain Rewriting, we get Again, left-hand side depends only on and the right-hand side depends only on . So both sides equal a constant, which we denote by : We solve to get two ordinary differential equations The condition implies and implies that . Therefore, the only nontrivial solutions for the first equation are when and they are The general solution for for this particular is We also have the condition that or . This implies that , which in turn forces . It is convenient to pick (you will see why in a moment) and hence Our building-block solutions are We differentiate in : Hence, We expand in terms of these sines as Using superposition we write the solution to as a series     Check that and .    We solve similarly. We again try . The procedure works exactly the same at first. We obtain and the conditions , . Again, and This time, the condition on is . Thus we get that , and we take Our building-block solution is As , we expand in terms of these sines as We write down the solution to as a series     Fill in the details in the derivation of the solution of . Check that the solution satisfies all the side conditions.    Putting these two solutions together, let us state the result as a theorem.    Take the problem where Then the solution can be written as a sum of the solutions of and :       Consider a string of length 2 plucked in the middle, it has an initial shape given in . That is,    Initial shape of a plucked string from .    Let the string start at rest ( ), and let for simplicity. In other words, we wish to solve the problem:   We leave the details of computing the sine series of to the reader. The series is Note that is the sequence for . Therefore, The solution is given by   See for a plot for . Notice that unlike the heat equation, the solution does not become smoother, the sharp edges remain. We will see the reason for this behavior in the next section where we derive the solution to the wave equation in a different way.   Shape of the plucked string for .    Make sure you understand what the plot, such as the one in the figure, is telling you. For each fixed , you can think of the function as just a function of . This function gives you the shape of the string at time . See for plots of at as a function of at several different values of . On this plot, you can see the sharp edges remaining much better.   Plucked string for , , , and .       One thing to take away from all this is how a guitar sounds. Notice that the (angular) frequencies that come up in the solution are . That is, there is a certain base fundamental frequency fundamental frequency  , and then we also get all the multiples of this frequency, which in music are called the overtones overtones . Which overtones appear and with what amplitude is what musicians call the timbre timbre of the note. Mathematicians usually call this the spectrum spectrum . Because all the frequencies are multiples of one frequency (the fundamental), we get a nice pleasing sound.  The fundamental frequency increases as we decrease length . That is, if we place a finger on the fingerboard and then pluck a string we get a higher note. The constant is given by where is tension and is the linear density of the string. Tightening the string (turning the tuning peg on a guitar) increases and hence produces a higher fundamental frequency (a higher note). On the other hand, using a heavier string reduces and produces a lower fundamental frequency (a lower note). A bass guitar has longer thicker strings, while a ukulele has short strings made of lighter material.  Something rather interesting is the almost-symmetry between space and time. In its simplest form, we see this symmetry in the solutions Except for the constant , this solution looks the same if we flip time and space. In general, the solution for a fixed is a Fourier series in , for a fixed it is a Fourier series in , and the coefficients are related. If the shape or the initial velocity have lots of corners, then the sound wave will have lots of corners. That is because the Fourier coefficients of the initial shape decay to zero (as ) at the same rate as the Fourier coefficients of the wave in time (for some fixed ). So if you use a sharp object to pick the string, you get a sharper sound with lots of high-frequency components, while if you use your thumb, you get a softer sound without so many high overtones. Similarly, if you pluck close to the bridge (close to one end of the string), you are getting a pluck that looks more like the sawtooth, and you get an even sharper sound.  In fact, if you look at the formula for the solution, you see that for any fixed , we get an almost arbitrary Fourier series in , everything except the constant term. In theory, you can obtain any timbre you want by plucking the string in just the right way. Of course, we are considering an ideal string of no stiffness and no air resistance. Those variables clearly impact the sound as well.     Solve       Solve       Derive the solution for a general plucked string of length and any constant (in the equation ), where we raise the string some distance at the midpoint and let go.      Imagine that a stringed musical instrument falls on the floor. Suppose that the length of the string is 1 and . When the musical instrument hits the ground the string was in rest position and hence . However, the string was moving at some velocity at impact ( ), say . Find the solution for the shape of the string at time .       (challenging) Suppose that you have a vibrating string and that there is air resistance proportional to the velocity. That is, you have Suppose that . Derive a series solution to the problem. Any coefficients in the series should be expressed as integrals of .      Suppose you touch the guitar string exactly in the middle to ensure another condition for all time. Which multiples of the fundamental frequency show up in the solution?      Solve            Solve            Solve            What happens when ? Find a solution to , , , .          "
},
{
  "id": "we_vibstrfig",
  "level": "2",
  "url": "we_section.html#we_vibstrfig",
  "type": "Figure",
  "number": "4.20",
  "title": "",
  "body": " Vibrating string of length , is position, is displacement.   "
},
{
  "id": "we_section-14",
  "level": "2",
  "url": "we_section.html#we_section-14",
  "type": "Exercise",
  "number": "4.7.1",
  "title": "",
  "body": "  Check that and .   "
},
{
  "id": "we_section-16",
  "level": "2",
  "url": "we_section.html#we_section-16",
  "type": "Exercise",
  "number": "4.7.2",
  "title": "",
  "body": "  Fill in the details in the derivation of the solution of . Check that the solution satisfies all the side conditions.   "
},
{
  "id": "we_section-18",
  "level": "2",
  "url": "we_section.html#we_section-18",
  "type": "Theorem",
  "number": "4.7.1",
  "title": "",
  "body": "  Take the problem where Then the solution can be written as a sum of the solutions of and :    "
},
{
  "id": "example_pluckedstring",
  "level": "2",
  "url": "we_section.html#example_pluckedstring",
  "type": "Example",
  "number": "4.7.1",
  "title": "",
  "body": "  Consider a string of length 2 plucked in the middle, it has an initial shape given in . That is,    Initial shape of a plucked string from .    Let the string start at rest ( ), and let for simplicity. In other words, we wish to solve the problem:   We leave the details of computing the sine series of to the reader. The series is Note that is the sequence for . Therefore, The solution is given by   See for a plot for . Notice that unlike the heat equation, the solution does not become smoother, the sharp edges remain. We will see the reason for this behavior in the next section where we derive the solution to the wave equation in a different way.   Shape of the plucked string for .    Make sure you understand what the plot, such as the one in the figure, is telling you. For each fixed , you can think of the function as just a function of . This function gives you the shape of the string at time . See for plots of at as a function of at several different values of . On this plot, you can see the sharp edges remaining much better.   Plucked string for , , , and .      "
},
{
  "id": "we_section-24-1",
  "level": "2",
  "url": "we_section.html#we_section-24-1",
  "type": "Exercise",
  "number": "4.7.3",
  "title": "",
  "body": "  Solve    "
},
{
  "id": "we_section-24-2",
  "level": "2",
  "url": "we_section.html#we_section-24-2",
  "type": "Exercise",
  "number": "4.7.4",
  "title": "",
  "body": "  Solve    "
},
{
  "id": "we_section-24-3",
  "level": "2",
  "url": "we_section.html#we_section-24-3",
  "type": "Exercise",
  "number": "4.7.5",
  "title": "",
  "body": "  Derive the solution for a general plucked string of length and any constant (in the equation ), where we raise the string some distance at the midpoint and let go.   "
},
{
  "id": "we_section-24-4",
  "level": "2",
  "url": "we_section.html#we_section-24-4",
  "type": "Exercise",
  "number": "4.7.6",
  "title": "",
  "body": "  Imagine that a stringed musical instrument falls on the floor. Suppose that the length of the string is 1 and . When the musical instrument hits the ground the string was in rest position and hence . However, the string was moving at some velocity at impact ( ), say . Find the solution for the shape of the string at time .   "
},
{
  "id": "we_section-24-5",
  "level": "2",
  "url": "we_section.html#we_section-24-5",
  "type": "Exercise",
  "number": "4.7.7",
  "title": "",
  "body": "   (challenging) Suppose that you have a vibrating string and that there is air resistance proportional to the velocity. That is, you have Suppose that . Derive a series solution to the problem. Any coefficients in the series should be expressed as integrals of .   "
},
{
  "id": "we_section-24-6",
  "level": "2",
  "url": "we_section.html#we_section-24-6",
  "type": "Exercise",
  "number": "4.7.8",
  "title": "",
  "body": "  Suppose you touch the guitar string exactly in the middle to ensure another condition for all time. Which multiples of the fundamental frequency show up in the solution?   "
},
{
  "id": "we_section-24-7",
  "level": "2",
  "url": "we_section.html#we_section-24-7",
  "type": "Exercise",
  "number": "4.7.101",
  "title": "",
  "body": "  Solve         "
},
{
  "id": "we_section-24-8",
  "level": "2",
  "url": "we_section.html#we_section-24-8",
  "type": "Exercise",
  "number": "4.7.102",
  "title": "",
  "body": "  Solve         "
},
{
  "id": "we_section-24-9",
  "level": "2",
  "url": "we_section.html#we_section-24-9",
  "type": "Exercise",
  "number": "4.7.103",
  "title": "",
  "body": "  Solve         "
},
{
  "id": "we_section-24-10",
  "level": "2",
  "url": "we_section.html#we_section-24-10",
  "type": "Exercise",
  "number": "4.7.104",
  "title": "",
  "body": "  What happens when ? Find a solution to , , , .        "
},
{
  "id": "dalemb_section",
  "level": "1",
  "url": "dalemb_section.html",
  "type": "Section",
  "number": "4.8",
  "title": "D’Alembert solution of the wave equation",
  "body": " D'Alembert solution of the wave equation   Note: 1 lecture, different from §9.6 in , part of §10.7 in  We have solved the wave equation by using Fourier series. But it is often more convenient to use the so-called d'Alembert solution to the wave equation d'Alembert solution to the wave equation Named after the French mathematician Jean le Rond d'Alembert (1717–1783). . While this solution can be derived using Fourier series as well, it is really an awkward use of those concepts. It is easier and more instructive to derive this solution by making a correct change of variables to get an equation that can be solved by simple integration.  Suppose we wish to solve the wave equation wave equation  in the region and subject to the side conditions     Change of variables  We will transform the equation into a simpler form where it can be solved by simple integration. We change variables to , . The chain rule says: We compute In the computations above, we used the fact from calculus that . We plug what we got into the wave equation, Therefore, the wave equation transforms into . It is easy to find the general solution to this new equation by integrating twice. Keeping constant, we integrate with respect to first There is nothing special about , you can integrate with first, if you wish. and note that the constant of integration depends on ; for each , we may get a different constant of integration. We get . Next, we integrate with respect to and note that the constant of integration depends on . Thus, . The solution must, therefore, be of the following form for some functions and : The solution is a superposition of two functions (waves) traveling at speed in opposite directions. The coordinates and are called the characteristic coordinates characteristic coordinates , and a similar technique can be applied to more complicated hyperbolic PDEs. In it is used to solve first-order linear PDEs. Basically, to solve the wave equation (or more general hyperbolic equations) we find certain characteristic curves along which the equation is really just an ODE, or a pair of ODEs. In this case these are the curves where and are constant.    D'Alembert's formula  We know what any solution must look like, but we need to solve for the given side conditions. We will just give the formula and see that it works. Let denote the odd periodic extension of , and let denote the odd periodic extension of . Define We claim these and give the solution. Explicitly, the solution is or in other words:   Let us check that the d'Alembert formula really works. First, So far so good. Assume for simplicity is differentiable. And we use the first form of as it is easier to differentiate. By the fundamental theorem of calculus we have So Yay! We're smoking now. OK, now the boundary conditions. Note that and are odd. So Now is odd and -periodic, so Next, is odd and -periodic, so we change variables . We then notice that , so is odd as a function of : Hence And voilà, it works.    D'Alembert says that the solution is a superposition of two functions (waves) moving in the opposite direction at speed  . To get an idea of how it works, we work out the following example. Consider the simpler setup Let be the following triangular impulse of height 1 centered at : The graph of this impulse is the top left plot in .  Let be the odd periodic extension of . Then says that the solution is It is not hard to compute specific values of . For example, to compute , we notice and . Now and . Hence . As you can see the d'Alembert solution is much easier to actually compute and to plot than the Fourier series solution. See for plots of the solution for several different .   Plot of the d'Alembert solution for , , , and .         Another way to solve for the side conditions  It is perhaps easier and more useful to remember the procedure rather than memorizing the formula itself. The important thing is that a solution to the wave equation is a superposition of two waves traveling in opposite directions. That is, If you think about it, the exact formulas for and are not hard to guess once you realize what kind of side conditions is supposed to satisfy. Let us walk through the formula again, but slightly differently. Best approach is to do it in stages. When (and hence ), the solution is On the other hand, when (and hence ), we let The solution in this case is By superposition, we get a solution for the general side conditions (when neither nor are identically zero). Do note the minus sign before the and the in the second denominator.    Check that the new formula satisfies the side conditions .     Warning: Make sure you use the odd periodic extensions and , when you have formulas for and . The thing is, those formulas in general hold only for and are not usually equal to and for other .    Some remarks  We remark that the formula is the reason why the solution of the wave equation does not get nicer as time goes on, that is, why in the examples where the initial conditions had corners, the solution also has corners at every time .  The corners bring us to another interesting remark. Nobody ever notices at first that our example solutions are not even differentiable (they have corners): In above, the solution is not differentiable whenever or for example. Really to be able to compute or , you need not one, but two derivatives. Fear not, we could think of a shape that is very nearly but does have two derivatives by rounding the corners a little bit, and then the solution would be very nearly and nobody would notice the switch.  One final remark is what the d'Alembert solution tells us about what part of the initial conditions influence the solution at a certain point. We can figure this out by traveling backwards along the characteristics. Suppose that the string is very long (perhaps infinite) for simplicity. Since the solution at time is we notice that we have only used the initial conditions in the interval . The endpoints of this interval are called the wavefronts wavefronts , as that is where the wave front is given an initial ( ) disturbance at . If , an observer sitting at at time has only seen the initial conditions for in the range and is blissfully unaware of anything else. This is why, for example, we do not know that a supernova has occurred in the universe until we see its light, millions of years from the time when it did in fact happen.      Using the d'Alembert solution solve , , , , , and . Hint: Note that is the odd periodic extension of and .      Using the d'Alembert solution solve , , , , , and .      Take , , , , , and .    Solve using the d'Alembert formula. Hint: You can use the sine series for .    Find the solution as a function of for a fixed , , and . Do not use the sine series here.        Derive the d'Alembert solution for , , , , , and , using the Fourier series solution of the wave equation, by applying an appropriate trigonometric identity. Hint: Do it first for a single term of the Fourier series solution, in particular do it when is .      The d'Alembert solution still works if there are no boundary conditions and the initial condition is defined on the whole real line. Suppose that (for all on the real line and ), , and , where Solve using the d'Alembert solution. That is, write down a piecewise definition for the solution. Then sketch the solution for , , , and .      Using the d'Alembert solution solve , , , , , and .           Take , , , , , and . Using the d'Alembert solution find the solution at     ,     ,     .    You may have to split your answer up by cases.    a)  b)  c)       Take , , , , , and . Suppose that , , , . Using the d'Alembert solution find     ,     ,     .      a)  b)  c)      "
},
{
  "id": "dalemb_implusexample",
  "level": "2",
  "url": "dalemb_section.html#dalemb_implusexample",
  "type": "Example",
  "number": "4.8.1",
  "title": "",
  "body": "  D'Alembert says that the solution is a superposition of two functions (waves) moving in the opposite direction at speed  . To get an idea of how it works, we work out the following example. Consider the simpler setup Let be the following triangular impulse of height 1 centered at : The graph of this impulse is the top left plot in .  Let be the odd periodic extension of . Then says that the solution is It is not hard to compute specific values of . For example, to compute , we notice and . Now and . Hence . As you can see the d'Alembert solution is much easier to actually compute and to plot than the Fourier series solution. See for plots of the solution for several different .   Plot of the d'Alembert solution for , , , and .      "
},
{
  "id": "dalemb_section-5-3",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-5-3",
  "type": "Exercise",
  "number": "4.8.1",
  "title": "",
  "body": "  Check that the new formula satisfies the side conditions .   "
},
{
  "id": "dalemb_section-7-1",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-7-1",
  "type": "Exercise",
  "number": "4.8.2",
  "title": "",
  "body": "  Using the d'Alembert solution solve , , , , , and . Hint: Note that is the odd periodic extension of and .   "
},
{
  "id": "dalemb_section-7-2",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-7-2",
  "type": "Exercise",
  "number": "4.8.3",
  "title": "",
  "body": "  Using the d'Alembert solution solve , , , , , and .   "
},
{
  "id": "dalemb_section-7-3",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-7-3",
  "type": "Exercise",
  "number": "4.8.4",
  "title": "",
  "body": "  Take , , , , , and .    Solve using the d'Alembert formula. Hint: You can use the sine series for .    Find the solution as a function of for a fixed , , and . Do not use the sine series here.     "
},
{
  "id": "dalemb_section-7-4",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-7-4",
  "type": "Exercise",
  "number": "4.8.5",
  "title": "",
  "body": "  Derive the d'Alembert solution for , , , , , and , using the Fourier series solution of the wave equation, by applying an appropriate trigonometric identity. Hint: Do it first for a single term of the Fourier series solution, in particular do it when is .   "
},
{
  "id": "dalemb_section-7-5",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-7-5",
  "type": "Exercise",
  "number": "4.8.6",
  "title": "",
  "body": "  The d'Alembert solution still works if there are no boundary conditions and the initial condition is defined on the whole real line. Suppose that (for all on the real line and ), , and , where Solve using the d'Alembert solution. That is, write down a piecewise definition for the solution. Then sketch the solution for , , , and .   "
},
{
  "id": "dalemb_section-7-6",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-7-6",
  "type": "Exercise",
  "number": "4.8.101",
  "title": "",
  "body": "  Using the d'Alembert solution solve , , , , , and .        "
},
{
  "id": "dalemb_section-7-7",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-7-7",
  "type": "Exercise",
  "number": "4.8.102",
  "title": "",
  "body": "  Take , , , , , and . Using the d'Alembert solution find the solution at     ,     ,     .    You may have to split your answer up by cases.    a)  b)  c)    "
},
{
  "id": "dalemb_section-7-8",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-7-8",
  "type": "Exercise",
  "number": "4.8.103",
  "title": "",
  "body": "  Take , , , , , and . Suppose that , , , . Using the d'Alembert solution find     ,     ,     .      a)  b)  c)    "
},
{
  "id": "dirich_section",
  "level": "1",
  "url": "dirich_section.html",
  "type": "Section",
  "number": "4.9",
  "title": "Steady state temperature and the Laplacian",
  "body": " Steady state temperature and the Laplacian  Note: 1 lecture, §9.7 in , §10.8 in  Consider an insulated wire, a plate, or a 3-dimensional object. We apply certain fixed temperatures on the ends of the wire, the edges of the plate, or on all sides of the 3-dimensional object. We wish to find out what is the steady-state temperature steady-state temperature distribution. That is, we wish to know what will be the temperature after long enough period of time.  We are really seeking a solution to the heat equation that is not dependent on time. We first solve the problem in one space variable. We are looking for a function that satisfies but such that for all and . Hence, we are looking for a function of alone that satisfies . It is easy to solve this equation by integration, and we see that for some constants and .  Consider an insulated wire where we apply constant temperature at one end (say where ) and on the other end (at where is the length of the wire). Our steady-state solution is It is simply a straight line from one end to the other. This solution agrees with the common-sense intuition on how heat should be distributed in the wire. So in one dimension, the steady-state solutions are just straight lines.  Things are more complicated in two or more space dimensions. We restrict ourselves to two space dimensions for simplicity. The heat equation in two space variables is or more commonly written as or . The and symbols both mean . We will use here. The reason for using such a notation is that you can define to be the right thing for any number of space dimensions and then the heat equation is always . The operator is called the Laplacian Laplacian .  OK, now that we have notation out of the way, let us see what does an equation for the steady-state solution look like. We are looking for a solution to that does not depend on , that is, . Hence, we are looking for a function such that This equation is called the Laplace equation Laplace equation Named after the French mathematician Pierre-Simon, marquis de Laplace (1749–1827). and is an example of an elliptic equation. Solutions to the Laplace equation are called harmonic functions harmonic function and have many nice properties and applications far beyond the steady-state heat problem.  Harmonic functions in two variables are no longer just linear (so not just plane graphs). For example, you can check that the functions and are harmonic. However, note that if is positive, is concave up in the direction, then must be negative and must be concave down in the direction. A harmonic function can never have any hilltop or valley on the graph. This observation is consistent with our intuitive idea of steady-state heat distribution; the hottest or coldest spot should not be inside.  Commonly the Laplace equation is part of a so-called Dirichlet problem Dirichlet problem Named after the German mathematician Johann Peter Gustav Lejeune Dirichlet (1805–1859). . That is, we have a region in the -plane and we specify certain values along the boundaries of the region. We then try to find a solution to the Laplace equation defined on this region such that agrees with the values we specified on the boundary.  In this section, we consider a rectangular region. For simplicity, we specify boundary values to be zero at 3 of the four edges and only specify an arbitrary function at one edge. As we still have the principle of superposition, we can use this simpler solution to derive the general solution for arbitrary boundary values by solving 4 different problems, one for each edge, and adding those solutions together. This setup is left as an exercise.  We wish to solve the following problem. Let and be the height and width of our rectangle, with one corner at the origin and lying in the first quadrant, so that the region is given by and . Consider the problem      The method we apply is separation of variables. Again, we will come up with enough building-block solutions satisfying all the homogeneous boundary conditions (all conditions except ). We notice that superposition still works for the equation and all the homogeneous conditions. Therefore, we can use the Fourier series for to find a solution that also solves .  We try . We plug into the equation to get We put the s on one side and the s on the other to get The left-hand side only depends on and the right-hand side only depends on . Therefore, there is some constant such that . And we get two equations Furthermore, the homogeneous boundary conditions imply that and . Using the equation for , we have already seen that there is a nontrivial solution if and only if and the solution is a multiple of For these given , the general solution for (one for each ) is There is only one condition on and hence we can pick one of or to be something convenient. It will be useful to have , so let . Setting and solving for , we get After we plug the and into and simplify by using the identity , we find We define . Note that satisfies – . Observe Suppose Then we get a solution of – of the following form. As satisfies – and any linear combination (finite or infinite) of also satisfies – , then satisfies – . We plug in to see satisfies as well.    Take and let . Let us compute the sine series for the function (same as the series for the square wave). For , we have The solution , see , to the corresponding Dirichlet problem is given as    Steady state temperature of a square plate, three sides held at zero and one side held at .      This scenario corresponds to the steady-state temperature on a square plate of width with 3 sides held at 0 degrees and one side held at degrees. If we have arbitrary initial data on all sides, then we solve four problems, each using one piece of nonhomogeneous data. Then we use the principle of superposition to add up all four solutions to have a solution to the original problem.  A different way to visualize solutions of the Laplace equation is to take a wire and bend it so that it corresponds to the graph of the temperature above the boundary of your region. Cut a rubber sheet in the shape of your region—a square in our case—and stretch it fixing the edges of the sheet to the wire. The rubber sheet is a good approximation of the graph of the solution to the Laplace equation with the given boundary data.     In the region described by and , solve the problem       In the region described by and , solve the problem       In the region described by and , solve the problem for some constant . Hint: Guess, then check your intuition.      In the region described by and , solve Hint: Try a solution of the form (different separation of variables).      Use the solution of to solve Hint: Use superposition.      In the region described by and , solve the problem The solution should be in series form using the Fourier-series coefficients of .      In the region described by and , solve the problem The solution should be in series form using the Fourier-series coefficients of .      In the region described by and , solve the problem The solution should be in series form using the Fourier-series coefficients of .      In the region described by and , solve the problem Hint: Use superposition.      In the region described by and , solve the problem Hint: Use superposition.       (challenging) Using only your intuition find , for the problem , where for , and for . Explain.      In the region described by and , solve the problem            In the region described by and , solve the problem           "
},
{
  "id": "dirich_section-16",
  "level": "2",
  "url": "dirich_section.html#dirich_section-16",
  "type": "Example",
  "number": "4.9.1",
  "title": "",
  "body": "  Take and let . Let us compute the sine series for the function (same as the series for the square wave). For , we have The solution , see , to the corresponding Dirichlet problem is given as    Steady state temperature of a square plate, three sides held at zero and one side held at .     "
},
{
  "id": "dirich_section-19-1",
  "level": "2",
  "url": "dirich_section.html#dirich_section-19-1",
  "type": "Exercise",
  "number": "4.9.1",
  "title": "",
  "body": "  In the region described by and , solve the problem    "
},
{
  "id": "dirich_section-19-2",
  "level": "2",
  "url": "dirich_section.html#dirich_section-19-2",
  "type": "Exercise",
  "number": "4.9.2",
  "title": "",
  "body": "  In the region described by and , solve the problem    "
},
{
  "id": "dirich_section-19-3",
  "level": "2",
  "url": "dirich_section.html#dirich_section-19-3",
  "type": "Exercise",
  "number": "4.9.3",
  "title": "",
  "body": "  In the region described by and , solve the problem for some constant . Hint: Guess, then check your intuition.   "
},
{
  "id": "dirich_diffsepexr",
  "level": "2",
  "url": "dirich_section.html#dirich_diffsepexr",
  "type": "Exercise",
  "number": "4.9.4",
  "title": "",
  "body": "  In the region described by and , solve Hint: Try a solution of the form (different separation of variables).   "
},
{
  "id": "dirich_section-19-5",
  "level": "2",
  "url": "dirich_section.html#dirich_section-19-5",
  "type": "Exercise",
  "number": "4.9.5",
  "title": "",
  "body": "  Use the solution of to solve Hint: Use superposition.   "
},
{
  "id": "dirich_section-19-6",
  "level": "2",
  "url": "dirich_section.html#dirich_section-19-6",
  "type": "Exercise",
  "number": "4.9.6",
  "title": "",
  "body": "  In the region described by and , solve the problem The solution should be in series form using the Fourier-series coefficients of .   "
},
{
  "id": "dirich_section-19-7",
  "level": "2",
  "url": "dirich_section.html#dirich_section-19-7",
  "type": "Exercise",
  "number": "4.9.7",
  "title": "",
  "body": "  In the region described by and , solve the problem The solution should be in series form using the Fourier-series coefficients of .   "
},
{
  "id": "dirich_section-19-8",
  "level": "2",
  "url": "dirich_section.html#dirich_section-19-8",
  "type": "Exercise",
  "number": "4.9.8",
  "title": "",
  "body": "  In the region described by and , solve the problem The solution should be in series form using the Fourier-series coefficients of .   "
},
{
  "id": "dirich_section-19-9",
  "level": "2",
  "url": "dirich_section.html#dirich_section-19-9",
  "type": "Exercise",
  "number": "4.9.9",
  "title": "",
  "body": "  In the region described by and , solve the problem Hint: Use superposition.   "
},
{
  "id": "dirich_section-19-10",
  "level": "2",
  "url": "dirich_section.html#dirich_section-19-10",
  "type": "Exercise",
  "number": "4.9.10",
  "title": "",
  "body": "  In the region described by and , solve the problem Hint: Use superposition.   "
},
{
  "id": "dirich_section-19-11",
  "level": "2",
  "url": "dirich_section.html#dirich_section-19-11",
  "type": "Exercise",
  "number": "4.9.11",
  "title": "",
  "body": "   (challenging) Using only your intuition find , for the problem , where for , and for . Explain.   "
},
{
  "id": "dirich_section-19-12",
  "level": "2",
  "url": "dirich_section.html#dirich_section-19-12",
  "type": "Exercise",
  "number": "4.9.101",
  "title": "",
  "body": "  In the region described by and , solve the problem         "
},
{
  "id": "dirich_section-19-13",
  "level": "2",
  "url": "dirich_section.html#dirich_section-19-13",
  "type": "Exercise",
  "number": "4.9.102",
  "title": "",
  "body": "  In the region described by and , solve the problem         "
},
{
  "id": "dirichdisc_section",
  "level": "1",
  "url": "dirichdisc_section.html",
  "type": "Section",
  "number": "4.10",
  "title": "Dirichlet problem in the circle and the Poisson kernel",
  "body": " Dirichlet problem in the circle and the Poisson kernel   Note: 2 lectures, §9.7 in , §10.8 in    Laplace in polar coordinates  A more natural setting for the Laplace equation is a circle rather than a rectangle. On the other hand, what makes the problem somewhat more difficult is that we need polar coordinates.     Recall that the polar coordinates for the -plane are : where and . So the point is distance from the origin at an angle from the positive -axis.  Now that we know our coordinates, let us give the problem we wish to solve. We have a circular region of radius 1, and we are interested in the Dirichlet problem for the Laplace equation for this region. Let denote the temperature at the point in polar coordinates.     We have the problem:   The first issue we face is that we do not know the Laplacian in polar coordinates. Normally, we would find and in terms of the derivatives in and . We would need to solve for and in terms of and . In this case, it is more convenient to work in reverse. We compute derivatives in and in terms of derivatives in and and then we solve. The computations are easier this way. First, By chain rule, we obtain Similarly for the derivative. Note that we have to use the product rule for the second derivative. Let us now try to find . We start with to get rid of those pesky . If we add and use the fact that , we get We are not quite there yet, but all we are lacking is . We add it to obtain the Laplacian in polar coordinates Laplacian in polar coordinates :   Notice that the Laplacian in polar coordinates no longer has constant coefficients.    Series solution  Let us separate variables as usual. That is, we try . Then We put on one side and on the other and conclude that both sides must be constant. We get two equations: We first focus on . We know that ought to be -periodic in , that is, . Therefore, the solution to must be -periodic. We have seen such a problem in . We conclude that for a nonnegative integer . The equation becomes . When the equation is just , so we have the general solution . As is periodic, . For convenience, we write this solution as for some constant . For positive , the solution to is for some constants and .  Next, we consider the equation for , This equation appeared in exercises before—we solved it in and . The idea is to try a solution and if that does not give us two solutions, also try a solution of the form . We name the solution as usual. When we obtain and if , we get The function must be finite (it cannot blow up) at the origin, that is, when . So in both cases as otherwise or does blow up as . Set in both cases; the constants in will pick up the slack so nothing is lost. That is, Our building block solutions are Putting everything together our solution is   We look at the boundary condition in , Therefore, to solve we expand , which is a -periodic function, as a Fourier series, and then multiply the term by . To find the and the , we compute     Suppose we wish to solve   The is already expanded, so the solution is See the plot in . The thing to notice in this example is that the effect of a high frequency is mostly felt at the boundary. In the middle of the disc, the solution is very close to zero. That is because is rather small when is close to 0.   The solution of the Dirichlet problem in the disc with as boundary data.        Let us solve a more difficult problem. Consider a long rod with circular cross section of radius 1. Suppose we wish to solve the steady-state heat problem in the rod. If the rod is long enough, we simply need to solve the Laplace equation in two dimensions. We put the center of the rod at the origin, and we have exactly the region we are currently studying—a circle of radius 1. For the boundary conditions, suppose in Cartesian coordinates and , the temperature on the boundary is 0 when , and it is when .  Let us set the problem up. As , then on the circle of radius 1, that is, where , we have . So   We must now compute the Fourier series for the boundary condition. By now the reader has plentiful experience in computing Fourier series, and so we simply state that     Compute the series for and verify that it really is what we have just claimed. Hint: Be careful, make sure not to divide by zero.    To obtain the solution (see ), we write its series by multiplying terms in the series for by in the right places:    The solution of the Dirichlet problem with boundary data 0 for and for .        Poisson kernel  There is another way to solve the Dirichlet problem—with the help of an integral kernel. That is, we will find a function called the Poisson kernel Poisson kernel Named for the French mathematician Siméon Denis Poisson (1781–1840). such that While the integral will generally not be solvable analytically, it can be evaluated numerically. In fact, unless the boundary data is given as a Fourier series already, it may be much easier to numerically evaluate this formula as there is only one integral to evaluate.  The formula also has theoretical applications. For instance, as will have infinitely many derivatives, then via differentiating under the integral, we find that the solution has infinitely many derivatives, at least when inside the circle, . By having infinitely many derivatives, what you should think of is that has no corners and all of its partial derivatives of all orders exist and also have no corners.   We will compute the formula for from the series solution, and this idea can be applied anytime you have a convenient series solution where the coefficients are obtained via integration. Hence you can apply this reasoning to obtain such integral kernels for other equations, such as the heat equation. The computation is long and tedious tedious , but not overly difficult. Since the ideas are often applied in similar contexts, it is good to understand how this computation works.  What we do is start with the series solution and replace the coefficients with the integrals that compute them. Then we try to write everything as a single integral. We must use a different dummy variable for the integration and hence we use instead of . OK, so we have what we wanted, the expression in the parentheses is the Poisson kernel, . However, we can do a lot better. It is still given as a series, and we would really like to have a nice simple expression for it. We must work a little harder. The trick is to rewrite everything in terms of complex exponentials. Let us work just on the kernel. In the expression above, we recognize the geometric series geometric series . Recall from calculus that if is a complex number where , then Note that starts at , and that is why we have the in the numerator. It is the standard geometric series multiplied by . We can use , as lo and behold . We continue with the computation. That is a formula we can live with. The solution to the Dirichlet problem using the Poisson kernel is Sometimes the formula for the Poisson kernel is given together with the constant , in which case we should, of course, not leave it in front of the integral. Sometimes the limits of the integral are given as 0 to ; everything inside is -periodic in , so this does not change the integral.     Let us not leave the Poisson kernel without explaining its geometric meaning. Let be the distance from to . This distance in polar coordinates is given precisely by the square root of . That is, the Poisson kernel is really the formula   One final note we make about the formula is that it is really a weighted average of the boundary values. First, we look at what happens at the origin, that is, when : So is precisely the average value of and therefore the average value of on the boundary. This is a general feature of harmonic functions, the value at some point is equal to the average of the values on a circle centered at .  What the formula says at other points inside the circle is that the value of the solution is a weighted average of the boundary data . The kernel is bigger when is closer to . Therefore, when computing , we give more weight to the values when is closer to and less weight to the values when far from .      Using series solve , , for .      Using series solve , for the following data. Hint: trig identities.                            Using the Poisson kernel, give the solution to , where is zero for outside the interval and is 1 for on the interval .          Draw a graph for the Poisson kernel as a function of when and .    Describe what happens to the graph when you make bigger (as it approaches 1).    Knowing that the solution is the weighted average of with Poisson kernel as the weight, explain what your answer to part b) means.        Let be the function on the boundary. Use the series solution to find a solution to the Dirichlet problem , . Now convert the solution to Cartesian coordinates and . Is this solution surprising? Hint: use your trig identities.      Carry out the computation we needed in the separation of variables and solve , for .       (challenging) Derive the series solution to the Dirichlet problem if the region is a circle of radius rather than 1. That is, solve , .       (challenging)     Find the solution for , . Write the answer in Cartesian coordinates.    Now solve , . Write the solution in Cartesian coordinates.    Suppose you have a polynomial , solve , (that is, write down the formula for the answer). Write the answer in Cartesian coordinates.    Notice the answer is again a polynomial in and . See also .      Using series solve , .           Using the series solution find the solution to , . Express the solution in Cartesian coordinates (that is, using and ).               Try and guess a solution to , . Hint: try a solution that only depends on . Also first, don't worry about the boundary condition.    Now solve , using superposition.      a) b)        (challenging) Derive the Poisson kernel solution if the region is a circle of radius rather than 1. That is, solve , .          "
},
{
  "id": "dirichdisc_section-4-5",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-4-5",
  "type": "Example",
  "number": "4.10.1",
  "title": "",
  "body": "  Suppose we wish to solve   The is already expanded, so the solution is See the plot in . The thing to notice in this example is that the effect of a high frequency is mostly felt at the boundary. In the middle of the disc, the solution is very close to zero. That is because is rather small when is close to 0.   The solution of the Dirichlet problem in the disc with as boundary data.     "
},
{
  "id": "dirichdisc_section-4-6",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-4-6",
  "type": "Example",
  "number": "4.10.2",
  "title": "",
  "body": "  Let us solve a more difficult problem. Consider a long rod with circular cross section of radius 1. Suppose we wish to solve the steady-state heat problem in the rod. If the rod is long enough, we simply need to solve the Laplace equation in two dimensions. We put the center of the rod at the origin, and we have exactly the region we are currently studying—a circle of radius 1. For the boundary conditions, suppose in Cartesian coordinates and , the temperature on the boundary is 0 when , and it is when .  Let us set the problem up. As , then on the circle of radius 1, that is, where , we have . So   We must now compute the Fourier series for the boundary condition. By now the reader has plentiful experience in computing Fourier series, and so we simply state that     Compute the series for and verify that it really is what we have just claimed. Hint: Be careful, make sure not to divide by zero.    To obtain the solution (see ), we write its series by multiplying terms in the series for by in the right places:    The solution of the Dirichlet problem with boundary data 0 for and for .     "
},
{
  "id": "dirichdisc_section-6-1",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-1",
  "type": "Exercise",
  "number": "4.10.2",
  "title": "",
  "body": "  Using series solve , , for .   "
},
{
  "id": "dirichdisc_section-6-2",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-2",
  "type": "Exercise",
  "number": "4.10.3",
  "title": "",
  "body": "  Using series solve , for the following data. Hint: trig identities.                         "
},
{
  "id": "dirichdisc_section-6-3",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-3",
  "type": "Exercise",
  "number": "4.10.4",
  "title": "",
  "body": "  Using the Poisson kernel, give the solution to , where is zero for outside the interval and is 1 for on the interval .   "
},
{
  "id": "dirichdisc_section-6-4",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-4",
  "type": "Exercise",
  "number": "4.10.5",
  "title": "",
  "body": "      Draw a graph for the Poisson kernel as a function of when and .    Describe what happens to the graph when you make bigger (as it approaches 1).    Knowing that the solution is the weighted average of with Poisson kernel as the weight, explain what your answer to part b) means.     "
},
{
  "id": "exercise_dirichproblemxy",
  "level": "2",
  "url": "dirichdisc_section.html#exercise_dirichproblemxy",
  "type": "Exercise",
  "number": "4.10.6",
  "title": "",
  "body": "  Let be the function on the boundary. Use the series solution to find a solution to the Dirichlet problem , . Now convert the solution to Cartesian coordinates and . Is this solution surprising? Hint: use your trig identities.   "
},
{
  "id": "dirichdisc_section-6-6",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-6",
  "type": "Exercise",
  "number": "4.10.7",
  "title": "",
  "body": "  Carry out the computation we needed in the separation of variables and solve , for .   "
},
{
  "id": "dirichdisc_section-6-7",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-7",
  "type": "Exercise",
  "number": "4.10.8",
  "title": "",
  "body": "   (challenging) Derive the series solution to the Dirichlet problem if the region is a circle of radius rather than 1. That is, solve , .   "
},
{
  "id": "dirichdisc_section-6-8",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-8",
  "type": "Exercise",
  "number": "4.10.9",
  "title": "",
  "body": "   (challenging)     Find the solution for , . Write the answer in Cartesian coordinates.    Now solve , . Write the solution in Cartesian coordinates.    Suppose you have a polynomial , solve , (that is, write down the formula for the answer). Write the answer in Cartesian coordinates.    Notice the answer is again a polynomial in and . See also .   "
},
{
  "id": "dirichdisc_section-6-9",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-9",
  "type": "Exercise",
  "number": "4.10.101",
  "title": "",
  "body": "  Using series solve , .        "
},
{
  "id": "dirichdisc_section-6-10",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-10",
  "type": "Exercise",
  "number": "4.10.102",
  "title": "",
  "body": "  Using the series solution find the solution to , . Express the solution in Cartesian coordinates (that is, using and ).        "
},
{
  "id": "dirichdisc_section-6-11",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-11",
  "type": "Exercise",
  "number": "4.10.103",
  "title": "",
  "body": "      Try and guess a solution to , . Hint: try a solution that only depends on . Also first, don't worry about the boundary condition.    Now solve , using superposition.      a) b)    "
},
{
  "id": "dirichdisc_section-6-12",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-12",
  "type": "Exercise",
  "number": "4.10.104",
  "title": "",
  "body": "   (challenging) Derive the Poisson kernel solution if the region is a circle of radius rather than 1. That is, solve , .        "
},
{
  "id": "slproblems_section",
  "level": "1",
  "url": "slproblems_section.html",
  "type": "Section",
  "number": "5.1",
  "title": "Sturm–Liouville problems",
  "body": " Sturm–Liouville problems   Note: 2 lectures, §10.1 in , §11.2 in    Boundary value problems  In , we encountered several different eigenvalue problems such as: with different boundary conditions Dirichlet boundary conditions Neumann boundary conditions Mixed boundary conditions  These boundary problems came up in the study of the heat equation when we were trying to solve the equation by the method of separation of variables in . Dirichlet conditions correspond to applying a zero temperature at the ends, Neumann means insulating the ends, etc. Other types of endpoint conditions also arise naturally, such as the Robin boundary conditions Robin boundary conditions  for some constant . These conditions come up when the ends are immersed in some medium.  In the separation of variables computation we encountered an eigenvalue problem and found the eigenfunctions . We then found the eigenfunction decomposition eigenfunction decomposition of the initial temperature , Once we had this decomposition and found suitable such that and such that were solutions to the heat equation, we wrote the solution to the original problem, including the initial condition, as   To study more general problems with this method, we must study more general eigenvalue problems. First, we study second-order linear equations of the form Essentially any second-order linear equation of the form can be written as after multiplying by a proper factor.    [Bessel] Put the following equation into the form : Multiply both sides by to obtain The Bessel equation turns up for example in the solution of the two-dimensional wave equation. If you want to see how one solves the equation, you can look at .    The so-called Sturm–Liouville problem Sturm–Liouville problem Named after the French mathematicians Jacques Charles François Sturm (1803–1855) and Joseph Liouville (1809–1882). is to seek nontrivial solutions to By nontrivial, we again mean a that is not simply the constant zero (which is always a solution). In particular, we ask which s allow such nontrivial solutions. The s that admit nontrivial solutions are called the eigenvalues eigenvalue and the corresponding nontrivial solutions are called eigenfunctions eigenfunction . The constants and should not both be zero; the same applies to and .    Suppose , , and are continuous on and suppose and for all in . Then the Sturm–Liouville problem has an increasing sequence of eigenvalues such that and such that to each there is (up to a constant multiple) a single eigenfunction .  Moreover, if and , then for all .    Problems satisfying the hypothesis of the theorem (including the Moreover ) are called regular Sturm–Liouville problems regular Sturm–Liouville problem Sturm–Liouville problem regular , and we will only consider such problems here. That is, a regular problem is one where , , and are continuous, , , , and , where neither nor . Note: Be careful about the signs. Also be careful about the inequalities for and , they must be strict for all in the interval , including the endpoints!  When zero is an eigenvalue, we usually start labeling the eigenvalues from 0 rather than from 1 for convenience. That is, we label the eigenvalues .    The problem , , , and is a regular Sturm–Liouville problem: , , , and we have and . We also have , , , . The eigenvalues are and eigenfunctions are . All eigenvalues are nonnegative as predicted by the theorem.      Find eigenvalues and eigenfunctions for Identify the . Can you use the theorem above to make the search for eigenvalues easier? Hint: Consider the condition .      Find eigenvalues and eigenfunctions of the problem   These equations give a regular Sturm–Liouville problem.    Identify in the example above.    By , . So the general solution (without boundary conditions) is   Let us see if is an eigenvalue: We must satisfy and , hence (as ). Therefore, 0 is not an eigenvalue (no nonzero solution, so no eigenfunction).  Now we try . We plug in the boundary conditions: If , then and vice versa; therefore, both are nonzero. So , and . As we get or   We use a computer to find . There are tables available, though using a computer or a graphing calculator is far more convenient nowadays. The easiest method is to plot the functions and and see for which they intersect. There is an infinite number of intersections. Denote the first intersection by , the second intersection by , etc. For example, when , we get , , .... That is , , .... A plot for is given in . The appropriate eigenfunction (let for convenience, then ) is When we get (approximately)    Plot of and .        Orthogonality  We have seen the notion of orthogonality before. For example, we have shown that are orthogonal for distinct on . For general Sturm–Liouville problems we need a more general setup. Let be a weight function weight function (any function, though generally we assume it is positive) on . Two functions , are said to be orthogonal orthogonal with respect to a weight with respect to the weight function when In this setting, we define the inner product inner product of functions as and then say and are orthogonal whenever . The results and concepts are again analogous to finite-dimensional linear algebra.  The idea of the given inner product is that those where is greater have more weight. Nontrivial (nonconstant) arise naturally, for example from a change of variables. Hence, you could think of a change of variables such that .  Eigenfunctions of a regular Sturm–Liouville problem satisfy an orthogonality property, just like the eigenfunctions in . Its proof is very similar to the analogous .    Suppose we have a regular Sturm–Liouville problem Let and be two distinct eigenfunctions for two distinct eigenvalues and . Then that is, and are orthogonal with respect to the weight function .      Fredholm alternative  The Fredholm alternative theorem we talked about before ( ) holds for all regular Sturm–Liouville problems. We state it here for completeness.   Fredholm alternative  Fredholm alternative Sturm–Liouville problems   Suppose that we have a regular Sturm–Liouville problem. Then either has a nonzero solution ( is an eigenvalue), or has a unique solution for any continuous on .    This theorem is used in much the same way as we did before in . It is used when solving more general nonhomogeneous boundary value problems. The theorem does not help us solve the problem. It tells us when a unique solution exists, so that we know when to spend time looking for it. To solve the problem, we decompose and in terms of eigenfunctions of the homogeneous problem, and then solve for the coefficients of the series for .    Eigenfunction series  What we want to do with the eigenfunctions once we have them is to compute the eigenfunction decomposition eigenfunction decomposition of an arbitrary function . That is, we wish to write where are eigenfunctions. We wish to find out if we can represent any function in this way, and if so, we wish to calculate the (and of course we would want to know if the sum converges). OK, so imagine we could write as . We will assume convergence and the ability to integrate the series term by term. Because of orthogonality we have Hence,   Note that are known up to a constant multiple, so we could have picked a scalar multiple of an eigenfunction such that (if we had an arbitrary eigenfunction , divide it by ). When , we have the simpler form . The following theorem holds more generally, but the statement given is enough for our purposes.    Suppose is a piecewise smooth continuous function on . If are eigenfunctions of a regular Sturm–Liouville problem, one for each eigenvalue, then there exist real constants given by such that converges and holds for .      Consider The above is a regular Sturm–Liouville problem, and says that if is an eigenvalue then .  Suppose . The general solution is . We plug in the initial conditions to get , and . Hence is not an eigenvalue.  So let us consider , where the general solution is Plugging in the boundary conditions we get and . Since is zero, cannot be zero. Hence . This means that is an odd integral multiple of , i.e. . Solving for we get We can take . Our eigenfunctions are A little bit of calculus shows   So any piecewise smooth function on can be written as where   Note that the series converges to an odd -periodic extension of . With the regular sine series, we would expect a function with period .     (challenging) In the example above, the function is defined on , yet the series with respect to the eigenfunctions converges to an odd -periodic extension of . Find out how the extension is defined for .    Let us compute an example. Consider for . Some calculus later we find and so for in , This is different from the -periodic regular sine series which can be computed to be Both series converge to for , but the eigenfunctions involved come from different eigenvalue problems.        Find eigenvalues and eigenfunctions of       Expand the function on using eigenfunctions of the system       Suppose that you had a Sturm–Liouville problem on the interval and came up with , where is some constant. Decompose , in terms of these eigenfunctions.      Find eigenvalues and eigenfunctions of This problem is not a Sturm–Liouville problem, but the idea is the same.       (more challenging) Find eigenvalues and eigenfunctions for Hint: First write the system as a constant-coefficient system to find general solutions. Do note that guarantees .      Find eigenvalues and eigenfunctions of      , . For odd , , for even , .      Put the following problems into the standard form for Sturm–Liouville problems, that is, find , , , , , , and , and decide if the problems are regular or not.      for ,  ,  .      for ,  ,  . In an earlier version of this book, a typo rendered the equation as ending up with something harder than intended. Try this equation for a further challenge.       a) , , , , , , . The problem is not regular. b) , , , , , , . The problem is regular.     "
},
{
  "id": "slproblems_section-3-5",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-3-5",
  "type": "Example",
  "number": "5.1.1",
  "title": "",
  "body": "  [Bessel] Put the following equation into the form : Multiply both sides by to obtain The Bessel equation turns up for example in the solution of the two-dimensional wave equation. If you want to see how one solves the equation, you can look at .   "
},
{
  "id": "sl_slregthm",
  "level": "2",
  "url": "slproblems_section.html#sl_slregthm",
  "type": "Theorem",
  "number": "5.1.1",
  "title": "",
  "body": "  Suppose , , and are continuous on and suppose and for all in . Then the Sturm–Liouville problem has an increasing sequence of eigenvalues such that and such that to each there is (up to a constant multiple) a single eigenfunction .  Moreover, if and , then for all .   "
},
{
  "id": "slproblems_section-3-10",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-3-10",
  "type": "Example",
  "number": "5.1.2",
  "title": "",
  "body": "  The problem , , , and is a regular Sturm–Liouville problem: , , , and we have and . We also have , , , . The eigenvalues are and eigenfunctions are . All eigenvalues are nonnegative as predicted by the theorem.   "
},
{
  "id": "slproblems_section-3-11",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-3-11",
  "type": "Exercise",
  "number": "5.1.1",
  "title": "",
  "body": "  Find eigenvalues and eigenfunctions for Identify the . Can you use the theorem above to make the search for eigenvalues easier? Hint: Consider the condition .   "
},
{
  "id": "slproblems_section-3-12",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-3-12",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": "  Find eigenvalues and eigenfunctions of the problem   These equations give a regular Sturm–Liouville problem.    Identify in the example above.    By , . So the general solution (without boundary conditions) is   Let us see if is an eigenvalue: We must satisfy and , hence (as ). Therefore, 0 is not an eigenvalue (no nonzero solution, so no eigenfunction).  Now we try . We plug in the boundary conditions: If , then and vice versa; therefore, both are nonzero. So , and . As we get or   We use a computer to find . There are tables available, though using a computer or a graphing calculator is far more convenient nowadays. The easiest method is to plot the functions and and see for which they intersect. There is an infinite number of intersections. Denote the first intersection by , the second intersection by , etc. For example, when , we get , , .... That is , , .... A plot for is given in . The appropriate eigenfunction (let for convenience, then ) is When we get (approximately)    Plot of and .     "
},
{
  "id": "slproblems_section-4-5",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-4-5",
  "type": "Theorem",
  "number": "5.1.2",
  "title": "",
  "body": "  Suppose we have a regular Sturm–Liouville problem Let and be two distinct eigenfunctions for two distinct eigenvalues and . Then that is, and are orthogonal with respect to the weight function .   "
},
{
  "id": "slproblems_section-5-3",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-5-3",
  "type": "Theorem",
  "number": "5.1.3",
  "title": "Fredholm alternative.",
  "body": " Fredholm alternative  Fredholm alternative Sturm–Liouville problems   Suppose that we have a regular Sturm–Liouville problem. Then either has a nonzero solution ( is an eigenvalue), or has a unique solution for any continuous on .   "
},
{
  "id": "slproblems_section-6-4",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-6-4",
  "type": "Theorem",
  "number": "5.1.4",
  "title": "",
  "body": "  Suppose is a piecewise smooth continuous function on . If are eigenfunctions of a regular Sturm–Liouville problem, one for each eigenvalue, then there exist real constants given by such that converges and holds for .   "
},
{
  "id": "slproblems_section-6-5",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-6-5",
  "type": "Example",
  "number": "5.1.4",
  "title": "",
  "body": "  Consider The above is a regular Sturm–Liouville problem, and says that if is an eigenvalue then .  Suppose . The general solution is . We plug in the initial conditions to get , and . Hence is not an eigenvalue.  So let us consider , where the general solution is Plugging in the boundary conditions we get and . Since is zero, cannot be zero. Hence . This means that is an odd integral multiple of , i.e. . Solving for we get We can take . Our eigenfunctions are A little bit of calculus shows   So any piecewise smooth function on can be written as where   Note that the series converges to an odd -periodic extension of . With the regular sine series, we would expect a function with period .     (challenging) In the example above, the function is defined on , yet the series with respect to the eigenfunctions converges to an odd -periodic extension of . Find out how the extension is defined for .    Let us compute an example. Consider for . Some calculus later we find and so for in , This is different from the -periodic regular sine series which can be computed to be Both series converge to for , but the eigenfunctions involved come from different eigenvalue problems.   "
},
{
  "id": "slproblems_section-7-1",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-7-1",
  "type": "Exercise",
  "number": "5.1.4",
  "title": "",
  "body": "  Find eigenvalues and eigenfunctions of    "
},
{
  "id": "slproblems_section-7-2",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-7-2",
  "type": "Exercise",
  "number": "5.1.5",
  "title": "",
  "body": "  Expand the function on using eigenfunctions of the system    "
},
{
  "id": "slproblems_section-7-3",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-7-3",
  "type": "Exercise",
  "number": "5.1.6",
  "title": "",
  "body": "  Suppose that you had a Sturm–Liouville problem on the interval and came up with , where is some constant. Decompose , in terms of these eigenfunctions.   "
},
{
  "id": "slproblems_section-7-4",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-7-4",
  "type": "Exercise",
  "number": "5.1.7",
  "title": "",
  "body": "  Find eigenvalues and eigenfunctions of This problem is not a Sturm–Liouville problem, but the idea is the same.   "
},
{
  "id": "slproblems_section-7-5",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-7-5",
  "type": "Exercise",
  "number": "5.1.8",
  "title": "",
  "body": "   (more challenging) Find eigenvalues and eigenfunctions for Hint: First write the system as a constant-coefficient system to find general solutions. Do note that guarantees .   "
},
{
  "id": "slproblems_section-7-6",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-7-6",
  "type": "Exercise",
  "number": "5.1.101",
  "title": "",
  "body": "  Find eigenvalues and eigenfunctions of      , . For odd , , for even , .   "
},
{
  "id": "slproblems_section-7-7",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-7-7",
  "type": "Exercise",
  "number": "5.1.102",
  "title": "",
  "body": "  Put the following problems into the standard form for Sturm–Liouville problems, that is, find , , , , , , and , and decide if the problems are regular or not.      for ,  ,  .      for ,  ,  . In an earlier version of this book, a typo rendered the equation as ending up with something harder than intended. Try this equation for a further challenge.       a) , , , , , , . The problem is not regular. b) , , , , , , . The problem is regular.   "
},
{
  "id": "sec_appeig",
  "level": "1",
  "url": "sec_appeig.html",
  "type": "Section",
  "number": "5.2",
  "title": "Higher-order eigenvalue problems",
  "body": " Higher-order eigenvalue problems  Note: 1 lecture, §10.2 in , exercises in §11.2 in  The eigenfunction series can arise even from higher-order equations. Consider an elastic beam (say made of steel). We will study the transversal vibrations transversal vibrations (vibrations where the beam bends ) of the beam. Suppose the beam lies along the -axis and let measure the displacement of the point on the beam at time . See .   Transversal vibrations of a beam.    The equation that governs this setup is for some constant , let us not worry about the physics If you are interested, , where is the elastic modulus, is the second moment of area of the cross section, and is linear density. .  Suppose the beam is of length 1 and simply supported (hinged) at the ends. The beam is displaced by some function at time and then let go (initial velocity is 0). Then satisfies:   Again we try and plug in to get or The equations are The boundary conditions and imply The initial homogeneous condition implies As usual, we leave the nonhomogeneous for later.  Considering the equation for , that is, , and physical intuition leads us to the fact that if is an eigenvalue then : We expect vibration and not exponential growth nor decay in the direction (there is no friction in our model for instance). So there are no negative eigenvalues. Similarly is not an eigenvalue.    Justify just from the equation for and the boundary conditions.    Let , that is, , to avoid writing the fourth root all the time. Notice . The general solution to is Now , . Solving, and . So Also , and . This means that and . If , then and so . Thus , otherwise is not an eigenvalue. Also, must be an integer multiple of . Hence and (as ). We can take . So the eigenvalues are , and corresponding eigenfunctions are .  Now . The general solution is . But and hence . We take to make for convenience. So our solutions are .  The eigenfunctions are just the sines, so we decompose the function using the sine series. That is, we find numbers such that for , Then the solution to is The point is that is a solution that satisfies all the homogeneous conditions (all conditions except the initial position). And since , So solves .  The natural (angular) frequencies of the system are . These frequencies are all integer multiples of the fundamental frequency , so we get a nice musical note. The exact frequencies and their amplitude are what musicians call the timbre timbre of the note (outside of music it is called the spectrum).  The timbre of a beam is different from that of a vibrating string where we get more of the lower frequencies since we get all integer multiples, . For a steel beam we get only the square multiples . That is why when you hit a steel beam you hear a very pure sound. The sound of a xylophone or vibraphone is, therefore, very different from that of a guitar or piano.    Consider . On (you know how to do this by now) Hence, the solution to with the given initial position is     There are other boundary conditions than just hinged ends. There are three basic possibilities: hinged, free, or fixed. Consider the end at . For the other end, it is the same idea. If the end is hinged hinged end of beam , then If the end is free free end of beam , that is, it is just floating in air, then And finally, if the end is clamped clamped end of beam or fixed fixed end of beam , for example it is welded to a wall, then      Suppose you have a beam of length 5 with free ends. Let be the transverse deviation of the beam at position on the beam ( ). You know that the constants are such that this satisfies the equation . Suppose you know that the initial shape of the beam is the graph of , and the initial velocity is uniformly equal to 2 (same for each ) in the positive direction. Set up the equation together with the boundary and initial conditions. Just set up, do not solve.      Suppose you have a beam of length 5 with one end free and one end fixed (the fixed end is at ). Let be the longitudinal deviation of the beam at position on the beam ( ). You know that the constants are such that this satisfies the equation . Suppose you know that the initial displacement of the beam is , and the initial velocity is in the positive direction. Set up the equation together with the boundary and initial conditions. Just set up, do not solve.      Suppose the beam is units long, everything else kept the same as in . What is the equation and the series solution?      Suppose you have That is, you have also an initial velocity. Find a series solution. Hint: Use the same idea as we did for the wave equation.      Suppose you have a beam of length 1 with hinged ends. Let be the transverse deviation of the beam at position on the beam ( ). You know that the constants are such that this satisfies the equation . Suppose you know that the initial shape of the beam is the graph of , and the initial velocity is 0. Solve for .           Suppose you have a beam of length 10 with two fixed ends. Let be the transverse deviation of the beam at position on the beam ( ). You know that the constants are such that this satisfies the equation . Suppose you know that the initial shape of the beam is the graph of , and the initial velocity is uniformly equal to . Set up the equation together with the boundary and initial conditions. Just set up, do not solve.     ,  ,  ,  .     "
},
{
  "id": "appeig_transbeamfig",
  "level": "2",
  "url": "sec_appeig.html#appeig_transbeamfig",
  "type": "Figure",
  "number": "5.2",
  "title": "",
  "body": " Transversal vibrations of a beam.   "
},
{
  "id": "sec_appeig-11",
  "level": "2",
  "url": "sec_appeig.html#sec_appeig-11",
  "type": "Exercise",
  "number": "5.2.1",
  "title": "",
  "body": "  Justify just from the equation for and the boundary conditions.   "
},
{
  "id": "sec_appeig-17",
  "level": "2",
  "url": "sec_appeig.html#sec_appeig-17",
  "type": "Example",
  "number": "5.2.1",
  "title": "",
  "body": "  Consider . On (you know how to do this by now) Hence, the solution to with the given initial position is    "
},
{
  "id": "sec_appeig-19-1",
  "level": "2",
  "url": "sec_appeig.html#sec_appeig-19-1",
  "type": "Exercise",
  "number": "5.2.2",
  "title": "",
  "body": "  Suppose you have a beam of length 5 with free ends. Let be the transverse deviation of the beam at position on the beam ( ). You know that the constants are such that this satisfies the equation . Suppose you know that the initial shape of the beam is the graph of , and the initial velocity is uniformly equal to 2 (same for each ) in the positive direction. Set up the equation together with the boundary and initial conditions. Just set up, do not solve.   "
},
{
  "id": "sec_appeig-19-2",
  "level": "2",
  "url": "sec_appeig.html#sec_appeig-19-2",
  "type": "Exercise",
  "number": "5.2.3",
  "title": "",
  "body": "  Suppose you have a beam of length 5 with one end free and one end fixed (the fixed end is at ). Let be the longitudinal deviation of the beam at position on the beam ( ). You know that the constants are such that this satisfies the equation . Suppose you know that the initial displacement of the beam is , and the initial velocity is in the positive direction. Set up the equation together with the boundary and initial conditions. Just set up, do not solve.   "
},
{
  "id": "sec_appeig-19-3",
  "level": "2",
  "url": "sec_appeig.html#sec_appeig-19-3",
  "type": "Exercise",
  "number": "5.2.4",
  "title": "",
  "body": "  Suppose the beam is units long, everything else kept the same as in . What is the equation and the series solution?   "
},
{
  "id": "sec_appeig-19-4",
  "level": "2",
  "url": "sec_appeig.html#sec_appeig-19-4",
  "type": "Exercise",
  "number": "5.2.5",
  "title": "",
  "body": "  Suppose you have That is, you have also an initial velocity. Find a series solution. Hint: Use the same idea as we did for the wave equation.   "
},
{
  "id": "sec_appeig-19-5",
  "level": "2",
  "url": "sec_appeig.html#sec_appeig-19-5",
  "type": "Exercise",
  "number": "5.2.101",
  "title": "",
  "body": "  Suppose you have a beam of length 1 with hinged ends. Let be the transverse deviation of the beam at position on the beam ( ). You know that the constants are such that this satisfies the equation . Suppose you know that the initial shape of the beam is the graph of , and the initial velocity is 0. Solve for .        "
},
{
  "id": "sec_appeig-19-6",
  "level": "2",
  "url": "sec_appeig.html#sec_appeig-19-6",
  "type": "Exercise",
  "number": "5.2.102",
  "title": "",
  "body": "  Suppose you have a beam of length 10 with two fixed ends. Let be the transverse deviation of the beam at position on the beam ( ). You know that the constants are such that this satisfies the equation . Suppose you know that the initial shape of the beam is the graph of , and the initial velocity is uniformly equal to . Set up the equation together with the boundary and initial conditions. Just set up, do not solve.     ,  ,  ,  .   "
},
{
  "id": "sps_section",
  "level": "1",
  "url": "sps_section.html",
  "type": "Section",
  "number": "5.3",
  "title": "Steady periodic solutions",
  "body": " Steady periodic solutions   Note: 1–2 lectures, §10.3 in , not in    Forced vibrating string  Consider a guitar string of length . We studied this setup in . Let be the position on the string, the time, and the displacement of the string. See .   Vibrating string.    The problem is governed by the wave equation We found that the solution is of the form where and are determined by the initial conditions. The natural frequencies of the system are the (angular) frequencies for integers .  But these are free vibrations. What if there is an external force acting on the string? Let us assume, say, air vibrations (noise), for example from a second string. Or perhaps from a jet engine. For simplicity, assume nice pure sound and assume the force is uniform at every position on the string: The external force as a function of time is given as as force per unit mass, we will call this the forcing function. Then our wave equation becomes (remember force is mass times acceleration) with the same boundary conditions of course.  Suppose we want to find the solution here that satisfies the equation and That is, the string is initially at rest. First, we find a particular solution of that satisfies only the conditions . We define the functions and as We then find solution of . If we add the two solutions, we find that solves with the initial conditions.    Check that solves and the side conditions .    So the big issue here is to find the particular solution . We look at the equation and we make an educated guess We plug in to get or after canceling the cosine. We know how to find a general solution to this equation (it is a nonhomogeneous constant-coefficient equation). The general solution is The endpoint conditions imply . So or , and also Assuming that is not zero, we can solve for to get Therefore, The particular solution we are looking for is     Check that works.    Now we get to the point that we skipped. Suppose . What this means is that is equal to one of the natural frequencies of the system, i.e. a multiple of the base frequency . We notice that if is not equal to a multiple of , but is very close, then the coefficient in seems to become very large as the denominator goes to zero. But let us not jump to conclusions just yet because the numerator may also go to zero. When for even, then , we could simply take to obtain a nice bounded solution of the same form, , and so no resonance is happening. Resonance occurs only when both and , that is, when for odd  . When is odd, if we take approaching , then the numerator in the coefficient is not going to zero, but the denominator is, so really does blow up. We could again try to explicitly solve for the resonance solution if we wanted to, but it is, in the right sense, the limit of solutions as gets close to a resonance frequency. In real life, pure resonance never occurs anyway.  The calculation of resonance frequencies above explains why a string begins to vibrate if the identical string is plucked close by. In the absence of friction this vibration would get louder and louder as time goes on. On the other hand, you are unlikely to get large vibration if the forcing frequency is not close to a resonance frequency even if you have a jet engine running close to the string. That is, the amplitude does not keep increasing unless you tune to just the right frequency.  Similar resonance phenomena occur when you break a wine glass using human voice (yes, this is possible, but not easy Mythbusters , episode 31, Discovery Channel, originally aired may 18th 2005. ) if you happen to hit just the right frequency. However, a glass has much purer sound, i.e. it is more like a vibraphone, so there are far fewer resonance frequencies to hit.  When the forcing function is more complicated, you decompose it in terms of the Fourier series and apply the result above. You may also need to solve the problem above if the forcing function is a sine rather than a cosine, but if you think about it, the solution is almost the same.    Let us do the computation for specific values. Suppose and and and . Then Write for simplicity.  Then plug in to get and after differentiating in we see that .  Hence to find , we need to solve the problem If we use d'Alembert, we note that the formula that we use to define is not odd, hence it is not a simple matter of plugging in the expression for to the d'Alembert formula directly! You must define to be the odd, 2-periodic extension of . Then our solution is   It is not hard to compute specific values for an odd periodic extension of a function and hence is a wonderful solution to the problem. For example, it is very easy to have a computer do it, unlike a series solution. A plot is given in .   Plot of .        Underground temperature oscillations  Let be the temperature at a certain location at depth underground at time . See .   Underground temperature.    The temperature satisfies the heat equation , where is the diffusivity of the soil. We know the temperature at the surface from weather records. Let us assume for simplicity that where is the yearly mean temperature, and is midsummer (you can put negative sign above to make it midwinter if you wish). gives the typical variation for the year. That is, the hottest temperature is and the coldest is . For simplicity, we assume that . The frequency is picked depending on the units of , such that when , then . For example if is in years, then .  It seems reasonable that the temperature at depth also oscillates with the same frequency. This, in fact, is the steady periodic solution, a solution independent of the initial conditions. So we are looking for a solution of the form for the problem   We employ the complex exponential here to make calculations simpler. Suppose we have a complex-valued function We look for an such that . To find an , whose real part satisfies , we look for an such that     Suppose satisfies . Use Euler's formula for the complex exponential to check that satisfies .    Substitute into . Hence, or where . Note that so you could simplify to . Hence the general solution is We assume that an that solves the problem must be bounded as since should be bounded (we are not worrying about Earth's core!). If you use Euler's formula to expand the complex exponentials, note that the second term is unbounded (if ), while the first term is always bounded. Hence .    Use Euler's formula to show that is unbounded as , while is bounded as .    Furthermore, since . Thus . This means that We need to get the real part of , so we apply Euler's formula to get Then finally Yay!  Notice the phase is different at different depths. At depth the phase is delayed by . For example in cgs units (centimeters-grams-seconds) cgs units we have (typical value for soil), . Then if we compute where the phase shift we find the depth in centimeters where the seasons are reversed. That is, we get the depth at which summer is the coldest and winter is the warmest. We get approximately 700 centimeters, which is approximately 23 feet below ground.  Be careful not to jump to conclusions. The temperature swings decay rapidly as you dig deeper. The amplitude of the temperature swings is . This function decays very quickly as (the depth) grows. Let us again take typical parameters as above. We also assume that our surface temperature swing is Celsius, that is, . Then the maximum temperature variation at 700 centimeters is only Celsius.  You need not dig very deep to get an effective refrigerator, with nearly constant temperature. That is why wines are kept in a cellar; you need consistent temperature. The temperature differential could also be used for energy. A home could be heated or cooled by taking advantage of the fact above. Even without Earth's core you could heat a home in the winter and cool it in the summer. Earth's core makes the temperature higher the deeper you dig, although you need to dig somewhat deep to feel a difference. We did not take that into account above.      Suppose that the forcing function for the vibrating string is . Derive the particular solution .      Take the forced vibrating string. Suppose that , . Suppose that the forcing function is the square wave that is 1 on the interval and on the interval . Find the particular solution. Hint: You may want to use result of .      The units are cgs (centimeters-grams-seconds) cgs units . For , , . Find the depth at which the temperature variation is half ( degrees) of what it is on the surface.      Derive the solution for underground temperature oscillation without assuming that .      Take the forced vibrating string. Suppose that , . Suppose that the forcing function is a triangle wave, on extended periodically. Find the particular solution.           The units are cgs (centimeters-grams-seconds) cgs units . For , , . Find the depth at which the summer is again the hottest point.    Approximately 1991 centimeters     "
},
{
  "id": "sps_vibstrfig",
  "level": "2",
  "url": "sps_section.html#sps_vibstrfig",
  "type": "Figure",
  "number": "5.3",
  "title": "",
  "body": " Vibrating string.   "
},
{
  "id": "sps_section-3-9",
  "level": "2",
  "url": "sps_section.html#sps_section-3-9",
  "type": "Exercise",
  "number": "5.3.1",
  "title": "",
  "body": "  Check that solves and the side conditions .   "
},
{
  "id": "sps_section-3-11",
  "level": "2",
  "url": "sps_section.html#sps_section-3-11",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": "  Check that works.   "
},
{
  "id": "sps_section-3-16",
  "level": "2",
  "url": "sps_section.html#sps_section-3-16",
  "type": "Example",
  "number": "5.3.1",
  "title": "",
  "body": "  Let us do the computation for specific values. Suppose and and and . Then Write for simplicity.  Then plug in to get and after differentiating in we see that .  Hence to find , we need to solve the problem If we use d'Alembert, we note that the formula that we use to define is not odd, hence it is not a simple matter of plugging in the expression for to the d'Alembert formula directly! You must define to be the odd, 2-periodic extension of . Then our solution is   It is not hard to compute specific values for an odd periodic extension of a function and hence is a wonderful solution to the problem. For example, it is very easy to have a computer do it, unlike a series solution. A plot is given in .   Plot of .     "
},
{
  "id": "sps_groundtempfig",
  "level": "2",
  "url": "sps_section.html#sps_groundtempfig",
  "type": "Figure",
  "number": "5.5",
  "title": "",
  "body": " Underground temperature.   "
},
{
  "id": "sps_section-4-9",
  "level": "2",
  "url": "sps_section.html#sps_section-4-9",
  "type": "Exercise",
  "number": "5.3.3",
  "title": "",
  "body": "  Suppose satisfies . Use Euler's formula for the complex exponential to check that satisfies .   "
},
{
  "id": "sps_section-4-11",
  "level": "2",
  "url": "sps_section.html#sps_section-4-11",
  "type": "Exercise",
  "number": "5.3.4",
  "title": "",
  "body": "  Use Euler's formula to show that is unbounded as , while is bounded as .   "
},
{
  "id": "sps_sinforceexr",
  "level": "2",
  "url": "sps_section.html#sps_sinforceexr",
  "type": "Exercise",
  "number": "5.3.5",
  "title": "",
  "body": "  Suppose that the forcing function for the vibrating string is . Derive the particular solution .   "
},
{
  "id": "sps_section-5-2",
  "level": "2",
  "url": "sps_section.html#sps_section-5-2",
  "type": "Exercise",
  "number": "5.3.6",
  "title": "",
  "body": "  Take the forced vibrating string. Suppose that , . Suppose that the forcing function is the square wave that is 1 on the interval and on the interval . Find the particular solution. Hint: You may want to use result of .   "
},
{
  "id": "sps_section-5-3",
  "level": "2",
  "url": "sps_section.html#sps_section-5-3",
  "type": "Exercise",
  "number": "5.3.7",
  "title": "",
  "body": "  The units are cgs (centimeters-grams-seconds) cgs units . For , , . Find the depth at which the temperature variation is half ( degrees) of what it is on the surface.   "
},
{
  "id": "sps_section-5-4",
  "level": "2",
  "url": "sps_section.html#sps_section-5-4",
  "type": "Exercise",
  "number": "5.3.8",
  "title": "",
  "body": "  Derive the solution for underground temperature oscillation without assuming that .   "
},
{
  "id": "sps_section-5-5",
  "level": "2",
  "url": "sps_section.html#sps_section-5-5",
  "type": "Exercise",
  "number": "5.3.101",
  "title": "",
  "body": "  Take the forced vibrating string. Suppose that , . Suppose that the forcing function is a triangle wave, on extended periodically. Find the particular solution.        "
},
{
  "id": "sps_section-5-6",
  "level": "2",
  "url": "sps_section.html#sps_section-5-6",
  "type": "Exercise",
  "number": "5.3.102",
  "title": "",
  "body": "  The units are cgs (centimeters-grams-seconds) cgs units . For , , . Find the depth at which the summer is again the hottest point.    Approximately 1991 centimeters   "
},
{
  "id": "laplace_section",
  "level": "1",
  "url": "laplace_section.html",
  "type": "Section",
  "number": "6.1",
  "title": "The Laplace transform",
  "body": " The Laplace transform   Note: 1.5–2 lectures, §7.1 in , §6.1 and parts of §6.2 in    The transform  In this chapter, we will discuss the Laplace transform Just like the Laplace equation and the Laplacian, the Laplace transform is also named after Pierre-Simon, marquis de Laplace (1749–1827). . The Laplace transform is a very efficient method to solve certain ODE or PDE problems. The transform takes a differential equation and turns it into an algebraic equation. If the algebraic equation can be solved, applying the inverse transform gives us our desired solution. The Laplace transform also has applications in the analysis of electrical circuits, NMR spectroscopy, signal processing, and elsewhere. Finally, understanding the Laplace transform will also help with understanding the related Fourier transform, which, however, requires more understanding of complex numbers. We will not cover the Fourier transform.  The Laplace transform also gives a lot of insight into the nature of the equations we are dealing with. It can be seen as converting between the time and the frequency domain. For example, take the standard equation We can think of as time and as incoming signal. The Laplace transform will convert the equation from a differential equation in time to an algebraic (no derivatives) equation, where the new independent variable is thought of as the frequency. Really, it is the frequency in terms of complex numbers, but we digress.   We can think of the Laplace transform Laplace transform as a black box. It eats functions and spits out functions in a new variable. We write for the Laplace transform of . It is common to write lower case letters for functions in the time domain and upper case letters for functions in the frequency domain. We use the same letter to denote that one function is the Laplace transform of the other. For example, is the Laplace transform of . Let us define the transform. We note that we are only considering in the transform. Of course, if we think of as time, there is no problem; we are generally interested in finding out what will happen in the future (the Laplace transform is one place where it is safe to ignore the past). Let us compute some simple transforms.    Suppose , then The limit (the improper integral) only exists if . So is only defined for .      Suppose , then The limit only exists if . So is only defined for .      Suppose , then using integration by parts Again, the limit only exists if .      A common function is the unit step function unit step function , which is sometimes called the Heaviside function Heaviside function The function is named after the English mathematician, engineer, and physicist Oliver Heaviside (1850–1925). Only by coincidence is the function heavy on one side. . This function is generally given as Let us find the Laplace transform of , where is some constant. That is, it is the function that is for and for . where of course (and as we said before).    By applying similar procedures, we can compute the transforms of many elementary functions. Many basic transforms are listed in (see also ).   Some Laplace transforms ( , , and are constants).              Verify .    Since the transform is defined by an integral, we can use the linearity properties of the integral. For example, if is a constant, then So we can pull out a constant from the transform. Similarly, with addition. As linearity is important, we state it as a theorem.   Linearity of the Laplace transform  linearity of the Laplace transform   If , , and are constants, then and in particular,       Verify the theorem. That is, show that .    These rules together with make it easy to find the Laplace transform of a whole lot of functions already. For example: Be careful! The Laplace transform of a product is not the product of the transforms. In general Moreover, not all functions have a Laplace transform. For example, the function does not have a Laplace transform as the integral diverges for all . Similarly, or do not have Laplace transforms.    Existence and uniqueness  When does the Laplace transform exist? A function is of exponential order exponential order as goes to infinity if for some constants and , for sufficiently large (say for all for some ). The simplest way to check this condition is to try and compute If the limit exists and is finite (usually zero), then is of exponential order.    Use L'Hopital's rule from calculus to show that a polynomial is of exponential order. Hint: Note that a sum of two exponential-order functions is also of exponential order. Then show that is of exponential order for any .    For an exponential-order function, we have existence and uniqueness of the Laplace transform.   Existence   Let be continuous on the interval and of exponential order for a certain constant . Then is defined for all .    The existence is not difficult to see. Let be of exponential order, that is, for all (for simplicity ). Let , or in other words . By the comparison theorem from calculus, the improper integral defining exists because the following integral exists   The transform also exists for some other functions that are not of exponential order, but that will not be relevant to us. Before dealing with uniqueness, we note that for functions of exponential order, their Laplace transform decays at infinity:    Uniqueness   Let and be continuous and of exponential order. Suppose that there exists a constant , such that for all . Then for all .    Both theorems hold for piecewise continuous functions as well. Recall that piecewise continuous means that the function is continuous except perhaps at a discrete set of points, where it has jump discontinuities like the Heaviside function. The Laplace transform, however, does not see values at the discontinuities. So we can only conclude that outside of discontinuities. For example, the unit step function is sometimes defined using . This new step function, however, has the exact same Laplace transform as the one we defined earlier, where .    The inverse transform  As we said, the Laplace transform will allow us to convert a differential equation into an algebraic equation. Once we solve the algebraic equation in the frequency domain, we will want to get back to the time domain, as that is what we are interested in. Given a function , we wish to find a function such that . says that the solution is unique. So we can without fear make the following definition.  Suppose for some function . Define the inverse Laplace transform inverse Laplace transform as There is an integral formula for the inverse, but it is not as simple as the transform itself—it requires complex numbers and path integrals. For us it will suffice to compute the inverse using .    Take . Find the inverse Laplace transform.  We look at the table to find     As the Laplace transform is linear, the inverse Laplace transform is also linear. That is, Of course, we also have .    Take . Find the inverse Laplace transform.  First we use the method of partial fractions method of partial fractions to write in a form where we can use . We factor the denominator as and write Putting the right-hand side over a common denominator and equating the numerators, we get . Expanding and equating coefficients, we obtain , , , and thus . In other words, By linearity of the inverse Laplace transform, we get     Another useful property is the so-called shifting property shifting property or the first shifting property first shifting property  where is the Laplace transform of .    Derive the first shifting property from the definition of the Laplace transform.    The shifting property can be used, for example, when the denominator is a more complicated quadratic that may come up in the method of partial fractions. We complete the square and write such quadratics as and then use the shifting property.    Find .  First, we complete the square to make the denominator . We find Finally, we put it all together with the shifting property to find     Often, we want to be able to apply the inverse Laplace transform to rational functions, that is, functions of the form where and are polynomials. If is the Laplace transform of an exponential-order function, it goes to zero as , and so the degree of must be smaller than that of . Such rational functions are called proper rational functions proper rational function and we can always apply the method of partial fractions without polynomial division. Of course, we still need to be able to factor the denominator into linear and quadratic terms, which involves finding the roots of the denominator.      Find the Laplace transform of .      Find the Laplace transform of for some constants , , and .      Find the Laplace transform of .      Find the Laplace transform of .      Find the inverse Laplace transform of .      Find the inverse Laplace transform of .      Find the inverse Laplace transform of .      Find the Laplace transform of       Find the inverse Laplace transform of .      Find the Laplace transform of .      Find the Laplace transform of . Hint: Several integrations by parts.      Find the Laplace transform of .           Find the inverse Laplace transform of .           Find the Laplace transform of . Hint: Shifting property.           Find the Laplace transform of . Hint: Integrate by parts.          "
},
{
  "id": "laplace_section-3-5",
  "level": "2",
  "url": "laplace_section.html#laplace_section-3-5",
  "type": "Example",
  "number": "6.1.1",
  "title": "",
  "body": "  Suppose , then The limit (the improper integral) only exists if . So is only defined for .   "
},
{
  "id": "laplace_section-3-6",
  "level": "2",
  "url": "laplace_section.html#laplace_section-3-6",
  "type": "Example",
  "number": "6.1.2",
  "title": "",
  "body": "  Suppose , then The limit only exists if . So is only defined for .   "
},
{
  "id": "laplace_section-3-7",
  "level": "2",
  "url": "laplace_section.html#laplace_section-3-7",
  "type": "Example",
  "number": "6.1.3",
  "title": "",
  "body": "  Suppose , then using integration by parts Again, the limit only exists if .   "
},
{
  "id": "laplace_section-3-8",
  "level": "2",
  "url": "laplace_section.html#laplace_section-3-8",
  "type": "Example",
  "number": "6.1.4",
  "title": "",
  "body": "  A common function is the unit step function unit step function , which is sometimes called the Heaviside function Heaviside function The function is named after the English mathematician, engineer, and physicist Oliver Heaviside (1850–1925). Only by coincidence is the function heavy on one side. . This function is generally given as Let us find the Laplace transform of , where is some constant. That is, it is the function that is for and for . where of course (and as we said before).   "
},
{
  "id": "lt_table",
  "level": "2",
  "url": "laplace_section.html#lt_table",
  "type": "Table",
  "number": "6.1",
  "title": "Some Laplace transforms (<span class=\"process-math\">\\(C\\text{,}\\)<\/span> <span class=\"process-math\">\\(\\omega\\text{,}\\)<\/span> and <span class=\"process-math\">\\(a\\)<\/span> are constants).",
  "body": " Some Laplace transforms ( , , and are constants).           "
},
{
  "id": "laplace_section-3-13",
  "level": "2",
  "url": "laplace_section.html#laplace_section-3-13",
  "type": "Exercise",
  "number": "6.1.1",
  "title": "",
  "body": "  Verify .   "
},
{
  "id": "laplace_section-3-15",
  "level": "2",
  "url": "laplace_section.html#laplace_section-3-15",
  "type": "Theorem",
  "number": "6.1.1",
  "title": "Linearity of the Laplace transform.",
  "body": " Linearity of the Laplace transform  linearity of the Laplace transform   If , , and are constants, then and in particular,    "
},
{
  "id": "laplace_section-3-16",
  "level": "2",
  "url": "laplace_section.html#laplace_section-3-16",
  "type": "Exercise",
  "number": "6.1.2",
  "title": "",
  "body": "  Verify the theorem. That is, show that .   "
},
{
  "id": "laplace_section-4-3",
  "level": "2",
  "url": "laplace_section.html#laplace_section-4-3",
  "type": "Exercise",
  "number": "6.1.3",
  "title": "",
  "body": "  Use L'Hopital's rule from calculus to show that a polynomial is of exponential order. Hint: Note that a sum of two exponential-order functions is also of exponential order. Then show that is of exponential order for any .   "
},
{
  "id": "laplace_section-4-5",
  "level": "2",
  "url": "laplace_section.html#laplace_section-4-5",
  "type": "Theorem",
  "number": "6.1.2",
  "title": "Existence.",
  "body": " Existence   Let be continuous on the interval and of exponential order for a certain constant . Then is defined for all .   "
},
{
  "id": "lt_uniqthm",
  "level": "2",
  "url": "laplace_section.html#lt_uniqthm",
  "type": "Theorem",
  "number": "6.1.3",
  "title": "Uniqueness.",
  "body": " Uniqueness   Let and be continuous and of exponential order. Suppose that there exists a constant , such that for all . Then for all .   "
},
{
  "id": "laplace_section-5-4",
  "level": "2",
  "url": "laplace_section.html#laplace_section-5-4",
  "type": "Example",
  "number": "6.1.5",
  "title": "",
  "body": "  Take . Find the inverse Laplace transform.  We look at the table to find    "
},
{
  "id": "laplace_section-5-6",
  "level": "2",
  "url": "laplace_section.html#laplace_section-5-6",
  "type": "Example",
  "number": "6.1.6",
  "title": "",
  "body": "  Take . Find the inverse Laplace transform.  First we use the method of partial fractions method of partial fractions to write in a form where we can use . We factor the denominator as and write Putting the right-hand side over a common denominator and equating the numerators, we get . Expanding and equating coefficients, we obtain , , , and thus . In other words, By linearity of the inverse Laplace transform, we get    "
},
{
  "id": "laplace_section-5-8",
  "level": "2",
  "url": "laplace_section.html#laplace_section-5-8",
  "type": "Exercise",
  "number": "6.1.4",
  "title": "",
  "body": "  Derive the first shifting property from the definition of the Laplace transform.   "
},
{
  "id": "laplace_section-5-10",
  "level": "2",
  "url": "laplace_section.html#laplace_section-5-10",
  "type": "Example",
  "number": "6.1.7",
  "title": "",
  "body": "  Find .  First, we complete the square to make the denominator . We find Finally, we put it all together with the shifting property to find    "
},
{
  "id": "laplace_section-6-1",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-1",
  "type": "Exercise",
  "number": "6.1.5",
  "title": "",
  "body": "  Find the Laplace transform of .   "
},
{
  "id": "laplace_section-6-2",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-2",
  "type": "Exercise",
  "number": "6.1.6",
  "title": "",
  "body": "  Find the Laplace transform of for some constants , , and .   "
},
{
  "id": "laplace_section-6-3",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-3",
  "type": "Exercise",
  "number": "6.1.7",
  "title": "",
  "body": "  Find the Laplace transform of .   "
},
{
  "id": "laplace_section-6-4",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-4",
  "type": "Exercise",
  "number": "6.1.8",
  "title": "",
  "body": "  Find the Laplace transform of .   "
},
{
  "id": "laplace_section-6-5",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-5",
  "type": "Exercise",
  "number": "6.1.9",
  "title": "",
  "body": "  Find the inverse Laplace transform of .   "
},
{
  "id": "laplace_section-6-6",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-6",
  "type": "Exercise",
  "number": "6.1.10",
  "title": "",
  "body": "  Find the inverse Laplace transform of .   "
},
{
  "id": "laplace_section-6-7",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-7",
  "type": "Exercise",
  "number": "6.1.11",
  "title": "",
  "body": "  Find the inverse Laplace transform of .   "
},
{
  "id": "laplace_section-6-8",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-8",
  "type": "Exercise",
  "number": "6.1.12",
  "title": "",
  "body": "  Find the Laplace transform of    "
},
{
  "id": "laplace_section-6-9",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-9",
  "type": "Exercise",
  "number": "6.1.13",
  "title": "",
  "body": "  Find the inverse Laplace transform of .   "
},
{
  "id": "laplace_section-6-10",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-10",
  "type": "Exercise",
  "number": "6.1.14",
  "title": "",
  "body": "  Find the Laplace transform of .   "
},
{
  "id": "laplace_section-6-11",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-11",
  "type": "Exercise",
  "number": "6.1.15",
  "title": "",
  "body": "  Find the Laplace transform of . Hint: Several integrations by parts.   "
},
{
  "id": "laplace_section-6-12",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-12",
  "type": "Exercise",
  "number": "6.1.101",
  "title": "",
  "body": "  Find the Laplace transform of .        "
},
{
  "id": "laplace_section-6-13",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-13",
  "type": "Exercise",
  "number": "6.1.102",
  "title": "",
  "body": "  Find the inverse Laplace transform of .        "
},
{
  "id": "laplace_section-6-14",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-14",
  "type": "Exercise",
  "number": "6.1.103",
  "title": "",
  "body": "  Find the Laplace transform of . Hint: Shifting property.        "
},
{
  "id": "laplace_section-6-15",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-15",
  "type": "Exercise",
  "number": "6.1.104",
  "title": "",
  "body": "  Find the Laplace transform of . Hint: Integrate by parts.        "
},
{
  "id": "transformsofders_section",
  "level": "1",
  "url": "transformsofders_section.html",
  "type": "Section",
  "number": "6.2",
  "title": "Transforms of derivatives and ODEs",
  "body": " Transforms of derivatives and ODEs   Note: 2 lectures, §7.2–7.3 in , §6.2 and §6.3 in    Transforms of derivatives  Let us see how the Laplace transform is used for differential equations. First we find the Laplace transform of the derivative of a function. Suppose is a differentiable function of exponential order, that is, for some and . So exists, and what is more, when . Then We repeat this procedure for higher derivatives. The results are listed in . The procedure also works for continuous piecewise smooth functions, that is, functions that are continuous with a piecewise continuous derivative.   Laplace transforms of derivatives ( as usual).           Verify .      Solving ODEs with the Laplace transform  Notice that the Laplace transform turns differentiation into multiplication by . It is this property that makes it useful to apply the transform to differential equations.    Consider the problem We will take the Laplace transform of both sides of the equation. By , we will, as usual, denote the Laplace transform of . We plug in the initial conditions now—making computations more streamlined—to find We solve for , We use partial fractions (exercise) to write Now take the inverse Laplace transform to obtain     The procedure for linear constant-coefficient equations is as follows: Take an ordinary differential equation in the time variable . Apply the Laplace transform to transform the equation into an algebraic (non differential) equation in the frequency domain. All the , , , and so on, will be converted to , , , and so on. Solve the equation for . Then taking the inverse transform, if possible, find .  It should be noted that since not every function has a Laplace transform, not every equation can be solved in this manner. Also if the equation is not a linear constant-coefficient ODE, then applying the Laplace transform may not give us an algebraic equation.    Using the Heaviside function  Before we move on to more general equations than those we could solve before, we want to consider the Heaviside function. See for the graph.    Plot of the Heaviside (unit step) function .    The Heaviside function is useful for putting other functions together or cutting functions off. Usually we use for some constant ; we just shift the graph to the right by . That is, when and when . For example, suppose is a signal , and we started receiving at time . The function is then defined as Using the Heaviside function, can be written as Similarly, the step function that is on the interval and elsewhere is written as With the Heaviside function we can express functions defined piecewise. If when is in , when is in , and otherwise, then you write   How does the Heaviside function interact with the Laplace transform? We saw that (for ) This computation can be generalized into a shifting property shifting property or second shifting property second shifting property : For example,     Consider the mass-spring system where if and zero otherwise. The function is not periodic and defined piecewise; no problem for Laplace. Imagine a rocket attached to the mass is fired for 4 seconds starting at . Or perhaps imagine an RLC circuit, where the voltage is raised at a constant rate for 4 seconds starting at and then held steady again starting at (recall that represents the derivative of the voltage in the RLC circuit).  We write . We transform the equation and we plug in the initial conditions as before We solve for , We leave it as an exercise to the reader to show that In other words, . Using the second shifting property , we find Similarly, Hence, the solution is The plot of this solution is given in .   Plot of .        Transfer functions  The Laplace transform leads to the following useful concept for studying the steady-state behavior of a linear system. Consider an equation of the form where is a linear constant-coefficient differential operator. Then is usually thought of as input of the system and is thought of as the output of the system. For example, for a mass-spring system the input is the forcing function and the output is the behavior of the mass. We would like to have a convenient way to study the behavior of the system for different inputs.  Let us suppose that all the initial conditions are zero. We take the Laplace transform of the equation to obtain, for some , Solving for the ratio gives the so-called transfer function transfer function  , that is, In other words, . We get an algebraic dependence of the output of the system based on the input. We can now easily study the steady-state behavior of the system given different inputs by simply multiplying by the transfer function. Moreover, it is possible to compute the without knowing exactly what the equation is by observing the output for a given input . Once is known, you can find the output for any input.    Given (assume the initial conditions are zero), let us find the transfer function.  First, we take the Laplace transform of the equation, Now we solve for the transfer function ,   Let us see how to use the transfer function. Suppose we have the constant input . Hence , and Taking the inverse Laplace transform of , we obtain Similarly, for any other input , the output is .      Transforms of integrals  A feature of Laplace transforms is that it is also able to easily deal with integral equations. That is, equations in which integrals rather than derivatives of functions appear. The basic property, which can be proved by applying the definition and doing integration by parts, is It is sometimes useful (e.g. for computing the inverse transform) to write this as     To compute , we could apply this integration rule:       An equation containing an integral of the unknown function is called an integral equation integral equation . Consider where we wish to solve for . We apply the Laplace transform to get where . Thus The inverse Laplace transform gives       Periodic functions  The reader might ask: What about periodic functions as our input ? That is, a function where for some constant (the period). Well, let us compute : Solving for , we get As before, computing the inverse would be more complex and possibly involve consulting a table. Let us not worry about computing the inverse here.    Suppose is a version of the sawtooth sawtooth , that is, let for and use to extend it periodically. So for , for , etc. Then and a short computation with integration by parts gets         Using the Heaviside function write down the piecewise function that is 0 for , for in and for .      Using the Laplace transform solve where , , , and (system is overdamped).      Using the Laplace transform solve where , , , and (system is underdamped).      Using the Laplace transform solve where , , , and (system is critically damped).      Solve for initial conditions and .      Show the differentiation of the transform property. Suppose , then show Hint: Differentiate under the integral sign.      Solve for initial conditions and , .      Using the definition of the Laplace transform, justify the second shifting property: .      Consider the mass-spring system with a rocket from . We noticed that the solution kept oscillating after the rocket stopped running. The amplitude of the oscillation depends on the time that the rocket was fired (for 4 seconds in the example).    Find a formula for the amplitude of the resulting oscillation in terms of the amount of time the rocket is fired.    Is there a nonzero time (if so what is it?) for which the rocket fires and the resulting oscillation has amplitude 0 (the mass is not moving)?        Define     Sketch the graph of .    Write down using the Heaviside function.    Solve , , using the Laplace transform.        Find the transfer function for , , .      Suppose , , for the input function has the output .    Find , , and the transfer function .    If the input is instead instead, find the new output .        Suppose if and if , and then extend periodically for all so that . Compute the Laplace transform .      Using the Heaviside function , write down the function            Solve for initial conditions , using the Laplace transform.           Find the transfer function for , .           Suppose , , for the input function has the output . Find , , and the transfer function .     , , .     "
},
{
  "id": "ltd_table",
  "level": "2",
  "url": "transformsofders_section.html#ltd_table",
  "type": "Table",
  "number": "6.2",
  "title": "Laplace transforms of derivatives (<span class=\"process-math\">\\(G(s) = \\mathcal{L} \\bigl\\{ g(t) \\bigr\\}\\)<\/span> as usual).",
  "body": " Laplace transforms of derivatives ( as usual).        "
},
{
  "id": "transformsofders_section-3-6",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-3-6",
  "type": "Exercise",
  "number": "6.2.1",
  "title": "",
  "body": "  Verify .   "
},
{
  "id": "transformsofders_section-4-3",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-4-3",
  "type": "Example",
  "number": "6.2.1",
  "title": "",
  "body": "  Consider the problem We will take the Laplace transform of both sides of the equation. By , we will, as usual, denote the Laplace transform of . We plug in the initial conditions now—making computations more streamlined—to find We solve for , We use partial fractions (exercise) to write Now take the inverse Laplace transform to obtain    "
},
{
  "id": "lt_heavisidefig",
  "level": "2",
  "url": "transformsofders_section.html#lt_heavisidefig",
  "type": "Figure",
  "number": "6.1",
  "title": "",
  "body": " Plot of the Heaviside (unit step) function .   "
},
{
  "id": "lt_rocketex",
  "level": "2",
  "url": "transformsofders_section.html#lt_rocketex",
  "type": "Example",
  "number": "6.2.2",
  "title": "",
  "body": "  Consider the mass-spring system where if and zero otherwise. The function is not periodic and defined piecewise; no problem for Laplace. Imagine a rocket attached to the mass is fired for 4 seconds starting at . Or perhaps imagine an RLC circuit, where the voltage is raised at a constant rate for 4 seconds starting at and then held steady again starting at (recall that represents the derivative of the voltage in the RLC circuit).  We write . We transform the equation and we plug in the initial conditions as before We solve for , We leave it as an exercise to the reader to show that In other words, . Using the second shifting property , we find Similarly, Hence, the solution is The plot of this solution is given in .   Plot of .     "
},
{
  "id": "transformsofders_section-6-4",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-6-4",
  "type": "Example",
  "number": "6.2.3",
  "title": "",
  "body": "  Given (assume the initial conditions are zero), let us find the transfer function.  First, we take the Laplace transform of the equation, Now we solve for the transfer function ,   Let us see how to use the transfer function. Suppose we have the constant input . Hence , and Taking the inverse Laplace transform of , we obtain Similarly, for any other input , the output is .   "
},
{
  "id": "transformsofders_section-7-3",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-7-3",
  "type": "Example",
  "number": "6.2.4",
  "title": "",
  "body": "  To compute , we could apply this integration rule:    "
},
{
  "id": "transformsofders_section-7-4",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-7-4",
  "type": "Example",
  "number": "6.2.5",
  "title": "",
  "body": "  An equation containing an integral of the unknown function is called an integral equation integral equation . Consider where we wish to solve for . We apply the Laplace transform to get where . Thus The inverse Laplace transform gives    "
},
{
  "id": "transformsofders_section-8-3",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-3",
  "type": "Example",
  "number": "6.2.6",
  "title": "",
  "body": "  Suppose is a version of the sawtooth sawtooth , that is, let for and use to extend it periodically. So for , for , etc. Then and a short computation with integration by parts gets    "
},
{
  "id": "transformsofders_section-9-1",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-1",
  "type": "Exercise",
  "number": "6.2.2",
  "title": "",
  "body": "  Using the Heaviside function write down the piecewise function that is 0 for , for in and for .   "
},
{
  "id": "transformsofders_section-9-2",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-2",
  "type": "Exercise",
  "number": "6.2.3",
  "title": "",
  "body": "  Using the Laplace transform solve where , , , and (system is overdamped).   "
},
{
  "id": "transformsofders_section-9-3",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-3",
  "type": "Exercise",
  "number": "6.2.4",
  "title": "",
  "body": "  Using the Laplace transform solve where , , , and (system is underdamped).   "
},
{
  "id": "transformsofders_section-9-4",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-4",
  "type": "Exercise",
  "number": "6.2.5",
  "title": "",
  "body": "  Using the Laplace transform solve where , , , and (system is critically damped).   "
},
{
  "id": "transformsofders_section-9-5",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-5",
  "type": "Exercise",
  "number": "6.2.6",
  "title": "",
  "body": "  Solve for initial conditions and .   "
},
{
  "id": "transformsofders_section-9-6",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-6",
  "type": "Exercise",
  "number": "6.2.7",
  "title": "",
  "body": "  Show the differentiation of the transform property. Suppose , then show Hint: Differentiate under the integral sign.   "
},
{
  "id": "transformsofders_section-9-7",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-7",
  "type": "Exercise",
  "number": "6.2.8",
  "title": "",
  "body": "  Solve for initial conditions and , .   "
},
{
  "id": "transformsofders_section-9-8",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-8",
  "type": "Exercise",
  "number": "6.2.9",
  "title": "",
  "body": "  Using the definition of the Laplace transform, justify the second shifting property: .   "
},
{
  "id": "transformsofders_section-9-9",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-9",
  "type": "Exercise",
  "number": "6.2.10",
  "title": "",
  "body": "  Consider the mass-spring system with a rocket from . We noticed that the solution kept oscillating after the rocket stopped running. The amplitude of the oscillation depends on the time that the rocket was fired (for 4 seconds in the example).    Find a formula for the amplitude of the resulting oscillation in terms of the amount of time the rocket is fired.    Is there a nonzero time (if so what is it?) for which the rocket fires and the resulting oscillation has amplitude 0 (the mass is not moving)?     "
},
{
  "id": "transformsofders_section-9-10",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-10",
  "type": "Exercise",
  "number": "6.2.11",
  "title": "",
  "body": "  Define     Sketch the graph of .    Write down using the Heaviside function.    Solve , , using the Laplace transform.     "
},
{
  "id": "transformsofders_section-9-11",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-11",
  "type": "Exercise",
  "number": "6.2.12",
  "title": "",
  "body": "  Find the transfer function for , , .   "
},
{
  "id": "transformsofders_section-9-12",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-12",
  "type": "Exercise",
  "number": "6.2.13",
  "title": "",
  "body": "  Suppose , , for the input function has the output .    Find , , and the transfer function .    If the input is instead instead, find the new output .     "
},
{
  "id": "transformsofders_section-9-13",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-13",
  "type": "Exercise",
  "number": "6.2.14",
  "title": "",
  "body": "  Suppose if and if , and then extend periodically for all so that . Compute the Laplace transform .   "
},
{
  "id": "transformsofders_section-9-14",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-14",
  "type": "Exercise",
  "number": "6.2.101",
  "title": "",
  "body": "  Using the Heaviside function , write down the function         "
},
{
  "id": "transformsofders_section-9-15",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-15",
  "type": "Exercise",
  "number": "6.2.102",
  "title": "",
  "body": "  Solve for initial conditions , using the Laplace transform.        "
},
{
  "id": "transformsofders_section-9-16",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-16",
  "type": "Exercise",
  "number": "6.2.103",
  "title": "",
  "body": "  Find the transfer function for , .        "
},
{
  "id": "transformsofders_section-9-17",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-9-17",
  "type": "Exercise",
  "number": "6.2.104",
  "title": "",
  "body": "  Suppose , , for the input function has the output . Find , , and the transfer function .     , , .   "
},
{
  "id": "convolution_section",
  "level": "1",
  "url": "convolution_section.html",
  "type": "Section",
  "number": "6.3",
  "title": "Convolution",
  "body": " Convolution   Note: 1 or 1.5 lectures, §7.2 in , §6.6 in    The convolution  The Laplace transformation of a product is not the product of the transforms. All hope is not lost, however. We simply have to use a different type of product. Take two functions and defined for , and define the convolution convolution For those that have seen convolution before, you may have seen it defined as . This definition agrees with if you define and to be zero for . When discussing the Laplace transform, the definition we gave is sufficient. Convolution does occur in many other applications, however, where you may have to use the more general definition with infinities. of and as As you can see, the convolution of two functions of is another function of .    Take and for . Then To solve the integral we did one integration by parts.      Take and for . Then Apply the identity to get The formula holds only for . The functions , , and are undefined for .    Convolution has many properties that make it behave like a product. Let be a constant and , , and be functions. It is a calculus exercise to verify that The first property means that . The most interesting property for us is the following theorem.    If and are of exponential order, then so is and     In other words, the Laplace transform of a convolution is the product of the Laplace transforms: , or in reverse, .    Suppose we wish to find the inverse Laplace transform of We recognize the two entries of : Therefore, we convolve and , The calculation of the integral involved an integration by parts.      Solving ODEs  The next example demonstrates the full power of the convolution and the Laplace transform. We can give the solution to the forced oscillation problem for any forcing function as a definite integral.    Find the solution to for an arbitrary function .  We first apply the Laplace transform to the equation. Denote the transform of by and the transform of by as usual. We get or in other words, Recall that is the transfer function. We know Therefore, or, if we reverse the order,     Notice one more feature of the example above. We can now see how the Laplace transform handles resonance resonance . Suppose that . Then We have computed the convolution of sine and cosine in . Hence Note the in front of the sine. The solution, therefore, grows without bound as gets large, meaning we get resonance.  The general idea here is that if is the transfer function, then . If we find the , then Hence, we can solve any constant-coefficient equation with an arbitrary forcing function as a definite integral using convolution. A definite integral, rather than a closed form solution, is usually enough for most practical purposes. It is not hard to numerically evaluate a definite integral.    Volterra integral equation  An integral equation integral equation involving convolution that comes up, for example, when studying systems with memory effects is the Volterra integral equation Volterra integral equation Named for the Italian mathematician Vito Volterra (1860–1940).  Here and are known functions and is an unknown we wish to solve for. We have , so the question is if convolution is like a product, can we also divide to solve this equation. We apply the Laplace transform to the equation to obtain where , , and are the Laplace transforms of , , and respectively. We find To find , we now need to find the inverse Laplace transform of .    Solve   We apply the Laplace transform to obtain or It is not hard to apply to find         Let for , and . Compute .      Let for , and for . Compute .      Find the solution to for an arbitrary function , where , , , and (the system is overdamped). Write the solution as a definite integral.      Find the solution to for an arbitrary function , where , , , and (the system is underdamped). Write the solution as a definite integral.      Find the solution to for an arbitrary function , where , , , and (the system is critically damped). Write the solution as a definite integral.      Solve       Solve       Compute using convolution.      Write down the solution to , , as a definite integral. Hint: Do not try to compute the Laplace transform of .      Let for , and . Compute .           Compute using convolution.           Solve , , using convolution.           Solve , , , using convolution. Write the result as a definite integral.          "
},
{
  "id": "convolution_section-3-3",
  "level": "2",
  "url": "convolution_section.html#convolution_section-3-3",
  "type": "Example",
  "number": "6.3.1",
  "title": "",
  "body": "  Take and for . Then To solve the integral we did one integration by parts.   "
},
{
  "id": "ltc_convsincosex",
  "level": "2",
  "url": "convolution_section.html#ltc_convsincosex",
  "type": "Example",
  "number": "6.3.2",
  "title": "",
  "body": "  Take and for . Then Apply the identity to get The formula holds only for . The functions , , and are undefined for .   "
},
{
  "id": "convolution_section-3-6",
  "level": "2",
  "url": "convolution_section.html#convolution_section-3-6",
  "type": "Theorem",
  "number": "6.3.1",
  "title": "",
  "body": "  If and are of exponential order, then so is and    "
},
{
  "id": "convolution_section-3-8",
  "level": "2",
  "url": "convolution_section.html#convolution_section-3-8",
  "type": "Example",
  "number": "6.3.3",
  "title": "",
  "body": "  Suppose we wish to find the inverse Laplace transform of We recognize the two entries of : Therefore, we convolve and , The calculation of the integral involved an integration by parts.   "
},
{
  "id": "example_undampedforcedbylaplacearbitrhs",
  "level": "2",
  "url": "convolution_section.html#example_undampedforcedbylaplacearbitrhs",
  "type": "Example",
  "number": "6.3.4",
  "title": "",
  "body": "  Find the solution to for an arbitrary function .  We first apply the Laplace transform to the equation. Denote the transform of by and the transform of by as usual. We get or in other words, Recall that is the transfer function. We know Therefore, or, if we reverse the order,    "
},
{
  "id": "convolution_section-5-3",
  "level": "2",
  "url": "convolution_section.html#convolution_section-5-3",
  "type": "Example",
  "number": "6.3.5",
  "title": "",
  "body": "  Solve   We apply the Laplace transform to obtain or It is not hard to apply to find    "
},
{
  "id": "convolution_section-6-1",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-1",
  "type": "Exercise",
  "number": "6.3.1",
  "title": "",
  "body": "  Let for , and . Compute .   "
},
{
  "id": "convolution_section-6-2",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-2",
  "type": "Exercise",
  "number": "6.3.2",
  "title": "",
  "body": "  Let for , and for . Compute .   "
},
{
  "id": "convolution_section-6-3",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-3",
  "type": "Exercise",
  "number": "6.3.3",
  "title": "",
  "body": "  Find the solution to for an arbitrary function , where , , , and (the system is overdamped). Write the solution as a definite integral.   "
},
{
  "id": "convolution_section-6-4",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-4",
  "type": "Exercise",
  "number": "6.3.4",
  "title": "",
  "body": "  Find the solution to for an arbitrary function , where , , , and (the system is underdamped). Write the solution as a definite integral.   "
},
{
  "id": "convolution_section-6-5",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-5",
  "type": "Exercise",
  "number": "6.3.5",
  "title": "",
  "body": "  Find the solution to for an arbitrary function , where , , , and (the system is critically damped). Write the solution as a definite integral.   "
},
{
  "id": "convolution_section-6-6",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-6",
  "type": "Exercise",
  "number": "6.3.6",
  "title": "",
  "body": "  Solve    "
},
{
  "id": "convolution_section-6-7",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-7",
  "type": "Exercise",
  "number": "6.3.7",
  "title": "",
  "body": "  Solve    "
},
{
  "id": "convolution_section-6-8",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-8",
  "type": "Exercise",
  "number": "6.3.8",
  "title": "",
  "body": "  Compute using convolution.   "
},
{
  "id": "convolution_section-6-9",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-9",
  "type": "Exercise",
  "number": "6.3.9",
  "title": "",
  "body": "  Write down the solution to , , as a definite integral. Hint: Do not try to compute the Laplace transform of .   "
},
{
  "id": "convolution_section-6-10",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-10",
  "type": "Exercise",
  "number": "6.3.101",
  "title": "",
  "body": "  Let for , and . Compute .        "
},
{
  "id": "convolution_section-6-11",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-11",
  "type": "Exercise",
  "number": "6.3.102",
  "title": "",
  "body": "  Compute using convolution.        "
},
{
  "id": "convolution_section-6-12",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-12",
  "type": "Exercise",
  "number": "6.3.103",
  "title": "",
  "body": "  Solve , , using convolution.        "
},
{
  "id": "convolution_section-6-13",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-13",
  "type": "Exercise",
  "number": "6.3.104",
  "title": "",
  "body": "  Solve , , , using convolution. Write the result as a definite integral.        "
},
{
  "id": "diracdelta_section",
  "level": "1",
  "url": "diracdelta_section.html",
  "type": "Section",
  "number": "6.4",
  "title": "Dirac delta and impulse response",
  "body": " Dirac delta and impulse response   Note: 1 or 1.5 lecture, §7.6 in , §6.5 in    Rectangular pulse  Often we study a physical system by putting in a short pulse and then seeing what the system does. The resulting behavior is often called impulse response impulse response , and understanding it tells us how the system responds to any input. Let us see what we mean by a pulse. The simplest kind of a pulse is a simple rectangular pulse rectangular pulse pulse defined by See for a graph.   Sample rectangular pulse with , , and .    Notice that where is the unit step function. Let us take the Laplace transform of a rectangular pulse,   For simplicity, let . We also set so that That is, we have a pulse of unit mass. This way for any the pulse has the same oomph. For such a pulse, We want to be very small; we wish to have the pulse be very short and very tall. By letting go to zero, we arrive at the concept of the Dirac delta function. The limit of as is , so we are looking for a function whose Laplace transform is .    The delta function  The Dirac delta function Dirac delta function delta function Named after the English physicist and mathematician Paul Adrien Maurice Dirac (1902–1984). is not exactly a function; it is sometimes called a generalized function generalized function . We avoid unnecessary details and simply say that it is an object that does not really make sense unless we integrate it. The motivation is that we would like a function  such that for any continuous function , The formula should hold if we integrate over any interval that contains 0, not just . So is a function with all its mass at the single point . For any interval It is important that we consider and as part of the interval. One could write this integral as .  , Unfortunately there is no such function in the classical sense. You could informally think that is zero for and somehow infinite at .  A good way to think about is as a limit of pulses of decreasing length whose integral is . For example, consider a rectangular pulse as above with and , that is, . Compute If is continuous at , then for very small , the function is approximately equal to on the interval . We approximate the integral Hence,   Let us therefore accept as an object that is possible to integrate. We often want to shift to another point, for example . In that case, Note that is the same object as . With that, the convolution of with is again ,   As we can integrate , we compute its Laplace transform: In particular,     The Laplace transform of would be the Laplace transform of the derivative of the Heaviside function , if the Heaviside function had a derivative. First, To obtain what the Laplace transform of the derivative would be, we multiply by , to obtain , which is the Laplace transform of . We see the same thing using integration, So in a certain sense This line of reasoning allows us to talk about derivatives of functions with jump discontinuities. We can think of the derivative of the Heaviside function as being somehow infinite at , which is precisely our intuitive understanding of the delta function.      Let us compute . So far we only computed the inverse transform of proper rational functions in the variable. That is, the numerator was of lower degree than the denominator. Not so with . We can use the delta function to compute, The resulting object is a generalized function and only makes sense when put underneath an integral.      Impulse response  As we said before, in the differential equation , we think of as input, and as the output. We think of the delta function as an impulse, and so to find the response to an impulse, we use the delta function in place of . The solution to is called the impulse response impulse response .    Solve (find the impulse response)   Apply the Laplace transform to the equation, and denote the transform of by : The inverse Laplace transform produces (for )       Perhaps an astute reader will notice that it does not seem like . However, we really want to think of as for , so has a corner at , that is, has a jump discontinuity there, which is what produces the when we take . See . The initial condition really is .    Let us notice something about the example above. In , we found that when the input is , the solution to is given by That is, the solution for an arbitrary input is given as convolution with the impulse response . Let us see why. The key is to notice that for functions and , We simply differentiate twice under the integral You should really think of the integral going over rather than over and simply assume that and are zero for negative . . Suppose that is the impulse response (solution to ). If we convolve the entire equation , the left-hand side becomes The right-hand side becomes Therefore, if is the impulse response, then is the solution to   The procedure works for any constant-coefficient linear equation . If you find the impulse response (solution to ), you also know how to obtain the output for any input . We simply convolve, . As you may have noticed in the example, the impulse response is in fact just the inverse Laplace transform of the transfer function, that is, .    Three-point beam bending  three-point beam bending  A quite different example application where the delta function appears is in representing point loads on a steel beam. Consider a beam of length , resting on two simple supports at the ends. Let denote the position on the beam, and let denote the deflection of the beam in the vertical direction. The deflection satisfies the Euler–Bernoulli equation Euler–Bernoulli equation Named for the Swiss mathematicians Jacob Bernoulli (1654–1705), Daniel Bernoulli (1700–1782), the nephew of Jacob, and Leonhard Paul Euler (1707–1783). , where and are constants is the elastic modulus and is the second moment of area. Let us not worry about the details and simply think of these as some given constants. and is the force applied per unit length at position . The situation we are interested in is when the force is applied at a single point as in .   Three-point bending.    The equation becomes where is the point where the mass is applied. The constant is the force applied and the minus sign indicates that the force is downward, that is, in the negative direction. The end points of the beam satisfy the conditions, See for further information about endpoint conditions applied to beams.    Suppose that length of the beam is 2, and for simplicity. Further suppose that the force is applied at . That is, we have the equation and the endpoint conditions are   We could integrate, but using the Laplace transform is even easier. We apply the transform in the variable rather than the variable. We again denote the transform of by . We notice that and . Let us call and . We solve for , We take the inverse Laplace transform utilizing the second shifting property to take the inverse of the first term: We still need to apply two of the endpoint conditions. As the conditions are at we can simply replace when taking the derivatives. Therefore, and Hence, . Solving for using the first equation, we obtain . Our solution for the beam deflection is         Solve (find the impulse response) , , .      Solve (find the impulse response) , , .      A pulse can come later and can be bigger. Solve , , .      Suppose that and are differentiable functions (and the derivatives are continuous) and suppose that for all . Show that       Suppose that , , , has the solution for . Find the solution to , , for .      Compute .       (challenging) Solve via integrating 4 times in the variable.      Suppose we have a beam of length simply supported at the ends and suppose that force is applied at in the downward direction. Suppose that for simplicity. Find the beam deflection .      Solve (find the impulse response) , , .           Solve (find the impulse response) , , .           Suppose that , , , has the solution for . Find (in closed form) the solution to , , for .           Compute .           Compute .          "
},
{
  "id": "lt_sqpulse",
  "level": "2",
  "url": "diracdelta_section.html#lt_sqpulse",
  "type": "Figure",
  "number": "6.3",
  "title": "",
  "body": " Sample rectangular pulse with , , and .   "
},
{
  "id": "remark_deltaderivofjump",
  "level": "2",
  "url": "diracdelta_section.html#remark_deltaderivofjump",
  "type": "Remark",
  "number": "6.4.1",
  "title": "",
  "body": "  The Laplace transform of would be the Laplace transform of the derivative of the Heaviside function , if the Heaviside function had a derivative. First, To obtain what the Laplace transform of the derivative would be, we multiply by , to obtain , which is the Laplace transform of . We see the same thing using integration, So in a certain sense This line of reasoning allows us to talk about derivatives of functions with jump discontinuities. We can think of the derivative of the Heaviside function as being somehow infinite at , which is precisely our intuitive understanding of the delta function.   "
},
{
  "id": "diracdelta_section-4-7",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-4-7",
  "type": "Example",
  "number": "6.4.1",
  "title": "",
  "body": "  Let us compute . So far we only computed the inverse transform of proper rational functions in the variable. That is, the numerator was of lower degree than the denominator. Not so with . We can use the delta function to compute, The resulting object is a generalized function and only makes sense when put underneath an integral.   "
},
{
  "id": "diracdelta_section-5-3",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-5-3",
  "type": "Example",
  "number": "6.4.2",
  "title": "",
  "body": "  Solve (find the impulse response)   Apply the Laplace transform to the equation, and denote the transform of by : The inverse Laplace transform produces (for )    "
},
{
  "id": "diracdelta_section-5-4",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-5-4",
  "type": "Remark",
  "number": "6.4.2",
  "title": "",
  "body": "  Perhaps an astute reader will notice that it does not seem like . However, we really want to think of as for , so has a corner at , that is, has a jump discontinuity there, which is what produces the when we take . See . The initial condition really is .   "
},
{
  "id": "lt_beambendingfig",
  "level": "2",
  "url": "diracdelta_section.html#lt_beambendingfig",
  "type": "Figure",
  "number": "6.4",
  "title": "",
  "body": " Three-point bending.   "
},
{
  "id": "lt_examplebeam",
  "level": "2",
  "url": "diracdelta_section.html#lt_examplebeam",
  "type": "Example",
  "number": "6.4.3",
  "title": "",
  "body": "  Suppose that length of the beam is 2, and for simplicity. Further suppose that the force is applied at . That is, we have the equation and the endpoint conditions are   We could integrate, but using the Laplace transform is even easier. We apply the transform in the variable rather than the variable. We again denote the transform of by . We notice that and . Let us call and . We solve for , We take the inverse Laplace transform utilizing the second shifting property to take the inverse of the first term: We still need to apply two of the endpoint conditions. As the conditions are at we can simply replace when taking the derivatives. Therefore, and Hence, . Solving for using the first equation, we obtain . Our solution for the beam deflection is    "
},
{
  "id": "diracdelta_section-7-1",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-7-1",
  "type": "Exercise",
  "number": "6.4.1",
  "title": "",
  "body": "  Solve (find the impulse response) , , .   "
},
{
  "id": "diracdelta_section-7-2",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-7-2",
  "type": "Exercise",
  "number": "6.4.2",
  "title": "",
  "body": "  Solve (find the impulse response) , , .   "
},
{
  "id": "diracdelta_section-7-3",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-7-3",
  "type": "Exercise",
  "number": "6.4.3",
  "title": "",
  "body": "  A pulse can come later and can be bigger. Solve , , .   "
},
{
  "id": "diracdelta_section-7-4",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-7-4",
  "type": "Exercise",
  "number": "6.4.4",
  "title": "",
  "body": "  Suppose that and are differentiable functions (and the derivatives are continuous) and suppose that for all . Show that    "
},
{
  "id": "diracdelta_section-7-5",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-7-5",
  "type": "Exercise",
  "number": "6.4.5",
  "title": "",
  "body": "  Suppose that , , , has the solution for . Find the solution to , , for .   "
},
{
  "id": "diracdelta_section-7-6",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-7-6",
  "type": "Exercise",
  "number": "6.4.6",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "diracdelta_section-7-7",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-7-7",
  "type": "Exercise",
  "number": "6.4.7",
  "title": "",
  "body": "   (challenging) Solve via integrating 4 times in the variable.   "
},
{
  "id": "diracdelta_section-7-8",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-7-8",
  "type": "Exercise",
  "number": "6.4.8",
  "title": "",
  "body": "  Suppose we have a beam of length simply supported at the ends and suppose that force is applied at in the downward direction. Suppose that for simplicity. Find the beam deflection .   "
},
{
  "id": "diracdelta_section-7-9",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-7-9",
  "type": "Exercise",
  "number": "6.4.101",
  "title": "",
  "body": "  Solve (find the impulse response) , , .        "
},
{
  "id": "diracdelta_section-7-10",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-7-10",
  "type": "Exercise",
  "number": "6.4.102",
  "title": "",
  "body": "  Solve (find the impulse response) , , .        "
},
{
  "id": "diracdelta_section-7-11",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-7-11",
  "type": "Exercise",
  "number": "6.4.103",
  "title": "",
  "body": "  Suppose that , , , has the solution for . Find (in closed form) the solution to , , for .        "
},
{
  "id": "diracdelta_section-7-12",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-7-12",
  "type": "Exercise",
  "number": "6.4.104",
  "title": "",
  "body": "  Compute .        "
},
{
  "id": "diracdelta_section-7-13",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-7-13",
  "type": "Exercise",
  "number": "6.4.105",
  "title": "",
  "body": "  Compute .        "
},
{
  "id": "laplacepde_section",
  "level": "1",
  "url": "laplacepde_section.html",
  "type": "Section",
  "number": "6.5",
  "title": "Solving PDEs with the Laplace transform",
  "body": " Solving PDEs with the Laplace transform  Note: 1–1.5 lecture, can be skipped  The Laplace transform comes from the same family of transforms as does the Fourier series There is also a Fourier transform on the real line that looks sort of like the Laplace transform. , which we used in to solve partial differential equations (PDEs). It is therefore not surprising that we can also solve PDEs with the Laplace transform.  Given a PDE in two independent variables and , we use the Laplace transform on one of the variables (taking the transform of everything in sight), and derivatives in that variable become multiplications by the transformed variable . The PDE becomes an ODE, which we solve. Afterwards, we invert the transform to find a solution to the original problem. It is best to see the procedure on an example.    Consider the first-order PDE with side conditions We will assume is a constant. This equation is called the convection equation convection equation or sometimes the transport equation transport equation , and it already made an appearance in , with different conditions. See for a diagram of the setup.   Transport equation on a half line.    A physical setup of this equation is a river of viscous goo, as we do not want anything to diffuse. The function is the concentration of some toxic substance It's a river of goo already, we're not hurting the environment much more. . The variable denotes position where is the location of a factory spewing the toxic substance into the river. The toxic substance flows into the river so that at the concentration is always . We wish to see what happens past the factory, that is, at . Let be the time, and assume the factory started operations at , so that at the river is just pure goo.  Consider a function of two variables . Let us fix and transform the variable. For convenience, we treat the transformed variable as a parameter, since there are no derivatives in . That is, we write for the transformed function, and treat it as a function of , leaving as a parameter. The transform of a derivative with respect to is just differentiating the transformed function: To transform the derivative in (the variable being transformed), we use the rules from :   In our specific case, , and so . We transform the equation to find This ODE needs an initial condition. The initial condition is the other side condition of the PDE, the one that depends on . Everything is transformed, so we must also transform this condition   We solve the ODE problem , , to find We are not done, we have , but we really want . We transform the variable back to . Let be the Heaviside function. As then In other words, See for a diagram of this solution. The line of slope indicates the wavefront of the toxic substance in the picture as it is leaving the factory. What the equation does is simply move the initial condition to the right at speed .   Wavefront of toxic substance is a line of slope .    Shhh... is not differentiable, it is not even continuous (nobody ever seems to notice). How could we plug something that's not differentiable into the equation? Well, just think of a differentiable function very very close to . Or, if you recognize the derivative of the Heaviside function as the delta function, then all is well too: and So .    The Laplace transform is very good with constant-coefficient equations. One advantage of Laplace is that it easily handles nonhomogeneous side conditions. Let us try a more complicated example.    Consider   Again, we transform , and we write for the transformed function. As , we find The solution of the transformed equation is Using the second shifting property and linearity of the transform, we obtain the solution     We can also detect when the problem is ill-posed ill-posed in the sense that it has no solution. Let us change the equation to Then the problem has no solution. First, let us see this in the language of . The characteristic curves are . If is the characteristic coordinate, then we find the equation along the curve, meaning a solution is constant along characteristic curves. But these curves intersect both the -axis and the -axis. For example, the curve intersects at and . The solution is constant along the curve so should equal . But and . See .   Ill-posed problem.    Now consider the transform. The transformed problem is and the solution ought to be Importantly, this Laplace transform does not decay to zero at infinity! That is, since in the region of interest, then It almost looks as if we could use the shifting property, but notice that the shift is in the wrong direction.  Of course, we need not restrict ourselves to first-order equations, although the computations become more involved for higher-order equations.    Let us use Laplace for the following problem: This problem corresponds to a half-infinite insulated rod with a given heat flux at one end. The setup would come up in real life in the case of a sufficiently long rod, where we would not consider a long enough time for our solution to notice that we do not have an infinite rod but just a very long one. In any case, the real-life situation imposes other conditions on our solution , for example, we will assume that the solution is bounded. This boundedness condition will stand in for a boundary condition at the infinite end. Boundedness is also sufficient for the Laplace transform in the variable to exist.  Transform the equation in the variable to find The general solution to this ODE is Note that and depend on . As is bounded, then is bounded for any fixed , so for to stay bounded as , we must have .  Now consider the boundary condition at . Transform and so . In other words, If we look up the inverse transform in a table such as the one in (or we spend the afternoon doing calculus), we find So     Laplace can solve problems where separation of variables fails. Laplace does not mind nonhomogeneity, but it is essentially only useful for constant-coefficient equations.     Solve       Solve       Solve       For an , solve       Find the corresponding ODE problem for , after transforming the variable Do not solve the problem.      Write down a solution to as a definite integral (convolution). Assume that is bounded.      Use the Laplace transform in to solve Assume that is bounded. Hint: Note that for any fixed , blows up as and blows up as .      Solve            For a , solve            Find the corresponding ODE problem for , after transforming the variable Do not solve the problem.     .      Use the Laplace transform in to solve Assume that is bounded. Hint: Note that for any fixed , blows up as and blows up as .           Use the Laplace transform in to solve where is some function. Assume that is bounded. Give the answer as a convolution.          "
},
{
  "id": "laplacepde_section-5",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-5",
  "type": "Example",
  "number": "6.5.1",
  "title": "",
  "body": "  Consider the first-order PDE with side conditions We will assume is a constant. This equation is called the convection equation convection equation or sometimes the transport equation transport equation , and it already made an appearance in , with different conditions. See for a diagram of the setup.   Transport equation on a half line.    A physical setup of this equation is a river of viscous goo, as we do not want anything to diffuse. The function is the concentration of some toxic substance It's a river of goo already, we're not hurting the environment much more. . The variable denotes position where is the location of a factory spewing the toxic substance into the river. The toxic substance flows into the river so that at the concentration is always . We wish to see what happens past the factory, that is, at . Let be the time, and assume the factory started operations at , so that at the river is just pure goo.  Consider a function of two variables . Let us fix and transform the variable. For convenience, we treat the transformed variable as a parameter, since there are no derivatives in . That is, we write for the transformed function, and treat it as a function of , leaving as a parameter. The transform of a derivative with respect to is just differentiating the transformed function: To transform the derivative in (the variable being transformed), we use the rules from :   In our specific case, , and so . We transform the equation to find This ODE needs an initial condition. The initial condition is the other side condition of the PDE, the one that depends on . Everything is transformed, so we must also transform this condition   We solve the ODE problem , , to find We are not done, we have , but we really want . We transform the variable back to . Let be the Heaviside function. As then In other words, See for a diagram of this solution. The line of slope indicates the wavefront of the toxic substance in the picture as it is leaving the factory. What the equation does is simply move the initial condition to the right at speed .   Wavefront of toxic substance is a line of slope .    Shhh... is not differentiable, it is not even continuous (nobody ever seems to notice). How could we plug something that's not differentiable into the equation? Well, just think of a differentiable function very very close to . Or, if you recognize the derivative of the Heaviside function as the delta function, then all is well too: and So .   "
},
{
  "id": "laplacepde_section-7",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-7",
  "type": "Example",
  "number": "6.5.2",
  "title": "",
  "body": "  Consider   Again, we transform , and we write for the transformed function. As , we find The solution of the transformed equation is Using the second shifting property and linearity of the transform, we obtain the solution    "
},
{
  "id": "lt_half-infinite-ill-posed",
  "level": "2",
  "url": "laplacepde_section.html#lt_half-infinite-ill-posed",
  "type": "Figure",
  "number": "6.7",
  "title": "",
  "body": " Ill-posed problem.   "
},
{
  "id": "laplacepde_section-14",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-14",
  "type": "Example",
  "number": "6.5.3",
  "title": "",
  "body": "  Let us use Laplace for the following problem: This problem corresponds to a half-infinite insulated rod with a given heat flux at one end. The setup would come up in real life in the case of a sufficiently long rod, where we would not consider a long enough time for our solution to notice that we do not have an infinite rod but just a very long one. In any case, the real-life situation imposes other conditions on our solution , for example, we will assume that the solution is bounded. This boundedness condition will stand in for a boundary condition at the infinite end. Boundedness is also sufficient for the Laplace transform in the variable to exist.  Transform the equation in the variable to find The general solution to this ODE is Note that and depend on . As is bounded, then is bounded for any fixed , so for to stay bounded as , we must have .  Now consider the boundary condition at . Transform and so . In other words, If we look up the inverse transform in a table such as the one in (or we spend the afternoon doing calculus), we find So    "
},
{
  "id": "laplacepde_section-16-1",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-16-1",
  "type": "Exercise",
  "number": "6.5.1",
  "title": "",
  "body": "  Solve    "
},
{
  "id": "laplacepde_section-16-2",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-16-2",
  "type": "Exercise",
  "number": "6.5.2",
  "title": "",
  "body": "  Solve    "
},
{
  "id": "laplacepde_section-16-3",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-16-3",
  "type": "Exercise",
  "number": "6.5.3",
  "title": "",
  "body": "  Solve    "
},
{
  "id": "laplacepde_section-16-4",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-16-4",
  "type": "Exercise",
  "number": "6.5.4",
  "title": "",
  "body": "  For an , solve    "
},
{
  "id": "laplacepde_section-16-5",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-16-5",
  "type": "Exercise",
  "number": "6.5.5",
  "title": "",
  "body": "  Find the corresponding ODE problem for , after transforming the variable Do not solve the problem.   "
},
{
  "id": "laplacepde_section-16-6",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-16-6",
  "type": "Exercise",
  "number": "6.5.6",
  "title": "",
  "body": "  Write down a solution to as a definite integral (convolution). Assume that is bounded.   "
},
{
  "id": "laplacepde_section-16-7",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-16-7",
  "type": "Exercise",
  "number": "6.5.7",
  "title": "",
  "body": "  Use the Laplace transform in to solve Assume that is bounded. Hint: Note that for any fixed , blows up as and blows up as .   "
},
{
  "id": "laplacepde_section-16-8",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-16-8",
  "type": "Exercise",
  "number": "6.5.101",
  "title": "",
  "body": "  Solve         "
},
{
  "id": "laplacepde_section-16-9",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-16-9",
  "type": "Exercise",
  "number": "6.5.102",
  "title": "",
  "body": "  For a , solve         "
},
{
  "id": "laplacepde_section-16-10",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-16-10",
  "type": "Exercise",
  "number": "6.5.103",
  "title": "",
  "body": "  Find the corresponding ODE problem for , after transforming the variable Do not solve the problem.     .   "
},
{
  "id": "laplacepde_section-16-11",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-16-11",
  "type": "Exercise",
  "number": "6.5.104",
  "title": "",
  "body": "  Use the Laplace transform in to solve Assume that is bounded. Hint: Note that for any fixed , blows up as and blows up as .        "
},
{
  "id": "laplacepde_section-16-12",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-16-12",
  "type": "Exercise",
  "number": "6.5.105",
  "title": "",
  "body": "  Use the Laplace transform in to solve where is some function. Assume that is bounded. Give the answer as a convolution.        "
},
{
  "id": "powerseries_section",
  "level": "1",
  "url": "powerseries_section.html",
  "type": "Section",
  "number": "7.1",
  "title": "Power series",
  "body": " Power series   Note: 1.5 or 2 lectures, §8.1 in , §5.1 in  Many functions can be written in terms of a power series Assuming a solution of a differential equation is a power series, we can perhaps use a method reminiscent of undetermined coefficients—we try to solve for the numbers . Before we carry out this process, we review some results and concepts about power series.    Definition  As we said, a power series power series is an expression such as where and are constants. Let denote the so-called partial sum partial sum . If for some , the limit exists, we say the series  converges convergence of a power series at . At , the series always converges to . When converges at any other , we say is a convergent power series convergent power series , and we write If the series does not converge for any point , we say that the series is divergent divergent power series .    The series is convergent for any . Recall that is the factorial. By convention we define . You may recall that this series converges to .    We say that  converges absolutely converges absolutely absolute convergence at whenever the limit exists. That is, the series is convergent. If converges absolutely at , then it converges at . However, the opposite implication is not true.    The series converges absolutely for all in the interval . It converges at , as converges (conditionally) by the alternating series test. The power series does not converge absolutely at , because does not converge. The series diverges at .      Radius of convergence  If a power series converges absolutely at some , then for all such that (that is, is closer than to ), we have for all . As the numbers sum to some finite limit, summing smaller positive numbers must also have a finite limit. Hence, the series must converge absolutely at .    For a power series , there exists a number (we allow ) called the radius of convergence radius of convergence such that the series converges absolutely on the interval and diverges for and . We write if the series converges for all .     Convergence of a power series.    See . In , the radius of convergence is as the series converges everywhere. In , the radius of convergence is . We note that is another way of saying that the series is divergent.  A useful test for convergence of a series is the ratio test ratio test for series . Suppose that is a series and the limit exists. Then the series converges absolutely if and diverges if .  We apply this test to the power series . Let in the test. Compute Define by Then the series converges absolutely if . If , then the series converges absolutely if , and diverges if . That is, the radius of convergence is . If , then the series always converges.  The root test is similar root test for series . Suppose exists. Then converges absolutely if and diverges if . We can use the same calculation as above to find . Let us summarize.   Ratio and root tests for power series   Consider a power series such that exists. If , then the radius of convergence of the series is . Otherwise, the radius of convergence is . Moreover, if either limit for diverges to , then the series is divergent.      Consider We compute the limit in the ratio test, Therefore, the radius of convergence is , and the series converges absolutely on the interval . We could just as well have used the root test:       Consider Compute the limit for the root test (ratio test would also work), So the radius of convergence is : The series converges everywhere.    The root or the ratio test as given does not always apply. That is, the limit of or might not exist. Sometimes the test must be applied to the series itself—to find the rather than the . For example, for the series , we cannot apply the root with the , we must work with the limit of , which equals . This is less than when and so is the radius of convergence. Other ways exist to find the radius, but ratio and root tests cover many series arising in practice.  At the endpoints, and , the series may or may not converge, and the tests above say nothing about convergence there. Sometimes convergence at the endpoints is important, but for our purposes, we will not worry about it much.    Analytic functions  Functions represented by power series are called analytic functions analytic functions . Not all functions are analytic, but the functions you have seen in calculus likely all are. An analytic function equals its Taylor series Taylor series Named after the English mathematician Sir Brook Taylor (1685–1731). (a power series computed from ) for near a given point : where denotes the derivative of at the point .  For example, sine is an analytic function and its Taylor series around is given by In , we plot and the truncations of the series up to degree 5 and 9. You can see that the approximation is very good for near 0, but gets worse for further away from 0. This is what happens in general. To get a good approximation far away from you need to take more and more terms of the Taylor series.   The sine function and its Taylor approximations around of and degree.      Manipulating power series  One of the main properties of power series that we will use is that we can differentiate them term by term. That is, suppose that is a convergent power series. Then for in the radius of convergence, we have Notice that the term corresponding to disappeared as it was constant. The radius of convergence of the differentiated series is the same as that of the original.    Let us show that the exponential solves . Suppose we did not know that. Write Differentiate , We reindex reindexing the series the series by simply replacing with . The series does not change, what changes is simply how we write it. After reindexing the series starts at again. That was precisely the power series for we started with, so we showed that .    Convergent power series can be added and multiplied together, and multiplied by constants using the following rules. First, we can add series by adding term by term, We can multiply by constants, We can also multiply series together, where . The radius of convergence of the sum or the product is at least the minimum of the radii of convergence of the two series involved.    Power series for rational functions  Polynomials are simply finite power series. That is, a polynomial is a power series where the are zero for all large enough. We can always expand a polynomial as a power series about any point by writing the polynomial as a polynomial in . For example, let us write as a power series around : In other words, , , , and all other . To do this, we know that for all as the polynomial is of degree 2. We write , we expand, and we solve for , , and . We could have also differentiated at and used the Taylor series formula .  Let us look at rational functions, that is, ratios of polynomials. An important fact is that a series for a function only defines the function on an interval even if the function is defined elsewhere. For example, for , This series is called the geometric series geometric series . The ratio test tells us that the radius of convergence is . The series diverges for and , even though is defined for all .  Instead of applying the Taylor series expansion , the geometric series together with rules for addition and multiplication of power series can be used to expand any rational function around a point , as long as the denominator is not zero at .    Expand as a power series around the origin ( ) and find the radius of convergence.  First, write . Compute where to get , we use the formula for the product of series: , , , etc. Therefore The radius of convergence is at least 1. We use the ratio test So the radius of convergence is actually equal to 1.    When the rational function is more complicated, it is also possible to use the method of partial fractions. For example, to find the Taylor series for , we write       Is a convergent power series? If so, find the radius of convergence.      Is a convergent power series? If so, find the radius of convergence.      Is a convergent power series? If so, find the radius of convergence.      Is a convergent power series? If so, find the radius of convergence.      Determine the Taylor series for around the point .      Find the Taylor series for around the point , and the radius of convergence.      Determine the Taylor series and its radius of convergence of around .      Determine the Taylor series and its radius of convergence of around . Hint: You will not be able to use the ratio test.      Expand as a power series around .      Suppose that the ratio test applies to a series . Show, using the ratio test, that the radius of convergence of the differentiated series is the same as that of the original series.      Suppose that is an analytic function such that . Find .      Is a convergent power series? If so, find the radius of convergence.    Yes. Radius of convergence is .       (challenging) Is a convergent power series? If so, find the radius of convergence.    Yes. Radius of convergence is .      Using the geometric series, expand around . For what does the series converge?     so , which converges for .       (challenging) Find the Taylor series for around .            (challenging) Imagine and are analytic functions such that for all large enough . What can you say about ?     is a polynomial. Hint: Use Taylor series.      Reindex the following series to have the powers be .                     a)  b)  c)      "
},
{
  "id": "ps_expex",
  "level": "2",
  "url": "powerseries_section.html#ps_expex",
  "type": "Example",
  "number": "7.1.1",
  "title": "",
  "body": "  The series is convergent for any . Recall that is the factorial. By convention we define . You may recall that this series converges to .   "
},
{
  "id": "ps_1kex",
  "level": "2",
  "url": "powerseries_section.html#ps_1kex",
  "type": "Example",
  "number": "7.1.2",
  "title": "",
  "body": "  The series converges absolutely for all in the interval . It converges at , as converges (conditionally) by the alternating series test. The power series does not converge absolutely at , because does not converge. The series diverges at .   "
},
{
  "id": "powerseries_section-4-3",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-4-3",
  "type": "Theorem",
  "number": "7.1.1",
  "title": "",
  "body": "  For a power series , there exists a number (we allow ) called the radius of convergence radius of convergence such that the series converges absolutely on the interval and diverges for and . We write if the series converges for all .   "
},
{
  "id": "ps_convfig",
  "level": "2",
  "url": "powerseries_section.html#ps_convfig",
  "type": "Figure",
  "number": "7.1",
  "title": "",
  "body": " Convergence of a power series.   "
},
{
  "id": "powerseries_section-4-11",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-4-11",
  "type": "Theorem",
  "number": "7.1.2",
  "title": "Ratio and root tests for power series.",
  "body": " Ratio and root tests for power series   Consider a power series such that exists. If , then the radius of convergence of the series is . Otherwise, the radius of convergence is . Moreover, if either limit for diverges to , then the series is divergent.   "
},
{
  "id": "powerseries_section-4-12",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-4-12",
  "type": "Example",
  "number": "7.1.3",
  "title": "",
  "body": "  Consider We compute the limit in the ratio test, Therefore, the radius of convergence is , and the series converges absolutely on the interval . We could just as well have used the root test:    "
},
{
  "id": "powerseries_section-4-13",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-4-13",
  "type": "Example",
  "number": "7.1.4",
  "title": "",
  "body": "  Consider Compute the limit for the root test (ratio test would also work), So the radius of convergence is : The series converges everywhere.   "
},
{
  "id": "ps_sin",
  "level": "2",
  "url": "powerseries_section.html#ps_sin",
  "type": "Figure",
  "number": "7.2",
  "title": "",
  "body": " The sine function and its Taylor approximations around of and degree.   "
},
{
  "id": "powerseries_section-6-3",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-6-3",
  "type": "Example",
  "number": "7.1.5",
  "title": "",
  "body": "  Let us show that the exponential solves . Suppose we did not know that. Write Differentiate , We reindex reindexing the series the series by simply replacing with . The series does not change, what changes is simply how we write it. After reindexing the series starts at again. That was precisely the power series for we started with, so we showed that .   "
},
{
  "id": "powerseries_section-7-5",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-7-5",
  "type": "Example",
  "number": "7.1.6",
  "title": "",
  "body": "  Expand as a power series around the origin ( ) and find the radius of convergence.  First, write . Compute where to get , we use the formula for the product of series: , , , etc. Therefore The radius of convergence is at least 1. We use the ratio test So the radius of convergence is actually equal to 1.   "
},
{
  "id": "powerseries_section-8-1",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-1",
  "type": "Exercise",
  "number": "7.1.1",
  "title": "",
  "body": "  Is a convergent power series? If so, find the radius of convergence.   "
},
{
  "id": "powerseries_section-8-2",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-2",
  "type": "Exercise",
  "number": "7.1.2",
  "title": "",
  "body": "  Is a convergent power series? If so, find the radius of convergence.   "
},
{
  "id": "powerseries_section-8-3",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-3",
  "type": "Exercise",
  "number": "7.1.3",
  "title": "",
  "body": "  Is a convergent power series? If so, find the radius of convergence.   "
},
{
  "id": "powerseries_section-8-4",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-4",
  "type": "Exercise",
  "number": "7.1.4",
  "title": "",
  "body": "  Is a convergent power series? If so, find the radius of convergence.   "
},
{
  "id": "powerseries_section-8-5",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-5",
  "type": "Exercise",
  "number": "7.1.5",
  "title": "",
  "body": "  Determine the Taylor series for around the point .   "
},
{
  "id": "powerseries_section-8-6",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-6",
  "type": "Exercise",
  "number": "7.1.6",
  "title": "",
  "body": "  Find the Taylor series for around the point , and the radius of convergence.   "
},
{
  "id": "powerseries_section-8-7",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-7",
  "type": "Exercise",
  "number": "7.1.7",
  "title": "",
  "body": "  Determine the Taylor series and its radius of convergence of around .   "
},
{
  "id": "powerseries_section-8-8",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-8",
  "type": "Exercise",
  "number": "7.1.8",
  "title": "",
  "body": "  Determine the Taylor series and its radius of convergence of around . Hint: You will not be able to use the ratio test.   "
},
{
  "id": "powerseries_section-8-9",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-9",
  "type": "Exercise",
  "number": "7.1.9",
  "title": "",
  "body": "  Expand as a power series around .   "
},
{
  "id": "powerseries_section-8-10",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-10",
  "type": "Exercise",
  "number": "7.1.10",
  "title": "",
  "body": "  Suppose that the ratio test applies to a series . Show, using the ratio test, that the radius of convergence of the differentiated series is the same as that of the original series.   "
},
{
  "id": "powerseries_section-8-11",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-11",
  "type": "Exercise",
  "number": "7.1.11",
  "title": "",
  "body": "  Suppose that is an analytic function such that . Find .   "
},
{
  "id": "powerseries_section-8-12",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-12",
  "type": "Exercise",
  "number": "7.1.101",
  "title": "",
  "body": "  Is a convergent power series? If so, find the radius of convergence.    Yes. Radius of convergence is .   "
},
{
  "id": "powerseries_section-8-13",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-13",
  "type": "Exercise",
  "number": "7.1.102",
  "title": "",
  "body": "   (challenging) Is a convergent power series? If so, find the radius of convergence.    Yes. Radius of convergence is .   "
},
{
  "id": "powerseries_section-8-14",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-14",
  "type": "Exercise",
  "number": "7.1.103",
  "title": "",
  "body": "  Using the geometric series, expand around . For what does the series converge?     so , which converges for .   "
},
{
  "id": "powerseries_section-8-15",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-15",
  "type": "Exercise",
  "number": "7.1.104",
  "title": "",
  "body": "   (challenging) Find the Taylor series for around .        "
},
{
  "id": "powerseries_section-8-16",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-16",
  "type": "Exercise",
  "number": "7.1.105",
  "title": "",
  "body": "   (challenging) Imagine and are analytic functions such that for all large enough . What can you say about ?     is a polynomial. Hint: Use Taylor series.   "
},
{
  "id": "powerseries_section-8-17",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-8-17",
  "type": "Exercise",
  "number": "7.1.106",
  "title": "",
  "body": "  Reindex the following series to have the powers be .                     a)  b)  c)    "
},
{
  "id": "seriessols_section",
  "level": "1",
  "url": "seriessols_section.html",
  "type": "Section",
  "number": "7.2",
  "title": "Series solutions of linear second-order ODEs",
  "body": " Series solutions of linear second-order ODEs  Note: 1.5 or 2 lectures, §8.2 in , §5.2 and §5.3 in  Consider a linear second-order homogeneous ODE of the form Suppose that , , and are polynomials. We will try a solution of the form and solve for the to try to obtain a solution defined in some interval around .  The point is called an ordinary point ordinary point if . That is, the functions are defined for near . If , then we say is a singular point singular point . Handling singular points is harder than ordinary points and so we now focus only on ordinary points.    We start with a very simple example Let us try a power series solution near , which is an ordinary point. Every point is an ordinary point in fact, as the equation is a constant-coefficient one. We already know we should obtain exponentials or the hyperbolic sine and cosine, but let us pretend we do not know this fact.  We try If we differentiate, the term is a constant and hence disappears. We get We differentiate yet again to obtain (now the term disappears) We need to subtract from , so we reindex the series for (replace with ): Now we plug and into the differential equation As is supposed to be equal to 0, we know that the coefficients of the resulting series must be equal to 0. Therefore, for every , we have The equation above is called a recurrence relation recurrence relation for the coefficients of the power series. It does not matter what or are. They can be arbitrary. But once we pick and , all other coefficients are determined by the recurrence relation.  Let us see what the coefficients must be. First, and are arbitrary. Then, For even , that is, , we have For odd , that is, , we have We write down the series for the solution We recognize the two series as the hyperbolic sine and cosine. Therefore,     Of course, in general we will not be able to recognize the series that appears, since usually there will not be any elementary function that matches it. In that case, we will be content with the series.    Let us do a more complex example. Consider Airy's equation Airy's equation Named after the English mathematician Sir George Biddell Airy (1801–1892). : near the point . Note that is an ordinary point.  We try We differentiate twice (as above) to obtain We plug into the equation We reindex and synchronize the start indexes to make the series possible to add As is supposed to be , we have , and We jump in steps of three. First, since , we must have , , , etc. In general, .  The constants and are arbitrary and we obtain For where is a multiple of , that is, , we notice that For where , we notice In other words, if we write down the series for , it has two parts We define and write the general solution to the equation as . If we plug into the power series for and , we find and . Similarly, and . Therefore is a solution that satisfies the initial conditions and .   The two solutions and to Airy's equation.      The functions and cannot be written in terms of the elementary functions that you know. See for the plot of the solutions and . These functions have many interesting properties. For example, they are oscillatory for negative (like solutions to ) and for positive they grow without bound (like solutions to ).  Sometimes a series solution may turn out to be a polynomial. Let us see an example.    Let us find a solution to the so-called Hermite's equation of order Hermite's equation of order Named after the French mathematician Charles Hermite (1822–1901). :   Let us find a solution around the point . We try We differentiate (as above) to obtain   Now we plug into the equation As , we have This recurrence relation actually includes (which comes about from the constant term ). Again and are arbitrary. We separate the even and odd coefficients to find that We write down the two series, one with the even powers and one with the odd. Then   We remark that if is a positive even integer, then is a polynomial as all the coefficients in the series beyond degree are zero. If is a positive odd integer, then is a polynomial. For example, if , then      In the following exercises, when asked to solve an equation using power series methods, you should find the first few terms of the series, and if possible find a general formula for the coefficient.    Use power series methods to solve at the point .      Use power series methods to solve at the point .      Use power series methods to solve at the point .      Use power series methods to solve at the point .      The methods work for other orders than second order. Try the methods of this section to solve the first-order system at the point .     Chebyshev's equation of order  Chebyshev's equation of order       Solve using power series methods at .    For what is there a polynomial solution?        Find a polynomial solution to using power series methods.          Use power series methods to solve at the point .    Use the solution to part a) to find a solution for around the point .        Use power series methods to solve at the point .     , , , recurrence relation (for ): , so:         (challenging) Power-series methods also work for nonhomogeneous equations.    Use power series methods to solve at the point . Hint: Recall the geometric series.    Now solve for the initial condition , .      a) , and for we have , so   b)       Attempt to solve at using the power series method of this section ( is a singular point). Can you find at least one solution? Can you find more than one solution?    Applying the method of this section directly we obtain for all and so is the only solution we find.     "
},
{
  "id": "seriessols_section-5",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-5",
  "type": "Example",
  "number": "7.2.1",
  "title": "",
  "body": "  We start with a very simple example Let us try a power series solution near , which is an ordinary point. Every point is an ordinary point in fact, as the equation is a constant-coefficient one. We already know we should obtain exponentials or the hyperbolic sine and cosine, but let us pretend we do not know this fact.  We try If we differentiate, the term is a constant and hence disappears. We get We differentiate yet again to obtain (now the term disappears) We need to subtract from , so we reindex the series for (replace with ): Now we plug and into the differential equation As is supposed to be equal to 0, we know that the coefficients of the resulting series must be equal to 0. Therefore, for every , we have The equation above is called a recurrence relation recurrence relation for the coefficients of the power series. It does not matter what or are. They can be arbitrary. But once we pick and , all other coefficients are determined by the recurrence relation.  Let us see what the coefficients must be. First, and are arbitrary. Then, For even , that is, , we have For odd , that is, , we have We write down the series for the solution We recognize the two series as the hyperbolic sine and cosine. Therefore,    "
},
{
  "id": "seriessols_section-7",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-7",
  "type": "Example",
  "number": "7.2.2",
  "title": "",
  "body": "  Let us do a more complex example. Consider Airy's equation Airy's equation Named after the English mathematician Sir George Biddell Airy (1801–1892). : near the point . Note that is an ordinary point.  We try We differentiate twice (as above) to obtain We plug into the equation We reindex and synchronize the start indexes to make the series possible to add As is supposed to be , we have , and We jump in steps of three. First, since , we must have , , , etc. In general, .  The constants and are arbitrary and we obtain For where is a multiple of , that is, , we notice that For where , we notice In other words, if we write down the series for , it has two parts We define and write the general solution to the equation as . If we plug into the power series for and , we find and . Similarly, and . Therefore is a solution that satisfies the initial conditions and .   The two solutions and to Airy's equation.     "
},
{
  "id": "seriessols_section-10",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-10",
  "type": "Example",
  "number": "7.2.3",
  "title": "",
  "body": "  Let us find a solution to the so-called Hermite's equation of order Hermite's equation of order Named after the French mathematician Charles Hermite (1822–1901). :   Let us find a solution around the point . We try We differentiate (as above) to obtain   Now we plug into the equation As , we have This recurrence relation actually includes (which comes about from the constant term ). Again and are arbitrary. We separate the even and odd coefficients to find that We write down the two series, one with the even powers and one with the odd. Then   We remark that if is a positive even integer, then is a polynomial as all the coefficients in the series beyond degree are zero. If is a positive odd integer, then is a polynomial. For example, if , then    "
},
{
  "id": "seriessols_section-11-2",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-11-2",
  "type": "Exercise",
  "number": "7.2.1",
  "title": "",
  "body": "  Use power series methods to solve at the point .   "
},
{
  "id": "seriessols_section-11-3",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-11-3",
  "type": "Exercise",
  "number": "7.2.2",
  "title": "",
  "body": "  Use power series methods to solve at the point .   "
},
{
  "id": "seriessols_section-11-4",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-11-4",
  "type": "Exercise",
  "number": "7.2.3",
  "title": "",
  "body": "  Use power series methods to solve at the point .   "
},
{
  "id": "seriessols_section-11-5",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-11-5",
  "type": "Exercise",
  "number": "7.2.4",
  "title": "",
  "body": "  Use power series methods to solve at the point .   "
},
{
  "id": "seriessols_section-11-6",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-11-6",
  "type": "Exercise",
  "number": "7.2.5",
  "title": "",
  "body": "  The methods work for other orders than second order. Try the methods of this section to solve the first-order system at the point .   "
},
{
  "id": "seriessols_section-11-7",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-11-7",
  "type": "Exercise",
  "number": "7.2.6",
  "title": "Chebyshev’s equation of order <span class=\"process-math\">\\(p\\)<\/span>.",
  "body": " Chebyshev's equation of order  Chebyshev's equation of order       Solve using power series methods at .    For what is there a polynomial solution?     "
},
{
  "id": "seriessols_section-11-8",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-11-8",
  "type": "Exercise",
  "number": "7.2.7",
  "title": "",
  "body": "  Find a polynomial solution to using power series methods.   "
},
{
  "id": "seriessols_section-11-9",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-11-9",
  "type": "Exercise",
  "number": "7.2.8",
  "title": "",
  "body": "      Use power series methods to solve at the point .    Use the solution to part a) to find a solution for around the point .     "
},
{
  "id": "seriessols_section-11-10",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-11-10",
  "type": "Exercise",
  "number": "7.2.101",
  "title": "",
  "body": "  Use power series methods to solve at the point .     , , , recurrence relation (for ): , so:     "
},
{
  "id": "seriessols_section-11-11",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-11-11",
  "type": "Exercise",
  "number": "7.2.102",
  "title": "",
  "body": "   (challenging) Power-series methods also work for nonhomogeneous equations.    Use power series methods to solve at the point . Hint: Recall the geometric series.    Now solve for the initial condition , .      a) , and for we have , so   b)    "
},
{
  "id": "seriessols_section-11-12",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-11-12",
  "type": "Exercise",
  "number": "7.2.103",
  "title": "",
  "body": "  Attempt to solve at using the power series method of this section ( is a singular point). Can you find at least one solution? Can you find more than one solution?    Applying the method of this section directly we obtain for all and so is the only solution we find.   "
},
{
  "id": "frobenius_section",
  "level": "1",
  "url": "frobenius_section.html",
  "type": "Section",
  "number": "7.3",
  "title": "Singular points and the method of Frobenius",
  "body": " Singular points and the method of Frobenius   Note: 1.5 or 2 lectures, §8.3 and §8.4 in , §5.4–§5.7 in  The behavior of ODEs at singular points can be complicated. For certain singular points, we can find a solution on at least one side of the singular point using a modification of the power series. Let us look at some examples before giving a general method.    Examples    Consider the simple first-order equation Note that is a singular point. Setting in the equation, we find that any solution defined near zero satisfies , but it is even worse. If we try to plug in we obtain First, . Next, the only way to solve for is for for all . Therefore, in this manner we only get the trivial solution . We need a nonzero solution to get the general solution to the equation.  Let us try for some real number . Consequently our solution—if we can find one—may only make sense for positive . Then . So Thus and so . As the equation is linear, the general solution for positive is If , then the derivative of the solution blows up at (the singular point). There is only one solution that is differentiable at and that's the trivial solution .    Not every problem with a singular point has a solution of the form , of course. But perhaps we can combine the methods. What we will do is to try a solution of the form for positive , where is an analytic function (a power series).    Consider the equation and again note that is a singular point.  Let us try where is a real number, not necessarily an integer. Again if such a solution exists, it may only exist for positive . First we find the derivatives We plug those into our equation: First, to have a solution we must have . Supposing , This equation is called the indicial equation indicial equation . This particular indicial equation has a double root at .  OK, so we know what has to be. That knowledge we obtained simply by looking at the coefficient of . All other coefficients of also have to be zero so If we plug in and solve for , we get Let us set . Then Extrapolating, we notice that In other words, That was lucky! In general, we will not be able to write the series in terms of elementary functions.  We have one solution, let us call it . But what about a second solution? If we want a general solution, we need two linearly independent solutions. Picking to be a different constant only gets us a constant multiple of , and we do not have any other to try; we only have one solution to the indicial equation. Well, there are powers of floating around and we are taking derivatives, perhaps the logarithm (the antiderivative of ) is around as well. It turns out we want to try for another solution of the form which in our case is We now differentiate this equation, substitute into the differential equation and solve for . A long computation ensues and we obtain some recursion relation for . The reader can (and should) try this to obtain for example the first three terms We then fix and obtain a solution . Then we write the general solution as .      The method of Frobenius  Before giving the general method, let us clarify when the method applies. Let be an ODE. As before, if , then is a singular point. If we divide by to put the equation in standard form , perhaps the singularities introduced are not too bad. More specifically, if the limits both exist and are finite, then we say that is a regular singular point regular singular point .    Often, and for the rest of this section, . Consider Write So is a regular singular point.  On the other hand, if we make the slight change then Here DNE stands for does not exist . The point is singular, but not a regular singular point.    We now discuss the general Method of Frobenius Method of Frobenius Frobenius method Named after the German mathematician Ferdinand Georg Frobenius (1849–1917). . We only consider the method at the point for simplicity. If , then in the solution, we would replace every with . The main idea is the following theorem.   Method of Frobenius   Suppose that has a regular singular point at , then there exists at least one solution of the form A solution of this form is called a Frobenius-type solution Frobenius-type solution .    The method usually breaks down like this:    We seek a Frobenius-type solution of the form We plug this into equation . We collect terms and write everything as a single series.    The obtained series must be zero. Setting the first coefficient (usually the coefficient of ) in the series to zero we obtain the indicial equation , which is a quadratic polynomial in .    If the indicial equation has two real roots and such that is not an integer, then we have two linearly independent Frobenius-type solutions. Using the first root, we plug in and we solve for all to obtain the first solution. Then using the second root, we plug in and solve for all to obtain the second solution.    If the indicial equation has a doubled root , then there we find one solution and then we obtain a new solution by plugging into equation and solving for the constants .    If the indicial equation has two real roots such that is an integer, then one solution is and the second linearly independent solution is of the form where we plug into and solve for the constants and .    Finally, if the indicial equation has complex roots, then solving for in the solution results in a complex-valued function—the are complex numbers. We obtain our two linearly independent solutions See Joseph L. Neuringer, The Frobenius method for complex roots of the indicial equation , International Journal of Mathematical Education in Science and Technology, Volume 9, Issue 1, 1978, 71–77. by taking the real and imaginary parts of .    The main idea is to find at least one Frobenius-type solution. If we are lucky and find two, we are done. If we only get one, we either use the ideas above or even a different method such as reduction of order (see ) to obtain a second solution.    Bessel functions  An important class of functions that arise commonly in physics are the Bessel functions Named after the German astronomer and mathematician Friedrich Wilhelm Bessel (1784–1846). . For example, these functions appear when solving the wave equation in two and three dimensions. First consider Bessel's equation Bessel's equation of order : We allow to be any number, not just an integer, although integers and multiples of are most important in applications.  When we plug into Bessel's equation of order , we obtain the indicial equation We obtain two roots, and . If is not an integer, then following the method of Frobenius and setting , we find linearly independent solutions of the form         Verify that the indicial equation of Bessel's equation of order is .    Suppose is not an integer. Carry out the computation to obtain the solutions and above.      Bessel functions are convenient constant multiples of and . First we must define the gamma function  Notice that . The gamma function also has a wonderful property From this property, it follows that when is an integer. So the gamma function is a continuous version of the factorial. We compute:     Verify the identities above using .    We define the Bessel functions of the first kind Bessel function of the first kind of order and as As these are constant multiples of the solutions we found above, these are both solutions to Bessel's equation of order . The constants are picked for convenience.  When is not an integer, and are linearly independent. When is an integer we obtain In this case and so is not a second linearly independent solution. The other solution is the so-called Bessel function of second kind Bessel function of second kind . These make sense only for integer orders and are defined as limits of linear combinations of and , as approaches in the following way: Each linear combination of and is a solution to Bessel's equation of order . Then as we take the limit as goes to , we see that is a solution to Bessel's equation of order . It also turns out that and are linearly independent. Therefore when is an integer, we have the general solution to Bessel's equation of order : for arbitrary constants and . Note that goes to negative infinity at . Many mathematical software packages have these functions and defined, so they can be used just like say and . In fact, Bessel functions have some similar properties. For example, is a derivative of , and in general the derivative of can be written as a linear combination of and . Furthermore, these functions oscillate, although they are not periodic. See for graphs of Bessel functions.   Plot of the and in the first graph and and in the second graph.      Other equations can sometimes be solved in terms of the Bessel functions. For example, given a positive constant , can be changed to . Changing variables , we obtain, via the chain rule, the equation in and : which we recognize as Bessel's equation of order . Therefore the general solution is , or in terms of : This equation comes up, for example, when finding the fundamental modes of vibration of a circular drum, but we digress.        Find a particular (Frobenius-type) solution of .      Find a particular (Frobenius-type) solution of .      Find a particular (Frobenius-type) solution of .      Find the general solution of .      Find the general solution of .      In the following equations classify the point as ordinary , regular singular , or singular but not regular singular .                                 In the following equations classify the point as ordinary , regular singular , or singular but not regular singular .                               a) ordinary, b) singular but not regular singular, c) regular singular, d) regular singular, e) ordinary.      Find the general solution of .           Find a particular solution of .     (Note that for convenience we did not pick .)       (tricky) Find the general solution of .          "
},
{
  "id": "frobenius_section-3-2",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-3-2",
  "type": "Example",
  "number": "7.3.1",
  "title": "",
  "body": "  Consider the simple first-order equation Note that is a singular point. Setting in the equation, we find that any solution defined near zero satisfies , but it is even worse. If we try to plug in we obtain First, . Next, the only way to solve for is for for all . Therefore, in this manner we only get the trivial solution . We need a nonzero solution to get the general solution to the equation.  Let us try for some real number . Consequently our solution—if we can find one—may only make sense for positive . Then . So Thus and so . As the equation is linear, the general solution for positive is If , then the derivative of the solution blows up at (the singular point). There is only one solution that is differentiable at and that's the trivial solution .   "
},
{
  "id": "frobenius_section-3-4",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-3-4",
  "type": "Example",
  "number": "7.3.2",
  "title": "",
  "body": "  Consider the equation and again note that is a singular point.  Let us try where is a real number, not necessarily an integer. Again if such a solution exists, it may only exist for positive . First we find the derivatives We plug those into our equation: First, to have a solution we must have . Supposing , This equation is called the indicial equation indicial equation . This particular indicial equation has a double root at .  OK, so we know what has to be. That knowledge we obtained simply by looking at the coefficient of . All other coefficients of also have to be zero so If we plug in and solve for , we get Let us set . Then Extrapolating, we notice that In other words, That was lucky! In general, we will not be able to write the series in terms of elementary functions.  We have one solution, let us call it . But what about a second solution? If we want a general solution, we need two linearly independent solutions. Picking to be a different constant only gets us a constant multiple of , and we do not have any other to try; we only have one solution to the indicial equation. Well, there are powers of floating around and we are taking derivatives, perhaps the logarithm (the antiderivative of ) is around as well. It turns out we want to try for another solution of the form which in our case is We now differentiate this equation, substitute into the differential equation and solve for . A long computation ensues and we obtain some recursion relation for . The reader can (and should) try this to obtain for example the first three terms We then fix and obtain a solution . Then we write the general solution as .   "
},
{
  "id": "frobenius_section-4-3",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-4-3",
  "type": "Example",
  "number": "7.3.3",
  "title": "",
  "body": "  Often, and for the rest of this section, . Consider Write So is a regular singular point.  On the other hand, if we make the slight change then Here DNE stands for does not exist . The point is singular, but not a regular singular point.   "
},
{
  "id": "frobenius_section-4-5",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-4-5",
  "type": "Theorem",
  "number": "7.3.1",
  "title": "Method of Frobenius.",
  "body": " Method of Frobenius   Suppose that has a regular singular point at , then there exists at least one solution of the form A solution of this form is called a Frobenius-type solution Frobenius-type solution .   "
},
{
  "id": "bessel_subsection-4",
  "level": "2",
  "url": "frobenius_section.html#bessel_subsection-4",
  "type": "Exercise",
  "number": "7.3.1",
  "title": "",
  "body": "      Verify that the indicial equation of Bessel's equation of order is .    Suppose is not an integer. Carry out the computation to obtain the solutions and above.     "
},
{
  "id": "bessel_subsection-6",
  "level": "2",
  "url": "frobenius_section.html#bessel_subsection-6",
  "type": "Exercise",
  "number": "7.3.2",
  "title": "",
  "body": "  Verify the identities above using .   "
},
{
  "id": "bessel_graphsfig",
  "level": "2",
  "url": "frobenius_section.html#bessel_graphsfig",
  "type": "Figure",
  "number": "7.4",
  "title": "",
  "body": " Plot of the and in the first graph and and in the second graph.   "
},
{
  "id": "bessel_subsection-12",
  "level": "2",
  "url": "frobenius_section.html#bessel_subsection-12",
  "type": "Example",
  "number": "7.3.4",
  "title": "",
  "body": "  Other equations can sometimes be solved in terms of the Bessel functions. For example, given a positive constant , can be changed to . Changing variables , we obtain, via the chain rule, the equation in and : which we recognize as Bessel's equation of order . Therefore the general solution is , or in terms of : This equation comes up, for example, when finding the fundamental modes of vibration of a circular drum, but we digress.   "
},
{
  "id": "frobenius_section-6-1",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-1",
  "type": "Exercise",
  "number": "7.3.3",
  "title": "",
  "body": "  Find a particular (Frobenius-type) solution of .   "
},
{
  "id": "frobenius_section-6-2",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-2",
  "type": "Exercise",
  "number": "7.3.4",
  "title": "",
  "body": "  Find a particular (Frobenius-type) solution of .   "
},
{
  "id": "frobenius_section-6-3",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-3",
  "type": "Exercise",
  "number": "7.3.5",
  "title": "",
  "body": "  Find a particular (Frobenius-type) solution of .   "
},
{
  "id": "frobenius_section-6-4",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-4",
  "type": "Exercise",
  "number": "7.3.6",
  "title": "",
  "body": "  Find the general solution of .   "
},
{
  "id": "frobenius_section-6-5",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-5",
  "type": "Exercise",
  "number": "7.3.7",
  "title": "",
  "body": "  Find the general solution of .   "
},
{
  "id": "frobenius_section-6-6",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-6",
  "type": "Exercise",
  "number": "7.3.8",
  "title": "",
  "body": "  In the following equations classify the point as ordinary , regular singular , or singular but not regular singular .                              "
},
{
  "id": "frobenius_section-6-7",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-7",
  "type": "Exercise",
  "number": "7.3.101",
  "title": "",
  "body": "  In the following equations classify the point as ordinary , regular singular , or singular but not regular singular .                               a) ordinary, b) singular but not regular singular, c) regular singular, d) regular singular, e) ordinary.   "
},
{
  "id": "frobenius_section-6-8",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-8",
  "type": "Exercise",
  "number": "7.3.102",
  "title": "",
  "body": "  Find the general solution of .        "
},
{
  "id": "frobenius_section-6-9",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-9",
  "type": "Exercise",
  "number": "7.3.103",
  "title": "",
  "body": "  Find a particular solution of .     (Note that for convenience we did not pick .)   "
},
{
  "id": "frobenius_section-6-10",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-10",
  "type": "Exercise",
  "number": "7.3.104",
  "title": "",
  "body": "   (tricky) Find the general solution of .        "
},
{
  "id": "linearization_section",
  "level": "1",
  "url": "linearization_section.html",
  "type": "Section",
  "number": "8.1",
  "title": "Linearization, critical points, and equilibria",
  "body": " Linearization, critical points, and equilibria   Note: 1 lecture, §6.1–§6.2 in , §9.2–§9.3 in  Except for a few brief detours in , we considered mostly linear equations. Linear equations suffice in many applications, but in reality most phenomena require nonlinear equations. Nonlinear equations, however, are notoriously more difficult to understand than linear ones, and many strange new phenomena appear when we allow our equations to be nonlinear. Not to worry, we did not waste all this time studying linear equations. Nonlinear equations can often be approximated by linear ones if we only need a solution locally —only for a short period of time or only for certain parameters. Understanding linear equations can also give us qualitative understanding about a more general nonlinear problem. The idea is similar to what you did in calculus in trying to approximate a function by a line with the right slope.     In we looked at the pendulum of length . The goal was to solve for the angle as a function of the time . The equation for the setup is the nonlinear equation Instead of solving this equation, we solved the rather easier linear equation While the solution to the linear equation is not exactly what we were looking for, it is rather close to the original, as long as the angle is small and the time period involved is short.  You might ask: Why don't we just solve the nonlinear problem? Well, it might be very difficult, impractical, or impossible to solve analytically, depending on the equation in question. We may not even be interested in the actual solution, we might only be interested in some qualitative idea of what the solution is doing. For example, what happens as time goes to infinity?    Autonomous systems and phase plane analysis  We restrict our attention to a two-dimensional autonomous system where and are functions of two variables, and the derivatives are taken with respect to time . Solutions are functions and such that The way we will analyze the system is very similar to , where we studied a single autonomous equation. The ideas in two dimensions are the same, but the behavior can be far more complicated.  It may be best to think of the system of equations as the single vector equation As in , we draw the phase portrait phase portrait (or phase diagram phase diagram ), where each point corresponds to a specific state of the system. We draw the vector field vector field given at each point by the vector . And as before if we find solutions, we draw the trajectories by plotting all points for a certain range of .    Consider the second-order equation . Write this equation as a first-order nonlinear system The phase portrait with some trajectories is drawn in .   Phase portrait with some trajectories of , .    From the phase portrait it should be clear that even this simple system has fairly complicated behavior. Some trajectories keep oscillating around the origin, and some go off towards infinity. We will return to this example often, and analyze it completely in this (and the next) section.    If we zoom into the diagram near a point where is not zero, then nearby the arrows point generally in essentially that same direction and have essentially the same magnitude. In other words the behavior is not that interesting near such a point. We are of course assuming that and are continuous.  Let us concentrate on those points in the phase diagram above where the trajectories seem to start, end, or go around. We see two such points: and . The trajectories seem to go around the point , and they seem to either go in or out of the point . These points are precisely those points where the derivatives of both and are zero. Let us define the critical points critical point as the points such that In other words, these are the points where both and .  The critical points are where the behavior of the system is in some sense the most complicated. If is zero, then nearby, the vector can point in any direction whatsoever. Also, the trajectories are either going towards, away from, or around these points, so if we are looking for long-term qualitative behavior of the system, we should look at what is happening near the critical points.  Critical points are also sometimes called equilibria equilibrium , since we have so-called equilibrium solutions equilibrium solution at critical points. If is a critical point, then we have the solutions In , there are two equilibrium solutions: Compare this discussion on equilibria to the discussion in . The underlying concept is exactly the same.    Linearization  In we studied the behavior of a homogeneous linear system of two equations near a critical point. For a linear system of two variables given by an invertible matrix, the only critical point is the origin . Let us put the understanding we gained in that section to good use understanding what happens near critical points of nonlinear systems.  In calculus we learned to estimate a function by taking its derivative and linearizing. We work similarly with nonlinear systems of ODEs. Suppose is a critical point. First change variables to , so that corresponds to . That is, Next we need to find the derivative. In multivariable calculus you may have seen that the several variables version of the derivative is the Jacobian matrix Jacobian matrix Named for the German mathematician Carl Gustav Jacob Jacobi (1804–1851). . The Jacobian matrix of the vector-valued function at is This matrix gives the best linear approximation as and (and therefore and ) vary. We define the linearization linearization of the equation as the linear system     Let us keep with the same equations as : , . There are two critical points, and . The Jacobian matrix at any point is At , that is, when and , the Jacobian matrix is and our new variables are and . The linearization at is   At the point , the Jacobian matrix is , and our new variables are and . The linearization at is   The phase diagrams of the two linearizations at the critical points and are given in . Note that the variables are now and , which are different at each critical point. Compare with , and look especially at the behavior near the critical points.   Phase diagram with some trajectories of linearizations at the critical points (left) and (right) of , .          Sketch the phase plane vector field for:     ,  ,     ,  ,     ,  .        Match systems   (3)    ,  ,     ,  ,     ,  ,    to the vector fields below. Justify.                       Find the critical points and linearizations of the following systems.     ,  ,     ,  ,     ,  .        For the following systems, verify they have critical point at , and find the linearization at .     ,       ,       , , where , , and all first partial derivatives of and are also zero at , that is, .        Take ,  .    Find the set of critical points.    Sketch a phase diagram and describe the behavior near the critical point(s).    Find the linearization. Is it helpful in understanding the system?        Take ,  .    Find the set of critical points.    Sketch a phase diagram and describe the behavior near the critical point(s).    Find the linearization. Is it helpful in understanding the system?        Find the critical points and linearizations of the following systems.     ,  ,     ,  ,     ,  .      a) Critical points and . At using , the linearization is , . At using , the linearization is , . b) Critical points and . Using , the linearization is , . At using , the linearization is , . At using , the linearization is , . c) Critical point . Using , the linearization is , .      Match systems   (2)    ,  ,     ,  ,     ,  ,    to the vector fields below. Justify.                     1) is c), 2) is a), 3) is b)      The idea of critical points and linearization works in higher dimensions as well. You simply make the Jacobian matrix bigger by adding more functions and more variables. For the following system of 3 equations find the critical points and their linearizations:     Critical points are , and . The linearization at the origin using variables , , is , , . The linearization at the point using variables , , is , , .      Any two-dimensional non-autonomous system , can be written as a three-dimensional autonomous system (three equations). Write down this autonomous system using the variables , , .     , , .     "
},
{
  "id": "example_nlin-1b-example",
  "level": "2",
  "url": "linearization_section.html#example_nlin-1b-example",
  "type": "Example",
  "number": "8.1.1",
  "title": "",
  "body": "  Consider the second-order equation . Write this equation as a first-order nonlinear system The phase portrait with some trajectories is drawn in .   Phase portrait with some trajectories of , .    From the phase portrait it should be clear that even this simple system has fairly complicated behavior. Some trajectories keep oscillating around the origin, and some go off towards infinity. We will return to this example often, and analyze it completely in this (and the next) section.   "
},
{
  "id": "example_nlin-1b-examplelin",
  "level": "2",
  "url": "linearization_section.html#example_nlin-1b-examplelin",
  "type": "Example",
  "number": "8.1.2",
  "title": "",
  "body": "  Let us keep with the same equations as : , . There are two critical points, and . The Jacobian matrix at any point is At , that is, when and , the Jacobian matrix is and our new variables are and . The linearization at is   At the point , the Jacobian matrix is , and our new variables are and . The linearization at is   The phase diagrams of the two linearizations at the critical points and are given in . Note that the variables are now and , which are different at each critical point. Compare with , and look especially at the behavior near the critical points.   Phase diagram with some trajectories of linearizations at the critical points (left) and (right) of , .     "
},
{
  "id": "linearization_section-5-1",
  "level": "2",
  "url": "linearization_section.html#linearization_section-5-1",
  "type": "Exercise",
  "number": "8.1.1",
  "title": "",
  "body": "  Sketch the phase plane vector field for:     ,  ,     ,  ,     ,  .     "
},
{
  "id": "linearization_section-5-2",
  "level": "2",
  "url": "linearization_section.html#linearization_section-5-2",
  "type": "Exercise",
  "number": "8.1.2",
  "title": "",
  "body": "  Match systems   (3)    ,  ,     ,  ,     ,  ,    to the vector fields below. Justify.                    "
},
{
  "id": "linearization_section-5-3",
  "level": "2",
  "url": "linearization_section.html#linearization_section-5-3",
  "type": "Exercise",
  "number": "8.1.3",
  "title": "",
  "body": "  Find the critical points and linearizations of the following systems.     ,  ,     ,  ,     ,  .     "
},
{
  "id": "linearization_section-5-4",
  "level": "2",
  "url": "linearization_section.html#linearization_section-5-4",
  "type": "Exercise",
  "number": "8.1.4",
  "title": "",
  "body": "  For the following systems, verify they have critical point at , and find the linearization at .     ,       ,       , , where , , and all first partial derivatives of and are also zero at , that is, .     "
},
{
  "id": "linearization_section-5-5",
  "level": "2",
  "url": "linearization_section.html#linearization_section-5-5",
  "type": "Exercise",
  "number": "8.1.5",
  "title": "",
  "body": "  Take ,  .    Find the set of critical points.    Sketch a phase diagram and describe the behavior near the critical point(s).    Find the linearization. Is it helpful in understanding the system?     "
},
{
  "id": "linearization_section-5-6",
  "level": "2",
  "url": "linearization_section.html#linearization_section-5-6",
  "type": "Exercise",
  "number": "8.1.6",
  "title": "",
  "body": "  Take ,  .    Find the set of critical points.    Sketch a phase diagram and describe the behavior near the critical point(s).    Find the linearization. Is it helpful in understanding the system?     "
},
{
  "id": "linearization_section-5-7",
  "level": "2",
  "url": "linearization_section.html#linearization_section-5-7",
  "type": "Exercise",
  "number": "8.1.101",
  "title": "",
  "body": "  Find the critical points and linearizations of the following systems.     ,  ,     ,  ,     ,  .      a) Critical points and . At using , the linearization is , . At using , the linearization is , . b) Critical points and . Using , the linearization is , . At using , the linearization is , . At using , the linearization is , . c) Critical point . Using , the linearization is , .   "
},
{
  "id": "linearization_section-5-8",
  "level": "2",
  "url": "linearization_section.html#linearization_section-5-8",
  "type": "Exercise",
  "number": "8.1.102",
  "title": "",
  "body": "  Match systems   (2)    ,  ,     ,  ,     ,  ,    to the vector fields below. Justify.                     1) is c), 2) is a), 3) is b)   "
},
{
  "id": "linearization_section-5-9",
  "level": "2",
  "url": "linearization_section.html#linearization_section-5-9",
  "type": "Exercise",
  "number": "8.1.103",
  "title": "",
  "body": "  The idea of critical points and linearization works in higher dimensions as well. You simply make the Jacobian matrix bigger by adding more functions and more variables. For the following system of 3 equations find the critical points and their linearizations:     Critical points are , and . The linearization at the origin using variables , , is , , . The linearization at the point using variables , , is , , .   "
},
{
  "id": "linearization_section-5-10",
  "level": "2",
  "url": "linearization_section.html#linearization_section-5-10",
  "type": "Exercise",
  "number": "8.1.104",
  "title": "",
  "body": "  Any two-dimensional non-autonomous system , can be written as a three-dimensional autonomous system (three equations). Write down this autonomous system using the variables , , .     , , .   "
},
{
  "id": "nlinstability_section",
  "level": "1",
  "url": "nlinstability_section.html",
  "type": "Section",
  "number": "8.2",
  "title": "Stability and classification of isolated critical points",
  "body": " Stability and classification of isolated critical points   Note: 1.5–2 lectures, §6.1–§6.2 in , §9.2–§9.3 in    Isolated critical points and almost linear systems  A critical point is isolated isolated critical point if it is the only critical point in some small neighborhood of the point. That is, if we zoom in far enough it is the only critical point we see. In the example above, the critical point was isolated. If on the other hand there would be a whole curve of critical points, then it would not be isolated.  A system is called almost linear almost linear at a critical point , if the critical point is isolated and the Jacobian matrix at the point is invertible, or equivalently if the linearized system has an isolated critical point. In such a case, the nonlinear terms are very small and the system behaves like its linearization, at least if we are close to the critical point.  For example, the system in Examples and has two isolated critical points and , and is almost linear at both critical points as the Jacobian matrices at both points, and , are invertible.  On the other hand, the system , has an isolated critical point at , however the Jacobian matrix is zero when . So the system is not almost linear. Even a worse example is the system , , which does not have isolated critical points; and are both zero whenever , that is, the entire -axis.  Fortunately, most often critical points are isolated, and the system is almost linear at the critical points. So if we learn what happens there, we will have figured out the majority of situations that arise in applications.    Stability and classification of isolated critical points  Once we have an isolated critical point, the system is almost linear at that critical point, and we computed the associated linearized system, we can classify what happens to the solutions. We more or less use the classification for linear two-variable systems from , with one minor caveat. Let us list the behaviors depending on the eigenvalues of the Jacobian matrix at the critical point in . This table is very similar to , with the exception of missing center points. We will discuss centers later, as they are more complicated.   Behavior of an almost linear system near an isolated critical point.   Eigenvalues of the Jacobian matrix Behavior Stability  real and both positive source \/ unstable node unstable  real and both negative sink \/ stable node asymptotically stable  real and opposite signs saddle unstable  complex with positive real part spiral source unstable  complex with negative real part spiral sink asymptotically stable    In the third column, we mark points as asymptotically stable or unstable . Formally, a stable critical point stable critical point  is one where given any small distance to , and any initial condition within a perhaps smaller radius around , the trajectory of the system never goes further away from than . An unstable critical point unstable critical point is one that is not stable. Informally, a point is stable if we start close to a critical point and follow a trajectory we either go towards, or at least not away from, this critical point.  A stable critical point is called asymptotically stable asymptotically stable if given any initial condition sufficiently close to and any solution satisfying that condition, then That is, the critical point is asymptotically stable if any trajectory for a sufficiently close initial condition goes towards the critical point .    Consider , . See for the phase diagram. Let us find the critical points. These are the points where and . The first equation means , and so . Plugging into the second equation we obtain . Factoring, we obtain . Since we are looking only for real solutions we get either or . Solving for the corresponding using , we get two critical points, one being and the other being . Clearly the critical points are isolated.   The phase portrait with few sample trajectories of , .    Let us compute the Jacobian matrix: At the point we get the matrix and so the two eigenvalues are and . As the matrix is invertible, the system is almost linear at . As the eigenvalues are real and of opposite signs, we get a saddle point, which is an unstable equilibrium point.  At the point we get the matrix and computing the eigenvalues we get , . The matrix is invertible, and so the system is almost linear at . As we have real eigenvalues and both negative, the critical point is a sink, and therefore an asymptotically stable equilibrium point. That is, if we start with any point close to as an initial condition and plot a trajectory, it approaches . In other words, As you can see from the diagram, this behavior is true even for some initial points quite far from , but it is definitely not true for all initial points.      Let us look at , . First let us find the critical points. These are the points where and . Simplifying we get . So the critical points are and , and hence are isolated. Let us compute the Jacobian matrix:   At the point we get the matrix and so the two eigenvalues are and . As the matrix is invertible, the system is almost linear at . And, as the eigenvalues are real and of opposite signs, we get a saddle point, which is an unstable equilibrium point.  At the point we get the matrix whose eigenvalues are . The matrix is invertible, and so the system is almost linear at . As we have complex eigenvalues with positive real part, the critical point is a spiral source, and therefore an unstable equilibrium point.   The phase portrait with few sample trajectories of , .    See for the phase diagram. Notice the two critical points, and the behavior of the arrows in the vector field around these points.      The trouble with centers  Recall, a linear system with a center means that trajectories travel in closed elliptical orbits in some direction around the critical point. Such a critical point we call a center center or a stable center stable center . It is not an asymptotically stable critical point, as the trajectories never approach the critical point, but at least if you start sufficiently close to the critical point, you stay close to the critical point. The simplest example of such behavior is the linear system with a center. Another example is the critical point in .  The trouble with a center in a nonlinear system is that whether the trajectory goes towards or away from the critical point is governed by the sign of the real part of the eigenvalues of the Jacobian matrix, and the Jacobian matrix in a nonlinear system changes from point to point. Since this real part is zero at the critical point itself, it can have either sign nearby, meaning the trajectory could be pulled towards or away from the critical point.    An example of such a problematic behavior is the system . The only critical point is the origin . The Jacobian matrix is At the Jacobian matrix is , which has eigenvalues . So the linearization has a center.  Via the quadratic equation, the eigenvalues of the Jacobian matrix at any point are At any point where (so at most points near the origin), the eigenvalues have a positive real part ( can never be negative). This positive real part pulls the trajectory away from the origin. A sample trajectory for an initial condition near the origin is given in .   An unstable critical point (spiral source) at the origin for , even if the linearization has a center.      The moral of the example is that further analysis is needed when the linearization has a center. The analysis will in general be more complicated than in the example above and is more likely to involve case-by-case consideration. Such a complication should not be surprising to you. By now in your mathematical career, you have seen many places where a simple test is inconclusive, and more careful, perhaps ad hoc, analysis is required. Recall for example when the second derivative test for maxima or minima is inconclusive.    Conservative equations  An equation of the form where is an arbitrary function, is called a conservative equation conservative equation . For example, the pendulum equation is a conservative equation. The equations are conservative as there is no friction in the system so the energy in the system is conserved. Let us write this equation as a system of nonlinear ODEs. These types of equations have the advantage that we can solve for their trajectories easily.  The trick is to first think of as a function of for a moment. Then use the chain rule where the prime indicates a derivative with respect to . We obtain . We integrate with respect to to get . In other words We obtained an implicit equation for the trajectories, with different giving different trajectories. The value of is conserved on any trajectory. This expression is sometimes called the Hamiltonian Hamiltonian or the energy of the system. If you look back to , you will notice that is an exact equation, and we just found a potential function.    Let us find the trajectories for the equation , which is the equation from . The corresponding first-order system is Trajectories satisfy We solve for    Plotting these graphs we get exactly the trajectories in . In particular we notice that near the origin the trajectories are closed curves closed curves : they keep going around the origin, never spiraling in or out. Therefore we discovered a way to verify that the critical point at is a stable center. The critical point at is a saddle as we already noticed. This example is typical for conservative equations.    Consider an arbitrary conservative equation . All critical points occur when (the -axis), that is, when . The critical points are those points on the -axis where . The trajectories are given by So all trajectories are mirrored across the -axis. In particular, there can be no spiral sources nor sinks. The Jacobian matrix is The critical point is almost linear if at the critical point. Let denote the Jacobian matrix. The eigenvalues of are solutions to Therefore . In other words, either we get real eigenvalues of opposite signs (if ), or we get purely imaginary eigenvalues (if ). There are only two possibilities for critical points, either an unstable saddle point , or a stable center . There are never any sinks or sources.      For the systems below, find and classify the critical points, also indicate if the equilibria are stable, asymptotically stable, or unstable.          ,      ,         Find the implicit equations of the trajectories of the following conservative systems. Next find their critical points (if any) and classify them.                            Find and classify the critical point(s) of , .      Suppose , .    Show there are two spiral sinks at and .    For any initial point of the form , find what is the trajectory.    Can a trajectory starting at where spiral into the critical point at ? Why or why not?        In the example , show that for any trajectory, the distance from the origin is an increasing function. Conclude that at the origin the system behaves like a spiral source. Hint: Consider and show it has positive derivative.      Suppose is always positive. Find the trajectories of . Are there any critical points?      Suppose that , . Suppose that for all and . Are there any critical points? What can we say about the trajectories at goes to infinity?      For the systems below, find and classify the critical points.     ,      ,      ,       a) : saddle (unstable), : source (unstable), b) : spiral sink (asymptotically stable), : saddle (unstable), c) : saddle (unstable), : source (unstable)      Find the implicit equations of the trajectories of the following conservative systems. Next find their critical points (if any) and classify them.                     a) , critical points: , an unstable saddle, and , a stable center. b) , no critical points. c) , critical point at is a stable center.      The conservative system is not almost linear. Classify its critical point(s) nonetheless.    Critical point at . Trajectories are , for , these give closed curves around the origin, so the critical point is a stable center.      Derive an analogous classification of critical points for equations in one dimension, such as based on the derivative. A point is critical when and almost linear if in addition . Figure out if the critical point is stable or unstable depending on the sign of . Explain. Hint: see .    A critical point is stable if and unstable when .     "
},
{
  "id": "pln_behtab2",
  "level": "2",
  "url": "nlinstability_section.html#pln_behtab2",
  "type": "Table",
  "number": "8.1",
  "title": "Behavior of an almost linear system near an isolated critical point.",
  "body": " Behavior of an almost linear system near an isolated critical point.   Eigenvalues of the Jacobian matrix Behavior Stability  real and both positive source \/ unstable node unstable  real and both negative sink \/ stable node asymptotically stable  real and opposite signs saddle unstable  complex with positive real part spiral source unstable  complex with negative real part spiral sink asymptotically stable   "
},
{
  "id": "example_nlin-xplusy",
  "level": "2",
  "url": "nlinstability_section.html#example_nlin-xplusy",
  "type": "Example",
  "number": "8.2.1",
  "title": "",
  "body": "  Consider , . See for the phase diagram. Let us find the critical points. These are the points where and . The first equation means , and so . Plugging into the second equation we obtain . Factoring, we obtain . Since we are looking only for real solutions we get either or . Solving for the corresponding using , we get two critical points, one being and the other being . Clearly the critical points are isolated.   The phase portrait with few sample trajectories of , .    Let us compute the Jacobian matrix: At the point we get the matrix and so the two eigenvalues are and . As the matrix is invertible, the system is almost linear at . As the eigenvalues are real and of opposite signs, we get a saddle point, which is an unstable equilibrium point.  At the point we get the matrix and computing the eigenvalues we get , . The matrix is invertible, and so the system is almost linear at . As we have real eigenvalues and both negative, the critical point is a sink, and therefore an asymptotically stable equilibrium point. That is, if we start with any point close to as an initial condition and plot a trajectory, it approaches . In other words, As you can see from the diagram, this behavior is true even for some initial points quite far from , but it is definitely not true for all initial points.   "
},
{
  "id": "example_nlin-withexp",
  "level": "2",
  "url": "nlinstability_section.html#example_nlin-withexp",
  "type": "Example",
  "number": "8.2.2",
  "title": "",
  "body": "  Let us look at , . First let us find the critical points. These are the points where and . Simplifying we get . So the critical points are and , and hence are isolated. Let us compute the Jacobian matrix:   At the point we get the matrix and so the two eigenvalues are and . As the matrix is invertible, the system is almost linear at . And, as the eigenvalues are real and of opposite signs, we get a saddle point, which is an unstable equilibrium point.  At the point we get the matrix whose eigenvalues are . The matrix is invertible, and so the system is almost linear at . As we have complex eigenvalues with positive real part, the critical point is a spiral source, and therefore an unstable equilibrium point.   The phase portrait with few sample trajectories of , .    See for the phase diagram. Notice the two critical points, and the behavior of the arrows in the vector field around these points.   "
},
{
  "id": "nlinstability_section-5-4",
  "level": "2",
  "url": "nlinstability_section.html#nlinstability_section-5-4",
  "type": "Example",
  "number": "8.2.3",
  "title": "",
  "body": "  An example of such a problematic behavior is the system . The only critical point is the origin . The Jacobian matrix is At the Jacobian matrix is , which has eigenvalues . So the linearization has a center.  Via the quadratic equation, the eigenvalues of the Jacobian matrix at any point are At any point where (so at most points near the origin), the eigenvalues have a positive real part ( can never be negative). This positive real part pulls the trajectory away from the origin. A sample trajectory for an initial condition near the origin is given in .   An unstable critical point (spiral source) at the origin for , even if the linearization has a center.     "
},
{
  "id": "nlinstability_section-6-4",
  "level": "2",
  "url": "nlinstability_section.html#nlinstability_section-6-4",
  "type": "Example",
  "number": "8.2.4",
  "title": "",
  "body": "  Let us find the trajectories for the equation , which is the equation from . The corresponding first-order system is Trajectories satisfy We solve for    Plotting these graphs we get exactly the trajectories in . In particular we notice that near the origin the trajectories are closed curves closed curves : they keep going around the origin, never spiraling in or out. Therefore we discovered a way to verify that the critical point at is a stable center. The critical point at is a saddle as we already noticed. This example is typical for conservative equations.   "
},
{
  "id": "nlinstability_section-7-1",
  "level": "2",
  "url": "nlinstability_section.html#nlinstability_section-7-1",
  "type": "Exercise",
  "number": "8.2.1",
  "title": "",
  "body": "  For the systems below, find and classify the critical points, also indicate if the equilibria are stable, asymptotically stable, or unstable.          ,      ,      "
},
{
  "id": "nlinstability_section-7-2",
  "level": "2",
  "url": "nlinstability_section.html#nlinstability_section-7-2",
  "type": "Exercise",
  "number": "8.2.2",
  "title": "",
  "body": "  Find the implicit equations of the trajectories of the following conservative systems. Next find their critical points (if any) and classify them.                         "
},
{
  "id": "nlinstability_section-7-3",
  "level": "2",
  "url": "nlinstability_section.html#nlinstability_section-7-3",
  "type": "Exercise",
  "number": "8.2.3",
  "title": "",
  "body": "  Find and classify the critical point(s) of , .   "
},
{
  "id": "nlinstability_section-7-4",
  "level": "2",
  "url": "nlinstability_section.html#nlinstability_section-7-4",
  "type": "Exercise",
  "number": "8.2.4",
  "title": "",
  "body": "  Suppose , .    Show there are two spiral sinks at and .    For any initial point of the form , find what is the trajectory.    Can a trajectory starting at where spiral into the critical point at ? Why or why not?     "
},
{
  "id": "exercise_increasing",
  "level": "2",
  "url": "nlinstability_section.html#exercise_increasing",
  "type": "Exercise",
  "number": "8.2.5",
  "title": "",
  "body": "  In the example , show that for any trajectory, the distance from the origin is an increasing function. Conclude that at the origin the system behaves like a spiral source. Hint: Consider and show it has positive derivative.   "
},
{
  "id": "nlinstability_section-7-6",
  "level": "2",
  "url": "nlinstability_section.html#nlinstability_section-7-6",
  "type": "Exercise",
  "number": "8.2.6",
  "title": "",
  "body": "  Suppose is always positive. Find the trajectories of . Are there any critical points?   "
},
{
  "id": "nlinstability_section-7-7",
  "level": "2",
  "url": "nlinstability_section.html#nlinstability_section-7-7",
  "type": "Exercise",
  "number": "8.2.7",
  "title": "",
  "body": "  Suppose that , . Suppose that for all and . Are there any critical points? What can we say about the trajectories at goes to infinity?   "
},
{
  "id": "nlinstability_section-7-8",
  "level": "2",
  "url": "nlinstability_section.html#nlinstability_section-7-8",
  "type": "Exercise",
  "number": "8.2.101",
  "title": "",
  "body": "  For the systems below, find and classify the critical points.     ,      ,      ,       a) : saddle (unstable), : source (unstable), b) : spiral sink (asymptotically stable), : saddle (unstable), c) : saddle (unstable), : source (unstable)   "
},
{
  "id": "nlinstability_section-7-9",
  "level": "2",
  "url": "nlinstability_section.html#nlinstability_section-7-9",
  "type": "Exercise",
  "number": "8.2.102",
  "title": "",
  "body": "  Find the implicit equations of the trajectories of the following conservative systems. Next find their critical points (if any) and classify them.                     a) , critical points: , an unstable saddle, and , a stable center. b) , no critical points. c) , critical point at is a stable center.   "
},
{
  "id": "nlinstability_section-7-10",
  "level": "2",
  "url": "nlinstability_section.html#nlinstability_section-7-10",
  "type": "Exercise",
  "number": "8.2.103",
  "title": "",
  "body": "  The conservative system is not almost linear. Classify its critical point(s) nonetheless.    Critical point at . Trajectories are , for , these give closed curves around the origin, so the critical point is a stable center.   "
},
{
  "id": "nlinstability_section-7-11",
  "level": "2",
  "url": "nlinstability_section.html#nlinstability_section-7-11",
  "type": "Exercise",
  "number": "8.2.104",
  "title": "",
  "body": "  Derive an analogous classification of critical points for equations in one dimension, such as based on the derivative. A point is critical when and almost linear if in addition . Figure out if the critical point is stable or unstable depending on the sign of . Explain. Hint: see .    A critical point is stable if and unstable when .   "
},
{
  "id": "nlinapps_section",
  "level": "1",
  "url": "nlinapps_section.html",
  "type": "Section",
  "number": "8.3",
  "title": "Applications of nonlinear systems",
  "body": " Applications of nonlinear systems   Note: 2 lectures, §6.3–§6.4 in , §9.3, §9.5 in  In this section we study two very standard examples of nonlinear systems. First, we look at the nonlinear pendulum equation. We saw the pendulum equation's linearization before, but we noted it was only valid for small angles and short times. Now we find out what happens for large angles. Next, we look at the predator-prey equation, which finds various applications in modeling problems in biology, chemistry, economics, and elsewhere.    Pendulum  The first example we study is the pendulum equation . Here, is the angular displacement, is the gravitational acceleration, and is the length of the pendulum. In this equation we disregard friction, so we are talking about an idealized pendulum.     This equation is a conservative equation, so we can use our analysis of conservative equations from the previous section. Let us change the equation to a two-dimensional system in variables by introducing the new variable : The critical points of this system are when and , or in other words if . So the critical points are when and is a multiple of . That is, the points are . While there are infinitely many critical points, they are all isolated. Let us compute the Jacobian matrix:   For conservative equations, there are two types of critical points. Either stable centers, or saddle points. The eigenvalues of the Jacobian matrix are .  The eigenvalues are going to be real when . This happens at the odd multiples of . The eigenvalues are going to be purely imaginary when . This happens at the even multiples of . Therefore the system has a stable center at the points , and it has an unstable saddle at the points . Look at the phase diagram in , where for simplicity we let .   Phase plane diagram and some trajectories of the nonlinear pendulum equation.    In the linearized equation we have only a single critical point, the center at . Now we see more clearly what we meant when we said the linearization is good for small angles. The horizontal axis is the deflection angle. The vertical axis is the angular velocity of the pendulum. Suppose we start at (no deflection), and we start with a small angular velocity . Then the trajectory keeps going around the critical point in an approximate circle. This corresponds to short swings of the pendulum back and forth. When stays small, the trajectories really look like circles and hence are very close to our linearization.  When we give the pendulum a big enough push, it goes across the top and keeps spinning about its axis. This behavior corresponds to the wavy curves that do not cross the horizontal axis in the phase diagram. Let us suppose we look at the top curves, when the angular velocity is large and positive. Then the pendulum is going around and around its axis. The velocity is going to be large when the pendulum is near the bottom, and the velocity is the smallest when the pendulum is close to the top of its loop.  At each critical point, there is an equilibrium solution. Consider the solution ; the pendulum is not moving and is hanging straight down. This is a stable place for the pendulum to be, hence this is a stable equilibrium.  The other type of equilibrium solution is at the unstable point, for example . Here the pendulum is upside down. Sure you can balance the pendulum this way and it will stay, but this is an unstable equilibrium. Even the tiniest push will make the pendulum start swinging wildly.  See for a diagram. The first picture is the stable equilibrium . The second corresponds to those almost circles in the phase diagram around when the angular velocity is small. The third is the unstable equilibrium . The last picture corresponds to the wavy lines for large angular velocities.   Various possibilities for the motion of the pendulum.    The quantity is conserved by any solution. This is the energy or the Hamiltonian of the system.  We have a conservative equation and so (exercise) the trajectories are given by for various values of . Let us look at the initial condition of , that is, we take the pendulum to angle , and just let it go (initial angular velocity 0). We plug the initial conditions into the above and solve for to obtain Thus the expression for the trajectory is   Let us figure out the period. That is, the time it takes for the pendulum to swing back and forth. We notice that the trajectory about the origin in the phase plane is symmetric about both the and the -axis. That is, in terms of , the time it takes from to is the same as it takes from back to . Furthermore, the time it takes from to is the same as to go from to . Therefore, let us find how long it takes for the pendulum to go from angle 0 to angle , which is a quarter of the full oscillation and then multiply by 4.  We figure out this time by finding and integrating from to . The period is four times this integral. Let us stay in the region where is positive. Since , inverting we get Therefore the period is given by The integral is an improper integral, and we cannot in general evaluate it symbolically. We must resort to numerical approximation if we want to compute a particular .  Recall from , the linearized equation has period We plot , , and the relative error in . The relative error says how far is our approximation from the real period percentage-wise. Note that is simply a constant, it does not change with the initial angle . The actual period gets larger and larger as gets larger. Notice how the relative error is small when is small. It is still only when , that is, a 90 degree angle. The error is when starting at , a 45 degree angle. At a 5 degree initial angle, the error is only .   The plot of and with (left), and the plot of the relative error (right), for between 0 and .    While it is not immediately obvious from the formula, it is true that That is, the period goes to infinity as the initial angle approaches the unstable equilibrium point. So if we put the pendulum almost upside down it may take a very long time before it gets down. This is consistent with the limiting behavior, where the exactly upside down pendulum never makes an oscillation, so we could think of that as infinite period.    Predator-prey or Lotka–Volterra systems  One of the most common simple applications of nonlinear systems are the so-called predator-prey predator-prey or Lotka–Volterra Lotka–Volterra Named for the American mathematician, chemist, and statistician Alfred James Lotka (1880–1949) and the Italian mathematician and physicist Vito Volterra (1860–1940). systems. For example, these systems arise when two species interact, one as the prey and one as the predator. It is then no surprise that the equations also see applications in economics. The system also arises in chemical reactions. In biology, this system of equations explains the natural periodic variations of populations of different species in nature. Before the application of differential equations, these periodic variations in the population baffled biologists.  We keep with the classical example of hares and foxes in a forest, it is the easiest to understand. When there are a lot of hares, there is plenty of food for the foxes, so the fox population grows. However, when the fox population grows, the foxes eat more hares, so when there are lots of foxes, the hare population should go down, and vice versa. The Lotka–Volterra model proposes that this behavior is described by the system of equations where are some parameters that describe the interaction of the foxes and hares This interaction does not end well for the hare. . In this model, these are all positive numbers.  Let us analyze the idea behind this model. The model is a slightly more complicated idea based on the exponential population model. First expand, The hares are expected to simply grow exponentially in the absence of foxes. That is where the term comes in, the growth in population is proportional to the population itself. We are assuming the hares always find enough food and have enough space to reproduce. However, there is another component , that is, the population also is decreasing proportionally to the number of foxes. Together we can write the equation as , so it is like exponential growth or decay but the constant depends on the number of foxes.  The equation for foxes is very similar, expand again The foxes need food (hares) to reproduce: the more food, the bigger the rate of growth, hence the term. On the other hand, there are natural deaths in the fox population, and hence the term.  Without further delay, let us start with an explicit example. Suppose the equations are See for the phase portrait. In this example it makes sense to also plot and as graphs with respect to time. Therefore the second graph in is the graph of and on the vertical axis (the prey is the thinner line with taller peaks), against time on the horizontal axis. The particular solution graphed was with initial conditions of 20 foxes and 50 hares.   The phase portrait (left) and graphs of and for a sample solution (right).    Let us analyze what we see on the graphs. We work in the general setting rather than putting in specific numbers. We start with finding the critical points. Set , and . The first equation is satisfied if either or . If , the second equation implies . If , the second equation implies . There are two equilibria: at when there are no animals at all, and at . In our specific example , and . This is the point where there are 100 hares and 40 foxes.  We compute the Jacobian matrix: At the origin we get the matrix , so the eigenvalues are and , hence real and of opposite signs. So the critical point at the origin is a saddle. This makes sense. If you started with some foxes but no hares, then the foxes would go extinct, that is, you would approach the origin. If you started with no foxes and a few hares, then the hares would keep multiplying without check, and so you would go away from the origin.  OK, how about the other critical point at . Here the Jacobian matrix becomes The eigenvalues satisfy . In other words, . The eigenvalues being purely imaginary, we are in the case where we cannot quite decide using only linearization. We could have a stable center, spiral sink, or a spiral source. That is, the equilibrium could be asymptotically stable, stable, or unstable. Of course I gave you a picture above that seems to imply it is a stable center. But never trust a picture only. Perhaps the oscillations are getting larger and larger, but only very slowly. Of course this would be bad as it would imply something will go wrong with our population sooner or later. And I only graphed a very specific example with very specific trajectories.  How can we be sure we are in the stable situation? As we said before, in the case of purely imaginary eigenvalues, we have to do a bit more work. Previously we found that for conservative systems, there was a certain quantity that was conserved on the trajectories, and hence the trajectories had to go in closed loops. We can use a similar technique here. We just have to figure out what is the conserved quantity. After some trial and error we find the constant is conserved. Such a quantity is called the constant of motion constant of motion . Let us check really is a constant of motion. How do we check, you say? Well, a constant is something that does not change with time, so let us compute the derivative with respect to time: Our equations give us what and are so let us plug those in: So along the trajectories is constant. In fact, the expression gives us an implicit equation for the trajectories. In any case, once we have found this constant of motion, it must be true that the trajectories are simple curves—the level curves of . It turns out, the critical point at is a maximum for (left as an exercise). So is a stable equilibrium point, and we do not have to worry about the foxes and hares going extinct or their populations exploding.  One blemish on this wonderful model is that the number of foxes and hares are discrete quantities and we are modeling with continuous variables. Our model has no problem with there being 0.1 fox in the forest for example, while in reality that makes no sense. The approximation is a reasonable one as long as the number of foxes and hares are large, but it does not make much sense for small numbers. One must be careful in interpreting any results from such a model.  An interesting consequence (perhaps counterintuitive) of this model is that adding animals to the forest might lead to extinction, because the variations will get too big, and one of the populations will get close to zero. For example, suppose there are 20 foxes and 50 hares as before, but now we bring in more foxes, bringing their number to 200. If we run the computation, we find the number of hares will plummet to just slightly more than 1 hare in the whole forest. In reality that most likely means the hares die out, and then the foxes will die out as well as they will have nothing to eat.  Showing that a system of equations has a stable solution can be a very difficult problem. When Isaac Newton put forth his laws of planetary motions, he proved that a single planet orbiting a single sun is a stable system. But any solar system with more than 1 planet proved very difficult indeed. In fact, such a system behaves chaotically (see ), meaning small changes in initial conditions lead to very different long-term outcomes. From numerical experimentation and measurements, we know the earth will not fly out into the empty space or crash into the sun, for at least some millions of years or so. But we do not know what happens beyond that.      Take the damped nonlinear pendulum equation damped nonlinear pendulum equation  for some (that is, there is some friction).    Suppose and for simplicity, find and classify the critical points.    Do the same for any and any and , but such that the damping is small, in particular, .    Explain what your findings mean, and if it agrees with what you expect in reality.        Suppose the hares do not grow exponentially, but logistically. In particular consider For the following two values of , find and classify all the critical points in the positive quadrant, that is, for and . Then sketch the phase diagram. Discuss the implication for the long term behavior of the population.     ,     .            Suppose and are positive variables. Show attains a maximum at .    Suppose are positive constants, and also suppose and are positive variables. Show attains a maximum at .        Suppose that for the pendulum equation we take a trajectory giving the spinning-around motion, for example . This is the trajectory where the lowest angular velocity is . Find an integral expression for how long it takes the pendulum to go all the way around.       (challenging) Take the pendulum, suppose the initial position is .    Find the expression for giving the trajectory with initial condition . Hint: Figure out what should be in terms of .    Find the crucial angular velocity , such that for any higher initial angular velocity, the pendulum will keep going around its axis, and for any lower initial angular velocity, the pendulum will simply swing back and forth. Hint: When the pendulum doesn't go over the top the expression for will be undefined for some s.    What do you think happens if the initial condition is , that is, the initial angle is 0, and the initial angular velocity is exactly .        Take the damped nonlinear pendulum equation for some (that is, there is friction). Suppose the friction is large, in particular .    Find and classify the critical points.    Explain what your findings mean, and if it agrees with what you expect in reality.      a) Critical points are , for any integer . When is odd, we have a saddle point. When is even we get a sink. b) The findings mean the pendulum will simply go to one of the sinks, for example and it will not swing back and forth. The friction is too high for it to oscillate, just like an overdamped mass-spring system.      Suppose we have the system predator-prey system where the foxes are also killed at a constant rate ( foxes killed per unit time):  .    Find the critical points and the Jacobian matrices of the system.    Put in the constants , , , , . Analyze the critical points. What do you think it says about the forest?      a) Solving for the critical points we get and . The Jacobian matrix at is whose eigenvalues are and . The eigenvalues are real of opposite signs and we get a saddle. (In the application, however, we are only looking at the positive quadrant so this critical point is irrelevant.) At we get Jacobian matrix . b) For the specific numbers given, the second critical point is the matrix is , which has eigenvalues . Therefore there is a spiral source; the solution spirals outwards. The solution eventually hits one of the axes, or , so something will die out in the forest.       (challenging) Suppose the foxes never die. That is, we have the system  . Find the critical points and notice they are not isolated. What will happen to the population in the forest if it starts at some positive numbers. Hint: Think of the constant of motion.    The critical points are on the line . In the positive quadrant the is always positive and so the fox population always grows. The constant of motion is , for any this curve must hit the -axis (why?), so the trajectory will simply approach a point on the axis somewhere and the number of hares will go to zero.     "
},
{
  "id": "fig_nlin-pend-phasediag",
  "level": "2",
  "url": "nlinapps_section.html#fig_nlin-pend-phasediag",
  "type": "Figure",
  "number": "8.6",
  "title": "",
  "body": " Phase plane diagram and some trajectories of the nonlinear pendulum equation.   "
},
{
  "id": "fig_nlin-pend",
  "level": "2",
  "url": "nlinapps_section.html#fig_nlin-pend",
  "type": "Figure",
  "number": "8.7",
  "title": "",
  "body": " Various possibilities for the motion of the pendulum.   "
},
{
  "id": "fig_TvsT0",
  "level": "2",
  "url": "nlinapps_section.html#fig_TvsT0",
  "type": "Figure",
  "number": "8.8",
  "title": "",
  "body": " The plot of and with (left), and the plot of the relative error (right), for between 0 and .   "
},
{
  "id": "fig_nlin-pred-prey",
  "level": "2",
  "url": "nlinapps_section.html#fig_nlin-pred-prey",
  "type": "Figure",
  "number": "8.9",
  "title": "",
  "body": " The phase portrait (left) and graphs of and for a sample solution (right).   "
},
{
  "id": "nlinapps_section-5-1",
  "level": "2",
  "url": "nlinapps_section.html#nlinapps_section-5-1",
  "type": "Exercise",
  "number": "8.3.1",
  "title": "",
  "body": "  Take the damped nonlinear pendulum equation damped nonlinear pendulum equation  for some (that is, there is some friction).    Suppose and for simplicity, find and classify the critical points.    Do the same for any and any and , but such that the damping is small, in particular, .    Explain what your findings mean, and if it agrees with what you expect in reality.     "
},
{
  "id": "nlinapps_section-5-2",
  "level": "2",
  "url": "nlinapps_section.html#nlinapps_section-5-2",
  "type": "Exercise",
  "number": "8.3.2",
  "title": "",
  "body": "  Suppose the hares do not grow exponentially, but logistically. In particular consider For the following two values of , find and classify all the critical points in the positive quadrant, that is, for and . Then sketch the phase diagram. Discuss the implication for the long term behavior of the population.     ,     .     "
},
{
  "id": "nlinapps_section-5-3",
  "level": "2",
  "url": "nlinapps_section.html#nlinapps_section-5-3",
  "type": "Exercise",
  "number": "8.3.3",
  "title": "",
  "body": "      Suppose and are positive variables. Show attains a maximum at .    Suppose are positive constants, and also suppose and are positive variables. Show attains a maximum at .     "
},
{
  "id": "nlinapps_section-5-4",
  "level": "2",
  "url": "nlinapps_section.html#nlinapps_section-5-4",
  "type": "Exercise",
  "number": "8.3.4",
  "title": "",
  "body": "  Suppose that for the pendulum equation we take a trajectory giving the spinning-around motion, for example . This is the trajectory where the lowest angular velocity is . Find an integral expression for how long it takes the pendulum to go all the way around.   "
},
{
  "id": "nlinapps_section-5-5",
  "level": "2",
  "url": "nlinapps_section.html#nlinapps_section-5-5",
  "type": "Exercise",
  "number": "8.3.5",
  "title": "",
  "body": "   (challenging) Take the pendulum, suppose the initial position is .    Find the expression for giving the trajectory with initial condition . Hint: Figure out what should be in terms of .    Find the crucial angular velocity , such that for any higher initial angular velocity, the pendulum will keep going around its axis, and for any lower initial angular velocity, the pendulum will simply swing back and forth. Hint: When the pendulum doesn't go over the top the expression for will be undefined for some s.    What do you think happens if the initial condition is , that is, the initial angle is 0, and the initial angular velocity is exactly .     "
},
{
  "id": "nlinapps_section-5-6",
  "level": "2",
  "url": "nlinapps_section.html#nlinapps_section-5-6",
  "type": "Exercise",
  "number": "8.3.101",
  "title": "",
  "body": "  Take the damped nonlinear pendulum equation for some (that is, there is friction). Suppose the friction is large, in particular .    Find and classify the critical points.    Explain what your findings mean, and if it agrees with what you expect in reality.      a) Critical points are , for any integer . When is odd, we have a saddle point. When is even we get a sink. b) The findings mean the pendulum will simply go to one of the sinks, for example and it will not swing back and forth. The friction is too high for it to oscillate, just like an overdamped mass-spring system.   "
},
{
  "id": "nlinapps_section-5-7",
  "level": "2",
  "url": "nlinapps_section.html#nlinapps_section-5-7",
  "type": "Exercise",
  "number": "8.3.102",
  "title": "",
  "body": "  Suppose we have the system predator-prey system where the foxes are also killed at a constant rate ( foxes killed per unit time):  .    Find the critical points and the Jacobian matrices of the system.    Put in the constants , , , , . Analyze the critical points. What do you think it says about the forest?      a) Solving for the critical points we get and . The Jacobian matrix at is whose eigenvalues are and . The eigenvalues are real of opposite signs and we get a saddle. (In the application, however, we are only looking at the positive quadrant so this critical point is irrelevant.) At we get Jacobian matrix . b) For the specific numbers given, the second critical point is the matrix is , which has eigenvalues . Therefore there is a spiral source; the solution spirals outwards. The solution eventually hits one of the axes, or , so something will die out in the forest.   "
},
{
  "id": "nlinapps_section-5-8",
  "level": "2",
  "url": "nlinapps_section.html#nlinapps_section-5-8",
  "type": "Exercise",
  "number": "8.3.103",
  "title": "",
  "body": "   (challenging) Suppose the foxes never die. That is, we have the system  . Find the critical points and notice they are not isolated. What will happen to the population in the forest if it starts at some positive numbers. Hint: Think of the constant of motion.    The critical points are on the line . In the positive quadrant the is always positive and so the fox population always grows. The constant of motion is , for any this curve must hit the -axis (why?), so the trajectory will simply approach a point on the axis somewhere and the number of hares will go to zero.   "
},
{
  "id": "limitcycles_section",
  "level": "1",
  "url": "limitcycles_section.html",
  "type": "Section",
  "number": "8.4",
  "title": "Limit cycles",
  "body": " Limit cycles  Note: less than 1 lecture, discussed in §6.1 and §6.4 in , §9.7 in  For nonlinear systems, trajectories do not simply need to approach or leave a single point. They may in fact approach a larger set, such as a circle or another closed curve.    The Van der Pol oscillator Van der Pol oscillator Named for the Dutch physicist Balthasar van der Pol (1889–1959). is the following equation where is some positive constant. The Van der Pol oscillator originated with electrical circuits, but finds applications in diverse fields such as biology, seismology, and other physical sciences.  For simplicity, let us use . A phase diagram is given in the left-hand plot in . Notice how the trajectories seem to very quickly settle on a closed curve. On the right-hand side is the plot of a single solution for to with initial conditions and . The solution quickly tends to a periodic solution.   The phase portrait (left) and a graph of a sample solution of the Van der Pol oscillator.    The Van der Pol oscillator is an example of so-called relaxation oscillation relaxation oscillation . The word relaxation comes from the sudden jump (the very steep part of the solution). For larger the steep part becomes even more pronounced, for small the limit cycle looks more like a circle. In fact, setting , we get , which is a linear system with a center and all trajectories become circles.    A trajectory in the phase portrait that is a closed curve (a curve that is a loop) is called a closed trajectory closed trajectory . A limit cycle limit cycle is a closed trajectory such that at least one other trajectory spirals into it (or spirals out of it). For example, the closed curve in the phase portrait for the Van der Pol equation is a limit cycle. If all trajectories that start near the limit cycle spiral into it, the limit cycle is called asymptotically stable asymptotically stable limit cycle . The limit cycle in the Van der Pol oscillator is asymptotically stable.  Given a closed trajectory on an autonomous system, any solution that starts on it is periodic. Such a curve is called a periodic orbit periodic orbit . More precisely, if is a solution such that for some the point lies on a periodic orbit, then both and are periodic functions (with the same period). That is, there is some number such that and .  Consider the system where the functions and have continuous derivatives in some region in the plane.   Poincaré–Bendixson  Poincaré–Bendixson Theorem    Ivar Otto Bendixson (1861–1935) was a Swedish mathematician. Suppose is a closed bounded region (a region in the plane that includes its boundary and does not have points arbitrarily far from the origin). Suppose is a solution of in that exists for all . Then either the solution is a periodic function, or the solution tends towards a periodic solution in .    The main point of the theorem is that if you find one solution that exists for all large enough (that is, as goes to infinity) and stays within a bounded region, then you have found either a periodic orbit, or a solution that spirals towards a limit cycle or tends to a critical point. That is, in the long term, the behavior is very close to a periodic function. Note that a constant solution at a critical point is periodic (with any period). The theorem is more a qualitative statement rather than something to help us in computations. In practice it is hard to find analytic solutions and so hard to show rigorously that they exist for all time. But if we think the solution exists we numerically solve for a large time to approximate the limit cycle. Another caveat is that the theorem only works in two dimensions. In three dimensions and higher, there is simply too much room.  The theorem applies to all solutions in the Van der Pol oscillator. Solutions that start at any point except the origin tend to the periodic solution around the limit cycle, and the initial condition of gives the constant solution , .    Consider A vector field along with solutions with initial conditions , , and are drawn in .   Unstable limit cycle example.    Notice that points on the unit circle (distance one from the origin) satisfy . And , is a solution of the system. Therefore we have a closed trajectory. For points off the unit circle, the second term in pushes the solution further away from the -axis than the system , , and pushes the solution further away from the -axis than the linear system , . In other words for all other initial conditions the trajectory will spiral out.  This means that for initial conditions inside the unit circle, the solution spirals out towards the periodic solution on the unit circle, and for initial conditions outside the unit circle the solutions spiral off towards infinity. Therefore the unit circle is a limit cycle, but not an asymptotically stable one. The Poincaré–Bendixson Theorem applies to the initial points inside the unit circle, as those solutions stay bounded, but not to those outside, as those solutions go off to infinity.    A similar analysis applies to the system The unit circle is again a closed trajectory, points outside the unit circle spiral out to infinity, but now points inside the unit circle spiral towards the critical point at the origin. The unit circle is an asymptotically unstable limit cycle where all trajectories spiral out. If we consider the linear system , , then all circles centered at the origin (not just the unit circle) are closed trajectories, but no trajectory spirals onto any other, so none of the circles are limit cycles. By Poincaré–Bendixson, all these solutions are periodic.  By Picard's theorem ( ), at any point in the plane, we can always find a solution to a little bit forward or backwards in time, as long as and have continuous derivatives. So if we find a closed trajectory in an autonomous system, then for every initial point inside the closed trajectory, the solution will exist for all time and it will stay bounded (it will stay inside the closed trajectory). The moment we found the solution above going around the unit circle, we knew that for every initial point inside the circle, the solution exists for all time and the Poincaré–Bendixson theorem applies.  We next look for conditions when limit cycles (or periodic orbits) do not exist. We assume the equation is defined on a simply connected region simply connected region , that is, a region with no holes we can go around. For example, the entire plane is a simply connected region. So is the inside of the unit disc. However, the entire plane minus a point is not a simply connected region as it has a hole at the origin.   Bendixson–Dulac  Bendixson–Dulac Theorem    Henri Dulac (1870–1955) was a French mathematician. Suppose is a simply connected region, and the expression Usually the expression in the Bendixson–Dulac Theorem is for some continuously differentiable function . For simplicity, let us just consider the case .  is either always positive or always negative on (except perhaps a small set such as on isolated points or curves) then the system has no closed trajectory inside .    The theorem gives a way of ruling out the existence of a closed trajectory, and hence a way of ruling out limit cycles. The expression may seem random, but it is called the divergence divergence of the vector field. Divergence measures how much the vector field is expanding at any point and comes up in many other contexts. The theorem says that if the vector field is either expanding everywhere on or contracting everywhere on , then there is no closed trajectory and so no limit cycle. Perhaps this is intuitive—if particles travel along the vector fields and are getting further and further apart, then we do not expect any particles to travel in loops. The exception about points or curves means that divergence can be zero at a few points, or on a curve, but not on any larger set.    Consider , in the entire plane (see ). The plane is simply connected and the theorem applies. We compute . The function is always positive except on the line . Therefore, via the theorem, the system has no closed trajectories.    A common informal, but not quite correct, way to state the theorem is to conclude there are no periodic solutions that stay in . The example above has two critical points and hence it has constant solutions. Constant functions are periodic. The conclusion of the theorem is that there exist no trajectories that form closed curves, or in other words, that there exist no nonconstant periodic solutions that stay in .    Consider a somewhat more complicated example. Take the system , (see ). We compute . This expression takes on both signs, so if we are talking about the whole plane we cannot simply apply the theorem. However, we could apply it on the set where . Via the theorem, there is no closed trajectory in that set. Similarly, there is no closed trajectory in the set . We cannot conclude (yet) that there is no closed trajectory in the entire plane. For all we know, perhaps half of it is in the set where and the other half is in the set where .  The key is to look at the line where , or . On this line, and . In particular, if , then . So the arrows, the vectors , always point into the set where . There is no way we can start in the set where and go into the set where . Once we are in the set where , we stay there. So no closed trajectory can have points in both sets.      Consider , in the region given by . That is, is the region outside a circle of radius centered at the origin. Then there is a closed trajectory in , namely , . Furthermore, which is always positive on . So what is going on? The Bendixson–Dulac theorem does not apply since the region is not simply connected—it has a hole, the circle we cut out!       Show that the following systems have no closed trajectories.     ,     ,     .        Formulate a condition for a 2-by-2 linear system to not be a center using the Bendixson–Dulac theorem. That is, the theorem says something about certain elements of .      Explain why the Bendixson–Dulac Theorem does not apply for any conservative system .      A system such as has solutions that exist for all time , yet there are no closed trajectories. Explain why the Poincaré–Bendixson Theorem does not apply.      Differential equations can also be given in different coordinate systems. Suppose we have the system , given in polar coordinates. Find all the closed trajectories and check if they are limit cycles and if so, if they are asymptotically stable or not.      Show that the following systems have no closed trajectories.     ,     ,     .      Use Bendixson–Dulac Theorem. a) , so no closed trajectories. b) for all except the lines given by (where we get zero), so no closed trajectories. c) for all except the line given by (where we get zero), so no closed trajectories.      Suppose an autonomous system in the plane has a solution , . What can you say about the system (in particular about limit cycles and periodic solutions)?    Using Poincaré–Bendixson Theorem, the system has a limit cycle, which is the unit circle centered at the origin, as , gets closer and closer to the unit circle. Thus , is the periodic solution.      Show that the limit cycle of the Van der Pol oscillator (for ) must not lie completely in the set where . Compare with .     , . So . The Bendixson–Dulac Theorem says there is no closed trajectory lying entirely in the set .      Suppose we have the system , given in polar coordinates. Find all the closed trajectories.    The closed trajectories are those where , therefore, all the circles centered at the origin with radius that is a multiple of are closed trajectories.     "
},
{
  "id": "limitcycles_section-4",
  "level": "2",
  "url": "limitcycles_section.html#limitcycles_section-4",
  "type": "Example",
  "number": "8.4.1",
  "title": "",
  "body": "  The Van der Pol oscillator Van der Pol oscillator Named for the Dutch physicist Balthasar van der Pol (1889–1959). is the following equation where is some positive constant. The Van der Pol oscillator originated with electrical circuits, but finds applications in diverse fields such as biology, seismology, and other physical sciences.  For simplicity, let us use . A phase diagram is given in the left-hand plot in . Notice how the trajectories seem to very quickly settle on a closed curve. On the right-hand side is the plot of a single solution for to with initial conditions and . The solution quickly tends to a periodic solution.   The phase portrait (left) and a graph of a sample solution of the Van der Pol oscillator.    The Van der Pol oscillator is an example of so-called relaxation oscillation relaxation oscillation . The word relaxation comes from the sudden jump (the very steep part of the solution). For larger the steep part becomes even more pronounced, for small the limit cycle looks more like a circle. In fact, setting , we get , which is a linear system with a center and all trajectories become circles.   "
},
{
  "id": "limitcycles_section-8",
  "level": "2",
  "url": "limitcycles_section.html#limitcycles_section-8",
  "type": "Theorem",
  "number": "8.4.1",
  "title": "Poincaré–Bendixson.",
  "body": " Poincaré–Bendixson  Poincaré–Bendixson Theorem    Ivar Otto Bendixson (1861–1935) was a Swedish mathematician. Suppose is a closed bounded region (a region in the plane that includes its boundary and does not have points arbitrarily far from the origin). Suppose is a solution of in that exists for all . Then either the solution is a periodic function, or the solution tends towards a periodic solution in .   "
},
{
  "id": "limitcycles_section-11",
  "level": "2",
  "url": "limitcycles_section.html#limitcycles_section-11",
  "type": "Example",
  "number": "8.4.2",
  "title": "",
  "body": "  Consider A vector field along with solutions with initial conditions , , and are drawn in .   Unstable limit cycle example.    Notice that points on the unit circle (distance one from the origin) satisfy . And , is a solution of the system. Therefore we have a closed trajectory. For points off the unit circle, the second term in pushes the solution further away from the -axis than the system , , and pushes the solution further away from the -axis than the linear system , . In other words for all other initial conditions the trajectory will spiral out.  This means that for initial conditions inside the unit circle, the solution spirals out towards the periodic solution on the unit circle, and for initial conditions outside the unit circle the solutions spiral off towards infinity. Therefore the unit circle is a limit cycle, but not an asymptotically stable one. The Poincaré–Bendixson Theorem applies to the initial points inside the unit circle, as those solutions stay bounded, but not to those outside, as those solutions go off to infinity.   "
},
{
  "id": "limitcycles_section-15",
  "level": "2",
  "url": "limitcycles_section.html#limitcycles_section-15",
  "type": "Theorem",
  "number": "8.4.2",
  "title": "Bendixson–Dulac.",
  "body": " Bendixson–Dulac  Bendixson–Dulac Theorem    Henri Dulac (1870–1955) was a French mathematician. Suppose is a simply connected region, and the expression Usually the expression in the Bendixson–Dulac Theorem is for some continuously differentiable function . For simplicity, let us just consider the case .  is either always positive or always negative on (except perhaps a small set such as on isolated points or curves) then the system has no closed trajectory inside .   "
},
{
  "id": "limitcycles_section-17",
  "level": "2",
  "url": "limitcycles_section.html#limitcycles_section-17",
  "type": "Example",
  "number": "8.4.3",
  "title": "",
  "body": "  Consider , in the entire plane (see ). The plane is simply connected and the theorem applies. We compute . The function is always positive except on the line . Therefore, via the theorem, the system has no closed trajectories.   "
},
{
  "id": "limitcycles_section-19",
  "level": "2",
  "url": "limitcycles_section.html#limitcycles_section-19",
  "type": "Example",
  "number": "8.4.4",
  "title": "",
  "body": "  Consider a somewhat more complicated example. Take the system , (see ). We compute . This expression takes on both signs, so if we are talking about the whole plane we cannot simply apply the theorem. However, we could apply it on the set where . Via the theorem, there is no closed trajectory in that set. Similarly, there is no closed trajectory in the set . We cannot conclude (yet) that there is no closed trajectory in the entire plane. For all we know, perhaps half of it is in the set where and the other half is in the set where .  The key is to look at the line where , or . On this line, and . In particular, if , then . So the arrows, the vectors , always point into the set where . There is no way we can start in the set where and go into the set where . Once we are in the set where , we stay there. So no closed trajectory can have points in both sets.   "
},
{
  "id": "limitcycles_section-20",
  "level": "2",
  "url": "limitcycles_section.html#limitcycles_section-20",
  "type": "Example",
  "number": "8.4.5",
  "title": "",
  "body": "  Consider , in the region given by . That is, is the region outside a circle of radius centered at the origin. Then there is a closed trajectory in , namely , . Furthermore, which is always positive on . So what is going on? The Bendixson–Dulac theorem does not apply since the region is not simply connected—it has a hole, the circle we cut out!   "
},
{
  "id": "limitcycles_section-21-1",
  "level": "2",
  "url": "limitcycles_section.html#limitcycles_section-21-1",
  "type": "Exercise",
  "number": "8.4.1",
  "title": "",
  "body": "  Show that the following systems have no closed trajectories.     ,     ,     .     "
},
{
  "id": "limitcycles_section-21-2",
  "level": "2",
  "url": "limitcycles_section.html#limitcycles_section-21-2",
  "type": "Exercise",
  "number": "8.4.2",
  "title": "",
  "body": "  Formulate a condition for a 2-by-2 linear system to not be a center using the Bendixson–Dulac theorem. That is, the theorem says something about certain elements of .   "
},
{
  "id": "limitcycles_section-21-3",
  "level": "2",
  "url": "limitcycles_section.html#limitcycles_section-21-3",
  "type": "Exercise",
  "number": "8.4.3",
  "title": "",
  "body": "  Explain why the Bendixson–Dulac Theorem does not apply for any conservative system .   "
},
{
  "id": "limitcycles_section-21-4",
  "level": "2",
  "url": "limitcycles_section.html#limitcycles_section-21-4",
  "type": "Exercise",
  "number": "8.4.4",
  "title": "",
  "body": "  A system such as has solutions that exist for all time , yet there are no closed trajectories. Explain why the Poincaré–Bendixson Theorem does not apply.   "
},
{
  "id": "limitcycles_section-21-5",
  "level": "2",
  "url": "limitcycles_section.html#limitcycles_section-21-5",
  "type": "Exercise",
  "number": "8.4.5",
  "title": "",
  "body": "  Differential equations can also be given in different coordinate systems. Suppose we have the system , given in polar coordinates. Find all the closed trajectories and check if they are limit cycles and if so, if they are asymptotically stable or not.   "
},
{
  "id": "limitcycles_section-21-6",
  "level": "2",
  "url": "limitcycles_section.html#limitcycles_section-21-6",
  "type": "Exercise",
  "number": "8.4.101",
  "title": "",
  "body": "  Show that the following systems have no closed trajectories.     ,     ,     .      Use Bendixson–Dulac Theorem. a) , so no closed trajectories. b) for all except the lines given by (where we get zero), so no closed trajectories. c) for all except the line given by (where we get zero), so no closed trajectories.   "
},
{
  "id": "limitcycles_section-21-7",
  "level": "2",
  "url": "limitcycles_section.html#limitcycles_section-21-7",
  "type": "Exercise",
  "number": "8.4.102",
  "title": "",
  "body": "  Suppose an autonomous system in the plane has a solution , . What can you say about the system (in particular about limit cycles and periodic solutions)?    Using Poincaré–Bendixson Theorem, the system has a limit cycle, which is the unit circle centered at the origin, as , gets closer and closer to the unit circle. Thus , is the periodic solution.   "
},
{
  "id": "limitcycles_section-21-8",
  "level": "2",
  "url": "limitcycles_section.html#limitcycles_section-21-8",
  "type": "Exercise",
  "number": "8.4.103",
  "title": "",
  "body": "  Show that the limit cycle of the Van der Pol oscillator (for ) must not lie completely in the set where . Compare with .     , . So . The Bendixson–Dulac Theorem says there is no closed trajectory lying entirely in the set .   "
},
{
  "id": "limitcycles_section-21-9",
  "level": "2",
  "url": "limitcycles_section.html#limitcycles_section-21-9",
  "type": "Exercise",
  "number": "8.4.104",
  "title": "",
  "body": "  Suppose we have the system , given in polar coordinates. Find all the closed trajectories.    The closed trajectories are those where , therefore, all the circles centered at the origin with radius that is a multiple of are closed trajectories.   "
},
{
  "id": "sec_chaos",
  "level": "1",
  "url": "sec_chaos.html",
  "type": "Section",
  "number": "8.5",
  "title": "Chaos",
  "body": " Chaos   Note: 1 lecture, §6.5 in , §9.8 in  You have surely heard the story about the flap of a butterfly wing in the Amazon causing hurricanes in the North Atlantic. In a prior section, we mentioned that a small change in initial conditions of the planets can lead to very different configuration of the planets in the long term. These are examples of chaotic systems chaotic systems . Mathematical chaos is not really chaos, there is precise order behind the scenes. Everything is still deterministic. However a chaotic system is extremely sensitive to initial conditions. This also means even small errors induced via numerical approximation create large errors very quickly, so it is almost impossible to numerically approximate for long times. This is a large part of the trouble, as chaotic systems cannot be in general solved analytically.  Take the weather, the most well-known chaotic system. A small change in the initial conditions (the temperature at every point of the atmosphere for example) produces drastically different predictions in relatively short time, and so we cannot accurately predict weather. And we do not actually know the exact initial conditions. We measure temperatures at a few points with some error, and then we somehow estimate what is in between. There is no way we can accurately measure the effects of every butterfly wing. Then we solve the equations numerically introducing new errors. You should not trust weather prediction more than a few days out. But we will see we can still get some information about a chaotic system on a longer time scale, in the context of weather, we can study the climate.  Chaotic behavior was first noticed by Edward Lorenz Edward Norton Lorenz (1917–2008) was an American mathematician and meteorologist. in the 1960s when trying to model thermally induced air convection (movement). Lorentz was looking at the relatively simple system: A small change in the initial conditions yields a very different solution after a reasonably short time.     A simple example the reader can experiment with, and which displays chaotic behavior, is a double pendulum. The equations for this setup are somewhat complicated, and their derivation is quite tedious tedious , so we will not bother to write them down. The idea is to put a pendulum on the end of another pendulum. The movement of the bottom mass will appear chaotic. This type of chaotic system is a basis for a whole number of office novelty desk toys. It is simple to build a version. Take a piece of a string. Tie two heavy nuts at different points of the string; one at the end, and one a bit above. Now give the bottom nut a little push. As long as the swings are not too big and the string stays tight, you have a double pendulum system.    Duffing equation and strange attractors  Let us study the so-called Duffing equation Duffing equation : Here , , , , and are constants. Except for the term, this equation looks like a forced mass-spring system. The means the spring does not exactly obey Hooke's law (which no real-world spring actually obeys exactly). When is not zero, the equation does not have a closed form solution, so we must resort to numerical solutions, as is usual for nonlinear systems. Not all choices of constants and initial conditions exhibit chaotic behavior. Let us study   The equation is not autonomous, so we cannot draw the vector field in the phase plane. We can still draw trajectories. In , we plot trajectories for going from 0 to 15 for two very close initial conditions and , and also the solutions in the space. The two trajectories are close at first, but after a while diverge significantly. This sensitivity to initial conditions is precisely what we mean by the system behaving chaotically.   On left, two trajectories in phase space for , for the Duffing equation one with initial conditions and the other with . On right the two solutions in -space.    The solution to the given Duffing equation for from 0 to 100.    Let us see the long term behavior. In , we plot the behavior of the system for initial conditions for a longer period of time. It is hard to see any particular pattern in the shape of the solution except that it seems to oscillate, but each oscillation appears quite unique. The oscillation is expected due to the forcing term. We mention that to produce the picture accurately, a ridiculously large number of steps In fact for reference, 30,000 steps were used with the Runge–Kutta algorithm, see exercises in . had to be used in the numerical algorithm, as even small errors quickly propagate in a chaotic system.  It is very difficult to analyze chaotic systems, or to find the order behind the madness, but let us try to do something that we did for the standard mass-spring system. One way we analyzed the system is that we figured out what was the long term behavior (not dependent on initial conditions). From the figure above, it is clear that we will not get a nice exact description of the long term behavior for this chaotic system, but perhaps we can find some order to what happens on each oscillation and what do these oscillations have in common.  The concept we explore is that of a Poincaré section Poincaré section Named for the French polymath Jules Henri Poincaré (1854–1912). . Instead of looking at in a certain interval, we look at where the system is at a certain sequence of points in time. Imagine flashing a strobe at a fixed frequency and drawing the points where the solution is during the flashes. The right strobing frequency depends on the system in question. The correct frequency for the forced Duffing equation (and other similar systems) is the frequency of the forcing term. For the Duffing equation above, find a solution , and look at the points As we are really not interested in the transient part of the solution, that is, the part of the solution that depends on the initial condition, we skip some number of steps in the beginning. For example, we might skip the first 100 such steps and start plotting points at , that is, The plot of these points is the Poincaré section. After plotting enough points, a curious pattern emerges in (the left-hand picture), a so-called strange attractor strange attractor .   Strange attractor. The left plot is with no phase shift, the right plot has phase shift .    Given a sequence of points, an attractor attractor is a set towards which the points in the sequence eventually get closer and closer to, that is, they are attracted. The Poincaré section is not really the attractor itself, but as the points are very close to it, we see its shape. The strange attractor is a very complicated set. It has fractal structure, that is, if you zoom in as far as you want, you keep seeing the same complicated structure.  The initial condition makes no difference. If we start with a different initial condition, the points eventually gravitate towards the attractor, and so as long as we throw away the first few points, we get the same picture. Similarly small errors in the numerical approximations do not matter here.  An amazing thing is that a chaotic system such as the Duffing equation is not random at all. There is a very complicated order to it, and the strange attractor says something about this order. We cannot quite say what state the system will be in eventually, but given the fixed strobing frequency we narrow it down to the points on the attractor.  If we use a phase shift, for example , and look at the times we obtain a slightly different attractor. The picture is the right-hand side of . It is as if we had rotated, moved, and slightly distorted the original. For each phase shift you can find the set of points towards which the system periodically keeps coming back to.  Study the pictures and notice especially the scales—where are these attractors located in the phase plane. Notice the regions where the strange attractor lives and compare it to the plot of the trajectories in .  Let us compare this section to the discussion in on forced oscillations. Consider This is like the Duffing equation, but with no term. The steady periodic solution is of the form Strobing using the frequency , we obtain a single point in the phase space. The attractor in this setting is a single point—an expected result as the system is not chaotic. It was the opposite of chaotic: Any difference induced by the initial conditions dies away very quickly, and we settle into always the same steady periodic motion.    The Lorenz system  In two dimensions to find chaotic behavior, we must study forced, or non-autonomous, systems such as the Duffing equation. The Poincaré–Bendixson Theorem says that a solution to an autonomous two-dimensional system that exists for all time in the future and does not go towards infinity is periodic or tends towards a periodic solution. Hardly the chaotic behavior we are looking for.  In three dimensions, even autonomous systems can be chaotic. Let us very briefly return to the Lorenz system Lorenz system  The Lorenz system is an autonomous system in three dimensions exhibiting chaotic behavior. See for a sample trajectory, which is now a curve in three-dimensional space.   A trajectory in the Lorenz system.    The solutions tend to an attractor in space, the so-called Lorenz attractor Lorenz attractor . In this case, no strobing is necessary, the solution will tend towards the attractor set. Again we cannot quite see the attractor itself, but if we try to follow a solution for long enough, as in the figure, we get a pretty good picture of what the attractor looks like. The Lorenz attractor is also a strange attractor and has a complicated fractal structure. And, just as for the Duffing equation, what we want to draw is not the whole trajectory, but start drawing the trajectory after a while, once it is close to the attractor.  The path of the trajectory is not simply a repeating figure-eight. The trajectory spins some seemingly random number of times on the left, then spins a number of times on the right, and so on. As this system arose in weather prediction, one can perhaps imagine a few days of warm weather and then a few days of cold weather, where it is not easy to predict when the weather will change, just as it is not really easy to predict far in advance when the solution will jump onto the other side. See for a plot of the component of the solution drawn above. A negative corresponds to the left loop and a positive corresponds to the right loop . On the other hand, while we cannot predict the weather, we can say something about the climate—the weather will be somewhere near the attractor.  Most of the mathematics we studied in this book is quite classical and well understood. On the other hand, chaos, including the Lorenz system, continues to be the subject of current research. Furthermore, chaos has found applications not just in the sciences, but also in art.   Graph of the component of the solution.        For the non-chaotic equation , suppose we strobe with frequency as we mentioned above. Use the known steady periodic solution to find precisely the point which is the attractor for the Poincaré section.       (project) A simple fractal attractor can be drawn via the following chaos game. Draw the three vertices of a triangle and label them, say , and . Draw some random point (it does not have to be one of the three points above). Roll a die to pick of the , , or randomly (for example 1 and 4 mean , 2 and 5 mean , and 3 and 6 mean ). Suppose we picked , then let be the point exactly halfway between and . Draw this point and let now refer to this new point . Rinse, repeat. Try to be precise and draw as many iterations as possible. Your points will be attracted to the so-called Sierpinski triangle Sierpinski triangle . A computer was used to run the game for 10,000 iterations to obtain the picture in .     10,000 iterations of the chaos game producing the Sierpinski triangle.       (project) Construct the double pendulum described in the text with a string and two nuts (or heavy beads). Play around with the position of the middle nut, and perhaps use different weight nuts. Describe what you find.       (computer project) Use computer software (such as Matlab, Octave, or perhaps even a spreadsheet) to plot the solution of the given forced Duffing equation with Euler's method. Plot the solution for from 0 to 100 with several different (small) step sizes. Discuss.      Find critical points of the Lorenz system and the associated linearizations.    Critical points: , , . Linearization at using , , is , , . Linearization at using , , is , , . Linearization at using , , is , , .     "
},
{
  "id": "nlin_duf-two-traj",
  "level": "2",
  "url": "sec_chaos.html#nlin_duf-two-traj",
  "type": "Figure",
  "number": "8.12",
  "title": "",
  "body": " On left, two trajectories in phase space for , for the Duffing equation one with initial conditions and the other with . On right the two solutions in -space.   "
},
{
  "id": "nlin_duf-long",
  "level": "2",
  "url": "sec_chaos.html#nlin_duf-long",
  "type": "Figure",
  "number": "8.13",
  "title": "",
  "body": " The solution to the given Duffing equation for from 0 to 100.   "
},
{
  "id": "nlin_strange",
  "level": "2",
  "url": "sec_chaos.html#nlin_strange",
  "type": "Figure",
  "number": "8.14",
  "title": "",
  "body": " Strange attractor. The left plot is with no phase shift, the right plot has phase shift .   "
},
{
  "id": "nlin_lorenz",
  "level": "2",
  "url": "sec_chaos.html#nlin_lorenz",
  "type": "Figure",
  "number": "8.15",
  "title": "",
  "body": " A trajectory in the Lorenz system.   "
},
{
  "id": "nlin_lorenz-graphx",
  "level": "2",
  "url": "sec_chaos.html#nlin_lorenz-graphx",
  "type": "Figure",
  "number": "8.16",
  "title": "",
  "body": " Graph of the component of the solution.   "
},
{
  "id": "sec_chaos-5-1",
  "level": "2",
  "url": "sec_chaos.html#sec_chaos-5-1",
  "type": "Exercise",
  "number": "8.5.1",
  "title": "",
  "body": "  For the non-chaotic equation , suppose we strobe with frequency as we mentioned above. Use the known steady periodic solution to find precisely the point which is the attractor for the Poincaré section.   "
},
{
  "id": "sec_chaos-5-2",
  "level": "2",
  "url": "sec_chaos.html#sec_chaos-5-2",
  "type": "Exercise",
  "number": "8.5.2",
  "title": "",
  "body": "   (project) A simple fractal attractor can be drawn via the following chaos game. Draw the three vertices of a triangle and label them, say , and . Draw some random point (it does not have to be one of the three points above). Roll a die to pick of the , , or randomly (for example 1 and 4 mean , 2 and 5 mean , and 3 and 6 mean ). Suppose we picked , then let be the point exactly halfway between and . Draw this point and let now refer to this new point . Rinse, repeat. Try to be precise and draw as many iterations as possible. Your points will be attracted to the so-called Sierpinski triangle Sierpinski triangle . A computer was used to run the game for 10,000 iterations to obtain the picture in .   "
},
{
  "id": "nlin_sierpinski",
  "level": "2",
  "url": "sec_chaos.html#nlin_sierpinski",
  "type": "Figure",
  "number": "8.17",
  "title": "",
  "body": " 10,000 iterations of the chaos game producing the Sierpinski triangle.   "
},
{
  "id": "sec_chaos-5-6",
  "level": "2",
  "url": "sec_chaos.html#sec_chaos-5-6",
  "type": "Exercise",
  "number": "8.5.3",
  "title": "",
  "body": "   (project) Construct the double pendulum described in the text with a string and two nuts (or heavy beads). Play around with the position of the middle nut, and perhaps use different weight nuts. Describe what you find.   "
},
{
  "id": "sec_chaos-5-7",
  "level": "2",
  "url": "sec_chaos.html#sec_chaos-5-7",
  "type": "Exercise",
  "number": "8.5.4",
  "title": "",
  "body": "   (computer project) Use computer software (such as Matlab, Octave, or perhaps even a spreadsheet) to plot the solution of the given forced Duffing equation with Euler's method. Plot the solution for from 0 to 100 with several different (small) step sizes. Discuss.   "
},
{
  "id": "sec_chaos-5-8",
  "level": "2",
  "url": "sec_chaos.html#sec_chaos-5-8",
  "type": "Exercise",
  "number": "8.5.101",
  "title": "",
  "body": "  Find critical points of the Lorenz system and the associated linearizations.    Critical points: , , . Linearization at using , , is , , . Linearization at using , , is , , . Linearization at using , , is , , .   "
},
{
  "id": "vecsandmaps_section",
  "level": "1",
  "url": "vecsandmaps_section.html",
  "type": "Section",
  "number": "A.1",
  "title": "Vectors, mappings, and matrices",
  "body": " Vectors, mappings, and matrices   Note: 2 lectures  In real life, there is most often more than one variable. We wish to organize dealing with multiple variables in a consistent manner, and in particular organize dealing with linear equations and linear mappings, as those are both rather useful and rather easy to handle. Mathematicians joke that to an engineer every problem is linear, and everything is a matrix. And well, they (the engineers) are not wrong. Quite often, solving an engineering problem is figuring out the right finite-dimensional linear problem to solve, which is then solved with some matrix manipulation. Most importantly, linear problems are the ones that we know how to solve, and we have many tools to solve them. For engineers, mathematicians, physicists, and anybody else in a technical field, it is absolutely vital to learn linear algebra.  As motivation, suppose we wish to solve for and . That is, we desire numbers and such that the two equations are satisfied. Let us perhaps start by adding the equations together to find In other words, . Once we have that, we plug into the first equation to find , so . OK, that was easy. What is all this fuss about linear equations? Well, try doing this if you have 5000 unknowns One of the downsides of making everything look like a linear problem is that the number of variables tends to become huge. . Also, we may have such equations not just of numbers, but of functions and derivatives of functions in differential equations. Clearly we need a systematic way of doing things. A nice consequence of making things systematic and simpler to write down is that it becomes easier to have computers do the work for us. Computers are very good at doing lots of repetitive tasks precisely, as long as we figure out a systematic way for them to perform the tasks.    Vectors and operations on vectors  Consider real numbers as an -tuple: The set of such -tuples is the so-called -dimensional space -dimensional space , often denoted by . Sometimes we call this the -dimensional euclidean space euclidean space Named after the ancient Greek mathematician Euclid of Alexandria (around 300 BC), possibly the most famous of mathematicians; even small towns often have Euclid Street or Euclid Avenue. . In two dimensions, is called the cartesian plane cartesian plane Named after the French mathematician René Descartes (1596–1650). It is cartesian as his name in Latin is Renatus Cartesius. . Each such -tuple represents a point in the -dimensional space. For example, the point in the plane is one unit to the right and two units up from the origin.  When we do algebra with these -tuples of numbers we call them vectors vector A common notation to distinguish vectors from points is to write for the point and for the vector. We write both as . . Mathematicians are keen on separating what is a vector and what is a point of the space or in the plane, and it turns out to be an important distinction, however, for the purposes of linear algebra we can think of everything being represented by a vector. A way to think of a vector, which is especially useful in calculus and differential equations, is an arrow. It is an object that has a direction direction and a magnitude . For instance, the vector is the arrow from the origin to the point in the plane. The magnitude is the length of the arrow. See . If we think of vectors as arrows, the arrow does not always have to start at the origin. If we do move it around, however, it should always keep the same direction and the same magnitude.   The vector drawn as an arrow from the origin to the point .    As vectors are arrows, when we want to give a name to a vector, we draw a little arrow above it: Another popular notation is a bold , although we will use the little arrows. It may be easy to write a bold letter in a book, but it is not so easy to write it by hand on paper or on the board. Mathematicians often do not even write the arrows. A mathematician would write and remember that is a vector and not a number. Just like you remember that Bob is your uncle, and you don't have to keep repeating Uncle Bob and you can just say Bob. In this book, however, we will call Bob Uncle Bob and write vectors with the little arrows.  The magnitude magnitude can be computed using the Pythagorean theorem. The vector drawn in the figure has magnitude . The magnitude is denoted by , and, in any number of dimensions, it can be computed in the same way:   For reasons that will become clear in the next section, we often write vectors as so-called column vectors column vector : Don't worry. It is just a different way of writing the same thing. For example, the vector can be written as   The fact that we write arrows above vectors allows us to write several vectors , , etc., without confusing these with the components of some other vector .  So where is the algebra from linear algebra ? Well, arrows can be added, subtracted, and multiplied by numbers. First we consider addition adding vectors . If we have two arrows, we simply move along one, and then along the other. See .   Adding the vectors , drawn dotted, and , drawn dashed. The result, , is drawn as a solid arrow.    It is rather easy to see what it does to the numbers that represent the vectors. Suppose we want to add to as in the figure. We travel along and then we travel along . What we did was travel one unit right, two units up, and then we travelled two units right, and three units down (the negative three). That means that we ended up at . That is how addition always works:    Subtracting subtracting vectors is similar. What means visually is that we first travel along , and then we travel backwards along . See . It is like adding where is the arrow we obtain by erasing the arrow head from one side and drawing it on the other side, that is, we reverse the direction. In terms of the numbers, we simply go backwards both horizontally and vertically, so we negate both numbers. For instance, if is , then is .   Subtraction, the vector , drawn dotted, minus , drawn dashed. The result, , is drawn as a solid arrow.    Another intuitive thing to do to a vector is to scale scale a vector it. We represent this by multiplication of a number with a vector. Because of this, when we wish to distinguish between vectors and numbers, we call the numbers scalars scalar . For example, suppose we want to travel three times further. If the vector is , travelling 3 times further means going 3 units to the right and 6 units up, so we get the vector . We just multiply each number in the vector by 3. If is a number, then Scaling (by a positive number) multiplies the magnitude and leaves direction untouched. The magnitude of is . The magnitude of 3 times , that is, of , is .  If we multiply a vector by a negative scalar, the vector is not only scaled, but it also switches direction. Multiplying by means we should go 3 times further but in the opposite direction, so 3 units to the left and 6 units down, or in other words, . As we mentioned above, is the reverse of , and this is the same as .  In , you can see a couple of examples of what scaling a vector means visually.   A vector , the vector (same direction, double the magnitude), and the vector (opposite direction, 1.5 times the magnitude).    We put all of these operations together to work out more complicated expressions. Let us compute a small example:   We said a vector is a direction and a magnitude. Magnitude is easy to represent, it is just a number. The direction direction is usually given by a vector with magnitude one. We call such a vector a unit vector unit vector . That is, is a unit vector when . For instance, the vectors , , and are all unit vectors.  To represent the direction of a vector , we need to find the unit vector in the same direction. To do so, we simply rescale by the reciprocal of the magnitude: , or more concisely, .  As an example, the unit vector in the direction of is the vector     Linear mappings and matrices  A vector-valued function vector-valued function  is a rule that takes a vector and returns another vector . For example, could be a scaling that doubles the size of vectors: Applied to say we get If is a mapping that takes vectors in to (such as the above), we write The words function and mapping are used rather interchangeably, although more often than not, mapping is used when talking about a vector-valued function, and the word function is often used when the function is scalar-valued.  A beginning student of mathematics (and many a seasoned mathematician) who sees an expression such as yearns to write After all, who has not wanted to write or something like that at some point in their mathematical lives? Wouldn't life be simple if we could do that? Of course we cannot always do that (for example, not with the square roots!) But there are many other functions where we can do exactly the above. Such functions are called linear .  A mapping is called linear linear mapping if for any vectors and , and also for any scalar . The we defined above that doubles the size of all vectors is linear. Let us check: and also   We also call a linear function a linear transformation transformation . If you want to be really fancy and impress your friends, you can call it a linear operator operator . When a mapping is linear we often do not write the parentheses. We write simply instead of . We do this because linearity means that the mapping behaves like multiplying by something. That something is a matrix.  A matrix matrix is an array of numbers ( rows and columns). A matrix is The numbers are called elements element of a matrix or entries entry of a matrix .  A column vector is simply an matrix. Similarly to a column vector there is also a row vector row vector , which is a matrix. If we have an matrix, then we say that it is a square matrix square matrix .  How does a matrix relate to a linear mapping? A matrix tells you where certain special vectors go. We give a name to those certain vectors. The standard basis vectors standard basis vectors of are In , these vectors are You may recall from calculus of several variables that these are sometimes called , , .  The reason these are called a basis basis is that every other vector can be written as a unique linear combination linear combination of them. For example, in the vector can be written as   So how does a matrix represent a linear mapping? Well, the columns of the matrix are the vectors where the matrix, as a linear mapping, takes , , etc. For instance, consider As a linear mapping, takes to and to . In other words,   More generally, if we have an matrix , that is, we have rows and columns, then the mapping takes to the column of . For example, represents a mapping from to that does   What about another vector that is not in the standard basis? Where does it go? We use linearity. First, we write the vector as a linear combination of the standard basis vectors: Then If we know where takes all the basis vectors, we know where it takes all vectors.  Suppose is the matrix from above, then   Every linear mapping from to can be represented by an matrix. You just figure out where it takes the standard basis vectors. Conversely, every matrix represents a linear mapping. Hence, we may think of matrices being linear mappings, and linear mappings being matrices.  Or can we? In this book we study mostly linear differential operators, and linear differential operators are linear mappings, although they are not acting on , but on an infinite-dimensional space of functions: For a function we get a function , and is linear in the sense that for any number (scalar) and all functions and .  So the answer is not really. But if we consider vectors in finite-dimensional spaces then yes, every linear mapping is a matrix. We have mentioned at the beginning of this section, that we can make everything a vector. That's not strictly true, but it is true approximately. Those infinite-dimensional spaces of functions can be approximated by a finite-dimensional space, and then linear operators are just matrices. So approximately, this is true. And as far as actual computations that we can do on a computer, we can work only with finitely many dimensions anyway. If you ask a computer or your calculator to plot a function, it samples the function at finitely many points and then connects the dots If you have ever used Matlab, you may have noticed that to plot a function, we take a vector of inputs, ask Matlab to compute the corresponding vector of values of the function, and then we ask it to plot the result. . It does not actually give you infinitely many values. The way that you have been using the computer or your calculator so far has already been a certain approximation of the space of functions by a finite-dimensional space.  To end the section, we notice how can be written more succinctly. Suppose Then For example, That is, you take the entries in a row of the matrix, you multiply them by the entries in your vector, you add things up, and that's the corresponding entry in the resulting vector.      On a piece of graph paper draw the vectors:                       On a piece of graph paper draw the vector starting at (based at) the given point:    based at     based at     based at         On a piece of graph paper draw the following operations. Draw and label the vectors involved in the operations as well as the result:                       Compute the magnitude of                       Compute                                      Find the unit vector in the direction of the given vector                       If and are added together, we find . What is ?      Write as a linear combination of the standard basis vectors , , and .      If the magnitude of is 4, what is the magnitude of                                      Suppose a linear mapping takes to and it takes to . Where does it take                       Suppose a linear mapping takes to , it takes to , and it takes to . Write down the matrix representing the mapping .      Suppose that a mapping takes to , to , and to . Explain why is not linear.       (challenging) Let represent the space of quadratic polynomials in : a point in represents the polynomial . Consider the derivative as a mapping of to , and note that is linear. Write down as a matrix.      Compute the magnitude of                     a)  b)  c)       Find the unit vector in the direction of the given vector                     a)   b)  c)       Compute                                    a)  b)  c)  d)  e)  f)       If the magnitude of is 5, what is the magnitude of                     a)  b)  c)       Suppose a linear mapping takes to and it takes to . Where does it take                     a)  b)  c)      "
},
{
  "id": "linalg-vecarrow_fig",
  "level": "2",
  "url": "vecsandmaps_section.html#linalg-vecarrow_fig",
  "type": "Figure",
  "number": "A.1",
  "title": "",
  "body": " The vector drawn as an arrow from the origin to the point .   "
},
{
  "id": "linalg-vecadd_fig",
  "level": "2",
  "url": "vecsandmaps_section.html#linalg-vecadd_fig",
  "type": "Figure",
  "number": "A.2",
  "title": "",
  "body": " Adding the vectors , drawn dotted, and , drawn dashed. The result, , is drawn as a solid arrow.   "
},
{
  "id": "linalg-vecsub_fig",
  "level": "2",
  "url": "vecsandmaps_section.html#linalg-vecsub_fig",
  "type": "Figure",
  "number": "A.3",
  "title": "",
  "body": " Subtraction, the vector , drawn dotted, minus , drawn dashed. The result, , is drawn as a solid arrow.   "
},
{
  "id": "linalg-vecscale_fig",
  "level": "2",
  "url": "vecsandmaps_section.html#linalg-vecscale_fig",
  "type": "Figure",
  "number": "A.4",
  "title": "",
  "body": " A vector , the vector (same direction, double the magnitude), and the vector (opposite direction, 1.5 times the magnitude).   "
},
{
  "id": "vecsandmaps_section-5-1",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-1",
  "type": "Exercise",
  "number": "A.1.1",
  "title": "",
  "body": "  On a piece of graph paper draw the vectors:                    "
},
{
  "id": "vecsandmaps_section-5-2",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-2",
  "type": "Exercise",
  "number": "A.1.2",
  "title": "",
  "body": "  On a piece of graph paper draw the vector starting at (based at) the given point:    based at     based at     based at      "
},
{
  "id": "vecsandmaps_section-5-3",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-3",
  "type": "Exercise",
  "number": "A.1.3",
  "title": "",
  "body": "  On a piece of graph paper draw the following operations. Draw and label the vectors involved in the operations as well as the result:                    "
},
{
  "id": "vecsandmaps_section-5-4",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-4",
  "type": "Exercise",
  "number": "A.1.4",
  "title": "",
  "body": "  Compute the magnitude of                    "
},
{
  "id": "vecsandmaps_section-5-5",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-5",
  "type": "Exercise",
  "number": "A.1.5",
  "title": "",
  "body": "  Compute                                   "
},
{
  "id": "vecsandmaps_section-5-6",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-6",
  "type": "Exercise",
  "number": "A.1.6",
  "title": "",
  "body": "  Find the unit vector in the direction of the given vector                    "
},
{
  "id": "vecsandmaps_section-5-7",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-7",
  "type": "Exercise",
  "number": "A.1.7",
  "title": "",
  "body": "  If and are added together, we find . What is ?   "
},
{
  "id": "vecsandmaps_section-5-8",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-8",
  "type": "Exercise",
  "number": "A.1.8",
  "title": "",
  "body": "  Write as a linear combination of the standard basis vectors , , and .   "
},
{
  "id": "vecsandmaps_section-5-9",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-9",
  "type": "Exercise",
  "number": "A.1.9",
  "title": "",
  "body": "  If the magnitude of is 4, what is the magnitude of                                   "
},
{
  "id": "vecsandmaps_section-5-10",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-10",
  "type": "Exercise",
  "number": "A.1.10",
  "title": "",
  "body": "  Suppose a linear mapping takes to and it takes to . Where does it take                    "
},
{
  "id": "vecsandmaps_section-5-11",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-11",
  "type": "Exercise",
  "number": "A.1.11",
  "title": "",
  "body": "  Suppose a linear mapping takes to , it takes to , and it takes to . Write down the matrix representing the mapping .   "
},
{
  "id": "vecsandmaps_section-5-12",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-12",
  "type": "Exercise",
  "number": "A.1.12",
  "title": "",
  "body": "  Suppose that a mapping takes to , to , and to . Explain why is not linear.   "
},
{
  "id": "vecsandmaps_section-5-13",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-13",
  "type": "Exercise",
  "number": "A.1.13",
  "title": "",
  "body": "   (challenging) Let represent the space of quadratic polynomials in : a point in represents the polynomial . Consider the derivative as a mapping of to , and note that is linear. Write down as a matrix.   "
},
{
  "id": "vecsandmaps_section-5-14",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-14",
  "type": "Exercise",
  "number": "A.1.101",
  "title": "",
  "body": "  Compute the magnitude of                     a)  b)  c)    "
},
{
  "id": "vecsandmaps_section-5-15",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-15",
  "type": "Exercise",
  "number": "A.1.102",
  "title": "",
  "body": "  Find the unit vector in the direction of the given vector                     a)   b)  c)    "
},
{
  "id": "vecsandmaps_section-5-16",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-16",
  "type": "Exercise",
  "number": "A.1.103",
  "title": "",
  "body": "  Compute                                    a)  b)  c)  d)  e)  f)    "
},
{
  "id": "vecsandmaps_section-5-17",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-17",
  "type": "Exercise",
  "number": "A.1.104",
  "title": "",
  "body": "  If the magnitude of is 5, what is the magnitude of                     a)  b)  c)    "
},
{
  "id": "vecsandmaps_section-5-18",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-18",
  "type": "Exercise",
  "number": "A.1.105",
  "title": "",
  "body": "  Suppose a linear mapping takes to and it takes to . Where does it take                     a)  b)  c)    "
},
{
  "id": "matalg_section",
  "level": "1",
  "url": "matalg_section.html",
  "type": "Section",
  "number": "A.2",
  "title": "Matrix algebra",
  "body": " Matrix algebra   Note: 2–3 lectures    One-by-one matrices  Let us motivate what we want to achieve with matrices. Real-valued linear mappings of the real line, linear functions that eat numbers and spit out numbers, are just multiplications by a number. Consider a mapping defined by multiplying by a number. Let's call this number . The mapping then takes to . We can add such mappings: If we have another mapping , then We get a new mapping that multiplies by, well, . If is a mapping that doubles its input, , and is a mapping that triples, , then is a mapping that multiplies by , .  Similarly we can compose such mappings, that is, we could apply one and then the other. We take , we run it through the first mapping to get times , then we run through the second mapping . In other words, We just multiply those two numbers. Using our doubling and tripling mappings, if we double and then triple, that is, , then we obtain . The composition is the mapping that multiplies by . For larger matrices, composition also ends up being a kind of multiplication.    Matrix addition and scalar multiplication  The mappings that multiply numbers by numbers are just matrices. The number above could be written as a matrix . Perhaps we would want to do to all matrices the same things that we did to those matrices at the start of this section above. First, let us add matrices. If we have a matrix and a matrix that are of the same size, say , then they are mappings from to . The mapping should also be a mapping from to , and it should do the following to vectors: It turns out you just add the matrices element-wise: If the entry of is , and the entry of is , then the entry of is . If then We illustrate on a more concrete example: Let us check that this does the right thing to a vector. We use some of the vector algebra that we already know, and regroup things: If we replaced the numbers by letters, that would constitute a proof! Notice that we did not really have to compute what the result is to convince ourselves that the two expressions were equal.  If the sizes of the matrices do not match, then addition is undefined. If is and is , then we cannot add the matrices. We do not know what that could possibly mean.  It is also useful to have a matrix that when added to any other matrix does nothing. This is the zero matrix, the matrix of all zeros: We often denote the zero matrix by without specifying size. We would then just write , where we just assume that is the zero matrix of the same size as .  There are really two things we can multiply matrices by. We can multiply matrices by scalars or we can multiply by other matrices. Let us first consider multiplication by scalars. For a matrix and a scalar , we want to be the matrix that accomplishes That is just scaling the result by . If you think about it, scaling every term in by achieves just that: If For example,   Let us list some properties of matrix addition and scalar multiplication. Denote by the zero matrix, by , scalars, and by , , matrices. Then: These rules should look very familiar.    Matrix multiplication  As we mentioned above, composition of linear mappings is also a multiplication of matrices. Suppose is an matrix, that is, takes to , and is an matrix, that is, takes to . The composition should work as follows First, a vector in gets taken to the vector in . Then the mapping takes it to the vector in . In other words, the composition should be an matrix. In terms of sizes we should have Notice how the middle size must match.  OK, now we know what sizes of matrices we should be able to multiply and what the product should be. Let us see how to actually compute matrix multiplication. We start with the so-called dot product dot product (or inner product inner product ) of two vectors. Usually this is a row vector multiplied with a column vector of the same size. Dot product multiplies each pair of entries from the first and the second vector and sums these products. The result is a single number. For example, And similarly for larger (or smaller) vectors. A dot product is really a product of two matrices: a matrix and an matrix resulting in a matrix—a number.  Armed with the dot product we define the product of matrices product of matrices matrix product . We denote by the row of and by the column of . For an matrix and an matrix we can compute the product : The matrix is an matrix whose entry is the dot product For example, given a and a matrix we should end up with a matrix: or with some numbers:   A useful consequence of the definition is that the evaluation for a matrix and a (column) vector is also matrix multiplication. That is really why we think of vectors as column vectors, or matrices. For example, If you look at the last section, that is precisely the last example we gave.  You should stare at the computation of multiplication of matrices and the previous definition of as a mapping for a moment. What we are doing with matrix multiplication is applying the mapping to the columns of . This is usually written as follows. Suppose we write the matrix , where are the columns of . Then for an matrix , The columns of the matrix are the vectors . For example, in , the columns of are This is a very useful way to understand what matrix multiplication is. It should also make it easier to remember how to perform matrix multiplication.    Some rules of matrix algebra  For multiplication we want an analogue of a 1. That is, we desire a matrix that just leaves everything as it found it. This analogue is the so-called identity matrix identity matrix . The identity matrix is a square matrix with 1s on the main diagonal and zeros everywhere else. It is usually denoted by . For each size we have a different identity matrix and so sometimes we may denote the size as a subscript. For example, is the identity matrix Let us see how the matrix works on a smaller example, Multiplication by the identity from the left looks similar, and also does not touch anything.  We have the following rules for matrix multiplication. Suppose that , , are matrices of the correct sizes so that the following make sense. Let denote a scalar (number). Then     Let us demonstrate a couple of these rules. For example, the associative law: and Or how about multiplication by scalars:  and     A multiplication rule, one you have used since primary school on numbers, is quite conspicuously missing for matrices. That is, matrix multiplication is not commutative. Firstly, just because makes sense, it may be that is not even defined. For example, if is , and is , then we can multiply but not .  Even if and are both defined, it does not mean that they are equal. For example, take and :     Inverse  A couple of other algebra rules you know for numbers do not quite work on matrices:     does not necessarily imply , even if is not 0.     does not necessarily mean that or .    For example:   To make these rules hold, we do not just need one of the matrices to not be zero, we would need to divide by a matrix. This is where the matrix inverse matrix inverse comes in. Suppose that and are matrices such that Then we call the inverse of and we denote by . Perhaps not surprisingly, , since if the inverse of is , then the inverse of is . If the inverse of exists, then we say is invertible invertible matrix . If is not invertible, we say is singular singular matrix .  If is a matrix, then is . That is where the notation comes from. The computation is not nearly as simple when is larger.  The proper formulation of the cancellation rule is:   If is invertible, then implies .   The computation is what you would do in regular algebra with numbers, but you have to be careful never to commute matrices: And similarly for cancellation on the right:   If is invertible, then implies .   The rule says, among other things, that the inverse of a matrix is unique if it exists: If , then is invertible and .  We will see later how to compute an inverse of a matrix in general. For now, let us note that there is a simple formula for the inverse of a matrix   For example: Let's try it: Just as we cannot divide by every number, not every matrix is invertible. In the case of matrices however we may have singular matrices that are not zero. For example, is a singular matrix. But didn't we just give a formula for an inverse? Let us try it: We get into a bit of trouble; we are trying to divide by zero.  So a matrix is invertible whenever and otherwise it is singular. The expression is called the determinant and we will look at it more carefully in a later section. There is a similar expression for a square matrix of any size.    Diagonal matrices  A simple (and surprisingly useful) type of a square matrix is a so-called diagonal matrix diagonal matrix . It is a matrix whose entries are all zero except those on the main diagonal from top left to bottom right. For example a diagonal matrix is of the form Such matrices have nice properties when we multiply by them. If we multiply them by a vector, they multiply the entry by . For example, Similarly, when they multiply another matrix from the left, they multiply the row by . For example, On the other hand, multiplying on the right, they multiply the columns: And it is really easy to multiply two diagonal matrices together—we multiply the entries:   For this last reason, they are easy to invert, you simply invert each diagonal element: Let us check an example It is no wonder that the way we solve many problems in linear algebra (and in differential equations) is to try to reduce the problem to the case of diagonal matrices.    Transpose  Vectors do not always have to be column vectors, that is just a convention. Swapping rows and columns is from time to time needed. The operation that swaps rows and columns is the so-called transpose transpose . The transpose of is denoted by . Example: Transpose takes an matrix to an matrix.  A key feature of the transpose is that if the product makes sense, then also makes sense, at least from the point of view of sizes. In fact, we get precisely the transpose of . That is: For example, It is left to the reader to verify that computing the matrix product on the left and then transposing is the same as computing the matrix product on the right.  If we have a column vector to which we apply a matrix and we transpose the result, then the row vector applies to from the left:   Another place where transpose is useful is when we wish to apply the dot product As a side note, mathematicians write and physicists write . Shhh... don't tell anyone, but the physicists are probably right on this. to two column vectors: That is the way that one often writes the dot product in software.  We say a matrix is symmetric symmetric matrix if . For example, is a symmetric matrix. Notice that a symmetric matrix is always square, that is, . Symmetric matrices have many nice properties Although so far we have not learned enough about matrices to really appreciate them. , and come up quite often in applications.      Add the following matrices                  Compute                  Multiply the following matrices                            Compute the inverse of the given matrices                            Compute the inverse of the given matrices                       Add the following matrices                a)  b)       Compute                a)  b)       Multiply the following matrices                          a)  b)  c)  d)       Compute the inverse of the given matrices                          a)  b)  c)  d)       Compute the inverse of the given matrices                     a)  b)  c)      "
},
{
  "id": "matalg_section-6-4",
  "level": "2",
  "url": "matalg_section.html#matalg_section-6-4",
  "type": "Example",
  "number": "A.2.1",
  "title": "",
  "body": "  Let us demonstrate a couple of these rules. For example, the associative law: and Or how about multiplication by scalars:  and    "
},
{
  "id": "matalg_section-10-1",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-1",
  "type": "Exercise",
  "number": "A.2.1",
  "title": "",
  "body": "  Add the following matrices               "
},
{
  "id": "matalg_section-10-2",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-2",
  "type": "Exercise",
  "number": "A.2.2",
  "title": "",
  "body": "  Compute               "
},
{
  "id": "matalg_section-10-3",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-3",
  "type": "Exercise",
  "number": "A.2.3",
  "title": "",
  "body": "  Multiply the following matrices                         "
},
{
  "id": "matalg_section-10-4",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-4",
  "type": "Exercise",
  "number": "A.2.4",
  "title": "",
  "body": "  Compute the inverse of the given matrices                         "
},
{
  "id": "matalg_section-10-5",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-5",
  "type": "Exercise",
  "number": "A.2.5",
  "title": "",
  "body": "  Compute the inverse of the given matrices                    "
},
{
  "id": "matalg_section-10-6",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-6",
  "type": "Exercise",
  "number": "A.2.101",
  "title": "",
  "body": "  Add the following matrices                a)  b)    "
},
{
  "id": "matalg_section-10-7",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-7",
  "type": "Exercise",
  "number": "A.2.102",
  "title": "",
  "body": "  Compute                a)  b)    "
},
{
  "id": "matalg_section-10-8",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-8",
  "type": "Exercise",
  "number": "A.2.103",
  "title": "",
  "body": "  Multiply the following matrices                          a)  b)  c)  d)    "
},
{
  "id": "matalg_section-10-9",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-9",
  "type": "Exercise",
  "number": "A.2.104",
  "title": "",
  "body": "  Compute the inverse of the given matrices                          a)  b)  c)  d)    "
},
{
  "id": "matalg_section-10-10",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-10",
  "type": "Exercise",
  "number": "A.2.105",
  "title": "",
  "body": "  Compute the inverse of the given matrices                     a)  b)  c)    "
},
{
  "id": "elim_section",
  "level": "1",
  "url": "elim_section.html",
  "type": "Section",
  "number": "A.3",
  "title": "Elimination",
  "body": " Elimination   Note: 2–3 lectures    Linear systems of equations  One application of matrices is to solve systems of linear equations Although perhaps we have this backwards, quite often we solve a linear system of equations to find out something about matrices, rather than vice versa. . Consider the following system of linear equations   There is a systematic procedure called elimination elimination to solve such a system. In this procedure, we attempt to eliminate each variable from all but one equation. We want to end up with equations such as , where we can just read off the answer.  We write a system of linear equations as a matrix equation: The system is written as If we knew the inverse of , then we would be done; we would simply solve the equation: Well, but that is part of the problem, we do not know how to compute the inverse for matrices bigger than . We will see later that to compute the inverse we are really solving for several different . In other words, we will need to do elimination to find . In addition, we may wish to solve if is not invertible, or perhaps not even square.  Let us return to the equations themselves and see how we can manipulate them. There are a few operations we can perform on the equations that do not change the solution. First, perhaps an operation that may seem stupid, we can swap two equations in : Clearly these new equations have the same solutions . A second operation is that we can multiply an equation by a nonzero number. For example, we multiply the third equation in by 3: Finally, we can add a multiple of one equation to another equation. For instance, we add 3 times the third equation in to the second equation: The same should still be solutions to the new equations. These were just examples; we did not get any closer to the solution. We must do these three operations in some more logical manner, but it turns out these three operations suffice to solve every linear equation.  The first thing is to write the equations in a more compact manner. Given we write down the so-called augmented matrix augmented matrix  where the vertical line is just a marker for us to know where the right-hand side of the equation starts. For the system the augmented matrix is The entire process of elimination, which we will describe, is often applied to any sort of matrix, not just an augmented matrix. Simply think of the matrix as the matrix     Row echelon form and elementary operations  We apply the three operations above to the matrix. We call these the elementary operations elementary operations or elementary row operations elementary row operations row operations . Translating the operations to the matrix setting, the operations become:    Swap two rows.    Multiply a row by a nonzero number.    Add a multiple of one row to another row.    We run these operations until we get into a state where it is easy to read off the answer, or until we get into a contradiction indicating no solution.  More specifically, we run the operations until we obtain the so-called row echelon form row echelon form echelon form . Let us call the first (from the left) nonzero entry in each row the leading entry leading entry . A matrix is in row echelon form if the following conditions are satisfied:    The leading entry in any row is strictly to the right of the leading entry of the row above.    Any zero rows are below all the nonzero rows.    All leading entries are 1.    A matrix is in reduced row echelon form reduced row echelon form if furthermore the following condition is satisfied.    All the entries above a leading entry are zero.    Note that the definition applies to matrices of any size.    The following matrices are in row echelon form. The leading entries are marked: None of the matrices above are in reduced row echelon form. For example, in the first matrix none of the entries above the second and third leading entries are zero; they are 9, 3, and 5. The following matrices are in reduced row echelon form. The leading entries are marked:     The procedure we will describe to find a reduced row echelon form of a matrix is called Gauss–Jordan elimination Gauss–Jordan elimination . The first part of it, which obtains a row echelon form, is called Gaussian elimination Gaussian elimination or row reduction row reduction . For some problems, a row echelon form is sufficient, and it is a bit less work to only do this first part.  To attain the row echelon form we work systematically. We go column by column, starting at the first column. We find topmost entry in the first column that is not zero, and we call it the pivot pivot . If there is no nonzero entry we move to the next column. We swap rows to put the row with the pivot as the first row. We divide the first row by the pivot to make the pivot entry be a 1. Now look at all the rows below and subtract the correct multiple of the pivot row so that all the entries below the pivot become zero.  After this procedure we forget that we had a first row (it is now fixed), and we forget about the column with the pivot and all the preceding zero columns. Below the pivot row, all the entries in these columns are just zero. Then we focus on the smaller matrix and we repeat the steps above.  It is best shown by example, so let us go back to the example from the beginning of the section. We keep the vertical line in the matrix, even though the procedure works on any matrix, not just an augmented matrix. We start with the first column and we locate the pivot, in this case the first entry of the first column. We multiply the first row by . We subtract the first row from the second and third row (two elementary operations). We are done with the first column and the first row for now. We almost pretend the matrix does not have the first column and the first row. OK, look at the second column, and notice that now the pivot is in the third row. We swap rows. And we divide the pivot row by 3. We do not need to subtract anything as everything below the pivot is already zero. We move on. We again start ignoring the second row and second column and focus on We find the pivot, then divide that row by 2: The matrix is now in row echelon form.  The equation corresponding to the last row is . We know and we could substitute it into the first two equations to get equations for and . Then we could do the same thing with , until we solve for all 3 variables. This procedure is called backsubstitution backsubstitution and we can achieve it via elementary operations. We start from the lowest pivot (leading entry in the row echelon form) and subtract the right multiple from the row above to make all the entries above this pivot zero. Then we move to the next pivot and so on. After we are done, we will have a matrix in reduced row echelon form.  We continue our example. Subtract the last row from the first to get The entry above the pivot in the second row is already zero. So we move onto the next pivot, the one in the second row. We subtract this row from the top row to get The matrix is in reduced row echelon form.  If we now write down the equations for , we find In other words, we have solved the system.    Non-unique solutions and inconsistent systems  It is possible that the solution of a linear system of equations is not unique, or that no solution exists. Suppose for a moment that the row echelon form we found was Then we have an equation coming from the last row. That is impossible and the equations are what we call inconsistent inconsistent . There is no solution to .  On the other hand, if we find a row echelon form then there is no issue with finding solutions. In fact, we will find way too many. Let us continue with backsubstitution (subtracting 3 times the third row from the first) to find the reduced row echelon form and let's mark the pivots. The last row is all zeros; it just says and we ignore it. The two remaining equations are Let us solve for the variables that corresponded to the pivots, that is, and as there was a pivot in the first column and in the third column: The variable can be anything you wish and we still get a solution. The is called a free variable free variable . There are infinitely many solutions, one for every choice of . If we pick , then , and give a solution. But we also get a solution by picking say , in which case and , or by picking in which case and .  The general idea is that if any row has all zeros in the columns corresponding to the variables, but a nonzero entry in the column corresponding to the right-hand side , then the system is inconsistent and has no solutions. In other words, the system is inconsistent if you find a pivot on the right side of the vertical line drawn in the augmented matrix. Otherwise, the system is consistent consistent , and at least one solution exists.  Suppose the system is consistent (at least one solution exists):    If every column corresponding to a variable has a pivot element, then the solution is unique.    If there are columns corresponding to variables with no pivot, then those are free variables that can be chosen arbitrarily, and there are infinitely many solutions.    When , we have a so-called homogeneous matrix equation homogeneous matrix equation  There is no need to write an augmented matrix in this case. As the elementary operations do not do anything to a zero column, it always stays a zero column. Moreover, always has at least one solution, namely . Such a system is always consistent. It may have other solutions: If you find any free variables, then you get infinitely many solutions.  The set of solutions of comes up quite often so people give it a name. It is called the nullspace nullspace or the kernel kernel of . One place where the kernel comes up is invertibility of a square matrix . If the kernel of contains a nonzero vector, then it contains infinitely many vectors (there was a free variable). But then it is impossible to invert , since infinitely many vectors go to , so there is no unique vector that takes to . So if the kernel is nontrivial, that is, if there are any nonzero vectors in the kernel, in other words, if there are any free variables, or in yet other words, if the row echelon form of has columns without pivots, then is not invertible. We will return to this idea later.    Linear independence and rank  If rows of a matrix correspond to equations, it may be good to find out how many equations we really need to find the same set of solutions. Similarly, if we find a number of solutions to a linear equation , we may ask if we found enough so that all other solutions can be formed out of the given set. The concept we want is that of linear independence. That same concept is useful for differential equations, for example in .  Given row or column vectors , a linear combination linear combination is an expression of the form where are all scalars. For example, is a linear combination of , , and .  We have seen linear combinations before. The expression is a linear combination of the columns of , while is a linear combination of the rows of .  The way linear combinations come up in our study of differential equations is similar to the following computation. Suppose that , , ..., are solutions to , , ..., . Then the linear combination is a solution to :   So if you have found enough solutions, you have them all. The question is, when did we find enough of them?  We say the vectors , , ..., are linearly independent linearly independent if the only solution to is . Otherwise, we say the vectors are linearly dependent linearly dependent .  For example, the vectors and are linearly independent. Let's try: So , and then it is clear that as well. In other words, the two vectors are linearly independent.  If a set of vectors is linearly dependent, that is, some of the s are nonzero, then we can solve for one vector in terms of the others. Suppose . Since , then For example, and so   You may have noticed that solving for those s is just solving linear equations, and so you may not be surprised that to check if a set of vectors is linearly independent we use row reduction.  Given a set of vectors, we may not be interested in just finding if they are linearly independent or not, we may be interested in finding a linearly independent subset. Or perhaps we may want to find some other vectors that give the same linear combinations and are linearly independent. The way to figure this out is to form a matrix out of our vectors. If we have row vectors we consider them as rows of a matrix. If we have column vectors we consider them columns of a matrix. The set of all linear combinations of a set of vectors is called their span span .   Given a matrix , the maximal number of linearly independent rows is called the rank rank of , and we write for the rank. For example, The second and third row are multiples of the first one. We cannot choose more than one row and still have a linearly independent set. But what is That seems to be a tougher question to answer. The first two rows are linearly independent (neither is a multiple of the other), so the rank is at least two. If we would set up the equations for the , , and , we would find a system with infinitely many solutions. One solution is So the set of all three rows is linearly dependent, the rank cannot be 3. Therefore the rank is 2.  But how can we do this in a more systematic way? We find the row echelon form! The elementary row operations do not change the set of linear combinations of the rows (that was one of the main reasons for defining them as they were). In other words, the span of the rows of the is the same as the span of the rows of the row echelon form of . In particular, the number of linearly independent rows is the same. And in the row echelon form, all nonzero rows are linearly independent. This is not hard to see. Consider the two nonzero rows in the example above. Suppose we tried to solve for the and in Since the first column of the row echelon matrix has zeros except in the first row, it follows that . Using that and looking at the second column, we find . We only have two nonzero rows, and they are linearly independent, so the rank of the matrix is 2.  The span of the rows is called the row space row space . The row space of and the row echelon form of are the same. In the example,   Similarly to row space, the span of columns is called the column space column space .   So it may also be good to find the number of linearly independent columns of . One way to do that is to find the number of linearly independent rows of . It is a tremendously useful fact that the number of linearly independent columns is always the same as the number of linearly independent rows:         In particular, to find a set of linearly independent columns we need to look at where the pivots were. If you recall above, when solving the key was finding the pivots, any non-pivot columns corresponded to free variables. That means we can solve for the non-pivot columns in terms of the pivot columns. Let's see an example. First we reduce some random matrix: We find a pivot and reduce the rows below: We find the next pivot, make it one, and rinse and repeat: The final matrix is the row echelon form of the matrix. Consider the pivots that we marked. The pivot columns are the first and the third column. All other columns correspond to free variables when solving , so all other columns can be solved in terms of the first and the third column. In other words We could perhaps use another pair of columns to get the same span, but the first and the third are guaranteed to work because they are pivot columns.  The discussion above could be expanded into a proof of the theorem if we wanted. As each nonzero row in the row echelon form contains a pivot, then the rank is the number of pivots, which is the same as the maximal number of linearly independent columns.  The idea also works in reverse. Suppose we have a bunch of column vectors and we just need to find a linearly independent set. For example, suppose we started with the vectors These vectors are not linearly independent as we saw above. In particular, the span of and is the same as the span of all four of the vectors. So and can both be written as linear combinations of and . A common thing that comes up in practice is that one gets a set of vectors whose span is the set of solutions of some problem. But perhaps we get way too many vectors, we want to simplify. For example above, all vectors in the span of can be written for some numbers . But it is also true that every such vector can be written as for two numbers and . And one has to admit, that looks much simpler. Moreover, these numbers and are unique. More on that in the next section.  To find this linearly independent set we simply take our vectors and form the matrix , that is, the matrix We crank up the row-reduction machine, feed this matrix into it, find the pivot columns, and pick those. In this case, and .    Computing the inverse  If the matrix is square and there exists a unique solution to for any (there are no free variables), then is invertible. This is equivalent to the matrix being of rank .  In particular, if then . Now we just need to compute what is. We can surely do elimination every time we want to find , but that would be ridiculous. The mapping is linear and hence given by a matrix, and we have seen that to figure out the matrix we just need to find where takes the standard basis vectors , , ..., .  That is, to find the first column of , we solve , because then . To find the second column of , we solve . And so on. It is really just eliminations that we need to do. But it gets even easier. If you think about it, the elimination is the same for everything on the left side of the augmented matrix. Doing eliminations separately we would redo most of the computations. Best is to do all at once.  Therefore, to find the inverse of , we write an augmented matrix , where is the identity matrix, whose columns are precisely the standard basis vectors. We then perform row reduction until we arrive at the reduced row echelon form. If is invertible, then pivots can be found in every column of , and so the reduced row echelon form of looks like . We then just read off the inverse . If you do not find a pivot in every one of the first columns of the augmented matrix, then is not invertible.  This is best seen by example. Suppose we wish to invert the matrix We write the augmented matrix and we start reducing: So Not too terrible, no? Perhaps harder than inverting a matrix for which we had a simple formula, but not too bad. Really in practice this is done efficiently by a computer.      Compute the reduced row echelon form for the following matrices:                                                Compute the inverse of the given matrices                       Solve (find all solutions), or show no solution exists                            By computing the inverse, solve the following systems for .                  Compute the rank of the given matrices                       For the matrices in , find a linearly independent set of row vectors that span the row space (they do not need to be rows of the matrix).      For the matrices in , find a linearly independent set of columns that span the column space. That is, find the pivot columns of the matrices.      Find a linearly independent subset of the following vectors that has the same span.       Compute the reduced row echelon form for the following matrices:                                              a)  b)  c)  d)  e)  f)  g)  h)       Compute the inverse of the given matrices                     a)  b)  c)       Solve (find all solutions), or show no solution exists                          a) ,  b) no solution c) , ,  d) is free, ,       By computing the inverse, solve the following systems for .                a)  b)       Compute the rank of the given matrices                     a) 3 b) 1 c) 2      For the matrices in , find a linearly independent set of row vectors that span the row space (they do not need to be rows of the matrix).    a) , ,  b)  c) ,       For the matrices in , find a linearly independent set of columns that span the column space. That is, find the pivot columns of the matrices.    a) , ,  b)  c) ,       Find a linearly independent subset of the following vectors that has the same span.           "
},
{
  "id": "elim_section-4-10",
  "level": "2",
  "url": "elim_section.html#elim_section-4-10",
  "type": "Example",
  "number": "A.3.1",
  "title": "",
  "body": "  The following matrices are in row echelon form. The leading entries are marked: None of the matrices above are in reduced row echelon form. For example, in the first matrix none of the entries above the second and third leading entries are zero; they are 9, 3, and 5. The following matrices are in reduced row echelon form. The leading entries are marked:    "
},
{
  "id": "elim_section-6-17",
  "level": "2",
  "url": "elim_section.html#elim_section-6-17",
  "type": "Theorem",
  "number": "A.3.1",
  "title": "",
  "body": "      "
},
{
  "id": "elim_section-8-1",
  "level": "2",
  "url": "elim_section.html#elim_section-8-1",
  "type": "Exercise",
  "number": "A.3.1",
  "title": "",
  "body": "  Compute the reduced row echelon form for the following matrices:                                             "
},
{
  "id": "elim_section-8-2",
  "level": "2",
  "url": "elim_section.html#elim_section-8-2",
  "type": "Exercise",
  "number": "A.3.2",
  "title": "",
  "body": "  Compute the inverse of the given matrices                    "
},
{
  "id": "elim_section-8-3",
  "level": "2",
  "url": "elim_section.html#elim_section-8-3",
  "type": "Exercise",
  "number": "A.3.3",
  "title": "",
  "body": "  Solve (find all solutions), or show no solution exists                         "
},
{
  "id": "elim_section-8-4",
  "level": "2",
  "url": "elim_section.html#elim_section-8-4",
  "type": "Exercise",
  "number": "A.3.4",
  "title": "",
  "body": "  By computing the inverse, solve the following systems for .               "
},
{
  "id": "exercise_rankmatrix",
  "level": "2",
  "url": "elim_section.html#exercise_rankmatrix",
  "type": "Exercise",
  "number": "A.3.5",
  "title": "",
  "body": "  Compute the rank of the given matrices                    "
},
{
  "id": "elim_section-8-6",
  "level": "2",
  "url": "elim_section.html#elim_section-8-6",
  "type": "Exercise",
  "number": "A.3.6",
  "title": "",
  "body": "  For the matrices in , find a linearly independent set of row vectors that span the row space (they do not need to be rows of the matrix).   "
},
{
  "id": "elim_section-8-7",
  "level": "2",
  "url": "elim_section.html#elim_section-8-7",
  "type": "Exercise",
  "number": "A.3.7",
  "title": "",
  "body": "  For the matrices in , find a linearly independent set of columns that span the column space. That is, find the pivot columns of the matrices.   "
},
{
  "id": "elim_section-8-8",
  "level": "2",
  "url": "elim_section.html#elim_section-8-8",
  "type": "Exercise",
  "number": "A.3.8",
  "title": "",
  "body": "  Find a linearly independent subset of the following vectors that has the same span.    "
},
{
  "id": "elim_section-8-9",
  "level": "2",
  "url": "elim_section.html#elim_section-8-9",
  "type": "Exercise",
  "number": "A.3.101",
  "title": "",
  "body": "  Compute the reduced row echelon form for the following matrices:                                              a)  b)  c)  d)  e)  f)  g)  h)    "
},
{
  "id": "elim_section-8-10",
  "level": "2",
  "url": "elim_section.html#elim_section-8-10",
  "type": "Exercise",
  "number": "A.3.102",
  "title": "",
  "body": "  Compute the inverse of the given matrices                     a)  b)  c)    "
},
{
  "id": "elim_section-8-11",
  "level": "2",
  "url": "elim_section.html#elim_section-8-11",
  "type": "Exercise",
  "number": "A.3.103",
  "title": "",
  "body": "  Solve (find all solutions), or show no solution exists                          a) ,  b) no solution c) , ,  d) is free, ,    "
},
{
  "id": "elim_section-8-12",
  "level": "2",
  "url": "elim_section.html#elim_section-8-12",
  "type": "Exercise",
  "number": "A.3.104",
  "title": "",
  "body": "  By computing the inverse, solve the following systems for .                a)  b)    "
},
{
  "id": "exercise_rankmatrixans",
  "level": "2",
  "url": "elim_section.html#exercise_rankmatrixans",
  "type": "Exercise",
  "number": "A.3.105",
  "title": "",
  "body": "  Compute the rank of the given matrices                     a) 3 b) 1 c) 2   "
},
{
  "id": "elim_section-8-14",
  "level": "2",
  "url": "elim_section.html#elim_section-8-14",
  "type": "Exercise",
  "number": "A.3.106",
  "title": "",
  "body": "  For the matrices in , find a linearly independent set of row vectors that span the row space (they do not need to be rows of the matrix).    a) , ,  b)  c) ,    "
},
{
  "id": "elim_section-8-15",
  "level": "2",
  "url": "elim_section.html#elim_section-8-15",
  "type": "Exercise",
  "number": "A.3.107",
  "title": "",
  "body": "  For the matrices in , find a linearly independent set of columns that span the column space. That is, find the pivot columns of the matrices.    a) , ,  b)  c) ,    "
},
{
  "id": "elim_section-8-16",
  "level": "2",
  "url": "elim_section.html#elim_section-8-16",
  "type": "Exercise",
  "number": "A.3.108",
  "title": "",
  "body": "  Find a linearly independent subset of the following vectors that has the same span.         "
},
{
  "id": "subspaces_section",
  "level": "1",
  "url": "subspaces_section.html",
  "type": "Section",
  "number": "A.4",
  "title": "Subspaces, dimension, and the kernel",
  "body": " Subspaces, dimension, and the kernel   Note: 1 lecture    Subspaces, basis, and dimension  We often find ourselves looking at the set of solutions of a linear equation for some matrix , that is, we are interested in the kernel of . The set of all such solutions has a nice structure: It looks and acts a lot like some euclidean space .  We say that a set of vectors in is a subspace subspace if whenever and are members of and is a scalar, then are also members of . That is, we can add and multiply by scalars and we still land in . So every linear combination of vectors of is still in . That is really what a subspace is. It is a subset where we can take linear combinations and still end up being in the subset. Consequently the span of a number of vectors is automatically a subspace.        If we let , then this is a subspace of . Adding any two vectors in gets a vector in , and so does multiplying by scalars.    The set , that is, the set of the zero vector by itself, is also a subspace of . There is only one vector in this subspace, so we only need to verify the definition for that one vector, and everything checks out: and .    The set of all the vectors of the form for any real number , such as , , or is a subspace of . Adding two such vectors, say again gets a vector of the same form, and so does multiplying by a scalar, say .      If is a subspace and we can find linearly independent vectors in  such that every other vector in is a linear combination of , then the set is called a basis basis of . In other words, is the span of and there is no smaller subset of these vectors that spans . We say that has dimension , and we write We have the following theorem.    If is a subspace and is not the trivial subspace , then there exists a unique positive integer (the dimension) and a (not unique) basis , such that every in can be uniquely represented by for some scalars , , ..., . By uniquely represented we mean that these scalars , , ..., are unique.    Just as a vector in is represented by a -tuple of numbers, so is a vector in a -dimensional subspace of represented by a unique -tuple of numbers. At least once we have fixed a basis. A different basis would give a different -tuple of numbers for the same vector.  We should reiterate that while is unique (a subspace cannot have two different dimensions—every basis has the same number of vectors), the set of basis vectors is not at all unique. There are lots of different bases for any given subspace. Finding just the right basis for a subspace is a large part of what one does in linear algebra. In fact, that is what we spend a lot of time on in linear differential equations, although at first glance it may not seem like that is what we are doing.        The standard basis is a basis of , (hence the name). So as expected     Both sets and are bases of . A vector can be written as (and in no other way with the first basis), and it can be written as (and in no other way with the second basis).    The subspace is of dimension . A basis is simply an empty set of vectors.    The subspace from , that is, the set of vectors , is of dimension 1. One possible basis is simply , the single vector : Every vector in can be represented by . Similarly another possible basis would be . Then the vector would be represented as .    The set does span , but it is not a basis as it is not a linearly independent set. Consequently, a vector such as can be written in multiple ways with this set of vectors: , or , etc.      Row and column spaces of a matrix are also examples of subspaces, as they are given as the span of vectors. We can use what we know about rank, row spaces, and column spaces from the previous section to find a basis.    In the last section, we considered the matrix Using row reduction to find the pivot columns, we found What we did was we found a basis of the column space. This basis has two elements, and so the column space of is two-dimensional. Notice that the rank of is two.    We would have followed the same procedure if we wanted to find a basis of the subspace spanned by We would have simply formed the matrix with these vectors as columns and repeated the computation above. The subspace is then the column space of .    Consider the matrix Conveniently, the matrix is in reduced row echelon form. The matrix is of rank 3. The column space is the span of the pivot columns. It is the 3-dimensional space The row space is the 3-dimensional space As these vectors have 5 components, we think of the row space of as a subspace of .    The way the dimensions worked out in the examples is not an accident. Since the number of vectors that we needed to take was always the same as the number of pivots, and the number of pivots is the rank, we get the following result.   Rank   The dimension of the column space and the dimension of the row space of a matrix are both equal to the rank of .      Kernel  The set of solutions of a linear equation , the kernel of , is a subspace: If and are solutions, then So and are solutions. The dimension of the kernel is called the nullity nullity of the matrix.  The same sort of idea governs the solutions of linear differential equations. We try to describe the kernel of a linear differential operator, and as it is a subspace, we look for a basis of this kernel. Much of this book is dedicated to finding such bases.  The kernel of a matrix is the same as the kernel of its reduced row echelon form. For a matrix in reduced row echelon form, the kernel is rather easy to find. If a vector is applied to a matrix , then each entry in corresponds to a column of , the column that the entry multiplies. To find the kernel, pick a non-pivot column make a vector that has a in the entry corresponding to this non-pivot column and zeros at all the other entries corresponding to the other non-pivot columns. Then for all the entries corresponding to pivot columns make it precisely the value in the corresponding row of the non-pivot column to make the vector be a solution to . This procedure is best understood by example.    Consider This matrix is in reduced row echelon form, the pivots are marked. There are two non-pivot columns, so the kernel has dimension 2, that is, it is the span of 2 vectors. Let us find the first vector. We look at the first non-pivot column, the column, and we put a in the entry of our vector. We put a in the entry as the column is also a non-pivot column: Let us fill the rest. When this vector hits the first row of , we get a and times whatever the first question mark is. We want to get zero when hitting the first row, so make the first question mark . To get zero when hitting the second and third rows, it is sufficient to make the remaining question marks . We are really filling in the non-pivot column into the remaining entries. Let us check while marking which numbers went where: Yay! How about the second vector. We start with We set the first question mark to 3, the second to 4, and the third to 5. Let us check, marking things as previously, There are two non-pivot columns, so we only need two vectors. We have found a basis of the kernel. So,     What we did in finding a basis of the kernel is that we expressed all solutions of as a linear combination of some given vectors.  The procedure to find a basis of the kernel of a matrix :    Find the reduced row echelon form of .    Write down a basis of the kernel as above, one vector for each non-pivot column.    The rank of a matrix is the dimension of the column space, and that is the span on the pivot columns, while the kernel is the span of vectors one for each non-pivot column. So the two numbers must add to the number of columns.   Rank–Nullity   If a matrix has columns, rank , and nullity (dimension of the kernel), then     The theorem is immensely useful in applications. It allows one to compute the rank if one knows the nullity and vice versa, without doing any extra work. An example application is a simple version of the so-called Fredholm alternative Fredholm alternative . A similar result is true for differential equations. Consider where is a square matrix. There are then two mutually exclusive possibilities:    A nonzero solution to exists.    The equation has a unique solution for every .    How does the Rank–Nullity theorem come into the picture? Well, if has a nonzero solution to , then the nullity is positive. But then the rank must be less than . It means that the column space of is of dimension less than , so it is a subspace that does not include everything in . So has to contain some vector not in the column space of . In fact, most vectors in are not in the column space of .      For the following sets of vectors, find a basis for the subspace spanned by the vectors, and find the dimension of the subspace.                                      For the following matrices, find a basis for the kernel (nullspace).                            Suppose a matrix has rank 3. What is the nullity?      Suppose that is the set of all the vectors of whose third component is zero. Is a subspace? And if so, find a basis and the dimension.      Consider a square matrix , and suppose that is a nonzero vector such that . What does the Fredholm alternative say about invertibility of .      Consider If the nullity of this matrix is 2, fill in the question marks. Hint: What is the rank?      For the following sets of vectors, find a basis for the subspace spanned by the vectors, and find the dimension of the subspace.                                    a) dimension 2, b) dimension 2, c) dimension 3, d) dimension 2, e) dimension 1, f) dimension 2      For the following matrices, find a basis for the kernel (nullspace).                          a) ,  b)  c)  d) ,       Suppose the column space of a matrix of dimension 3. Find    Rank of .    Nullity of .    Dimension of the row space of .    Dimension of the nullspace of .    Size of the maximum subset of linearly independent rows of .      a) 3 b) 2 c) 3 d) 2 e) 3     "
},
{
  "id": "example_simplesubspaces",
  "level": "2",
  "url": "subspaces_section.html#example_simplesubspaces",
  "type": "Example",
  "number": "A.4.1",
  "title": "",
  "body": "      If we let , then this is a subspace of . Adding any two vectors in gets a vector in , and so does multiplying by scalars.    The set , that is, the set of the zero vector by itself, is also a subspace of . There is only one vector in this subspace, so we only need to verify the definition for that one vector, and everything checks out: and .    The set of all the vectors of the form for any real number , such as , , or is a subspace of . Adding two such vectors, say again gets a vector of the same form, and so does multiplying by a scalar, say .     "
},
{
  "id": "subspaces_section-3-6",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-3-6",
  "type": "Theorem",
  "number": "A.4.1",
  "title": "",
  "body": "  If is a subspace and is not the trivial subspace , then there exists a unique positive integer (the dimension) and a (not unique) basis , such that every in can be uniquely represented by for some scalars , , ..., . By uniquely represented we mean that these scalars , , ..., are unique.   "
},
{
  "id": "subspaces_section-3-9",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-3-9",
  "type": "Example",
  "number": "A.4.2",
  "title": "",
  "body": "      The standard basis is a basis of , (hence the name). So as expected     Both sets and are bases of . A vector can be written as (and in no other way with the first basis), and it can be written as (and in no other way with the second basis).    The subspace is of dimension . A basis is simply an empty set of vectors.    The subspace from , that is, the set of vectors , is of dimension 1. One possible basis is simply , the single vector : Every vector in can be represented by . Similarly another possible basis would be . Then the vector would be represented as .    The set does span , but it is not a basis as it is not a linearly independent set. Consequently, a vector such as can be written in multiple ways with this set of vectors: , or , etc.     "
},
{
  "id": "subspaces_section-3-11",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-3-11",
  "type": "Example",
  "number": "A.4.3",
  "title": "",
  "body": "  In the last section, we considered the matrix Using row reduction to find the pivot columns, we found What we did was we found a basis of the column space. This basis has two elements, and so the column space of is two-dimensional. Notice that the rank of is two.   "
},
{
  "id": "subspaces_section-3-13",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-3-13",
  "type": "Example",
  "number": "A.4.4",
  "title": "",
  "body": "  Consider the matrix Conveniently, the matrix is in reduced row echelon form. The matrix is of rank 3. The column space is the span of the pivot columns. It is the 3-dimensional space The row space is the 3-dimensional space As these vectors have 5 components, we think of the row space of as a subspace of .   "
},
{
  "id": "subspaces_section-3-15",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-3-15",
  "type": "Theorem",
  "number": "A.4.2",
  "title": "Rank.",
  "body": " Rank   The dimension of the column space and the dimension of the row space of a matrix are both equal to the rank of .   "
},
{
  "id": "subspaces_section-4-5",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-4-5",
  "type": "Example",
  "number": "A.4.5",
  "title": "",
  "body": "  Consider This matrix is in reduced row echelon form, the pivots are marked. There are two non-pivot columns, so the kernel has dimension 2, that is, it is the span of 2 vectors. Let us find the first vector. We look at the first non-pivot column, the column, and we put a in the entry of our vector. We put a in the entry as the column is also a non-pivot column: Let us fill the rest. When this vector hits the first row of , we get a and times whatever the first question mark is. We want to get zero when hitting the first row, so make the first question mark . To get zero when hitting the second and third rows, it is sufficient to make the remaining question marks . We are really filling in the non-pivot column into the remaining entries. Let us check while marking which numbers went where: Yay! How about the second vector. We start with We set the first question mark to 3, the second to 4, and the third to 5. Let us check, marking things as previously, There are two non-pivot columns, so we only need two vectors. We have found a basis of the kernel. So,    "
},
{
  "id": "subspaces_section-4-10",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-4-10",
  "type": "Theorem",
  "number": "A.4.3",
  "title": "Rank–Nullity.",
  "body": " Rank–Nullity   If a matrix has columns, rank , and nullity (dimension of the kernel), then    "
},
{
  "id": "subspaces_section-5-1",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-1",
  "type": "Exercise",
  "number": "A.4.1",
  "title": "",
  "body": "  For the following sets of vectors, find a basis for the subspace spanned by the vectors, and find the dimension of the subspace.                                   "
},
{
  "id": "subspaces_section-5-2",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-2",
  "type": "Exercise",
  "number": "A.4.2",
  "title": "",
  "body": "  For the following matrices, find a basis for the kernel (nullspace).                         "
},
{
  "id": "subspaces_section-5-3",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-3",
  "type": "Exercise",
  "number": "A.4.3",
  "title": "",
  "body": "  Suppose a matrix has rank 3. What is the nullity?   "
},
{
  "id": "subspaces_section-5-4",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-4",
  "type": "Exercise",
  "number": "A.4.4",
  "title": "",
  "body": "  Suppose that is the set of all the vectors of whose third component is zero. Is a subspace? And if so, find a basis and the dimension.   "
},
{
  "id": "subspaces_section-5-5",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-5",
  "type": "Exercise",
  "number": "A.4.5",
  "title": "",
  "body": "  Consider a square matrix , and suppose that is a nonzero vector such that . What does the Fredholm alternative say about invertibility of .   "
},
{
  "id": "subspaces_section-5-6",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-6",
  "type": "Exercise",
  "number": "A.4.6",
  "title": "",
  "body": "  Consider If the nullity of this matrix is 2, fill in the question marks. Hint: What is the rank?   "
},
{
  "id": "subspaces_section-5-7",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-7",
  "type": "Exercise",
  "number": "A.4.101",
  "title": "",
  "body": "  For the following sets of vectors, find a basis for the subspace spanned by the vectors, and find the dimension of the subspace.                                    a) dimension 2, b) dimension 2, c) dimension 3, d) dimension 2, e) dimension 1, f) dimension 2   "
},
{
  "id": "subspaces_section-5-8",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-8",
  "type": "Exercise",
  "number": "A.4.102",
  "title": "",
  "body": "  For the following matrices, find a basis for the kernel (nullspace).                          a) ,  b)  c)  d) ,    "
},
{
  "id": "subspaces_section-5-9",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-9",
  "type": "Exercise",
  "number": "A.4.103",
  "title": "",
  "body": "  Suppose the column space of a matrix of dimension 3. Find    Rank of .    Nullity of .    Dimension of the row space of .    Dimension of the nullspace of .    Size of the maximum subset of linearly independent rows of .      a) 3 b) 2 c) 3 d) 2 e) 3   "
},
{
  "id": "innerproduct_section",
  "level": "1",
  "url": "innerproduct_section.html",
  "type": "Section",
  "number": "A.5",
  "title": "Inner product and projections",
  "body": " Inner product and projections   Note: 1–2 lectures    Inner product and orthogonality  To do basic geometry, we need length, and we need angles. We have already seen the euclidean length, so let us figure out angles. Mostly, we are worried about the right angle When Euclid defined angles in his Elements , the only angle he ever really defined was the right angle. .  Given two (column) vectors in , we define the (standard) inner product inner product standard inner product as the dot product: Why do we seemingly give a new notation for the dot product ( instead of just )? Because there are other possible inner products, which are not the dot product, although we will not worry about others here. An inner product can even be defined on spaces of functions as we do in : But we digress.  The inner product satisfies the following rules:     , and if and only if ,     ,     ,     and .    Anything that satisfies the properties above can be called an inner product, although in this section we are concerned with the standard inner product in .  The standard inner product gives the euclidean length: How does it give angles? You may recall a formula for the standard inner product (the dot product) from multivariable calculus in two or three dimensions in terms of the angle between the vectors: That is, is the angle that and make when they are based at the same point.  In (any dimension), we are simply going to say that from the formula is what the angle is. This makes sense as any two vectors based at the origin lie in a 2-dimensional plane (subspace), and the formula works in 2 dimensions. In fact, one could even talk about angles between functions this way, and we do in , where we talk about orthogonal functions (functions at right angle to each other).  To compute the angle we compute Our angles are always in radians. We are computing the cosine of the angle, which is really the best we can do. Given two vectors at an angle , we can give the angle as , , etc., see . Fortunately, . If we solve for using the inverse cosine , we can just decree that .   Angle between vectors.      Let us compute the angle between the vectors and in the plane. Compute Therefore .    As we said, the most important angle is the right angle. A right angle is radians, and , so the formula is particularly easy in this case. We say vectors and are orthogonal orthogonal if they are at right angles, that is, if The vectors and are orthogonal. So are and . However, and are not orthogonal as their inner product is and not 0.    Orthogonal projection  A typical application of linear algebra is to take a difficult problem, write everything in the right basis, and in this new basis the problem becomes simple. A particularly useful basis is an orthogonal basis, a basis where all the basis vectors are orthogonal. When we draw a coordinate system in two or three dimensions, we almost always draw our axes as orthogonal to each other.  Generalizing this concept to functions, it is particularly useful in to express a function using a particular orthogonal basis, the Fourier series.  To express one vector in terms of an orthogonal basis, we need to first project one vector onto another. Given a nonzero vector , we define the orthogonal projection orthogonal projection projection orthogonal of onto as For the geometric idea, see . That is, we find the shadow of on the line spanned by if the direction of the sun's rays were exactly perpendicular to the line. Another way of thinking about it is that the tip of the arrow of is the closest point on the line spanned by to the tip of the arrow of . In terms of euclidean distance, minimizes the distance among all vectors that are multiples of . Because of this, this projection comes up often in applied mathematics in all sorts of contexts we cannot solve a problem exactly: We cannot always solve Find as a multiple of , but is the best solution.    Orthogonal projection.    The formula follows from basic trigonometry. The length of should be times the length of , that is, . We take the unit vector in the direction of , that is, and we multiply it by the length of the projection. In other words,     Suppose we wish to project the vector onto the vector . Compute   Let us double check that the projection is orthogonal. That is ought to be orthogonal to , see the right angle in . That is, ought to be orthogonal to . We compute the inner product and we had better get zero:       Orthogonal basis  As we said, a basis is an orthogonal basis orthogonal basis if all vectors in the basis are orthogonal to each other, that is, if for all choices of and where (a nonzero vector cannot be orthogonal to itself). A basis is furthermore called an orthonormal basis orthonormal basis if all the vectors in a basis are also unit vectors, that is, if all the vectors have magnitude 1. For example, the standard basis is an orthonormal basis of : Any pair is orthogonal, and each vector is of unit magnitude.  The reason why we are interested in orthogonal (or orthonormal) bases is that they make it really simple to represent a vector (or a projection onto a subspace) in the basis. The formula for the orthogonal projection onto a vector gives us the coefficients. In , we use the same idea by finding the correct orthogonal basis for the set of solutions of a differential equation. We are then able to find any particular solution by simply applying the orthogonal projection formula, which is just a couple of a inner products.  Let us come back to linear algebra. Consider a subspace and an orthogonal basis for . We wish to express some vector in terms of this basis. If is not in the span of this basis (when it is not in ), then of course it is not possible, but the following formula gives us at least the orthogonal projection onto the subspace , or in other words, the best approximation to in the subspace—the vector in closest to .  First suppose that is in the span. Then it is the sum of the orthogonal projections: In other words, if we want to write , then   Another way to derive this formula is to work in reverse. Suppose that . Take an inner product with , and use the properties of the inner product: As the basis is orthogonal, then whenever . That means that only one of the terms, the one, on the right-hand side is nonzero and we get Solving for we find as before.    The vectors and form an orthogonal basis of . Suppose we wish to represent in terms of this basis, that is, we wish to find and such that We compute: So     If the basis is orthonormal rather than orthogonal, then all the denominators are one. It is easy to make a basis orthonormal—divide all the vectors by their size. If you want to decompose many vectors, it may be better to find an orthonormal basis. In the example above, the orthonormal basis we would thus create is Then the computation would have been   Maybe the example is not so awe inspiring, but given vectors in rather than , then surely one would much rather do 20 inner products (or 40 if we did not have an orthonormal basis) rather than solving a system of twenty equations in twenty unknowns using row reduction of a matrix.  As we said above, the formula still works even if is not in the subspace, although then it does not get us the vector but its projection. More concretely, suppose that is a subspace that is the span of and is any vector. Let be the vector in that is the closest to . Then   Of course, if is in , then , as the closest vector in to is itself. But true utility is obtained when is not in . In much of applied mathematics, we cannot find an exact solution to a problem, but we try to find the best solution out of a small subset (subspace). The partial sums of Fourier series from are one example. Another example is least square approximation to fit a curve to data. Yet another example is given by the most commonly used numerical methods to solve partial differential equations, the finite element methods.    The vectors and are orthogonal, and so they are an orthogonal basis of a subspace : Let us find the vector in that is closest to . That is, let us find .       The Gram–Schmidt process  Before leaving orthogonal bases, let us note a procedure for manufacturing them out of any old basis. It may not be difficult to come up with an orthogonal basis for a 2-dimensional subspace, but for a 20-dimensional subspace, it seems a daunting task. Fortunately, the orthogonal projection can be used to project away the bits of the vectors that are making them not orthogonal. It is called the Gram–Schmidt process Gram–Schmidt process .  We start with a basis of vectors . We construct an orthogonal basis as follows. What we do is at the step, we take and we subtract the projection of to the subspace spanned by .    Consider the vectors , and and call the span of the two vectors. Let us find an orthogonal basis of via the Gram–Schmidt process: So and span and are orthogonal. Let us check: .  Suppose we wish to find an orthonormal basis, not just an orthogonal one. Well, we simply make the vectors into unit vectors by dividing them by their magnitude. The two vectors making up the orthonormal basis of are:         Find the that makes the following vectors orthogonal: , .      Find the angle between , .      Given that and compute                       Suppose . Find                       Consider the vectors , , .    Check that the vectors are linearly independent and so form a basis of .    Check that the vectors are mutually orthogonal, and are therefore an orthogonal basis.    Represent as a linear combination of this basis.    Make the basis orthonormal.        Let be the subspace spanned by , . Find an orthogonal basis of by the Gram–Schmidt process.      Starting with , , , follow the Gram–Schmidt process to find an orthogonal basis of .      Find an orthogonal basis of such that is one of the vectors. Hint: First find two extra vectors to make a linearly independent set.      Using cosines and sines of , find a unit vector in that makes angle with . What is ?      Find the that makes the following vectors orthogonal: , .           Find the angle between , .           Given that and and and                     a) -15 b) -1 c) 28      Suppose . Find                     a)  b)  c)       The vectors , , form an orthogonal basis. Represent the following vectors in terms of this basis:                     a)  b)  c)       Let be the subspace spanned by , . Find an orthogonal basis of by the Gram–Schmidt process.     ,       Starting with , , , follow the Gram–Schmidt process to find an orthogonal basis of .     , ,      "
},
{
  "id": "vec-angle_fig",
  "level": "2",
  "url": "innerproduct_section.html#vec-angle_fig",
  "type": "Figure",
  "number": "A.5",
  "title": "",
  "body": " Angle between vectors.   "
},
{
  "id": "innerproduct_section-3-13",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-3-13",
  "type": "Example",
  "number": "A.5.1",
  "title": "",
  "body": "  Let us compute the angle between the vectors and in the plane. Compute Therefore .   "
},
{
  "id": "vec-orthoproj_fig",
  "level": "2",
  "url": "innerproduct_section.html#vec-orthoproj_fig",
  "type": "Figure",
  "number": "A.6",
  "title": "",
  "body": " Orthogonal projection.   "
},
{
  "id": "innerproduct_section-4-9",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-4-9",
  "type": "Example",
  "number": "A.5.2",
  "title": "",
  "body": "  Suppose we wish to project the vector onto the vector . Compute   Let us double check that the projection is orthogonal. That is ought to be orthogonal to , see the right angle in . That is, ought to be orthogonal to . We compute the inner product and we had better get zero:    "
},
{
  "id": "innerproduct_section-5-7",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-5-7",
  "type": "Example",
  "number": "A.5.3",
  "title": "",
  "body": "  The vectors and form an orthogonal basis of . Suppose we wish to represent in terms of this basis, that is, we wish to find and such that We compute: So    "
},
{
  "id": "innerproduct_section-5-12",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-5-12",
  "type": "Example",
  "number": "A.5.4",
  "title": "",
  "body": "  The vectors and are orthogonal, and so they are an orthogonal basis of a subspace : Let us find the vector in that is closest to . That is, let us find .    "
},
{
  "id": "innerproduct_section-6-4",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-6-4",
  "type": "Example",
  "number": "A.5.5",
  "title": "",
  "body": "  Consider the vectors , and and call the span of the two vectors. Let us find an orthogonal basis of via the Gram–Schmidt process: So and span and are orthogonal. Let us check: .  Suppose we wish to find an orthonormal basis, not just an orthogonal one. Well, we simply make the vectors into unit vectors by dividing them by their magnitude. The two vectors making up the orthonormal basis of are:    "
},
{
  "id": "innerproduct_section-7-1",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-1",
  "type": "Exercise",
  "number": "A.5.1",
  "title": "",
  "body": "  Find the that makes the following vectors orthogonal: , .   "
},
{
  "id": "innerproduct_section-7-2",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-2",
  "type": "Exercise",
  "number": "A.5.2",
  "title": "",
  "body": "  Find the angle between , .   "
},
{
  "id": "innerproduct_section-7-3",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-3",
  "type": "Exercise",
  "number": "A.5.3",
  "title": "",
  "body": "  Given that and compute                    "
},
{
  "id": "innerproduct_section-7-4",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-4",
  "type": "Exercise",
  "number": "A.5.4",
  "title": "",
  "body": "  Suppose . Find                    "
},
{
  "id": "innerproduct_section-7-5",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-5",
  "type": "Exercise",
  "number": "A.5.5",
  "title": "",
  "body": "  Consider the vectors , , .    Check that the vectors are linearly independent and so form a basis of .    Check that the vectors are mutually orthogonal, and are therefore an orthogonal basis.    Represent as a linear combination of this basis.    Make the basis orthonormal.     "
},
{
  "id": "innerproduct_section-7-6",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-6",
  "type": "Exercise",
  "number": "A.5.6",
  "title": "",
  "body": "  Let be the subspace spanned by , . Find an orthogonal basis of by the Gram–Schmidt process.   "
},
{
  "id": "innerproduct_section-7-7",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-7",
  "type": "Exercise",
  "number": "A.5.7",
  "title": "",
  "body": "  Starting with , , , follow the Gram–Schmidt process to find an orthogonal basis of .   "
},
{
  "id": "innerproduct_section-7-8",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-8",
  "type": "Exercise",
  "number": "A.5.8",
  "title": "",
  "body": "  Find an orthogonal basis of such that is one of the vectors. Hint: First find two extra vectors to make a linearly independent set.   "
},
{
  "id": "innerproduct_section-7-9",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-9",
  "type": "Exercise",
  "number": "A.5.9",
  "title": "",
  "body": "  Using cosines and sines of , find a unit vector in that makes angle with . What is ?   "
},
{
  "id": "innerproduct_section-7-10",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-10",
  "type": "Exercise",
  "number": "A.5.101",
  "title": "",
  "body": "  Find the that makes the following vectors orthogonal: , .        "
},
{
  "id": "innerproduct_section-7-11",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-11",
  "type": "Exercise",
  "number": "A.5.102",
  "title": "",
  "body": "  Find the angle between , .        "
},
{
  "id": "innerproduct_section-7-12",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-12",
  "type": "Exercise",
  "number": "A.5.103",
  "title": "",
  "body": "  Given that and and and                     a) -15 b) -1 c) 28   "
},
{
  "id": "innerproduct_section-7-13",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-13",
  "type": "Exercise",
  "number": "A.5.104",
  "title": "",
  "body": "  Suppose . Find                     a)  b)  c)    "
},
{
  "id": "innerproduct_section-7-14",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-14",
  "type": "Exercise",
  "number": "A.5.105",
  "title": "",
  "body": "  The vectors , , form an orthogonal basis. Represent the following vectors in terms of this basis:                     a)  b)  c)    "
},
{
  "id": "innerproduct_section-7-15",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-15",
  "type": "Exercise",
  "number": "A.5.106",
  "title": "",
  "body": "  Let be the subspace spanned by , . Find an orthogonal basis of by the Gram–Schmidt process.     ,    "
},
{
  "id": "innerproduct_section-7-16",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-16",
  "type": "Exercise",
  "number": "A.5.107",
  "title": "",
  "body": "  Starting with , , , follow the Gram–Schmidt process to find an orthogonal basis of .     , ,    "
},
{
  "id": "det_section",
  "level": "1",
  "url": "det_section.html",
  "type": "Section",
  "number": "A.6",
  "title": "Determinant",
  "body": " Determinant  Note: 1 lecture  For square matrices we define a useful quantity called the determinant determinant . Define the determinant of a matrix as the value of its only entry For a matrix, define   Before defining the determinant for larger matrices, we note the meaning of the determinant. An matrix gives a mapping of the -dimensional euclidean space to itself. So a matrix is a mapping of the plane to itself. The determinant of is the factor by which the area of objects changes. If we take the unit square (square of side 1) in the plane, then takes the square to a parallelogram of area . The sign of denotes a change of orientation (negative if the axes get flipped). For example, let Then . Let us see where sends the unit square—the square with vertices , , , and . The point gets sent to . The image of the square is another square with vertices , , , and . The image square has a side of length , and it is therefore of area 2. See .   Image of the unit quare via the mapping .    In general, the image of a square is going to be a parallelogram parallelogram . In high school geometry, you may have seen a formula for computing the area of a parallelogram parallelogram with vertices , , and . The area is The vertical lines above mean absolute value. The matrix carries the unit square to the given parallelogram.  There are a number of ways to define the determinant for an matrix. Let us use the so-called cofactor expansion cofactor expansion . We define as the matrix with the row and the column deleted. For example, if We now define the determinant recursively or in other words For a matrix, we get . For example,   It turns out that we did not have to necessarily use the first row. That is for any , It is sometimes useful to use a row other than the first. In the following example it is more convenient to expand along the second row. Notice that for the second row we are starting with a negative sign. Let us check if it is really the same as expanding along the first row,   In computing the determinant, we alternately add and subtract the determinants of the submatrices multiplied by for a fixed and all . The numbers are called cofactors cofactor of the matrix. And that is why this method of computing the determinant is called the cofactor expansion .  Similarly we do not need to expand along a row, we can expand along a column. For any , A related fact is that   A matrix is upper triangular upper triangular if all elements below the main diagonal are 0. For example, is upper triangular. Similarly a lower triangular lower triangular matrix is one where everything above the diagonal is zero. For example,   The determinant for triangular matrices is very simple to compute. Consider the lower triangular matrix. If we expand along the first row, we find that the determinant is 1 times the determinant of the lower triangular matrix . So the determinant is just the product of the diagonal entries: Similarly for upper triangular matrices In general, if is triangular, then   If is diagonal, then it is also triangular (upper and lower), so the same formula applies. For example,   In particular, the identity matrix is diagonal, and the diagonal entries are all 1. Thus,   The determinant is telling you how geometric objects scale. If doubles the sizes of geometric objects and triples them, then (which applies to an object and then it applies ) should make size go up by a factor of . This is true in general:         This property is one of the most useful, and it is employed often to actually compute determinants. A particularly interesting consequence is to note what it means for the existence of inverses. Take and to be inverses, that is, . Then Neither nor can be zero. This fact is an extremely useful property of the determinant, and one which is used often in this book:    An matrix is invertible if and only if .    In fact, says that So we know what the determinant of is without computing .  Let us return to the formula for the inverse of a matrix: Notice the determinant of the matrix in the denominator of the fraction. The formula only works if the determinant is nonzero, otherwise we are dividing by zero.  A common notation for the determinant is a pair of vertical lines: Personally, I find this notation confusing as vertical lines usually mean a positive quantity, while determinants can be negative. Also think about how to write the absolute value of a determinant. This notation is not used in this book.     Compute the determinant of the following matrices:                                                For which are the following matrices singular (not invertible).                            Compute without computing the inverse.      Suppose Let . Compute in a simple way, without computing what is . Hint: First read off and .      Consider the linear mapping from to given by the matrix for some number . You wish to make such that it doubles the area of every geometric figure. What are the possibilities for (there are two answers).      Suppose and are matrices, and is invertible. Suppose that . Compute and . Justify your answer using the theorems in this section.      Let be an matrix such that . Compute given a number . Hint: First try computing , then note that .      Compute the determinant of the following matrices:                                              a)  b)  c)  d)  e)  f)  g)  h)       For which are the following matrices singular (not invertible):                          a)  b)  c)  d)       Compute without computing the inverse.            (challenging) Find all the that make the matrix inverse have only integer entries (no fractions). Note that there are two answers.     and      "
},
{
  "id": "linalg-imagesquare_fig",
  "level": "2",
  "url": "det_section.html#linalg-imagesquare_fig",
  "type": "Figure",
  "number": "A.7",
  "title": "",
  "body": " Image of the unit quare via the mapping .   "
},
{
  "id": "det_section-18",
  "level": "2",
  "url": "det_section.html#det_section-18",
  "type": "Theorem",
  "number": "A.6.1",
  "title": "",
  "body": "      "
},
{
  "id": "det_section-20",
  "level": "2",
  "url": "det_section.html#det_section-20",
  "type": "Theorem",
  "number": "A.6.2",
  "title": "",
  "body": "  An matrix is invertible if and only if .   "
},
{
  "id": "det_section-24-1",
  "level": "2",
  "url": "det_section.html#det_section-24-1",
  "type": "Exercise",
  "number": "A.6.1",
  "title": "",
  "body": "  Compute the determinant of the following matrices:                                             "
},
{
  "id": "det_section-24-2",
  "level": "2",
  "url": "det_section.html#det_section-24-2",
  "type": "Exercise",
  "number": "A.6.2",
  "title": "",
  "body": "  For which are the following matrices singular (not invertible).                         "
},
{
  "id": "det_section-24-3",
  "level": "2",
  "url": "det_section.html#det_section-24-3",
  "type": "Exercise",
  "number": "A.6.3",
  "title": "",
  "body": "  Compute without computing the inverse.   "
},
{
  "id": "det_section-24-4",
  "level": "2",
  "url": "det_section.html#det_section-24-4",
  "type": "Exercise",
  "number": "A.6.4",
  "title": "",
  "body": "  Suppose Let . Compute in a simple way, without computing what is . Hint: First read off and .   "
},
{
  "id": "det_section-24-5",
  "level": "2",
  "url": "det_section.html#det_section-24-5",
  "type": "Exercise",
  "number": "A.6.5",
  "title": "",
  "body": "  Consider the linear mapping from to given by the matrix for some number . You wish to make such that it doubles the area of every geometric figure. What are the possibilities for (there are two answers).   "
},
{
  "id": "det_section-24-6",
  "level": "2",
  "url": "det_section.html#det_section-24-6",
  "type": "Exercise",
  "number": "A.6.6",
  "title": "",
  "body": "  Suppose and are matrices, and is invertible. Suppose that . Compute and . Justify your answer using the theorems in this section.   "
},
{
  "id": "det_section-24-7",
  "level": "2",
  "url": "det_section.html#det_section-24-7",
  "type": "Exercise",
  "number": "A.6.7",
  "title": "",
  "body": "  Let be an matrix such that . Compute given a number . Hint: First try computing , then note that .   "
},
{
  "id": "det_section-24-8",
  "level": "2",
  "url": "det_section.html#det_section-24-8",
  "type": "Exercise",
  "number": "A.6.101",
  "title": "",
  "body": "  Compute the determinant of the following matrices:                                              a)  b)  c)  d)  e)  f)  g)  h)    "
},
{
  "id": "det_section-24-9",
  "level": "2",
  "url": "det_section.html#det_section-24-9",
  "type": "Exercise",
  "number": "A.6.102",
  "title": "",
  "body": "  For which are the following matrices singular (not invertible):                          a)  b)  c)  d)    "
},
{
  "id": "det_section-24-10",
  "level": "2",
  "url": "det_section.html#det_section-24-10",
  "type": "Exercise",
  "number": "A.6.103",
  "title": "",
  "body": "  Compute without computing the inverse.        "
},
{
  "id": "det_section-24-11",
  "level": "2",
  "url": "det_section.html#det_section-24-11",
  "type": "Exercise",
  "number": "A.6.104",
  "title": "",
  "body": "   (challenging) Find all the that make the matrix inverse have only integer entries (no fractions). Note that there are two answers.     and    "
},
{
  "id": "laplacelist_appendix",
  "level": "1",
  "url": "laplacelist_appendix.html",
  "type": "Appendix",
  "number": "B",
  "title": "Table of Laplace Transforms",
  "body": " Table of Laplace Transforms  The function is the Heaviside function, is the Dirac delta function, and                                                periodic with period    "
},
{
  "id": "furtherreading_chapter",
  "level": "1",
  "url": "furtherreading_chapter.html",
  "type": "References",
  "number": "",
  "title": "Further Reading",
  "body": " Further Reading  Paul W. Berg and James L. McGregor, Elementary Partial Differential Equations , Holden-Day, San Francisco, CA, 1966.  William E. Boyce, Richard C. DiPrima, and Douglas B. Meade, Elementary Differential Equations and Boundary Value Problems , 12th edition, John Wiley & Sons Inc., New York, NY, 2021.  C.H. Edwards and D.E. Penney, Differential Equations and Boundary Value Problems: Computing and Modeling , 6th edition, Pearson, 2022.  Stanley J. Farlow, An Introduction to Differential Equations and Their Applications , McGraw-Hill, Inc., Princeton, NJ, 1994. (Published also by Dover Publications, 2006.)  E.L. Ince, Ordinary Differential Equations , Dover Publications, Inc., New York, NY, 1956.  Thomas W. Judson, The Ordinary Differential Equations Project , .  William F. Trench, Elementary Differential Equations with Boundary Value Problems , Books and Monographs, Book 9, 2013, .  "
},
{
  "id": "diffyqs-13-4",
  "level": "1",
  "url": "diffyqs-13-4.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
