import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReturnedDebits } from '../actions';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class ReturnedDebitsIndex extends Component {

  componentDidMount() {
    this.props.fetchReturnedDebits();
  }

  renderReturnedDebits() {
    console.log(this.props)
    return _.map(this.props.returnedDebits, returnedDebit => {
      return (
        <ListGroupItem key={returnedDebit._id}>
          <h3>Debit Reference: {returnedDebit.ref}</h3>
          <h3>Debit transaction Code: {returnedDebit.transCode}</h3>
          <h3>Debit Return Code: {returnedDebit.returnCode}</h3>
        </ListGroupItem>
        );
    });
  }

  render() {
    return  (
      <div>
      <h3>Returned Debits List</h3>
      <ListGroup>
        {this.renderReturnedDebits()}
      </ListGroup>
    </div>
   );
  }
}

function mapStateToProps(state) {
  return { returnedDebits: state.returnedDebits };
}

export default connect(mapStateToProps, { fetchReturnedDebits })(ReturnedDebitsIndex);