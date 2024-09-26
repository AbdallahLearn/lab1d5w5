
import './App.css'
import Navbar from './component/Navbar'
import Card from './component/Card'
import Crads from './component/Crads'
import Footer from './component/Footer'
function App() {

  return (
    <>
    <Navbar/>
    <Card/>
    <h1 className='text-center w-[50%]  mt-5'>Top categories of the mounth</h1>
    <div className="container-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[80%] m-auto max-sm:mt-[120%]  max-md:mt-[140%]">
    <Crads img='https://i.pinimg.com/474x/af/a2/60/afa260cde838d3be04c6411270748a5c.jpg' title='Electorncs' desc='Explore our extensive collection of cutting-edge electronics designed to enhance your everyday life. From the latest' />
    <Crads img='https://i.pinimg.com/474x/19/19/15/191915c8aab1dcf71bb41312c1ba9c53.jpg' title='Electorncs' desc='Explore our extensive collection of cutting-edge electronics designed to enhance your everyday life. From the latest' />
    <Crads img='https://i.pinimg.com/474x/69/96/8a/69968a4397724231650c21084e06096f.jpg' title='Electorncs' desc='Explore our extensive collection of cutting-edge electronics designed to enhance your everyday life. From the latest' />
    <Crads img='https://i.pinimg.com/564x/cd/01/ff/cd01ffde41782b1517d07c2980477d40.jpg' title='Electorncs' desc='Explore our extensive collection of cutting-edge electronics designed to enhance your everyday life. From the latest' />
    <Crads img='https://i.pinimg.com/474x/dc/47/ef/dc47efbb3ad0a1959b7428666b9fad34.jpg' title='Electorncs' desc='Explore our extensive collection of cutting-edge electronics designed to enhance your everyday life. From the latest' />
    <Crads img='https://i.pinimg.com/474x/8f/f6/ae/8ff6aeb7cae3a32b37a9cae44ad55612.jpg' title='Electorncs' desc='Explore our extensive collection of cutting-edge electronics designed to enhance your everyday life. From the latest' />

    </div>

    <Footer title='perfect fit and long-lasting wear. Embrace your unique style with our diverse range of o' desc='perfect fit and long-lasting wear. Embrace your unique style with our diverse range of o'/>
   
    </>
  )
}

export default App
