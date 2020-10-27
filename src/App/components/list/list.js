import React, { Component } from 'react';
import Student from '../student/student';
import './list.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state={
    studentList: [{id: 1, name: 'test'}, {id: 2, name: 'test'},{id: 3, name: 'test'}, {id: 4, name: 'test'},
    {id: 8, name: 'test'}, {id: 7, name: 'test'},{id: 6, name: 'test'}, {id: 5, name: 'test'},
    {id: 11, name: 'test'}, {id: 21, name: 'test'},{id: 13, name: 'test'}, {id: 24, name: 'test'},
    ,{id: 16, name: 'test'}, {id: 25, name: 'test'}],
    };
    }

  render(){
    return(
      <div>
        <div>学员列表</div>
        <div className="studentlist">
          { this.state.studentList.map(item => 
            <Student key={item.id} id={item.id} name={item.name} className="student"/>)}
            <button>+添加学员</button>
        </div>
      </div>
    );
  };
};

export default List;