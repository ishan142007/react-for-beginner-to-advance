1)react is library made by facebook for frontend development.We can create the react project by two to three libraries first by create-react-app or by vite (you can see the vite command on vite website )and by parcel as well.

2)we have to clean the project first, in that we can remove all the stuff that is not useful or we cant understand it .

3)we have to read the json file to know all the dependencies and stuff and also the command to run the server.

4)In react only functions return html with only one tag returned at a time so we have to wrap all the html tags in a single tag and also this tag is know as fragment tag.

5)we can make our own file and use return it in the server but for that we need to import it first and export the function by command (export default function name ) then we can show it .

6)There is a naming convention in this first, in vite, you have to create the new file with .jsx extention and the function name should be capitalized before using .

7)the function used are also know as components 

8)best practices:-
function name should be capital
file name should be capitalized too.


9)chai aur react | ishan patel |to we learned about the set up of react and how to clean or project to work efficently.we have to remove all the files which are not in our use or we dont know a hang of them and with the they are not playing a vital role in the functioning of the code.


10){expression}->this is evaluated expression.
so when we use this in react we have to write the final ouput in it beacuse the variable in react are added after the formation of virtual dom tree and after that they are used as it is so it is syntax error for js to use any operation directly in object

11)babel converts the react.createElement( )into the react syntax or we can say babel is the parser which parse the code of html,css and js into react code.It kind of inject the html code .

12)in classical js we have if we want the same value in mutiple palces then we have to make to many references at a time which is tiresome and hectic so react solve this problem really easily but for this it control the ui on its own and to make these changes we have to use hooks .

13)hooks->usestate is a hook 
hook is a type of function which was defined by the library maker for doing certain task like the usestate hook.
if you need any hook study the documentation for once to find it.Or you can reach out the github for react library and read the hooks .

14)createroot is the method which cretes a virtual dom and it just repaint the things which we change rather then the whole dom of the browser which changes the whole dom after every small change (page reload).

14)what is reconciliation->the algorithm react uses to diffrentiate one tree with another to determine which parts need to be changed.
Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM".

15)A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment(like the object we created for anchor tag being flushed by the .render to the rendering environment  ) — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffrentiated with the previous tree to compute which operations are needed to update the rendered app.
16)Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be largely the same.

The key points are:-

a)Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.

b)Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

scheduling is the process when work should be performed.

17)what is Fibre?
Fibers are a much lower-level abstraction than application developers typically think about.
the primary goal of fibre is to take advantage of scheduling.
a)pause work and come back to it later.
b)assign priority to different types of work.
c)reuse previously completed work.
d)abort work if it's no longer needed.
in order to do any of this, we first need a way to break work down into units.In one sense,that's what fibre is .a fibre represents a unit of work.

18)added tailwind css to the code with reading its documentation (click on get strated and then followed the steps for vite )

19)video 8 is important
20)onclick always demand a function ,not the returned value of function so when we pass a function without parameters thwn also it will take the function with name but if you have to pass the parameters too to the function then you have to pass that function in a another function [onclick{()=>{setcolor("red")}}].
so we are passing a callback.

