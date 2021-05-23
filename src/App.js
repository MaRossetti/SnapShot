import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import {Test} from './components/Test'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {searchTerm: ""};
    }

    // Prevent page reload, clear input, set URL and push history on submit
    handleSubmit = (e, history, searchInput) => {
        e.preventDefault();
        e.currentTarget.reset();
        let url = `/search/${searchInput}`;
        history.push(url);
    };

    render() {
        return (
            <PhotoContextProvider>
                <BrowserRouter>
                    <div className="container">
                        <Route
                            render={props => (
                                <Header
                                    handleSubmit={this.handleSubmit}
                                    history={props.history}
                                />
                            )}
                        />
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => <Redirect to="/mountain" />}
                            />

                            <Route
                                path="/mountain"
                                render={() => <Item searchTerm="mountain" updateSearchSelection={this.updateSearchSelection} />}
                            />
                            <Route path="/beach" render={() => <Item searchTerm="beach"  updateSearchSelection={this.updateSearchSelection} />} />
                            <Route path="/bird" render={() => <Item searchTerm="bird"  updateSearchSelection={this.updateSearchSelection} />} />
                            <Route path="/food" render={() => <Item searchTerm="food"  updateSearchSelection={this.updateSearchSelection} />} />
                            <Route
                                path="/search/:searchInput"
                                render={props => (
                                    <Search searchTerm={props.match.params.searchInput} />
                                )}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </PhotoContextProvider>
        );
    }
}

export default App;
