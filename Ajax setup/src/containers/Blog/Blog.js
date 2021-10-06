import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts'; 
import NewPost from './NewPost/NewPost'
import { Route, NavLink, Switch } from 'react-router-dom';



class Blog extends Component {
    
    render () {
        
        
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to='/' 
                                exact
                                activeClassName='my-active' //override active class
                                activeStyle={{
                                    textDecoration: 'underline'
                                }}//another way to add styles
                                >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post', 
                                hash: '#submit', 
                                search: '?quick-submit=true'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path='/' exact render={() => <h1>Home</h1>} />*/}
                <Switch>
                    <Route path='/new-post' exact component={NewPost} /> 
                    <Route path='/' component={Posts} />
                       
                </Switch>
            </div>
        );
    }
}

export default Blog;