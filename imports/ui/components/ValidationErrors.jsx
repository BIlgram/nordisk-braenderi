import React, {Component} from "react";

class ValidationErrors extends Component {
    constructor(props) {
        super(props);

        this.names = {
            name: 'Navn',
            abv: 'Alkoholprocent',
            process : 'Produktionsprocess',
        };

        this.translations = {
            required: ' skal være udfyldt',
            minString: ' skal være udfyldt',
            expectedNumber: ' skal være et tal',
            minCount: ' skal have minimum et trin',
        };
    }

    translateErrors() {
        const {errors} = this.props;

        let result = [];

        errors.errors.forEach(error => {
            if (!this.names[error.name] || !this.translations[error.type])
                console.log(error.name, error.type);

            result.push(this.names[error.name] + this.translations[error.type]);
        });

        return result;
    }

    render() {
        const {errors} = this.props;

        if (errors) {
            let errors = this.translateErrors();

            return (
                <div className="input-errors">
                    <ul>
                        {errors.map((error, index) => <li key={'error_' + index}>{error}</li>)}
                    </ul>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default ValidationErrors;