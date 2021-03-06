import Tween from 'rc-tween-one';
import React from 'react';
import ReactDom from 'react-dom';

function Demo() {
  return (
    <div style={{ position: 'relative', height: 500 }}>
      <Tween
        animation={[
          { x: 200, delay: 1000, y: '300', blur: '10px', duration: 500, type: 'from' },
          { x: 400, y: 0 },
          { delay: 1000, y: 300, type: 'from' },
        ]}
        style={{ opacity: 1, width: 100, transform: 'translateY(100px)' }}
      >
        <div>执行动效</div>
      </Tween></div>);
}

ReactDom.render(<Demo />, document.getElementById('__react-content'));
