/* in the terminal npm init

   npm instqall -D parcel : to ignite the code

   npx  parcel index.html 

   npm install react

   npm i react-dom
*/
import React from 'react';
import ReactDOM from 'react-dom';

const parent = 
    React.createElement('div', { id: 'parent' }, //parent 
    [
        React.createElement('div', { id: 'child1' }), //child1, since the child has 2 tag, need to keep it in an array
    [
        React.createElement('h1', {}, 'This is from child1 h1'),
        React.createElement('h2', {}, 'This is child1 from h2')
    ],
    React.createElement('div', { id: 'child2' }), //child2, since the child has 2 tag, need to keep it in an array
    [
        React.createElement('h1', {}, 'This is from  child2 h1'),
        React.createElement('h2', {}, 'This is from h2')
    ]
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);