import React from "react";
import { connect } from 'react-redux';
import { createPost, showAlert } from '../../redux/actions/actions';
import Alert from './Alert';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  submitHandler = e => {
    e.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      return this.props.showAlert('Post title can\'t be empty');
    }
    const newPost = {
      title, id: Date.now().toString()
    };
    this.props.createPost(newPost);
    this.setState({ title: '' });
  }

  changeInputHandler = e => {
    e.persist();
    this.setState(prev => ({
      ...prev, ...{
        [e.target.name]: e.target.value
      }
    }));
  }

  render() {    
    return (
      <form onSubmit={this.submitHandler}>

        {this.props.alert && <Alert text={this.props.alert} />}
        
        <div className="form-group">
          <label htmlFor="title">Post title</label>
          <input type="text" className="form-control" id="title" name="title"
            value={this.state.title} onChange={this.changeInputHandler} />
        </div>
        <button className="btn btn-success" type="submit">Create</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  alert: state.app.alert
})

const mapDispatchToProps = {
  createPost, showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
