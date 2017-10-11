import * as React from 'react';

class Header extends React.Component {
    render() {
        const headerStyle = {
            position: 'fixed',
            width: '100%',
            zIndex: '1',
            top: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        };

        return (
            <header style={headerStyle}>
                {this.props.children}
            </header>
        );
    }
}

export default Header;
