var HelloWorld = React.createClass({
    render: function() {
        return (
            <p>
                你好, <input type="text" placeholder="输入你的名字"/>! <br/><br/>
                现在的时间是：{this.props.date.toTimeString()}
            </p>
        );
    }
});

setInterval(function() {
    ReactDOM.render(
        <HelloWorld date={new Date()}/>,
        document.getElementById('example1')
    );
}, 500);