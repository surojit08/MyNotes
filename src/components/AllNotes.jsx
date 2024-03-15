import { Button, Modal, Textarea, TextInput } from "@mantine/core";
import { PlusIcon, Search } from "lucide-react";
import { useState } from "react";
import NoRecordsFound from "./NoRecordsFound.jsx";

const AllNotes = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const closeModal = () => setIsModalOpened(false);
  const openModal = () => setIsModalOpened(true);
  return (
    <div className={"flex flex-col w-full"}>
      <div
        id={"note_list_action"}
        className={"flex justify-end w-full gap-x-2"}
      >
        <Button variant="default">
          <Search size="14" />
        </Button>{" "}
        <Button
          color="blue"
          variant="filled"
          leftSection={<PlusIcon size="14" />}
          onClick={openModal}
        >
          New
        </Button>
      </div>
      <div id={"note_list_body"} className={"flex grow  items-center justify-center"}>
        <NoRecordsFound message={"No notes found"}/>
      </div>

      <Modal
        opened={isModalOpened}
        onClose={closeModal}
        title={"Add Note"}
        closeOnClickOutside={false}
        size={"lg"}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <AddNewNote onCancel={closeModal} />
      </Modal>
    </div>
  );
};

export default AllNotes;

const AddNewNote = ({ onCancel }) => {
  return (
    <div>
      <form className={"flex flex-col gap-y-2"}>
        <TextInput label="Title" placeholder="Enter title" required />
        <Textarea
          label="Content"
          placeholder="Enter content"
          autosize
          required
          maxRows={7}
          minRows={7}
        />
        <div className={"flex justify-start mt-3 gap-x-2"}>
          <Button color="blue" variant="filled">
            Save
          </Button>
          <Button variant="default" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
