  <main v-if="loading">
             <Spinner></Spinner>
         </main>
         <main v-else class="page-leaderboard">
             <div class="error-container">
                 <p class="error" v-if="err.length > 0">
                     Leaderboard may be incorrect, as the following levels could not be loaded: {{ err.join(', ') }}
                 </p>
             </div>
             <div class="board-container">
                 <table class="board">
                     <tr v-for="(ientry, i) in leaderboard">
                         <td class="rank">
                             <p class="type-label-lg">#{{ i + 1 }}</p>
                         </td>
                         <td class="total">
                             <p class="type-label-lg">{{ localize(ientry.total) }}</p>
                         </td>
                         <td class="user" :class="{ 'active': selected == i }">
                             <button @click="selected = i">
                                 <span class="type-label-lg">{{ ientry.user }}</span>
                             </button>
                         </td>
                     </tr>
                 </table>
             </div>
             <div class="player-container">
                 <div class="player">
                     <h1>#{{ selected + 1 }} {{ entry.user }}</h1>
                     <h3>{{ entry.total }}</h3>
                     <h2 v-if="entry.verified.length > 0">Verified</h2>
                     <table class="table">
                         <tr v-for="score in entry.verified">
                             <td class="rank">
                                 <p>#{{ score.rank }}</p>
                             </td>
                             <td class="level">
                                 <a class="type-label-lg" :href="score.link">{{ score.level }}</a>
                             </td>
                             <td class="score">
                                 <p>+{{ localize(score.score) }}</p>
                             </td>
                         </tr>
                     </table>
                     <h2 v-if="entry.completed.length > 0">Completed</h2>
                     <table class="table">
                         <tr v-for="score in entry.completed">
                             <td class="rank">
                                 <p>#{{ score.rank }}</p>
                             </td>
                             <td class="level">
                                 <a class="type-label-lg" :href="score.link">{{ score.level }}</a>
                             </td>
                             <td class="score">
                                 <p>+{{ localize(score.score) }}</p>
                             </td>
                         </tr>
                     </table>
                     <h2 v-if="entry.progressed.length > 0">Progressed</h2>
                     <table class="table">
                         <tr v-for="score in entry.progressed">
         <main v-else class="page-leaderboard-container">
             <div class="page-leaderboard">
                 <div class="error-container">
                     <p class="error" v-if="err.length > 0">
                         Leaderboard may be incorrect, as the following levels could not be loaded: {{ err.join(', ') }}
                     </p>
                 </div>
                 <div class="board-container">
                     <table class="board">
                         <tr v-for="(ientry, i) in leaderboard">
                             <td class="rank">
                                 <p>#{{ score.rank }}</p>
                                 <p class="type-label-lg">#{{ i + 1 }}</p>
                             </td>
                             <td class="level">
                                 <a class="type-label-lg" :href="score.link">{{ score.percent }}% {{ score.level }}</a>
                             <td class="total">
                                 <p class="type-label-lg">{{ localize(ientry.total) }}</p>
                             </td>
                             <td class="score">
                                 <p>+{{ localize(score.score) }}</p>
                             <td class="user" :class="{ 'active': selected == i }">
                                 <button @click="selected = i">
                                     <span class="type-label-lg">{{ ientry.user }}</span>
                                 </button>
                             </td>
                         </tr>
                     </table>
                 </div>
                 <div class="player-container">
                     <div class="player">
                         <h1>#{{ selected + 1 }} {{ entry.user }}</h1>
                         <h3>{{ entry.total }}</h3>
                         <h2 v-if="entry.verified.length > 0">Verified</h2>
                         <table class="table">
                             <tr v-for="score in entry.verified">
                                 <td class="rank">
                                     <p>#{{ score.rank }}</p>
                                 </td>
                                 <td class="level">
                                     <a class="type-label-lg" :href="score.link">{{ score.level }}</a>
                                 </td>
                                 <td class="score">
                                     <p>+{{ localize(score.score) }}</p>
                                 </td>
                             </tr>
                         </table>
                         <h2 v-if="entry.completed.length > 0">Completed</h2>
                         <table class="table">
                             <tr v-for="score in entry.completed">
                                 <td class="rank">
                                     <p>#{{ score.rank }}</p>
                                 </td>
                                 <td class="level">
                                     <a class="type-label-lg" :href="score.link">{{ score.level }}</a>
                                 </td>
                                 <td class="score">
                                     <p>+{{ localize(score.score) }}</p>
                                 </td>
                             </tr>
                         </table>
                         <h2 v-if="entry.progressed.length > 0">Progressed</h2>
                         <table class="table">
                             <tr v-for="score in entry.progressed">
                                 <td class="rank">
                                     <p>#{{ score.rank }}</p>
                                 </td>
                                 <td class="level">
                                     <a class="type-label-lg" :href="score.link">{{ score.percent }}% {{ score.level }}</a>
                                 </td>
                                 <td class="score">
                                     <p>+{{ localize(score.score) }}</p>
                                 </td>
                             </tr>
                         </table>
                     </div>
                 </div>
             </div>
         </main>
     `,   
