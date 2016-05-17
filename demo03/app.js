/**
 * Created by pangff on 16/5/5.
 */
var Activity = React.createClass({
    render: function () {
        return (
            <div style={{height:300+'px',background:'#F00000'}}>
                <h1>Activity</h1>
            </div>
        );
    }
});


var Share = React.createClass({
    componentWillMount: function () {
        console.log("Share>>>>componentWillMount")
    },
    componentDidMount: function () {
        console.log("Share>>>>componentDidMount")
    },
    componentWillReceiveProps: function () {
        console.log("Share>>>>componentWillReceiveProps")
    },
    shouldComponentUpdate: function () {
        console.log("Share>>>>shouldComponentUpdate")
        return true;
    },
    componentWillUpdate: function () {
        console.log("Share>>>>componentWillUpdate")
    },
    componentDidUpdate: function () {
        console.log("Share>>>>componentDidUpdate")
    },
    componentWillUnmount: function () {
        console.log("Share>>>>componentWillUnmount")
    },
    render: function () {
        var params = this.props.params;
        this.setProps({params:'123'});
        return (
            <div style={{height:300+'px',background:'#F23456'}}>
                <h1>Share=={params}</h1>
            </div>
        );
    }
});


var ShareRank = React.createClass({
    render: function () {
        return (
            <div style={{height:300+'px',background:'#F98928'}}>
                <h1>ShareRank</h1>
            </div>
        );
    }
});

var MyApp = React.createClass({
    getInitialState:function(){
        console.log("MyApp>>>>getInitialState")
        return {shareParams:'0'}
    },
    getDefaultProps:function(){
        console.log("MyApp>>>>getDefaultProps")
        return {shareParams:'0'}
    },
    componentWillMount: function () {
        console.log("MyApp>>>>componentWillMount")
    },
    componentDidMount: function () {
        console.log("MyApp>>>>componentDidMount")
    },
    componentWillReceiveProps: function () {
        console.log("MyApp>>>>componentWillReceiveProps")
    },
    shouldComponentUpdate: function () {
        console.log("MyApp>>>>shouldComponentUpdate")
        return true;
    },
    componentWillUpdate: function () {
        console.log("MyApp>>>>componentWillUpdate")
    },
    componentDidUpdate: function () {
        console.log("MyApp>>>>componentDidUpdate")
    },
    componentWillUnmount: function () {
        console.log("MyApp>>>>componentWillUnmount")
    },
    changeShareParam:function(){
        console.log("MyApp>>>>changeShareParam===================")
        this.setState({shareParams:'1'});
    },
    render: function () {
        return (
            <div>
                <button onClick={this.changeShareParam}>修改share参数</button>
                <Share params={this.state.shareParams}/>
                <Activity />
                <ShareRank />
            </div>
        );
    }
});

ReactDOM.render(<MyApp />, document.getElementById('example'));