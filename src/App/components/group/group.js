import React, { Component } from 'react';
import Student from '../student/student';
import './group.scss';

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: [
      {groupid: 1, studentlist: [{id: 1, name: 'test'}, {id: 2, name: 'test'}]},
      {groupid: 2, studentlist: [{id: 3, name: 'test'}, {id: 4, name: 'test'}]}
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.group.map((item) => {
          <div>
            <div>{`${item.groupid}组`}</div>
            {item.studentlist.map((stu) => {
              <Student key={stu.id} id={stu.id} name={stu.name}/>
            })}
          </div>
        })}
      </div>
    );
  }
};

export default Group;
