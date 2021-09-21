import React, { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import config from "../../config";
import Sidebar from "../Sidebar/Sidebar";
import FileExplorer from "../FileExplorer/FileExplorer";
import FileUploadModal from "../FileUploadModal/FileUploadModal";
import FolderCreationModal from "../FolderCreationModal/FolderCreationModal";
import SettingsModal from "../SettingsModal/SettingsModal";

function App() {
  const [explorerPath, setExplorerPath] = useState(""); // Current file explorer path
  const [doRefresh, refreshExplorer] = useState(true);

  const [fileUploadOpen, setFileUploadOpen] = useState(false);
  const [folderCreatorOpen, setFolderCreatorOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const idToken = config.idToken;
  const profile = {
    name: "Library Browser",
    imageUrl:
      "https://winaero.com/blog/wp-content/uploads/2018/12/file-explorer-folder-libraries-icon-18298.png",
    email: "info@fuel-compliance.com",
  };

  return (
    <div className="App">
      <nav>
        <Sidebar
          profile={profile}
          openFileUpload={() => setFileUploadOpen(true)}
          openFolderCreator={() => setFolderCreatorOpen(true)}
          openSettings={() => setSettingsOpen(true)}
        />
      </nav>
      <section className="app-content">
        <FileExplorer
          idToken={idToken}
          profile={profile}
          setExplorerPath={setExplorerPath}
          doRefresh={doRefresh}
          didRefresh={() => refreshExplorer(false)}
        />
      </section>
      <FileUploadModal
        open={fileUploadOpen}
        closeModal={() => {
          setFileUploadOpen(false);
          refreshExplorer(true);
        }}
        path={explorerPath}
        onSuccess={() => {
          setFileUploadOpen(false);
          refreshExplorer(true);
        }}
      />
      <FolderCreationModal
        open={folderCreatorOpen}
        closeModal={() => setFolderCreatorOpen(false)}
        path={explorerPath}
        onSuccess={() => {
          setFolderCreatorOpen(false);
          refreshExplorer(true);
        }}
      />
      <SettingsModal
        open={settingsOpen}
        closeModal={() => setSettingsOpen(false)}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
