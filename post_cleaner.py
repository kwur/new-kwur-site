import html, os

for root, dirs, files in os.walk('_posts'):
	for file_ in files:
		with open(os.path.join(root, file_), 'r+', errors="surrogateescape") as f:
			# decoded = f.read().encode('utf-8', 'ignore')
			# cleaned = html.unescape(decoded)
			# f.seek(0)
			# f.write(cleaned)
			# f.truncate()
			# f.close()
			p = f.read()
			print(p.decode('utf-8', 'ignore'))

