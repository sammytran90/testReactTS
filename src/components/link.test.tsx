import React from 'react'

const Link = ({ active, children, onClick }: { active: boolean, children: any, onClick: Function }) => (
    <button
        onClick={event => onClick(event)}
        disabled={active}
        style={{
            marginLeft: '4px'
        }}
    >
        {children}
    </button>
)

export default Link;