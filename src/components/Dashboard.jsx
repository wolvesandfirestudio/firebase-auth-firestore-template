import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
 {
    const uid = auth.currentUser?.uid;
    const unsub = onSnapshot(
      collection(db, "users", uid, "notes"),
      (snapshot) => {
        setNotes(snapshot.docs.map(doc => doc.data().text));
      }
    );
    return unsub;
  }, []);

  const handleAddNote = async () => {
    const uid = auth.currentUser?.uid;
    if (!uid) return;
    await addDoc(collection(db, "users", uid, "notes"), { text: input });
    setInput("");
  };

  return (
    <div>
      <h2>Welcome!</h2>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="New note" />
      <button onClick={handleAddNote}>Add Note</button>
      <ul>
        {notes.map((n, i) => <li key={i}>{n}</li>)}
      </ul>
    </div>
  );
}
