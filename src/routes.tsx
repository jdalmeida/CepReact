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
                <Route path="/CepReact/home" element={<App/>}/>
                <Route path="/CepReact/clima" element={<ClimaApp/>} />
                <Route path="/CepReact/cep" element={<Cep/>}/>
            </Routes>
        </Router>
    )
}
