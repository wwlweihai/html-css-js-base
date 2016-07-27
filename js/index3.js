import React from 'react'
import ReactDOM from 'react-dom'

//es6 = js2015
class HelloWorld extends React.Component{
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            show:false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){

        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
        this.setState({
            show:true
        });
    }
    componentWillReceiveProps(newprops){
        console.log('componentWillReceiveProps ,',newprops);
    }
    handleClick(){
        this.setState({
            show:true
        });
    }
    // render:function(){}
    // render(){}
    render(){
        console.log('render');
        //等同于 const show = this.state.show
        const { show } = this.state;
        let box;
        if(show){
            box = (
                <div>
                    box
                </div>
            );
        }

        return (
            <div>
                <h1>
                    index3
                </h1>
                { box }
                <div>
                    <button onClick={this.handleClick}>
                        显示盒子
                    </button>
                </div>
                <p>
                    你好, <input type="text" placeholder="输入你的名字"/>! <br/><br/>
                    现在的时间是：{this.props.date.toTimeString()}
                </p>
            </div>
        );
    }
};

setInterval(function() {
    ReactDOM.render(
        <HelloWorld date={new Date()}/>,
        document.getElementById('example3')
    );
}, 3000);