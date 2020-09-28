import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {language: 'english'}

        this.onLanguageChange = this.onLanguageChange.bind(this)
    }

    onLanguageChange(language) {
        this.setState({
            language
        })


    }

    render() {
        return (
            <div className="ui container">
                <div>Select a language</div>
                <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
            </div>
        );
    }
}

export default App;