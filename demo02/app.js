/**
 * Created by pangff on 16/5/5.
 */
var Activity = React.createClass({
    render:function() {
        return (
            <div style={{height:300+'px',background:'#F00000'}}>
                <h1>Activity</h1>
            </div>
        );
    }
});


var Share = React.createClass({

    render:function() {
        return (
            <div style={{height:300+'px',background:'#F23456'}}>
                <h1>Share</h1>
            </div>
        );
    }
});


var ShareRank = React.createClass({

    render:function() {
        return (
            <div style={{height:300+'px',background:'#F98928'}}>
                <h1>ShareRank</h1>
            </div>
        );
    }
});

 var MyApp = React.createClass({

    render:function() {
        return (
            <div>
                <Share/>
                <Activity />
                <ShareRank />
            </div>
        );
    }
});

ReactDOM.render(<MyApp />,document.getElementById('example'));