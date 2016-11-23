import React, { Component } from 'react'
import { connect } from 'react-redux'

class Intra extends Component {
  componentWillMount() {
    this.props.fetchAbout();
  }

  render() {
    const {header, info} = this.props;
    return (
      <div>
        <h1>{header}</h1>
        <p>{info}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.about};
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAbout: () => {dispatch({type: 'FETCH_ABOUT'})}
  }
}

const About = connect(mapStateToProps, mapDispatchToProps)(Intra);

export default About;
