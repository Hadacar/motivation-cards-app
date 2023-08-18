// motivationCardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { user: 'Malcom X', motivationWord: 'Hayatımın erken dönemlerinde öğrendim ki eğer bir şeyi istiyorsan, biraz gürültü yapsan iyi olur' },
    { user: 'Fridtjof Nansen', motivationWord: 'Arkamda bıraktığım köprüleri yıkarım ki, ilerlemekten başka çarem kalmasın.' },
    { user: 'Warren Buffet', motivationWord: 'Diğerlerinden daha akıllı olmak zorunda değiliz. Diğerlerinden daha disiplinli olmak zorundayız' },
    { user: 'Aristo', motivationWord: 'Kalite bir eylem değil alışkanlıktır' },
    { user: 'Paulo Coelho', motivationWord: 'Bir gün kalkacaksınız ve hep hayal ettiğiniz şeyleri yapmaya vakit kalmamış olacak. Şimdi tam zamanı. Harekete geçin' },
    { user: 'Sokrates', motivationWord: 'Senin almaya cesaret edemediğin riskleri alanlar, senin yaşamak istediğin hayatı yaşarlar' },
    { user: 'Malcom X', motivationWord: 'Hayatımın erken dönemlerinde öğrendim ki eğer bir şeyi istiyorsan, biraz gürültü yapsan iyi olur' },
    { user: 'Fridtjof Nansen', motivationWord: 'Arkamda bıraktığım köprüleri yıkarım ki, ilerlemekten başka çarem kalmasın.' },
    { user: 'Warren Buffet', motivationWord: 'Diğerlerinden daha akıllı olmak zorunda değiliz. Diğerlerinden daha disiplinli olmak zorundayız' },
    { user: 'Aristo', motivationWord: 'Kalite bir eylem değil alışkanlıktır' },
    { user: 'Paulo Coelho', motivationWord: 'Bir gün kalkacaksınız ve hep hayal ettiğiniz şeyleri yapmaya vakit kalmamış olacak. Şimdi tam zamanı. Harekete geçin' },
    { user: 'Sokrates', motivationWord: 'Senin almaya cesaret edemediğin riskleri alanlar, senin yaşamak istediğin hayatı yaşarlar' },

    { user: 'Malcom X', motivationWord: 'Hayatımın erken dönemlerinde öğrendim ki eğer bir şeyi istiyorsan, biraz gürültü yapsan iyi olur' },
    { user: 'Fridtjof Nansen', motivationWord: 'Arkamda bıraktığım köprüleri yıkarım ki, ilerlemekten başka çarem kalmasın.' },
    { user: 'Warren Buffet', motivationWord: 'Diğerlerinden daha akıllı olmak zorunda değiliz. Diğerlerinden daha disiplinli olmak zorundayız' },
    { user: 'Aristo', motivationWord: 'Kalite bir eylem değil alışkanlıktır' },
    { user: 'Paulo Coelho', motivationWord: 'Bir gün kalkacaksınız ve hep hayal ettiğiniz şeyleri yapmaya vakit kalmamış olacak. Şimdi tam zamanı. Harekete geçin' },
    { user: 'Sokrates', motivationWord: 'Senin almaya cesaret edemediğin riskleri alanlar, senin yaşamak istediğin hayatı yaşarlar' },

    { user: 'Malcom X', motivationWord: 'Hayatımın erken dönemlerinde öğrendim ki eğer bir şeyi istiyorsan, biraz gürültü yapsan iyi olur' },
    { user: 'Fridtjof Nansen', motivationWord: 'Arkamda bıraktığım köprüleri yıkarım ki, ilerlemekten başka çarem kalmasın.' },
    { user: 'Warren Buffet', motivationWord: 'Diğerlerinden daha akıllı olmak zorunda değiliz. Diğerlerinden daha disiplinli olmak zorundayız' },
    { user: 'Aristo', motivationWord: 'Kalite bir eylem değil alışkanlıktır' },
    { user: 'Paulo Coelho', motivationWord: 'Bir gün kalkacaksınız ve hep hayal ettiğiniz şeyleri yapmaya vakit kalmamış olacak. Şimdi tam zamanı. Harekete geçin' },
    { user: 'Sokrates', motivationWord: 'Senin almaya cesaret edemediğin riskleri alanlar, senin yaşamak istediğin hayatı yaşarlar' },


  ];



const motivationCardSlice = createSlice({
  name: 'motivationCards',
  initialState,
  reducers: {
    addMotivationCard: (state, action) => {
      return [...state,action.payload]
    },
  },
});

export const { addMotivationCard } = motivationCardSlice.actions;

export default motivationCardSlice.reducer;
