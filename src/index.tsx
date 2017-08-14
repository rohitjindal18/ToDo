import * as ReactDOM from 'react-dom';
import * as React from 'react';

class Hello extends React.PureComponent {
    render() {
        return (
            <div>Rohi 12</div>
        );
    }
}
ReactDOM.render(<Hello />, document.getElementById('app'));