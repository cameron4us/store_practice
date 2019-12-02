import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showReptileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reptile: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/reptiles/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showReptileDetails-API-response: " + res.data);
        this.setState({
          reptile: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowReptileDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/reptiles/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowReptileDetails_deleteClick");
      })
  };


  render() {

    const reptile = this.state.reptile;
    let ReptileItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{ reptile.name }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Color</td>
            <td>{ reptile.color }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Type</td>
            <td>{ reptile.type }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Owner</td>
            <td>{ reptile.owner }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Birth Date</td>
            <td>{ reptile.birth_date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ reptile.description }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowReptileDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Reptile List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Reptile's Record</h1>
              <p className="lead text-center">
                  View Reptile's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { ReptileItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,reptile._id)}>Delete Reptile</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-reptile/${reptile._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Reptile
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Reptile</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Reptile</button> */}

        </div>
      </div>
    );
  }
}

export default showReptileDetails;
