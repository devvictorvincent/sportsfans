import React from 'react';
import './style.css';
import Post from './post.js';

export default function Body() {
  return (
    <section>
         <div class="sec-header"> <h4>My Feed </h4>
         </div>
         <div class="sec-body">
        <Post
        post={{title:"Ronaldo Breaks yet another record"}} 
        sum={"Ronaldo makes history again by bcoming the first individual player to score upt to 5 goals in the fifia world cup.."}
        thumb={"https://thumbs.dreamstime.com/b/porto-portuglal-june-portugal-s-cristiano-ronaldo-team-mates-celebrate-winning-uefa-nations-league-final-wit-trophy-151963447.jpg"}/>
        <Post
        post={{title:"Argentina Beats Mexico 2:0 in group stage at the fifa world cup"}}
        sum={'The great argentina team has beat mexico 2:0 in their group stage(Group C match ealier held yestarday at the ongoing fifa world cup in qatar..'} 
        thumb={"https://assets.khelnow.com/news/uploads/2022/11/Argentina-vs-Mexico-Preview.jpg"}/>
          </div>
      </section>
  );
}
