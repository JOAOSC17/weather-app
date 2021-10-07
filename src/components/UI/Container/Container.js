import React from 'react'

export default function UIContainer({children}) {
    return (
        <div style={{
            maxWidth:600,
            margin: '0px auto',
        }}>
            {children}
        </div>
    )
}
