
//React.createClass(object);
//render: function(){
//  return (
//
// )
// }

//props
var HelloWorld = React.createClass({
    render: function() {
        console.log('this.props = ',this.props);
        //console.log(this.state);
        console.log(this.props.date);
        return (
            <div>
                <h1>
                    index1
                </h1>
                <p>
                    你好, <input type="text" placeholder="输入你的名字"/>! <br/><br/>
                    现在的时间是：{this.props.date.toTimeString()}
                </p>
            </div>

        );
    }
});

ReactDOM.render(
    <HelloWorld date={new Date()}/>,
    document.getElementById('example1')
);
//setInterval(function() {
//    ReactDOM.render(
//        <HelloWorld date={new Date()}/>,
//        document.getElementById('example1')
//    );
//}, 500);