import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        console.log(this.props);
        if(!this.props.streams) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                    initialValues = {_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}/>
            </div>
        );
    }
        
    
}

const mapsStateToProps = (state, ownProps) => {
    
    return { streams: state.streams[ownProps.match.params.id]};
};
    

export default connect(mapsStateToProps, { fetchStream, editStream })(StreamEdit);