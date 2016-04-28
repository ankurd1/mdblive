import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { connect } from 'react-redux'

const MovieListContainerImpl = React.createClass({
  render() {
    return (
      <BootstrapTable data={this.props.movies} search={true}>
        <TableHeaderColumn dataField='Title' isKey={true} dataSort={true}>Title</TableHeaderColumn>
        <TableHeaderColumn dataField='Genre' dataSort={true}>Genre</TableHeaderColumn>
      </BootstrapTable>
    )
  }
});

const mapStateToProps = (state) => {
  return {
    movies: state.displayList
      .map(name => state.movies[name])
      .filter(item => item != undefined)
  }
}

export default connect(mapStateToProps)(MovieListContainerImpl)
