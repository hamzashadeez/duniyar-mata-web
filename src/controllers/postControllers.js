import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export const getAllPosts = async () => {
  const tempData = [];
  const q = query(collection(db, "posts"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      tempData.push(doc.data());
    });
  });

  return tempData;
};

export const getPostsByGroup = async (group_id) => {
  const tempData = [];
  const q = query(collection(db, "posts"), where("grpup_id", "==", group_id));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      tempData.push(doc.data().name);
    });
    console.log("Current tempData in CA: ", tempData.join(", "));
  });
};
