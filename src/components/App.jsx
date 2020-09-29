import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
import LanguageSelector from "./LanguageSelector";

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
                <LanguageSelector onLanguageChange={this.onLanguageChange}/>

                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value={"red"}>
                        <UserCreate/>
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;