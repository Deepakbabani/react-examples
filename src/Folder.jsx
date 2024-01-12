import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";

const Folder = ({ data }) => {
  const [expand, setExpand] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [addData, setAddData] = useState(false);
  const [addedValue, setAddedValue] = useState("");
  const [editedValue, setEditedValue] = useState("");
  const [folderData, setFolderData] = useState(data);
  const handleGenIds = (withoutIdData) => {
    if (withoutIdData.isFolder) {
      return {
        ...withoutIdData,
        id: Math.random(),
        items: withoutIdData.items.map((element) => {
          return handleGenIds(element);
        }),
      };
    } else {
      return { ...withoutIdData, id: Math.random() };
    }
  };

  const handleAdd = (value, parentId, orgData, isFolder) => {
    if (orgData.id === parentId) {
      let temArr = orgData.items.push({
        name: value,
        id: Math.random(),
        items: [],
        isFolder,
      });
      return {
        ...orgData,
        items: temArr,
      };
    } else {
      return {
        ...orgData,
        items: orgData.items.map((element) => {
          return handleAdd(value, parentId, element, isFolder);
        }),
      };
    }
  };

  const handleEdit = (parentId, orgData, value) => {
    if (orgData.id === parentId) {
      return {
        ...orgData,
        name: value,
      };
    } else {
      return {
        ...orgData,
        items: orgData.items.map((element) => {
          return handleEdit(parentId, element, value);
        }),
      };
    }
  };

  const handleSetAddData = (type) => {
    setAddData(type);
    setExpand(true);
  };

  const handleSetEditedValue = (value) => {
    setEditedValue(value);
  };

  useEffect(() => {
    setFolderData(handleGenIds(folderData));
  }, []);

  if (folderData.isFolder) {
    return (
      <div>
        <span className="icon" onClick={() => setExpand(!expand)}>
          <FeatherIcon
            icon={`chevron-${expand ? "up" : "down"}`}
            height="15"
            width="15"
          />
        </span>
        <span className="">
          (
          <FeatherIcon icon={`folder`} height="15" width="15" />)
        </span>
        <span className="title" onClick={() => setIsClicked(!isClicked)}>
          {folderData?.name}
        </span>
        {isClicked && (
          <>
            <span
              className="pLeftIcon"
              onClick={() => handleSetAddData("file")}
            >
              <FeatherIcon icon={`file-plus`} height="15" width="15" />
            </span>
            <span
              className="pLeftIcon"
              onClick={() => handleSetAddData("folder")}
            >
              <FeatherIcon icon={`folder-plus`} height="15" width="15" />
            </span>
          </>
        )}
        {expand && addData && (
          <div className="pLeft">
            <input onChange={(e) => setAddedValue(e.target.value)} />
            <span
              style={{
                paddingLeft: "10px",
              }}
              onClick={() => {
                handleAdd(
                  addedValue,
                  folderData.id,
                  folderData,
                  addData == "folder"
                );
                setAddData(false);
              }}
            >
              <FeatherIcon icon={`check`} height="18" width="18" />
            </span>
          </div>
        )}
        {expand &&
          folderData.items.map((item) => {
            return (
              <div
                key={item.id}
                className="pLeft"
                style={{ paddingTop: "2px" }}
              >
                <Folder data={item} />
              </div>
            );
          })}
      </div>
    );
  } else {
    return (
      <div>
        <span>
          (
          <FeatherIcon icon={`file`} height="15" width="15" />)
        </span>
        {editedValue ? (
          <input
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
        ) : (
          <span className="titleFile" onClick={() => setIsClicked(!isClicked)}>
            {folderData?.name}
          </span>
        )}
        {isClicked && (
          <>
            {editedValue ? (
              <span
                className="pLeftIcon"
                onClick={() => {
                  let r = handleEdit(folderData?.id, folderData, editedValue);
                  setFolderData(r);
                  setEditedValue("");
                }}
              >
                <FeatherIcon icon={`check`} height="15" width="15" />
              </span>
            ) : (
              <span
                className="pLeftIcon"
                onClick={() => handleSetEditedValue(folderData?.name)}
              >
                <FeatherIcon icon={`edit`} height="15" width="15" />
              </span>
            )}

            {/* <span className="pLeft" onClick={() => handleSetAddData("folder")}>
              <FeatherIcon icon={`folder-plus`} height="15" width="15" />
            </span> */}
          </>
        )}
      </div>
    );
  }
};

Folder.propTypes = {
  data: PropTypes.any,
};

export default Folder;
