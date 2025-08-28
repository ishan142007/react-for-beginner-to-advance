import Rup from "./new.jsx"
import './style.css'

function App() {
  const user={
    name:'ishan patel',
    age:20,
    course:'react basics',
    imgurl:'https://images.unsplash.com/photo-1755977546165-1d4e955ff63e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
    imgsize:90
  }
  const products=[
  { title: 'Cabbage', id: 1},
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 }
  ];
  const listItems=products.map(product=>
    <li key={product.id}>
      {product.title}
      </li>
);
  return (
    //this fragment tag in react it is actually a div tag because in react we cant return more than one tag so we have to warp all the tags in a single tag so for this we use fragment tag.
    <>
    <div>
      <h1>name:{user.name}</h1>
      <h2>age:{user.age}</h2>
      <h2>course:{user.course}</h2>
      <img 
      className="attribute"
      src={user.imgurl}
       alt={user.name} 
      style={{
        width:user.imgsize,
        height:user.imgsize
      }}/>

    </div>

    <h1>hello people!</h1>
    
    <Rup />
    <ul>{listItems}</ul>

    
    </>
  )
}

export default App
