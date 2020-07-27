import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
const {
  IconButton,
  Icon,
  List,
  ListItem,
  ListItemSecondaryAction,
  Paper,
} = MaterialUI;
const saves = localforage.createInstance({ name: "saves" });
export default (props: { onSelect: (saveName: string) => void }) => {
  const [lst, setLst] = useState([]);
  const load = async () => {
    const lst = [];
    for (const s of await saves.keys()) {
      lst.push(s);
    }
    setLst(lst);
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <div
      style={{ margin: 10 }}
      onTouchMove={(e: React.TouchEvent) => e.nativeEvent.stopPropagation()}
    >
      <h1>UI先随便凑合一下</h1>
      <IconButton
        onClick={async () => {
          await saves.setItem(prompt() || uuid(), undefined);
          load();
        }}
      >
        <Icon>add</Icon>
      </IconButton>
      <List>
        {lst.map((x) => (
          <ListItem
            component={Paper}
            elevation={4}
            onClick={() => props.onSelect(x)}
            button
            key={x}
            style={{
              marginBottom: 10,
              height: "10em",
            }}
          >
            {x}
            <ListItemSecondaryAction>
              <IconButton
                onClick={async () => {
                  await saves.removeItem(x);
                  load();
                }}
              >
                <Icon>delete</Icon>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
