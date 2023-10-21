const events = new Map();

export default {
  // listen for the event (e.g., in App)
  $on(eventName, fn) {
    // check to see if the event is in events
    if (!events.has(eventName)) {
      // create one
      events.set(eventName, []);
    }
    events.get(eventName).push(fn);
  },

  // for removing event
  $off(eventName, fn) {
    throw { message: "Not implemented" };
  },

  // emit means calling the functions  (dispatch)
  $emit(eventName, data) {
    if (events.has(eventName)) {
      // execute all the functions
      events.get(eventName).forEach((fn) => fn(data));
    }
  },
};
