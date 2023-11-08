import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";

// eslint-disable-next-line react/prop-types
export const DeleteArticle = ({ id, imageUrl }) => {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "Articles", id));
      toast("Article deleted successfully", { type: "image" });
      const storageRef = ref(storage, imageUrl);
      await deleteObject(storageRef);
    } catch (err) {
      console.log(err);
      toast("Error deleting article", { type: "error" });
    }
  };

  return (
    <div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
