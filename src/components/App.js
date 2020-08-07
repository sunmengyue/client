import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" exact component={StreamCreate}/>
                    <Route path="/streams/show" exact component={StreamShow}/>
                    <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                    <Route path="/streams/delete" exact component={StreamDelete}/>
                </div>  
            </Router>
        </div>
        
        )
}

export default App;

    