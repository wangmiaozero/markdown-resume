import { downloadText } from '@/utils/download';

export function exportWordFromHtml(html: string, filename = 'resume.doc'): void {
  const doc = `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="utf-8">
<title>Resume</title>
<!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View></w:WordDocument></xml><![endif]-->
<style>
body { font-family: "Microsoft YaHei", Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #222; }
h1,h2,h3 { color: #111; }
</style>
</head>
<body>${html}</body>
</html>`;
  downloadText(doc, filename, 'application/msword;charset=utf-8');
}
