import React, { Component } from 'react';

/**
 * Input and Add Button
 */
class AddSong extends Component {
   constructor(props) {
      super(props);
      this.state = {
         song: ''
      }
   }
   handleKeyDown(e) {
      if(e.key === "Enter") {
         this.handleAdd();
      }
   }
   handleAdd() {
      this.props.onAdd(this.state.song);
      this.setState({ song: ''});
   }
   render() {
      return (
         <li className="list-group-item">
            <span className="input-group">
               <input
                  type="text"
                  className="form-control"
                  placeholder="Add a Song"
                  value={this.state.song}
                  onChange={(e) => this.setState({ song: e.target.value })}
                  onKeyDown={(e) => this.handleKeyDown(e)}
               />

               <span className="input-group-btn">
                  <button
                     type="button"
                     className="btn btn-default"
                     onClick={() => this.handleAdd()}>
                     Add
                  </button>
               </span>
            </span>
         </li>
      );
   }
}

AddSong.propTypes = {
  onAdd: React.PropTypes.func,
};

export default AddSong;
