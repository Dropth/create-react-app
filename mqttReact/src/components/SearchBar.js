/**
 * Created by Florian on 29/11/2016.
 */
import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            searchTerm: event.target.value,
        });
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.props.getBroker(this.state.searchTerm);
        }
    }

    render() {
        return (
            <div style={SearchBar.styles.div}>
                <h3>URL du Brocker</h3>
                <input
                    onChange={this.handleInputChange}
                    onKeyPress={this.handleKeyPress}
                    style={SearchBar.styles.input}
                    value="127.0.0.1"
                />
            </div>
        );
    }
}

SearchBar.styles = {
    div: {
        margin: 30,
        textAlign: 'center',
    },
    input: {
        width: '60%',
    },
};

SearchBar.propTypes = {
    getBroker: React.PropTypes.func.isRequired,
};

export default SearchBar;

