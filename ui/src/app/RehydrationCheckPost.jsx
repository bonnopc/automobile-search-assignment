import React, { Fragment } from "react"

export default function RehydrationCheckPost(props){
    const { _persist, loader } = props

    return (
        <Fragment>
            {
                _persist && _persist.rehydrated ?
                props.children : loader
            }
            {/* { props.children } */}
        </Fragment>
    )
}