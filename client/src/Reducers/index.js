//import updateNews, { getSources } from '../Actions';
import { combineReducers } from 'redux';
import NewsRedcuer from './NewsReducer';
import SourcesReducer from './SourcesReducer';

const rootReducer = combineReducers({ NewsRedcuer, SourcesReducer });

// const reducer = (state = [], action) => {
//     console.log(action);
//     switch(action.type) {
//       case 'REFRESH_NEWS':
//         if(action.payload.currentPage === 'sources') {
//           getSources();
//         } else {
//           updateNews(action.payload.currentPage, {country: 'us'});
//         }
//         break
//       case 'SEARCH_NEWS':
//         if(action.payload.currentPage === 'sources') { return };  // TODO: Make a redirect to results of searching to component top-hedlines
//         updateNews(action.payload.currentPage, { q: action.payload.searchQuery });
//         break
//       case 'RENDER_NEWS':
//         state = action.payload;
//         break
//       default: 
//         return state
//     }

//     return state;

//   }
  
export default rootReducer;