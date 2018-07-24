import updateNews from '../Actions';

const reducer = (state = [], action) => {
    console.log(action);
    if (action.type === 'REFRESH_NEWS'){
      
      if(action.payload === undefined) {

        updateNews('top-headlines', {country: 'us'});

      }
    }
    if (action.type === 'SEARCH_NEWS'){

      updateNews('top-headlines', { q: action.payload.searchQuery })

    }
    if (action.type === 'RENDER_NEWS'){

      state = action.payload;

    }

    return state;

  }
  
export default reducer;