import React, {Component} from 'react'

export const nullBike = {
    bike: {}
}

const PortfolioContext = React.createContext({
    bike: nullBike,
    error: null,
    setError: () => {
    },
    clearError: () => {
    },
    setBike: () => {
    },
    clearBike: () => {
    },
    removeNote: () => {
    },
    removePosition: () => {
    },
})

export default PortfolioContext

export class BikeProvider extends Component {
    state = {
        bike: nullBike,
        error: null,
    };

    setBike = bike => {
        this.setState({bike})
    }

    clearBike = () => {
        this.setBike(nullBike)
    }

    removeNote = noteId => {
        let source_bike = this.state.bike
        const notes = source_bike.notes.filter(note => {
            return note.note_id !== parseInt(noteId)
        })
        const bike = {
                geometry: source_bike.geometry,
                make: source_bike.make,
                mrf_bike_id: source_bike.mrf_bike_id,
                model: source_bike.model,
                notes: notes,
                positions: source_bike.positions,
                user_bike_id: source_bike.user_bike_id,
                year: source_bike.year
        }
        this.setState({bike})
    }

    removePosition = positionId => {
        let source_bike = this.state.bike
        const positions = source_bike.positions.filter(pos => {
            console.log(pos.position_id)
            console.log(positionId)

            return pos.position_id !== parseInt(positionId)
        })
        const bike = {
            geometry: source_bike.geometry,
            make: source_bike.make,
            mrf_bike_id: source_bike.mrf_bike_id,
            model: source_bike.model,
            notes: source_bike.notes,
            positions: positions,
            user_bike_id: source_bike.user_bike_id,
            year: source_bike.year
        }
        this.setState({bike})
    }

    setError = error => {
        console.error(error)
        this.setState({error})
    }

    clearError = () => {
        this.setState({error: null})
    }

    render() {
        const value = {
            bike: this.state.bike,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBike: this.setBike,
            clearBike: this.clearBike,
            removeNote: this.removeNote,
            removePosition: this.removePosition,
        }
        return (
            <PortfolioContext.Provider value={value}>
                {this.props.children}
            </PortfolioContext.Provider>
        )
    }
}
