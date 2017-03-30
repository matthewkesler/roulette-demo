import React from 'react';
import AddSong from './AddSong.js';

/**
 * List songs
 */
export default function SongList(props) {
   return (
      <ul className="list-group">
         <AddSong
            onAdd={(song) => props.onAdd(song)}
         />

         {props.songs.slice(0).reverse().map(song => {
            return <li key={song} className="list-group-item">
               <span className="badge" onClick={(e) => props.onRemove(song)}>
                  <span className="glyphicon glyphicon-remove"/>
               </span>

               <span className="name">{song}</span>
            </li>;
         })}
      </ul>
   );
}

SongList.propTypes = {
  songs: React.PropTypes.array.isRequired,
  onAdd: React.PropTypes.func,
  onRemove: React.PropTypes.func
};