import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom/cjs/react-router-dom.min";
import CallToAction from "../components/home/callToAction";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import AuthRouter from "./routes";

export default function AppRouter() {
    return (
        <Router>
            <Header />
            <Switch>
                {AuthRouter.map((item, index) => {
                    return (
                        <Route
                            key={index}
                            exact
                            path={item.path}
                            component={item.component}
                        />
                    );
                })}
            </Switch>
            <Footer />
        </Router>
    );
}