export default function Page() {
  return (
    <div>
      <h1>Upload</h1>
      <p>Upload a file</p>
      <form action="/api/upload" method="post" encType="multipart/form-data">
        <input type="file" name="file" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
