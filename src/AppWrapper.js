import { Fragment } from 'react';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './components/notes/Notes';
import Form from './components/form/Form';

const App = () => {

    return (

        <Router>
            <Fragment>
                <div className="body-wrapper">
                    <div className="container">
                        <Link className="route-btn route-btn-1" to='/addnote'><i className="fas fa-plus"></i></Link>
                        <Link className="route-btn route-btn-2" to='/'><i className="fas fa-eye"></i></Link>
                        <Navbar />
                        <Switch>
                            <Route exact path='/addnote' component={Form} />
                            <Route exact path='/' component={Notes} />
                        </Switch>
                    </div>
                </div>
                <Footer />
            </Fragment>
        </Router >);
}

export default App;
