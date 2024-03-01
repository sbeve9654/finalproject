import FileButton from "./FileButton";

export default function FileSelect({ item }) {
  const files = item.files;
  return files.map((item) => (
    <FileButton key={`UserFile${item.id}`} item={item} />
  ));
}
