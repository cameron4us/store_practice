import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateReptile extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      type:'',
      color:'',
      description:'',
      birth_date:'',
      owner:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      type: this.state.type,
      color: this.state.color,
      description: this.state.description,
      birth_date: this.state.birth_date,
      owner: this.state.owner
    };

    axios
      .post('http://localhost:8082/api/reptiles', data)
      .then(res => {
        this.setState({
          name: '',
          type:'',
          color:'',
          description:'',
          birth_date:'',
          owner:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateReptile!");
      })
  };

  render() {
    return (
      <div className="CreateReptile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Reptile List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Reptile</h1>
              <p className="lead text-center">
                  Create new reptile
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name of the Reptile'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='type'
                    name='type'
                    className='form-control'
                    value={this.state.type}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Color'
                    name='color'
                    className='form-control'
                    value={this.state.color}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this reptile'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='birth_date'
                    name='birth_date'
                    className='form-control'
                    value={this.state.birth_date}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Owner of this Reptile'
                    name='owner'
                    className='form-control'
                    value={this.state.owner}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateReptile;
