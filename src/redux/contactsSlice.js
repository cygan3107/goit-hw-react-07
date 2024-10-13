import { createSlice } from "@reduxjs/toolkit";

const contactsInitial = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitial,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    prepare({ name, number, id }) {
      return {
        payload: {
          name,
          number,
          id,
        },
      };
    },
    deleteContact(state, action) {
      const index = state.findIndex((person) => person.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
