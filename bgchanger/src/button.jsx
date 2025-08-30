import './index.css'
function Button({label,changecolor}){
return(
    <>
      <div className='flex flex-wrap px-3 py-2 justify-center gap-3 shadow-lg bg-white rounded-3xl bg-white '>
          <button className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor:label}} onClick={changecolor}>
          {label}</button></div>
    </>
)

}
export default Button