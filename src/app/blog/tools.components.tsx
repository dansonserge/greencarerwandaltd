import ImageTool from "@editorjs/image";
import NestedList from "@editorjs/nested-list";
import Table from "@editorjs/table";
import Underline from "@editorjs/underline";

export const tools = {
  image: {
    class: ImageTool,
    config: {
      endpoints: {
        byFile: "https://api.cloudinary.com/v1_1/dioamniv8/image/upload", // Your backend file uploader endpoint
        byUrl: "https://api.cloudinary.com/v1_1/dioamniv8/image/upload", // Your endpoint that provides uploading by Url
      },
      field: "file",
      params: {
        upload_preset: "greencare", // Your upload preset name
      },
    },
  },
  list: NestedList,
  table: Table,
  underline: Underline,
};
