import React, {Component} from 'react';
import {Link} from 'react-router';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <h1>Nordisk Brænderi</h1>

                <ul>
                    <li>
                        <span>Produktion</span>
                        <ul>
                            <li><Link to="/batches">Oversigt</Link></li>
                            <li><Link to="/batches/create">Opret</Link></li>
                        </ul>
                    </li>
                    <li>
                        <span>Opgørelser</span>
                        <ul>
                            <li><Link to="/">Årsopgørelse</Link></li>
                            <li><Link to="/">Kvartalsopgørelse</Link></li>
                            <li><Link to="/">Månedsopgørelse</Link></li>
                        </ul>
                    </li>
                    <li>
                        <span>Administration</span>
                        <ul>
                            <li><Link to="/">Brugere</Link></li>
                            <li><Link to="/spirits">Spiritustyper</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;