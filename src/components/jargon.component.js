import React from 'react';
import { connect } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../reducers/actions/favorite.action';

class JargonList extends React.Component {

    state = {
        showFavorites: false
    }

    render() {
        if (this.state.showFavorites) {
            return (
                <div>
                    <h1>
                        JS Jargon
                    </h1>
                    <div>
                        <button onClick={() => { this.toggleJargon() }} > Show Jargon</button>
                    </div>
                    <div>
                        {this.props.favorites.map((f, index) => {
                            return (
                                <div key={index}>
                                    <h1> {f.name}</h1>
                                    <p> {f.description}</p>
                                    <button onClick={() => this.props.dispatch(removeFromFavorite(f.name))}>
                                        Remove from favorites
                                    </button>

                                </div>
                            );
                        })}
                    </div>
                </div>
            )
        }
        else
            return (
                <div>
                    <h1>
                        JS Jargon
                    </h1>
                    <div>
                        <button onClick={() => { this.toggleFavorites() }} >
                            Show Favorites
                        </button>
                    </div>
                    <hr />
                    <div className="table-div">
                        {this.props.jargons.map((j, index) => {
                            return (
                                <div key={index} className="row-div">
                                    <div className="cell-div"> {j.name} </div>
                                    <div className="cell-div">{j.description}</div>
                                    <div className="cell-div">
                                        <button onClick={() => this.props.dispatch(addToFavorite({ name: j.name, description: j.description }))}>
                                            Add to favorites
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )
    }

    toggleFavorites() {
        this.setState({ showFavorites: true });
    }
    toggleJargon() {
        this.setState({ showFavorites: false });
    }

}

const mapStateToProps = state => {
    return {
        jargons: state.jargons,
        favorites: state.favorites
    };
};


export default connect(mapStateToProps, null)(JargonList);
