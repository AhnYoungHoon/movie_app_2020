import React from 'react';

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }

    render(){
        const { location }=this.props;
        if(location.state){
            return (
                <div>
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                    <span>{location.state.title}</span>
                    <span>{location.state.year}</span>
                    <span>{location.state.genres}</span>
                    <h5>{location.state.summary}</h5>
                </div>
            );
        }
        else{
            return null;
        }
    }
}
export default Detail;