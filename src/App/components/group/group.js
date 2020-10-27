import React, {Component} from 'react';
import axios from "axios";
import Student from '../student/student';
import './group.scss';

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/groupList").then(res =>
      this.setState({
        group: res.data,
      })
    );
  }

  render() {
    return (
      <div>
        {this.state.group.map((item) =>
          <div key={item.groupId} className="container">
            <div className="title">{`${item.groupId}组`}</div>
            <div className="studentList">
              {item.studentList.map((stu) =>
                <Student key={stu.id} id={stu.id} name={stu.name} className="student"/>
              )}
            </div>

          </div>
        )}
      </div>
    );
  }
};

export default Group;
