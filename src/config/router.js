import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TicketForm from'../Screens/TicketForm'
import TicketData from'../Screens/TicketData'
import Login from'../Screens/PublicRoute/Login'
import Err404 from'../Screens/PublicRoute/Err404'
import Signup from '../Screens/PublicRoute/Signup'
function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                {/* ***********Forms*************** */}
                <Route path='TicketForm' element={<TicketForm/>} />
                {/* ************************************** */}

                {/* ************Data***************** */}
                
                <Route path='TicketData' element={<TicketData />} />
                {/* ************************************** */} 

                {/* ***********Public***************** */}
                <Route path="*" element={<Err404 />} />
                <Route path="Login" element={<Login />} />
                <Route path="/" element={<Login />} />
                <Route path="Signup" element={<Signup />} />
                {/* ************************************** */}
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter