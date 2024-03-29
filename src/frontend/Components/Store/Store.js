import React from 'react';
import io from 'socket.io-client';


export const CTX = React.createContext();

const initState = {
    general: [
        // {from: 'aaron', msg: ': hello'},
        // {from: 'arnold', msg: ': hello'},
        // {from: 'archer', msg: ': hello'},
    ],
    // topic2: [
    //     {from: 'aaron', msg: ': hello'},
    //     {from: 'aaron', msg: ': hello'},
    //     {from: 'aaron', msg: ': hello'},

    // ]
}

function reducer(state, action) {
    const { from, username, msg, topic } = action.payload;
    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            return {    
                ...state,
                [action.payload.topic]: [
                    ...state[topic],
                    {
                        from: from, 
                        username: username,
                        msg: msg
                    }
                ]
            }
        default:
            return state;
    }
}

let socket;

function sendCheckAction(value) {
    socket.emit('chat message', value);
}

export default function Store(props) {

    const [allChats, dispatch] = React.useReducer(reducer, initState);

    if(!socket) {
        socket = io(':3001');
        socket.on('chat message', function(msg) { 
            dispatch({type:'RECEIVE_MESSAGE', payload: msg});
        });
    }

    // const user = props.name + Math.random(100).toFixed(2);
    const user = '';

    return (
        <CTX.Provider value={{allChats, sendCheckAction, user}}>
            {props.children}
        </CTX.Provider>
    );
}
