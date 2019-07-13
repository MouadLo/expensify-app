// High Order Component (HOC) - A Component (HOC) that renders a nother component
// Reyse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : { props.info }</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please don't share</p> }
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAthentication = (WrappedComponent) => {
    return (props) => (
        <div>   
            {props.isAuth ?  <p>This is private info please don't share</p>: <p>Pleses login to view the info</p>  }
            <WrappedComponent {...props} />
        </div>
    ) 
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" /> , document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info="There are the details" /> , document.getElementById('app'));