export const addUser =
  (user) =>
  async (dispatch, getState, { getFirestore }) => {
    const db = getFirestore();
    db.collection("users").doc(`${user.id}`).set(user, { merge: true });
  };

export const addUserToCommunity =
  (user) =>
  async (dispatch, getState, { getFirestore }) => {
    const db = getFirestore();
    db.collection("community").doc(`${user.id}`).set(user, { merge: true });
  };

export const removeUserFromCommunity =
  (id) =>
  async (dispatch, getState, { getFirestore }) => {
    const db = getFirestore();
    db.collection("community").doc(id).delete();
  };
