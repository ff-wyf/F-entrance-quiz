import React, {Component} from 'react';
import axios from 'axios';
import Student from '../student/student';
import './list.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/studentList").then(res =>
    this.setState({
      studentList: res.data,
    })
    );
  }

  render() {
    return (
      <div>
        <div>学员列表</div>
        <div className="studentList">
          {this.state.studentList.map(item => <Student key={item.id} id={item.id} name={item.name} className="student"/>)}
          <button className="button">+添加学员</button>
        </div>
      </div>
    );
  };
};

export default List;