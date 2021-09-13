
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {AlertState} from "./Context/alert/alertState";
import {Header} from "./Componetns/Header";
import {Alert} from "./Componetns/Alert";
import {ToDo} from "./Componetns/ToDo";
import {About} from "./Componetns/About";


export function App() {
    return (
        <div className="container">
            <AlertState>
                <BrowserRouter>
                    <Header/>
                    <Alert/>
                    <Switch>
                        <Route path={'/'} exact component={ToDo}/>
                        <Route path={'/about'} exact component={About}/>
                    </Switch>
                </BrowserRouter>
            </AlertState>
        </div>

    );
}
