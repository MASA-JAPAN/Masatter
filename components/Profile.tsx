import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { upsertUser } from "../utils/firebaseUtil";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

export default function Profile() {
  const [firstNameValue, setFirstNameValue] = React.useState("");
  const [lastNameValue, setLastNameValue] = React.useState("");
  const [discriptionValue, setDiscriptionValue] = React.useState("");
  const [imgSrc, setImgSrc] = React.useState("");

  const handleOnchangeFirstName = (e: any) => {
    setFirstNameValue(e.target.value);
  };

  const handleOnchangeLastName = (e: any) => {
    setLastNameValue(e.target.value);
  };

  const handleOnchangeDescription = (e: any) => {
    setDiscriptionValue(e.target.value);
  };

  const handleOnSubmit = () => {
    upsertUser({
      id: "testUserId",
      firstName: firstNameValue,
      lastName: lastNameValue,
      description: discriptionValue
    });
  };

  const handleChangeFile = (e: any) => {
    let createObjectURL = (window.URL || window.webkitURL).createObjectURL;
    const files = e.target.files;
    const imageUrl = files.length === 0 ? "" : createObjectURL(files[0]);
    setImgSrc(imageUrl);
  };

  return (
    <div>
      <div className="profileCard">
        <div className="profilePicture">
          <label htmlFor="profilePictureInput">
            <IconButton component="span">
              <Avatar
                src={imgSrc}
                style={{
                  margin: "10px",
                  width: "300px",
                  height: "300px"
                }}
              />
            </IconButton>
          </label>
          <input
            id="profilePictureInput"
            accept="image/*"
            type="file"
            onChange={handleChangeFile}
          />
        </div>
        <div className="inputForm">
          <div className="input">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              onChange={e => handleOnchangeFirstName(e)}
            />
          </div>
          <div className="input">
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              onChange={e => handleOnchangeLastName(e)}
            />
          </div>
          <div className="input">
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows="4"
              variant="outlined"
              onChange={e => handleOnchangeDescription(e)}
            />
          </div>
          <div className="input">
            <Button
              variant="contained"
              color="primary"
              onClick={handleOnSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <style jsx>{`
        #profilePictureInput {
          display: none;
        }
        .profileCard {
          position: absolute;
          width: 70%;
          height: 70%;
          left: calc(50% - 70% / 2);
          top: calc(50% - 70% / 2);

          background: #ffffff;
          border: 1px solid #999999;
          box-sizing: border-box;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 14px;

          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .profilePicture {
          left: calc(50% - 356px / 2 - 232px);
          top: calc(50% - 354px / 2);

          margin: auto;
        }
        .inputForm {
          margin: auto;
        }
        .input {
          margin: 10px;
        }
      `}</style>
    </div>
  );
}
