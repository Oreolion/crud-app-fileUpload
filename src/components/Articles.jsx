import { useEffect } from "react";
import { useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { DeleteArticle } from "./DeleteArticle";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);

  return (
    <div>
      {articles.length === 0 ? (
        <p>No Articles Found!</p>
      ) : (
        articles.map(({ id, title, description, imageUrl, createdAt }) => {
          return (
            <div className="border mt-3 p-3 bg-light" key={id}>
              <div className="row">
                <div className="col-3 ">
                  <img
                    src={imageUrl}
                    alt="title"
                    style={{ height: 180, width: 180 }}
                  />
                </div>
                <div className="col-9 ps-3">
                  <h2>{title}</h2>
                  <p>{createdAt.toDate().toDateString()}</p>
                  <h4>{description}</h4>
                  <DeleteArticle id={id} imageUrl={imageUrl} />
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Articles;
