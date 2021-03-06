import React from 'react';

class RoleSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   console.log(this.props, 'didmount');
  // }

  handleClick(event) {
    event.preventDefault();
    this.props.changeRoles(event.target.value);
  }

  render() {
    
    return (
      <div className="col-xs-12 text-center">Select Your Role!
        <div>
          <span>
            <button className='student' value = {'STUDENT'} onClick = {(event) => {this.handleClick(event)}}>Student</button>
            <button className='instructor' value = {'INSTRUCTOR'} onClick = {(event) => {this.handleClick(event)}}>Instructor</button>
          </span>
        </div>
      </div>
    )
  }
}

export default RoleSelection;
