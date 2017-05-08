import React from 'react';

const style = {
    background:"red",
    height:"30rem",
};

export default function Red(props){
    return <div style={style} >
        {props.msg}
    </div>;
}