import React from 'react'

export default function Button(props) {
    return (
        <button>
            {props.children && <span>{props.children}</span>}
        </button>
    )
}
