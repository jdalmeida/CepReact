import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import App from "./App";

export function AppRoutes() {
    return (
        <Router>
            <Route path="/cep" element={<App/>}/>
        </Router>
    )
}
