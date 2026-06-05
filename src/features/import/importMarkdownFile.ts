export async function importMarkdownFile(file: File): Promise<string> {
  return file.text();
}
