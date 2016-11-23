import React, { Component } from 'react'
import { connect } from 'react-redux'

class JobList extends Component {
  componentWillMount() {
    this.props.fetchJobs()
  }
  render() {
    const { jobs } = this.props; 
    const children = jobs.map((job) => {
      return (
        <li key={job.id}>{job.text}</li> 
      )
    });
    return (
      <ul>
        {children}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobs: () => {dispatch({type: 'FETCH_JOBS'})}
  }
}

const Job = connect(mapStateToProps, mapDispatchToProps)(JobList);

export default Job;
