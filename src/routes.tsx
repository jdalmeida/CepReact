import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import App from "./App";
import ClimaApp from "./ClimaApp";
import Cep from "./Cep"

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<App/>}/>
                <Route path="/clima" element={<ClimaApp/>} />
                <Route path="/cep" element={<Cep/>}/>
            </Routes>
        </Router>
    )
}
