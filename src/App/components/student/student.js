import React, { Component } from 'react';

class Student extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="student">{`${this.props.id}.${this.props.name}`}</div>
    );
  }
}

export default Student;