import { useState } from "react";

function Profile() {
  const [login, setLogin] = useState(false);
  const user = {
    name: "임정훈",
    id: "ijh701016",
    mail: "ijh701016@ajou.ac.kr",
  };

  function handleLoginClick() {
    setLogin(!login);
  }
  return (
    <div>
      {login ? (
        <div>
          <strong>{user.name}</strong>
          <p>아이디: {user.id}</p>
          <p>메일: {user.mail}</p>
        </div>
      ) : (
        ""
      )}
      <button onClick={handleLoginClick}>
        {!login ? "로그인" : "로그아웃"}
      </button>
    </div>
  );
}

export default Profile;
