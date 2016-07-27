import React from 'react'
import ReactDOM from 'react-dom'

// es5
var HelloWorld = React.createClass({
    render: function() {
        return (
            <div>
                <h1>
                    index2
                </h1>
                <p>
                    你好, <input type="text" placeholder="输入你的名字"/>! <br/><br/>
                    现在的时间是：{this.props.date.toTimeString()}
                </p>
            </div>
        );
    }
});

setInterval(function() {
    ReactDOM.render(
        <HelloWorld date={new Date()}/>,
        document.getElementById('example2')
    );
}, 500);