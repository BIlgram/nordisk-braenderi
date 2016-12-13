import React, {Component} from 'react';
import Navigation from '/imports/ui/components/Navigation.jsx';
import Flashes from '/imports/ui/components/Flashes.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children, location} = this.props;

        return (
            <div className="app">
                <Flashes source={location}/>
                <section>


                    <Navigation/>

                    <main>
                        {children}
                    </main>
                </section>
            </div>
        );
    }
}

export default App;