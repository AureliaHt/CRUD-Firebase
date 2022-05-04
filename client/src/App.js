import {useState} from "react";
import ConnectModal from "./components/ConnectModal";
import {auth} from "./utils/firebase.config";
import {onAuthStateChanged} from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div>
        <div className="app-header">
            <ConnectModal />
        </div>
        <div className="posts-container"></div>
    </div>
  );
}

export default App;
