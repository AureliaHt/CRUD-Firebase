import {useState} from "react";
import ConnectModal from "./components/ConnectModal";
import {auth} from "./utils/firebase.config";
import {onAuthStateChanged} from "firebase/auth";
import CreatePosts from "./components/CreatePosts";
import {AiOutlineLogout} from "react-icons/ai";

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div>
        <div className="app-header">
          {user && (
            <div className="user-infos">
              <span>{user?.displayName[0]}</span> 
              <h4>{user?.displayName}</h4>
              <button><AiOutlineLogout/></button>
            </div>
          )}
          {user ? <CreatePosts/> : <ConnectModal /> }
        </div>
        <div className="posts-container"></div>
    </div>
  );
}

export default App;
