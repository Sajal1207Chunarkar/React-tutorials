import React from 'react'
import ComponentA from './ComponentA';

function LogicalOr() {
    const a=10, b=20;
  return (
    <div>
        {
            a<b||
            <>
            <h1>from LogicalOr</h1>
            <ComponentA/>
            </>
        }

    </div>
  )
}

export default LogicalOr