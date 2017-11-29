import html, os

for root, dirs, files in os.walk('_posts'):
	for file_ in files:
		with open(os.path.join(root, file_), 'r+b') as f:

			contents = f.read().decode('utf-8','ignore')
			cleaned = html.unescape(contents)

			f.seek(0)
			f.write(str.encode(cleaned))
			f.truncate()
			f.close()

